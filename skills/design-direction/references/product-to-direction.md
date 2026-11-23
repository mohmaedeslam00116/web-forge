# From product truth to design decisions

Do not map an industry name directly to a visual style. Two products in the same category can have different users, tasks, risks, and content. Use this diagnostic chain instead.

## The chain

**User situation → task → domain objects → information relationship → decision → interface structure → visual emphasis.**

Example reasoning (illustrative, not a template):

- If users must detect urgent exceptions across many live assets, expose the exceptions and their consequences before secondary analytics. A map, queue, table, timeline, or mixed view should be selected only after confirming the actual spatial and operational needs.
- If users spend long sessions reading sequential chapters, protect reading measure, continuity, progress, typography, and navigation. A grid of promotional cards should not dominate the reading surface.
- If users compare complex alternatives, preserve comparable fields and differences. A storytelling hero is unlikely to be the main workspace structure.
- If users create and revise a complex artifact, prioritize the editing surface, context, history, and safe recovery over marketing-page composition.

## Diagnostic prompts

1. What does the user come to this screen to do within the first 30 seconds?
2. What object are they looking at or changing?
3. What must they compare, remember, or decide?
4. What is the most costly misunderstanding?
5. What information is live, historical, hierarchical, spatial, sequential, or user-authored?
6. What needs to remain visible while the user acts?
7. Which platform convention prevents friction?
8. Which product-specific behavior should be visible in the layout?
9. What evidence supports a visual metaphor or signature mechanism?
10. What must be omitted because it distracts from the job?

## Translation table

| Product evidence | Design implication to investigate | Do not jump directly to |
|---|---|---|
| High task frequency | Fast scanning, stable locations, keyboard paths | A sidebar dashboard by reflex |
| Long-form content | Reading measure, typographic hierarchy, continuity | A feed of cards |
| Spatial relationships | Spatial overview with clear non-spatial alternatives | A map for data that is not geographic |
| Many comparable records | Consistent fields, sorting, filters, comparison | A gallery of unrelated tiles |
| Sequential work | Progress, sequence, backtracking, recovery | A generic stepper for every action |
| High-risk action | Context, consequence, confirmation, audit trail | Decorative warning colors alone |
| Exploration and discovery | Search, taxonomy, editorial curation, meaningful previews | Infinite masonry grid automatically |

The table proposes questions, not fixed answers. Validate each implication against actual content and user context.
