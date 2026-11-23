---
name: web-design
description: Entry point for designing, building, or restyling websites, landing pages, dashboards, web apps, editorial pages, stores, and UI components. Routes work through product-aware design, architecture, implementation, accessibility, testing, visual regression, and rendered verification.
---

# Web Design — end-to-end router

Produce an interface whose visual language, structure, and behavior follow the product, audience, content, and task. The goal is a working, testable, accessible product—not a polished screenshot.

## Route by requested outcome

| User intent | Load | Deliver |
|---|---|---|
| New site, redesign, generic/AI-looking UI | `design-direction`, `design-system`, `design-layout`, then `design-review` | Selected direction, project-local rules, implemented UI, rendered review |
| Product idea, feature, multi-route app | `ui-architecture`, `design-direction`, `design-layout`, `implementation-workflow`, `test-engineering` | Routes, task flows, state model, implementation plan, acceptance checks, working slices |
| Implement a feature or fix | `implementation-workflow`; add `test-engineering` for behavior changes | Small coherent code change, regression tests, documented assumptions |
| Accessibility audit or remediation | `accessibility-engineering`, `browser-qa`; add `design-system` for shared patterns | Scoped evaluation, WCAG 2.2 findings, keyboard/assistive-technology evidence, regression coverage |
| Screenshot baselines, visual diffs, visual regression suite | `visual-regression-engineering`, `browser-qa`, `design-review`; add `test-engineering` for CI strategy | Reproducible baseline contract, representative state matrix, reviewed diffs, CI artifacts |
| Responsive, interaction, keyboard behavior | `browser-qa`, `design-review`, `test-engineering` | Browser evidence, viewport/state matrix, defects and retest |
| Test strategy, flaky suite, missing regression coverage | `test-engineering`; add `browser-qa` for browser journeys | Risk-based test plan, reliable tests, failure diagnosis |
| Slow page or poor Core Web Vitals | `performance-engineering` | Field/lab diagnosis, bottleneck evidence, prioritized fixes |
| Auth, user data, uploads, rendering, dependencies | `security-review` | Threat-informed findings, severity, safe remediation and verification |
| Existing project quality review | `web-audit`; add focused skills for findings | Evidence-based severity-ranked audit |
| Before deployment | `release-gate`, `test-engineering`; add focused QA skills for unresolved risks | PASS / FAIL / NOT VERIFIED and ship decision |

## First decision: surface mode

Classify each route by the visitor's success mode: **Persuade** (decide/act), **Operate** (complete a task), **Read** (understand), or **Experience** (explore). One product may contain all four. Never impose a marketing-page layout on an operational workspace or docs page.

## Adaptive workflow

1. **Inspect before inventing.** Identify repository structure, framework, router, build scripts, existing routes, design tokens, component library, assets, tests, and project instructions. Read existing design documentation first.
2. **Understand the task.** Extract user goal, audience, content, risk, device context, constraints, and non-goals. Mark assumptions; ask at most one question only if the missing decision materially changes the implementation.
3. **Choose the minimum useful skills.** Do not invoke every skill for a tiny change. Follow the routing table and avoid duplicate audits.
4. **Preserve project identity.** Reuse working architecture and intentional brand decisions. Do not replace dependencies, routing, state management, or tokens without a demonstrated reason.
5. **Implement a vertical slice.** Make the smallest complete path work, including loading, empty, error, success, disabled, and permission states where applicable.
6. **Define proof before completion.** Turn requirements into acceptance criteria and choose tests proportional to risk. Include semantics, keyboard operation, and relevant locale/RTL coverage.
7. **Verify in the browser.** Run relevant project checks, inspect rendered routes at representative viewports, and test the actual user task. Never infer visual quality from source code alone.
8. **Report evidence honestly.** Separate implemented, tested, not tested, and remaining risks. Never claim a browser, accessibility, visual regression, performance, security, or conformance check passed without evidence.

## Anti-homogenization

Do not reuse a house style across unrelated products. Do not force centered heroes, bento grids, 3-card feature rows, dark themes, gradients, oversized radii, or animation. A familiar pattern is correct when it best serves the task. Distinctiveness must come from meaningful product-specific composition, content, hierarchy, media, and interaction—not color swaps.

## Output contract

Deliver the working implementation when authorized, not only a design essay. Summarize changed files/areas, key design and engineering decisions, commands and browser checks actually run, evidence, and unverified items. Keep the response proportional to the change.
