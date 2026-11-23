---
name: ui-architecture
description: Converts web product requirements into an evidence-based information architecture, route model, content model, interaction contract, and distinctive surface compositions.
---

# UI Architecture — model the product before its shell

The architecture should reveal what the product is and what users need to do. Do not assume every web app needs the same dashboard shell, sidebar, KPI row, card grid, or modal workflow.

## Process

1. Extract goals, user groups, jobs, environment, business constraints, technical constraints, existing brand, and non-goals. Mark facts versus assumptions.
2. Inspect the repository and current product. Identify framework, routes, state/data model, authentication, design system, assets, and project instructions.
3. Model domain entities, verbs, relationships, decision points, permissions, and error/recovery paths.
4. Build a route map from user journeys. Classify each route by its main success mode (decide, operate, read, explore, create, monitor, or another evidenced job); do not force every route into a fixed four-mode classification if that loses useful detail.
5. Inventory actual content shapes and extremes before choosing components.
6. Run `design-concept-engineering` for new products or materially new visual surfaces. Produce a product-specific design thesis and compare structural alternatives.
7. Create route-level composition maps, first-viewport hierarchy, navigation model, and responsive transformations. Different tasks may require different surface structures.
8. Define interaction states, semantics, keyboard/focus behavior, error recovery, permissions, offline/loading behavior, and reduced-motion expectations.
9. Define measurable acceptance criteria and evidence: unit, component, contract, browser, visual, manual accessibility, or user validation as appropriate.
10. Hand the composition to `design-layout`, the selected grammar to `design-system`, and the rendered result to `design-review`.

## Agent handoff

Include only applicable sections:
- product context and assumptions;
- domain objects, relationships, and primary jobs;
- route map and user journeys;
- content inventory and edge cases;
- route-specific composition and first-screen anchor;
- navigation and component responsibilities;
- interaction/state and recovery model;
- responsive transformation;
- accessibility and localization contract;
- acceptance criteria and test evidence plan;
- implementation sequence and non-goals.

Do not output generic feature lists or a component inventory before the product model is understood.
