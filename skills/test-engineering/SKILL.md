---
name: test-engineering
description: Designs maintainable, risk-based test strategies for web applications, from unit and component tests through API contracts and end-to-end browser journeys. Use when adding tests, diagnosing flaky suites, or defining release confidence.
---

# Test Engineering

Build confidence in user-visible behavior with the smallest reliable test system that covers meaningful risk. Test quality is not measured by line coverage or test count alone.

## 1. Start with risk and observable outcomes

Identify critical journeys, money/data/security impact, irreversible actions, supported browsers, integrations, failure modes, and recent change surface. Convert each requirement into observable acceptance criteria. Prioritize tests by probability of failure × impact × difficulty of detecting the failure.

Build a compact matrix across:
- critical user journeys and alternate/failure paths;
- roles and authorization boundaries;
- loading, empty, stale, error, success, offline, and retry states where relevant;
- device sizes, browsers, locales, and RTL/LTR variants that materially differ;
- keyboard and assistive-technology behavior where applicable.

Do not attempt every permutation. Choose representative coverage and record the rationale for exclusions.

## 2. Choose the right test layer

- **Unit:** deterministic business rules, parsers, formatters, reducers, validators, and pure utilities.
- **Component/integration:** rendered components with realistic inputs, user interactions, state transitions, and accessibility semantics.
- **API/contract:** request/response schemas, status codes, authorization, validation, pagination, and compatibility at system boundaries.
- **End-to-end:** a small set of high-value journeys through the real application stack and browser.
- **Visual regression:** stable, representative screenshots for meaningful UI changes, with controlled viewport, data, fonts, browser, and animation state.

Keep most low-cost checks close to the code and use browser-level tests for cross-boundary behavior. Do not use E2E tests to duplicate every unit assertion. Do not mock the exact behavior the test is intended to verify; mock unstable external boundaries deliberately and retain contract coverage.

## 3. Make tests resilient and deterministic

- Prefer user-visible selectors and accessible roles/names over brittle CSS selectors, XPath, implementation details, or generated class names.
- Wait for observable conditions using the framework's retrying assertions and actionability checks; avoid arbitrary sleeps and fixed timing assumptions.
- Isolate tests from one another: unique data, independent sessions, explicit cleanup, and no order dependencies.
- Control clocks, randomness, network fixtures, and asynchronous work only when the test requires determinism; do not hide race conditions with excessive mocks.
- Use realistic but non-sensitive fixtures. Never store production credentials or personal data in tests, snapshots, logs, or artifacts.
- Avoid shared mutable accounts and parallel-test collisions. Use factories or seeded fixtures with clear ownership.
- Keep assertions specific enough to explain failure but focused on behavior, not private implementation details.

## 4. Cover negative and security-relevant behavior

For forms and APIs, test invalid inputs, boundary values, duplicate submission, stale state, retry behavior, and server errors. For authorization, verify both allowed and denied roles at the server boundary; hiding a client-side button is not authorization. For uploads, URLs, rich text, and external content, include type/size validation, unsafe payload handling, and safe failure behavior. Never run destructive tests against production without explicit authorization and safeguards.

## 5. Keep CI useful

Run narrow tests first, then related suite, typecheck/lint, and production build as appropriate. Keep test output actionable. On failure, capture route, browser, seed/fixture, console/network evidence, and trace/screenshot where available. Treat retries as diagnostic evidence, not a way to declare flaky tests green. Fix the cause, or quarantine with an owner, issue, expiry/review date, and explicit release risk. Do not silently skip or weaken a failing test.

## 6. Diagnose flaky tests systematically

Classify the source: shared state, non-deterministic data, timing/race, unstable selector, network dependency, environment drift, animation, or actual product defect. Reproduce repeatedly where useful, inspect traces and logs, remove the cause, and prove the fix. Do not add arbitrary waits or broad retries as the default repair.

## 7. Deliver a test plan and evidence

Provide:
- critical risks and journeys;
- test layers and named cases;
- required fixtures, environment, and cleanup;
- commands actually executed and exact pass/fail totals;
- skipped or blocked tests and why;
- known coverage gaps and residual release risk.

Do not equate high code coverage, a green unit suite, or one passing browser journey with overall product correctness.

## References

- `https://playwright.dev/docs/best-practices` — user-visible locators, isolation, and resilient browser tests.
- `https://playwright.dev/docs/writing-tests` — assertions, actionability, and test isolation.
