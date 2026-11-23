---
name: design-system
description: Converts an approved product-specific design grammar into semantic tokens and reusable components without flattening distinct page compositions into one template.
---

# Design System — reusable rules, not a universal look

A design system should make a product coherent without making every route or unrelated product look identical. It must implement the selected Design Passport; it must not decide the composition by itself.

## 1. Establish the authority order

Use this order:
1. product tasks, domain model, and actual content;
2. approved structural candidate and Design Passport;
3. intentional brand identity and existing working product conventions;
4. accessible platform conventions;
5. existing components/tokens where they fit.

When these conflict, explain the conflict. Do not silently allow an existing generic starter theme to override a newly approved redesign.

## 2. Tokenize only justified decisions

Define semantic roles for color, type, spacing, layout, borders, geometry, surfaces, layers, motion, focus, and responsive behavior only where useful. The scale size is a product decision. Do not force one token scale, radius, shadow, font pairing, accent, or color mode on every product.

## 3. Define component contracts

Every shared component that affects composition must document:
- semantic purpose and data relationship;
- **Use when** / **Do not use when**;
- hierarchy and density expectations;
- content/overflow constraints;
- keyboard and accessibility behavior;
- responsive and RTL behavior;
- states: default, hover, focus-visible, selected, disabled, loading, error, empty, success as relevant.

Do not create a universal `Card` abstraction that accepts every possible content type and becomes the only layout tool. Prefer primitives and patterns that reflect real shared semantics.

## 4. Permit route-level variation

A reading route can use a narrow text measure while an operations route uses a dense record workspace, even within one product. Shared color, type, button, focus, and spacing roles may remain consistent. Do not force a shared header, sidebar, hero, grid, or card rhythm without evidence.

## 5. Typography, language, and content

Check licensing, glyph coverage, weights, font loading, fallback metrics, reading measure, line-height, and numeral treatment. Keep content visible while fonts load. Never apply Latin letter-spacing/uppercase conventions to Arabic. Use logical CSS properties and isolate mixed-direction values.

## 6. Surface, color, and motion decisions

Derive color from brand, content, environment, and meaning. Define contrast pairs and semantic states. Do not add gradients, blur, glass, grain, shadows, or scroll animation merely to make a page look designed. Motion must communicate state, continuity, progress, or spatial relations and respect reduced motion.

## 7. Validate reuse instead of assuming it

When a higher-order component/pattern is shared across different routes, inspect at least two real contexts. If reuse makes those surfaces structurally indistinguishable or forces content into the same shape, split the pattern or move the abstraction down to more appropriate primitives.

## Output

Provide semantic tokens, component contracts, surface-specific variants, anti-usage guidance, and the evidence that the system follows the selected structure. Do not deliver a decorative token sheet detached from rendered use.
