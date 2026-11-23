---
name: brand-reference-engineering
description: Finds, evaluates, and applies official or community DESIGN.md references from real brands and websites. Use when a project needs a stronger visual identity, brand inspiration, design-system extraction, or evidence-based visual references.
---

# Brand Reference Engineering — learn from real design systems

Use real design systems to expand the visual vocabulary, not to make every website a clone of a famous brand. A reference is evidence about a visual language; it is not a permission to reuse proprietary assets or copy an entire page.

## 1. Establish source authority

Classify each source before using it:

1. **First-party / official:** a DESIGN.md or design-system document published by the brand itself. Treat this as the strongest statement of its intended tokens and rules, while checking its version and scope.
2. **First-party design system documentation:** official component, typography, color, and accessibility documentation, even if it is not named DESIGN.md.
3. **Community analysis:** a reverse-engineered summary of public website styling. Useful for inspiration and pattern discovery, but it is not brand-authored and may be incomplete, stale, or inaccurate.
4. **Visual observation:** screenshots or current live site behavior. Useful for validating a written reference, but subject to personalization, experiments, region, and time.

Never describe a community analysis as an official brand guide. Record source type, URL, access date, license/terms, and what was actually inspected.

## 2. Search the maintained collections

Use the collection index in `references/brand-reference-sources.md`. Start with a category, not a famous brand name alone. Find 2–4 references with useful differences in media strategy, density, atmosphere, typography, graphic language, and surface mode. For a direct brand request, search the brand in the official collection first, then use community analysis as a cross-check.

Fetch only the files needed for the task. Do not bulk-clone hundreds of brand files into a project's working tree. Inspect the repository directory to discover the exact filename and path; do not assume every collection uses the same casing or folder layout.

## 3. Extract design decisions, not decorations

For each reference note:
- product and surface mode;
- hierarchy and content strategy;
- composition and navigation;
- image, illustration, 3D, and data strategy;
- color roles and dosage;
- typography roles and real font availability;
- geometry, surfaces, borders, depth, and materials;
- interaction and motion grammar;
- responsive transformations;
- what should *not* be copied.

Prefer transferable principles such as "photography owns the first viewport" or "the table is the main working surface" over superficial labels such as "minimal, premium, modern".

## 4. Synthesize a reference direction

Create a small reference matrix: source, authority, useful lesson, conflict with this product, adapted decision. Choose one primary reference and at most two secondary influences unless the user asks for a broader moodboard. Do not average several brand identities into an indistinct middle.

Translate the lessons into the product's own nouns, data, assets, and interaction. If a reference's signature depends on a logo, proprietary font, illustration, photography, or trademark, replace it with original or properly licensed material.

## 5. Validate freshness and fit

Check the live site or current official documentation if the exact current appearance matters. Compare reference claims with source artifacts; if a font, palette, asset, or component cannot be verified, mark it as inferred. Prefer official tokens over scraped approximations. Respect each repository's license and each site's terms; do not copy proprietary assets merely because a community DESIGN.md lists them.

## Deliverable

A Design References section in the project's `DESIGN.md`: selected references, authority and provenance, adapted lessons, rejected patterns, unknowns, and links. A reference is successful only when it strengthens product fit and visual character without turning the result into a clone.
