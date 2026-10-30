"""Sangat packaging (Phase 5): 1 kg and 5 kg layouts in two variations, as editable SVG artwork in millimetres.

  V1 "Forest Line"  forest matte; the mark's line runs edge to edge in gold foil; the three grains hang from it.
  V2 "Grain Window" ivory matte; the three grains of the mark are CLEAR WINDOWS in the film: the rice shows through.

Outputs (brand/sangat/packaging/):
  <variant>-<size>-artwork.svg     flat layout: back | front (+ gusset / side panels), 3 mm bleed, live text
  <variant>-<size>-guides.svg      the same with trim, bleed, safe zone, seal and window guides
  <variant>-<size>-front.svg       front panel only (for mockups); window shows rice
  *.png                            renders of the above
NOT PRINT-READY: dimensions are assumptions until the converter supplies dielines; text is live (outline at prepress);
every unconfirmed value is labelled PLACEHOLDER. Run:  python3 brand/sangat/tools/packaging.py
"""
import math, os, random, re, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from make_sets import grain, circle  # noqa: E402

W = os.path.normpath(os.path.join(HERE, ".."))
OUT = os.path.join(W, "packaging")
os.makedirs(OUT, exist_ok=True)
FONTS = "/root/.cache/brand-identity/fonts/google/ofl"

C = dict(forest="#1E3A2F", night="#13241B", ivory="#F6F1E5", husk="#E7DCC4", sage="#8E9F86", gold="#A07A35",
         gold_d="#C9A35A", ink="#131F18", muted="#4C5951")

WM = open(os.path.join(W, "sets/A/logo/build/master-wordmark.svg")).read()
WM_D = re.search(r'<path d="([^"]+)"', WM).group(1)
WM_X0, WM_W = 6.705, 687.161          # from the master's viewBox (cap height 100)
BLEED = 3.0
TOP_CLEAR = {"1kg": 36.0, "5kg": 54.0}   # nothing above this: top seal + zip (1 kg), handle cut-out (5 kg)


def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;")


def wordmark(xc, cap_top, cap_mm, fill):
    s = cap_mm / 100
    tx = xc - (WM_X0 + WM_W / 2) * s
    return f'<path transform="translate({tx:.3f} {cap_top:.3f}) scale({s:.5f})" d="{WM_D}" fill="{fill}"/>'


def grains_paths(xc, bar_top, u):
    """The mark's three grains, in mm, hanging below a line whose top is `bar_top`; u = mm per symbol unit."""
    out = []
    for x, bottom in ((28, 86), (50, 95), (72, 86)):
        gx = xc + (x - 50) * u
        top = bar_top + (30 - 12) * u
        length = (bottom - 30) * u
        out.append(grain(gx, top + length / 2, length, 5.6 * u))
    return out


def text(x, y, s, size, fill, family="Mukta", weight=400, anchor="start", ls=0, extra=""):
    fam = {"Mukta": "Mukta, sans-serif", "Tiro": "'Tiro Devanagari Hindi', serif"}[family]
    return (f'<text x="{x:.2f}" y="{y:.2f}" font-family="{fam}" font-size="{size:.2f}" font-weight="{weight}" '
            f'fill="{fill}" text-anchor="{anchor}" letter-spacing="{ls:.2f}"{extra}>{esc(s)}</text>')


def para(x, y, lines, size, fill, lead=1.45, **kw):
    return "".join(text(x, y + i * size * lead, ln, size, fill, **kw) for i, ln in enumerate(lines))


def chatai(pid, colour, scale=1.0):
    g = []
    for col, ang in ((0, 45), (1, -45)):
        x = 10 + col * 20
        for y in (-10, 10, 30, 50):
            for dx in (0, -40, 40):
                g.append(f'<path d="{grain(x + dx, y, 22, 3.3, ang)}"/>')
    s = 40 * scale
    return (f'<pattern id="{pid}" width="{s}" height="{s}" patternUnits="userSpaceOnUse">'
            f'<g transform="scale({scale})" fill="{colour}">{"".join(g)}</g></pattern>')


def rice_pattern(pid):
    """Mockup only: what the clear windows show (many grains, random angles, ivory with soft shadow)."""
    rnd = random.Random(7)
    g = []
    for _ in range(140):
        x, y, a = rnd.uniform(0, 30), rnd.uniform(0, 30), rnd.uniform(0, 180)
        tone = rnd.choice(["#FBF7EE", "#F4ECDC", "#EFE5D1", "#FFFDF7"])
        for dx in (-30, 0, 30):
            for dy in (-30, 0, 30):
                g.append(f'<path d="{grain(x + dx + .25, y + dy + .35, 6.6, 0.82, a)}" fill="#BFB29A" opacity=".55"/>'
                         f'<path d="{grain(x + dx, y + dy, 6.6, 0.8, a)}" fill="{tone}"/>')
    return f'<pattern id="{pid}" width="30" height="30" patternUnits="userSpaceOnUse"><rect width="30" height="30" fill="#E3D7BF"/>{"".join(g)}</pattern>'


def qr_placeholder(x, y, size, fg, bg):
    rnd = random.Random(3)
    n, cell = 25, size / 25
    out = [f'<rect x="{x}" y="{y}" width="{size}" height="{size}" fill="{bg}"/>']
    finder = lambda fx, fy: (f'<rect x="{x + fx * cell}" y="{y + fy * cell}" width="{7 * cell}" height="{7 * cell}" fill="{fg}"/>'
                             f'<rect x="{x + (fx + 1) * cell}" y="{y + (fy + 1) * cell}" width="{5 * cell}" height="{5 * cell}" fill="{bg}"/>'
                             f'<rect x="{x + (fx + 2) * cell}" y="{y + (fy + 2) * cell}" width="{3 * cell}" height="{3 * cell}" fill="{fg}"/>')
    out += [finder(0, 0), finder(18, 0), finder(0, 18)]
    for i in range(n):
        for j in range(n):
            if (i < 8 and j < 8) or (i > 16 and j < 8) or (i < 8 and j > 16):
                continue
            if rnd.random() < 0.45:
                out.append(f'<rect x="{x + i * cell:.3f}" y="{y + j * cell:.3f}" width="{cell:.3f}" height="{cell:.3f}" fill="{fg}"/>')
    return "".join(out)


def ph_box(x, y, w, h, title, lines, fg, rule):
    return (f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="none" stroke="{rule}" stroke-width="0.3" stroke-dasharray="1.2 0.8"/>'
            + text(x + 3, y + 5, title, 2.4, fg, weight=600, ls=0.3)
            + para(x + 3, y + 9.4, lines, 2.2, fg, lead=1.5))


# ------------------------------------------------------------------------------------------------ panels
def front(v, size, ox, w, h, rice=False):
    """One front panel. v: 'V1' or 'V2'. Coordinates in mm, panel origin at (ox, 0)."""
    k = h / 280                         # 5 kg scales the 1 kg layout
    xc = ox + w / 2
    out = []
    if v == "V1":
        ground = C["forest"] if size == "1kg" else C["night"]
        out.append(f'<rect x="{ox}" y="0" width="{w}" height="{h}" fill="{ground}"/>')
        u = 0.62 * k
        bar_top = 70 * k
        out.append(f'<rect x="{ox}" y="{bar_top:.2f}" width="{w}" height="{11 * u:.2f}" fill="{C["gold_d"]}" data-finish="hot-foil"/>')
        out += [f'<path d="{d}" fill="{C["ivory"]}" data-finish="spot-uv"/>' for d in grains_paths(xc, bar_top, u)]
        out.append(wordmark(xc, 134 * k, 13.5 * k, C["ivory"]))
        sub, tag, hi = C["sage"], C["ivory"], C["sage"]
        y0 = 160 * k
    else:
        out.append(f'<rect x="{ox}" y="0" width="{w}" height="{h}" fill="{C["ivory"]}"/>')
        band = C["forest"] if size == "1kg" else C["night"]
        out.append(f'<rect x="{ox}" y="{226 * k:.2f}" width="{w}" height="{h - 226 * k:.2f}" fill="{band}"/>')
        u = 0.85 * k
        bar_top = 24 * k
        out.append(f'<rect x="{ox}" y="{bar_top:.2f}" width="{w}" height="{11 * u:.2f}" fill="{C["gold"]}" data-finish="hot-foil"/>')
        for d in grains_paths(xc, bar_top, u):
            if rice:
                out.append(f'<path d="{d}" fill="url(#rice)"/>'
                           f'<path d="{d}" fill="none" stroke="#FFFFFF" stroke-opacity=".55" stroke-width="{0.5 * k:.2f}"/>')
            else:
                out.append(f'<path d="{d}" fill="#FFFFFF" stroke="{C["forest"]}" stroke-width="0.25" data-finish="clear-window"/>'
                           f'<path d="{d}" fill="url(#hatch)"/>')
        out.append(wordmark(xc, 120 * k, 13 * k, C["forest"]))
        sub, tag, hi = C["muted"], C["forest"], C["muted"]
        y0 = 146 * k
    out.append(text(xc, y0, "PREMIUM BASMATI RICE", 3.0 * k, sub, weight=600, anchor="middle", ls=0.75 * k))
    upper_end = len(out) + 3
    out.append(text(xc, y0 + 14 * k, "Sanjhi Soch, Sunehra Kal", 5.6 * k, tag, family="Tiro", anchor="middle"))
    out.append(text(xc, y0 + 22 * k, "साँझी सोच, सुनहरा कल", 4.4 * k, hi, family="Tiro", anchor="middle", extra=' lang="hi"'))
    delta = max(0.0, TOP_CLEAR[size] - bar_top)
    if delta:   # move the whole upper block (ground excluded) clear of the seal / zip / handle
        keep = 2 if v == "V2" else 1
        out = out[:keep] + [f'<g transform="translate(0 {delta:.2f})">'] + out[keep:] + ["</g>"]
    # lower zone (V2: on the forest band)
    low_fg = C["ivory"]
    low_sub = C["sage"]
    out.append(text(ox + 14 * k, h - 26 * k, "NET QUANTITY", 2.2 * k, low_sub, weight=600, ls=0.4 * k))
    out.append(text(ox + 14 * k, h - 15 * k, "1 kg" if size == "1kg" else "5 kg", 9 * k, low_fg, weight=600))
    out.append(text(xc, h - 46 * k if v == "V1" else 238 * k, "IN PARTNERSHIP WITH MANAV VIKAS SANSTHAN", 2.2 * k,
                    low_sub, weight=600, anchor="middle", ls=0.45 * k))
    out.append(f'<path d="{circle(ox + w - 66 * k, h - 19.2 * k, 2.4 * k)}" fill="{C["gold_d"]}" data-finish="hot-foil"/>')
    out.append(para(ox + w - 61 * k, h - 20.4 * k, ["Scan the back to meet", "the people behind your rice"], 2.4 * k, low_fg, lead=1.35))
    return "".join(out)


def back(v, size, ox, w, h):
    k = h / 280
    m = 13 * k
    light = v == "V2"
    ground = C["ivory"] if light else (C["forest"] if size == "1kg" else C["night"])
    fg, sub, rule = (C["ink"], C["muted"], C["muted"]) if light else (C["ivory"], C["sage"], C["sage"])
    gold = C["gold"] if light else C["gold_d"]
    delta = max(0.0, TOP_CLEAR[size] + 4 - 24 * k)
    out = [f'<rect x="{ox}" y="0" width="{w}" height="{h}" fill="{ground}"/>', f'<g transform="translate(0 {delta:.2f})">',
           f'<rect x="{ox}" y="{24 * k:.2f}" width="{w}" height="{2.2 * k:.2f}" fill="{gold}" data-finish="hot-foil"/>']
    out += [f'<path d="{d}" fill="{fg}"/>' for d in grains_paths(ox + w / 2, 24 * k, 0.2 * k)]
    x = ox + m
    out.append(para(x, 50 * k, ["Every grain carries", "someone’s season of work."], 6.2 * k, fg, family="Tiro", lead=1.2))
    body = ["This rice is grown by farming families who work", "alongside Manav Vikas Sansthan (MVS). Their",
            "knowledge of the land, the season and the crop is", "where every grain begins."]
    if size == "5kg":
        body = ["This rice is grown by farming families who work alongside", "Manav Vikas Sansthan (MVS). Their knowledge of the land,",
                "the season and the crop is where every grain begins."]
    out.append(para(x, 72 * k, body, 2.75 * k, fg, lead=1.5))
    # QR story block
    qy = 98 * k
    q = 26 * k
    out.append(qr_placeholder(x, qy, q, C["ink"], "#FFFFFF"))
    out.append(f'<path d="{circle(x + q + 6 * k, qy + 4 * k, 2.2 * k)}" fill="{gold}" data-finish="hot-foil"/>')
    out.append(para(x + q + 11 * k, qy + 5 * k, ["Scan to meet the people", "and practices behind your rice."], 3.4 * k, fg, family="Tiro", lead=1.3))
    out.append(text(x + q + 11 * k, qy + 18 * k, "QR CODE + URL: PLACEHOLDER", 2.2 * k, sub, weight=600, ls=0.3 * k))
    # placeholders
    col = (w - 2 * m - 6 * k) / 2
    by = 132 * k
    out.append(ph_box(x, by, col, 54 * k, "COOKING GUIDE · PLACEHOLDER",
                      ["Method, water ratio and time", "to be confirmed by Sangat / MVS."], fg, rule))
    rows = ["Energy (kcal)", "Protein (g)", "Carbohydrate (g)", "Total sugars (g)", "Added sugars (g)", "Total fat (g)",
            "Saturated fat (g)", "Trans fat (g)", "Sodium (mg)"]
    nx = x + col + 6 * k
    out.append(ph_box(nx, by, col, 54 * k, "NUTRITION per 100 g · PLACEHOLDER", [], fg, rule))
    for i, r in enumerate(rows):
        yy = by + 10.5 * k + i * 4.6 * k
        out.append(text(nx + 3 * k, yy, r, 2.15 * k, fg))
        out.append(text(nx + col - 3 * k, yy, "—", 2.15 * k, fg, anchor="end"))
    ly = 192 * k
    legal = ["Ingredients: Basmati rice · PLACEHOLDER (confirm)", "Net quantity: " + ("1 kg" if size == "1kg" else "5 kg") +
             " · MRP ₹ — incl. of all taxes · PLACEHOLDER", "Batch no. · Packed on · Best before: PLACEHOLDER",
             "Packed & marketed by: NAME, ADDRESS · PLACEHOLDER", "FSSAI Lic. No.: PLACEHOLDER · Customer care: PLACEHOLDER",
             "Storage: PLACEHOLDER · Country of origin: PLACEHOLDER"]
    out.append(para(x, ly, legal, 2.3 * k, fg, lead=1.55))
    out.append("</g>")
    # regulatory marks (placeholders: use official artwork)
    vy = h - 40 * k
    out.append(f'<rect x="{x}" y="{vy}" width="{7 * k}" height="{7 * k}" fill="#FFFFFF" stroke="#2E7D32" stroke-width="{0.6 * k}"/>'
               f'<path d="{circle(x + 3.5 * k, vy + 3.5 * k, 2 * k)}" fill="#2E7D32"/>')
    out.append(text(x + 9 * k, vy + 4.8 * k, "Veg mark: use official FSSAI artwork", 2.0 * k, sub))
    bx, bw = ox + w - m - 38 * k, 38 * k
    out.append(f'<rect x="{bx}" y="{vy - 8 * k}" width="{bw}" height="{22 * k}" fill="#FFFFFF"/>')
    rnd = random.Random(5)
    xx = bx + 3 * k
    while xx < bx + bw - 3 * k:
        bwid = rnd.choice([0.33, 0.66, 0.99]) * k
        out.append(f'<rect x="{xx:.2f}" y="{vy - 5 * k:.2f}" width="{bwid:.2f}" height="{13 * k:.2f}" fill="#111"/>')
        xx += bwid + rnd.choice([0.33, 0.66]) * k
    out.append(text(bx + bw / 2, vy + 12 * k, "EAN-13 PLACEHOLDER", 1.9 * k, "#111", anchor="middle", weight=600))
    return "".join(out)


def gusset(v, size, ox, oy, w, h):
    ground = C["forest"] if (v == "V1" and size == "1kg") else C["night"] if v == "V1" else C["husk"]
    pat = "url(#chataiG)" if v == "V1" else "url(#chataiF)"
    return f'<rect x="{ox}" y="{oy}" width="{w}" height="{h}" fill="{ground}"/><rect x="{ox}" y="{oy}" width="{w}" height="{h}" fill="{pat}" data-finish="deboss"/>'


def side(v, ox, w, h):
    k = h / 450
    ground = C["night"] if v == "V1" else C["husk"]
    fg = C["ivory"] if v == "V1" else C["forest"]
    out = [f'<rect x="{ox}" y="0" width="{w}" height="{h}" fill="{ground}"/>',
           f'<rect x="{ox}" y="0" width="{w}" height="{h * 0.58:.1f}" fill="{"url(#chataiG)" if v == "V1" else "url(#chataiF)"}" data-finish="deboss"/>']
    xc = ox + w / 2
    out.append(f'<rect x="{ox}" y="{h * 0.58 + 8 * k:.1f}" width="{w}" height="{4.2 * k:.2f}" fill="{C["gold_d"] if v == "V1" else C["gold"]}"/>')
    out += [f'<path d="{d}" fill="{fg}"/>' for d in grains_paths(xc, h * 0.58 + 8 * k, 0.38 * k)]
    out.append(text(xc, h * 0.58 + 70 * k, "Sanjhi Soch,", 7 * k, fg, family="Tiro", anchor="middle"))
    out.append(text(xc, h * 0.58 + 80 * k, "Sunehra Kal", 7 * k, fg, family="Tiro", anchor="middle"))
    out.append(text(xc, h * 0.58 + 92 * k, "साँझी सोच, सुनहरा कल", 5 * k, fg, family="Tiro", anchor="middle", extra=' lang="hi"'))
    return "".join(out)


DEFS = (f'<defs>{chatai("chataiG", C["gold_d"], 0.5)}{chatai("chataiF", C["forest"], 0.5)}{rice_pattern("rice")}'
        '<pattern id="hatch" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">'
        '<rect width="3" height="3" fill="#FFFFFF"/><rect width="0.5" height="3" fill="#9BB3C7"/></pattern></defs>')


def guides(items, total_w, total_h):
    g = ['<g id="guides" fill="none" stroke-width="0.35">']
    for (x, y, w, h, label) in items:
        g.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" stroke="#E5007E"/>')                       # trim
        g.append(f'<rect x="{x + 8}" y="{y + 8}" width="{w - 16}" height="{h - 16}" stroke="#00A3E0" stroke-dasharray="2 1.5"/>')  # safe
        g.append(f'<text x="{x + 2}" y="{y - 1}" fill="#E5007E" stroke="none" font-family="Mukta" font-size="3">{label}</text>')
    g.append(f'<rect x="{-BLEED}" y="{-BLEED}" width="{total_w + 2 * BLEED}" height="{total_h + 2 * BLEED}" stroke="#999" stroke-dasharray="1 1"/>')
    g.append("</g>")
    return "".join(g)


def sheet(v, size):
    if size == "1kg":
        w, h, gus = 180, 280, 45
        body = back(v, size, 0, w, h) + front(v, size, w, w, h) + gusset(v, size, 0, h, 2 * w, gus)
        # top seal + zip guide, bottom gusset fold
        total_w, total_h = 2 * w, h + gus
        g_items = [(0, 0, w, h, "BACK 180 × 280 mm (assumed)"), (w, 0, w, h, "FRONT 180 × 280 mm (assumed)"),
                   (0, h, 2 * w, gus, "BOTTOM GUSSET 2 × 45 mm (assumed)")]
        extra = (f'<g id="seals" fill="#888" opacity=".25"><rect x="0" y="0" width="{2 * w}" height="12"/></g>'
                 f'<line x1="0" y1="30" x2="{2 * w}" y2="30" stroke="#E5007E" stroke-width=".35" stroke-dasharray="3 2"/>')
        fronts = [(w, w, h)]
    else:
        w, h, sw = 300, 450, 100
        body = side(v, 0, sw, h) + front(v, size, sw, w, h) + side(v, sw + w, sw, h) + back(v, size, 2 * sw + w, w, h)
        total_w, total_h = 2 * (w + sw), h
        g_items = [(0, 0, sw, h, "SIDE 100 mm"), (sw, 0, w, h, "FRONT 300 × 450 mm (assumed)"), (sw + w, 0, sw, h, "SIDE 100 mm"),
                   (2 * sw + w, 0, w, h, "BACK 300 × 450 mm (assumed)")]
        handle = "".join(f'<rect x="{x + w / 2 - 40}" y="22" width="80" height="22" rx="11" fill="none" stroke="#E5007E" stroke-width=".35"/>'
                         for x in (sw, 2 * sw + w))
        extra = f'<g id="seals" fill="#888" opacity=".25"><rect x="0" y="0" width="{total_w}" height="12"/><rect x="0" y="{h - 12}" width="{total_w}" height="12"/></g>{handle}'
        fronts = [(sw, w, h)]
    vb = f"{-BLEED} {-BLEED} {total_w + 2 * BLEED} {total_h + 2 * BLEED}"
    head = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" width="{total_w + 2 * BLEED}mm" height="{total_h + 2 * BLEED}mm">'
            f'<title>Sangat {v} {size} artwork (NOT PRINT-READY: assumed dimensions, live text, placeholders)</title>{DEFS}')
    art = head + body + "</svg>"
    gd = head + body + extra + guides(g_items, total_w, total_h) + "</svg>"
    name = f"{'v1-forest-line' if v == 'V1' else 'v2-grain-window'}-{size}"
    open(os.path.join(OUT, f"{name}-artwork.svg"), "w").write(art)
    open(os.path.join(OUT, f"{name}-guides.svg"), "w").write(gd)
    ox, fw, fh = fronts[0]
    fr = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{ox} 0 {fw} {fh}" width="{fw}mm" height="{fh}mm">{DEFS}'
          + front(v, size, ox, fw, fh, rice=True) + "</svg>")
    open(os.path.join(OUT, f"{name}-front.svg"), "w").write(fr)
    return name, (total_w + 2 * BLEED, total_h + 2 * BLEED), (fw, fh)


def render(svg_path, png_path, w_mm, h_mm, px_per_mm):
    html = (f'<!doctype html><meta charset=utf-8><style>@font-face{{font-family:Mukta;src:url(file://{FONTS}/mukta/Mukta-Regular.ttf)}}'
            f'@font-face{{font-family:Mukta;font-weight:600;src:url(file://{FONTS}/mukta/Mukta-SemiBold.ttf)}}'
            f"@font-face{{font-family:'Tiro Devanagari Hindi';src:url(file://{FONTS}/tirodevanagarihindi/TiroDevanagariHindi-Regular.ttf)}}"
            f'html,body{{margin:0;background:#fff}}svg{{display:block;width:{w_mm * px_per_mm}px;height:{h_mm * px_per_mm}px}}</style>'
            + re.sub(r' width="[\d.]+mm" height="[\d.]+mm"', "", open(svg_path).read(), count=1))
    tmp = png_path.replace(".png", ".html")
    open(tmp, "w").write(html)
    subprocess.run(["node", "-e", f"""const{{chromium}}=require('playwright');(async()=>{{const b=await chromium.launch();
const p=await b.newPage({{viewport:{{width:{int(w_mm * px_per_mm)},height:{int(h_mm * px_per_mm)}}}}});
await p.goto('file://{tmp}');await p.waitForTimeout(500);await p.screenshot({{path:'{png_path}'}});await b.close()}})()"""], check=True)
    os.remove(tmp)


if __name__ == "__main__":
    for v in ("V1", "V2"):
        for size in ("1kg", "5kg"):
            name, (tw, th), (fw, fh) = sheet(v, size)
            ppm = 4 if size == "1kg" else 2.6
            render(os.path.join(OUT, f"{name}-guides.svg"), os.path.join(OUT, f"{name}-guides.png"), tw, th, ppm)
            render(os.path.join(OUT, f"{name}-front.svg"), os.path.join(OUT, f"{name}-front.png"), fw, fh, 1200 / fh)
            print("wrote", name)
