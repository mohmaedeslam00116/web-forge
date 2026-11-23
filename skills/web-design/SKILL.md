---
name: web-design
description: End-to-end design and implementation router for websites and web apps, with product-specific structure, diverse visual art direction, brand references, real asset planning, and rendered review.
---

# Web Design — build a product, not another AI-looking template

Web Forge must produce the visual language the product deserves. Do not default to text-heavy minimalism, muted colors, thin borders, centered headlines, or the same dashboard shell. Those are possible choices only when the brief and task justify them.

## Route by intent

| Request | Required path |
|---|---|
| New product, new site, major redesign | `ui-architecture` → `design-concept-engineering` → `brand-reference-engineering` when useful → `visual-art-direction` → `visual-asset-direction` → `design-generation-engineering` → `design-direction` → `design-layout` → `design-system` → implementation → `design-review` |
| "Too minimal", "too abstract", visually empty, text-only look | `design-review` diagnosis → `visual-art-direction` → `brand-reference-engineering` → `visual-asset-direction` → concept generation → implementation → rendered critique |
| Brand-inspired interface / DESIGN.md request | `brand-reference-engineering` → `visual-art-direction` → `design-system` → layout/implementation → review |
| Asset-heavy campaign, portfolio, store, travel, media, game, food, or lifestyle site | `visual-art-direction` → `visual-asset-direction` → `design-generation-engineering` → implementation → review |
| Dashboard, editor, docs, or operational interface | `ui-architecture` → `design-concept-engineering` → `visual-art-direction` with Operate/Read mode → `design-layout` → `design-system` → implementation → review |
| Small isolated UI fix | Inspect incumbent design and use `implementation-workflow`; do not trigger full concept replacement |
| Accessibility, testing, performance, security, or release | Route to the relevant specialist skills and add browser/review evidence as needed |

## Required design sequence for meaningful work

1. Inspect the actual product, current UI, assets, routes, content, and existing design system.
2. Model users, domain objects, tasks, relationships, and content shapes.
3. Classify the surface as Persuade, Operate, Read, or Experience.
4. Build the visual world with `visual-art-direction`; compare a broad range of visual families, not only typography-led minimalism.
5. Search and record relevant official/community DESIGN.md references where useful.
6. Define the media plan using `visual-asset-direction`; specify real photos, product captures, illustration, 3D, diagrams, maps, video, texture, or a reason for no media.
7. Create three structurally and visually different rendered concepts; run both validators.
8. Choose based on task fit, content truth, visual ambition, audience, accessibility, and feasibility.
9. Implement the selected concept without slipping back into the familiar starter shell.
10. Review the real rendered result and compare it to the candidate, references, and asset plan.

## Anti-minimalism contract

- Three candidates must not all be typography + whitespace + thin dividers.
- Persuade/Experience candidates include at least two genuine media-bearing proposals unless text-only is explicitly requested.
- At least one candidate must explore a different palette/material/graphic strategy from restrained neutral surfaces.
- For image-led products, real visual assets must appear early in the composition, not as tiny thumbnails below a generic hero.
- Do not use a generic gradient or stock image as a substitute for art direction.
- Minimalism remains valid when the user, brand, or task supports it; it is not the universal default.

## Quality contract

A substantial design is incomplete until the visual world, asset plan, concept evidence, and rendered implementation have been reviewed. Report implemented, verified, needs work, and not verified separately. Never claim actual imagery or rendering was tested when only text and source files were inspected.
