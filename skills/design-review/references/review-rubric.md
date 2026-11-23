# Product-specific design review rubric

Use PASS / NEEDS WORK / NOT VERIFIED. A high visual polish score cannot compensate for a failure in task clarity, accessibility, or content integrity.

| Dimension | Review question | Evidence |
|---|---|---|
| Task clarity | Can the user identify and complete the main job? | Observed task path, not a subjective impression |
| Product specificity | Does structure expose this product's real entities and relationships? | Relabel/swap and content tests |
| Structural identity | Does the grayscale silhouette still have purposeful composition? | Wireframe or grayscale inspection |
| First-screen relevance | Is the primary artifact, decision, or action immediately clear? | First viewport and user task |
| Hierarchy | Does visual emphasis reflect importance? | First-glance/squint test, grouping, scale, contrast |
| Content integrity | Do actual content and edge cases fit naturally? | Real data, long text, empty/error states |
| Pattern discipline | Are cards, grids, panes, and components justified? | Use/anti-use contracts and route comparison |
| Route coherence | Are routes consistent where they share tasks and distinct where jobs differ? | Route matrix and rendered views |
| Design grammar | Do tokens and components carry meaning and intent? | Design Passport and component contracts |
| Responsive behavior | Does the composition transform without losing key tasks? | Measured viewports and interaction checks |
| Accessibility | Are semantics, keyboard, focus, contrast, motion, language, and RTL considered? | Automated and manual evidence within scope |
| Craft | Are interactions, media, fonts, and layout stable? | Browser, console, network, and screenshot evidence |

## Anti-sameness score (diagnostic only)

Score each question 0–2: 0 = fails, 1 = partial/unclear, 2 = evidenced pass.

1. Structural thesis is derived from this product.
2. First viewport is not a pasted default hero/shell.
3. Actual content shapes grouping and hierarchy.
4. At least one product-specific interaction or content mechanism is present, or omission is justified.
5. Similarity to unrelated products is low for structural reasons, not only color/type.
6. Components are shared by meaning/behavior and not only appearance.

A total below 9/12 means the concept must be revisited before polishing. This is a review heuristic, not a scientific measure of originality.
