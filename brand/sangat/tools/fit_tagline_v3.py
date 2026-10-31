#!/usr/bin/env python3
"""Identify the tagline face on the board: each candidate font is set letter by letter at the board's own letter
positions (one scale from the cap height), and scored by overlap with the board's ink."""
import io, os, glob, itertools
import numpy as np, cairosvg
from PIL import Image
from scipy import ndimage
from fontTools.ttLib import TTFont
from fontTools.pens.boundsPen import BoundsPen
from fontTools.svgLib.path import parse_path
import trace_v3 as T
from outline import glyphs

BOX = (100, 266, 500, 300)
TEXT = "Sanjhi Soch, Sunehra Kal"
SC = 6
x0, y0, x1, y1 = BOX
img = np.asarray(Image.open(os.path.join(T.REF, "board.png")).convert("RGB")).astype(float)[y0:y1, x0:x1] / 255
best, alpha = T.separate(img, ["brown"])
ink = np.where(best == 0, alpha, 0)
up = np.asarray(Image.fromarray((ink * 255).astype(np.uint8)).resize(((x1 - x0) * SC, (y1 - y0) * SC), Image.BICUBIC)) / 255
mask = up > 0.5
# letter columns: group components by x overlap
lab, n = ndimage.label(mask)
objs = ndimage.find_objects(lab)
spans = sorted([[o[1].start, o[1].stop, o[0].start, o[0].stop] for o in objs if (o[1].stop - o[1].start) * (o[0].stop - o[0].start) > 20])
cols = []
for s in spans:
    if cols and s[0] < cols[-1][1] - 2:
        c = cols[-1]
        c[1] = max(c[1], s[1]); c[2] = min(c[2], s[2]); c[3] = max(c[3], s[3])
    else:
        cols.append(list(s))
chars = [c for c in TEXT if c != " "]
print("columns", len(cols), "chars", len(chars))
S_col = cols[0]
baseline = np.median([c[3] for c, ch in zip(cols, chars) if ch in "anchiouerS"])
capH = S_col[3] - S_col[2]


def score(path, loc):
    g = glyphs("".join(chars), path=path, size=1000, **loc)
    f = TTFont(path)
    capf = f["OS/2"].sCapHeight
    k = capH / capf / (1000 / f["head"].unitsPerEm)
    body = []
    for gl, c in zip(g, cols):
        bp = BoundsPen(None); parse_path(gl["d"], bp)
        if not bp.bounds:
            continue
        bx0, _, bx1, _ = bp.bounds
        cx = (c[0] + c[1]) / 2
        tx = cx - (bx0 + bx1) / 2 * k
        body.append(f'<path transform="translate({tx:.2f} {baseline:.2f}) scale({k:.5f})" d="{gl["d"]}"/>')
    W, H = mask.shape[1], mask.shape[0]
    svg = f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">{"".join(body)}</svg>'
    a = np.asarray(Image.open(io.BytesIO(cairosvg.svg2png(bytestring=svg.encode()))).convert("RGBA"))[..., 3] > 127
    return (a & mask).sum() / (a | mask).sum()


F = "/root/.cache/brand-identity/fonts/google/ofl"
cands = []
for fam in ["playfairdisplay", "playfair", "ebgaramond", "cormorantgaramond", "cormorant", "crimsonpro", "lora",
            "librecaslontext", "librebaskerville", "sourceserif4", "spectral", "gildadisplay", "marcellus"]:
    for p in glob.glob(f"{F}/{fam}/*.ttf"):
        axes = {a.axisTag: (a.minValue, a.maxValue) for a in TTFont(p)["fvar"].axes} if "fvar" in TTFont(p) else {}
        weights = [w for w in (300, 400, 500, 600) if not axes or (axes["wght"][0] <= w <= axes["wght"][1])] if "wght" in axes else [None]
        for w in weights:
            loc = {"wght": w} if w else {}
            if "opsz" in axes:
                for o in (12, 24, 60):
                    if axes["opsz"][0] <= o <= axes["opsz"][1]:
                        cands.append((fam, p, {**loc, "opsz": o}))
            else:
                cands.append((fam, p, loc))
res = []
for fam, p, loc in cands:
    try:
        res.append((score(p, loc), fam, loc))
    except Exception as e:
        print("skip", fam, loc, e)
res.sort(key=lambda r: -r[0])
for r in res[:10]:
    print(round(r[0], 3), r[1], r[2])


def render(path, loc, out):
    g = glyphs("".join(chars), path=path, size=1000, **loc)
    f = TTFont(path)
    k = capH / f["OS/2"].sCapHeight / (1000 / f["head"].unitsPerEm)
    body = []
    for gl, c in zip(g, cols):
        bp = BoundsPen(None); parse_path(gl["d"], bp)
        bx0, _, bx1, _ = bp.bounds
        tx = (c[0] + c[1]) / 2 - (bx0 + bx1) / 2 * k
        body.append(f'<path fill="#8B6F47" transform="translate({tx:.2f} {baseline:.2f}) scale({k:.5f})" d="{gl["d"]}"/>')
    W, H = mask.shape[1], mask.shape[0]
    svg = f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}"><rect width="{W}" height="{H}" fill="#F9F6EE"/>{"".join(body)}</svg>'
    return Image.open(io.BytesIO(cairosvg.svg2png(bytestring=svg.encode()))).convert("RGB")


if os.environ.get("SHOW"):
    board = Image.open(os.path.join(T.REF, "board.png")).convert("RGB").crop(BOX).resize((mask.shape[1], mask.shape[0]), Image.LANCZOS)
    tiles = [board] + [render(f"{F}/{fam}/" + os.path.basename(glob.glob(f"{F}/{fam}/*.ttf")[0]), loc, None) for _, fam, loc in res[:5]]
    o = Image.new("RGB", (board.width, sum(t.height for t in tiles) + 8 * len(tiles)), "white")
    y = 0
    for t in tiles:
        o.paste(t, (0, y)); y += t.height + 8
    o.save(os.path.join(T.REF, "cmp-tag-fonts.png"))
    print([r[1] for r in res[:5]])
