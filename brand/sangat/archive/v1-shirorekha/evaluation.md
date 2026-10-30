# Sangat: direction critique and selection (Phase 8)

Scores are **design judgement** out of 10, made after looking at the greyscale concept sheet
(`concepts/concept-sheet.png`), the colour cards (`review.png`) and the pack demos (`concepts/pack-concepts.png`).
Measured facts used in the scoring are marked (m): they come from the brand-identity build (`table.md`, gates,
contrast) and the logo-design SVG audit.

| Criterion | A · Shirorekha | B · Bindu | C · Mohar | D · Saath |
|---|---|---|---|---|
| Brand relevance (does it carry "together"?) | **9**: one line joining separate parts is the philosophy itself | 6: a clever linguistic detail, but it explains the name's sound, not togetherness | 7: rooted and promise-like; togetherness is not shown | 8: "moving forward together" exactly, but literally |
| Distinctiveness (ownable on the shelf) | **8**: no rice brand uses a script-derived hanging line | 7: a fine wordmark; at shelf distance it is "a serif name" | 6: Devanagari seals are a common Indian D2C device; tile reads as an app icon (m: cliché flag) | 5: two slanted grains read as "//", close to generic leaf/feather marks |
| Premium appeal | 8 | **9** | 8 | 6: the condensed sans pulls towards mass FMCG |
| Scalability (16 px, 32 px) | 7: holds at 16 px (m), but three equal stems can read as an inverted "Ш" | **9**: Ṅ holds at 16 px (m) | 5: the Devanagari word fills in at 16 px; needs the "सं" small cut (m: small-size warning) | **9** |
| Versatility (pack, web, patterns) | **9**: the line becomes the pack architecture, dividers, web rules | 7: little to build a graphic language from | 7 | 7 |
| Timelessness (5–10 years) | 8 | **9** | 7 | 6: motion marks date quickly |
| Reproducibility (print, foil, emboss, one colour) | **9**: two flat shapes, no fine detail | 9: the dot is a clean foil spot | 7: Devanagari counters close up in small debossing | 9 |
| **Total / 70** | **58** | 56 | 47 | 50 |

## Trade-offs and weaknesses

- **A · Shirorekha (selected).** Strongest idea-to-system ratio: the mark is a rule the whole identity can hang from
  (pack grid, web dividers, stationery). Weaknesses to fix in refinement: (1) in one colour the three identical
  vertical grains can read as an inverted Cyrillic "Ш" or a comb; (2) the symbol is heavier than the light Tiro
  capitals beside it; (3) the gold bar resolves to a darker UI tone on ivory for contrast (m), so print and screen
  golds need separate specs.
- **B · Bindu.** The most refined and the most timeless, and the runner-up. Its risk is that the idea needs
  explaining and gives the system no graphic device beyond a dot. Kept as an idea bank: the bindu returns as the
  QR/story marker in the selected system (one golden point that says "there is more here").
- **C · Mohar.** Culturally rich, but the strongest heritage cue is also the least scalable and closest to a
  common D2C trope. The Sanjhi stencil (its first mark) survives as the brand pattern.
- **D · Saath.** Clear and scalable, but generic and the least premium. Its "moving forward" energy is better told by
  the website's travelling 3D grain than by the logo.

## Recommendation

**A · Shirorekha**, refined through two rounds of critique (below), with the bindu (from B) and the Sanjhi
stencil (from C) folded into the graphic language, not into the logo. This is a recommendation, not a sign-off:
if the client prefers B, the system can be rebuilt on it.

## Refinement log

(Each round names one defect, fixes it, re-renders and re-tests: logo-design `svg_audit` + `preview_sheet`,
brand-identity `logos`.)

### Round 1: letter reading (fixed)
- **Defect named:** in one colour, three identical upright grains fused to a bar read as an inverted Cyrillic
  "Ш" / a comb (`concepts/concept-sheet.png`, 16–32 px).
- **Tried:** A2 outer grains splayed ±7° (read as a fringe/fangs), A3 graded lengths (read as teeth), A4 whole
  grains held 7 units below the line (`refine/round1-contact.png`).
- **Chosen: A4.** The letter reading disappears at every size on light and dark; the grains read as whole basmati
  grains; the idea deepens: three whole grains held together by one shared line, like a toran holds its hangings.
- Tests: logo-design `svg_audit` 98/100 for all variants (m); brand-identity `logos`: 0 gates, 0 warnings (m).

### Round 2: hierarchy (fixed)
- **Defect named:** the symbol out-weighs the light inscriptional capitals; the brief says SANGAT must be the hero.
- **Fix:** grains and line slimmed to the wordmark's measured stem weight (Tiro thick stems 16–18 per cap 100;
  symbol scale 1.27 in the lockup): grain half-width 7 → 5.6, line 12 → 11 units, spacing 26/50/74 → 28/50/72.
- **Added:** a favicon cut (`symbol_small`, 16–24 px only: heavier line, fuller grains, wider gaps) because the
  three grains merge at 16 px in the primary drawing.
- **Added:** two misuses only this mark can suffer: grains joined to the line; a grain added or removed.
- Tests: brand-identity `build --sets A`: all gates pass; 4 warnings, two of them the brief-mandated ivory/gold
  defaults (justified), one a near pair (Night Forest vs Sangat Forest, ΔE 7.2) that is acceptable because Night
  Forest is only ever a ground, never a chart series (m).

**Final:** `sets/A/logo/build/` and `kit/A/logo/`.
