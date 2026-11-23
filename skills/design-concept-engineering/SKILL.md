---
name: design-concept-engineering
description: Models a product's users, domain objects, tasks, content, constraints, and design thesis before choosing an interface composition. Use as the discovery and reasoning stage for new products and major surfaces.
---

# Design Concept Engineering — discover the product problem

This skill answers **what the interface must help users understand or do**. It does not approve a design by itself. For actual layout generation and proof, hand off to `design-generation-engineering`.

## 1. Establish evidence

Inspect repository instructions, the current product, route structure, user-provided requirements, data models, real content, assets, brand documentation, existing components, platform constraints, locales, and accessibility requirements.

Separate facts into:
- **Observed:** directly found in code, running product, or provided artifact.
- **Supplied:** explicitly stated by the user.
- **Inferred:** plausible but not confirmed.
- **Unknown:** needs a reversible assumption or one essential question.

Never invent user research, business metrics, competitor facts, content, personas, or brand history.

## 2. Model the domain

Record the product's actual:
- users and levels of expertise;
- jobs, frequency, urgency, and success conditions;
- nouns/entities, verbs/actions, and relationships;
- decisions, permissions, risks, and recovery paths;
- content types, real examples, density, and edge cases;
- environment, device, input, language, locale, and direction;
- commercial, trust, platform, performance, and delivery constraints.

Do not jump from the industry name to an interface template. “A finance app” does not automatically mean a dashboard; “a learning app” does not automatically mean a course-card grid.

## 3. Classify each surface by its actual job

Use precise job language. Common modes include operate, read, persuade, explore, create, monitor, configure, compare, and transact. One product may contain several. Do not impose one global shell merely because routes belong to the same product.

## 4. Write the design thesis

> Because **[specific user]** needs to **[task]** under **[constraint]**, this surface should organize **[real information]** around **[useful hierarchy or interaction]**.

The thesis must name a real task and content model. If it can be pasted unchanged into an unrelated product brief, rewrite it.

## 5. Hand off, do not prematurely prescribe

Pass the evidence ledger, domain map, content inventory, route/surface map, constraints, and design thesis to `design-generation-engineering`. Do not prescribe a color palette, card grid, hero, sidebar, visual style label, or component inventory before the structural exploration.

For an existing product, include the current structural baseline and identify exactly which parts are intentional brand/interaction conventions and which are being challenged.

## Output

Keep the discovery report short enough to use. Include evidence status, domain model, user jobs, content shapes, route modes, constraints, design thesis, and unanswered questions. The next step is design generation, not a decorative moodboard.
