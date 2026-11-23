---
name: design-concept-engineering
description: Creates genuinely product-specific web design concepts and prevents generic AI-generated layouts. Use before designing a new product, major page, redesign, or any interface that keeps resembling a familiar template.
---

# Design Concept Engineering

This is Web Forge's design reasoning engine. Its job is not to select a trendy visual style. Its job is to discover the interface that follows from this product's actual users, work, content, environment, and constraints.

A polished interface can still be generic. A different color palette, font, radius, or gradient does not make a different design. Treat composition, hierarchy, content model, navigation, interaction, and visual grammar as the primary design decisions.

## Operating contract

- Run this skill for a new product, a new major surface, a substantial redesign, or a repeated-design complaint.
- Do not run a full concept process for a one-line copy edit or a small isolated bug fix. Preserve the existing system unless evidence says it is the cause.
- Inspect the real repository, current interface, project instructions, existing tokens, component library, assets, and user-provided references before inventing a direction.
- Never claim to have viewed a page, screenshot, Figma file, or user research artifact that was not actually accessible.
- Do not ask the user to choose among generic style labels. Resolve decisions from evidence; ask one question only when a missing answer materially changes the product or task.

## Phase 1 — Build a context ledger

Record the facts that will materially change a design decision. Separate **observed**, **provided**, **inferred**, and **unknown** information.

1. **User and task:** primary users, expertise, frequency, urgency, mental model, accessibility needs, and the action or understanding that defines success.
2. **Product truth:** what the product does, the domain objects it handles, the verbs users perform, the relationships between objects, and the cost of mistakes.
3. **Content reality:** actual text, records, imagery, data density, field lengths, states, empty conditions, and source quality. Do not design around placeholder content when real content exists.
4. **Usage environment:** device, available attention, input mode, ambient conditions, network constraints, and supported viewport range.
5. **Business context:** product maturity, commercial model, trust requirements, success measures, delivery constraints, and non-goals.
6. **Brand history:** existing identity, established patterns, user recognition, legacy decisions, and components that must remain familiar.
7. **Platform and technical context:** framework, component system, performance budget, browser support, accessibility obligations, localization, RTL, and engineering capacity.
8. **Cultural and language context:** market, conventions, content voice, language direction, date/number formats, imagery sensitivity, and meaning of symbols.

If an important dimension is unknown, explicitly state the assumption and choose the least risky reversible decision. Do not fabricate personas, analytics, metrics, brand history, or competitor research.

## Phase 2 — Extract the product's design primitives

Before choosing a layout, write a compact semantic model:

- **Nouns:** the real entities the user sees or manages.
- **Verbs:** the operations the user performs.
- **Relationships:** how those entities connect, compare, depend on, or change over time.
- **Decision moments:** where users need context, evidence, confirmation, or recovery.
- **Attention peaks:** the one or two things that deserve strongest visual emphasis on this surface.
- **Content shape:** whether the core material behaves like a sequence, collection, record, comparison, narrative, spatial system, live feed, editor, or another structure. Treat these as descriptions of the information, not design templates.

The interface should make the product's important nouns, verbs, and relationships visible. A fleet tool should reveal vehicles, routes, exceptions, and dispatch decisions; a reading product should privilege text, discovery, progress, and reading continuity. Do not merely skin both as the same dashboard or card catalogue.

## Phase 3 — Form a design thesis

Write one sentence in this form:

> Because **[specific user]** needs to **[specific task]** under **[real constraint]**, this surface should organize **[real information]** around **[useful interaction or hierarchy]**, while expressing **[credible product character]**.

Reject theses that could be copied unchanged to an unrelated product. The thesis is a testable explanation, not marketing copy.

## Phase 4 — Explore genuinely different compositions

For substantial work, develop three low-cost structural candidates before committing. This is an internal design exercise unless the user asks to see alternatives.

Each candidate must specify:
- first-viewport anchor and eye path;
- page or workspace composition;
- navigation and orientation model;
- content order and grouping logic;
- density and measure;
- media or data-display strategy;
- primary interaction model;
- responsive transformation.

Make candidates differ in at least four structural dimensions, not just colors, fonts, or decorative treatment. A centered hero with a different accent is not a new candidate. Examples of structural contrast include: object-first versus task-first; continuous editorial flow versus multi-pane workspace; index-led exploration versus guided sequence; spatial canvas versus chronological ledger. These are comparison axes, not preset styles.

Represent candidates cheaply: annotated wireframes, rough DOM skeletons, layout maps, text-only silhouettes, or separate prototype branches. Do not spend time polishing all candidates. Compare them on:

| Test | Question |
|---|---|
| Task fit | Does the structure shorten or clarify the real task? |
| Semantic fit | Does it expose the product's objects and relationships? |
| Content fit | Can real content inhabit it without filler or distortion? |
| Product specificity | Would the same structure make sense for an unrelated product? |
| Trust and tone | Does it feel credible in this context and market? |
| Accessibility | Can its hierarchy and interactions be made accessible? |
| Feasibility | Can the existing stack and team implement it without fragile hacks? |
| Adaptability | Can the composition reorganize at narrow and wide viewports? |

Choose the strongest candidate based on evidence. Do not choose the most unusual candidate merely because it is unusual. Record why the alternatives were rejected.

## Phase 5 — Define a functional signature

Identify one product-specific mechanism that could become recognizable because it helps users: an exception queue, comparison spine, chapter navigator, route timeline, audit trail, visual editor, collection index, or another mechanism derived from the product.

A signature is not a logo decoration. It must make a task faster, information clearer, or product identity more legible. If there is no useful signature, do not invent one.

## Phase 6 — Write the design grammar

Turn the selected concept into explicit rules before polishing code. Define only what the product needs:

- composition: anchor, reading path, major regions, measure, alignment, and grouping;
- hierarchy: what is dominant, supporting, quiet, or contextual;
- typography: roles, language coverage, line length, numerals, and content voice;
- color: brand roles, semantic roles, contrast pairs, and where color must not be used;
- geometry: edges, radii, borders, containment, and elevation;
- component grammar: when a row, table, card, panel, list, canvas, or plain text is appropriate—and when it is not;
- media: what deserves imagery, illustration, diagrams, or no media;
- interaction: focus, selection, feedback, transitions, error prevention, and recovery;
- responsive logic: what moves, changes role, collapses, or remains persistent;
- exclusions: generic patterns intentionally rejected and the product reason.

A design system should preserve these product-specific decisions. It must not flatten all routes into identical sections or all content into one card component.

## Phase 7 — Pass the anti-template challenge

Before implementation is considered designed, answer all of the following:

1. **Silhouette test:** If all colors, shadows, and fonts were removed, would the structure still have a recognizable product-specific logic?
2. **Swap test:** Could this page be relabeled as a different unrelated product without changing its structure or content model? If yes, it is too generic.
3. **First-screen test:** Does the first viewport communicate the actual task or artifact, rather than a default headline/subtitle/button/illustration arrangement?
4. **Content test:** Are the real records, words, images, and states shaping the layout—or is the layout forcing content into generic placeholders?
5. **Component test:** Are cards, pills, equal columns, and decorative labels used because of their job, or because they are the agent's defaults?
6. **Route test:** Do pages with different tasks have appropriate differences, while shared patterns remain consistent where users benefit?
7. **Reference test:** Does the result reproduce an inspiration site's signature without permission or reason, or is it using references only to understand a design problem?

If a test fails, return to composition and hierarchy. Do not try to rescue the design with a new palette.

## Phase 8 — Carry context into implementation

Save the Design Passport using `../design-direction/references/design-passport-template.md` or the repository's established equivalent. Keep it near the code or design decisions. Add usage and anti-usage notes to new shared components. Include acceptance checks for the chosen concept in the implementation plan.

## Definition of done

A design concept is ready when:
- context facts and unknowns are explicit;
- a design thesis is product-specific;
- materially different structural candidates were compared for substantial work;
- a defensible composition was selected;
- a functional signature was found or deliberately omitted;
- product-specific visual and component rules are documented;
- the anti-template challenge passes or remaining failures are disclosed;
- accessibility, responsiveness, and technical feasibility are accounted for.

## Research basis

See `references/design-context-and-evidence.md` for the external foundations informing this workflow. The references inform decisions; they are not style prescriptions.
