---
name: ui-architecture
description: Models web product domains, user tasks, routes, content, interactions, and acceptance criteria before the structural design-generation stage.
---

# UI Architecture — model the product before choosing its shell

Do not assume that every application needs a dashboard, sidebar, KPI row, card grid, or modal-first interaction pattern. The architecture should expose the actual domain and help users complete real jobs.

## Process

1. Extract goals, users, tasks, usage environment, business constraints, technical constraints, existing identity, and non-goals. Mark facts versus assumptions.
2. Inspect project instructions, routes, framework, data/state model, auth model, design tokens/components, assets, and existing product behavior.
3. Model domain objects, operations, relationships, decision points, permissions, errors, and recovery paths.
4. Map journeys and routes. Describe each route by its actual job: operate, read, compare, transact, explore, create, monitor, configure, or another precise verb.
5. Inventory real content and extremes before choosing components.
6. For substantial new or changed visual surfaces, run `design-concept-engineering` followed by `design-generation-engineering`. Do not settle the composition in the architecture phase.
7. Provide route-level task/content maps and acceptance criteria. Let the design-generation phase explore the layout alternatives.
8. Define interaction states, semantics, keyboard/focus behavior, error recovery, permissions, offline/loading behavior, and reduced-motion expectations.
9. Identify evidence: unit, component, contract, browser, visual, manual accessibility, or user validation.
10. Hand off the domain model and route map to the design-generation process; hand its approved composition to `design-layout` and `design-system`.

## Handoff

Include only applicable sections: context and assumptions; domain objects and relationships; user jobs; route/journey map; content inventory; technical and brand constraints; interaction and recovery model; responsive/accessibility contract; measurable acceptance criteria; non-goals.

Do not output a generic feature list or preselect an app shell before the domain and task model are understood.
