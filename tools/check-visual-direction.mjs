#!/usr/bin/env node
/**
 * Dependency-free visual direction gate for Web Forge.
 * Validates that visual concepts contain a real art direction and do not all
 * collapse into neutral, text-only minimalism. It is a screening tool, not
 * an aesthetic judge.
 */
import fs from 'node:fs';
import path from 'node:path';

const REQUIRED = [
  'family', 'ambition', 'paletteStrategy', 'mediaApproach', 'heroVisual',
  'graphicLanguage', 'depthAndMotion', 'signatureVisual', 'rationale'
];
const VALID_MODES = new Set(['persuade', 'operate', 'read', 'experience']);
const VALID_AMBITIONS = new Set(['restrained', 'composed', 'expressive', 'immersive']);
const VALID_PALETTES = new Set(['restrained', 'committed', 'full-palette', 'drenched', 'image-led']);
const MEDIA_NONE = /^(none|no media|text-only|none\s*[—:-])/i;
const FAMILY_WORDS = /^(modern|minimal|clean|premium|bold|beautiful|elegant|professional)$/i;

function fail(errors, message) { errors.push(message); }
function meaningful(value, min = 16) {
  return typeof value === 'string' && value.trim().length >= min && !FAMILY_WORDS.test(value.trim());
}

export function validate(data) {
  const errors = [];
  if (!data || typeof data !== 'object' || Array.isArray(data)) return ['Input must be a JSON object.'];
  const mode = String(data.surfaceMode || '').toLowerCase();
  if (!VALID_MODES.has(mode)) fail(errors, 'surfaceMode must be persuade, operate, read, or experience.');
  const candidates = data.candidates;
  if (!Array.isArray(candidates) || candidates.length !== 3) {
    fail(errors, 'Exactly three visual candidates are required.');
    return errors;
  }
  const selected = String(data.selected || '');
  if (!candidates.some(c => String(c?.id) === selected)) fail(errors, 'selected must match one candidate id.');

  const families = new Set();
  const palettes = new Set();
  const ambitions = new Set();
  let mediaBearing = 0;
  const familyLabels = [];

  for (const [index, candidate] of candidates.entries()) {
    const label = String(candidate?.id || `candidate ${index + 1}`);
    const vd = candidate?.visualDirection;
    if (!vd || typeof vd !== 'object') {
      fail(errors, `${label}: visualDirection object is missing.`);
      continue;
    }
    for (const key of REQUIRED) {
      const minLength = key === 'family' ? 3 : (key === 'ambition' || key === 'paletteStrategy' ? 5 : 18);
      if (!meaningful(vd[key], minLength)) fail(errors, `${label}: visualDirection.${key} is missing or too vague.`);
    }
    const family = String(vd.family || '').trim().toLowerCase();
    if (family) { families.add(family); familyLabels.push(`${label}=${family}`); }
    const palette = String(vd.paletteStrategy || '').trim().toLowerCase();
    if (!VALID_PALETTES.has(palette)) fail(errors, `${label}: paletteStrategy must be one of ${[...VALID_PALETTES].join(', ')}.`);
    else palettes.add(palette);
    const ambition = String(vd.ambition || '').trim().toLowerCase();
    if (!VALID_AMBITIONS.has(ambition)) fail(errors, `${label}: ambition must be one of ${[...VALID_AMBITIONS].join(', ')}.`);
    else ambitions.add(ambition);

    if (!Array.isArray(vd.worldSources) || vd.worldSources.length < 2 || vd.worldSources.some(v => !meaningful(v, 5))) {
      fail(errors, `${label}: provide at least two concrete worldSources.`);
    }
    if (!Array.isArray(vd.sourceFamilies) || new Set(vd.sourceFamilies.map(v => String(v).toLowerCase())).size < 2) {
      fail(errors, `${label}: sourceFamilies must span at least two distinct source families.`);
    }

    const noMedia = MEDIA_NONE.test(String(vd.mediaApproach || '')) || /^none\s*[—:-]/i.test(String(vd.heroVisual || ''));
    if (!noMedia) {
      mediaBearing += 1;
      if (!Array.isArray(vd.assetPlan) || vd.assetPlan.length < 1) {
        fail(errors, `${label}: media-bearing direction needs at least one assetPlan item.`);
      } else {
        vd.assetPlan.forEach((asset, n) => {
          for (const field of ['type', 'purpose', 'source', 'composition']) {
            if (!meaningful(asset?.[field], 5)) fail(errors, `${label}: assetPlan[${n}].${field} is missing.`);
          }
        });
      }
    } else {
      const reason = String(vd.rationale || '') + ' ' + String(vd.heroVisual || '');
      if (!/(because|because|primary task|reading|read|documentation|text-led|user requested|content is)/i.test(reason)) {
        fail(errors, `${label}: a no-media direction must explain why media would not serve this surface.`);
      }
    }

    if (data.rendererAvailable === true) {
      const evidence = String(candidate?.prototypeEvidence || '');
      if (!evidence || /NOT AVAILABLE/i.test(evidence)) fail(errors, `${label}: rendererAvailable is true, so provide prototypeEvidence (screenshot or preview).`);
    } else if (data.rendererAvailable === false) {
      const evidence = String(candidate?.prototypeEvidence || '');
      if (!/^NOT AVAILABLE\s*:/i.test(evidence)) fail(errors, `${label}: rendererAvailable is false; disclose NOT AVAILABLE: [reason].`);
    }
  }

  if (families.size !== 3) fail(errors, 'All three candidates must use three distinct visual families.');
  if (palettes.size < 2) fail(errors, 'Candidates are too similar in color ambition: use at least two palette strategies.');
  if (ambitions.size < 2) fail(errors, 'Candidates need at least two different ambition levels.');
  if (['persuade', 'experience'].includes(mode) && !data.userRequestedTextOnly && mediaBearing < 2) {
    fail(errors, `${mode} work requires at least two media-bearing candidates. All-text/minimal proposals are not a valid default.`);
  }
  if (data.userRequestedTextOnly === true && !String(data.textOnlyReason || '').trim()) {
    fail(errors, 'userRequestedTextOnly requires textOnlyReason from the user brief.');
  }
  return errors;
}

function candidate(id, family, ambition, palette, media, world, source, assets, hero) {
  return {
    id,
    prototypeEvidence: `artifacts/concept-${id.toLowerCase()}.png`,
    visualDirection: {
      family, ambition, paletteStrategy: palette,
      mediaApproach: media,
      heroVisual: hero,
      worldSources: world,
      sourceFamilies: source,
      graphicLanguage: 'A coherent graphic grammar tied to the cited source world, not generic thin rules.',
      depthAndMotion: 'Depth and motion are purposeful, respect reduced motion, and have a static fallback.',
      signatureVisual: 'A distinctive product-specific visual mechanism remains recognizable beyond the colors.',
      assetPlan: assets,
      rationale: 'The task and real content benefit from this visual treatment; it is not chosen as a trend.'
    }
  };
}

function selfTest() {
  const good = {
    surfaceMode: 'persuade', rendererAvailable: true, selected: 'B',
    candidates: [
      candidate('A','editorial-magazine','composed','image-led','photography and diagrams',['independent-magazines','museum-catalogues'],['print','editorial','culture'],[{type:'photography',purpose:'show-subject',source:'original',composition:'wide crop'}],'A large editorial photograph paired with a useful explanatory diagram.'),
      candidate('B','cinematic-storytelling','immersive','committed','video and 3D scene',['film-title-sequences','architectural-lighting'],['cinema','architecture','material'],[{type:'video',purpose:'show-motion',source:'original',composition:'full bleed poster fallback'}],'A full-bleed moving scene with a real product demonstration.'),
      candidate('C','illustration-led','expressive','full-palette','bespoke illustration',['scientific-atlases','contemporary-poster-art'],['science','illustration','print'],[{type:'illustration',purpose:'explain-mechanism',source:'original',composition:'large isometric scene'}],'A large bespoke illustration makes the product mechanism understandable.')
    ]
  };
  const errors = validate(good);
  if (errors.length) throw new Error(`Valid case failed: ${errors.join('; ')}`);
  const bad = structuredClone(good);
  bad.candidates.forEach(c => {
    c.visualDirection.family = 'minimal-typography';
    c.visualDirection.ambition = 'restrained';
    c.visualDirection.paletteStrategy = 'restrained';
    c.visualDirection.mediaApproach = 'none';
    c.visualDirection.heroVisual = 'none';
    c.visualDirection.assetPlan = [];
  });
  if (!validate(bad).some(e => /three distinct visual families/.test(e))) throw new Error('Duplicate-family negative test failed.');
  if (!validate(bad).some(e => /media-bearing candidates/.test(e))) throw new Error('Text-only negative test failed.');
  const weak = structuredClone(good);
  weak.candidates[0].visualDirection.assetPlan = [{type:'x',purpose:'x',source:'x',composition:'x'}];
  const weakErrors = validate(weak);
  if (!weakErrors.some(e => /assetPlan\[0\]/.test(e))) throw new Error(`Weak asset plan negative test failed: ${weakErrors.join('; ')}`);
  console.log('PASS: valid art-directed concepts');
  console.log('PASS: repeated minimal family rejected');
  console.log('PASS: text-only persuade concepts rejected');
  console.log('PASS: vague asset plan rejected');
}

if (process.argv.includes('--self-test')) {
  try { selfTest(); process.exitCode = 0; } catch (error) { console.error(error.message); process.exitCode = 1; }
} else {
  const input = process.argv[2];
  if (!input) {
    console.error('Usage: node tools/check-visual-direction.mjs <design-concepts.json> | --self-test');
    process.exitCode = 2;
  } else {
    try {
      const absolute = path.resolve(process.cwd(), input);
      const data = JSON.parse(fs.readFileSync(absolute, 'utf8'));
      const errors = validate(data);
      if (errors.length) {
        console.error(`VISUAL DIRECTION: FAIL (${errors.length})`);
        errors.forEach(e => console.error(`- ${e}`));
        process.exitCode = 1;
      } else {
        console.log('VISUAL DIRECTION: PASS');
        console.log('Three different visual families, sufficient ambition/media diversity, concrete asset plans, and required evidence were declared. Human review remains required.');
      }
    } catch (error) {
      console.error(`Could not validate ${input}: ${error.message}`);
      process.exitCode = 2;
    }
  }
}
