# SANGAT · brand identity

**Sangat** premium basmati, with Manav Vikas Sansthan (MVS). Tagline: **Sanjhi Soch, Sunehra Kal**
(साँझी सोच, सुनहरा कल).

The mark, **Shirorekha**: three whole basmati grains held by one golden line, the headline stroke that joins the
letters of a Devanagari word. Separate grains, one shared line: *sangat*, togetherness, drawn as simply as it can be.

Start with **`deliverables/sangat-brand-guidelines.pdf`** (28 pages: the brand-identity kit, then the system in use).

## Folder map

| Folder | What is in it |
|---|---|
| `deliverables/` | **Hand-over files.** Guidelines PDF; `logo/svg` (30 editable SVGs: horizontal, stacked, symbol, small symbol, wordmark × colour, reversed, black, white, forest, gold); `logo/png` (same, transparent, 2400 px); `logo/logo-test-sheet.png`; `digital/` (web icons + favicon.ico + webmanifest, design tokens, website logo files) |
| `strategy.md` | Discovery, positioning, name map, competitor shelf map, voice, constraints |
| `concepts/` | Phase 2: the four directions in greyscale and on a 1 kg pouch |
| `evaluation.md`, `refine/` | Phase 8: scores, trade-offs, recommendation, two refinement rounds |
| `sets/`, `sets.json`, `board.png`, `review.png`, `table.md` | brand-identity skill sets (A–D) with measured checks |
| `kit/A/` | brand-identity kit for the chosen set: 13 guideline pages, logo variants, tokens, fonts note |
| `system/` | Palette with CMYK (`palette.md`), typography, graphic language, photography direction, web integration, pattern and devices (`graphics/`), 10 icons (`icons/`) |
| `packaging/` | 1 kg and 5 kg artwork for V1 Forest Line and V2 Grain Window: `*-artwork.svg` (flat, editable), `*-guides.svg/png` (trim, safe area, zip/handle zones), `*-front.svg/png` |
| `mockups/` | Pack visualisations (both variations, both sizes), finishes call-out, retail shelf test |
| `applications/` | Website desktop and mobile, QR landing page, stationery, social, monochrome uses |
| `brandbook/` | Pages 14–28 of the guidelines as PNG |
| `tools/` | The scripts that build all of the above (re-run after any change) |

## Rebuild

```bash
python3 tools/make_sets.py && python3 ../../.claude/skills/brand-identity/scripts/brand.py build . --sets A
python3 ../../.claude/skills/brand-identity/scripts/brand.py kit sets/A --full
python3 tools/system.py          # palette, devices, icons
python3 tools/packaging.py       # pack artwork
python3 tools/export_logo.py     # logo files + web icons (+ copies into /assets/brand)
python3 tools/mockups.py         # pack and shelf visualisations
python3 tools/applications.py    # needs `npm start` running for story.html
python3 tools/brandbook.py       # guidelines PDF
```

## How it was made, honestly

- **Skills used:** logo-design (library search, `svg_audit`, `concept_sheet`, `render_png`, `export_variants`),
  brand-identity (`init`, `fonts`, `logos`, `build`, `kit`), illustrate (SVG track, contact sheets at 16–128 px on
  light and dark for the mark, icons and pattern). No AI image generation: every mark, pattern and icon is hand-written
  vector, so there is no third-party licence question on the artwork.
- **Fonts:** Tiro Devanagari Hindi (Tiro Typeworks) and Mukta (Ek Type), both SIL OFL 1.1. The wordmark is outlined
  Tiro capitals, tracked +160; the OFL allows this and the logo is not a font.
- **Measured vs judged:** contrast, glyph coverage, licences, small-size renders and file validity are measured by the
  skills' scripts. Scores in `evaluation.md` and every "reads as" statement are design judgement.
- **One checker note:** the brand-identity kit reports `pdf-font-not-embedded` for Tiro Devanagari Hindi. This is a
  false positive: the PDF embeds it as `FontFile2` under its PostScript name `TiroDevaHindi-Regular`, which the
  checker does not match to the family name (verified with pypdf).
- **Competitor research** could not reach competitor sites from this environment; the shelf map in `strategy.md` is
  category knowledge, labelled as judgement.

## Not production-ready yet

Every pack, card and page here is design, not a print file. Before production: converter dielines (pack sizes are
assumed), FSSAI labelling review, real nutrition and cooking data, MRP, batch and licence numbers, GS1 barcode, the QR
URL, Pantone drawdowns and press proofs for foil/UV/deboss, a trademark search for SANGAT and the mark, and
photography to `system/photography.md`. **No farmer, certification, traceability, origin or impact claim has been
made**; add one only when MVS can stand behind it and, for people, with their consent.
