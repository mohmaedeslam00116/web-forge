# Layout fingerprint contract

The eight fingerprint fields describe **structural behavior**, not visual skin. Write short, specific phrases that name what a user sees and does. Avoid vague values such as "modern", "minimal", "premium", "bold", or "clean".

| Field | Must describe | Must not describe |
|---|---|---|
| `primaryAnchor` | The actual first-screen focus: artifact, decision, workspace, queue, content, or task | A color, font, generic headline, or decorative image |
| `navigationModel` | How users orient across routes, sections, or records | The color or shape of the navigation |
| `primaryRegion` | The spatial arrangement and role of major regions | Border radius, shadow, or background treatment |
| `contentTopology` | The relationship/order: sequence, linked records, comparison, collection, narrative, spatial data, live feed | The component library name |
| `informationDensity` | What remains visible, how much is chunked, and what gets secondary priority | Whether the theme is light or dark |
| `interactionModel` | The dominant user operation and its controls | Hover effects or transition style |
| `mediaStrategy` | Whether media is central, supporting, inline, absent, or data/spatial | The decorative appearance of media frames |
| `responsiveTransformation` | What structurally changes at small widths and why | Merely "stacks on mobile" unless the transformed task flow is explained |

## Valid comparison rules

- A structural field differs only when its role or behavior changes in a meaningful way.
- Synonym swaps do not count. "Left nav" and "side navigation" are the same value.
- A structural distinction must be visible in the wireframe/prototype and retained by the implementation.
- Pairwise candidate separation is a screening gate, not a quality score.
- Radical redesign comparison uses the same eight fields for baseline and selected concept.

## Example of a fake difference

Candidate A: dark background, rounded cards, purple accent, sans-serif type.  
Candidate B: cream background, square cards, orange accent, serif type.

If both still have a centered hero, three equal cards, a left sidebar, and the same content order, they are structurally the same. The fingerprint must fail.

## Example of meaningful difference

Candidate A: narrow reading column, inline contents, continuous chapter sequence, next/previous reading actions.  
Candidate B: multi-pane live records, persistent workspace navigation, spatial overview with an exception queue, assignment and filtering actions.

The user task, information model, region layout, density, and interactions differ. Color and typography are not needed to see the difference.


## Prototype evidence flag

Set `rendererAvailable` in `design-concepts.json`. If true, every candidate must include a reviewable HTTP(S) preview URL or an existing PNG/JPG/WebP screenshot path relative to the JSON file. If false, every candidate must use `NOT AVAILABLE: [specific limitation]`. A missing renderer is a disclosed limitation, not a silent pass.
