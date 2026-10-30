# Sangat typography system

Both families are designed for **Latin and Devanagari together** (audited with the brand-identity skill:
100% of English and Hindi base characters, `fonts audit --langs en,hi`). Hindi is set in the brand's own type,
never in a fallback.

| Role | Family | Weights | Notes |
|---|---|---|---|
| Wordmark | **Tiro Devanagari Hindi** (Tiro Typeworks, OFL-1.1) | Regular, outlined | Capitals, tracking +160. Never retype the logo; use the supplied files. |
| Display / headlines | Tiro Devanagari Hindi | Regular (+ Italic for emphasis) | Sentence case or Title Case, tracking −10 to 0 at large sizes. Capitals only for short labels ≤ 3 words, tracking +120. |
| Hindi display | Tiro Devanagari Hindi | Regular | Same face; Devanagari set ~8% larger than Latin beside it so the shirorekha aligns with the Latin cap height. |
| Text / UI | **Mukta** (Ek Type, OFL-1.1) | 400, 600 (300–800 available) | Body, buttons, navigation, captions. Tabular figures (`tnum`) for weights, dates and nutrition tables. |
| Packaging information | Mukta | 400 text, 600 headings | Ingredients, nutrition, storage, FSSAI and contact panels. Minimum sizes follow the FSSAI Labelling and Display Regulations for the pack's principal display panel; **regulatory review required before print**. |
| Small capitals labels | Mukta 600 | 600 | Letter-spacing +0.16 em, 9–12 px / 6–8 pt (e.g. PREMIUM BASMATI RICE). |

## Scale (web, 16 px base, ratio ≈ 1.25)

| Token | Size / line height | Face |
|---|---|---|
| display-xl | 72 / 0.98 | Tiro |
| display | 56 / 1.04 | Tiro |
| h2 | 40 / 1.08 | Tiro |
| h3 | 28 / 1.18 | Tiro |
| lead | 20 / 1.55 | Mukta 400 |
| body | 17 / 1.65 | Mukta 400 |
| label | 12 / 1.2, +0.16 em, caps | Mukta 600 |

## Tagline

- Always exactly **Sanjhi Soch, Sunehra Kal**: Title Case as written, comma included. Never in capitals, never translated
  in its place. The Hindi साँझी सोच, सुनहरा कल may sit beneath it as a second line, smaller and quieter.
- Set in Tiro, at most 40% of the wordmark's cap height when locked up with the logo; it complements, it never
  competes.

## Licences

Both families are SIL Open Font License 1.1: free for print, web, apps and PDF embedding; outlining into a logo
is allowed and the logo is not a derivative font (OFL-FAQ). Sources: fonts.google.com/specimen/Tiro+Devanagari+Hindi,
fonts.google.com/specimen/Mukta. The website self-hosts WOFF2 files with their licences in `assets/fonts/`.
