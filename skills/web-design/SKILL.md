---
name: web-design
description: End-to-end web design and implementation router that creates product-specific interfaces, prevents generic template repetition, and verifies rendered results.
---

# Web Design — product-specific design and engineering

The job is to build a useful, distinctive, accessible, and technically sound interface—not to apply a familiar AI-generated theme. The design must follow the product's users, work, content, environment, and existing identity.

## Route by user intent

| Request | Required path | Deliverable |
|---|---|---|
| New website/product or major redesign | `ui-architecture` → `design-concept-engineering` → `design-direction` → `design-layout` → `design-system` → `implementation-workflow` → `design-review` | Product model, distinct concept, composition, design grammar, working interface, evidence review |
| “Looks generic”, same design again, redesign rejected | `design-review` diagnosis → `design-concept-engineering` reset → `design-direction` → `design-layout` → `design-system` → implementation → review | Root-cause diagnosis, new structural concept, rewritten composition, before/after evidence |
| New route or feature in an existing product | Inspect Design Passport → `ui-architecture` if flow changes → `design-layout` → `design-system` as needed → implementation → `design-review` | Route-specific layout, preserved product grammar, tested task |
| Small isolated UI fix | Inspect existing implementation → `implementation-workflow` → focused `design-review` | Minimal fix, no unnecessary redesign |
| Design system/component library work | `design-concept-engineering` if identity is unclear → `design-system` → `design-review` | Semantic tokens, component contracts, use/anti-use guidance |
| Accessibility work | `accessibility-engineering` + `browser-qa`; `design-system` for shared components | Scoped WCAG findings, manual and automated evidence, regression coverage |
| Responsive/interaction behavior | `design-layout` + `browser-qa` + `design-review` | Composition transformations, browser evidence, retest |
| Visual baselines/diffs | `visual-regression-engineering` + `browser-qa` + `design-review` | Reproducible visual comparison and reviewed diffs |
| Performance, security, test strategy, release | `performance-engineering`, `security-review`, `test-engineering`, `release-gate` as relevant | Evidence-backed specialist outputs |

## Non-negotiable sequence for meaningful design work

1. **Inspect reality.** Read project instructions, code, routes, current UI, design docs, assets, content, and available references.
2. **Build context.** Separate observed facts, user-provided facts, inference, and unknowns. Do not hallucinate user research or brand rules.
3. **Model content and tasks.** Identify entities, relationships, primary actions, decision points, and actual content shapes.
4. **Choose structure before skin.** Use `design-concept-engineering` to compare materially different compositions. Do not start with palette, font, rounded card, or dashboard template.
5. **Write the Design Passport.** Record the thesis, selected composition, rejected alternatives, visual grammar, component contracts, responsive logic, and intentional exclusions.
6. **Implement a coherent slice.** Reuse the current stack, but do not preserve generic or broken design decisions merely because they exist. Preserve intentional product conventions.
7. **Render and challenge.** Run the product-specificity, silhouette, first-viewport, content, route, responsive, and accessibility checks in `design-review`.
8. **Fix structural problems first.** If the page feels generic, revisit hierarchy and composition—not just color, font, gradient, shadows, or border radius.
9. **Report honestly.** List what was implemented, what was actually inspected/tested, what failed, what remains unverified, and any trade-offs.

## Anti-repetition contract

- A single visual style must not be imposed on unrelated products.
- A product's public marketing pages, operational workspace, reader/editor, and documentation do not automatically share one layout.
- A new concept must differ structurally from the agent's default output. Palette-only variation is failure.
- Cards, pills, metric tiles, sidebars, centered heroes, bento grids, and decorative metadata require a task-specific reason.
- Shared components must encode shared meaning or behavior, not merely shared appearance.
- Do not use arbitrary novelty, visual noise, or inaccessible interaction as a substitute for product identity.

## Completion contract

A significant design change is not complete until the rendered result has been checked against the Design Passport and the anti-template challenge. Distinguish **implemented**, **verified**, **needs work**, and **not verified**.
