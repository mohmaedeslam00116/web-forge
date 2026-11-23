# Typography selection references

These are candidate families, not a style-to-font lookup table. Verify current availability, licensing, script coverage, variable weights, file size, and rendering before use. A typeface that works for Latin may not have Arabic glyphs.

## Questions before choosing

1. Is the surface primarily for reading, scanning, operating controls, or expressing a brand?
2. What reading speed, screen size, density, and level of formality does it require?
3. Does the project need one family or a display/text distinction?
4. Are Arabic, Latin, numerals, code, and mixed-direction text all supported?
5. Can the selected fonts be loaded without a noticeable layout shift?

## Candidate families by characteristic

| Character | Latin examples | Arabic examples | Check carefully |
|---|---|---|---|
| Editorial / literary | Newsreader, Source Serif 4, Fraunces, Instrument Serif | Amiri, Noto Naskh Arabic, Scheherazade New | Long-form readability and Arabic heading weight |
| Neutral / operational | Inter, IBM Plex Sans, Source Sans 3, Public Sans | IBM Plex Sans Arabic, Noto Sans Arabic, Cairo | Dense labels, numerals, small sizes |
| Geometric / technical | Space Grotesk, Sora, Archivo | Readex Pro, Alexandria, Noto Kufi Arabic | Distinctive forms must not hurt legibility |
| Expressive / playful | Bricolage Grotesque, Fredoka, Baloo 2 | Baloo Bhaijaan 2, Changa, Lalezar | Keep body text calmer and readable |
| Heritage / calligraphic | Cormorant Garamond, EB Garamond | Aref Ruqaa, Lateef, El Messiri | Use only when the context supports the expressive character |

## Mixed-script rules

- Match optical size and weight, not just family names.
- Use a script-aware fallback stack; test numerals, punctuation, email, URLs, code, and Latin brand names inside Arabic paragraphs.
- Arabic usually needs additional line-height and may need a slightly larger optical size; measure with real content.
- Keep Western or Arabic-Indic numerals consistent with the product and audience.
- Avoid letter-spacing on Arabic text.
