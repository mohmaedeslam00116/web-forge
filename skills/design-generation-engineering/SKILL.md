---
name: design-generation-engineering
description: Generates and validates three structurally and visually different design concepts before substantial frontend implementation. Use for new products, major redesigns, and repeated-template complaints.
---

# Design Generation Engineering — structure and visual world must both diverge

A successful concept round proves two different things:
1. **Structural divergence:** the page is not the same layout with different styling.
2. **Visual divergence:** the concepts do not all share the same minimal text-first visual language.

A structural checker cannot judge visual taste. A visual moodboard cannot prove task fit. Require both.

## Mandatory sequence

1. Inspect the existing repository, product, routes, real content, assets, design system, and rendered state.
2. Load `design-concept-engineering` for product context and task modeling.
3. Load `visual-art-direction` to define mode and visual-world candidates.
4. Load `brand-reference-engineering` when brand references or inspiration will materially help.
5. Load `visual-asset-direction` to plan real visual material.
6. Produce exactly three candidates using `references/design-concepts.template.json`.
7. Validate layout fingerprints using `tools/check-design-divergence.mjs`.
8. Validate visual direction using `tools/check-visual-direction.mjs`.
9. Render the three low-fidelity concepts/prototypes where a renderer exists. For Persuade/Experience, prototypes must show the planned visual anchor/media; grayscale text wireframes alone are insufficient. For Operate/Read, render the real task/content structure and any data/diagram/media planned.
10. Select the candidate that best fits the product and the brief. Implement that visual world, not the starter template.
11. Inspect the final rendered interface against both selected contracts.

## Structural contract

Keep the established eight `layoutDNA` fields: `primaryAnchor`, `navigationModel`, `primaryRegion`, `contentTopology`, `informationDensity`, `interactionModel`, `mediaStrategy`, and `responsiveTransformation`. Read `references/layout-fingerprint-contract.md`. Every concept must use specific, behavior-oriented values. Synonyms and color changes do not count as structural divergence.

For substantial new design work, all three candidates need distinct compositions. For a radical redesign, capture the old layout as a baseline and ensure the selected structure differs in at least four layoutDNA dimensions unless the user explicitly asks to preserve the shell.

## Visual direction contract

Each candidate must include a `visualDirection` object as specified in `references/visual-direction-contract.md`. The concepts must vary in visual family, ambition, and palette strategy.

- Do not produce three restrained typography-only concepts.
- For Persuade and Experience, include at least two directions with actual media composition and asset plans unless the user explicitly requests a text-only experience.
- Visual assets can be photographs, product captures, illustrations, 3D, video, charts, maps, diagrams, or material/graphic compositions; choose the right media for the content.
- A `heroVisual` must name a subject and composition, not just "image placeholder".
- A `paletteStrategy` is not a hex list: explain how color owns regions and communicates hierarchy.
- A minimal candidate is allowed, but it must compete against richer and more expressive candidates rather than silently becoming the only language offered.

## Renderer and evidence

If a browser, screenshot renderer, or prototype environment exists, render all three concepts and attach actual screenshot/preview paths. If none exists, mark `rendererAvailable: false` and disclose the exact limitation for every candidate. Never call a text description a rendered preview.

## Decision and handoff

For every candidate, record its thesis, strength, risk, cost, content fit, visual family, asset dependencies, and rejection reason when not selected. The chosen candidate becomes the source of truth for `design-direction`, `design-layout`, `design-system`, and implementation. Record intentional deviations rather than allowing the implementation to drift back to a generic shell.

## Commands

Run:

```bash
node tools/check-design-divergence.mjs --self-test
node tools/check-design-divergence.mjs design-concepts.json
node tools/check-visual-direction.mjs --self-test
node tools/check-visual-direction.mjs design-concepts.json
```

Both tools are screening gates. Human review of rendered concepts and the finished page is still mandatory.

## Completion gate

A design round fails when concepts have different layoutDNA but share one minimal/neutral visual treatment; when a visual moodboard contains no usable media/asset plan; when screenshots do not reflect the described concepts; or when the final implementation abandons the selected visual world.
