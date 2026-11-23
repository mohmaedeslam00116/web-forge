# Web Forge

**Version:** 0.8.1 — Design Generation Gate  
**Type:** Agent skill pack / web engineering workflow  
**Author:** Mohamed Eslam

Web Forge is an end-to-end web engineering skill set for developers and coding agents. Its design process is product-first and evidence-driven: inspect a real product and its content, generate structurally different prototypes, validate their divergence, select the best task fit, implement it, and verify the rendered result.

It is designed to address a common failure in AI-generated interfaces: different products receiving nearly identical page structures with only the colors, fonts, and decorative treatment changed.

## Start here

For a new website, major redesign, or repeated-template complaint, start with:

1. [design-concept-engineering](skills/design-concept-engineering/SKILL.md) — model the user's job, domain objects, relationships, content, and constraints.
2. [design-generation-engineering](skills/design-generation-engineering/SKILL.md) — create three materially different structural prototypes, validate the layout fingerprints, and carry the selected concept into implementation.
3. [web-design](skills/web-design/SKILL.md) — route the selected composition through design direction, layout, system, implementation, and rendered review.

## Skill catalog

| Skill | Responsibility |
|---|---|
| [design-generation-engineering](skills/design-generation-engineering/SKILL.md) | Structural concept generation, rendered candidate prototypes, divergence gate |
| [design-concept-engineering](skills/design-concept-engineering/SKILL.md) | Product discovery, task model, real content, and design thesis |
| [web-design](skills/web-design/SKILL.md) | End-to-end design and engineering router |
| [ui-architecture](skills/ui-architecture/SKILL.md) | Domain model, routes, interaction and acceptance criteria |
| [design-direction](skills/design-direction/SKILL.md) | Visual grammar after structural selection |
| [design-layout](skills/design-layout/SKILL.md) | Content-first composition and responsive transformation |
| [design-system](skills/design-system/SKILL.md) | Semantic tokens and reusable component contracts |
| [design-review](skills/design-review/SKILL.md) | Rendered structural, usability, accessibility and responsive review |
| [implementation-workflow](skills/implementation-workflow/SKILL.md) | Incremental implementation in the existing codebase |
| [accessibility-engineering](skills/accessibility-engineering/SKILL.md) | WCAG-oriented accessibility engineering |
| [test-engineering](skills/test-engineering/SKILL.md) | Risk-based test strategy and test reliability |
| [browser-qa](skills/browser-qa/SKILL.md) | Real browser interactions, responsive states and QA |
| [visual-regression-engineering](skills/visual-regression-engineering/SKILL.md) | Stable screenshot baselines and visual diff diagnosis |
| [performance-engineering](skills/performance-engineering/SKILL.md) | Performance diagnosis and optimization |
| [security-review](skills/security-review/SKILL.md) | Threat-informed security review |
| [web-audit](skills/web-audit/SKILL.md) | Evidence-backed website audits |
| [release-gate](skills/release-gate/SKILL.md) | Evidence-based pre-release checks |

## What is different in 0.8.0?

A design description is no longer enough. Substantial work now requires:

- three candidate structures, each described by the same eight structural fields;
- three low-fidelity prototypes rendered in a browser/project renderer when available, with screenshot/preview evidence for each;
- a check that each pair differs in at least four of eight structural dimensions;
- an explicit `rendererAvailable` flag; if rendering is unavailable, all three candidates must disclose `NOT AVAILABLE: [reason]`;
- a complete captured old-layout baseline for radical redesigns, with the selected concept differing in at least four dimensions;
- implementation of the selected structure, then a rendered review against the candidate and baseline.

The automated checker is a guardrail, not a design judge. It validates declared structural separation; it cannot determine if a concept is useful, beautiful, or usable. Those require reviewing the actual prototype and implementation.

## Run the validator

No extra package is required (Node.js 18+):

```bash
node tools/check-design-divergence.mjs --self-test
node tools/check-design-divergence.mjs design-concepts.json
```

Use the `design-concepts.json` contract described in [design-generation-engineering](skills/design-generation-engineering/SKILL.md). For a radical redesign, include a captured baseline fingerprint and evidence.

## Design foundations

- [Figma — Design context and AI](https://www.figma.com/resource-library/design-context-ai/)
- [Cornell/Delft Design Guide — Fish Trap Model](https://arl.human.cornell.edu/PAGES_Delft/Delft_Design_Guide.pdf)
- [Design Behaviour and Interface Consistency in Generative No-Code Tools (2026)](https://www.mdpi.com/2073-431x/15/4/238)
- [Playwright — Visual comparisons](https://playwright.dev/docs/test-snapshots)

Visual screenshot comparison is a regression tool, not a measure of originality. Structural diversity, task fit, accessibility, and product fit must be reviewed separately.

## License

No license has been added yet. Do not assume redistribution, modification, or commercial-use permissions until the author selects and adds a license.
