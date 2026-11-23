---
name: visual-regression-engineering
description: Designs, implements, and maintains reliable visual regression coverage for web applications and component libraries. Use when comparing screenshots, establishing baselines, diagnosing visual drift, or adding visual checks to CI.
---

# Visual Regression Engineering

Detect meaningful interface regressions without turning harmless rendering noise into failures. A screenshot is evidence of one route, viewport, browser, data set, and UI state—not proof that an entire product is visually correct.

## 1. Choose the right visual test surface

- **Component level:** Prefer Storybook stories or the project's component harness for reusable components and their meaningful states (default, hover/focus, disabled, loading, error, expanded, empty).
- **Page level:** Use Playwright or the existing browser test runner for high-value routes and end-to-end page composition.
- **Journey level:** Capture only the states that matter to a critical user task; pair visual assertions with interaction assertions rather than treating screenshots as behavioral tests.
- Reuse the current stack. Do not introduce Storybook, Chromatic, Playwright, or a new image-diff service unless the project lacks a suitable path and the benefit justifies the dependency and operational cost.

## 2. Define a reproducible baseline contract

For every baseline set, record:
- route or story and stable test-data/fixture identity;
- browser engine and version, operating system or CI image, device scale factor;
- viewport dimensions, locale, timezone, color scheme, reduced-motion preference;
- authentication/role and application state;
- font and asset readiness conditions;
- baseline owner, approval date, and the change or ticket that justified it.

Keep baseline generation and comparison in the same pinned environment where possible. Browser, OS, font rasterization, device scale factor, and rendering changes can produce noise. Do not compare unlike environments and then loosen thresholds to hide the mismatch.

## 3. Stabilize capture without hiding product defects

- Wait for the route's meaningful ready condition, not an arbitrary sleep. Confirm critical data, images, and fonts are loaded or intentionally in fallback state.
- Freeze clocks, random values, and network fixtures only when those sources are irrelevant to the behavior under test.
- Disable or settle animation for deterministic captures; separately test motion and reduced-motion behavior when it is part of the product requirement.
- Move the pointer away from hover-sensitive content, hide the caret if appropriate, and normalize scroll position.
- Mask only genuinely volatile regions (timestamps, rotating ads, live counters, user-generated content that cannot be fixed). Document each mask and keep it as small as possible.
- Never mask layout containers, headings, primary actions, navigation, or the area containing the suspected defect merely to obtain a green result.

## 4. Design a proportionate coverage matrix

Choose representative combinations instead of multiplying every dimension:
- critical route/story and meaningful UI state;
- narrow phone, representative tablet when relevant, and desktop;
- LTR and real Arabic/RTL content when supported;
- light/dark theme and high-contrast or reduced-motion modes when supported;
- the browser engines the product officially supports.

Prioritize high-change components, shared layout primitives, checkout/authentication, navigation, forms, dialogs, data-dense screens, and pages with complex media. Record why combinations were included or excluded.

## 5. Compare and triage differences

- Start with the diff image and changed-region bounds; identify whether the change is global, component-local, content-driven, or environment noise.
- Use pixel thresholds as a calibrated tolerance, not a universal quality score. A small changed pixel count can still break a logo, icon, focus ring, or one critical label; a large diff can be an intentional content or layout redesign.
- Inspect both baseline and actual images at the same scale. Check clipping, overlap, line wrapping, font fallback, alignment, spacing, color, image crop, sticky/fixed layers, and responsive transitions.
- Classify each result: **regression**, **approved intentional change**, **environmental noise**, or **inconclusive**.
- Require a human review for baseline updates affecting critical routes, brand assets, or shared components. Never auto-approve all changed snapshots in CI.

## 6. Make CI failures actionable

On failure, preserve the baseline, actual screenshot, diff image, test trace/log, browser and viewport metadata, route/state, and commit. Report the exact test and artifact paths. Do not overwrite the baseline during an ordinary test run. Baseline updates should be a deliberate command or reviewed workflow, with the diff inspected before commit.

Keep retries diagnostic: a retry that passes does not erase a flaky visual test. Investigate font loading, animations, asynchronous data, unstable layout, environment drift, and shared test state. Quarantine only with an owner, issue, expiry/review date, and explicit release risk.

## 7. Verify the fix and adjacent surfaces

After a fix, rerun the exact failing capture in the pinned environment, then inspect related breakpoints, states, and components that share the changed primitive. Pair visual checks with browser interaction and accessibility checks for controls whose appearance or focus state changed.

## 8. Report honestly

Return:
- scope: routes/stories, states, browsers, viewports, locales;
- baseline environment and any known mismatch;
- PASS / FAIL / NOT VERIFIED per tested group;
- changed-region summary and artifact references;
- approved baseline updates and who reviewed them;
- masked regions and why they are safe;
- untested combinations and residual risk.

Never claim cross-browser coverage, full-site visual correctness, or a clean regression suite from one screenshot or one browser.

## References

- Playwright visual comparisons: https://playwright.dev/docs/test-snapshots
- Playwright screenshot assertions: https://playwright.dev/docs/api/class-pageassertions
- Storybook visual testing: https://storybook.js.org/docs/writing-tests/visual-testing
- Storybook interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
