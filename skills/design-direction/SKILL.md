---
name: design-direction
description: Defines the visual grammar and product identity after structural design exploration. Use after design-generation-engineering has selected a composition and before detailed styling.
---

# Design Direction — skin follows structure

This skill starts **after** the product's structural concept has been explored and selected. It must not choose a trend or aesthetic preset as a substitute for a layout decision.

## Required input

Read the latest Design Passport and selected candidate from `design-concepts.json`. Confirm the selected structural fingerprint, product task, real content, existing brand constraints, route mode, and responsive behavior. If these do not exist for substantial work, return to `design-generation-engineering`; do not invent them after implementation.

## Define the visual language

Derive the following from the selected concept:
- **Attention distribution:** where the eye should land first, next, and last.
- **Typography:** role hierarchy, reading measure, glyph coverage, language support, numerical alignment, and content voice.
- **Color behavior:** brand colors, neutral surfaces, semantic status, focus, and contrast pairs. Do not begin from a fashionable palette.
- **Geometry:** edges, radii, separators, containment, elevation, and negative space.
- **Media direction:** subject, crop, aspect ratio, frequency, source, and whether imagery is actually needed.
- **Motion:** only where it explains state, continuity, progress, or spatial relationships.
- **Component grammar:** what should be a row, table, panel, index, card, canvas, list, or plain text—and why.
- **Surface variants:** how the shared product identity changes between reading, operation, discovery, marketing, or other distinct jobs.

## Hard restrictions

- Do not use palette, typeface, shadows, gradients, or radii to claim structural differentiation.
- Do not default to centered hero + two CTAs + floating mockup, equal feature cards, bento, metric tiles, left sidebar, glass panels, dark/neon surfaces, or a universal card system.
- These patterns are allowed only when the product's task and content justify them; record the reason.
- Do not force all routes into the same visual rhythm. Share tokens and accessible primitives where appropriate; let the composition follow each route's job.
- Do not make novelty a goal independent of task clarity, brand recognition, accessibility, and usability.

## Output

Deliver a visual grammar with concrete rules, component usage/anti-usage contracts, surface-specific variants, type/media choices, contrast/accessibility constraints, and responsive implications. Link each major visual decision back to the selected structural concept. Then hand off to `design-system` and `design-layout`.
