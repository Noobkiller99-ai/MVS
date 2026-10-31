#!/usr/bin/env python3
"""Sangat landscape: the client's master illustration, reproduced as an editable, layered SVG.

Source of truth: art/source/sangat-landscape-source.png (1774 x 887, supplied by the client). Nothing is redrawn or
reinterpreted: each pixel is assigned to a visual layer (sky, mountains, trees, farmhouse, fields, foreground leaves and hill, rice
ears) and each layer is traced in colour with vtracer (stacked spline paths). Layers are drawn back to front and each
bleeds 3 px under the layers drawn after it, so no hairline gaps open between them.

Outputs (art/):
  sangat-landscape.svg              full artwork, sky included, viewBox 0 0 1774 887 (the source's aspect ratio)
  sangat-landscape-transparent.svg  the same without the sky layer (transparent where the sky was)
  sangat-landscape-ears.svg         the foreground rice-ears layer alone (drawn over the pack's clear window)
  sangat-landscape*.png             reference renders; landscape-check.png (source | vector | difference)
"""
import io, json, os
import numpy as np
import potrace
import cairosvg
from PIL import Image, ImageFilter
from scipy import ndimage

HERE = os.path.dirname(os.path.abspath(__file__))
W = os.path.normpath(os.path.join(HERE, ".."))
ART = os.path.join(W, "art")
SRC = os.path.join(ART, "source/sangat-landscape-source.png")
REGIONS = ["sky", "mountains", "trees", "farmhouse", "fields", "foliage", "rice-ears"]
LABELS = {"sky": "Sky", "mountains": "Mountains and mist", "trees": "Trees", "farmhouse": "Farmhouse",
          "fields": "Rice fields", "foliage": "Foreground leaves and hill", "rice-ears": "Foreground rice ears"}


def floor_y(x):
    """Lower edge of the distant zone (mountains, trees, farmhouse): the valley floor, then the right-hand hill."""
    pts = [(0, 462), (230, 468), (440, 462), (600, 472), (800, 492), (950, 502), (1100, 484), (1250, 472), (1300, 462),
           (1400, 402), (1500, 346), (1600, 290), (1700, 240), (1774, 214)]
    xs, ys = zip(*pts)
    return np.interp(x, xs, ys)


def fg_top(x):
    """Upper edge of the foreground (leaves, stalks and the big right-hand hill)."""
    pts = [(0, 540), (150, 560), (250, 600), (400, 640), (550, 652), (700, 642), (800, 622), (900, 592), (1000, 556),
           (1100, 520), (1200, 482), (1300, 440), (1400, 390), (1500, 338), (1600, 286), (1700, 238), (1774, 212)]
    xs, ys = zip(*pts)
    return np.interp(x, xs, ys)


def regions(rgb):
    h, w, _ = rgb.shape
    f = rgb.astype(float) / 255
    mx, mn = f.max(2), f.min(2)
    sat = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1e-6), 0)
    r, g, b = f[..., 0], f[..., 1], f[..., 2]
    hue = np.degrees(np.arctan2(np.sqrt(3) * (g - b), 2 * r - g - b)) % 360
    yy, xx = np.mgrid[0:h, 0:w]
    far = yy < floor_y(xx)
    fg = (yy >= fg_top(xx)) & ~far
    mid = ~far & ~fg
    cream = (mx > 0.86) & (sat < 0.12)
    lab, _ = ndimage.label(cream & far)
    sky = np.isin(lab, np.unique(lab[0][lab[0] > 0]))
    gold = (hue > 28) & (hue < 52) & (sat > 0.32) & (mx > 0.6)
    house = (xx > 232) & (xx < 434) & (yy > 376) & (yy < 494) & ~((hue > 60) & (hue < 160) & (sat > 0.25)) & ~sky
    # trees: saturated or deep greens in the distance and in the fields, closed into whole canopies
    greenish = (hue > 78) & (hue < 160)
    treeish = greenish & ((sat > 0.33) | (mx < 0.33)) & (far | mid) & ~sky
    treeish = ndimage.binary_closing(treeish, iterations=2)
    treeish = ndimage.binary_opening(treeish, iterations=1)
    lab, n = ndimage.label(treeish)
    sizes = ndimage.sum(treeish, lab, range(1, n + 1)) if n else []
    keep = [i + 1 for i, sz in enumerate(sizes) if sz > 260]
    tree = np.isin(lab, keep)
    tree = ndimage.binary_closing(tree, iterations=6)      # canopies keep their light, olive highlights
    tree = ndimage.binary_fill_holes(tree) & ~sky
    tree &= far | (mid & (mx < 0.36))          # in the fields only the dark, solid clumps are trees
    tree |= far & ~sky & (yy < 246) & (xx < 330)  # above the ridgeline on the left only the big tree's crown
    reg = np.full((h, w), REGIONS.index("fields"), np.uint8)
    reg[far] = REGIONS.index("mountains")
    reg[fg] = REGIONS.index("foliage")
    reg[tree] = REGIONS.index("trees")
    reg[house] = REGIONS.index("farmhouse")
    reg[sky] = REGIONS.index("sky")
    reg[gold & fg] = REGIONS.index("rice-ears")
    reg = np.asarray(Image.fromarray(reg).filter(ImageFilter.ModeFilter(5))).copy()
    reg[sky] = REGIONS.index("sky")
    return reg


def trace_region(rgba_path, settings):
    """vtracer colour stacking on one layer image (pixels outside the layer are transparent)."""
    import vtracer, tempfile, re as _re
    with tempfile.TemporaryDirectory() as td:
        out = os.path.join(td, "r.svg")
        vtracer.convert_image_to_svg_py(rgba_path, out, colormode="color", hierarchical="stacked", mode="spline",
                                        **settings)
        svg = open(out).read()
    paths = []
    for tag in _re.findall(r"<path [^>]*/>", svg):
        dm, fm = _re.search(r'd="([^"]+)"', tag), _re.search(r'fill="([^"]+)"', tag)
        if not dm or not fm:
            continue
        d, fill = dm.group(1).strip(), fm.group(1).upper()
        t = _re.search(r'translate\(([-\d.]+),\s*([-\d.]+)\)', tag)
        tr = f' transform="translate({t.group(1)} {t.group(2)})"' if t and (float(t.group(1)) or float(t.group(2))) else ""
        paths.append(f'<path fill="{fill}" d="{d}"{tr}/>')
    return paths


SETTINGS = dict(filter_speckle=4, color_precision=7, layer_difference=12, corner_threshold=60, length_threshold=4.0,
                max_iterations=10, splice_threshold=45, path_precision=1)


def build():
    import tempfile
    src = Image.open(SRC).convert("RGB")
    rgb = np.asarray(src)
    reg = regions(rgb)
    h, w = reg.shape
    groups, stats = [], {}
    with tempfile.TemporaryDirectory() as td:
        for ri, name in enumerate(REGIONS):
            inreg = reg == ri
            if not inreg.any():
                continue
            # bleed 3 px into the layers drawn after this one, so no hairline seam opens between layers
            later = reg > ri
            m = inreg | (ndimage.binary_dilation(inreg, iterations=3) & later)
            alpha = np.where(m, 255, 0).astype(np.uint8)
            path = os.path.join(td, f"{name}.png")
            Image.fromarray(np.dstack([rgb, alpha])).save(path)
            paths = trace_region(path, SETTINGS)
            groups.append((name, paths))
            stats[name] = len(paths)
    return groups, (w, h), stats


def svg(groups, size, skip=()):
    w, h = size
    body = "".join(f'<g id="{n}" data-layer="{LABELS[n]}">{"".join(p)}</g>' for n, p in groups if n not in skip)
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">'
            f'<title>Sangat landscape</title>'
            f'<desc>Vector reproduction of the client-supplied Sangat landscape illustration (art/source). Layers: '
            f'{", ".join(LABELS[n] for n, _ in groups if n not in skip)}.</desc>{body}</svg>')


def main():
    groups, size, stats = build()
    full = svg(groups, size)
    clear = svg(groups, size, skip=("sky",))
    open(os.path.join(ART, "sangat-landscape.svg"), "w").write(full)
    open(os.path.join(ART, "sangat-landscape-transparent.svg"), "w").write(clear)
    # the foreground rice ears on their own, so a pack's clear window can sit behind them
    ears = svg(groups, size, skip=tuple(n for n in REGIONS if n != "rice-ears"))
    open(os.path.join(ART, "sangat-landscape-ears.svg"), "w").write(ears)
    w, h = size
    for name, s in (("sangat-landscape", full), ("sangat-landscape-transparent", clear)):
        cairosvg.svg2png(bytestring=s.encode(), write_to=os.path.join(ART, f"{name}.png"), output_width=w * 2, output_height=h * 2)
    a = np.asarray(Image.open(SRC).convert("RGB")).astype(float)
    b = np.asarray(Image.open(io.BytesIO(cairosvg.svg2png(bytestring=full.encode(), output_width=w, output_height=h))).convert("RGB")).astype(float)
    mse = ((a - b) ** 2).mean()
    psnr = 10 * np.log10(255 ** 2 / mse)
    diff = Image.fromarray(np.clip(np.abs(a - b).mean(2) * 3, 0, 255).astype(np.uint8)).convert("RGB")
    sheet = Image.new("RGB", (w, h * 3 + 20), "white")
    sheet.paste(Image.open(SRC).convert("RGB"), (0, 0))
    sheet.paste(Image.fromarray(b.astype(np.uint8)), (0, h + 10))
    sheet.paste(diff, (0, 2 * h + 20))
    sheet.resize((w // 2, (h * 3 + 20) // 2)).save(os.path.join(ART, "landscape-check.png"))
    rep = {"psnr_db": round(psnr, 2), "mean_abs_error": round(np.abs(a - b).mean(), 2), "tracer": "vtracer colour, stacked, spline", "settings": SETTINGS,
           "paths_per_layer": stats, "kb_full": len(full) // 1024, "kb_transparent": len(clear) // 1024}
    json.dump(rep, open(os.path.join(ART, "landscape-check.json"), "w"), indent=1)
    print(rep)


if __name__ == "__main__":
    main()
