---
name: design-system
description: Encodes a product-specific visual grammar into semantic tokens, component contracts, and usage rules without making every project look the same.
---

# Design System — preserve identity while enabling reuse

A design system is not a theme generator. It records decisions already justified by a product's context and makes them reusable without erasing meaningful differences between surfaces.

## 1. Establish the source of truth

Inspect, in order:
1. current Design Passport and brand documentation;
2. existing tokens, components, patterns, and their real use;
3. product-specific direction and page composition;
4. platform conventions, accessibility needs, locale, and engineering constraints.

Do not introduce a second token system or replace a working component library without evidence. Distinguish intentional legacy patterns from accidental drift.

## 2. Model decisions by role, not by arbitrary quantity

Define only the token families needed by the product:
- color roles and contrast pairs;
- typography roles, family fallbacks, weights, measure, and language coverage;
- spacing and layout constraints;
- surface, border, radius, and depth roles;
- motion and interaction feedback;
- layers and focus treatment;
- responsive behavior where tokenized values help.

Do not force a specific number of colors, typefaces, radius levels, shadow levels, or spacing steps. A sparse editorial site and a high-density operations tool should not inherit the same token density.

## 3. Encode visual grammar, not just values

For each shared primitive, document:
- its purpose and semantic role;
- appropriate contexts;
- contexts where it should not be used;
- content constraints and overflow behavior;
- default, hover, focus-visible, active, disabled, loading, error, and selected states as relevant;
- responsive and RTL behavior;
- accessibility contract.

A component library of buttons, inputs, and cards is insufficient to guide composition. Provide higher-order patterns only when they represent real repeated user tasks. Do not turn one page's layout into the universal pattern for every route.

## 4. Protect meaningful variation

Consistency should apply to shared meaning and behavior, not force identical structure everywhere. Different surface modes may require different density, typography measure, navigation, and media treatment while remaining part of the same product family.

When a component is reused, verify that the underlying task and content relationship is genuinely the same. Prefer two purposeful variants over one over-configurable component or one inappropriate universal component.

## 5. Typography and content

Verify font license, glyph coverage, weights, loading behavior, and fallback metrics. Keep essential content visible while fonts load. Use line length, weight, size, and spacing to form hierarchy. Do not use Latin letter-spacing or uppercase conventions on Arabic. Use tabular numerals where numeric comparison benefits.

## 6. Color, surfaces, and depth

Derive colors from brand, content, environment, and semantic intent. Specify text/control contrast. Do not rely on color alone for status. Avoid gradients, blur, glass, grain, heavy shadows, or cards everywhere unless they express a documented product or interaction need. Light and dark themes need explicit decisions, not mechanical inversion.

## 7. Motion and state

Motion should clarify state, continuity, progress, or spatial relationships. Avoid universal reveal-on-scroll and hover-lift effects. Respect reduced motion. Every state transition must remain understandable without animation.

## 8. Arabic, RTL, and localization

Read `references/arabic-rtl.md` for Arabic-first and bilingual surfaces. Use logical properties, real localized content, appropriate direction isolation, locally meaningful copy, and locale-specific dates/numbers. RTL is not a mirrored screenshot.

## 9. Validate the system in use

Test the component in at least two real contexts when it is intended to be shared. If its use makes two unrelated surfaces visually indistinguishable, the pattern abstraction may be too broad. Review both the component and the compositions it enables.

## Output

Provide semantic tokens, component contracts with usage/anti-usage, surface-specific variants, implementation constraints, and validation states. Do not provide a decorative token sheet disconnected from a real composition.
