---
name: design-direction
description: Defines the design direction before substantial interface work by analysing the surface purpose, audience, task, content, constraints, and existing brand, then selecting a context-specific visual language. Use at the start of a new site, major redesign, or when a result feels generic.
---

# Design Direction

Choose a visual language that makes sense for this particular interface. A direction is a set of connected decisions, not a preset theme name.

## 1. Read the actual context

Record only what affects design:

- **Surface mode:** Persuade, Operate, Read, or Experience.
- **Primary job:** what the visitor must understand, decide, or complete.
- **Audience and setting:** who is using it, on what device, in what environment, with what level of expertise.
- **Behavior:** frequency of use, task criticality, time pressure, and consequences of mistakes.
- **Content shape:** prose, products, images, records, charts, forms, media, or mixed content; estimate its real density.
- **Trust and tone:** what makes the product credible, approachable, authoritative, exciting, calm, or memorable.
- **Constraints:** existing identity, platform conventions, accessibility, language/RTL, framework, performance, and available assets.

Do not invent a detailed persona when the brief does not support one. State uncertainty instead of pretending to know the audience.

## 2. Develop materially different direction hypotheses

For substantial greenfield work, create two or three internal candidates. Each candidate must differ in at least three of these dimensions:

- composition: centered, asymmetrical, split, modular, linear, immersive, or document-like;
- density: sparse, balanced, compact, or information-dense;
- hierarchy: typographic, image-led, data-led, navigation-led, or action-led;
- type character: editorial, neutral, technical, humanist, expressive, or platform-native;
- geometry: sharp, soft, modular, organic, ornamental, or nearly invisible;
- media: product capture, editorial photography, illustration, diagrams, live data, or no prominent media;
- color behavior: monochrome, tonal, high-contrast signal, material-derived, or multi-color with clear semantic roles;
- motion: still, functional, guided, expressive, or narrative.

Do not create three versions that only change colors and font names. Do not select from a fixed list of trend labels. Combine traits when that is more truthful than a single label.

Choose the direction that best balances:
1. task clarity and usability;
2. product and audience fit;
3. credibility and emotional tone;
4. distinctiveness from category clichés and from this project's other surfaces;
5. accessibility, performance, and implementation feasibility.

Do not maximize novelty. Familiar conventions may be the best choice for frequent operational tasks, commerce, forms, and safety-critical flows.

## 3. Derive the product's visual material

Find meaningful visual material in the product's real world: objects, workflows, data, places, tools, textures, terminology, or content structures. Use these as possible sources for:

- layout logic and navigation;
- image selection or illustration;
- data visualization and visual metaphors;
- shape, border, surface, and depth decisions;
- naming and microcopy.

A metaphor is useful only when it improves recognition or meaning. Avoid decorative motifs that do not help the visitor.

## 4. Define a signature through function

Choose one recognizable design move that supports the product's job. It may be a distinctive index, product selector, comparison ledger, editorial annotation system, map, workflow rail, data timeline, gallery treatment, or interaction pattern.

It must be useful and repeatable where appropriate. Do not add a decorative signature element just to satisfy this section.

## 5. Keep the intensity budget contextual

Decide where attention should peak. A marketing surface may need one persuasive first-screen moment and a strong proof point. An operational dashboard may need almost no spectacle; its strongest moment may be a clear status hierarchy or fast task flow. A reading surface may reserve emphasis for typography and navigation.

Use strong imagery, oversized type, saturated color, parallax, or complex motion only where they improve meaning. Quiet is not mandatory, and spectacle is not mandatory.

## 6. Save a project-local Design Passport

For substantial work, record the selected direction using `references/design-passport-template.md` in `DESIGN.md` or the project's established design documentation location. Include surface-specific differences when a product has Persuade, Operate, Read, and Experience surfaces.

Before a later redesign, inspect that record and current implementation. Preserve intentional decisions; change only what is needed. Do not carry the visual fingerprint into unrelated projects.

## 7. Direction quality gate

Before system or layout work, answer:

- Could this direction be pasted onto almost any unrelated product without changing its logic? If yes, it is too generic.
- Does it differ from a default AI template in composition and hierarchy, not just palette?
- Does it avoid copying a current design trend without a product reason?
- Is every distinctive choice useful, credible, and feasible?
- Can the direction be recognized from the first viewport and a few key components?

## References

- `references/design-passport-template.md`
- `references/tone-catalog.md` — visual ingredients, not a menu of mandatory styles.
- `references/product-to-direction.md` — diagnostic questions, not fixed mappings.
- `references/cross-domain-lens.md`
- `references/anti-slop.md` — contextual warnings, not universal bans.
