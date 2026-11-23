# Web Forge changelog

## 0.7.0 — Design Engine Rebuild

- Rebuilt the design workflow around product context, domain objects, user tasks, real content, environment, brand history, and technical constraints.
- Added `design-concept-engineering`, a required concept process for meaningful new designs and repeated-generic-design complaints.
- Replaced style/pattern selection with structural concept exploration: three low-cost candidates, meaningful divergence across composition dimensions, evidence-based selection, and a product-specific design thesis.
- Rewrote `design-direction`, `design-layout`, `design-system`, `design-review`, `ui-architecture`, and the `web-design` router.
- Rebuilt the Design Passport around product model, first-viewport composition, candidate decisions, visual grammar, component use/anti-use contracts, explicit exclusions, and rendered evidence.
- Added anti-template checks: silhouette, relabel/swap, first-viewport, content, component, route, and responsive tests.
- Replaced generic warning lists and style menus with context-led diagnostics and content-first composition worksheets.
- Added cross-domain divergence test cases for a fiction reader, fleet dispatch workspace, and designer portfolio.
- Added research references for design context, design-system reuse, visual hierarchy, and adaptive composition.

## 0.6.0

- Added `visual-regression-engineering` for deterministic screenshot baselines, component/page coverage, diff triage, CI artifacts, and reviewed baseline updates.
- Routed visual regression and screenshot-baseline work to the dedicated skill instead of treating it as a generic browser QA task.
- Strengthened design review, browser QA, and release gates with explicit visual-diff evidence and baseline-governance requirements.
- Added guidance for stable capture, narrow masking, RTL/state coverage, and environment-pinned comparisons.

## 0.5.0

- Added `accessibility-engineering` for scoped WCAG 2.2 implementation and evaluation, incorporating the five-step WCAG-EM 2.0 methodology and manual verification boundaries.
- Added `test-engineering` for risk-based layered test strategy, isolation, deterministic fixtures, flaky-test diagnosis, and CI evidence.
- Updated the design router to route accessibility and testing work to focused skills.
- Strengthened browser QA and release gates with explicit accessibility, test strategy, scope, sample, and evidence expectations.
- Extended UI architecture handoff with measurable acceptance criteria and test-evidence planning.

## 0.4.0

- Added implementation workflow, browser QA, performance engineering, and security review skills.
