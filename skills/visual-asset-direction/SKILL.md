---
name: visual-asset-direction
description: Plans, sources, generates, integrates, and verifies photography, illustration, product captures, diagrams, 3D, video, textures, icons, and data visuals for web interfaces. Use when a design needs visual depth or when assets are central to the experience.
---

# Visual Asset Direction — make the visuals real

A visual asset is not a decorative substitute for content. It should demonstrate the product, establish a scene, explain a concept, help discovery, express an identity, or carry emotional meaning.

## 1. Create an asset brief before implementation

For every visual slot record:
- slot ID and page/route;
- role: anchor, proof, product demo, editorial, explanatory, navigation, atmosphere, or data;
- subject and what it must communicate;
- art direction: scene, composition, camera/framing, perspective, lighting, color, material, and mood;
- aspect ratio, focal point, safe crop, background, and responsive variants;
- source: user-provided, existing project asset, first-party brand asset, licensed/open asset, or newly generated original asset;
- rights/provenance, attribution, expiration/usage limits if known;
- alt text or decorative status; caption and credit if needed.

## 2. Pick the correct asset medium

- **Photography:** best for real products, places, people, food, fashion, hospitality, editorial proof, and atmosphere. Use authentic relevant images, not generic business-stock clichés.
- **Product capture / render:** best for software, devices, tools, and physical products. Use current genuine UI, coherent device frames, and realistic detail; do not fake feature proof.
- **Illustration:** best for explanation, complex abstract ideas, characters, playful brands, educational content, and campaign storytelling. Commission or generate a consistent set rather than mixing unrelated stock vectors.
- **3D / spatial:** best when shape, volume, material, configuration, or spatial understanding matters. Provide poster/static fallbacks and avoid GPU-heavy effects on low-end devices.
- **Diagrams / charts / maps:** best when relationships, process, comparison, geography, or evidence must be understood. Data must be real or clearly labeled illustrative.
- **Texture / material / graphic patterns:** best when the selected visual world depends on physical or print material. Keep text contrast and visual hierarchy intact.
- **Video / motion:** best for demonstrations, movement, performance, atmosphere, and transitions. Provide poster images, captions, controls, no-autoplay-sound, and reduced-motion behavior.

## 3. Avoid the text-only trap

For Persuade and Experience surfaces, inspect the first viewport. If it contains only text, buttons, empty space, and hairline dividers, ask whether it fails to show the actual product/artifact. Add a suitable anchor asset or a stronger graphic composition when it improves the message. For Operate and Read surfaces, images are optional; diagrams, charts, records, annotations, and typographic systems can be the primary visual material. Do not add stock images just to increase asset count.

## 4. Source and create responsibly

Use user/project assets first when suitable. Otherwise use properly licensed assets or original generated assets. Follow the available image-generation or design tools; never pretend a placeholder URL is a finished asset. Respect trademarks and do not recreate a real person's likeness, copyrighted character, or proprietary brand asset without authorization. Keep a provenance manifest with source URL, license/permission, creator, generated prompt or model when available, and date.

## 5. Integrate assets with the design system

- Create deliberate crop and focal-point rules; use art direction per breakpoint where a single crop fails.
- Reserve intrinsic dimensions/aspect ratios to prevent layout shift.
- Optimize format, dimensions, compression, loading priority, and responsive sources. Lazy-load below-the-fold assets; prioritize the true LCP image.
- Use overlays and text-on-image only with verified contrast across the actual crop.
- Use semantic alt text for informative images; empty alt for decorative images; captions/credits for documentary or editorial material.
- Keep SVGs, icons, illustration style, and image treatment internally consistent.

## 6. Verify rendered assets

Inspect at shipped breakpoints and real viewport sizes. Verify crop, resolution, focal point, contrast, loading, fallback, animation behavior, reduced motion, and meaningful content. Check that a visual asset does not push the primary task out of reach or obscure navigation. Confirm there are no broken URLs, fake screenshots, unrelated stock images, or missing rights notes.

## Deliverable

A route-level asset plan and provenance manifest, actual assets or clearly marked missing dependencies, responsive crop rules, performance treatment, alt text/captions, and browser-verified evidence.
