# Web Forge

**Version:** 0.7.0 — Design Engine Rebuild  
**Type:** Agent skill pack / web engineering workflow  
**Author:** Mohamed Eslam

Web Forge is an end-to-end web engineering skill set for developers and coding agents. Its design workflow starts from product context, user tasks, domain content, environment, brand history, and technical constraints. It then compares materially different compositions, defines a product-specific visual grammar, implements the selected concept, and checks the rendered result for generic template repetition.

The goal is not to make every interface look novel. It is to make each interface look and behave like the product it serves, while preserving usability, accessibility, platform expectations, and engineering quality.

## Start here

For a new product, major redesign, or a design that keeps looking generic, start with:

1. [design-concept-engineering](skills/design-concept-engineering/SKILL.md) — product context, structural concept exploration, design thesis, and anti-template challenge.
2. [web-design](skills/web-design/SKILL.md) — routes the work through architecture, concept, layout, system, implementation, and rendered review.

For an existing product, inspect its Design Passport and established component system before changing visual decisions.

## Skill catalog

| Skill | Responsibility |
|---|---|
| [design-concept-engineering](skills/design-concept-engineering/SKILL.md) | Core design reasoning engine; prevents generic AI layouts |
| [web-design](skills/web-design/SKILL.md) | End-to-end web design and engineering router |
| [ui-architecture](skills/ui-architecture/SKILL.md) | Product model, routes, content, interaction and acceptance criteria |
| [design-direction](skills/design-direction/SKILL.md) | Product-specific visual identity and design grammar |
| [design-layout](skills/design-layout/SKILL.md) | Content-first page and workspace composition |
| [design-system](skills/design-system/SKILL.md) | Semantic tokens and component contracts without flattening product identity |
| [design-review](skills/design-review/SKILL.md) | Rendered product-fit, hierarchy, sameness, responsive and accessibility review |
| [implementation-workflow](skills/implementation-workflow/SKILL.md) | Incremental implementation in the existing codebase |
| [accessibility-engineering](skills/accessibility-engineering/SKILL.md) | WCAG-oriented accessibility engineering and evaluation |
| [test-engineering](skills/test-engineering/SKILL.md) | Risk-based test strategy and reliable regression coverage |
| [browser-qa](skills/browser-qa/SKILL.md) | Real browser behavior, responsive states, keyboard use and QA |
| [visual-regression-engineering](skills/visual-regression-engineering/SKILL.md) | Deterministic screenshot baselines and visual diff triage |
| [performance-engineering](skills/performance-engineering/SKILL.md) | Performance diagnosis and optimization |
| [security-review](skills/security-review/SKILL.md) | Threat-informed web security review |
| [web-audit](skills/web-audit/SKILL.md) | Evidence-backed website and web-app audits |
| [release-gate](skills/release-gate/SKILL.md) | Evidence-based pre-release verification |

## Design engine principles

- Context before style: document users, tasks, product objects, content, environment, business and technical constraints.
- Structure before skin: compare low-fidelity compositions that differ in hierarchy, navigation, content order, density and interaction—not just color and font.
- Real content before polish: use real records, long text, media, and empty/error states where available.
- Reuse by meaning: share components when tasks and behavior match, not simply to make every screen look alike.
- Responsive by transformation: navigation, hierarchy, and grouping can change with available space; do not merely shrink desktop.
- Evidence before claims: inspect rendered routes and distinguish verified, failed, and not-verified checks.

## Design quality tests

[tests/design-divergence-cases.md](tests/design-divergence-cases.md) contains adversarial cross-domain cases for a fiction reader, fleet dispatch workspace, and designer portfolio. The grayscale structures should remain meaningfully different because their tasks and content differ.

## Repository layout

```text
.
├── .codex-plugin/plugin.json
├── plugin.json
├── CHANGELOG.md
├── skills/
│   ├── design-concept-engineering/
│   ├── design-direction/
│   ├── design-layout/
│   ├── design-system/
│   ├── design-review/
│   └── ...specialist engineering skills
└── tests/
    └── design-divergence-cases.md
```

Keep each skill's `references/` directory beside its `SKILL.md`. Start with the smallest relevant set of skills rather than loading every specialist for every task.

## Releases

See [CHANGELOG.md](CHANGELOG.md). Version 0.7.0 is a major rewrite of the design workflow, not a palette refresh or a new collection of aesthetic presets.

## License

No license has been added yet. Do not assume redistribution, modification, or commercial-use permissions until the author selects and adds a license.
