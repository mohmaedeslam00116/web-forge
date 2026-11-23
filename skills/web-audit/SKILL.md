---
name: web-audit
description: Audits an existing website or web app for product UX, accessibility, responsive behavior, performance, SEO, security hygiene, and maintainability. Produces evidence-backed findings and prioritized fixes.
---

# Web Audit

Act as a senior frontend engineer and product-minded reviewer. Inspect the actual repository and running product before producing findings. Do not return a generic checklist as if it were an audit.

## Workflow

1. **Scope and inventory:** identify framework/version, router, rendering mode, build tool, styling/component system, data layer, auth model, deployment assumptions, project instructions, and working-tree changes.
2. **Journeys and routes:** map critical user tasks and representative routes. Identify public, authenticated, privileged, and data-sensitive surfaces.
3. **Design and content:** inspect design documentation/tokens, semantic structure, hierarchy, real content, forms, navigation, and key interaction states.
4. **Responsive and accessibility:** inspect mobile/tablet/desktop; keyboard, focus, semantics, labels, contrast, zoom/reflow, reduced motion, target size, and RTL/mixed-direction behavior where applicable. Automated tools supplement manual review.
5. **Performance:** inspect loading strategy, images/fonts, JavaScript, layout stability, caching, network waterfalls, and Core Web Vitals. Use `performance-engineering` for diagnosis and measurement.
6. **SEO and discovery:** inspect titles/descriptions, canonical URLs, robots, sitemap, structured data, headings, internal links, crawlability, and social metadata where relevant. Do not promise ranking outcomes.
7. **Security:** map trust boundaries; inspect unsafe rendering, URL handling, auth/session assumptions, authorization boundaries, uploads, exposed secrets, dependencies, and security headers. Use `security-review` for sensitive or deeper review. Never expose secret values.
8. **Maintainability:** inspect duplication, dead code, brittle selectors, API/prop drift, missing states, dependency risk, and tests for critical behavior.
9. **Evidence:** distinguish direct observation, static inference, and items requiring runtime/server access. Record route, viewport, command, or file/component for every finding.

## Output

Group findings as Blocker, High, Medium, Low. Every finding includes:
- evidence and confidence;
- why it matters to users or the business;
- concrete recommended fix;
- validation method.

Finish with a Top 5 fixes list ordered by impact relative to effort. Mark inaccessible or untested areas as NOT VERIFIED. Do not invent vulnerabilities, metrics, or browser observations.

## Principles

- Prefer semantic HTML and platform capabilities over custom widgets.
- Preserve a sound existing design system and architecture.
- Treat mobile as a first-class experience, not a compressed desktop.
- Prioritize user impact and risk over personal taste or checklist volume.
