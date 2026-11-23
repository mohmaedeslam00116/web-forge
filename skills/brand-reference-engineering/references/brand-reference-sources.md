# Brand and DESIGN.md reference sources

Last reviewed: 2026-11-23. Re-check the upstream repository before depending on its inventory or file paths.

## First-party index

| Source | Authority | Use |
|---|---|---|
| [VoltAgent/official-design-md](https://github.com/VoltAgent/official-design-md) | First-party tracker | Find DESIGN.md files published by the companies/projects themselves. Current README lists Atlassian, Clerk, Mintlify, Nuxt, Resend, Vercel, and VoltAgent. |

This index explicitly distinguishes first-party documents from reverse-engineered collections. Follow its linked original documents; do not copy the index as if it were the brands' license grant.

## Community collections

| Source | Reported coverage | Use |
|---|---|---|
| [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | Broad brand collection; repository README describes brand analyses and DESIGN.md files with design tokens/patterns | Main community discovery catalog. Useful across AI, tools, fintech, retail, media, automotive, and productivity. |
| [dhananjay6561/design-md-hub](https://github.com/dhananjay6561/design-md-hub) | README advertises 120 brand systems and preview pages | Second independent analysis for cross-checking and previewing a brand treatment. |
| [SymonChu/design-md-templates](https://github.com/SymonChu/design-md-templates) | README advertises 74 templates derived from awesome-design-md | Convenient ready-to-use templates; verify the upstream source and notes before using. |
| [iFurySt/DESIGN.md](https://github.com/iFurySt/DESIGN.md) | Community collection of brand-inspired DESIGN.md files | Additional cross-check when the primary catalog does not cover a useful reference. |

Community documents are reverse-engineered interpretations, not official design specifications. Brand presence in a repository is not endorsement.

## Useful diversity examples to inspect

- editorial/news: Al Jazeera, The Verge, WIRED;
- high-image retail and sport: Nike, Shopify;
- hospitality and discovery: Airbnb;
- music/media: Spotify;
- creative tools: Figma, Framer;
- automotive/industrial: BMW, Bugatti;
- developer tools and product UI: Linear, Vercel, Raycast, Supabase.

These names are starting points in the community collections, not a preselected style list. Inspect each current DESIGN.md and preview before use.

## Optional methodology companion

[ pbakaus/impeccable ](https://github.com/pbakaus/impeccable) is a separate Apache-2.0 design-agent skill. Web Forge adapts high-level workflow ideas without bundling its source. See `../../visual-art-direction/references/impeccable-integration.md`.

## Suggested fetch protocol

1. Read a collection's README and license.
2. Locate the exact brand directory and its DESIGN.md / preview assets through the repository tree.
3. Fetch only the chosen file(s); note commit/ref and date.
4. Check whether it is official or community-derived.
5. Compare it with the brand's current live site or first-party docs if freshness matters.
6. Extract a few useful rules into the project's Design Passport; never paste the entire reference wholesale unless the user explicitly requests a brand reproduction and rights allow it.
