---
name: design-concept-engineering
description: Models a web product's users, tasks, domain objects, content, environment, and constraints before creating a distinctive structural and visual concept. Use for new products, major redesigns, generic-looking results, or requests for a different visual identity.
---

# Design Concept Engineering — discover the product before the template

A successful design is not merely a novel wireframe. It must fit the product, communicate through a deliberate visual world, and use real content and media. Web Forge runs two separate discovery tracks: **structure** (where things are and how users act) and **art direction** (what the product looks, feels, and sounds like). Both are required for substantial visual work.

## 1. Build a context ledger

Separate observed facts, user-provided facts, inference, and unknowns:
- users, expertise, task frequency, urgency, environment, input modes;
- product purpose, domain nouns, user verbs, relationships, decision points, error cost;
- real content, data density, assets, media, variable strings, empty/error/loading states;
- business goals, trust constraints, commercial model, non-goals;
- brand commitments, current visual system, existing recognisable assets;
- framework, components, performance, accessibility, supported browsers, language/RTL;
- cultural context, audience expectations, date/number conventions, local visual traditions.

Do not invent user research, brand facts, metrics, or competitor analysis. Inspect the repository and rendered product before declaring a surface greenfield.

## 2. Model the product

Write:
- **Nouns:** entities and artifacts the user sees or manages;
- **Verbs:** operations the user performs;
- **Relationships:** how records, media, people, places, and decisions connect;
- **Success:** what the user understands, decides, creates, or completes;
- **Content shape:** sequence, collection, record, comparison, narrative, live feed, spatial system, creative artifact, or mixed;
- **Attention peaks:** the one or two things that should dominate the first glance.

## 3. Classify the surface mode

Use the surface's job, not the company's industry:
- **Persuade:** earn attention, trust, and action;
- **Operate:** help users complete a repeated or consequential task;
- **Read:** support comprehension, orientation, and source understanding;
- **Experience:** put an artifact, collection, or exploration at the center.

This choice changes the appropriate density, ambition, media strategy, and motion. Never assume every product is a dashboard or every first page is a marketing hero.

## 4. Write a design thesis

> Because **[specific user]** needs to **[task]** under **[constraint]**, this surface organizes **[real content/objects]** around **[useful interaction/hierarchy]**, and expresses **[credible visual world]**.

If the thesis could be moved unchanged to an unrelated product, it is too generic.

## 5. Explore structure and visual world independently

### Structural candidates

Use `design-generation-engineering` to compare three candidates that differ in first-screen anchor, navigation, main regions, content topology, information density, interaction model, media role, and responsive transformation. Render them when the environment supports it.

### Visual-world candidates

Use `visual-art-direction` to discover at least seven possible visual systems for a new/replaced identity and select a world with a reason. Do not let the structure stage silently decide that the visual system must be neutral or minimal. Explore image-led, editorial, cinematic, photographic, illustrative, 3D, collage, material, graphic, data, and other families as relevant. Use at least three source families when deriving a new world.

### References

Use `brand-reference-engineering` to search first-party design systems and community DESIGN.md libraries. Label their authority correctly. Use references to expand the visual vocabulary and extract a small number of transferable rules; do not clone a famous site's layout or assets.

### Assets

Use `visual-asset-direction` to identify actual photography, illustration, product captures, diagrams, data visuals, 3D, video, or textures needed. A media plan must describe composition, not merely say "add image".

## 6. Select with a two-part scorecard

Evaluate each concept independently for:
- product/task fit;
- content integrity;
- structural usefulness;
- visual-world specificity and ambition appropriate to the mode;
- visual proof and media relevance;
- audience, market, and brand credibility;
- accessibility and responsive feasibility;
- implementation cost and performance.

Reject a result that passes structural diversity but still collapses into the same text-only minimal visual world. Reject a visually spectacular result that weakens the task.

## 7. Document before building

Save `DESIGN.md` or the repository's established equivalent. Include a Product Context section, surface mode, design thesis, chosen structural concept, visual world, design references with provenance, asset plan, component contracts, responsive logic, deliberate exclusions, and validation evidence.

## Definition of done

- context and unknowns are explicit;
- domain nouns, verbs, relationships, and content shapes drive the product model;
- three structural candidates are compared;
- art direction is chosen separately from structure;
- the result is not a text-only/minimal default unless a real reason supports it;
- source and rights of visual references/assets are documented;
- implementation and rendered review can be traced back to the selected concept.
