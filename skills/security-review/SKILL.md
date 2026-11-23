---
name: security-review
description: Performs a practical, threat-informed review of web frontend and application boundaries including XSS, authentication, authorization, sessions, uploads, dependencies, secrets, and unsafe redirects. Use when security-sensitive code or user data is involved.
---

# Web Security Review

Review defensively. Do not exploit production systems, exfiltrate data, request secrets, or make destructive changes. This is an engineering review, not a penetration-test certification.

## 1. Map trust boundaries

Identify browser, server/API, identity provider, database/storage, third-party scripts, build/deploy pipeline, and user-controlled inputs. Determine which decisions are enforced server-side. Treat browser state and client-side route guards as untrusted.

## 2. Review high-risk areas

- **XSS and rendering:** trace untrusted data into HTML, DOM sinks, templates, Markdown/rich-text renderers, URLs, and CSS. Prefer text APIs/framework escaping; sanitize with a maintained allowlist sanitizer only when HTML is a product requirement. Avoid unsafe HTML escape hatches.
- **Authentication and sessions:** inspect cookie flags (`Secure`, `HttpOnly`, `SameSite`), session rotation after authentication/privilege change, expiry, logout invalidation, CSRF defenses, and reauthentication for high-risk actions. Do not store long-lived sensitive tokens in browser-accessible storage without a documented threat analysis.
- **Authorization:** verify every protected read/write on the server, including object-level ownership and tenant boundaries. UI hiding is not authorization.
- **CSRF/CORS:** verify origin policy, credential behavior, state-changing methods, anti-CSRF controls where cookie auth is used, and do not treat CORS as an authorization mechanism.
- **Uploads:** validate size, type and content server-side; generate safe storage names; isolate storage; prevent executable serving; consider malware scanning and decompression limits when relevant.
- **Secrets/config:** search for committed keys, source maps or client bundles containing secrets, permissive debug endpoints, and unsafe environment exposure. Never print secret values in findings.
- **Dependencies/supply chain:** inspect lockfile and audit output, lifecycle scripts, abandoned/high-risk packages, provenance/update policy, and dependency scope. Do not blindly upgrade major versions.
- **Redirects/URLs:** validate redirect destinations and URL schemes; prevent open redirects and unsafe `javascript:`/data URL handling.
- **Headers/deployment:** inspect HTTPS, CSP, HSTS, frame policy, MIME sniffing, referrer policy, and permissions policy in context; do not paste a generic CSP that breaks the app.

## 3. Classify findings

Use severity based on exploitability, impact, exposure, and required preconditions. Each finding must include affected component/route, trust boundary, evidence, attack consequence, safe remediation, and verification. Separate confirmed vulnerabilities from hypotheses requiring runtime or server access.

## 4. Verify safely

Use local/test environments and synthetic accounts/data. Add regression tests for the vulnerable boundary. Confirm server-side enforcement, not just UI behavior. Avoid live exploitation and do not claim a complete security assessment from static inspection alone.

## 5. Output

Executive risk summary; findings by severity; evidence and confidence; recommended fix order; tests performed; access limitations; and explicit statement that untested server/infrastructure layers remain unverified.

## Primary references

- https://cheatsheetseries.owasp.org/
- https://cheatsheetseries.owasp.org/cheatsheets/Frontend_Security_Cheat_Sheet.html
- https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html
- https://owasp.org/www-project-application-security-verification-standard/
