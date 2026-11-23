---
name: ui-architecture
description: Use when a user has a website or web-app idea, redesign request, or feature request and needs an implementation-ready product and UI architecture with measurable acceptance criteria.
---
# UI Architecture

Convert requirements into an implementation-ready plan without inventing unsupported product decisions or turning every request into the same shell.

## Process
1. Extract goals, audience, primary tasks, constraints, existing brand decisions, and non-goals. Mark assumptions.
2. Classify each requested surface by visitor success mode: Persuade (decide/act), Operate (complete a task), Read (understand), or Experience (explore). One product can need multiple modes across routes.
3. Define information architecture and route/page map from user journeys and real content.
4. Define page hierarchy and component responsibilities. Choose tables, lists, cards, timelines, forms, maps, or open layouts according to content—not by a fixed component recipe.
5. Define interaction states and task recovery: default, focus, active, disabled, loading, empty, error, success, and permission/offline states where relevant.
6. Define responsive transformations: what stacks, collapses, reorders, scrolls, or becomes a different control at each breakpoint.
7. Define semantics, keyboard order, focus management, live regions, labels, contrast, and reduced-motion behavior.
8. Define data boundaries and loading/error behavior without prescribing backend technology unless required.
9. Define measurable acceptance criteria for the primary journey and important failure paths. Identify which criteria need unit, component, API/contract, browser, visual, or manual accessibility evidence.
10. For meaningful visual work, invoke the `web-design` router and its `design-direction`, `design-system`, `design-layout`, and `design-review` skills. Preserve an existing Design Passport or design system. Do not invent a new visual system for a small isolated change.

## Agent handoff
Produce only sections relevant to the task:
- Product intent and assumptions
- Surface modes and user journeys
- Routes and navigation
- Page anatomy and content hierarchy
- Component and data responsibilities
- Interaction/state matrix
- Responsive behavior
- Accessibility contract
- Acceptance criteria and test evidence plan
- Implementation sequence

The plan should be complete enough to implement, but no larger than the product requires.
