---
name: design-generation-engineering
description: Produces and verifies genuinely different web interface structures before implementation. Use for new product design, major redesigns, repeated-template complaints, or interfaces that keep looking like the same AI-generated site.
---

# Design Generation Engineering

This is Web Forge's mandatory production gate for meaningful visual work. It converts product evidence into an implemented composition. It is deliberately stricter than a style brief: a design is not considered different because its colors, font, radius, shadow, or decorative effects changed.

**Core rule:** no high-fidelity implementation begins until the chosen structure has passed a measurable divergence check. No substantial design is called complete until the rendered page has been inspected against that structure.

## When this skill is mandatory

Run it for:
- a new website, product, dashboard, reader, store, portfolio, or major application surface;
- a redesign described as new, different, fresh, radical, or not like the previous result;
- any complaint that multiple generated sites look alike or that an earlier redesign still resembles the old one;
- a new route whose content model or primary task is materially different from existing routes.

Do not run the full process for a tiny spacing, copy, or isolated component fix. Do not force novelty where a familiar pattern is required for safety, speed, user recognition, or platform convention.

## Phase 0 — Set the change intent and capture the baseline

Classify the request as one of:

- `new-product`: no meaningful existing product UI to preserve;
- `new-surface`: a new route or surface inside an existing product;
- `evolutionary-redesign`: preserve the established product grammar, but improve a defined weakness;
- `radical-redesign`: user explicitly rejects the old look or requests a fundamentally different design.

For an existing product, inspect the live/current implementation before editing. Capture at least the representative first viewport and full-page structure at the primary desktop and mobile widths. Record current routes, navigation, main regions, content hierarchy, repeated component patterns, and responsive behavior. Save a baseline fingerprint in the Design Passport.

If a previous version or screenshot is inaccessible, record that limitation. Never claim that a new design is different from an unseen baseline.

## Phase 1 — Build product evidence, not a moodboard

Use `design-concept-engineering` to create the context ledger and product model. Inspect actual repository instructions, user journeys, routes, data, content, assets, brand, existing components, and technical constraints.

Produce these concrete artefacts:

1. **Task map:** primary user, primary job, frequency/urgency, success condition, and costly failure.
2. **Domain map:** nouns, verbs, relationships, decisions, permissions, and recovery paths.
3. **Content inventory:** actual content types, realistic examples, density, lengths, edge cases, and media. Clearly mark anything illustrative.
4. **Surface map:** the purpose of each route (operate, read, persuade, explore, create, monitor, or a more accurate domain-specific label).
5. **Constraints ledger:** brand, platform, accessibility, responsive, language/RTL, performance, and delivery constraints.

Mark each statement as observed, supplied, inferred, or unknown. Do not invent research, users, metrics, or brand history.

## Phase 2 — Research references without copying them

When research/browser access is available and references would materially improve the result, inspect a small, curated set:
- two products or interfaces in the same problem domain;
- two cross-domain examples that solve an analogous information or interaction problem;
- one reference for craft, typography, motion, spatial behavior, or content presentation.

The count is a research target, not permission to pad the brief. If useful references cannot be inspected, say so. For every reference, record the specific lesson (e.g. comparison hierarchy, reading measure, incident triage, image sequencing) and what must not be copied. Never copy a complete page, brand signature, or component arrangement as a substitute for design reasoning.

## Phase 3 — Create a structural design thesis

Write one testable sentence:

> Because **[specific user]** needs to **[specific task]** under **[real constraint]**, this surface organizes **[actual information]** around **[primary interaction/hierarchy]**.

Then choose the page's dominant information model: a reading stream, record ledger, collection index, workflow, timeline, spatial model, editor, comparison, live feed, narrative, or another model supported by evidence. This describes the information; it is not a ready-made layout template.

## Phase 4 — Generate three genuinely different structures

For all substantial work, create exactly three first-pass structural candidates (A/B/C). They are not three palettes. They are three different answers to the product problem.

Each candidate must specify all eight fields below. Use the same field names in `design-concepts.json` so the validator can compare them:

| Field | What it captures | Example contrast (illustrative only) |
|---|---|---|
| `primaryAnchor` | What dominates the first viewport | chapter text / live incident queue / selected work artifact |
| `navigationModel` | How users orient and move | inline contents / spatial navigation / editorial index |
| `primaryRegion` | Geometry and placement of the main work area | single reading column / map + exception rail / image-led canvas |
| `contentTopology` | How information is organized | continuous sequence / linked records / curated narrative |
| `informationDensity` | How much information is visible and how it is chunked | immersive / compact operational / paced editorial |
| `interactionModel` | Main way the user manipulates or traverses information | next/previous / assign-and-filter / browse-and-open |
| `mediaStrategy` | Role of images, diagrams, charts, or no media | restrained inline art / live spatial map / full-bleed project images |
| `responsiveTransformation` | How the structure changes on narrow screens | reading controls collapse / map becomes record-first list / gallery becomes ordered story |

For each candidate, create:
- a one-sentence thesis;
- an annotated grayscale wireframe or layout map;
- the first-viewport region order and eye path;
- the navigation and main interaction model;
- at least one important real-content state;
- mobile transformation;
- the trade-off and reason it could fail.

**These must be rendered structural prototypes, not text descriptions alone, whenever a browser or project renderer is available.** Create them in a disposable, isolated concept area or sandbox. Reuse the project's actual content and component technology only where it helps evaluate the idea. Avoid production polish: grayscale blocks, real headings, representative content lengths, and functional navigation are enough.

Do not add all three concepts to the production app. Keep them isolated, compare them, select one, then remove the unused prototypes or retain them only when the user requests them.

### Candidate difference rules

- Every pair must differ in at least **4 of the 8** structural fields.
- A candidate cannot be counted as different based on palette, font, radius, shadow, icon set, gradient, or animation alone. Those are excluded from the fingerprint.
- If two candidates share the same first-screen silhouette, main content order, and navigation topology, revise one before implementation.
- For `radical-redesign`, the selected candidate must differ from the old baseline in at least **4 of the 8** structural fields. If that is inappropriate because the user explicitly requires preservation of the old composition, reclassify the task as `evolutionary-redesign` and record the preserved constraints; do not claim a radical redesign.
- Run `node tools/check-design-divergence.mjs design-concepts.json` before selecting the structure. Fix validation errors; do not edit the validator to force a pass.

The validator is a floor, not a design judge. Honest labels can still describe a bad concept. The human/agent review must inspect the actual wireframes and confirm that the stated differences are visible.

## Phase 5 — Select based on evidence

Compare A/B/C against the same criteria:
1. task clarity and time-to-action;
2. fit to domain objects and relationships;
3. fit to real content and edge cases;
4. product-specific identity;
5. trust, cultural fit, and brand continuity;
6. accessibility and responsive feasibility;
7. implementation and performance cost.

Choose the candidate that best serves the user, not the one that looks most unusual. Record why the nearest alternative lost. Do not ask users to choose between vague style names; show actual prototypes only when a decision genuinely belongs to them.

## Phase 6 — Turn the selected structure into a visual system

Only now define type, color, geometry, borders, depth, iconography, media art direction, and motion. Derive these from the selected structure, brand, content, and context. Do not reach for a preset like “glassmorphism”, “neo-brutalism”, “minimal SaaS”, “dark dashboard”, or “editorial” unless the evidence points there.

Define component contracts that include both **Use when** and **Do not use when**. Reuse components for shared semantics and behavior, not to force unrelated content into the same cards. Different routes in one product may share tokens while using distinct compositions.

## Phase 7 — Implement the chosen concept, not the old shell

- Keep the current framework, routing, data flow, accessibility primitives, and sound engineering unless there is evidence to change them.
- Do not preserve a generic layout shell merely because it already exists. Distinguish required application chrome from replaceable composition.
- Build the first meaningful vertical slice with real content, working navigation, primary actions, and relevant states.
- Do not fill empty space with fabricated metrics, decorative cards, fake labels, or stock illustrations.
- Keep the selected concept's structure visible in the actual DOM and component hierarchy. Do not quietly collapse it back into the previous shell during implementation.
- Record deliberate deviations from the chosen wireframe and why they were necessary.

## Phase 8 — Verify the rendered result

Use the project's browser tooling (prefer its existing Playwright setup when present). Inspect:
- first viewport and full page;
- primary desktop and narrow mobile width, plus other supported breakpoints relevant to the product;
- a realistic populated state and the most important empty/error/loading state;
- actual locale and RTL/mixed-direction content where supported;
- the primary task with real interactions.

Compare the result to the selected wireframe and baseline fingerprint. Confirm that the final page retains the structural differences, not just the new styling. Check hierarchy, content fit, overflow, clipping, focus, keyboard use, and responsive transformations.

Use Playwright visual snapshots for **regression and rendering stability**, not as a stand-alone measure of design originality. Screenshot diffs can show change; they cannot decide whether the change is meaningful or good. Keep browser/OS/font/viewport conditions stable when comparing baselines. Do not update snapshots until the changed rendering has been reviewed.

If no browser/rendering path exists, verify source structure and state clearly that visual rendering remains NOT VERIFIED. Never imply a screenshot comparison happened when it did not.

## Phase 9 — Reject cosmetic-only redesigns

For `radical-redesign`, fail the work when any of these is true:
- the same page silhouette and content order remain, with only styling changes;
- the first viewport still follows the same hero/metric-row/card-grid pattern without a product reason;
- the old navigation/content composition survives unchanged despite the redesign brief;
- the selected structural fingerprint differs from baseline in fewer than four fields;
- the rendered result no longer matches the selected concept because implementation drift restored the old shell.

When it fails, return to the composition stage. Do not “fix” it by adding a gradient, changing a font, increasing radii, or introducing more animation.

## Deliverables and completion gate

For meaningful design work, save:
- `DESIGN.md` (or the project's existing equivalent) containing the Design Passport;
- `design-concepts.json` with the three candidates, selected concept, and baseline when applicable;
- the validator output;
- screenshots or browser evidence for the selected, rendered implementation;
- a concise record of accepted/rejected alternatives and deliberate deviations.

Completion requires:
- [ ] product context and real content were inspected;
- [ ] three rendered structural candidates were considered;
- [ ] pairwise divergence validation passed;
- [ ] the chosen structure is tied to a product-specific task;
- [ ] a radical redesign differs structurally from the baseline;
- [ ] the implementation follows the selected structure;
- [ ] the rendered page was inspected or explicitly marked NOT VERIFIED;
- [ ] accessibility, responsiveness, and real interactions were checked proportionately.

Do not claim success from a passing validator alone. The validator proves descriptor separation, not aesthetic quality, usability, or browser correctness.

## References

- Figma, *Design context and AI*: https://www.figma.com/resource-library/design-context-ai/ — context and design-system knowledge need to be carried into generation.
- Cornell/Delft Design Guide, *Fish Trap Model*: https://arl.human.cornell.edu/PAGES_Delft/Delft_Design_Guide.pdf — explore alternatives at structural, typological, and formal levels before narrowing.
- *Design Behaviour and Interface Consistency in Generative No-Code Tools* (2026): https://www.mdpi.com/2073-431x/15/4/238 — reports learned design priors and gaps in reproducibility, controllability, and design variability.
- Playwright visual comparisons: https://playwright.dev/docs/test-snapshots — use for controlled rendering comparisons, not for judging product specificity.
