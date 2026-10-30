# Sangat on the website (v2)

The identity is applied to the story site in the repository root (`index.html`, `story.html`, `assets/`). It frames
the 3D grain rather than competing with it.

## Logo and icons

| Where | File | Size | Notes |
|---|---|---|---|
| Header | inline from `assets/brand/sangat-wordmark-colour.svg` | 46 px high desktop, 40 px mobile (ear to swash) | Letters take `currentColor` (Forest Green); the ear stays Sunehra Gold |
| Footer (forest) | the same, copied by `site.js` | 58 px | Ivory letters, gold ear |
| QR landing page | `sangat-wordmark-colour-reversed.svg` | 52 px | On the forest header |
| Favicon | `assets/brand/icons/favicon.svg` / `.ico` | 16–48 px | Reversed symbol on a Forest Green rounded tile |
| Home-screen icons | `icon-192/512.png`, `maskable-512.png`, `apple-touch-icon.png`, `site.webmanifest` | | |
| 3D pack | `src/brand-assets.js` (generated) | | The V1 Ivory Landscape 1 kg front from the print artwork; pack proportions 180 × 280 |

Never place the wordmark smaller than 32 px high on screen (the swash and ear stop reading); use the symbol below that.

## Colour tokens (`assets/css/site.css`, `:root`)

| Token | Colour | HEX | Use |
|---|---|---|---|
| `--forest` | Forest Green | `#0F3D2E` | Headings, primary buttons, logo, "why" section |
| `--forest-2` | Forest Deep | `#0A2E22` | Footer, darkest grounds |
| `--ivory` | Ivory | `#F9F6EE` | Page ground |
| `--sand` / `--field` | Ivory tints | `#EFEADF` / `#F1EEE4` | Journey and practices sections |
| `--clay` / `--clay-light` | Sunehra Gold | `#C9A96B` | Rules, progress bar, focus ring, SRP bars, gold text on forest (5.4:1) |
| `--clay-ink` | Earth Brown (UI) | `#7A5F3B` | Labels and italic headline halves on ivory (5.5:1) |
| `--gold-soft` | Gold Light | `#E2CB97` | Italic headings on forest (7.7:1) |
| `--leaf` / `--leaf-ink` | Sage Green | `#A7B89F` / `#5E6E58` | Quiet accents |
| `--ink` / `--muted` | Ink | `#13231C` / `#4F5A52` | Body text |
| `--line` | Stone | `#D9D4C8` | Rules and borders |

## Type

Playfair Display (400, 600, Italic) for headings and figures, Inter (400, 600) for text and UI, Noto Serif
Devanagari for Hindi. Self-hosted WOFF2 in `assets/fonts/` with OFL licences; weight ranges in `@font-face` stop
faux bold.

## "Why it matters": the SRP figures

Each reason card can carry a headline figure, an SRP vs non-SRP bar pair and two supporting facts; an expandable
table lists the selected comparison rows with the source and calculation basis. All values live in
`assets/js/content.js` (`why[].stat/bars/facts` and `srpComparison`) and come only from MVS's SRP vs non-SRP
document (selected rows: water, crop protection, fertiliser, yield and income). Remove a figure there and it
disappears from the page.

## QR storytelling

Pack back → QR strip ("Every grain has a story", SCAN TO EXPLORE) → `story.html`: the same headline, the batch card
(placeholders until MVS confirms each batch) and four routes: farmer stories, cultivation practices, why it matters
(the SRP figures) and our journey; the footer bar repeats the strip's line.
