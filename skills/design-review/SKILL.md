---
name: design-review
description: Audits actual rendered interfaces for product fit, structural divergence, hierarchy, accessibility, responsive behavior, and implementation drift from the approved design concept.
---

# Design Review — verify the real interface, not the design story

A page can be beautiful, consistent, and technically responsive while still repeating the same generic composition. Review the rendered result against user tasks, real content, the selected candidate, and (for redesigns) the captured baseline.

## Gate 1 — Evidence integrity

Record routes, states, browser/engine and version, viewport, device scale factor, locale, theme, sample data, and commands actually run. Capture the first viewport and full page for representative routes. If the page cannot be rendered, mark visual checks NOT VERIFIED. Do not report a source-only inspection as a visual review.

## Gate 2 — Structural comparison

Load `design-concepts.json` and the Design Passport. Compare the rendered implementation to the selected `layoutDNA`:
- first-screen anchor;
- navigation topology;
- main-region arrangement;
- content order/topology;
- density and measure;
- primary interaction model;
- media role;
- responsive transformation.

For a radical redesign, also compare against the captured baseline. Confirm the intended structural changes are visible in the rendered DOM and screenshot. A changed palette with the old silhouette is NEEDS WORK.

Run the divergence validator for the candidate manifest. Treat its pass as descriptor validation only; visually inspect the prototypes and final page. A validator cannot judge whether labels are honest or whether the design is good.

## Gate 3 — Product and content fit

Complete the primary user task where possible. Verify that actual product nouns, actions, relationships, content, and recovery paths shape the page. Look for fake metrics, placeholder content, decorative sections, generic hero copy, and forced card grids.

## Gate 4 — Hierarchy, craft, and distinctiveness

Ask:
- Does the first viewport foreground the user's actual job or artifact?
- Is visual dominance allocated to task importance rather than decoration?
- Do unrelated sections have a reason to share the same component treatment?
- Do routes with different jobs use appropriate compositions?
- Could the page be relabeled as an unrelated product without changing its structure?
- Has implementation drift restored the former shell?

Do not penalize a conventional table or form when it is the right tool. Do not reward novelty that harms usability.

## Gate 5 — Responsive, accessibility, and runtime

Inspect key desktop and narrow mobile widths; real populated and failure/empty states; touch and keyboard paths; focus order/visibility; zoom/reflow; language/RTL; clipping/overflow; sticky elements; dialogs; font/image loading; and runtime errors. Verify important controls actually work.

## Gate 6 — Fix in the right order

Fix in this order:
1. incorrect product/task model;
2. generic or wrong content hierarchy;
3. wrong composition/navigation;
4. component grammar and route variation;
5. typography, content density, and media;
6. color, surface, and decorative polish.

Do not repair a structural failure with a new gradient, typeface, shadow, radius, or animation.

## Verdict

Use PASS / NEEDS WORK / NOT VERIFIED for each applicable gate. Significant design work passes only when:
- selected concept and rendered structure agree;
- a radical redesign is demonstrably different from baseline or has a user-approved exception;
- real content and the primary task shape the hierarchy;
- responsive and accessibility checks are performed or explicitly marked NOT VERIFIED.

Report exact evidence, routes/states, viewports, screenshots, fixes, and residual risks. Do not claim visual novelty from a score or screenshot diff alone.
