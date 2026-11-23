#!/usr/bin/env node
/**
 * Checks whether three proposed interface concepts differ structurally.
 * This validates declared layout fingerprints; it does NOT judge visual quality.
 * No third-party dependencies are required (Node.js 18+).
 */
import fs from 'node:fs';
import path from 'node:path';

const DIMENSIONS = [
  'primaryAnchor',
  'navigationModel',
  'primaryRegion',
  'contentTopology',
  'informationDensity',
  'interactionModel',
  'mediaStrategy',
  'responsiveTransformation',
];
const MIN_PAIRWISE = 4;
const MIN_RADICAL_BASELINE = 4;
const NON_STRUCTURAL_KEYS = new Set([
  'color', 'palette', 'font', 'fontFamily', 'typeface', 'radius', 'borderRadius',
  'shadow', 'gradient', 'animation', 'motionStyle', 'iconSet', 'decoration',
]);

const STOP_WORDS = new Set(['a', 'an', 'the', 'of', 'for', 'with', 'and', 'or', 'the', 'main', 'primary']);
const ALIASES = [
  [/\b(sidebar|side nav|left navigation|right navigation|left rail|right rail)\b/g, 'side navigation'],
  [/\b(topbar|top bar|header navigation)\b/g, 'top navigation'],
  [/\b(bottom nav|tab bar|bottom tabs)\b/g, 'bottom navigation'],
  [/\b(card collection|cards grid|grid of cards)\b/g, 'card grid'],
  [/\b(single column|one column|single-column)\b/g, 'one column'],
  [/\b(two column|two-column|split columns)\b/g, 'two column'],
];

function normalize(value) {
  let text = String(value ?? '').trim().toLowerCase().replace(/[-_/]+/g, ' ').replace(/[^a-z0-9\s+]/g, ' ');
  for (const [pattern, replacement] of ALIASES) text = text.replace(pattern, replacement);
  return text.replace(/\s+/g, ' ').trim();
}

function similarMeaning(a, b) {
  const left = normalize(a);
  const right = normalize(b);
  if (left === right) return true;
  const leftTokens = new Set(left.split(' ').filter((token) => token && !STOP_WORDS.has(token)));
  const rightTokens = new Set(right.split(' ').filter((token) => token && !STOP_WORDS.has(token)));
  if (!leftTokens.size || !rightTokens.size) return false;
  const intersection = [...leftTokens].filter((token) => rightTokens.has(token)).length;
  const union = new Set([...leftTokens, ...rightTokens]).size;
  return intersection / union >= 0.72;
}

function fingerprintDiff(a, b) {
  return DIMENSIONS.filter((key) => !similarMeaning(a?.[key], b?.[key]));
}

function validate(doc) {
  const errors = [];
  const warnings = [];
  if (!doc || typeof doc !== 'object' || Array.isArray(doc)) {
    return { ok: false, errors: ['Root must be a JSON object.'], warnings, details: {} };
  }
  if (!doc.project || !doc.intent) errors.push('`project` and `intent` are required.');
  const allowedIntents = new Set(['new-product', 'new-surface', 'evolutionary-redesign', 'radical-redesign']);
  if (doc.intent && !allowedIntents.has(doc.intent)) errors.push(`Unknown intent: ${doc.intent}`);
  if (!Array.isArray(doc.candidates) || doc.candidates.length !== 3) {
    errors.push('Exactly three candidates (A/B/C) are required for a substantial design exploration.');
  }
  const candidates = Array.isArray(doc.candidates) ? doc.candidates : [];
  const ids = candidates.map((x) => x?.id);
  if (new Set(ids).size !== ids.length) errors.push('Candidate ids must be unique.');
  if (!doc.selected || !ids.includes(doc.selected)) errors.push('`selected` must match one candidate id.');

  for (const candidate of candidates) {
    if (!candidate?.id || !candidate?.thesis || !candidate?.tradeoff) {
      errors.push(`Candidate ${candidate?.id ?? '(unknown)'} needs id, thesis, and tradeoff.`);
    }
    const dna = candidate?.layoutDNA;
    if (!dna || typeof dna !== 'object') {
      errors.push(`Candidate ${candidate?.id ?? '(unknown)'} is missing layoutDNA.`);
      continue;
    }
    for (const key of DIMENSIONS) {
      if (typeof dna[key] !== 'string' || !dna[key].trim()) {
        errors.push(`Candidate ${candidate.id}: \`layoutDNA.${key}\` must be a non-empty string.`);
      }
    }
    for (const key of Object.keys(dna)) {
      if (!DIMENSIONS.includes(key) || NON_STRUCTURAL_KEYS.has(key)) {
        errors.push(`Candidate ${candidate.id}: \`${key}\` is not an allowed structural dimension.`);
      }
    }
    if (!candidate.prototypeEvidence || !String(candidate.prototypeEvidence).trim()) {
      errors.push(`Candidate ${candidate.id} needs prototypeEvidence (rendered path/URL or explicit NOT AVAILABLE reason).`);
    }
  }

  const pairs = [];
  for (let i = 0; i < candidates.length; i += 1) {
    for (let j = i + 1; j < candidates.length; j += 1) {
      const diff = fingerprintDiff(candidates[i]?.layoutDNA, candidates[j]?.layoutDNA);
      const passed = diff.length >= MIN_PAIRWISE;
      pairs.push({ a: candidates[i]?.id, b: candidates[j]?.id, differingDimensions: diff, count: diff.length, passed });
      if (!passed) errors.push(`Candidates ${candidates[i]?.id} and ${candidates[j]?.id} differ in only ${diff.length}/8 structural dimensions; minimum is ${MIN_PAIRWISE}.`);
    }
  }

  if (doc.intent === 'radical-redesign') {
    if (!doc.baseline || typeof doc.baseline !== 'object') {
      errors.push('A radical redesign requires a captured `baseline` layoutDNA.');
    } else {
      const selected = candidates.find((x) => x.id === doc.selected);
      const diff = fingerprintDiff(selected?.layoutDNA, doc.baseline);
      const passed = diff.length >= MIN_RADICAL_BASELINE;
      if (!passed) errors.push(`Selected concept differs from baseline in ${diff.length}/8 dimensions; radical redesign requires ${MIN_RADICAL_BASELINE}.`);
      if (doc.baselineEvidence === undefined || !String(doc.baselineEvidence).trim()) {
        errors.push('A radical redesign requires `baselineEvidence` (route/screenshot/source and viewport).');
      }
      pairs.push({ a: doc.selected, b: 'baseline', differingDimensions: diff, count: diff.length, passed });
    }
  }

  if (doc.intent === 'evolutionary-redesign' && !doc.baseline) {
    warnings.push('Evolutionary redesign has no baseline fingerprint; preservation/change trade-offs are harder to verify.');
  }
  if (doc.referenceNotes === undefined || !String(doc.referenceNotes).trim()) {
    warnings.push('No reference notes recorded. State that research was unavailable or record the useful lessons and what was not copied.');
  }
  const chosen = candidates.find((x) => x.id === doc.selected);
  const rejectedWithoutReason = candidates.filter((x) => x.id !== doc.selected && !String(x.rejectionReason ?? '').trim());
  if (rejectedWithoutReason.length) errors.push(`Rejected candidates need a rationale: ${rejectedWithoutReason.map((x) => x.id).join(', ')}.`);
  return { ok: errors.length === 0, errors, warnings, details: { dimensions: DIMENSIONS, pairs } };
}

function selfTest() {
  const base = {
    project: 'Web Forge self-test',
    intent: 'new-product',
    selected: 'B',
    referenceNotes: 'Self-test fixtures use deliberately unrelated task models.',
    candidates: [
      { id: 'A', thesis: 'Long-form reading continuity.', tradeoff: 'Discovery is secondary.', rejectionReason: 'Not the target product.', prototypeEvidence: 'prototype-a.html', layoutDNA: { primaryAnchor: 'chapter text', navigationModel: 'inline chapter contents', primaryRegion: 'single narrow reading column', contentTopology: 'continuous sequential prose', informationDensity: 'immersive low density', interactionModel: 'resume bookmark next chapter', mediaStrategy: 'rare inline illustrations', responsiveTransformation: 'reading column with collapsible controls' } },
      { id: 'B', thesis: 'Live operations triage.', tradeoff: 'Dense and demanding.', prototypeEvidence: 'prototype-b.html', layoutDNA: { primaryAnchor: 'live incident queue', navigationModel: 'persistent workspace rail', primaryRegion: 'map beside ranked exception list', contentTopology: 'linked live records', informationDensity: 'compact high density', interactionModel: 'assign filter reroute resolve', mediaStrategy: 'operational map and status marks', responsiveTransformation: 'map switches to record-first mobile sequence' } },
      { id: 'C', thesis: 'Curated visual storytelling.', tradeoff: 'Less efficient for bulk data.', rejectionReason: 'Not the target product.', prototypeEvidence: 'prototype-c.html', layoutDNA: { primaryAnchor: 'featured visual artifact', navigationModel: 'editorial project index', primaryRegion: 'asymmetric image-led canvas', contentTopology: 'curated case-study narrative', informationDensity: 'paced spacious editorial', interactionModel: 'browse select inspect story', mediaStrategy: 'large authored project imagery', responsiveTransformation: 'ordered single-column visual story' } },
    ],
  };
  const good = validate(base);
  if (!good.ok) throw new Error(`Positive fixture failed: ${good.errors.join(' | ')}`);
  const bad = structuredClone(base);
  bad.candidates[1].layoutDNA = { ...bad.candidates[0].layoutDNA };
  const badResult = validate(bad);
  if (badResult.ok) throw new Error('Negative fixture passed although two candidates reuse the same structure.');
  const radical = structuredClone(base);
  radical.intent = 'radical-redesign';
  radical.baseline = { ...radical.candidates[1].layoutDNA };
  radical.baselineEvidence = 'existing route screenshot at desktop and mobile widths';
  const radicalResult = validate(radical);
  if (radicalResult.ok) throw new Error('Radical redesign fixture passed despite matching the baseline.');
  const cosmetic = structuredClone(base);
  cosmetic.candidates[1].layoutDNA = { ...cosmetic.candidates[0].layoutDNA, palette: 'cream-and-orange' };
  const cosmeticResult = validate(cosmetic);
  if (cosmeticResult.ok || !cosmeticResult.errors.some((x) => x.includes('palette'))) throw new Error('Cosmetic-only variation was not rejected.');
  console.log('PASS: 3-way structural divergence is enforced.');
  console.log('PASS: synonym-like labels are normalized before comparison.');
  console.log('PASS: cosmetic-only changes cannot satisfy the structural fingerprint.');
  console.log('PASS: radical redesign must differ from a captured baseline.');
}

const args = process.argv.slice(2);
if (args.includes('--help') || args.length === 0) {
  console.log('Usage: node tools/check-design-divergence.mjs <design-concepts.json>');
  console.log('       node tools/check-design-divergence.mjs --self-test');
  process.exit(args.includes('--help') ? 0 : 2);
}
if (args[0] === '--self-test') {
  try { selfTest(); } catch (error) { console.error(`FAIL: ${error.message}`); process.exit(1); }
} else {
  const inputPath = path.resolve(process.cwd(), args[0]);
  let doc;
  try { doc = JSON.parse(fs.readFileSync(inputPath, 'utf8')); }
  catch (error) { console.error(`Could not read JSON at ${inputPath}: ${error.message}`); process.exit(2); }
  const result = validate(doc);
  console.log(JSON.stringify(result, null, 2));
  process.exit(result.ok ? 0 : 1);
}
