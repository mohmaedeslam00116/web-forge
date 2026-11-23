---
name: design-review
description: Reviews a built website or interface through rendered evidence. Checks visual hierarchy, product fit, repetition, accessibility, usability, responsiveness, and runtime issues. Use after a meaningful design or UI implementation pass.
---

# Design Review

Code inspection is not a substitute for inspecting the rendered interface. Review against the project's Design Passport and user tasks, not personal taste alone.

## Gate 1: Render representative views

Use the browser or rendering tooling already available in the project. Use Playwright when available and appropriate; do not install dependencies without considering project policy and user permission. Capture the first viewport and full page for representative routes at relevant mobile, tablet, and desktop widths. For Arabic, capture actual RTL content. Record browser version, device scale factor, locale, theme, and state.

Record console/runtime errors that affect the experience. Verify data, images, fonts, and interaction states rather than judging a static skeleton only.

## Gate 2: Layout and responsive integrity

Measure horizontal overflow at representative widths; record the actual result. Inspect clipped text, fixed-width assumptions, table behavior, sticky elements, dialogs, touch targets, and keyboard/focus order. A responsive pass requires measurement or direct browser inspection; do not infer it from CSS.

## Gate 3: Task and usability review

Complete the main user task if possible. Check status visibility, correspondence to the real world, user control, consistency, error prevention, recognition, flexibility, recovery, and help. Report usability separately from aesthetic quality.

## Gate 4: Visual direction and repetition audit

Compare the rendered interface with the Design Passport:
- Is the correct surface mode apparent, and does hierarchy match the real task and content?
- Does the composition help the visitor, or does it feel like a familiar template pasted onto the product?
- Are unrelated sections using one repeated card treatment without a reason?
- Is the signature element useful, or decorative clutter?
- Does the design use novelty where predictable behavior is more valuable?

Do not penalize a conventional layout if it is the most usable solution. Do not demand visual novelty from routine tools. For intentional screenshot-baseline comparisons, use `visual-regression-engineering` and classify diffs rather than relying on a single pixel score.

## Gate 5: Accessibility and technical integrity

Check semantic structure, labels, contrast, focus visibility, keyboard operation, reduced motion, alt text, color-only meaning, language/direction, and error feedback. Check layout stability after fonts and images load. Verify relevant links and controls actually work.

## Scoring

Score 1–5 with evidence, using only applicable dimensions: task clarity; hierarchy and scanability; direction fidelity; typography and content readability; composition and information density; craft and interaction states; accessibility; responsive integrity; product specificity. A low score requires a concrete defect or mismatch, not merely a different aesthetic preference.

## Fix and repeat

Prioritize task and information architecture, hierarchy, layout, type and content, responsive behavior, accessibility, color and surfaces, motion and polish. Re-render changed areas and remeasure. Do not keep iterating solely to chase subjective novelty.

## Report

State what was actually tested, strongest design decision, highest-impact defects and evidence, measured viewport findings, visual diffs and baseline context where used, and checks not run. Use PASS / NEEDS WORK / NOT VERIFIED. Never claim a screenshot, browser, or accessibility test was performed unless it was.

## References

- `references/review-rubric.md`
