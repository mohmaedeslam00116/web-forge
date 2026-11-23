# Web Forge

**Version:** 0.9.0 — Visual Art Direction & Brand Reference Engine  
**Type:** Agent skill pack / web engineering workflow  
**Author:** Mohamed Eslam

Web Forge is a product-first web design and engineering workflow. It now treats structural composition and visual art direction as two independent design decisions. This release specifically addresses the failure where different sites become structurally different but still look like restrained text documents.

## Start here

For a new website, major redesign, or a result that looks too abstract/minimal, start with:

1. [design-concept-engineering](skills/design-concept-engineering/SKILL.md) — understand product, tasks, content, and constraints.
2. [visual-art-direction](skills/visual-art-direction/SKILL.md) — discover a distinct visual world, family, palette strategy, media composition, and signature.
3. [brand-reference-engineering](skills/brand-reference-engineering/SKILL.md) — consult official and community DESIGN.md collections with clear provenance.
4. [visual-asset-direction](skills/visual-asset-direction/SKILL.md) — plan and verify photography, illustration, product captures, diagrams, 3D, texture, and video.
5. [design-generation-engineering](skills/design-generation-engineering/SKILL.md) and [web-design](skills/web-design/SKILL.md) — render diverse concepts, validate them, implement, and review.

## Skill catalog

| Skill | Responsibility |
|---|---|
| [visual-art-direction](skills/visual-art-direction/SKILL.md) | Broad visual vocabulary, ambition levels, art direction and visual world |
| [brand-reference-engineering](skills/brand-reference-engineering/SKILL.md) | Official/community DESIGN.md lookup, comparison, and provenance |
| [visual-asset-direction](skills/visual-asset-direction/SKILL.md) | Photography, illustration, 3D, diagrams, product media, and asset verification |
| [design-generation-engineering](skills/design-generation-engineering/SKILL.md) | Structural + visual concept generation and quality gates |
| [design-concept-engineering](skills/design-concept-engineering/SKILL.md) | Product/task/content discovery and design thesis |
| [web-design](skills/web-design/SKILL.md) | End-to-end design and engineering router |
| [ui-architecture](skills/ui-architecture/SKILL.md) | Domain model, routes, interactions and acceptance criteria |
| [design-direction](skills/design-direction/SKILL.md) | Visual grammar after concept selection |
| [design-layout](skills/design-layout/SKILL.md) | Content-first composition and responsive transformations |
| [design-system](skills/design-system/SKILL.md) | Tokens, components and surface-specific visual rules |
| [design-review](skills/design-review/SKILL.md) | Rendered quality, visual diversity, product fit, accessibility and responsiveness |
| [visual-regression-engineering](skills/visual-regression-engineering/SKILL.md) | Stable screenshot baselines and visual diff diagnosis |
| [browser-qa](skills/browser-qa/SKILL.md) | Real browser behavior and responsive QA |
| [accessibility-engineering](skills/accessibility-engineering/SKILL.md) | WCAG-oriented accessibility engineering |
| [test-engineering](skills/test-engineering/SKILL.md) | Risk-based test strategy |
| [implementation-workflow](skills/implementation-workflow/SKILL.md) | Incremental implementation |
| [performance-engineering](skills/performance-engineering/SKILL.md) | Performance diagnosis and optimization |
| [security-review](skills/security-review/SKILL.md) | Threat-informed security review |
| [web-audit](skills/web-audit/SKILL.md) | Evidence-backed website audits |
| [release-gate](skills/release-gate/SKILL.md) | Evidence-based pre-release checks |

## What changed in 0.9.0

- Added a Visual Art Direction engine with a broad catalog of visual worlds rather than a typography/minimalism-first default.
- Added Brand Reference Engineering for first-party and community DESIGN.md sources, with explicit source-authority and provenance handling.
- Added Visual Asset Direction for photography, real product captures, illustration, 3D, diagrams, maps, video, and textures.
- Added an independent visual-direction contract and a dependency-free checker that rejects three same-family or all-text proposals for Persuade/Experience work.
- Updated the design-concepts template to require `visualDirection` alongside the existing eight-field structural `layoutDNA`.
- Added cross-product visual-variety test cases.
- Studied Impeccable as an external methodology reference. Web Forge does not bundle its source code or require its CLI.

## Validators

Node.js 18+; no additional package required:

```bash
node tools/check-design-divergence.mjs --self-test
node tools/check-design-divergence.mjs design-concepts.json
node tools/check-visual-direction.mjs --self-test
node tools/check-visual-direction.mjs design-concepts.json
```

The structural checker detects repeated layouts. The visual-direction checker screens for repeated design families, missing visual-world descriptions, vague asset plans, and all-text Persuade/Experience concepts. Neither checker can decide whether an image is good, a world is appropriate, or a design is beautiful; inspect rendered previews.

## Brand-reference libraries

- [Official DESIGN.md tracker](https://github.com/VoltAgent/official-design-md) — first-party documents only.
- [Awesome DESIGN.md](https://github.com/VoltAgent/awesome-design-md) — broad community analyses of public sites.
- [Design MD Hub](https://github.com/dhananjay6561/design-md-hub) — a second community collection with preview pages.
- [Impeccable](https://github.com/pbakaus/impeccable) — external design-agent methodology reference.

Use official docs as source of truth. Community analyses are useful inspiration, not official statements or endorsement. Follow their licenses and never copy proprietary logos, fonts, photos, or brand assets without permission.

## License

No license has been added to this repository yet. Do not assume redistribution, modification, or commercial-use permissions until the author selects a license.
