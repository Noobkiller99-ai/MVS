#!/usr/bin/env python3
"""Find the Playfair instance (opsz, wdth, wght) that matches the board's wordmark letters, by IoU per letter."""
import os, itertools, io
import numpy as np, cairosvg
from PIL import Image
from scipy import ndimage
import trace_v3 as T
from outline import glyphs

PLAYFAIR = "/root/.cache/brand-identity/fonts/google/ofl/playfair/Playfair[opsz,wdth,wght].ttf"
box = (60, 60, 524, 262)
x0, y0, x1, y1 = box
img = np.asarray(Image.open(os.path.join(T.REF, "board.png")).convert("RGB")).astype(float)[y0:y1, x0:x1] / 255
best, alpha = T.separate(img, ["green", "gold", "gold-light"])
green = (best == 0) & (alpha > 0.5)
lab, n = ndimage.label(green)
objs = ndimage.find_objects(lab)
comps = sorted([(o[1].start, o, i + 1) for i, o in enumerate(objs) if (o[0].stop - o[0].start) > 30], key=lambda t: t[0])
print("components", [(c[0], c[1][0].start, c[1][0].stop, c[1][1].stop) for c in comps])
SC = 4


def raster(d, w, h, tx, ty, k):
    svg = f'<svg xmlns="http://www.w3.org/2000/svg" width="{w * SC}" height="{h * SC}" viewBox="0 0 {w} {h}"><path transform="translate({tx} {ty}) scale({k})" d="{d}"/></svg>'
    png = cairosvg.svg2png(bytestring=svg.encode())
    a = np.asarray(Image.open(io.BytesIO(png)).convert("RGBA"))[..., 3] > 127
    return a


def score(letter, comp, inst):
    sl, i = comp[1], comp[2]
    target = (lab[sl] == i)
    h, w = target.shape
    g = glyphs(letter, path=PLAYFAIR, size=1000, **inst)[0]
    from fontTools.svgLib.path import parse_path
    from fontTools.pens.boundsPen import BoundsPen
    bp = BoundsPen(None); parse_path(g["d"], bp); bx0, by0, bx1, by1 = bp.bounds
    k = h / (by1 - by0)
    pred = raster(g["d"], w, h, -bx0 * k, -by0 * k, k)
    tgt = np.asarray(Image.fromarray(target.astype(np.uint8) * 255).resize((w * SC, h * SC), Image.NEAREST)) > 127
    return (pred & tgt).sum() / (pred | tgt).sum(), (bx1 - bx0) / (by1 - by0), w / h


letters = {"S": comps[0], "a": comps[2], "n": comps[3], "t": comps[5]}
res = []
for opsz, wdth, wght in itertools.product([5, 8, 12, 18, 24, 36, 60, 120, 400, 1200], [87.5, 100, 112.5], [400, 500, 600, 700]):
    inst = {"wght": wght, "opsz": opsz, "wdth": wdth}
    s = [score(L, c, inst)[0] for L, c in letters.items()]
    res.append((np.mean(s), inst, [round(v, 3) for v in s]))
res.sort(key=lambda r: -r[0])
for r in res[:8]:
    print(round(r[0], 4), r[1], r[2])
inst = res[0][1]
for L, c in letters.items():
    print(L, "aspect font %.3f board %.3f" % score(L, c, inst)[1:])
for name, path in [("Playfair Display 600", "/root/.cache/brand-identity/fonts/google/ofl/playfairdisplay/PlayfairDisplay[wght].ttf")]:
    PLAYFAIR2 = path
    s2 = []
    for L, c in letters.items():
        globals()["PLAYFAIR"] = path
        s2.append(round(score(L, c, {"wght": 600})[0], 3))
    print(name, s2)
