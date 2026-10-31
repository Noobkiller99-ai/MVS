# SANGAT · brand identity (v3)

**Sangat** premium basmati rice, in partnership with Manav Vikas Sansthan (MVS). Tagline: **Sanjhi Soch, Sunehra
Kal** (साँझी सोच, सुनहरा कल).

The logo is **vectorised from the client's exact brand board** (`Sangat_Brand_Board_Exact.svg`, kept in
`v3/ref/board.png`): the customised Playfair letters, the single-storey **g** whose swash runs back under the word,
the **gold rice ear** growing out of the g, and the tagline. The colour master overlaps the board's own logo at
0.89 IoU (measured; the rest is edge anti-aliasing). The brand symbol (two forest leaves, sage leaves, gold flame)
is traced the same way. Packaging, website, stationery and guidelines all use these same masters.

Start with **`deliverables/sangat-brand-guidelines.pdf`** (20 pages, v3).

## Folder map

| Folder | What is in it |
|---|---|
| `deliverables/` | **Hand-over files.** Guidelines PDF; `logo/svg/` 30 editable SVGs (primary with tagline, horizontal, stacked, wordmark, symbol × colour, colour-reversed, black, white, forest, gold) and `logo/png/` the same as transparent 2400 px PNGs; `logo/logo-test-sheet.png`; `digital/web-icons/` (favicon.svg/.ico, 16/32/48, apple-touch, 192/512, maskable) |
| `art/` | **The landscape master**: the client's illustration as an editable layered SVG (`sangat-landscape.svg`, seven named layers) and a transparent variant (`-transparent.svg`), PNG renders, the supplied source in `art/source/`, and `landscape-check.png/json` (source, vector, difference; 23.1 dB PSNR) |
| `packaging-v3/` | 1 kg and 5 kg artwork laid out to the board, two variations (V1 Ivory Landscape, V2 Forest Edition): `*-artwork.svg` (all panels, editable), `*-guides.svg/png` (trim, bleed, safe area, seal/zip/handle zones), `*-front.png`, `*-back.png` (with the QR strip), `*-front-mock.png` (window shows rice) |
| `mockups-v3/` | Table scene (1 kg + 5 kg + bowl), the range, back panel with the QR strip, finishes, shelf test |
| `applications-v3/` | Website desktop and mobile, QR landing page, stationery, social (incl. an SRP impact post), one-colour uses |
| `system/` | Palette (HEX, RGB, CMYK starting builds, measured contrast), typography, graphic language, packaging spec, photography direction, web integration |
| `sources/srp-vs-non-srp.md` | The client's SRP vs non-SRP figures, transcribed; the only source of the website's numbers |
| `strategy.md` | Positioning, audience, name map, competitor shelf map, voice |
| `brandbook-v3/` | Guidelines pages as PNG |
| `v3/logo/` | Logo masters (colour + one-colour cuts) and the raw board traces; `v3/ref/` the board PNG, crops, overlays and comparisons used to verify the match |
| `v2/fonts/` | Web fonts (Playfair Display, Libre Caslon Text, Inter, Noto Serif Devanagari) + OFL licences |
| `v2/sangat/` | brand-identity skill audit (font coverage and contrast checks, review card) |
| `archive/v1-shirorekha/` | The first exploration (four directions), kept for the record |
| `archive/v2-redraw/` | The previous redraw of the board (superseded by the exact v3 trace), kept for the record |
| `tools/` | Scripts that build everything above |

## Rebuild

```bash
python3 tools/trace_v3.py         # trace the board into colour layers (needs potracer, scipy)
python3 tools/logo_v3.py          # logo masters: colour + one-colour, all layouts
python3 tools/landscape_vector.py # landscape master: layered SVG + transparent variant (needs vtracer, scipy)
python3 tools/export_v3.py        # deliverables logo files, web icons, website logo/fonts/pack label
python3 tools/system_v2.py        # palette.json / palette.md
python3 tools/packaging_v3.py     # pack artwork and renders
python3 tools/mockups_v3.py       # pack visualisations
python3 tools/logo_tests.py       # logo test sheet
python3 tools/applications_v3.py  # needs `npm start` and a fresh `npm test`
python3 tools/brandbook_v3.py     # guidelines PDF
```

## How it was made

- **Exact match:** the board is a raster image inside the SVG, so the logo was vectorised from it: each ink is separated
  softly from the ivory ground, upsampled 8×, traced with potrace (`tools/trace_v3.py`) and checked by overlaying the
  result on the board (`v3/ref/overlay-*.png`; wordmark 0.89 IoU, symbol 0.81 IoU, the remainder being anti-aliased
  edges and the painted texture). The gold ear's painted edges were too noisy to trace cleanly, so it was redrawn as
  clean curves fitted to the board at 8× (`tools/ear_v3.py`), keeping its two gold tones.
- **Tagline type:** the board's tagline is not Playfair. Fitting 20 OFL serifs letter by letter to the board
  (`tools/fit_tagline_v3.py`) picked Libre Caslon Text as the closest match, so the tagline and the pack's
  serif lines use it; Playfair Display stays the primary face, as the board states.
- **logo-design skill:** `svg_audit` and `render_png` for every master, the PNG set and the favicon.ico; illustrate skill
  contact sheets at 16–128 px on light and dark (`deliverables/logo/logo-test-sheet.png`).
- **brand-identity skill:** font audits (Playfair and Inter have no Hindi, so Hindi uses Noto Serif Devanagari) and the
  measured palette contrast in `system/palette.md`.

## Not production-ready yet

Every pack and page is design, not a print file. Before production: converter dielines (sizes are assumed), FSSAI
labelling review, real nutrition, cooking, MRP, batch and licence data, GS1 barcode, the QR code from the final
`story.html` URL, Pantone drawdowns and press proofs for foil, emboss and the window, a trademark search for SANGAT
and the mark, and photography to `system/photography.md`. The SRP figures on the website come only from MVS's
document; confirm its season, location and number of farms before the site goes live. "Naturally aromatic" and
"thoughtfully grown" are pack lines to confirm (they are on the client's board). The back-panel farmer is an
illustration, not a real person.
