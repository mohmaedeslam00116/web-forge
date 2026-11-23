---
name: implementation-workflow
description: Turns a web UI plan or feature request into safe, incremental implementation in the repository's existing stack. Use when writing or modifying frontend code, connecting UI states to data, or completing a design beyond a mockup.
---

# Implementation Workflow

Build the smallest complete, maintainable slice that solves the requested user task. Follow repository conventions; do not introduce a new stack to solve a local problem.

## 1. Reconnaissance

- Read repository instructions (for example `AGENTS.md`, `README`, package scripts, contribution notes) and inspect the relevant route, components, styles, tests, and data contracts.
- Identify framework/version, router, rendering mode, styling and component systems, state/data fetching, forms/validation, auth boundaries, and test commands.
- Check working-tree changes before editing. Do not overwrite unrelated user work.
- Trace the current user journey and reuse existing primitives where they are correct.

## 2. Convert request into a thin vertical slice

Write down briefly: user outcome, entry point, state transitions, data dependencies, failure modes, responsive behavior, accessibility contract, and acceptance checks. Separate confirmed requirements from assumptions. Prefer one complete user path over broad scaffolding with inert controls.

## 3. Design the component boundary

- Keep route/page composition separate from reusable primitives and domain logic where the project already follows that pattern.
- Keep server-owned data and authorization on the server. Client state is presentation state, not an authority for access control.
- Model loading, empty, error, success, stale, offline, and permission-denied states only where relevant; provide retry/recovery when safe.
- Validate inputs at trust boundaries. Treat URL parameters, form fields, API responses, uploaded files, and persisted browser data as untrusted.
- Avoid premature abstractions, giant components, duplicated business rules, and unnecessary global state.

## 4. Implement deliberately

- Follow existing naming, formatting, lint, typing, and CSS conventions.
- Prefer semantic HTML and native browser behavior before custom widgets.
- Use stable keys and explicit state transitions. Prevent duplicate submissions and stale async updates where relevant.
- Use design tokens and existing accessible components. Avoid hard-coded one-off styling when a semantic token exists.
- Keep secrets, privileged credentials, and authorization decisions out of client bundles.
- Do not silently change unrelated routes, dependencies, lockfiles, or configuration.

## 5. Verify the slice

Run the narrowest relevant unit/component test first, then typecheck/lint/build as appropriate. Test the primary path and at least one meaningful failure path. For visible UI changes, use `browser-qa` and `design-review`; source inspection alone is not visual verification.

## 6. Finish cleanly

Inspect the diff for accidental changes, dead code, debug output, leaked secrets, missing labels, broken links, and placeholder controls. Update tests and concise project documentation when behavior or setup changed. Do not claim commands passed if they were not run.

## Handoff format

- Outcome implemented
- Important files/areas changed
- Behavior and states covered
- Commands/tests run with exact results
- Browser verification performed or not performed
- Known limitations and next smallest step
