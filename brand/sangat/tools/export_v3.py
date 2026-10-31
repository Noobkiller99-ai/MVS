#!/usr/bin/env python3
"""Final Sangat v3 logo files (traced from the client's exact brand board), web icons and website assets.

deliverables/logo/svg/sangat-<layout>-<colourway>.svg   layouts: primary (wordmark + tagline), horizontal,
    stacked, wordmark, symbol; colourways: colour, colour-reversed, black, white, forest, gold (foil)
deliverables/logo/png/...                                same, transparent PNG, 2400 px on the long side
deliverables/digital/web-icons/                          favicon.svg/.ico, 16/32/48, apple-touch, 192/512, maskable
/assets/brand/ + /assets/fonts/ + /src/brand-assets.js   the website's copies
"""
import base64, io, os, re, shutil, subprocess, sys
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
W = os.path.normpath(os.path.join(HERE, ".."))
SITE = os.path.normpath(os.path.join(W, "..", ".."))
SRC = os.path.join(W, "v3/logo")
OUT = os.path.join(W, "deliverables")
SKILL = os.path.join(SITE, ".claude/skills/logo-design/scripts")
ENV = {**os.environ, "PATH": "/root/.local/bin:" + os.environ.get("PATH", "")}

LAYOUTS = {"primary": "primary", "horizontal": "horizontal", "stacked": "stacked", "wordmark": "wordmark", "symbol": "symbol"}
REVERSED = {"primary": "#F9F6EE", "tagline": "#C9A96B", "divider": "#C9A96B", "secondary": "#A7B89F",
            "secondary-dark": "#A7B89F"}
MONO = {"black": "#000000", "white": "#FFFFFF", "forest": "#0F3D2E", "gold": "#C9A96B"}


def recolour(svg, mapping):
    def sub(m):
        role = m.group(1)
        return f'data-color="{role}" fill="{mapping.get(role, m.group(2))}"'
    return re.sub(r'data-color="([^"]+)" fill="([^"]+)"', sub, svg)


def one_colour(svg, hexv):
    return re.sub(r'fill="#[0-9A-Fa-f]{6}"', f'fill="{hexv}"', svg)


def titled(svg, title):
    svg = re.sub(r"<title>.*?</title>", "", svg)
    return svg.replace(">", f"><title>{title}</title>", 1)


def render(path, out_dir, long_side=2400):
    vb = [float(v) for v in re.search(r'viewBox="([^"]+)"', open(path).read()).group(1).split()]
    k = long_side / max(vb[2], vb[3])
    subprocess.run([sys.executable, os.path.join(SKILL, "render_png.py"), path, "--out-dir", out_dir,
                    "--width", str(round(vb[2] * k)), "--height", str(round(vb[3] * k))], check=True, env=ENV,
                   capture_output=True)


def icon_svg(full_bleed=False):
    """Reversed symbol on a Forest Green tile (rounded unless full_bleed, for maskable icons)."""
    sym = recolour(open(os.path.join(SRC, "symbol.svg")).read(), REVERSED)
    vb = [float(v) for v in re.search(r'viewBox="([^"]+)"', sym).group(1).split()]
    inner = re.sub(r"<title>.*?</title>", "", re.search(r"<svg[^>]*>(.*)</svg>", sym, re.S).group(1))
    s = (0.62 if full_bleed else 0.86) * 100 / max(vb[2], vb[3])
    off_x = (100 - vb[2] * s) / 2 - vb[0] * s
    off_y = (100 - vb[3] * s) / 2 - vb[1] * s
    tile = ('<rect width="100" height="100" fill="#0F3D2E"/>' if full_bleed else
            '<rect width="100" height="100" rx="22" fill="#0F3D2E"/>')
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><title>Sangat</title>{tile}'
            f'<g transform="translate({off_x:.2f} {off_y:.2f}) scale({s:.5f})">{inner}</g></svg>')


def main():
    svg_dir, png_dir = os.path.join(OUT, "logo/svg"), os.path.join(OUT, "logo/png")
    icons = os.path.join(OUT, "digital/web-icons")
    for d in (svg_dir, png_dir, icons):
        os.makedirs(d, exist_ok=True)
    written = []
    for lay, base in LAYOUTS.items():
        colour = open(os.path.join(SRC, f"{base}.svg")).read()
        mono = open(os.path.join(SRC, f"{base}-mono.svg")).read()
        ways = {"colour": colour, "colour-reversed": recolour(colour, REVERSED)}
        ways.update({k: one_colour(mono, v) for k, v in MONO.items()})
        for way, svg in ways.items():
            p = os.path.join(svg_dir, f"sangat-{lay}-{way}.svg")
            open(p, "w").write(titled(svg, f"Sangat logo ({lay}, {way})"))
            written.append(p)
    for p in written:
        render(p, png_dir)
    # web icons
    open(os.path.join(icons, "favicon.svg"), "w").write(icon_svg())
    open(os.path.join(icons, "maskable.svg"), "w").write(icon_svg(full_bleed=True))
    for name, size, src in [("favicon-16.png", 16, "favicon.svg"), ("favicon-32.png", 32, "favicon.svg"),
                            ("favicon-48.png", 48, "favicon.svg"), ("apple-touch-icon.png", 180, "maskable.svg"),
                            ("icon-192.png", 192, "favicon.svg"), ("icon-512.png", 512, "favicon.svg"),
                            ("maskable-512.png", 512, "maskable.svg")]:
        subprocess.run([sys.executable, os.path.join(SKILL, "render_png.py"), os.path.join(icons, src), "-o",
                        os.path.join(icons, name), "--size", str(size)], check=True, env=ENV, capture_output=True)
    subprocess.run([sys.executable, os.path.join(SKILL, "render_png.py"), os.path.join(icons, "favicon.svg"),
                    "--ico", os.path.join(icons, "favicon.ico"), "--ico-sizes", "16", "32", "48"], check=True, env=ENV,
                   capture_output=True)
    # website copies
    brand = os.path.join(SITE, "assets/brand")
    for f in os.listdir(brand):
        if f.endswith(".svg"):
            os.remove(os.path.join(brand, f))
    for f in ["sangat-wordmark-colour.svg", "sangat-wordmark-colour-reversed.svg", "sangat-symbol-colour.svg",
              "sangat-primary-colour.svg"]:
        shutil.copy(os.path.join(svg_dir, f), brand)
    os.makedirs(os.path.join(brand, "icons"), exist_ok=True)
    for f in ["favicon.svg", "favicon.ico", "apple-touch-icon.png", "icon-192.png", "icon-512.png", "maskable-512.png"]:
        shutil.copy(os.path.join(icons, f), os.path.join(brand, "icons", f))
    fonts = os.path.join(SITE, "assets/fonts")
    for f in os.listdir(fonts):
        os.remove(os.path.join(fonts, f))
    for f in ["playfair-display-latin-400-normal.woff2", "playfair-display-latin-600-normal.woff2",
              "playfair-display-latin-400-italic.woff2", "inter-latin-400-normal.woff2", "inter-latin-600-normal.woff2",
              "libre-caslon-text-latin-400-normal.woff2", "libre-caslon-text-latin-400-italic.woff2", "LICENSE-LibreCaslonText.txt",
              "noto-serif-devanagari-devanagari-400-normal.woff2", "LICENSE-PlayfairDisplay.txt", "LICENSE-Inter.txt",
              "LICENSE-NotoSerifDevanagari.txt"]:
        shutil.copy(os.path.join(W, "v2/fonts", f), fonts)
    lab = os.path.join(W, "packaging-v3/v1-ivory-landscape-1kg-front-mock.png")
    if not os.path.exists(lab):
        print("pack label skipped (run packaging_v3.py first)")
        return
    im = Image.open(lab).convert("RGB")
    im = im.resize((560, round(560 * im.height / im.width)), Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, "JPEG", quality=84, optimize=True, progressive=True)
    open(os.path.join(SITE, "src/brand-assets.js"), "w").write(
        "/* Sangat pack front (V1 Ivory Landscape, 1 kg) for the 3D pack label.\n"
        "   Generated from brand/sangat/packaging-v3 by brand/sangat/tools/export_v3.py. Do not edit by hand. */\n"
        f'export const PACK_LABEL = "data:image/jpeg;base64,{base64.b64encode(buf.getvalue()).decode()}";\n')
    print("svg", len(written))


if __name__ == "__main__":
    main()
