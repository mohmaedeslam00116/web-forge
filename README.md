# Web Forge

**Version:** 0.6.0  
**Type:** Agent skill pack / web engineering workflow  
**Author:** Mohamed Eslam

Web Forge is an end-to-end web engineering skill set for developers and coding agents. It connects product-aware design, architecture, implementation, accessibility, testing, visual regression, browser QA, performance, security, and release verification into one adaptive workflow.

The aim is not merely to produce attractive screenshots. Web Forge is built to help agents inspect the real project, preserve its conventions, implement coherent changes, verify rendered behavior, and report evidence and remaining risks honestly.

## Skill catalog

| Skill | What it covers |
|---|---|
| [web-design](skills/web-design/SKILL.md) | Main router for web design and engineering tasks |
| [design-direction](skills/design-direction/SKILL.md) | Product-aware visual direction and anti-generic design decisions |
| [design-system](skills/design-system/SKILL.md) | Design tokens, typography, color, geometry, motion, and RTL |
| [design-layout](skills/design-layout/SKILL.md) | Information architecture, page composition, responsive layout |
| [ui-architecture](skills/ui-architecture/SKILL.md) | Implementation-ready product and UI architecture |
| [implementation-workflow](skills/implementation-workflow/SKILL.md) | Safe, incremental implementation in an existing codebase |
| [design-review](skills/design-review/SKILL.md) | Evidence-led review of rendered interfaces |
| [accessibility-engineering](skills/accessibility-engineering/SKILL.md) | WCAG-oriented accessibility engineering and evaluation |
| [test-engineering](skills/test-engineering/SKILL.md) | Risk-based test strategy, deterministic tests, flaky-test diagnosis |
| [visual-regression-engineering](skills/visual-regression-engineering/SKILL.md) | Screenshot baselines, visual diffs, triage, and CI artifacts |
| [browser-qa](skills/browser-qa/SKILL.md) | Real browser behavior, responsive states, keyboard use, and QA |
| [performance-engineering](skills/performance-engineering/SKILL.md) | Performance diagnosis and prioritized optimization |
| [security-review](skills/security-review/SKILL.md) | Threat-informed web security review and remediation |
| [web-audit](skills/web-audit/SKILL.md) | Evidence-backed website and web-app audits |
| [release-gate](skills/release-gate/SKILL.md) | Evidence-based pre-release verification and ship decisions |

Supporting references and templates are kept beside the skills that use them.

## Repository layout

```text
.
├── .codex-plugin/
│   └── plugin.json
├── plugin.json
├── CHANGELOG.md
└── skills/
    ├── <skill-name>/
    │   └── SKILL.md
    └── <skill-name>/
        └── references/
```

## Use the skills

1. Choose the skill matching the task, or start with `skills/web-design/SKILL.md` for the end-to-end router.
2. Copy the relevant skill directory into the skills directory supported by your coding agent.
3. Keep the skill's `references/` files beside its `SKILL.md`; some workflows depend on those supporting documents.
4. Follow the skill's scope, evidence, and safety requirements. Do not report checks as passed unless they were actually run.

For a broad project workflow, start with **web-design**. For a narrowly scoped task, load only the relevant specialist skill rather than invoking the entire pack.

## Version 0.6.0

The 0.6.0 release adds dedicated visual regression engineering: reproducible baseline contracts, stable screenshot capture, representative route/state/viewport coverage, careful diff triage, reviewed baseline updates, and actionable CI artifacts. It also strengthens the web-design router, browser QA, design review, and release gate around visual evidence.

See [CHANGELOG.md](CHANGELOG.md) for the release history.

## Design principles

- Inspect the existing codebase and product before proposing replacements.
- Preserve established architecture and intentional brand decisions unless there is evidence to change them.
- Select patterns according to user tasks and content, not a fixed visual recipe.
- Treat accessibility, security, performance, and testing as engineering concerns.
- Prefer reproducible browser evidence over assumptions from source code.
- Distinguish **PASS**, **FAIL**, and **NOT VERIFIED**; never fabricate results.

## License and reuse

No license has been added to this repository yet. Until the author adds one, do not assume that the contents are licensed for redistribution, modification, or commercial use.
