# Sangat typography (v2)

Three open-licence families, as on the client's brand board (Playfair Display + Inter), with a Devanagari
companion because Playfair and Inter have no Hindi (measured with the brand-identity skill: `fonts audit`
fails Playfair and Inter on Hindi base letters; Noto Serif Devanagari passes 100%).

| Role | Family | Weights | Use |
|---|---|---|---|
| Wordmark | **Playfair Display** (Claus Eggers Sørensen, OFL-1.1), customised | SemiBold 620, outlined | Never retype the logo: use the supplied files (custom swash g and gold ear). |
| Display / headlines | Playfair Display | 400, 600, Italic 400 | Headlines in sentence case; the second half of a headline in Italic, often in Gold Light on forest or Earth Brown on ivory ("Every grain / *has a story.*"). |
| Product name on pack | Playfair Display | 400, tracked +190 | BASMATI RICE in capitals; the only long capital setting in Playfair. |
| Tagline | Playfair Display | 400, tracked +150 | Always "Sanjhi Soch, Sunehra Kal", Title Case, never in capitals, Earth Brown on ivory / Gold on forest. |
| Text / UI | **Inter** (Rasmus Andersson, OFL-1.1) | 400, 600 | Body, buttons, navigation, nutrition and legal panels; `tnum` for figures. |
| Labels | Inter 600 | capitals, +0.16 em | PREMIUM, NET QUANTITY, SCAN TO EXPLORE, small section labels. |
| Hindi | **Noto Serif Devanagari** (Google, OFL-1.1) | 400, 500 | हर दाने की अपनी कहानी, साँझी सोच, सुनहरा कल. Set about 10% smaller than the Latin beside it. |

## Scale (web, 16 px base)

| Token | Size / line height | Face |
|---|---|---|
| display | 72–115 px / 0.94 | Playfair 400 (Italic for the second line) |
| h2 | 36–60 px / 1.06 | Playfair 400 |
| h3 | 24–28 px / 1.18 | Playfair 400 / Italic |
| stat | 38–54 px / 1.0 | Playfair 600, lining figures |
| lead | 18–20 px / 1.55 | Inter 400 |
| body | 17 px / 1.65 | Inter 400 |
| label | 12 px, +0.16 em, caps | Inter 600 |

## Licences

All three are SIL Open Font License 1.1: free for print, packaging, web, apps and PDF embedding. The outlined
wordmark is artwork, not a font. Web files (WOFF2, from Fontsource) and licences are in `/assets/fonts/` and
`v2/fonts/`. Brand-identity measured a warning worth knowing: Inter's I and l look alike at small sizes; avoid
setting codes such as batch numbers in Inter capitals-only without spacing.
