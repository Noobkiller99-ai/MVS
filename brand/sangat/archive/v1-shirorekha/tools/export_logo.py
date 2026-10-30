#!/usr/bin/env python3
"""Final Sangat logo files from the brand-identity masters (sets/A/logo/build/master-*.svg).

deliverables/logo/svg/sangat-<layout>-<colourway>.svg   editable vector, outlined, no live text
deliverables/logo/png/sangat-<layout>-<colourway>.png   transparent, 2400 px on the long side
deliverables/digital/web-icons/                          favicon.ico/.svg, PNG icons, webmanifest (logo-design skill)
Website copies go to /assets/brand/.
"""
import os, re, shutil, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
W = os.path.normpath(os.path.join(HERE, ".."))
SITE = os.path.normpath(os.path.join(W, "..", ".."))
SRC = os.path.join(W, "sets/A/logo/build")
OUT = os.path.join(W, "deliverables")
SKILL = os.path.join(SITE, ".claude/skills/logo-design/scripts")

LAYOUTS = {"horizontal": "master-lockup-horizontal.svg", "stacked": "master-lockup-stacked.svg",
           "symbol": "master-symbol.svg", "symbol-small": "master-symbol-small.svg", "wordmark": "master-wordmark.svg"}
# (primary = grains + wordmark, accent = the hanging line)
WAYS = {
    "colour": ("#1E3A2F", "#A07A35"),            # Sangat Forest + Sunehra Gold (print / foil reference)
    "colour-reversed": ("#F6F1E5", "#C9A35A"),   # Basmati Ivory + Gold on dark, for forest / night grounds
    "black": ("#000000", "#000000"),
    "white": ("#FFFFFF", "#FFFFFF"),
    "forest": ("#1E3A2F", "#1E3A2F"),            # single colour
    "gold": ("#A07A35", "#A07A35"),              # single colour, e.g. foil-only or deboss reference
}


def paint(svg, primary, accent):
    svg = re.sub(r'\sdata-color="primary"', f' fill="{primary}" data-color="primary"', svg)
    svg = re.sub(r'\sdata-color="accent"', f' fill="{accent}" data-color="accent"', svg)
    # The wordmark group carries data-color on the <g>; its child paths inherit the fill.
    return svg


def main():
    for d in ["logo/svg", "logo/png", "digital/web-icons"]:
        os.makedirs(os.path.join(OUT, d), exist_ok=True)
    svgs = []
    for lay, f in LAYOUTS.items():
        src = open(os.path.join(SRC, f)).read()
        for way, (p, a) in WAYS.items():
            path = os.path.join(OUT, "logo/svg", f"sangat-{lay}-{way}.svg")
            open(path, "w").write(paint(src, p, a))
            svgs.append(path)
    # PNGs: 2400 px on the long side, transparent.
    env = {**os.environ, "PATH": "/root/.local/bin:" + os.environ.get("PATH", "")}
    for path in svgs:
        vb = [float(v) for v in re.search(r'viewBox="([^"]+)"', open(path).read()).group(1).split()]
        w, h = vb[2], vb[3]
        k = 2400 / max(w, h)
        size = ["--width", str(round(w * k)), "--height", str(round(h * k))]
        subprocess.run([sys.executable, os.path.join(SKILL, "render_png.py"), path, "--out-dir",
                        os.path.join(OUT, "logo/png"), *size], check=True, env=env, capture_output=True)
    # Web icon set: symbol master, small cut for the favicon, forest tile for app icons.
    sym = os.path.join(OUT, "logo/svg", "sangat-symbol-colour.svg")
    small = os.path.join(OUT, "logo/svg", "sangat-symbol-small-colour.svg")
    subprocess.run([sys.executable, os.path.join(SKILL, "export_variants.py"), sym, "--name", "sangat",
                    "--title", "Sangat", "--icon-bg", "#1E3A2F", "--icon-fg", "#F6F1E5", "--favicon-source", small,
                    "--optical-offset", "-0.01", "--web-icons", "--out-dir", os.path.join(OUT, "digital/web-icons")],
                   check=True, env=env)
    site_brand = os.path.join(SITE, "assets/brand")
    os.makedirs(site_brand, exist_ok=True)
    for f in ["sangat-horizontal-colour.svg", "sangat-horizontal-colour-reversed.svg", "sangat-symbol-colour.svg"]:
        shutil.copy(os.path.join(OUT, "logo/svg", f), site_brand)
    print("done", len(svgs), "svg")


if __name__ == "__main__":
    main()
