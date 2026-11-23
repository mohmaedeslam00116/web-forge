# Visual direction contract

This contract supplements the eight-field `layoutDNA` structural fingerprint. Structural difference and art-direction difference are separate checks; both must pass for substantial design work.

Each candidate must provide a `visualDirection` object:

```json
{
  "family": "cinematic-storytelling",
  "ambition": "immersive",
  "worldSources": ["film-title-sequences", "architectural-lighting"],
  "sourceFamilies": ["cinema", "architecture", "material"],
  "paletteStrategy": "committed",
  "mediaApproach": "full-bleed-original-photography-plus-product-render",
  "heroVisual": "A high-angle night-time city scene with the actual product device in the foreground",
  "graphicLanguage": "Oversized frame numbers, narrow utility labels, and a red route trace",
  "depthAndMotion": "Layered scene with restrained parallax and a static poster fallback",
  "signatureVisual": "The product outline cuts through the city grid and anchors the primary proof",
  "assetPlan": [
    {"type":"photography","purpose":"establish-scene","source":"new-original-or-licensed","composition":"wide 16:9 with focal point right"},
    {"type":"product-render","purpose":"show-the-object","source":"actual-product-asset","composition":"foreground cutout"}
  ],
  "rationale": "The surface must create a sense of place and demonstrate the product, so a text-only hero would fail."
}
```

## Required fields

- `family`: one visual family from `visual-world-catalog.md` or a precise authored hybrid.
- `ambition`: `restrained`, `composed`, `expressive`, or `immersive`.
- `worldSources`: at least two concrete source-world references, not abstract adjectives.
- `sourceFamilies`: at least two distinct material/cultural source families.
- `paletteStrategy`: `restrained`, `committed`, `full-palette`, `drenched`, or `image-led`.
- `mediaApproach`: the role and medium of visual material, or a specific reason media is intentionally absent.
- `heroVisual`: concrete first-screen anchor or `none — [specific task/content rationale]`.
- `graphicLanguage`, `depthAndMotion`, `signatureVisual`, and `rationale`: describe visible decisions.
- `assetPlan`: real planned visual assets with purpose, source, and composition. For intentionally text-led Operate/Read surfaces, use an empty array only with a specific written rationale.

## Diversity gate

- The three candidates must not all use the same family, ambition, or palette strategy.
- All candidates must describe a visible visual world, not just `modern`, `clean`, `premium`, or `minimal`.
- Persuade and Experience concepts must include at least two media-bearing candidates with concrete asset plans unless the user explicitly requested text-only work.
- If all three candidates have `paletteStrategy: restrained`, or all use `mediaApproach: none`, the visual direction gate fails.
- A media-bearing candidate must include at least one asset slot with a purpose and composition; generic `image here` does not count.
- A candidate may remain minimal only with a product/user reason and enough visual craft to make its hierarchy intentional.

The checker is a screening guardrail. It cannot assess taste, asset relevance, or whether a photo/illustration is actually good. The rendered preview still needs human review.
