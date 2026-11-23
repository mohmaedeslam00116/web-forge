---
name: browser-qa
description: Verifies real web behavior in a browser across routes, viewports, interaction states, keyboard use, accessibility signals, and visual regressions. Use after UI implementation or when testing responsive and interactive behavior.
---

# Browser QA

Test the rendered application, not assumptions from source code. Use the browser automation already available (prefer the project's Playwright setup when present). Do not add dependencies or change test infrastructure without a reason and permission.

## 1. Establish a reproducible target

- Identify start command, base URL, required environment, test account/fixtures, and existing browser tests.
- Use safe test data. Never expose production secrets or perform destructive actions against live systems.
- Record browser/engine and version, viewport, device scale factor, route, locale, theme, and relevant app state for each finding.
- If the site is blocked by auth, bot protection, network policy, or unavailable services, report the exact boundary; do not invent a successful inspection.

## 2. Build a risk-based test matrix

Select representative routes and tasks, not every possible permutation. Include primary happy path; one meaningful validation/server failure path; loading/empty states; keyboard-only navigation and visible focus; narrow mobile, tablet, and desktop; Arabic/RTL and mixed-direction content when supported; dialogs, menus, sticky elements, tables, and long content when present. Use `test-engineering` when the test strategy or suite needs deeper design.

## 3. Exercise real interactions

Click, type, submit, navigate, reload, use back/forward, and test focus order. Verify controls have observable effects, links navigate correctly, forms announce errors, and disabled/loading states prevent invalid duplicate actions. Check browser console and failed network requests that affect the task. Avoid relying on hover-only behavior.

## 4. Responsive and visual checks

- Inspect at project breakpoints plus at least one narrow phone and a desktop width; record exact viewport dimensions.
- Measure document overflow (`scrollWidth` versus `clientWidth`) and inspect the element causing it. A nonzero overflow value is a lead to investigate, not automatically a defect (intentional carousels/tables may scroll locally).
- Check clipping, overlap, unreadable wrapping, sticky-header obstruction, dialog bounds, image crops, and layout shift after fonts/media load.
- Compare screenshots only at equivalent route, viewport, state, browser, device scale factor, locale, and data. Review meaningful differences; do not fail on harmless rendering noise.
- For maintained screenshot baselines, invoke `visual-regression-engineering`; do not update snapshots as a side effect of an ordinary QA run.

## 5. Accessibility spot checks

Use semantic landmarks and headings, accessible names, label/control association, keyboard operation, focus visibility/order/not-obscured, contrast, zoom/reflow, reduced motion, status/error announcements, and target size. Run automated tools when already available, but treat them as a supplement—not proof of WCAG conformance. Use `accessibility-engineering` for scoped evaluation or remediation.

## 6. Report with evidence

For each defect provide severity, route, viewport/browser, reproducible steps, expected versus actual behavior, screenshot/log/test reference if available, and a suggested fix. Mark each area PASS, FAIL, or NOT VERIFIED. Re-test the exact failed path after a fix. Do not call a route responsive or accessible based on one screenshot.
