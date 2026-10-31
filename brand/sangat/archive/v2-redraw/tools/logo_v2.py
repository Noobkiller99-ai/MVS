#!/usr/bin/env python3
"""Sangat logo v2, built from the client's reference board (Oct 2026).

Wordmark: "Sangat" in Playfair Display SemiBold (OFL), outlined, with two custom parts:
  1. a hand-drawn swash "g": the bowl and stem of Playfair's q, with a descender that loops and sweeps
     right under "at" (the shared path),
  2. a gold rice ear rising from the g's stem (the golden tomorrow).
Symbol: a rice stalk, two leaves (forest, sage) and a gold ear.

All shapes are filled vector paths (no live text, no strokes, no filters). Writes v2/logo/*.svg masters with
data-color roles: primary (forest), accent (gold), accent-2 (light gold), secondary (sage).
"""
import math, os, re
import pathops
from fontTools.svgLib.path import parse_path
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.boundsPen import BoundsPen
from outline import glyphs, PLAYFAIR

HERE = os.path.dirname(os.path.abspath(__file__))
W = os.path.normpath(os.path.join(HERE, ".."))
OUT = os.path.join(W, "v2/logo")
os.makedirs(OUT, exist_ok=True)

COL = {"primary": "#0F3D2E", "accent": "#C9A96B", "accent-2": "#E2CB97", "deep-gold": "#A9824A",
       "secondary": "#A7B89F", "ivory": "#F9F6EE"}
WGHT = 620
TRACK = 6          # 1/1000 em, a little air for the high-contrast capitals at small sizes


# ---------- path helpers -------------------------------------------------------------------------------------
def to_path(d):
    p = pathops.Path()
    parse_path(d, p.getPen())
    return p


def to_d(p):
    pen = SVGPathPen(None, ntos=lambda v: f"{v:.2f}".rstrip("0").rstrip("."))
    p.draw(pen)
    return pen.getCommands()


def op(a, b, kind):
    return pathops.op(a, b, getattr(pathops.PathOp, kind))


def grow(p, by):
    """p expanded outward by `by` units (round joins), for the gaps of the one-colour versions."""
    q = pathops.Path()
    p.draw(q.getPen())
    q.stroke(2 * by, pathops.LineCap.ROUND_CAP, pathops.LineJoin.ROUND_JOIN, 4)
    q.convertConicsToQuads()
    return union(p, q)


def drop_specks(p, min_area=6.0):
    """Remove contours whose bounding box is smaller than min_area units^2 (boolean-op slivers)."""
    out = pathops.Path()
    pen = out.getPen()
    for c in p.contours:
        x0, y0, x1, y1 = c.bounds
        if (x1 - x0) * (y1 - y0) >= min_area:
            c.draw(pen)
    return out


def union(*ps):
    out = ps[0]
    for p in ps[1:]:
        out = op(out, p, "UNION")
    return out


def rect(x0, y0, x1, y1):
    return to_path(f"M{x0} {y0}H{x1}V{y1}H{x0}Z")


def bounds(d):
    bp = BoundsPen(None)
    parse_path(d, bp)
    return bp.bounds


def cubic(p0, p1, p2, p3, t):
    u = 1 - t
    return tuple(u ** 3 * a + 3 * u * u * t * b + 3 * u * t * t * c + t ** 3 * d for a, b, c, d in zip(p0, p1, p2, p3))


def spline_points(segs, n=28):
    """segs: list of (p0,p1,p2,p3,w0,w1); returns samples (x, y, w)."""
    pts = []
    for (p0, p1, p2, p3, w0, w1) in segs:
        for i in range(n):
            t = i / n
            x, y = cubic(p0, p1, p2, p3, t)
            # ease the width so the swash swells and tapers like a pointed-pen stroke
            s = 0.5 - 0.5 * math.cos(math.pi * t)
            pts.append((x, y, w0 + (w1 - w0) * s))
    p0, p1, p2, p3, w0, w1 = segs[-1]
    pts.append((*p3, w1))
    return pts


def stroke_outline(pts):  # noqa: D401
    """Variable-width stroke from samples -> closed smooth path (Catmull-Rom through offset points)."""
    left, right = [], []
    for i, (x, y, w) in enumerate(pts):
        xa, ya, _ = pts[max(i - 1, 0)]
        xb, yb, _ = pts[min(i + 1, len(pts) - 1)]
        dx, dy = xb - xa, yb - ya
        L = math.hypot(dx, dy) or 1
        nx, ny = -dy / L, dx / L
        left.append((x + nx * w / 2, y + ny * w / 2))
        right.append((x - nx * w / 2, y - ny * w / 2))
    ring = left + right[::-1]
    return catmull(ring, closed=True, step=1)


def catmull(P, closed=True, step=2):
    P = P[::step] if step > 1 else P
    n = len(P)
    d = f"M{P[0][0]:.2f} {P[0][1]:.2f}"
    rng = range(n) if closed else range(n - 1)
    for i in rng:
        p0, p1, p2, p3 = P[(i - 1) % n], P[i], P[(i + 1) % n], P[(i + 2) % n]
        c1 = (p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6)
        c2 = (p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6)
        d += f"C{c1[0]:.2f} {c1[1]:.2f} {c2[0]:.2f} {c2[1]:.2f} {p2[0]:.2f} {p2[1]:.2f}"
    return d + "Z"


def leaf(base, tip, width, bend=0.0, fat=0.42):
    """Pointed leaf / flame from base to tip; bend > 0 curves it to the right of the base->tip direction."""
    (bx, by), (tx, ty) = base, tip
    dx, dy = tx - bx, ty - by
    L = math.hypot(dx, dy)
    ux, uy = dx / L, dy / L
    nx, ny = -uy, ux
    mx, my = bx + dx * 0.5 + nx * bend * L, by + dy * 0.5 + ny * bend * L
    a = width / 2

    def P(t, side):
        cx, cy = cubic((bx, by), (bx + dx * .2 + nx * bend * L * .6, by + dy * .2 + ny * bend * L * .6),
                       (mx + dx * .25, my + dy * .25), (tx, ty), t)
        w = a * math.sin(math.pi * min(1.0, t ** fat)) * (1 - t) ** 0.18
        return (cx + side * nx * w, cy + side * ny * w)

    left = [P(i / 24, 1) for i in range(25)]
    right = [P(i / 24, -1) for i in range(25)][::-1]
    return catmull(left + right[1:-1], closed=True, step=1)


# ---------- the wordmark -------------------------------------------------------------------------------------
def wordmark():
    gl = glyphs("Sanqat", wght=WGHT, size=100, tracking=TRACK, extra={2: -6, 3: -2})
    S, a1, n, q, a2, t = gl
    gx = q["x"]
    # 1. the g's bowl + stem: Playfair q, cut above the descender serif and without the top-right spur
    qp = to_path(q["d"])
    keep = union(rect(gx - 5, -60, gx + 37.7, 5), rect(gx + 37.7, -47.2, gx + 60, 4))
    bowl = op(qp, keep, "INTERSECTION")
    # 2. the swash: down the stem, a loop to the left, then a long sweep right under "at"
    sx = gx + 44.19
    end_x = t["x"] + 38.5
    segs = [
        ((sx, -4.0), (sx, 2), (sx, 8), (sx, 12), 12.96, 12.96),
        ((sx, 12), (sx, 19), (sx - 0.8, 23.5), (sx - 2.5, 27), 12.96, 10.2),
        ((sx - 2.5, 27), (sx - 5, 37.5), (sx - 19, 42.5), (sx - 30, 37.5), 10.5, 2.6),
        ((sx - 30, 37.5), (sx - 39, 33), (sx - 36, 23.5), (sx - 25, 23), 2.6, 1.7),
        ((sx - 25, 23), (sx + 6, 22.5), (end_x - 72, 33.5), (end_x - 33, 30), 1.7, 5.4),
        ((end_x - 33, 30), (end_x - 17, 28.5), (end_x - 6, 24), (end_x, 18.5), 5.4, 0.35),
    ]
    swash = to_path(stroke_outline(spline_points(segs, 12)))
    # trim the stroke's start cap to the stem so its rounded end never pokes out of the q's stem
    swash = op(swash, union(rect(gx + 37.71, -10, gx + 50.67, 3), rect(gx - 100, 3, gx + 400, 80)), "INTERSECTION")
    g = union(bowl, swash)
    primary = union(*(to_path(x["d"]) for x in (S, a1, n, a2, t)), g)
    # 3. the gold rice ear, rising from the top of the stem; a lighter inner grain line
    L, R, B = gx + 37.4, gx + 50.97, -46.0           # stem edges and the line where green becomes gold
    tip = (L - 7.5, -108)
    ear = (f"M{L:.2f} {B}C{L - 5.5:.2f} -60 {L - 12.5:.2f} -88 {tip[0]:.2f} {tip[1]}"
           f"C{L + 1.5:.2f} -93 {R + 6:.2f} -76 {R + 1.4:.2f} -59C{R + 0.3:.2f} -53 {R:.2f} -50 {R:.2f} {B}Z")
    inner = leaf((sx - 0.5, -54), (tip[0] + 1.6, tip[1] + 9), 3.4, bend=-0.07, fat=0.7)
    ear_p = drop_specks(op(to_path(ear), primary, "DIFFERENCE"))
    # one-colour cut: the ear stands 1.4 units clear of the stem, the inner grain line is a cut-out
    ear_m = op(op(to_path(ear), grow(primary, 1.4), "DIFFERENCE"), to_path(inner), "DIFFERENCE")
    mono = to_d(union(primary, drop_specks(ear_m)))
    return {"primary": to_d(primary), "accent": to_d(ear_p), "accent-2": inner, "mono": mono,
            "advance": t["x"] + t["adv"], "g_x": gx, "end_x": end_x}


# ---------- the symbol (100-unit grid) -------------------------------------------------------------------------
def symbol():
    stem_leaf = leaf((34, 98), (80, 24), 19, bend=0.2, fat=0.55)        # forest leaf, sweeping up and right
    sage = leaf((40, 94), (25, 30), 12.5, bend=-0.16, fat=0.6)          # sage leaf, up and left
    ear = leaf((47, 74), (58, 2), 17, bend=0.08, fat=0.72)              # gold ear
    grain = leaf((48.5, 62), (56.5, 9), 4.6, bend=0.08, fat=0.72)       # light grain line in the ear
    lp, sp, ep = to_path(stem_leaf), to_path(sage), to_path(ear)
    # leaves overlap the ear's base: the front leaf (forest) cuts the others so every colour stays a clean shape
    sp = op(sp, lp, "DIFFERENCE")
    ep = op(op(ep, lp, "DIFFERENCE"), sp, "DIFFERENCE")
    gp = op(to_path(grain), ep, "INTERSECTION")
    # one-colour cut: 2-unit gaps between the leaves and the ear, grain line cut out of the ear
    gap = grow(lp, 2.2)
    sp_m = op(sp, gap, "DIFFERENCE")
    ep_m = op(op(op(ep, gap, "DIFFERENCE"), grow(sp, 2.2), "DIFFERENCE"), gp, "DIFFERENCE")
    mono = to_d(union(lp, drop_specks(sp_m), drop_specks(ep_m)))
    return {"primary": to_d(lp), "secondary": to_d(sp), "accent": to_d(ep), "accent-2": to_d(gp), "mono": mono}


def svg(viewbox, parts, fills=COL, extra=""):
    body = "".join(f'<path data-color="{k}" fill="{fills[k]}" d="{d}"/>' for k, d in parts if d)
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{viewbox}">{body}{extra}</svg>'


def tagline(width_target, y, fill):
    """Tagline in Playfair Display Regular, letter-spaced, outlined and centred under the wordmark."""
    tg = glyphs("Sanjhi Soch, Sunehra Kal", wght=420, size=17, tracking=170)
    w = tg[-1]["x"] + tg[-1]["adv"] - 17 * 0.17
    x0 = (width_target - w) / 2
    d = to_d(union(*(to_path(g["d"]) for g in tg if g["d"])))
    return x0, w, f'<path data-color="tagline" fill="{fill}" transform="translate({x0:.2f} {y})" d="{d}"/>'


def build(wm, sym, mono=False, suffix=""):
    b = bounds(wm["primary"])
    eb = bounds(wm["accent"])
    x0, y0 = min(b[0], eb[0]) - 1, min(b[1], eb[1]) - 1
    x1, y1 = max(b[2], eb[2]) + 1, b[3] + 1
    if mono:
        parts = [("primary", wm["mono"])]
        sparts = [("primary", sym["mono"])]
        tag_fill, div_fill = COL["primary"], COL["primary"]
    else:
        parts = [("primary", wm["primary"]), ("accent", wm["accent"]), ("accent-2", wm["accent-2"])]
        sparts = [("secondary", sym["secondary"]), ("accent", sym["accent"]), ("accent-2", sym["accent-2"]),
                  ("primary", sym["primary"])]
        tag_fill, div_fill = "#8B6F47", "#C9A96B"
    open(f"{OUT}/wordmark{suffix}.svg", "w").write(svg(f"{x0:.2f} {y0:.2f} {x1 - x0:.2f} {y1 - y0:.2f}", parts))
    tx, tw, tag = tagline(x1 + x0, y1 + 30, tag_fill)
    lx0, lx1 = min(x0, tx - 1), max(x1, tx + tw + 1)
    open(f"{OUT}/lockup-tagline{suffix}.svg", "w").write(
        svg(f"{lx0:.2f} {y0:.2f} {lx1 - lx0:.2f} {y1 + 36 - y0:.2f}", parts, extra=tag))
    open(f"{OUT}/symbol{suffix}.svg", "w").write(svg("0 0 100 100", sparts))
    h = y1 - y0
    k = h / 100 * 1.02
    sx = x0 - h * 1.05

    def symg(tx_, ty_, sc):
        return "".join(f'<path data-color="{c}" fill="{COL[c]}" transform="translate({tx_:.2f} {ty_:.2f}) scale({sc:.4f})" d="{d}"/>'
                       for c, d in sparts)

    rule = f'<rect data-color="divider" fill="{div_fill}" x="{x0 - h * 0.12:.2f}" y="{y0 + h * 0.12:.2f}" width="0.8" height="{h * 0.76:.2f}"/>'
    open(f"{OUT}/lockup-horizontal{suffix}.svg", "w").write(
        svg(f"{sx - 1:.2f} {y0:.2f} {x1 - sx + 2:.2f} {h:.2f}", parts, extra=symg(sx, y0, k) + rule))
    ww = x1 - x0
    ss = ww * 0.36
    cx = (x0 + x1) / 2
    tx, tw, tag2 = tagline(x1 + x0, y1 + 30, tag_fill)
    open(f"{OUT}/lockup-stacked{suffix}.svg", "w").write(
        svg(f"{min(x0, tx) - 2:.2f} {y0 - ss - 10:.2f} {max(ww, tw) + 4:.2f} {y1 + 38 - (y0 - ss - 10):.2f}",
            parts, extra=symg(cx - ss / 2, y0 - ss - 8, ss / 100) + tag2))
    return x0, y0, x1, y1


def main():
    wm = wordmark()
    sym = symbol()
    print("wordmark", *(round(v, 1) for v in build(wm, sym)))
    build(wm, sym, mono=True, suffix="-mono")


if __name__ == "__main__":
    main()
