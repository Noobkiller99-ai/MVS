#!/usr/bin/env python3
"""Sangat v3 logo masters, built from the board traces (trace_v3.py) and the redrawn ear (ear_v3.py).

Writes v3/logo/: wordmark, primary (wordmark + tagline, as on the board), horizontal (symbol | wordmark),
stacked (symbol over wordmark over tagline) and symbol, each in colour (with the board's gold and sage shading)
and as a one-colour cut (-mono) where touching parts are separated by small gaps.
Coordinates are board pixels (the wordmark is ~460 px wide on the board)."""
import io, os, re
import numpy as np
import pathops
from PIL import Image
from scipy import ndimage
from fontTools.svgLib.path import parse_path
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.ttLib import TTFont
import trace_v3 as T
from ear_v3 import ear_paths
from outline import glyphs

HERE = os.path.dirname(os.path.abspath(__file__))
W = os.path.normpath(os.path.join(HERE, ".."))
OUT = os.path.join(W, "v3/logo")
CASLON = "/root/.cache/brand-identity/fonts/google/ofl/librecaslontext/LibreCaslonText[wght].ttf"

COL = {"primary": "#0F3D2E", "tagline": "#8B6F47", "secondary": "#A7B89F", "divider": "#C9A96B"}
GRAD = {  # board shading, as linear gradients (top -> bottom)
    "ear-light": ("#E6CF9C", "#C9A96B"), "ear-deep": ("#CDAE72", "#A27F49"),
    "leaf-sage-dark": ("#93A486", "#3F5F4B"), "flame": ("#EBD5A6", "#D9BC85"), "streak": ("#D2B276", "#B8945C"),
}
ROLE = {"ear-light": "accent", "ear-deep": "accent", "flame": "accent-2", "streak": "accent",
        "leaf-sage-dark": "secondary-dark"}


def P(d):
    p = pathops.Path()
    parse_path(d, p.getPen())
    return p


def D(p):
    pen = SVGPathPen(None, ntos=lambda v: f"{v:.2f}".rstrip("0").rstrip("."))
    p.draw(pen)
    return pen.getCommands()


def op(a, b, k):
    return pathops.op(a, b, getattr(pathops.PathOp, k))


def union(*ps):
    o = ps[0]
    for p in ps[1:]:
        o = op(o, p, "UNION")
    return o


def grow(p, by):
    q = pathops.Path()
    p.draw(q.getPen())
    q.stroke(2 * by, pathops.LineCap.ROUND_CAP, pathops.LineJoin.ROUND_JOIN, 4)
    q.convertConicsToQuads()
    return union(p, q)


def bounds(*ds):
    bs = []
    for d in ds:
        bp = BoundsPen(None)
        parse_path(d, bp)
        if bp.bounds:
            bs.append(bp.bounds)
    return min(b[0] for b in bs), min(b[1] for b in bs), max(b[2] for b in bs), max(b[3] for b in bs)


def layers(name):
    s = open(os.path.join(OUT, f"trace-{name}.svg")).read()
    return {m.group(1): m.group(2) for m in re.finditer(r'data-layer="([^"]+)" fill="[^"]+" d="([^"]+)"', s)}


def tagline_paths():
    """The tagline set in Libre Caslon Text at the board's own letter positions (measured), outlined."""
    box = (100, 266, 500, 300)
    SC = 6
    x0, y0, x1, y1 = box
    img = np.asarray(Image.open(os.path.join(T.REF, "board.png")).convert("RGB")).astype(float)[y0:y1, x0:x1] / 255
    best, alpha = T.separate(img, ["brown"])
    ink = np.where(best == 0, alpha, 0)
    mask = np.asarray(Image.fromarray((ink * 255).astype(np.uint8)).resize(((x1 - x0) * SC, (y1 - y0) * SC), Image.BICUBIC)) > 127
    lab, n = ndimage.label(mask)
    spans = sorted([[o[1].start, o[1].stop, o[0].start, o[0].stop] for o in ndimage.find_objects(lab)
                    if (o[1].stop - o[1].start) * (o[0].stop - o[0].start) > 20])
    cols = []
    for s in spans:
        if cols and s[0] < cols[-1][1] - 2:
            c = cols[-1]
            c[1], c[2], c[3] = max(c[1], s[1]), min(c[2], s[2]), max(c[3], s[3])
        else:
            cols.append(list(s))
    chars = [c for c in "Sanjhi Soch, Sunehra Kal" if c != " "]
    baseline = np.median([c[3] for c, ch in zip(cols, chars) if ch in "anchiouerS"])
    capH = cols[0][3] - cols[0][2]
    f = TTFont(CASLON)
    g = glyphs("".join(chars), path=CASLON, size=1000, wght=400)
    k = capH / f["OS/2"].sCapHeight / (1000 / f["head"].unitsPerEm)
    out = pathops.Path()
    for gl, c in zip(g, cols):
        bp = BoundsPen(None)
        parse_path(gl["d"], bp)
        bx0, _, bx1, _ = bp.bounds
        tx = (c[0] + c[1]) / 2 - (bx0 + bx1) / 2 * k
        # glyph -> upsampled coords -> board px
        q = pathops.Path()
        parse_path(gl["d"], q.getPen())
        q2 = pathops.Path()
        from fontTools.pens.transformPen import TransformPen
        q.draw(TransformPen(q2.getPen(), (k / SC, 0, 0, k / SC, x0 + tx / SC, y0 + baseline / SC)))
        out = union(out, q2) if list(out.contours) else q2
    return D(out)


def defs(prefix):
    return "<defs>" + "".join(
        f'<linearGradient id="{prefix}-{k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="{a}"/>'
        f'<stop offset="1" stop-color="{b}"/></linearGradient>' for k, (a, b) in GRAD.items()) + "</defs>"


def path(role, d, fill, extra=""):
    return f'<path data-color="{role}" fill="{fill}" d="{d}"{extra}/>'


def build():
    wl = layers("wordmark")
    sl = layers("symbol")
    ear = ear_paths()
    green = P(wl["green"])
    light = union(P(ear["blade-left"]), P(ear["tongue"]))
    deep = op(P(ear["blade-right"]), grow(light, 0.55), "DIFFERENCE")
    light, deep = op(light, green, "DIFFERENCE"), op(deep, green, "DIFFERENCE")
    tag = tagline_paths()
    # symbol parts
    s_green = P(sl["green"])
    s_sdark = op(P(sl["sage-dark"]), s_green, "DIFFERENCE")
    s_sage = P(sl["sage"])
    s_flame = P(sl["gold-pale"])
    s_streak = op(P(sl["gold"]), s_sage, "INTERSECTION") if False else P(sl["gold"])
    s_sage = op(s_sage, grow(s_streak, 0.35), "DIFFERENCE")
    # one-colour cuts
    ear_m = op(union(light, deep), grow(green, 1.1), "DIFFERENCE")
    wm_mono = D(union(green, ear_m))
    gap = 1.0
    sym_m = union(s_green, op(s_sdark, grow(s_green, gap), "DIFFERENCE"),
                  op(s_sage, grow(s_streak, gap * 0.7), "DIFFERENCE"), s_streak,
                  op(s_flame, grow(union(s_sdark, s_sage), gap), "DIFFERENCE"))
    wm_parts = {"green": D(green), "light": D(light), "deep": D(deep)}
    sym_parts = {"green": D(s_green), "sdark": D(s_sdark), "sage": D(s_sage), "flame": D(s_flame), "streak": D(s_streak)}
    return wm_parts, sym_parts, tag, wm_mono, D(sym_m)


def wm_svg(parts, pre, mono=None):
    if mono:
        return path("primary", mono, COL["primary"])
    return (path("primary", parts["green"], COL["primary"]) +
            path("accent", parts["light"], f"url(#{pre}-ear-light)") +
            path("accent", parts["deep"], f"url(#{pre}-ear-deep)"))


def sym_svg(parts, pre, mono=None, transform=""):
    t = f' transform="{transform}"' if transform else ""
    if mono:
        return path("primary", mono, COL["primary"], t)
    return (path("secondary", parts["sage"], COL["secondary"], t) +
            path("secondary-dark", parts["sdark"], f"url(#{pre}-leaf-sage-dark)", t) +
            path("accent", parts["streak"], f"url(#{pre}-streak)", t) +
            path("accent-2", parts["flame"], f"url(#{pre}-flame)", t) +
            path("primary", parts["green"], COL["primary"], t))


def svg(vb, body, pre, title):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb[0]:.2f} {vb[1]:.2f} {vb[2]:.2f} {vb[3]:.2f}">'
            f'<title>{title}</title>{defs(pre)}{body}</svg>')


def main():
    wm, sym, tag, wm_mono, sym_mono = build()
    open(os.path.join(OUT, "parts.json"), "w").write(__import__("json").dumps({"wordmark": wm, "symbol": sym, "tagline": tag,
                                                                               "wordmark_mono": wm_mono, "symbol_mono": sym_mono}))
    wb = bounds(*wm.values())
    tb = bounds(tag)
    sb = bounds(*sym.values())
    pad = 2
    for mono, suf in ((False, ""), (True, "-mono")):
        pre = "s" + suf.replace("-", "")
        tagp = path("tagline", tag, COL["primary"] if mono else COL["tagline"])
        W1 = wm_svg(wm, pre, wm_mono if mono else None)
        S1 = lambda tr="": sym_svg(sym, pre, sym_mono if mono else None, tr)
        # wordmark
        open(os.path.join(OUT, f"wordmark{suf}.svg"), "w").write(
            svg((wb[0] - pad, wb[1] - pad, wb[2] - wb[0] + 2 * pad, wb[3] - wb[1] + 2 * pad), W1, pre, "Sangat"))
        # primary: wordmark + tagline exactly as placed on the board
        x0, y0, x1, y1 = min(wb[0], tb[0]), wb[1], max(wb[2], tb[2]), tb[3]
        open(os.path.join(OUT, f"primary{suf}.svg"), "w").write(
            svg((x0 - pad, y0 - pad, x1 - x0 + 2 * pad, y1 - y0 + 2 * pad), W1 + tagp, pre, "Sangat · Sanjhi Soch, Sunehra Kal"))
        # symbol
        open(os.path.join(OUT, f"symbol{suf}.svg"), "w").write(
            svg((sb[0] - pad, sb[1] - pad, sb[2] - sb[0] + 2 * pad, sb[3] - sb[1] + 2 * pad), S1(), pre, "Sangat symbol"))
        # horizontal: symbol at the wordmark's full height, a fine gold rule, the wordmark (as on the board)
        h = wb[3] - wb[1]
        k = h / (sb[3] - sb[1])
        sw = (sb[2] - sb[0]) * k
        sx = wb[0] - sw - h * 0.34
        tr = f"translate({sx:.2f} {wb[1]:.2f}) scale({k:.4f}) translate({-sb[0]:.2f} {-sb[1]:.2f})"
        rule = (f'<rect data-color="divider" fill="{COL["primary"] if mono else COL["divider"]}" x="{wb[0] - h * 0.17:.2f}" '
                f'y="{wb[1] + h * 0.1:.2f}" width="1" height="{h * 0.8:.2f}"/>')
        open(os.path.join(OUT, f"horizontal{suf}.svg"), "w").write(
            svg((sx - pad, wb[1] - pad, wb[2] - sx + 2 * pad, h + 2 * pad), S1(tr) + rule + W1, pre, "Sangat"))
        # stacked: symbol above the primary lockup
        sh = h * 0.95
        k2 = sh / (sb[3] - sb[1])
        cx = (wb[0] + wb[2]) / 2
        sx2 = cx - (sb[2] - sb[0]) * k2 / 2
        sy2 = wb[1] - sh - h * 0.12
        tr2 = f"translate({sx2:.2f} {sy2:.2f}) scale({k2:.4f}) translate({-sb[0]:.2f} {-sb[1]:.2f})"
        open(os.path.join(OUT, f"stacked{suf}.svg"), "w").write(
            svg((x0 - pad, sy2 - pad, x1 - x0 + 2 * pad, y1 - sy2 + 2 * pad), S1(tr2) + W1 + tagp, pre, "Sangat"))
    print("wordmark", [round(v, 1) for v in wb], "tagline", [round(v, 1) for v in tb], "symbol", [round(v, 1) for v in sb])


if __name__ == "__main__":
    main()
