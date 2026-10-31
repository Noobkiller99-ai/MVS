#!/usr/bin/env python3
"""Sangat v3 logo masters, traced from the client's exact brand board (Sangat_Brand_Board_Exact.svg, 1536 x 1024).

The board is a raster image, so "exact" means vectorising it: each colour layer of the wordmark, the gold ear, the
tagline and the brand symbol is separated softly (every pixel as a mix of the ivory ground and one ink), upsampled
8x, thresholded at 50% coverage and traced with potrace. Coordinates stay in board pixels so the layers register.

Writes v3/logo/trace-*.svg (raw layers) and v3/ref/overlay-*.png (trace drawn over the board, for checking).
"""
import os
import numpy as np
from scipy import ndimage
import potrace
from PIL import Image, ImageFilter

HERE = os.path.dirname(os.path.abspath(__file__))
W = os.path.normpath(os.path.join(HERE, ".."))
REF = os.path.join(W, "v3/ref")
OUT = os.path.join(W, "v3/logo")
os.makedirs(OUT, exist_ok=True)
UP = 8

BG = np.array([249, 244, 235]) / 255
INKS = {  # board colours, measured
    "green": np.array([12, 41, 29]) / 255,
    "gold": np.array([158, 120, 66]) / 255,
    "gold-light": np.array([214, 184, 128]) / 255,
    "sage": np.array([188, 190, 166]) / 255,
    "sage-dark": np.array([118, 133, 101]) / 255,
    "gold-pale": np.array([230, 203, 152]) / 255,
    "brown": np.array([113, 78, 31]) / 255,
}
REGIONS = {
    "wordmark": ((60, 60, 524, 262), ["green", "gold", "gold-light"]),
    "tagline": ((100, 266, 500, 300), ["brown"]),
    "symbol": ((612, 64, 724, 262), ["green", "sage", "sage-dark", "gold", "gold-pale"]),
}


def separate(img, inks):
    """Per pixel: the ink whose bg->ink line explains it best, and how much of it (0..1)."""
    h, w, _ = img.shape
    best = np.full((h, w), -1)
    best_res = np.full((h, w), 9.0)
    alpha = np.zeros((h, w))
    for i, name in enumerate(inks):
        c = INKS[name]
        d = c - BG
        t = ((img - BG) @ d) / (d @ d)
        proj = BG + np.clip(t, 0, 1)[..., None] * d
        res = np.linalg.norm(img - proj, axis=2)
        better = (res < best_res) & (t > 0.12)
        best[better] = i
        best_res[better] = res[better]
        alpha[better] = np.clip(t[better], 0, 1)
    return best, alpha


def trace_mask(mask, x0, y0, turd=40):
    bm = potrace.Bitmap(~mask)   # potracer treats False as ink
    paths = bm.trace(turdsize=turd, turnpolicy=potrace.POTRACE_TURNPOLICY_MINORITY, alphamax=1.25,
                     opticurve=True, opttolerance=0.8)
    k = 1 / UP
    f = lambda p: f"{x0 + p.x * k:.2f} {y0 + p.y * k:.2f}"
    d = []
    for curve in paths:
        d.append(f"M{f(curve.start_point)}")
        for seg in curve.segments:
            if seg.is_corner:
                d.append(f"L{f(seg.c)}L{f(seg.end_point)}")
            else:
                d.append(f"C{f(seg.c1)} {f(seg.c2)} {f(seg.end_point)}")
        d.append("Z")
    return "".join(d)


def _bez(p0, p1, p2, p3, n):
    t = np.linspace(0, 1, n, endpoint=False)[:, None]
    return (1 - t) ** 3 * p0 + 3 * (1 - t) ** 2 * t * p1 + 3 * (1 - t) * t ** 2 * p2 + t ** 3 * p3


def trace_smooth(mask, x0, y0, smooth=2.0, step=0.6, turd=60):
    """Trace, then resample each contour every `step` board px, smooth with a circular moving average of
    `smooth` board px and redraw it as a Catmull-Rom curve through every 3rd point."""
    bm = potrace.Bitmap(~mask)
    paths = bm.trace(turdsize=turd, alphamax=1.0, opticurve=False)
    k = 1 / UP
    out = []
    for curve in paths:
        pts = []
        cur = np.array([curve.start_point.x, curve.start_point.y])
        for seg in curve.segments:
            end = np.array([seg.end_point.x, seg.end_point.y])
            if seg.is_corner:
                c = np.array([seg.c.x, seg.c.y])
                pts += list(np.linspace(cur, c, 6, endpoint=False)) + list(np.linspace(c, end, 6, endpoint=False))
            else:
                pts += list(_bez(cur, np.array([seg.c1.x, seg.c1.y]), np.array([seg.c2.x, seg.c2.y]), end, 12))
            cur = end
        P = np.array(pts) * k + [x0, y0]
        seglen = np.r_[0, np.cumsum(np.linalg.norm(np.diff(P, axis=0), axis=1))]
        total = seglen[-1] + np.linalg.norm(P[0] - P[-1])
        n = max(12, int(total / step))
        u = np.linspace(0, total, n, endpoint=False)
        Pc = np.vstack([P, P[:1]])
        sc = np.r_[seglen, total]
        R = np.c_[np.interp(u, sc, Pc[:, 0]), np.interp(u, sc, Pc[:, 1])]
        w = max(1, int(smooth / step))
        ker = np.ones(2 * w + 1) / (2 * w + 1)
        S = np.c_[[np.convolve(np.r_[R[-w:, i], R[:, i], R[:w, i]], ker, "valid") for i in (0, 1)]].T
        S = S[::3]
        m = len(S)
        d = f"M{S[0][0]:.2f} {S[0][1]:.2f}"
        for i in range(m):
            p0, p1, p2, p3 = S[(i - 1) % m], S[i], S[(i + 1) % m], S[(i + 2) % m]
            c1 = p1 + (p2 - p0) / 6
            c2 = p2 - (p3 - p1) / 6
            d += f"C{c1[0]:.2f} {c1[1]:.2f} {c2[0]:.2f} {c2[1]:.2f} {p2[0]:.2f} {p2[1]:.2f}"
        out.append(d + "Z")
    return "".join(out)


def ear_mask(box):
    """Rasterise the redrawn ear at the trace resolution (to cut the green away under it)."""
    import io, cairosvg
    from ear_v3 import ear_paths
    x0, y0, x1, y1 = box
    body = "".join(f'<path d="{d}"/>' for d in ear_paths().values())
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{(x1 - x0) * UP}" height="{(y1 - y0) * UP}" '
           f'viewBox="{x0} {y0} {x1 - x0} {y1 - y0}">{body}</svg>')
    a = np.asarray(Image.open(io.BytesIO(cairosvg.svg2png(bytestring=svg.encode()))).convert("RGBA"))[..., 3]
    return a > 127


def layer_masks(box, inks, blur=None):
    x0, y0, x1, y1 = box
    img = np.asarray(Image.open(os.path.join(REF, "board.png")).convert("RGB")).astype(float)[y0:y1, x0:x1] / 255
    best, alpha = separate(img, inks)
    out = {}
    for i, name in enumerate(inks):
        a = np.where(best == i, alpha, 0.0)
        im = Image.fromarray((a * 255).astype(np.uint8)).resize(((x1 - x0) * UP, (y1 - y0) * UP), Image.BICUBIC)
        im = im.filter(ImageFilter.GaussianBlur(UP * (blur or {}).get(name, 0.55)))
        out[name] = np.asarray(im) > 127
    return out


def clean(mask, min_area, hole_area):
    """Drop specks smaller than min_area and fill enclosed holes smaller than hole_area (upsampled pixels)."""
    lab, n = ndimage.label(mask)
    if n:
        sizes = ndimage.sum(mask, lab, range(1, n + 1))
        mask = np.isin(lab, [i + 1 for i, s in enumerate(sizes) if s >= min_area])
    holes = ndimage.binary_fill_holes(mask) & ~mask
    lab, n = ndimage.label(holes)
    if n:
        sizes = ndimage.sum(holes, lab, range(1, n + 1))
        mask = mask | np.isin(lab, [i + 1 for i, s in enumerate(sizes) if s < hole_area])
    return mask


def main():
    BLUR = {"wordmark": {"green": 0.7, "gold": 0.3, "gold-light": 0.3}, "tagline": {"brown": 0.45},
            "symbol": {"green": 0.75, "sage": 1.1, "sage-dark": 1.1, "gold": 0.9, "gold-pale": 0.9}}
    for region, (box, inks) in REGIONS.items():
        masks = layer_masks(box, inks, BLUR[region])
        A = UP * UP
        if region == "wordmark":
            # the ear is redrawn as clean curves (ear_v3.py); green under it is removed exactly where it sits
            masks.pop("gold"); masks.pop("gold-light")
            ear = ear_mask(box)
            masks["green"] = clean(masks["green"] & ~ndimage.binary_dilation(ear, iterations=UP // 2), 80 * A, 6 * A)
        elif region == "symbol":
            gold = clean(masks.pop("gold") | masks.pop("gold-pale"), 25 * A, 10 * A)
            sage = clean(masks.pop("sage"), 25 * A, 10 * A)
            sdark = clean(masks.pop("sage-dark"), 25 * A, 10 * A)
            green = clean(masks["green"], 40 * A, 4 * A)
            # the small dark tail in the middle belongs to the S-shaped sage leaf above it
            lab, n = ndimage.label(green)
            sizes = ndimage.sum(green, lab, range(1, n + 1))
            big = [i + 1 for i, sz in enumerate(sizes) if sz >= 0.3 * sizes.max()]
            tail = green & ~np.isin(lab, big)
            green = np.isin(lab, big)
            mids = (sage | sdark) & ~gold
            lab, n = ndimage.label(mids)
            cx = ndimage.center_of_mass(mids, lab, range(1, n + 1))
            sizes = ndimage.sum(mids, lab, range(1, n + 1))
            comps = sorted([(c[1], i + 1) for i, (c, sz) in enumerate(zip(cx, sizes)) if sz > 40 * A])
            left = np.isin(lab, [comps[0][1]]) | tail
            left = ndimage.binary_closing(left, iterations=3 * UP) | left
            right = np.isin(lab, [c[1] for c in comps[1:]])
            labg, ng = ndimage.label(gold)
            cyg = ndimage.center_of_mass(gold, labg, range(1, ng + 1))
            top = min(range(ng), key=lambda i: cyg[i][0]) + 1
            masks = {"green": green, "sage-dark": left & ~right, "sage": right, "gold-pale": labg == top,
                     "gold": gold & (labg != top)}
        else:
            masks = {k: clean(v, 2 * A, 2 * A) for k, v in masks.items()}
        layers = {}
        for name, m in masks.items():
            if (region, name) in (("wordmark", "gold"),) or region == "symbol":
                layers[name] = trace_smooth(m, box[0], box[1], smooth=2.0 if region == "wordmark" else 2.2)
            else:
                layers[name] = trace_mask(m, box[0], box[1], turd=60)
        x0, y0, x1, y1 = box
        fills = {"green": "#0F3D2E", "gold": "#C9A96B", "gold-light": "#E2CB97", "gold-pale": "#E2CB97", "sage": "#A7B89F",
                 "sage-dark": "#7E8E6B", "brown": "#8B6F47"}
        order = [n for n in ("sage", "sage-dark", "green", "gold-pale", "gold", "brown") if n in layers]
        body = "".join(f'<path data-layer="{n}" fill="{fills[n]}" d="{layers[n]}"/>' for n in order)
        if region == "wordmark":
            from ear_v3 import ear_paths
            body += "".join(f'<path data-layer="ear-{k}" fill="#C9A96B" d="{d}"/>' for k, d in ear_paths().items())
        svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{x0} {y0} {x1 - x0} {y1 - y0}">{body}</svg>'
        open(os.path.join(OUT, f"trace-{region}.svg"), "w").write(svg)
        print(region, {n: len(d) for n, d in layers.items()})


if __name__ == "__main__":
    main()
