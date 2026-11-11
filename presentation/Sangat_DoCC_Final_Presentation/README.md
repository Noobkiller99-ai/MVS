# Sangat: DoCC final academic presentation

**Launching a Sustainable Basmati Rice Brand for MVS**: SPJIMR, Development of Corporate Citizenship, 2026.
Ashish Satpathy and Janardhan Reddy Bogireddy, with Manav Vikas Sansthan (MVS).

## Files

| File | What it is |
|---|---|
| `Sangat_DoCC_Final_Academic_Presentation.pptx` | Fully editable 16:9 deck with 22 slides. All text, shapes, chevrons, bars and tables are native PowerPoint objects, photos are replaceable pictures, and every slide has speaker notes. |
| `Sangat_DoCC_Final_Academic_Presentation.pdf` | Presentation-ready PDF of the same 22 slides, with fonts embedded. |
| `PHOTO_INSERTION_GUIDE.md` | Where each field photo sits, the 8 placeholders still to fill, and how to replace them. |
| `slide_previews/slide_01.jpg … slide_22.jpg` | A 1920 × 1080 preview of every slide. |
| `fonts/` | Playfair Display and Inter (SIL Open Font License), the deck's two typefaces. |

**Before presenting from the PPTX, install the fonts in `fonts/`.** Playfair Display is not bundled with Windows or macOS. Without it, PowerPoint substitutes another serif and some titles may reflow. The PDF does not need the fonts.

## Storyline (five acts, 22 slides)

The journey is the story, and Sangat is where it ends.

| Act | Slides |
|---|---|
| I · Entering the development ecosystem | 01 Cover · 02 Our journey (seven stages) · 03 Understanding MVS |
| II · Learning from the ground | 04 Chandpur · 05 Fatehgarh Sahib nursery · 06 Farmer's perspective (Gurdeep Singh) · 07 Economics behind cultivation · 08 Punjab Agricultural University · 09 Community livelihoods and women's participation |
| III · Discovering the market opportunity | 10 Connecting the field to the problem · 11 Understanding the consumer · 12 Segmentation, targeting and positioning |
| IV · Building Sangat | 13 Brand reveal and naming research · 14 Visual identity · 15 Packaging · 16 Digital storytelling and QR · 17 Go-to-market |
| V · A development pathway | 18 Stakeholder ecosystem · 19 From blueprint to pilot · 20 What we delivered · 21 What the journey taught us · 22 Closing |

The speaker notes run to about 2,100 words, roughly 14–16 minutes at a natural pace, which leaves room for questions in a 15–20 minute slot. Each note bridges into the next slide.

## Design system

- **Palette:** Forest Green `#103F30`, Warm Ivory `#F6F1E5`, Muted Gold `#C6A65A`, Earth Brown `#795C43`, Charcoal `#292D2A`. Two supporting tones are deeper ivory `#EDE5D3` and caption grey `#5F655F`. Slide 14 shows the brand's own production swatches, taken from the Sangat brand system.
- **Type:** Playfair Display for headlines, with the second clause in italic, plus brand moments and figures. Inter is used for body text, labels and data.
- **Recurring elements:** a small tracked act label and a gold hairline on every content slide, a slide counter, and source lines in the footer. The cover and closing share the forest field and the Sangat landscape artwork.
- **Brand assets used:** the official Sangat logo files, the rice-ear symbol, the logo-family board from the report, the landscape artwork, the 1 kg and 5 kg pack mock-ups, the back panel, and the website and QR prototype board.

## Sources and factual boundaries

| Source | Used for |
|---|---|
| `Sangat - Project Report.docx`, the final report to MVS | MVS profile, problem, STP, naming and tagline data (n = 20), identity, packaging, QR, GTM, operating model, validation and recommendations |
| `brand/sangat/sources/srp-vs-non-srp.md`, transcribed from MVS's SRP vs non-SRP document | Slide 07 per-acre comparison, labelled as directional because the season, location and farm count are not stated |
| The team's brief | Chandpur encounters, the nursery visit with Akshay Sir, Gurdeep Singh's details (labelled as farmer-reported), PAU visit context, SHG interactions, and the themes of the farmer discussions |
| 15 uploaded field photos | Placed by activity; see the guide |

The deck does not claim any of the following: a commercial launch, verified traceability, SRP certification, increases in farmer income, or environmental impact. Naming research is labelled exploratory. Farmer figures are labelled farmer-reported and approximate. The positioning, the QR concept and the operating model are labelled as conditional, a concept, or proposed.

## Known gaps

- None of the source material records detailed farmer economics, such as basmati versus Parmal yields, lease costs or pesticide quantities. Slide 07 therefore lists these as qualitative themes and does not quote numbers.
- The source files do not document Ehsaas Mela or the PRANA programme's specific scope, so PRANA is named only as one of the two programme teams that facilitated the visits.
- 8 activities have no photo yet. See `PHOTO_INSERTION_GUIDE.md`.

## How it was built

The deck was built with the `ppt-master` skill (`.claude/skills/ppt-master`), Default Generate route. The working project is `presentation/projects/sangat_docc_ppt169_20261111/` and contains:

- `design_spec.md` and `spec_lock.md`: the plan, palette, type scale and the 22-slide roster with the purpose of each slide
- `svg_output/`: hand-authored source SVGs, one per slide
- `notes/total.md`: the speaker notes
- `images/`: the photos, brand assets and placeholder pictures
- `validation/`: the quality reports

The pipeline ran in this order:

1. Converted the source report.
2. Wrote the design spec and lock, then validated them.
3. Authored the SVG slides.
4. Ran the early quality gate after slide 5 and the final gate after slide 22 (0 errors).
5. Split the speaker notes.
6. Ran `finalize_svg.py`.
7. Ran `svg_to_pptx.py`. The postflight check passed; the only warnings were the two non-system fonts.
8. Rendered the PPTX in LibreOffice to check the conversion.
9. Exported the PDF and previews from the finalized SVGs in Chromium.

The placeholder pictures are generated by `presentation/tools/make_placeholders.py`. Re-run it after changing a label.

To rebuild after editing an SVG:

```bash
S=.claude/skills/ppt-master; P=presentation/projects/sangat_docc_ppt169_20261111
python3 $S/scripts/svg_quality_checker.py $P --canonical-authoring --stage final --json
python3 $S/scripts/total_md_split.py $P
python3 $S/scripts/finalize_svg.py $P
python3 $S/scripts/svg_to_pptx.py $P
```
