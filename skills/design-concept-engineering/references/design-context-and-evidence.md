# Design context and evidence

This reference records why Web Forge begins with context, content, and task structure rather than a visual preset. It summarizes external guidance; it is not a recipe for a particular look.

## Design context travels with the work

Figma's design-context guidance describes multiple interacting context layers: user, environment, business/product, brand/design system, technical/platform, and medium conventions. It also argues that AI magnifies the context it receives; unrecorded product history and constraints are not reliably inferred by the model.

**Web Forge implication:** make facts, constraints, and assumptions explicit. Keep the Design Passport close to the code and decisions. Carry the rationale into tokens, component descriptions, and usage guidance.

Source: https://www.figma.com/resource-library/design-context-ai/

## Reuse should create harmony, not uniformity

Atlassian's design-system principles emphasize foundational building blocks, harmonious experiences, and avoiding consistency for its own sake. It pairs tokens and reusable components with content and accessibility guidance.

**Web Forge implication:** reuse components when they represent shared meaning or behavior. Do not reuse the same composition across unrelated product surfaces just because the components are available.

Sources:
- https://atlassian.design/resources/atlassian-design-system-values-principles/
- https://atlassian.design/foundations

## Hierarchy depends on real content

Nielsen Norman Group describes hierarchy through contrast, scale, proximity, and common regions. Its guidance also emphasizes that the content placed inside a layout can change the resulting hierarchy.

**Web Forge implication:** inspect real text, imagery, records, and states. Review the first-glance hierarchy after real content is present; do not approve placeholder-only screenshots.

Source: https://www.nngroup.com/articles/visual-hierarchy-ux-definition/

## Responsive work changes composition

Material Design adaptive guidance describes window-size classes, layout regions, grouping/containment, and the risk of simply expanding content until line lengths become unusable. It also calls for components to adapt their behavior to available space.

**Web Forge implication:** design responsive transformations intentionally: navigation, grouping, control type, priority, and content order can change. Do not treat responsiveness as a scaled desktop screenshot.

Source: https://developer.android.com/codelabs/adaptive-material-guidance

## Practical boundary

These sources support a context-led process. They do not prove that every page should be visually novel, nor do they prescribe one universal layout. Conventional patterns remain appropriate when task clarity, platform expectations, accessibility, or user familiarity justify them.
