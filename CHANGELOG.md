# Web Forge changelog

## 0.8.1 — Evidence Hardening

- Require explicit renderer availability and screenshot/preview evidence for all three concepts when a renderer is available.
- Validate all eight baseline fields before comparing a radical redesign.
- Improve phrase normalization and add negative tests for cosmetic-only changes, repeated structures, and incomplete baselines.

## 0.8.0 — Design Generation Gate

- Added `design-generation-engineering`, a mandatory production workflow for substantial design work and repeated-template complaints.
- Replaced text-only concept exploration with three rendered structural prototypes before high-fidelity implementation whenever a renderer is available.
- Added an eight-dimension layout fingerprint and a dependency-free Node validator requiring pairwise concept divergence.
- Added a radical-redesign gate requiring a captured baseline and structural change across at least four dimensions.
- Reworked `design-concept-engineering`, `design-direction`, `design-layout`, `design-system`, `design-review`, `ui-architecture`, and `web-design` around a strict discovery → divergence → selection → implementation → rendered verification sequence.
- Clarified that screenshot diffs are useful for visual regression but cannot prove originality or product fit.
- Added a design production contract and executable positive/negative self-tests.

## 0.7.0

- Added the design concept engineering workflow and initial cross-domain divergence cases.
- Rebuilt the design direction, layout, system, review, and web-design routing guidance around product context and composition.

## 0.6.0

- Added `visual-regression-engineering` for deterministic screenshot baselines, component/page coverage, diff triage, CI artifacts, and reviewed baseline updates.
- Routed visual regression and screenshot-baseline work to the dedicated skill instead of treating it as a generic browser QA task.
- Strengthened design review, browser QA, and release gates with explicit visual-diff evidence and baseline-governance requirements.

## 0.5.0

- Added accessibility engineering and risk-based test engineering.

## 0.4.0

- Added implementation workflow, browser QA, performance engineering, and security review skills.
