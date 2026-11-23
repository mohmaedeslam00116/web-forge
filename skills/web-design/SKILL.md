---
name: web-design
description: Product-specific web design and implementation router that forces structural concept exploration, rendered proof, and anti-template validation for meaningful design work.
---

# Web Design — discover, generate, render, verify

The interface must follow the product's real tasks, content, users, brand, and environment. Do not start by applying a familiar UI shell. Do not call a palette change a redesign.

## Route by intent

| User request | Mandatory path |
|---|---|
| New product, website, or major surface | `ui-architecture` → `design-concept-engineering` → `design-generation-engineering` → `design-direction` → `design-layout` → `design-system` → implementation → `design-review` |
| Same-looking output, generic design, rejected redesign, “make it completely different” | Capture baseline → `design-review` diagnosis → `design-concept-engineering` → `design-generation-engineering` in radical-redesign mode → direction/layout/system → implementation → rendered review |
| New route or feature | Inspect Design Passport → `ui-architecture` if task/flow changes → `design-layout` → selected specialist(s) → implementation → focused rendered review |
| Small isolated UI fix | Inspect current route/component → implementation → focused review; do not force a full concept process |
| Design system/component work | `design-concept-engineering` when product model is unclear → `design-system` → test in multiple contexts → review |
| Responsive, keyboard, accessibility, or visual regression | `design-layout` + relevant specialist (`accessibility-engineering`, `browser-qa`, `visual-regression-engineering`) + `design-review` |
| Audit or release | `web-audit` or `release-gate`, then route findings to focused specialists |

## Non-negotiable rules for meaningful design work

1. Inspect the actual project, routes, content, assets, design system, and current render before changing it.
2. Identify whether the task is a new product, new surface, evolutionary redesign, or radical redesign.
3. Run `design-generation-engineering`. It requires three structurally different candidates and a machine-checkable layout fingerprint before high-fidelity implementation.
4. Do not begin styling before a candidate is selected. Palette, font, radius, shadows, and animation do not count as structural differences.
5. For radical redesigns, preserve the old baseline for comparison but do not let its generic shell silently dictate the new composition.
6. Implement the selected concept. Do not drift back to the agent's usual centered hero, KPI row, three-card grid, and sidebar unless the task evidence explicitly justifies that structure.
7. Render the actual page and review it against the candidate. If the structure has reverted, return to layout—not cosmetics.
8. Share components for shared semantics and behavior. Do not unify unrelated surfaces merely for visual sameness.
9. Report what was rendered and tested, what passed/failed, and what is not verified.

## Anti-template failures

A significant design is **NEEDS WORK** when it changes only skin; uses the same first-screen silhouette without justification; imposes a universal page shell; ignores real content; or fails the divergence contract. Do not hide these failures with extra visual effects.

## Completion contract

Deliver a working interface, the Design Passport and concept manifest for meaningful design work, validator output, rendered evidence, responsive/accessibility findings, and unverified limitations. A passing structural validator alone is not design approval.
