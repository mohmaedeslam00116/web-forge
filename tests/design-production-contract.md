# Design production contract

This test contract catches the specific failure where every generated website inherits the same page skeleton with a different theme.

## Required evidence for a substantial design

- A Design Passport with a precise task thesis and actual content model.
- Three candidate layout fingerprints, each with eight structural fields.
- Three distinct low-fidelity prototypes rendered in the available project/browser environment (or explicitly NOT VERIFIED if no renderer exists).
- A passing run of `node tools/check-design-divergence.mjs design-concepts.json`.
- A selected candidate, trade-offs, and rejection reasons.
- For radical redesigns, a captured baseline fingerprint and at least four structural differences from it.
- A rendered final page checked against the selected candidate.

## Structural fields

`primaryAnchor`, `navigationModel`, `primaryRegion`, `contentTopology`, `informationDensity`, `interactionModel`, `mediaStrategy`, `responsiveTransformation`.

Cosmetic properties do not count: palette, typeface, font weight, border radius, shadow, gradient, icon set, animation, or decorative labels.

## Adversarial product cases

1. **Fiction reader:** must foreground chapter text, reading continuity, and reading controls—not an analytics dashboard.
2. **Fleet dispatch:** must foreground live exceptions, operational records, and actionable spatial information where the map changes decisions—not an editorial hero.
3. **Designer portfolio:** must foreground selected work and case-study storytelling—not a KPI dashboard or uniform feature-card grid.

The three cases should not share the same first-screen silhouette, content order, and navigation model. Shared low-level controls (buttons, focus behavior, form fields) are acceptable; shared page composition without a task reason is not.

## Failure rules

- If any pair of concepts differs in fewer than four of eight fields, the validator must fail.
- If a radical redesign has no baseline evidence, the validator must fail.
- If a radical redesign's selected structure differs from baseline in fewer than four fields, the validator must fail unless an explicit approved exception is handled outside this automated check.
- A passing JSON check is not visual approval. Review the rendered prototypes and implementation.
- A screenshot pixel diff is not a structural-diversity score. Use it for regression detection in a stable environment, then judge task and structure separately.

## Self-test

Run:

```bash
node tools/check-design-divergence.mjs --self-test
```

Expected output includes three PASS lines. The checker uses Node built-ins only and requires no new dependency.
