---
name: design-review
description: Reviews rendered product interfaces for task fit, visual quality, image/media craft, design-world fidelity, template repetition, accessibility, and responsiveness.
---

# Design Review — test product fit and visual craft

A page can pass structural divergence and still look visually empty. Review the rendered implementation against both the selected layoutDNA and visualDirection. Source-code inspection alone is not a visual review.

## 1. Evidence

Record routes, states, browser/version, viewport, locale, theme, data, screenshots, and commands actually run. Inspect the first viewport and full page at the relevant breakpoints. If the browser or assets are unavailable, mark visual checks NOT VERIFIED.

## 2. Product and structure

Complete the primary task where possible. Verify that real domain objects, content, relationships, and actions shape the page. Compare the rendered layout with the selected candidate and baseline where applicable.

## 3. Visual-world fidelity

Check whether the rendered result expresses its selected family through more than font and color:
- media choice, quality, crop, focal point, and scale;
- palette strategy and color ownership of meaningful regions;
- illustration/data/graphic language and signature visuals;
- materials, depth, surfaces, lighting, and composition;
- page rhythm, information density, and visual hierarchy;
- motion quality and reduced-motion fallback.

## 4. Text-only/minimal default detector

For Persuade and Experience, mark NEEDS WORK when the first viewport is only headline, paragraph, buttons, whitespace, and thin dividers despite the brief needing imagery, product proof, or atmosphere. Check whether the asset plan has been implemented. A visual anchor can be photography, illustration, actual product capture, 3D, video, a data/diagram composition, or another meaningful artifact. Do not demand decorative images when the surface genuinely benefits from text or a working tool.

For Operate/Read, assess whether diagrams, charts, media, annotations, data, or typography best support the task. A dense table can be correct; a visually empty dashboard despite rich product data is not.

## 5. Reference and originality

Verify that official/community references are labeled correctly and that their useful rules were adapted rather than copied. Look for borrowed logos, proprietary images, brand names used as decoration, copied hero layouts, or references that overwhelm product identity.

## 6. Browser and craft

Check images loading and responsive crop; no layout shift; readable overlay contrast; focus and keyboard; zoom/reflow; RTL; real controls; animation timing; performance; and runtime errors. Verify that visual assets are not broken, unrelated, or fake product proof.

## 7. Remediation order

Fix in this order: product/task model → content hierarchy → structural composition → visual world/media composition → typography and density → color/surface/texture → motion and micro-detail. Do not patch a visually empty concept with random gradients or stock photos.

## Verdict

Use PASS / NEEDS WORK / NOT VERIFIED. Separate task usability, structural divergence, visual craft, reference integrity, accessibility, responsiveness, and technical behavior. A good visual-direction score cannot compensate for broken tasks or accessibility.
