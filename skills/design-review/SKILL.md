---
name: design-review
description: Audits rendered interfaces for task fit, product specificity, visual hierarchy, template repetition, accessibility, responsive integrity, and design-system consistency.
---

# Design Review — reject polished sameness

Review the actual rendered interface against real user tasks, content, and the Design Passport. Source-code inspection alone cannot establish visual quality. A polished screenshot is not proof of product fit.

## 1. Evidence contract

Record routes, states, viewports, browser/engine, device scale factor, locale, theme, sample data, and tool commands actually used. Render first viewport and full page for representative routes. If the browser, account, server, or artifact is inaccessible, state the boundary and mark the area NOT VERIFIED.

## 2. Task and content review

Complete the primary task where possible. Check whether the screen exposes the relevant objects, relationships, evidence, action, and recovery path. Compare the actual content with the page structure. Find where layout decisions force awkward truncation, fake metrics, placeholder media, unnecessary sections, or generic copy.

## 3. Visual hierarchy review

Use a first-glance/squint check: what dominates before text is read? Does that match the user's priority? Check grouping, proximity, scale, contrast, alignment, line length, and information density. If everything is loud, nothing is hierarchical. If the strongest element is decorative rather than functional, challenge the composition.

## 4. Product-specificity and sameness review

Run these adversarial tests:

- **Silhouette:** remove color, typeface, shadows, and radii mentally or in a grayscale wireframe. Is the composition still purposeful?
- **Relabel:** imagine replacing the product name and data with those of an unrelated product. If the page would still work unchanged, product specificity is weak.
- **First viewport:** does it begin with the actual artifact, work area, decision, or content—or a default headline, subtitle, two actions, and floating visual?
- **Repetition:** are unrelated content roles represented with the same card, grid, title, icon, and action pattern without evidence?
- **Route distinction:** do routes with different user jobs have appropriate structural differences? Are common patterns shared only where they help recognition and task speed?
- **Reference dependence:** is the interface borrowing a recognizable competitor layout or trend without adapting it to the product?

Do not demand novelty for novelty's sake. A plain data table can be the best design. Penalize unjustified defaults, not conventionality itself.

## 5. Responsive, accessibility, and craft review

Inspect narrow and wide viewports, long content, empty/error/loading states, keyboard focus, zoom/reflow, touch, localization, mixed-direction strings, and RTL where relevant. Check clipping, overlapping layers, horizontal overflow, sticky obstruction, dialog bounds, and layout shift after fonts/media load. Verify controls actually work.

## 6. Scored gates

Use **PASS / NEEDS WORK / NOT VERIFIED** for each gate. A weighted score is optional; a blocker in task clarity or accessibility cannot be offset by visual polish.

| Gate | PASS evidence |
|---|---|
| Product fit | Real nouns, verbs, content, and task priorities shape the screen |
| Structural identity | Composition is explainable through product context, not only its skin |
| First-screen relevance | The first viewport serves the primary job |
| Hierarchy | Dominance and grouping match importance |
| Content integrity | Real content and edge cases fit without filler |
| Design grammar | Components and tokens have meaningful usage rules |
| Route coherence | Shared patterns aid recognition; distinct tasks remain distinct |
| Responsive behavior | Composition adapts without hiding or distorting key tasks |
| Accessibility | Relevant semantics, keyboard, focus, contrast, language, and motion checks pass |
| Technical craft | No material clipping, layout shift, dead controls, or runtime errors |

## 7. Remediation order

Fix in this order: incorrect product/task model → content hierarchy → composition/navigation → component grammar → typography and density → color/surfaces → motion and decoration. Do not attempt to repair a generic structure with cosmetic changes.

Re-render after changes. Report defects with route, state, viewport, reproduction, user impact, evidence, fix, and retest result. Separate aesthetic preference from measurable task or accessibility defects.
