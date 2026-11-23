# Design Passport

> Keep this document beside the product code/design decisions. Update it when the product, audience, content, or constraints materially change. Do not copy a passport between unrelated products.

## 1. Context and confidence

- Product / surface:
- Version / route(s):
- Primary user(s):
- Primary job(s):
- Usage environment:
- Business / trust constraints:
- Platform / technical constraints:
- Brand / existing system constraints:
- Locale(s), language(s), direction(s):
- Observed facts:
- User-provided facts:
- Inferences:
- Unknowns and assumptions:

## 2. Product model

- Important nouns / entities:
- Important verbs / operations:
- Relationships:
- Decision points and risks:
- Real content shapes and edge cases:
- Primary success signal (qualitative or measured; do not invent data):

## 3. Design thesis

Because **[user]** needs to **[task]** under **[constraint]**, this surface organizes **[information]** around **[interaction/hierarchy]**, expressing **[credible character]**.

## 4. Composition contract

- First-viewport anchor:
- Intended eye / task path:
- Page or workspace composition:
- Navigation / orientation model:
- Content sequence and grouping:
- Density and reading measure:
- Media / data presentation:
- Responsive transformations:

## 5. Concept exploration

| Candidate | Structural premise | Strength | Trade-off | Reason accepted/rejected |
|---|---|---|---|---|
| A | | | | |
| B | | | | |
| C | | | | |

- Selected concept:
- Why it fits this product:
- Why the closest alternative lost:
- Functional signature (or why none is needed):

## 6. Visual grammar

- Hierarchy:
- Typography and language support:
- Color roles and contrast:
- Geometry, borders, surfaces, depth:
- Spacing / layout constraints:
- Media / illustration rules:
- Interaction and motion:
- Accessibility contract:
- RTL / localization contract:

## 7. Component and pattern contracts

| Component/pattern | Use when | Do not use when | Required states |
|---|---|---|---|
| | | | |

## 8. Intentional exclusions

| Rejected default/pattern | Product-specific reason | Reconsider when |
|---|---|---|
| | | |

## 9. Anti-template checks

- [ ] Grayscale/silhouette structure is purposeful without the palette.
- [ ] Relabel/swap test does not make the layout fit an unrelated product unchanged.
- [ ] First viewport reflects the actual primary task or artifact.
- [ ] Real content shapes the composition; no filler content is required to make it look designed.
- [ ] Shared components represent shared meaning/behavior.
- [ ] Different routes have different compositions when their tasks differ.
- [ ] Responsive behavior is a composition transformation, not simple shrinkage.
- [ ] Accessibility and localization implications are verified or marked not verified.

## 10. Validation evidence

- Routes and states rendered:
- Browser / version / viewport / locale / theme:
- Tasks completed:
- Accessibility checks:
- Responsive checks:
- Screenshots / traces / test output:
- Findings and changes:
- Remaining risks / unverified items:

## 11. Change log

| Date | Change | Evidence/reason | Surfaces affected |
|---|---|---|---|
| | | | |
