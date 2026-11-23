---
name: design-direction
description: Establishes a distinctive, evidence-based visual identity for a specific product or major interface. Use after inspecting the product and before token styling or high-fidelity implementation.
---

# Design Direction — product identity, not theme selection

A design direction is the visible consequence of product context, task hierarchy, content, and brand. It is not a moodboard label, industry palette, or list of trendy visual effects.

## Required sequence

1. Run `design-concept-engineering` for new products, new major surfaces, or generic-design complaints. Use its context ledger, design thesis, structural candidates, and anti-template challenge.
2. Inspect the existing product and Design Passport. Preserve recognizable patterns that users already understand; do not erase product identity for the sake of novelty.
3. Derive the visual direction from the chosen composition and real content. Decide what deserves emphasis, what remains quiet, and why.
4. Define the visual grammar and document it. The grammar must cover composition, hierarchy, typography, color roles, geometry, media, component use, interaction, motion, and responsive behavior as applicable.
5. Hand the selected direction to `design-layout` and `design-system`. Layout translates the content model into a page composition; the design system translates the grammar into reusable implementation rules.
6. Run `design-review` against the rendered result and the saved Design Passport.

## Direction selection rules

- Never start by selecting from a fixed list of styles, aesthetics, industries, or palettes.
- Never make three candidates that share the same wireframe and differ only in skin.
- Do not default to centered hero, bento grid, three feature cards, floating mockup, dark dashboard, gradient, glass surface, oversized radii, or universal sidebar.
- These patterns are not globally banned. Use one only when the product evidence supports it, and record the reason when it materially shapes the interface.
- Do not equate originality with usability. Familiar conventions are correct when they help users complete frequent or risky tasks.
- A product can have several surface modes. Do not force the marketing site, workspace, documentation, and reader onto one page template.
- Do not use palette changes to disguise structural sameness.

## Distinctiveness standard

A direction must be recognizable through at least two structural decisions and one product-specific content or interaction decision. Color and typography can reinforce the direction but cannot be the only evidence of it.

## Output

For substantial work, deliver:
- a concise design thesis;
- the chosen composition and why it fits;
- important rejected alternatives and why they lost;
- the functional signature or reason for omitting one;
- project-specific visual grammar;
- components/patterns to use and patterns to avoid;
- responsive and accessibility implications;
- the Design Passport location.

Do not produce a long aesthetic essay when a clear set of implementable decisions is sufficient.
