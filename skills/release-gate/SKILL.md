---
name: release-gate
description: Final evidence-based production gate for a website or web app before deployment. Verifies build, tests, accessibility, browser behavior, visual regression, performance, SEO, security, and operational readiness.
---

# Web Release Gate

Act as the final production gate. Run the project's own verification commands first. Add targeted checks only where they close a material risk. Do not change deployment state or publish unless explicitly authorized.

## 1. Establish release context

Identify the intended environment, commit/diff, deployment target, critical user journeys, required secrets/configuration (never print values), rollback path, and project release instructions. Separate current-change regressions from pre-existing defects when evidence allows.

## 2. Required gates (scope them to the product)

| Gate | Evidence to collect |
|---|---|
| Build and type safety | Production build, typecheck, lint, formatting, generated artifacts |
| Test strategy and execution | Risk-based critical-path matrix, unit/component/API/E2E checks, isolation and failure-path coverage, exact command results |
| Browser behavior | Real route/task checks at representative desktop/mobile widths; console and failed requests |
| Accessibility | Scoped WCAG 2.2 evaluation, automated scan plus keyboard/focus/semantics/labels/contrast/reflow/reduced-motion checks, and manual assistive-technology coverage appropriate to risk |
| Responsive and visual | Overflow/clipping, dialogs, tables, sticky elements, RTL where relevant, visual baseline comparison and reviewed diff artifacts for changed critical surfaces |
| Performance | Production-mode bundle/network checks, image/font strategy, LCP/INP/CLS evidence where available |
| SEO | Metadata, crawlability, canonicalization, sitemap/robots, structured data where applicable |
| Security | Secret scan, unsafe rendering, auth/authorization boundaries, upload/URL handling, dependency findings, headers where accessible |
| Runtime resilience | Loading, empty, error, retry, offline/slow network, and permission states where relevant |
| Operations | Environment configuration, migrations, monitoring/error reporting, backup/rollback and deployment health checks |

Use `test-engineering`, `accessibility-engineering`, `browser-qa`, `visual-regression-engineering`, `performance-engineering`, and `security-review` for focused work. Do not repeat a full audit if fresh evidence exists for the same commit and environment.

## 3. Decision rules

- Never claim a check passed unless a command, test, browser inspection, measurement, or supplied artifact supports it.
- Label unavailable checks **NOT VERIFIED**, with the exact reason and what access/evidence is needed.
- A critical user journey failure, exploitable high-impact security issue, broken production build, data-loss migration risk, or unresolved release-blocking accessibility defect means **DO NOT SHIP**.
- Automated accessibility tools, Lighthouse, unit tests, code coverage, screenshot diffs, and a green build are evidence for specific checks, not proof of overall product quality or WCAG conformance.
- Do not auto-approve screenshot baselines. Require review of diffs for changed critical routes and shared components; record approved updates.
- Prefer fixing the smallest root cause over adding exceptions or one-off CSS.

## 4. Final report

Return a compact table: Gate | Status (PASS / FAIL / NOT VERIFIED) | Evidence | Next action. Include tested commit/environment, scope and sample, critical routes, commands, browser/viewport matrix, screenshot artifacts and baseline approval status, and assistive-technology checks actually performed. End with exactly one decision: **SHIP**, **SHIP WITH KNOWN ISSUES**, or **DO NOT SHIP**.
