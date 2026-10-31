#!/usr/bin/env python3
"""Copy and prepare the Sangat brand assets the film uses, from brand/sangat (never redrawn):

  public/sangat/landscape/<layer>.png   the master landscape split into its seven named layers (art/sangat-landscape.svg),
                                        rasterised at 3548 x 1774 for the parallax shot
  public/sangat/packs/<pack>.png        the V1 Ivory Landscape 1 kg and 5 kg pack fronts (packaging-v3 artwork, window
                                        filled with rice), rendered at 2600 px tall
  public/sangat/logo/*.svg              the logo masters (deliverables/logo/svg)
  public/sangat/fonts/*                 Playfair Display, Libre Caslon Text, Inter, Noto Serif Devanagari (OFL) + licences
"""
import os, re, shutil, subprocess, sys
import cairosvg

HERE = os.path.dirname(os.path.abspath(__file__))
FILM = os.path.normpath(os.path.join(HERE, ".."))
REPO = os.path.normpath(os.path.join(FILM, ".."))
BRAND = os.path.join(REPO, "brand/sangat")
PUB = os.path.join(FILM, "public/sangat")


def landscape():
    out = os.path.join(PUB, "landscape")
    os.makedirs(out, exist_ok=True)
    s = open(os.path.join(BRAND, "art/sangat-landscape.svg")).read()
    head = s[: s.index("<g id=")]
    for name in ["sky", "mountains", "trees", "farmhouse", "fields", "foliage", "rice-ears"]:
        g = re.search(r'<g id="%s".*?</g>(?=<g id=|</svg>)' % name, s, re.S).group(0)
        cairosvg.svg2png(bytestring=(head + g + "</svg>").encode(), write_to=os.path.join(out, f"{name}.png"),
                         output_width=3548, output_height=1774)
        print("layer", name)
    # the whole artwork flattened: drawn under the field layers so parallax never opens a gap
    cairosvg.svg2png(url=os.path.join(BRAND, "art/sangat-landscape.svg"), write_to=os.path.join(out, "full.png"),
                     output_width=3548, output_height=1774)


def packs():
    out = os.path.join(PUB, "packs")
    os.makedirs(out, exist_ok=True)
    sys.path.insert(0, os.path.join(BRAND, "tools"))
    import packaging_v3 as PV
    jobs = []
    for size, (pw, ph) in (("1kg", (180.0, 280.0)), ("5kg", (300.0, 450.0))):
        body = PV.front("v1", size, 0, pw, ph, f"film{size}", rice=True)
        px = 2600 / ph
        svg = PV.wrap(body, f"0 0 {pw} {ph}", pw, ph).replace(f'width="{pw}mm" height="{ph}mm"',
                                                              f'width="{pw * px:.0f}" height="{ph * px:.0f}"')
        jobs.append({"html": f'<html><body style="margin:0">{svg}</body></html>', "png": os.path.join(out, f"sangat-{size}-front.png"),
                     "w": int(pw * px), "h": int(ph * px)})
    PV.P2.OUT = os.path.join(BRAND, "packaging-v3")
    PV.render(jobs)


def logo_fonts():
    lo = os.path.join(PUB, "logo")
    os.makedirs(lo, exist_ok=True)
    for f in ["sangat-primary-colour.svg", "sangat-wordmark-colour.svg", "sangat-symbol-colour.svg",
              "sangat-primary-colour-reversed.svg", "sangat-symbol-colour-reversed.svg"]:
        shutil.copy(os.path.join(BRAND, "deliverables/logo/svg", f), lo)
    # the wordmark split in two (same viewBox): the letters, and the gold ear, so the ear can grow in on its own
    w = open(os.path.join(lo, "sangat-wordmark-colour.svg")).read()
    head = w[: w.index("<path")]
    paths = re.findall(r"<path [^>]*/>", w)
    open(os.path.join(lo, "sangat-wordmark-letters.svg"), "w").write(head + "".join(p for p in paths if 'data-color="primary"' in p) + "</svg>")
    open(os.path.join(lo, "sangat-wordmark-ear.svg"), "w").write(head + "".join(p for p in paths if 'data-color="accent"' in p) + "</svg>")
    fo = os.path.join(PUB, "fonts")
    os.makedirs(fo, exist_ok=True)
    src = os.path.join(BRAND, "v2/fonts")
    for f in os.listdir(src):
        shutil.copy(os.path.join(src, f), fo)


if __name__ == "__main__":
    logo_fonts()
    packs()
    landscape()
