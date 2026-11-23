---
name: design-system
description: Turns a selected design direction into implementation-ready tokens and rules for color, type, spacing, geometry, motion, backgrounds, accessibility, and Arabic/RTL. Use when creating or adapting a project's visual system.
---

# Design System

Translate the selected Design Direction into tokens. Tokens make decisions consistent; they must not force every project to look alike.

## 1. Inspect first

- Reuse an existing brand or design system when it is intentional and works for the task.
- Identify the project's actual component library and platform conventions before adding new ones.
- Check fonts and assets that are already licensed and available.
- Do not introduce a second token system or component library just to make a page feel new.

## 2. Define semantic tokens

Create tokens for roles rather than scattering raw values:

- foreground: primary, secondary, muted;
- background: canvas, surface, overlay, inverse where needed;
- border: subtle, default, strong;
- brand: accent, interactive, focus;
- semantic: success, warning, danger, information;
- typography: family, weight, size, line-height, measure;
- spacing, layout, radius, depth, motion, and layer roles as required.

The number of colors, spacing steps, radii, shadows, and type families is a project decision. A compact internal tool may need a tighter scale than an editorial publication. Do not force an 8-point scale, a particular radius, two font families, or one accent color when the selected direction and content call for something else. Consistency matters more than the count.

Use `references/tokens-template.css` as a role checklist only. Replace all placeholders with project decisions before using it as runtime CSS.

## 3. Color decisions

- Derive colors from the brand, content, environment, and task. Do not rely on industry palettes as defaults.
- Specify contrast pairs and semantic meaning; color alone must not carry essential status.
- Check WCAG contrast for text and controls; target at least 4.5:1 for normal text and 3:1 for large text and essential non-text UI.
- Hover, active, and focus states must remain legible and clearly distinguishable.
- Dark and light themes are separate surface decisions. Do not invert one palette mechanically.

## 4. Typography decisions

- Choose type for the content and audience: one family may be enough for a dense operational tool; editorial and brand-led surfaces may need a deliberate display/text pairing.
- Verify glyph coverage, weights, language support, file size, licensing, and font-loading behavior before committing.
- Use type size, weight, line length, and line-height to create hierarchy. Do not rely on letter spacing for Arabic.
- Use tabular numerals where values need column alignment. Use monospace only where code or technical data benefits from it.
- Treat the pairings in `references/type-pairings.md` as examples to test, not a prescribed list.

## 5. Font loading and layout stability

- Never hide essential headings or body copy while waiting for a web font. Keep readable system fallbacks visible.
- Use metric-compatible fallbacks and `font-display: swap` or an appropriate optional strategy; preload only truly critical font files and weights.
- Avoid third-party font requests that block rendering. Self-host when practical and permitted.
- Reserve media dimensions with width/height or `aspect-ratio`. Prioritize the actual Largest Contentful Paint element; lazy-load below-the-fold media.
- Check cumulative layout shift and fallback metrics after fonts load.

## 6. Geometry, surfaces, and depth

Choose geometry and elevation according to function and brand. Sharp edges, rounded controls, hairline borders, dense tables, layered surfaces, or no visible containers may all be correct. Do not put every content unit in a card.

Pick a coherent rule for borders, radii, shadows, and backgrounds. Apply exceptions deliberately, not mechanically. Avoid gradients, blur, grain, or shadows unless they contribute to the chosen direction.

## 7. Motion

Motion should explain state, continuity, progress, or narrative—not decorate every component.

- Use short feedback for routine controls; reserve longer motion for meaningful transitions.
- Prefer transform and opacity when practical; avoid expensive layout animation.
- Respect `prefers-reduced-motion` and never make essential information depend on animation.
- Avoid constant scroll reveal, hover lift on every card, and forced transitions between peer views.

## 8. Component states and accessibility

Define relevant states for interactive components: default, hover, focus-visible, active, disabled, loading, empty, success, and error. Include permission-restricted or offline states where relevant.

Use semantic HTML, keyboard navigation, visible focus, proper labels, accessible names, minimum touch target sizing appropriate to platform, and clear error recovery. Use the existing component library when it already provides accessible behavior.

## 9. Arabic and RTL

For Arabic or bilingual interfaces, read `references/arabic-rtl.md` before layout and typography work. Validate actual mixed-direction content and variable-length strings in the browser.

## References

- `references/tokens-template.css`
- `references/type-pairings.md`
- `references/arabic-rtl.md`
