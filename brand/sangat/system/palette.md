# Sangat colour system (v2)

From the client's brand board: Forest Green, Ivory, Sunehra Gold, Earth Brown, Sage Green and Stone, plus four support tones derived for print and screen. **CMYK values are uncalibrated starting builds** (simple conversion) for the printer to match on coated stock; Pantone references come from the printer's drawdowns. Sunehra Gold is hot foil wherever the budget allows.

| Colour | Role | HEX | RGB | CMYK start | Share | Use |
|---|---|---|---|---|---|---|
| **Forest Green** | Primary | `#0F3D2E` | 15 61 46 | 75 0 25 76 | 35% | Logo, headings, pack tab, back panel, the sweep, buttons |
| **Ivory** | Background | `#F9F6EE` | 249 246 238 | 0 1 4 2 | 40% | Page and pack ground, cards on forest |
| **Sunehra Gold** | Accent | `#C9A96B` | 201 169 107 | 0 16 47 21 | 8% | The rice ear, foil, rules, gold text on forest; never small text on ivory |
| **Earth Brown** | Secondary | `#8B6F47` | 139 111 71 | 0 20 49 45 | 5% | Tagline and large labels on ivory, roofs and soil in illustration |
| **Sage Green** | Secondary | `#A7B89F` | 167 184 159 | 9 0 14 28 | 7% | Second leaf of the symbol, hills, quiet text on forest |
| **Stone** | Neutral | `#D9D4C8` | 217 212 200 | 0 2 8 15 | 5% | Rules, borders, secondary surfaces |
| **Forest Deep** | Support | `#0A2E22` | 10 46 34 | 78 0 26 82 | - | QR strip footer, darkest grounds |
| **Gold Light** | Support | `#E2CB97` | 226 203 151 | 0 10 33 11 | - | Highlights in the ear, italic headlines on forest |
| **Earth Brown (UI)** | Support | `#7A5F3B` | 122 95 59 | 0 22 52 52 | - | Earth Brown for small text on ivory (4.5:1 needs this tone) |
| **Ink** | Text | `#13231C` | 19 35 28 | 46 0 20 86 | - | Body text on ivory |

## Measured contrast (WCAG 2)

| Text | On | Ratio | Use |
|---|---|---|---|
| Ink | Ivory | 15.13:1 | body text |
| Forest Green | Ivory | 11.26:1 | body text |
| Ivory | Forest Green | 11.26:1 | body text |
| Sunehra Gold | Forest Green | 5.43:1 | body text |
| Gold Light | Forest Green | 7.66:1 | body text |
| Sage Green | Forest Green | 5.79:1 | body text |
| Earth Brown (UI) | Ivory | 5.51:1 | body text |
| Earth Brown | Ivory | 4.36:1 | large text / graphics only |
| Sunehra Gold | Ivory | 2.08:1 | decoration only |

## Rules

- Forest and Ivory carry the brand; Gold is the one warm accent (the ear, rules, foil, numbers on forest).
- Never set small Sunehra Gold text on Ivory (2.1:1). Use Earth Brown (UI) `#7A5F3B` for small warm text on light grounds.
- Sage is for the second leaf, hills and quiet text on forest; it never replaces Forest for headings.
- On the website the legacy token names map as: `--forest` Forest Green, `--clay` Sunehra Gold, `--clay-ink` Earth Brown (UI), `--leaf` Sage Green, `--line` Stone (see `system/web-integration.md`).
