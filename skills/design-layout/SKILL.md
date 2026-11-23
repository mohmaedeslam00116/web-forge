---
name: design-layout
description: Plans information architecture, page composition, grids, hierarchy, responsive transformations, and interaction layout for websites and applications. Use when composing a page, choosing section order, structuring a dashboard, or fixing layout and responsive behavior.
---

# Design Layout

Let the content and the visitor's task determine the structure. Do not begin with a section recipe.

## 1. Start from the job and content

- Identify the primary task or question for the surface.
- Inventory real content, data, controls, media, and supporting evidence.
- Rank items by importance, frequency, urgency, and decision value.
- Choose the reading or action sequence that reduces effort.
- Remove sections that do not serve the visitor or a real business requirement.

## 2. Choose an appropriate composition

Possible structures include linear narrative, editorial columns, task workspace, split comparison, guided sequence, data table, timeline, collection index, map, product configurator, gallery, or mixed composition.

These are options, not an expected checklist. Use the minimum structures that explain the content. A page does not need four to six different section patterns to look designed.

Consider independently:
- alignment and composition;
- density and whitespace;
- column count and container width;
- persistent navigation or chrome;
- media placement and crop;
- grouping, dividers, cards, and tables;
- how primary and secondary actions are distinguished.

Do not force a 12-column desktop grid, a universal 8-point rhythm, asymmetric 5/7 splits, or repeated full-width section padding. Pick a system the content can sustain and keep it coherent.

## 3. Fit structure to mode

- **Persuade:** make the offer, proof, objections, and action easy to understand. A story-led long page, comparison, case study, or compact conversion page may be right.
- **Operate:** optimize frequent tasks, scanning, status recognition, information density, predictable controls, and recovery. It is an application surface, not a marketing page.
- **Read:** optimize hierarchy, measure, navigation within long content, citations, tables, and reading comfort.
- **Experience:** let the artifact or collection lead while preserving orientation, context, and accessible controls.

## 4. Navigation and interaction structure

Choose navigation according to route count, user frequency, information hierarchy, platform convention, and screen size. Keep labels specific and the current location clear. Do not apply a fixed maximum navigation count without considering the product.

For every interactive region, define relevant states: default, active, focus, disabled, loading, empty, error, success, and permission or offline states as needed. Persistent chrome should not jump in height when its content changes.

## 5. Responsive transformation

Do not shrink desktop layouts and call them mobile. Decide at each breakpoint what should:

- reorder because the task sequence changes;
- stack because columns no longer have enough room;
- collapse into navigation or disclosure;
- become a different control;
- remain a horizontally scrollable data view with clear affordance;
- disappear because it is nonessential at that size.

Use intrinsic sizing, fluid type, `minmax()`, `min-width: 0`, and logical properties. Ensure touch targets and controls follow platform and accessibility requirements.

## 6. Validate the structure

Render representative routes and states at the project's relevant breakpoints. Measure horizontal overflow; inspect clipped content, awkward stacking, table behavior, focus order, and sticky elements. Fix the information architecture or grid before adding offsets and one-off CSS patches.

## References

- `references/page-patterns.md` — structural examples, not mandatory section order.
