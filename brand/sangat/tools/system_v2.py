#!/usr/bin/env python3
"""Sangat v2 brand system documents: system/palette.json + palette.md (HEX, RGB, CMYK starting builds, roles,
measured contrast), plus a type specimen check. Writes into system/."""
import json, os

HERE = os.path.dirname(os.path.abspath(__file__))
W = os.path.normpath(os.path.join(HERE, ".."))
OUT = os.path.join(W, "system")
os.makedirs(OUT, exist_ok=True)

COLOURS = [
    ("forest", "Forest Green", "#0F3D2E", "Primary", "Logo, headings, pack tab, back panel, the sweep, buttons", "35%"),
    ("ivory", "Ivory", "#F9F6EE", "Background", "Page and pack ground, cards on forest", "40%"),
    ("gold", "Sunehra Gold", "#C9A96B", "Accent", "The rice ear, foil, rules, gold text on forest; never small text on ivory", "8%"),
    ("earth", "Earth Brown", "#8B6F47", "Secondary", "Tagline and large labels on ivory, roofs and soil in illustration", "5%"),
    ("sage", "Sage Green", "#A7B89F", "Secondary", "Second leaf of the symbol, hills, quiet text on forest", "7%"),
    ("stone", "Stone", "#D9D4C8", "Neutral", "Rules, borders, secondary surfaces", "5%"),
    ("forest-deep", "Forest Deep", "#0A2E22", "Support", "QR strip footer, darkest grounds", "-"),
    ("gold-light", "Gold Light", "#E2CB97", "Support", "Highlights in the ear, italic headlines on forest", "-"),
    ("earth-ui", "Earth Brown (UI)", "#7A5F3B", "Support", "Earth Brown for small text on ivory (4.5:1 needs this tone)", "-"),
    ("ink", "Ink", "#13231C", "Text", "Body text on ivory", "-"),
]


def rgb(h):
    h = h.lstrip("#")
    return [int(h[i:i + 2], 16) for i in (0, 2, 4)]


def cmyk(h):
    r, g, b = (v / 255 for v in rgb(h))
    k = 1 - max(r, g, b)
    if k >= 1:
        return [0, 0, 0, 100]
    return [round(100 * (1 - x - k) / (1 - k)) for x in (r, g, b)] + [round(100 * k)]


def lum(h):
    c = [v / 255 for v in rgb(h)]
    c = [x / 12.92 if x <= 0.03928 else ((x + 0.055) / 1.055) ** 2.4 for x in c]
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]


def contrast(a, b):
    la, lb = lum(a), lum(b)
    return round((max(la, lb) + 0.05) / (min(la, lb) + 0.05), 2)


PAIRS = [("Ink", "#13231C", "Ivory", "#F9F6EE"), ("Forest Green", "#0F3D2E", "Ivory", "#F9F6EE"),
         ("Ivory", "#F9F6EE", "Forest Green", "#0F3D2E"), ("Sunehra Gold", "#C9A96B", "Forest Green", "#0F3D2E"),
         ("Gold Light", "#E2CB97", "Forest Green", "#0F3D2E"), ("Sage Green", "#A7B89F", "Forest Green", "#0F3D2E"),
         ("Earth Brown (UI)", "#7A5F3B", "Ivory", "#F9F6EE"), ("Earth Brown", "#8B6F47", "Ivory", "#F9F6EE"),
         ("Sunehra Gold", "#C9A96B", "Ivory", "#F9F6EE")]


def main():
    cols = [{"id": i, "name": n, "hex": h, "rgb": rgb(h), "cmyk_start": cmyk(h), "role": r, "usage": u, "share": s}
            for i, n, h, r, u, s in COLOURS]
    pairs = [{"fg": a, "fg_hex": ah, "bg": b, "bg_hex": bh, "ratio": contrast(ah, bh)} for a, ah, b, bh in PAIRS]
    json.dump({"colours": cols, "contrast": pairs}, open(os.path.join(OUT, "palette.json"), "w"), indent=1)
    md = ["# Sangat colour system (v2)", "",
          "From the client's brand board: Forest Green, Ivory, Sunehra Gold, Earth Brown, Sage Green and Stone, plus "
          "four support tones derived for print and screen. **CMYK values are uncalibrated starting builds** "
          "(simple conversion) for the printer to match on coated stock; Pantone references come from the printer's "
          "drawdowns. Sunehra Gold is hot foil wherever the budget allows.", "",
          "| Colour | Role | HEX | RGB | CMYK start | Share | Use |", "|---|---|---|---|---|---|---|"]
    for c in cols:
        md.append(f"| **{c['name']}** | {c['role']} | `{c['hex']}` | {' '.join(map(str, c['rgb']))} | "
                  f"{' '.join(map(str, c['cmyk_start']))} | {c['share']} | {c['usage']} |")
    md += ["", "## Measured contrast (WCAG 2)", "", "| Text | On | Ratio | Use |", "|---|---|---|---|"]
    for p in pairs:
        use = "body text" if p["ratio"] >= 4.5 else ("large text / graphics only" if p["ratio"] >= 3 else "decoration only")
        md.append(f"| {p['fg']} | {p['bg']} | {p['ratio']}:1 | {use} |")
    md += ["", "## Rules", "",
           "- Forest and Ivory carry the brand; Gold is the one warm accent (the ear, rules, foil, numbers on forest).",
           "- Never set small Sunehra Gold text on Ivory (2.1:1). Use Earth Brown (UI) `#7A5F3B` for small warm text on light grounds.",
           "- Sage is for the second leaf, hills and quiet text on forest; it never replaces Forest for headings.",
           "- On the website the legacy token names map as: `--forest` Forest Green, `--clay` Sunehra Gold, "
           "`--clay-ink` Earth Brown (UI), `--leaf` Sage Green, `--line` Stone (see `system/web-integration.md`)."]
    open(os.path.join(OUT, "palette.md"), "w").write("\n".join(md) + "\n")
    print("ok", len(cols), "colours")


if __name__ == "__main__":
    main()
