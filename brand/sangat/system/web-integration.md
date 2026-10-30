# Sangat on the website

The identity is applied to the story site in the repository root (`index.html`, `story.html`, `assets/`). It sits
around the 3D grain rather than competing with it: the grain is the story, the identity is the frame.

## Logo

| Where | File | Size | Notes |
|---|---|---|---|
| Header, desktop | inline SVG from `assets/brand/sangat-horizontal-colour.svg` | 26 px high | Grains and wordmark take `currentColor` (Sangat Forest); the line is `.ln` = `--clay` (Sunehra Gold) |
| Header, mobile (< 880 px) | same | 22 px high | Never smaller than 20 px: below that use the symbol alone |
| Footer (Night Forest) | same, copied by `site.js` | 30 px high | Ivory grains and wordmark, line in Gold on dark `#C9A35A` |
| QR landing page | same | 24 px high | On the forest header band, with the hanging line running edge to edge beneath it |
| Favicon | `assets/brand/icons/favicon.svg` / `.ico` | 16–48 px | The small cut (heavier line, fuller grains) |
| App icon, home screen | `assets/brand/icons/icon-192/512.png`, `maskable-512.png`, `apple-touch-icon.png` | | Ivory mark on a Sangat Forest tile; `assets/brand/site.webmanifest` |
| 3D pack label | `src/brand-paths.js` (generated) | | The real wordmark and grain outlines on the V1 Forest Line front |

Clear space: the height of the hanging line on every side. Do not place the lockup over the 3D canvas without the
header's ivory band behind it once the page scrolls (`.site-header.solid`).

## Colour tokens (`assets/css/site.css`, `:root`)

The site keeps its original token names so every rule picked up the new palette:

| Token | Sangat colour | HEX | Use on screen |
|---|---|---|---|
| `--forest` | Sangat Forest | `#1E3A2F` | Headings, primary buttons, logo |
| `--forest-2` | Night Forest | `#13241B` | Footer, darkest grounds |
| `--ivory` | Basmati Ivory | `#F6F1E5` | Page ground |
| `--sand` | Husk Sand | `#E7DCC4` | Cards, secondary sections |
| `--leaf` | Paddy Sage | `#8E9F86` | Quiet text and rules on forest |
| `--clay` | Sunehra Gold | `#A07A35` | The hanging line, progress bar, focus ring (graphics only) |
| `--clay-ink` | Sunehra Gold (UI) | `#896126` | Gold text on ivory (4.9:1) |
| `--clay-light` | Gold on dark | `#C9A35A` | Gold text and lines on forest (5.2:1) |
| `--ink` / `--muted` | Ink / Ink muted | `#131F18` / `#4C5951` | Body text |

The full token set for other builds is in `deliverables/digital/tokens/` (CSS, SCSS, DTCG JSON, Tailwind).

## Type hierarchy

Tiro Devanagari Hindi 400 (+ italic for the emphasised half of a headline) for h1–h3 and Hindi; Mukta 400/600 for
everything else. Self-hosted WOFF2 in `assets/fonts/` with their OFL licences; each `@font-face` declares a weight
range so no faux bold is ever synthesised. Labels: Mukta 600, capitals, +0.16 em.

## Buttons, sections, patterns

- **Buttons:** pill, Sangat Forest with ivory text, 54 px tall; secondary actions are text links. Focus: 3 px gold ring.
- **Section grounds:** ivory for reading; Husk Sand for cards; Forest for the "why it matters" chapter; Night Forest
  for the footer. Gold never fills a section; it is a line or a point.
- **Patterns:** the chatai weave is for social backgrounds, the QR page and packaging. It is not used behind the
  3D canvas or behind text on the site.
- **The bindu** marks the QR code on packs and the "you scanned your pack" entry on `story.html`: one per view.

## QR storytelling

Pack back → QR (with the bindu and "Scan to meet the people and practices behind your rice") → `story.html`:
batch card (placeholders until MVS confirms each batch) → three routes into the story (farmers, practices, farm to
pack) → the tagline. The QR URL itself is a placeholder until the production domain is chosen.
