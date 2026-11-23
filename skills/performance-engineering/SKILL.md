---
name: performance-engineering
description: Diagnoses and improves real web performance using field data, lab traces, Core Web Vitals, bundle analysis, and browser evidence. Use for slow pages, loading delays, interaction jank, layout shifts, or performance budgets.
---

# Performance Engineering

Optimize measured user experience, not arbitrary scores. Separate field performance (real users) from lab diagnostics (controlled reproduction).

## 1. Establish the baseline

- Identify target routes, devices, network conditions, deployment environment, and critical user journeys.
- Prefer field data from Search Console/CrUX/RUM when available. Record date range, URL grouping, percentile, and sample limitations.
- Run reproducible lab tests (for example Lighthouse or browser performance traces) with consistent settings. Do not compare scores from different conditions as if they were equivalent.
- Record baseline metrics and the largest user-visible bottleneck before changing code.

## 2. Core Web Vitals reference

Use current official thresholds and verify them when the project is evaluated:

| Metric | Good target | What to investigate |
|---|---:|---|
| LCP | ≤ 2.5 s | server response, critical resource discovery, image priority/size, render-blocking CSS/fonts |
| INP | ≤ 200 ms | long tasks, expensive handlers, hydration, synchronous work, third-party scripts |
| CLS | ≤ 0.1 | missing image/video dimensions, injected content, font swaps, late banners, unstable embeds |

Field assessment commonly uses the 75th percentile. A passing lab score is not proof that field users have good CWV.

## 3. Diagnose by bottleneck

- **Navigation/server:** redirects, TTFB, caching, compression, CDN, server rendering and data waterfalls.
- **LCP:** identify the actual LCP element; optimize its discovery, dimensions, format, responsive source, fetch priority, and avoid lazy-loading it when it is initially visible.
- **Images/media:** use responsive formats and sizes, explicit dimensions/aspect ratio, appropriate lazy loading below the fold, and avoid shipping oversized assets.
- **Fonts:** reduce families/weights, subset where safe, self-host where practical, use a metric-compatible fallback and avoid invisible text.
- **JavaScript/INP:** inspect long tasks and event handlers, reduce unnecessary client JS, split route-level code, defer noncritical work, and avoid expensive synchronous rendering.
- **CLS:** reserve space for media/ads/embeds, stabilize banners, check font metric shifts, and avoid inserting content above the current viewport.
- **Third parties:** inventory scripts by purpose, cost, consent, and necessity; remove or delay nonessential work.

## 4. Prioritize and implement

Rank fixes by user impact, affected traffic, confidence, implementation risk, and effort. Prefer root-cause fixes over score gaming. Preserve accessibility, analytics integrity, and product behavior. Avoid premature caching or preloading that increases bytes or makes other routes slower.

## 5. Verify

Repeat the same lab conditions and route after changes. Compare metric values and trace evidence; check bundle/network changes. For field improvements, allow sufficient real-user data to accumulate and report the observation window. State clearly what is measured, estimated, or not available.

## Output

Baseline and conditions; field versus lab data; identified bottleneck and evidence; ordered fixes; before/after measurements; regressions/trade-offs; and unverified areas.

## Primary references

- https://web.dev/articles/vitals
- https://web.dev/articles/defining-core-web-vitals-thresholds
- https://developers.google.com/search/docs/appearance/core-web-vitals
