---
name: accessibility-engineering
description: Engineers and evaluates web accessibility from semantic implementation through keyboard and assistive-technology testing, using WCAG 2.2 and the W3C WCAG-EM 2.0 evaluation process. Use for accessibility audits, fixes, acceptance criteria, or conformance reporting.
---

# Accessibility Engineering

Make the actual product operable and understandable by people with disabilities. Treat accessibility as an engineering requirement across design, implementation, content, and testing—not a final automated scan. Never claim WCAG conformance or certification without a scoped, adequately sampled evaluation and documented evidence.

## 1. Establish the evaluation contract

Before evaluating, record:
- product and surfaces in scope, including authenticated, transactional, embedded, mobile, and third-party areas;
- purpose and intended users, key journeys, supported browsers/devices, languages, and input modalities;
- target WCAG version and conformance level (normally WCAG 2.2 AA when the brief is silent, clearly marked as an assumption);
- exclusions, blocked states, inaccessible dependencies, evaluation date, and available assistive-technology coverage.

Use WCAG 2.2 as the current WCAG 2 baseline. Treat WCAG-EM 2.0 as an evaluation methodology, not as a new set of success criteria or a certification. Follow its five-step model: define scope, explore the product, select a representative sample, evaluate that sample, and report findings. Expand the sample to cover distinct templates, components, states, and critical tasks; do not select only the easiest pages.

## 2. Inspect semantics before adding ARIA

- Prefer native HTML controls, landmarks, headings, lists, tables, buttons, links, and form elements.
- Give every control a reliable accessible name, role, value, and state. Associate labels, instructions, required state, and errors programmatically.
- Use ARIA only when native HTML cannot express the needed semantics. Do not override native roles or create custom widgets without implementing their complete keyboard and focus model.
- Follow the WAI-ARIA Authoring Practices Guide for complex patterns such as dialogs, menus, tabs, comboboxes, tree views, grids, and carousels. APG is implementation guidance; verify patterns against the product's real task and assistive-technology support.
- Keep heading levels and landmarks meaningful. Avoid clickable non-interactive elements, positive tabindex, duplicate IDs, and focusable disabled-looking controls.

## 3. Verify operation and focus

Test the entire critical journey without a pointer:
- Tab and Shift+Tab order follows the visual and task sequence; no keyboard trap except a correctly managed modal interaction.
- Enter and Space activate the correct controls; arrow-key behavior matches the widget pattern where applicable.
- Focus is visible, moves into modal dialogs when opened, remains contained while modal, and returns to the invoking control when closed.
- Focus is not hidden behind sticky headers, banners, dialogs, or floating controls.
- Dynamic updates, validation errors, loading results, and success messages are announced at an appropriate level without excessively interrupting users.
- Drag-only actions have a single-pointer alternative; gesture, hover, and time-limited interactions have accessible alternatives or controls.

## 4. Evaluate visual, cognitive, and responsive access

Check contrast for text, controls, focus indicators, charts, and state changes; never rely on color alone. Verify text resizing, reflow/zoom, content spacing, orientation, captions/transcripts where applicable, meaningful alt text, and sensible link names. Respect reduced motion and avoid flashing or animation that blocks comprehension.

Explicitly include WCAG 2.2 concerns where applicable: Focus Not Obscured, Focus Appearance, Target Size (Minimum), Dragging Movements, Consistent Help, Redundant Entry, and Accessible Authentication. Check the criterion's exceptions and applicability rather than treating a single numeric or visual heuristic as universal.

For Arabic and bilingual products, inspect real RTL content, mixed-direction strings, numerals, punctuation, labels, focus order, and screen-reader pronunciation. Do not assume right-alignment alone makes a page accessible.

## 5. Use automation as evidence, not a verdict

Run existing automated checks (for example axe-based scans or framework-integrated accessibility tests) where available. Record tool/version, route, state, and result. Automated tools cannot reliably judge all text alternatives, meaningful reading order, cognitive clarity, keyboard behavior, captions quality, or real assistive-technology interaction. Add manual keyboard and screen-reader spot checks proportionate to risk. Do not install new tooling or alter project configuration without a reason and permission.

## 6. Fix and prevent regressions

Prioritize barriers by user impact and journey criticality, not by raw count. Fix root causes in shared components and design tokens. Add regression tests for the semantics and interaction behavior that failed. Re-test the exact failing route and state, then inspect neighboring components that reuse the same primitive.

## 7. Report with traceable evidence

For every finding include:
- affected route/component and sampled state;
- applicable WCAG success criterion (ID and level) when known;
- reproducible steps and actual versus expected behavior;
- user impact and severity;
- evidence (DOM/accessible-name inspection, keyboard sequence, screenshot, tool output, or assistive-technology observation);
- recommended fix and regression test;
- limitations, sample coverage, and items not verified.

Use PASS / FAIL / NOT VERIFIED per criterion or evaluation area. A scan with zero automated violations is not a conformance statement. Avoid legal advice and do not describe an internal review as third-party certification.

## References

- `https://www.w3.org/TR/WCAG22/` — WCAG 2.2 success criteria.
- `https://www.w3.org/TR/WCAG-EM/` — WCAG-EM 2.0 evaluation methodology.
- `https://www.w3.org/WAI/ARIA/apg/` — WAI-ARIA Authoring Practices Guide.
- `https://www.w3.org/WAI/test-evaluate/tools/selecting/` — limits and selection of evaluation tools.
