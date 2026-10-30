# SANGAT · brand identity (v2)

**Sangat** premium basmati rice, in partnership with Manav Vikas Sansthan (MVS). Tagline: **Sanjhi Soch, Sunehra
Kal** (साँझी सोच, सुनहरा कल).

The logo, built from the client's reference board: *Sangat* in Playfair Display SemiBold, with a hand-drawn swash
**g** whose descender loops and runs under "at" (the shared path) and a **gold rice ear** growing out of its stem
(the golden tomorrow). The symbol: two leaves (forest, sage) and the gold ear.

Start with **`deliverables/sangat-brand-guidelines.pdf`** (20 pages).

## Folder map

| Folder | What is in it |
|---|---|
| `deliverables/` | **Hand-over files.** Guidelines PDF; `logo/svg/` 30 editable SVGs (primary with tagline, horizontal, stacked, wordmark, symbol × colour, colour-reversed, black, white, forest, gold) and `logo/png/` the same as transparent 2400 px PNGs; `logo/logo-test-sheet.png`; `digital/web-icons/` (favicon.svg/.ico, 16/32/48, apple-touch, 192/512, maskable) |
| `packaging-v2/` | 1 kg and 5 kg artwork, two variations (V1 Ivory Landscape, V2 Forest Edition): `*-artwork.svg` (all panels, editable, live text), `*-guides.svg/png` (trim, bleed, safe area, seal/zip/handle zones), `*-front.png`, `*-back.png`, `*-front-mock.png` (window shows rice) |
| `mockups-v2/` | Table scene (1 kg + 5 kg + bowl), the range, back panel with the QR strip, finishes, shelf test |
| `applications-v2/` | Website desktop and mobile, QR landing page, stationery, social (incl. an SRP impact post), one-colour uses |
| `system/` | Palette (HEX, RGB, CMYK starting builds, measured contrast), typography, graphic language, packaging spec, photography direction, web integration |
| `sources/srp-vs-non-srp.md` | The client's SRP vs non-SRP figures, transcribed; the only source of the website's numbers |
| `strategy.md` | Positioning, audience, name map, competitor shelf map, voice |
| `brandbook-v2/` | Guidelines pages as PNG |
| `v2/logo/` | Logo masters (colour and one-colour cuts) built by `tools/logo_v2.py`; `v2/fonts/` web fonts + OFL licences; `v2/explore/` construction renders |
| `v2/sangat/` | brand-identity skill audit of v2 (font coverage and contrast checks, review card) |
| `archive/v1-shirorekha/` | The first exploration (four directions, Shirorekha chosen then superseded by the client's board), kept for the record |
| `tools/` | Scripts that build everything above |

## Rebuild

```bash
python3 tools/logo_v2.py          # logo masters (needs fonttools, skia-pathops)
python3 tools/export_v2.py        # deliverables logo files, web icons, website assets and fonts, 3D pack label
python3 tools/system_v2.py        # palette.json / palette.md
python3 tools/packaging_v2.py     # pack artwork and renders
python3 tools/mockups_v2.py       # pack visualisations
python3 tools/logo_tests_v2.py    # logo test sheet
python3 tools/applications_v2.py  # needs `npm start` and a fresh `npm test`
python3 tools/brandbook_v2.py     # guidelines PDF
```

## How it was made

- **logo-design skill:** `svg_audit` on every master (wordmark 90/100: anchor count is high because the letters are
  Playfair's own outlines), `render_png` for every PNG and the favicon.ico, construction checked at large size and
  16–128 px.
- **illustrate skill (SVG track):** the landscape, sweep, rice ears, farmer scene, sprig and icons are hand-written
  vector; contact sheets at small sizes on light and dark. No image generation, so no third-party licence question.
- **brand-identity skill:** font audits (Playfair and Inter fail Hindi coverage, so Hindi is set in Noto Serif
  Devanagari, which passes) and a measured build of the kept palette and logo (`v2/sangat/table.md`). Its automatic
  kit pages were not used: for a kept palette it assigned Sunehra Gold as the primary colour (gold covers and
  buttons), which misrepresents the brand; the guidelines PDF is built by `tools/brandbook_v2.py` instead.
- **Measured vs judged:** contrast ratios and font coverage are measured; layout and "reads as" statements are
  judgement.

## Not production-ready yet

Every pack and page is design, not a print file. Before production: converter dielines (sizes are assumed), FSSAI
labelling review, real nutrition, cooking, MRP, batch and licence data, GS1 barcode, the QR code from the final
`story.html` URL, Pantone drawdowns and press proofs for foil, emboss and the window, a trademark search for SANGAT
and the mark, and photography to `system/photography.md`. The SRP figures on the website come only from MVS's
document; confirm its season, location and number of farms before the site goes live. "Naturally aromatic" and
"thoughtfully grown" are pack lines to confirm. The back-panel farmer is an illustration, not a real person.
