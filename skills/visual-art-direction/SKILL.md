---
name: visual-art-direction
description: Directs the visual world, design family, media composition, color ambition, material language, and visual signature of a website or product surface. Use for new visual identities, major redesigns, generic or overly minimal results, image-led experiences, campaigns, portfolios, and any interface whose output lacks visual character.
---

# Visual Art Direction — give the product a visual world

This skill exists to prevent a specific failure: a design can be structurally different and still look like a quiet text document with thin dividers. Structural variety is necessary, but visual art direction is a separate decision. Do not let Web Forge collapse every project into typography, neutral surfaces, and hairline rules.

## Non-negotiable principle

**Minimalism is one possible art direction, not the default quality setting.** A restrained UI may be right for a frequent operational task; it is not automatically right for a campaign, fashion storefront, travel experience, portfolio, entertainment product, food brand, game, editorial feature, or immersive showcase. Do not equate sophistication with emptiness, nor boldness with random gradients.

A visual concept must specify what users will actually see: the imagery, illustration, product artifacts, color fields, materials, depth, graphic devices, and motion that make the surface visually legible. A paragraph describing a mood is not art direction.

## 1. Choose ambition from the surface's job

Classify the *surface*, not the whole company:

- **Persuade:** marketing, campaigns, pricing, launch pages, product acquisition. The product's value must be seen and felt. Real product imagery, photography, illustration, diagrams, proof, bold color, and motion are allowed when they support belief and action.
- **Operate:** dashboards, editors, admin, inventory, internal tools. Prioritize fast recognition, task fluency, state, data density, and trustworthy controls. Visual ambition appears in information design, data visualization, spatial structure, carefully chosen color, and precise craft—not necessarily a hero image.
- **Read:** docs, articles, knowledge, guides, news. Prioritize reading and source comprehension, but allow editorial typography, diagrams, photography, pull quotes, annotations, charts, and magazine-like pacing where they aid understanding.
- **Experience:** portfolios, galleries, entertainment, culture, product showcases. Let the artifact lead. Use image-led, cinematic, expressive, interactive, 3D, or immersive composition when the subject supports it.

Set an explicit ambition level: **restrained**, **composed**, **expressive**, or **immersive**. Explain why it fits. Do not choose restrained by habit. For Persuade and Experience, the three concepts must include at least two genuinely media-bearing directions unless the user explicitly requests text-only work. For Operate and Read, media can be data, diagrams, maps, code, editorial imagery, or an intentionally text-led experience.

## 2. Discover a visual world before choosing a preset

For a new identity or a redesign that replaces the old visual world, gather seven concrete visual-world candidates from at least three different source families. Source families include:

- editorial and print traditions;
- photography, film, music, and broadcast;
- physical materials, manufacturing, architecture, and interiors;
- geography, landscape, climate, and natural forms;
- sport, movement, performance, and events;
- craft, fashion, food, and retail display;
- diagrams, scientific notation, maps, and data graphics;
- digital subcultures, games, interfaces, and historic computing;
- local cultural and visual traditions relevant to the audience.

Each candidate needs: (a) why it resonates with the user or product mechanism, (b) its composition and spatial grammar, (c) material/color/light behavior, (d) media or image language, (e) typographic voice, and (f) one useful signature. Do not create seven synonyms for "minimal SaaS". Do not derive every candidate from the most literal product metaphor or from familiar interface tools. Include a non-obvious source outside the product category.

Fuse the chosen world with the product's real task. The borrowed system supplies a visual grammar; the product supplies all facts, wording, workflows, and data. Do not copy a competitor's complete layout, logo, trademark, proprietary typeface, or distinctive illustration.

## 3. Use the visual-family library as a vocabulary, not a preset menu

Read `references/visual-world-catalog.md`. Consider families such as editorial/magazine, photographic commerce, cinematic storytelling, illustration-led, 3D/spatial, brutalist, maximalist collage, luxury/hospitality, Swiss/grid, retro/analog, data/scientific, map/spatial, community/social, marketplace/catalog, education, creative canvas, entertainment/media, and civic/service design.

Pick a primary family and, where useful, one secondary influence. State the combination and why. Do not simply pick a style label and fill a generic template. Two products can both be editorial but need different image language, density, navigation, and content rhythm.

## 4. Define the media composition

Before implementing, decide which visual materials earn a place:

- photography: environment, people, products, macro detail, editorial documentary, food, architecture, or lifestyle;
- product imagery: real UI captures, device renders, product cutaways, before/after, interactive demos;
- illustration: bespoke scenes, characters, diagrams, isometric art, technical explanatory graphics;
- 3D and motion: product model, spatial scene, shader, simulation, kinetic typography, or video;
- data and spatial media: charts, map, network graph, timeline, schematic, or diagram;
- textures and physical materials: paper, grain, fabric, metal, glass, ink, print artifacts, or light—only when tied to the selected world.

For each asset slot record its purpose, subject, composition, aspect ratio/crop, focal point, palette/light, placement, responsive behavior, source/provenance, and alt text where meaningful. Use `visual-asset-direction` to plan, source, create, and validate the assets.

For Persuade or Experience, a first viewport made only of headline, paragraph, buttons, and thin rules is **not complete by default**. It must earn that restraint with a clear reason in the brief and a concept that still has a strong visual signature. Otherwise introduce a real visual anchor: photography, illustration, product capture, 3D, diagram, image collage, material surface, or an expressive graphic composition. Never add meaningless stock imagery just to pass this rule.

## 5. Commit to a color and material strategy

Name the strategy before choosing hex values:

- **Restrained:** neutrals plus controlled semantic/action colors;
- **Committed:** one saturated or material-derived color owns meaningful regions;
- **Full palette:** a deliberate group of 3–5 roles creates distinct surfaces and states;
- **Drenched:** a large portion of the surface is intentionally colored;
- **Image-led:** photography/artwork carries most of the palette, with UI colors supporting it.

These are choices, not ranked quality levels. Define light/dark scene, saturation, contrast, texture, depth, surface layering, border treatment, and motion grammar. Never use the same dark/black + neon accent or cream + serif + terracotta combination as an automatic signature.

## 6. Build the concept cards as visual proposals

Every candidate must include:
- design family and source-world references;
- ambition level and why;
- first-screen visual anchor;
- actual media plan (or a specific reason for none);
- color and material strategy;
- composition and content hierarchy;
- graphic language: shapes, framing, motifs, pattern, illustration, data visualization;
- depth and motion language;
- responsive art direction (including alternate crops or media changes);
- implementation cost and performance/accessibility risk;
- at least one reviewable rendered preview when a renderer exists.

The three candidates must not all be typography-led, low-contrast, neutral, or media-free. They should explore different visual families and media strategies, not only different layout fingerprints. Run both `check-design-divergence.mjs` and `check-visual-direction.mjs`.

## 7. Use an action vocabulary for focused creative passes

Interpret these as distinct work modes, not as permission to decorate indiscriminately:

- **world / shape:** create or replace the visual world and its first-surface concept.
- **bolder:** amplify a selected direction's strongest existing visual idea; do not randomly add effects.
- **colorize:** make color do real work in the hierarchy, atmosphere, and semantic system.
- **delight:** create one product-specific memorable moment that helps or rewards the user.
- **overdrive:** propose ambitious visual/technical treatments (3D, WebGL, scroll choreography, cinematic transitions, generative imagery) with fallbacks and costs.
- **typeset:** develop typography as one instrument within the larger visual system, not the entire visual system.
- **critique / polish:** assess rendered fidelity, composition, assets, hierarchy, and craft, then fix the highest-impact issues.

This action vocabulary is informed by the public Impeccable skill by Paul Bakaus. Web Forge uses its own workflow and authored guidance; it does not bundle or copy Impeccable source files. See `references/impeccable-integration.md`.

## 8. Protect usability and craft

Ambition must be proportional to the surface. A dashboard does not need particles, and a luxury campaign does not need to look like an admin template. Effects must be progressive enhancements; preserve keyboard access, reduced motion, low-end devices, touch, performance, contrast, and localization. Do not use visual novelty to obscure the task or fabricate evidence.

## Deliverable

A Visual World section in `DESIGN.md` containing: selected family, ambition level, source-world rationale, palette/material strategy, media composition, asset plan, graphic language, signature visual, motion, responsive art direction, deliberate exclusions, and evidence. The rendered UI must visibly express the selected world.
