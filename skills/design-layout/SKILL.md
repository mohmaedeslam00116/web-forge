---
name: design-layout
description: Implements the selected product-specific composition with real content, explicit hierarchy, navigation, interaction states, and responsive transformations. Use after design-generation-engineering.
---

# Design Layout — implement the selected composition

Do not invent a new generic layout recipe here. Your source of truth is the approved structural candidate and the real product content.

## 1. Load the design contract

Read the Design Passport, selected candidate in `design-concepts.json`, product task map, actual content inventory, route map, existing layout/components, and design system. Confirm the selected candidate has not been replaced by an arbitrary starter shell.

## 2. Preserve the structural decisions

Translate the candidate into a concrete page map:
- first-screen anchor and hierarchy;
- primary content region and supporting regions;
- navigation/orientation and user journey;
- content order and grouping logic;
- interaction pattern and key states;
- responsive transformation;
- surface-specific component contracts.

Implement the selected main region first. Do not add filler sections just to make the page feel complete. Do not force a fixed number of sections, columns, cards, or widgets.

## 3. Fit actual content

Use real copy, data shapes, image dimensions, records, long labels, empty/error/loading states, and localized strings. If sample data is needed, make it plausible and explicitly illustrative—never fabricate product claims, customer proof, ratings, or metrics.

Choose the simplest content representation that preserves relationships: prose, index, table, list, timeline, map, form, canvas, comparison, or appropriately justified card. Cards are one option, not the default.

## 4. Navigation and task flow

Select global, local, contextual, and in-flow navigation from route topology and task frequency. Define active, focus, disabled, loading, success, error, empty, offline, and permission states as relevant. Keep focus and recovery paths intentional.

## 5. Responsive composition

Specify behavior at the project's real breakpoints. Reorder, collapse, change controls, change the primary region, or switch information presentation when needed. A phone may need a different content sequence from desktop. Keep important data/actions available and provide non-map/non-drag alternatives when relevant.

Use logical CSS properties for localization and RTL. Test actual variable-length Arabic and mixed-direction strings, not just a right-aligned English placeholder.

## 6. Review the implementation against the candidate

After rendering, compare the page to the selected structural fingerprint. If the code implementation drifted back to a starter shell, change the composition, not the decoration. Record intentional changes to the concept in the Design Passport.

## Deliverable

A functioning route with actual content hierarchy, explicit region order, navigation, component rationale, interaction states, responsive behavior, and a rendered check. Identify any deviations or unverified views.
