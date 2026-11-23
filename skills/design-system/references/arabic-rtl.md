# Arabic and RTL interface rules

Apply these rules to the actual Arabic and bilingual content. They are technical constraints, not an instruction to mirror every visual detail.

## Document and mixed direction

- Use `<html lang="ar" dir="rtl">` for Arabic-first documents. For bilingual documents, set the document direction intentionally and isolate embedded LTR runs with `<bdi>` or an element with `dir="ltr"`.
- Preserve logos, brand marks, media controls, clocks, checkmarks, and numbers in their natural orientation. Mirror only directional UI where the meaning changes with reading direction.
- Test Arabic punctuation, parentheses, numbers, email addresses, code, and Latin names in real sentences.

## Logical layout

Prefer logical CSS properties: `margin-inline`, `padding-inline`, `inset-inline`, `border-inline`, `text-align: start`, and `border-start-start-radius`. Use flex/grid and `gap`; avoid hard-coded left/right assumptions and unnecessary `row-reverse`.

RTL is not simply a mirrored LTR screenshot. Some patterns, brand marks, charts, maps, video controls, and data tables have their own direction rules.

## Typography and content

- Never use letter-spacing or uppercase transformations on Arabic text as if it were Latin.
- Test Arabic font coverage and weights. Do not assume a Latin family includes usable Arabic glyphs.
- Measure the interface using real Arabic content, not English placeholders. Arabic line length and line-height often need different values.
- Write natural Arabic for the target audience; do not translate English slogans word for word.
- Choose numeral and date conventions per audience and maintain consistency.

## Forms and data

- Set phone, email, URLs, codes, and other LTR values explicitly to LTR when necessary.
- Align numbers and currencies consistently, preferably with tabular numerals for comparison tables.
- Keep labels and error messages visually associated with their fields and in a sensible reading order.

## Testing

Inspect at least one narrow mobile and one desktop viewport. Check: reading order, focus order, icons, mixed-direction strings, numbers, overflowing buttons, tables, carousels, progress indicators, and navigation. A page is not RTL-ready merely because the text is right-aligned.
