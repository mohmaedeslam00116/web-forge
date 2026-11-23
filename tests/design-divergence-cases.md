# Design divergence test cases

Use these cases during skill maintenance and adversarial review. The goal is not to prescribe a finished design, but to test whether the process produces distinct structures when the products have different tasks and content.

## Case A — long-form fiction reader

**Core nouns:** title, author, volume, chapter, bookmark, reading progress, library.  
**Core verbs:** discover, read, resume, bookmark, follow, download.  
**Dominant relationship:** sequential reading plus collection discovery.  
**Likely constraints:** long sessions, text measure, chapter continuity, low-distraction controls, mobile-first reading.

**Failure indicators:** analytics dashboard as the main surface; every chapter represented as a generic metric card; strong marketing hero inside the reading view; reading area visually secondary to decoration.

**Review prompts:** Is the chapter text the primary artifact? Can readers resume quickly? Are typography, progress, contents, and reading controls coherent?

## Case B — live fleet dispatch workspace

**Core nouns:** vehicle, driver, route, stop, incident, assignment, location, service status.  
**Core verbs:** assign, reroute, locate, investigate, resolve, communicate.  
**Dominant relationship:** live spatial state plus exception/dispatch workflow.  
**Likely constraints:** dense information, urgency, rapid scanning, map/list coordination, live updates, keyboard and accessible non-map alternatives.

**Failure indicators:** editorial hero layout; decorative map without actionable data; generic KPI tiles that hide incidents; same long-form content hierarchy as the fiction reader.

**Review prompts:** Can dispatchers find exceptions and act? Does spatial information genuinely affect decisions? Is there a clear non-map route to the same records?

## Case C — independent designer portfolio

**Core nouns:** project, client, role, artifact, medium, outcome, process.  
**Core verbs:** browse, inspect, compare, understand, contact.  
**Dominant relationship:** curated visual collection with case-study narratives.  
**Likely constraints:** image-led proof, strong art direction, variable media ratios, editorial pacing, clear attribution.

**Failure indicators:** operational dashboard shell; dense filter panel without a real need; uniform small cards that make every project equally important; decorative metrics not supported by evidence.

**Review prompts:** Do the strongest projects receive appropriate visual space? Is the visual work itself the main proof? Does each case study reveal role, process, and outcome?

## Cross-case test

After designing all three concepts, compare grayscale wireframes before reviewing colors or typefaces.

- The reader should foreground sustained text and continuity.
- The dispatch surface should foreground live state, exceptions, and spatial/task coordination where justified.
- The portfolio should foreground selected artifacts and editorial storytelling.

If all three share the same first-screen silhouette, navigation shell, equal-card grid, and content order, the concept process failed even if their colors differ.

## Release gate for this test

- [ ] Each case has a distinct design thesis derived from the case.
- [ ] At least four structural decisions differ across the concepts where tasks differ.
- [ ] No case contains fake metrics, empty placeholder content, or invented evidence.
- [ ] Accessibility and responsive alternatives are explicit.
- [ ] Common UI primitives are shared only when semantics and behavior genuinely match.
