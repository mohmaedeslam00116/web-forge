---
name: design-layout
description: Translates a product's real content and user tasks into a distinctive page or workspace composition, with hierarchy and responsive behavior defined before component styling.
---

# Design Layout — compose the information, not a template

Layout is the organization of a task and its content in space. Start from the product's information model and the user's next decision. Do not begin with a standard page recipe, grid preset, or component library demo.

## 1. Map the actual material

For the target route or surface, list:
- the primary task and user question;
- the content objects, fields, media, and relationships;
- the most important action and evidence needed before it;
- secondary information and its importance;
- states: initial, populated, empty, loading, error, success, disabled, permission-limited, or offline as applicable;
- content extremes: long names, dense records, missing imagery, localization, and real Arabic/mixed-direction text.

Use real sample data whenever possible. Placeholder content conceals layout failures.

## 2. Choose composition from the content model

Draw a quick structure before building components. Explore whether the information behaves primarily as:
- a continuous reading or persuasive sequence;
- a set of records that must be compared or scanned;
- a collection that needs indexing and discovery;
- a guided process with progress and recovery;
- a spatial relationship or freeform canvas;
- an ongoing stream of changing events;
- an editor or control surface;
- a mixed structure with a dominant primary model.

These are ways to understand content, not a menu of canned templates. The same industry can require different compositions, and unrelated industries can share a structure when their tasks genuinely match.

Specify the first viewport's anchor, eye path, main content region, navigation model, grouping logic, and primary action. Avoid filling empty space with decorative cards or arbitrary metrics.

## 3. Establish hierarchy before visual styling

For each element decide whether it is dominant, supporting, contextual, or optional. Use position, scale, contrast, proximity, grouping, and typography to express these roles. The most important element should win the first-glance test; not every section can be equally prominent.

Prefer the least explicit containment that still makes relationships clear. A card is not the default container. Use open space, typographic hierarchy, dividers, tables, rows, panels, or cards according to the relationship being communicated.

## 4. Define navigation from product structure

Choose global, local, contextual, and in-flow navigation according to route topology, task frequency, and user orientation. A sidebar is not a universal app shell; a top navigation is not mandatory for every public site. Explain why the chosen navigation makes common tasks easier.

## 5. Make responsive behavior a composition decision

Do not scale desktop proportionally and call it responsive. For each meaningful viewport class, specify:
- what remains visible and persistent;
- what reorders because the task sequence changes;
- what stacks or changes from columns to a single flow;
- what becomes a different interaction/control;
- what can scroll within its own region;
- what becomes secondary or unavailable, with a usable alternative.

Allow layouts to flex between breakpoints. Preserve readable measures, usable controls, and orientation. Avoid fixed pixel assumptions where intrinsic layout can express the constraint.

## 6. Component selection is subordinate to composition

Choose components after the page structure is clear. Reuse existing accessible project components where they fit. Do not build every content item as a card, every statistic as a metric tile, or every action as a pill. Document new shared components with both **Use when** and **Do not use when** guidance.

## 7. Validate with real content and rendered views

Inspect at representative narrow and wide widths. Test long text, empty states, actual media, keyboard order, zoom/reflow, RTL when supported, and all important task states. Measure overflow; investigate the cause instead of hiding it with arbitrary offsets. Revisit hierarchy and composition before adding CSS patches.

## Deliverable

Provide a route/surface composition map, hierarchy, component choices with rationale, first-viewport plan, responsive transformations, interaction-state coverage, and measurable checks. Keep it concise enough to implement.
