#!/usr/bin/env python3
"""Sangat packaging v3: laid out to the client's exact brand board, with the traced v3 logo.

Front (board): ivory paper, forest tab with the gold symbol, the wordmark, the tagline, PREMIUM / BASMATI RICE /
NATURALLY AROMATIC · THOUGHTFULLY GROWN in Libre Caslon caps, faint etched rice ears at the edges, then the landscape
(mountains, a big tree, farmhouse, terraced fields), the forest sweep with gold rice ears and the leaf-shaped rice
window, and the net quantity on the green.
Back (board): "A shared journey / for a brighter tomorrow", the board's copy, a curved ivory band with the four value
icons, the farmer scene, a compact legal panel, and the client's QR strip along the bottom.
Sides (5 kg): symbol, "Good food grows from shared thinking.", rule, landscape.
V2 Forest Edition keeps every element on a forest ground (gold tab, dusk landscape, no window).

Outputs packaging-v3/: <v>-<size>-artwork.svg, -guides.svg/png, -front.png, -back.png, -front-mock.png (window shows
rice). NOT PRINT-READY: assumed sizes, live text, placeholders for every regulatory item, the QR and the URL.
"""
import math, os, random, re
import packaging_v2 as P2
from packaging_v2 import (C, esc, text, lines, panicle, tree, farmer_scene, icon, sprig, qr_strip, guides, render,
                          BLEED, TOP_CLEAR)

HERE = os.path.dirname(os.path.abspath(__file__))
W = os.path.normpath(os.path.join(HERE, ".."))
OUT = os.path.join(W, "packaging-v3")
LOGO = os.path.join(W, "v3/logo")
FONTDIR = os.path.join(W, "v2/fonts")
os.makedirs(OUT, exist_ok=True)
SERIF = "Libre Caslon Text"
_uid = [0]


def place(name, x, y, w=None, h=None, recolour=None, anchor="tl", flat=None):
    """Place a v3 logo master (with its gradients, ids made unique). recolour: role -> hex; flat: one colour for all."""
    s = open(os.path.join(LOGO, name)).read()
    vb = [float(v) for v in re.search(r'viewBox="([^"]+)"', s).group(1).split()]
    _uid[0] += 1
    u = f"u{_uid[0]}"
    defs = re.search(r"<defs>.*?</defs>", s, re.S)
    defs = defs.group(0) if defs else ""
    body = re.sub(r"<title>.*?</title>|<defs>.*?</defs>", "", re.search(r"<svg[^>]*>(.*)</svg>", s, re.S).group(1), flags=re.S)
    defs = re.sub(r'id="([^"]+)"', lambda m: f'id="{u}-{m.group(1)}"', defs)
    body = re.sub(r"url\(#([^)]+)\)", lambda m: f"url(#{u}-{m.group(1)})", body)
    if recolour:
        body = re.sub(r'data-color="([^"]+)" fill="([^"]+)"',
                      lambda m: f'data-color="{m.group(1)}" fill="{recolour.get(m.group(1), m.group(2))}"', body)
    if flat:
        body = re.sub(r'fill="[^"]+"', f'fill="{flat}"', body)
    k = (w / vb[2]) if w else (h / vb[3])
    if anchor == "tc":
        x -= vb[2] * k / 2
    return (f'{defs}<g transform="translate({x:.2f} {y:.2f}) scale({k:.5f}) translate({-vb[0]:.3f} {-vb[1]:.3f})">{body}</g>',
            vb[2] * k, vb[3] * k)


REV = {"primary": C["ivory"], "tagline": C["gold"], "divider": C["gold"], "secondary-dark": C["sage"]}


def etched(x, y, s, flip=False, opacity=0.35):
    """Faint etched rice ears at the top corners of the front (board detail)."""
    g = "".join(panicle(30 + i * 22, 300, 220 - i * 30, 8 + i * 9, 0.32, C["gold_d"]) for i in range(3))
    tr = f"translate({x:.2f} {y:.2f}) scale({-s if flip else s:.4f} {s:.4f})"
    return f'<g opacity="{opacity}" transform="{tr}">{g}</g>'


def mountains(mode):
    if mode == "day":
        return (f'<path d="M0 230L90 150L150 190L240 110L330 196L420 140L500 205L600 120L700 190L790 130L880 200L1000 150V600H0Z" fill="#C3CBC0" opacity=".85"/>'
                f'<path d="M0 262L120 196L210 240L320 176L430 246L560 190L690 250L820 200L1000 236V600H0Z" fill="#AEBAA8"/>')
    return (f'<path d="M0 230L90 150L150 190L240 110L330 196L420 140L500 205L600 120L700 190L790 130L880 200L1000 150V600H0Z" fill="#2F584A"/>'
            f'<path d="M0 262L120 196L210 240L320 176L430 246L560 190L690 250L820 200L1000 236V600H0Z" fill="#284E3F"/>')


def landscape(x, y, w, h, mode="day", window=False, rice=False, pid="L", net=None):
    """Board landscape in a 1000 x 600 box (scaled uniformly to w, anchored at the bottom, clipped to w x h)."""
    s = w / 1000
    sy = min(max(s, h / 600), s * 1.3)
    oy = y + h - 600 * sy
    day = mode == "day"
    far = C["sage_l"] if day else "#2C5444"
    f1, f2, f3 = (C["field1"], C["field2"], C["field3"]) if day else ("#3B6650", "#2F5B46", "#25503D")
    t1, t2 = (C["tree"], C["tree2"]) if day else ("#1A3D2F", "#163628")
    sweep, ear = (C["forest"], C["gold"]) if day else (C["forest_d"], C["gold"])
    g = [mountains(mode)]
    g.append(f'<path d="M0 300C140 268 300 284 420 300C560 318 720 272 1000 290V600H0Z" fill="{far}"/>')
    g.append(tree(118, 318, 46, t1, t2, "#3A3326" if day else t2))                      # the big tree, left
    for tx, ty, r in [(470, 312, 14), (500, 316, 11), (845, 300, 18), (880, 306, 13), (655, 308, 10)]:
        g.append(tree(tx, ty, r, t1, t2, t2))
    g.append(f'<rect x="300" y="296" width="44" height="26" fill="{C["wall"] if day else "#C9BFA6"}"/>'
             f'<path d="M293 298L322 276L351 298Z" fill="{C["roof"] if day else C["gold_d"]}"/>'
             f'<rect x="317" y="306" width="9" height="16" fill="{C["roof"] if day else C["gold_d"]}"/>')
    g.append(f'<path d="M0 352C200 330 470 336 1000 362V600H0Z" fill="{f1}"/>')
    for i in range(7):
        yy = 362 + i * 13
        g.append(f'<path d="M0 {yy}C220 {yy - 20} 520 {yy - 9} 1000 {yy + 20}" fill="none" stroke="{f2}" stroke-width="2.2" opacity=".55"/>')
    g.append(f'<path d="M0 440C260 408 600 420 1000 446V600H0Z" fill="{f2}"/>')
    for i in range(6):
        yy = 452 + i * 15
        g.append(f'<path d="M0 {yy}C260 {yy - 24} 600 {yy - 9} 1000 {yy + 22}" fill="none" stroke="{f3}" stroke-width="2.4" opacity=".6"/>')
    # the sweep (green) rising to the right edge; the rice window cut into it; a right field band below the window
    top = "M0 600V430C210 470 440 420 640 300C780 216 900 168 1000 150V600Z"
    g.append(f'<path d="{top}" fill="{sweep}"/>')
    g.append(f'<path d="M0 430C210 470 440 420 640 300C780 216 900 168 1000 150" fill="none" stroke="{ear}" stroke-width="3"/>')
    defs = ""
    if window:
        win = "M520 600C600 470 760 310 1000 178V330C900 380 820 470 790 600Z"
        defs = f'<clipPath id="win-{pid}"><path d="{win}"/></clipPath>'
        if rice:
            rnd = random.Random(11)
            gs = []
            for _ in range(1100):
                cx, cy = rnd.uniform(500, 1010), rnd.uniform(160, 610)
                gs.append(f'<ellipse cx="{cx:.1f}" cy="{cy:.1f}" rx="{rnd.uniform(15, 19):.1f}" ry="3.6" transform="rotate({rnd.uniform(0, 180):.0f} {cx:.1f} {cy:.1f})" '
                          f'fill="{rnd.choice(["#FFFFFF", "#F6F1E4", "#EDE5D2", "#FBF8F1"])}" stroke="#D8CDB4" stroke-width=".8"/>')
            g.append(f'<path d="{win}" fill="#E9DFC8"/><g clip-path="url(#win-{pid})">{"".join(gs)}</g>')
        else:
            g.append(f'<path d="{win}" fill="#FFFFFF"/><g clip-path="url(#win-{pid})">' +
                     "".join(f'<line x1="{480 + i * 22}" y1="120" x2="{280 + i * 22}" y2="640" stroke="#D9D4C8" stroke-width="3"/>' for i in range(34)) +
                     "</g>" + text(780, 380, "CLEAR WINDOW", 16, C["earth"], weight=600, anchor="middle", extra=' transform="rotate(-42 780 380)"'))
        g.append(f'<path d="M520 600C600 470 760 310 1000 178" fill="none" stroke="{C["gold"]}" stroke-width="4"/>'
                 f'<path d="M790 600C820 470 900 380 1000 330" fill="none" stroke="{C["gold"]}" stroke-width="4"/>')
        # field strokes on the right band
        for i in range(4):
            g.append(f'<path d="M{830 + i * 30} 600C{850 + i * 30} 520 {920 + i * 18} 450 1000 {400 + i * 40}" fill="none" stroke="#1D5240" stroke-width="3" opacity=".7"/>')
    for px, py, L, ang, dr, lf in [(20, 612, 230, 4, 0.30, True), (85, 612, 275, 10, 0.36, False),
                                   (150, 612, 235, 15, 0.40, True), (215, 612, 185, 20, 0.42, False)]:
        g.append(panicle(px, py, L, ang, dr, ear, n=12, leaf=(C["gold_d"] if day else "#8E7446") if lf else None))
    if net:
        g.append(text(net[0], 560, net[1], 54, C["ivory"], family=SERIF, anchor="middle"))
    return (f'<clipPath id="clip-{pid}"><rect x="{x:.2f}" y="{y:.2f}" width="{w:.2f}" height="{h:.2f}"/></clipPath>'
            f'<g clip-path="url(#clip-{pid})"><g transform="translate({x:.2f} {oy:.2f}) scale({s:.5f} {sy:.5f})"><defs>{defs}</defs>{"".join(g)}</g></g>')


def farmer_scene_v3(x, y, w, h, cid):
    """Back-panel scene as on the board: mountains, trees, a paddy field at harvest and a farmer (a generic
    illustration, not a specific person), drawn on a 1000 x 560 board and cropped to fill w x h."""
    g = [f'<rect width="1000" height="560" fill="#ECE5D3"/>', mountains("day").replace("V600H0Z", "V560H0Z"),
         f'<path d="M0 300C140 268 300 284 420 300C560 318 720 272 1000 290V560H0Z" fill="{C["sage_l"]}"/>',
         tree(120, 318, 40, C["tree"], C["tree2"], "#3A3326"), tree(240, 314, 26, C["tree"], C["tree2"], C["tree2"]),
         tree(780, 304, 30, C["tree"], C["tree2"], C["tree2"]), tree(870, 310, 22, C["tree"], C["tree2"], C["tree2"]),
         f'<path d="M0 352C200 330 470 336 1000 362V560H0Z" fill="#C9B979"/>']
    for i in range(7):
        yy = 364 + i * 16
        g.append(f'<path d="M0 {yy}C220 {yy - 18} 520 {yy - 8} 1000 {yy + 18}" fill="none" stroke="#B3A35E" stroke-width="2.4" opacity=".6"/>')
    fx, fy, S = 520, 330, 2.1
    fig = [f'<path d="M{-13} {6}C{-15} {-14} {15} {-14} {13} {6}L{11} {44}H{-11}Z" fill="#EDE6D6"/>',
           f'<circle cx="0" cy="-18" r="7.5" fill="{C["earth"]}"/>',
           f'<ellipse cx="0" cy="-23" rx="18" ry="4.4" fill="{C["gold_d"]}"/>',
           f'<path d="M-8 -24C-7 -33 7 -33 8 -24Z" fill="#8F6E3E"/>',
           f'<path d="M10 -2L26 14L22 18L7 6Z" fill="#EDE6D6"/>',
           f'<path d="M24 14C34 8 40 16 36 24" fill="none" stroke="{C["stone"]}" stroke-width="2.4" stroke-linecap="round"/>',
           f'<path d="M-12 0L-22 18L-18 21L-7 6Z" fill="#E2D9C4"/>']
    g.append(f'<g transform="translate({fx} {fy}) scale({S})">{"".join(fig)}</g>')
    for i in range(40):
        px = -10 + i * 26.5
        g.append(panicle(px, 572, 90 + (i * 7) % 40, 6 + (i * 13) % 16, 0.32, C["gold_d"] if i % 3 else C["gold"], n=8))
    g.append(f'<path d="M0 520C200 506 520 512 1000 528V560H0Z" fill="#A99649"/>')
    s = max(w / 1000, h / 560)
    ox, oy = x + (w - 1000 * s) / 2, y + (h - 560 * s) * 0.55
    return (f'<clipPath id="{cid}"><rect x="{x:.2f}" y="{y:.2f}" width="{w:.2f}" height="{h:.2f}"/></clipPath>'
            f'<g clip-path="url(#{cid})"><g transform="translate({ox:.2f} {oy:.2f}) scale({s:.5f})">{"".join(g)}</g></g>')


def front(v, size, ox, w, h, pid, rice=False):
    k = w / 180
    dark = v == "v2"
    ground = C["forest"] if dark else C["ivory"]
    ink = C["ivory"] if dark else C["forest"]
    warm = C["gold"] if dark else C["earth"]
    g = [f'<rect x="{ox}" y="0" width="{w}" height="{h}" fill="{ground}"/>']
    g.append(etched(ox - 6 * k, 40 * k, 0.16 * k, opacity=0.22 if not dark else 0.18))
    g.append(etched(ox + w + 6 * k, 40 * k, 0.16 * k, flip=True, opacity=0.22 if not dark else 0.18))
    tw = 34 * k
    tab_h = (50 if size == "1kg" else 108)
    g.append(f'<rect x="{ox + w / 2 - tw / 2:.2f}" y="0" width="{tw:.2f}" height="{tab_h:.2f}" fill="{C["gold"] if dark else C["forest"]}"/>')
    sym, _, _ = place("symbol-mono.svg", ox + w / 2, tab_h - 24 * k, h=18 * k, anchor="tc", flat=C["forest"] if dark else C["gold"])
    g.append(sym)
    top = tab_h + 12 * k
    wm, ww, wh = place("wordmark.svg", ox + w / 2, top, w=128 * k, anchor="tc", recolour=REV if dark else None)
    g.append(wm)
    y = top + wh + 6 * k
    g.append(text(ox + w / 2, y, "Sanjhi Soch, Sunehra Kal", 4.6 * k, warm, family=SERIF, anchor="middle", ls=0.35 * k))
    y += 11 * k
    g.append(text(ox + w / 2, y, "PREMIUM", 3.4 * k, warm, family=SERIF, anchor="middle", ls=0.9 * k))
    y += 7.6 * k
    g.append(text(ox + w / 2, y, "BASMATI RICE", 7.0 * k, ink, family=SERIF, anchor="middle", ls=0.85 * k))
    y += 3.6 * k
    g.append(f'<line x1="{ox + w / 2 - 33 * k:.2f}" y1="{y:.2f}" x2="{ox + w / 2 + 33 * k:.2f}" y2="{y:.2f}" stroke="{C["gold"]}" stroke-width="{0.35 * k:.2f}"/>')
    y += 6 * k
    g.append(text(ox + w / 2, y, "NATURALLY AROMATIC", 2.9 * k, ink, family=SERIF, anchor="middle", ls=0.75 * k))
    y += 4.6 * k
    g.append(text(ox + w / 2, y, "THOUGHTFULLY GROWN", 2.9 * k, ink, family=SERIF, anchor="middle", ls=0.75 * k))
    ly = y - (34 if size == "1kg" else 10) * k
    net = "1 kg" if size == "1kg" else "5 kg"
    g.append(landscape(ox, ly, w, h - ly, mode="dusk" if dark else "day", window=(v == "v1"), rice=rice, pid=pid,
                       net=(445 if v == "v1" else 800, net)))
    vx, vy = ox + w - 10 * k, h - 10 * k
    g.append(f'<rect x="{vx - 4.5 * k:.2f}" y="{vy - 4.5 * k:.2f}" width="{4.5 * k:.2f}" height="{4.5 * k:.2f}" fill="#FFFFFF" stroke="#1E8A3B" stroke-width="{0.45 * k:.2f}"/>'
             f'<circle cx="{vx - 2.25 * k:.2f}" cy="{vy - 2.25 * k:.2f}" r="{1.25 * k:.2f}" fill="#1E8A3B"/>')
    return "".join(g)


def back(v, size, ox, w, h):
    k = w / 180
    g = [f'<rect x="{ox}" y="0" width="{w}" height="{h}" fill="{C["forest"]}"/>']
    m = 13 * k
    y = TOP_CLEAR[size] + 12 * k
    g.append(text(ox + m, y, "A shared journey", 9.0 * k, C["ivory"], family=SERIF))
    g.append(text(ox + m, y + 11 * k, "for a brighter tomorrow", 9.0 * k, C["ivory"], family=SERIF))
    y += 21 * k
    body = ["Sangat brings together farmers, communities and conscious",
            "consumers to support more sustainable rice cultivation practices."]
    g.append(lines(ox + m, y, body, 3.1 * k, "#DCE2D6", lead=1.55))
    y += 10 * k
    # curved ivory band with the four icons, then the farmer scene beneath, as on the board
    band_top, band_h = y, 26 * k
    curve = f"M{ox} {band_top + 6 * k:.2f}C{ox + w * 0.35:.2f} {band_top + 2 * k:.2f} {ox + w * 0.7:.2f} {band_top - 3 * k:.2f} {ox + w} {band_top - 6 * k:.2f}"
    strip_h = (78 if size == "1kg" else 128)
    fh = h - strip_h - (band_top + band_h) + 1
    g.append(f'<path d="{curve}V{band_top + band_h + fh:.2f}H{ox}Z" fill="{C["ivory"]}"/>')
    cols = [("farmers", "LOCAL", "FARMERS"), ("practices", "SUSTAINABLE", "PRACTICES"),
            ("communities", "THRIVING", "COMMUNITIES"), ("tomorrow", "A BRIGHTER", "TOMORROW")]
    cw = (w - 2 * m) / 4
    for i, (ic, a, b) in enumerate(cols):
        cx = ox + m + cw * (i + 0.5)
        g.append(icon(ic, cx, y + 8 * k, 8.5 * k, C["gold_d"]))
        g.append(text(cx, y + 17 * k, a, 2.2 * k, C["forest"], family=SERIF, anchor="middle", ls=0.3 * k))
        g.append(text(cx, y + 20.2 * k, b, 2.2 * k, C["forest"], family=SERIF, anchor="middle", ls=0.3 * k))
    y += band_h
    g.append(farmer_scene_v3(ox, y, w, fh, cid=f"fs3-{v}-{size}"))
    y += fh
    g.append(qr_strip(ox, h - strip_h, w, strip_h))
    return "".join(g)


def legal_panel(x, y, w, h, size, k):
    """Nutrition, ingredients, legal lines and barcode, all labelled placeholders (FSSAI review pending)."""
    g = [f'<rect x="{x:.2f}" y="{y:.2f}" width="{w:.2f}" height="{h:.2f}" rx="{1.4 * k:.2f}" fill="{C["ivory"]}" stroke="{C["stone"]}" stroke-width="{0.2 * k:.2f}"/>']
    fs = 1.9 * k
    px, py = x + 3 * k, y + 5 * k
    g.append(text(px, py, "NUTRITION per 100 g (uncooked) · PLACEHOLDER", fs, C["forest"], weight=600))
    rows = ["Energy (kcal)", "Protein (g)", "Carbohydrate (g)", "Total sugars (g)", "Added sugars (g)", "Total fat (g)",
            "Saturated fat (g)", "Trans fat (g)", "Sodium (mg)"]
    narrow = w < 120 * k
    col = (w - 6 * k) if narrow else (w * 0.45)
    yy = py
    for r in rows:
        yy += 2.8 * k
        g.append(text(px, yy, r, fs * 0.92, C["ink"]) + text(px + col - 4 * k, yy, "—", fs * 0.92, C["ink"], anchor="end"))
    lx, ly0 = (px, yy + 5 * k) if narrow else (px + col, py)
    legal = ["INGREDIENTS: Basmati rice · PLACEHOLDER (confirm)", "COOKING: method and water ratio · PLACEHOLDER",
             f"Net quantity: {'1 kg' if size == '1kg' else '5 kg'} · MRP ₹ ____ (incl. of all taxes)",
             "Batch ____ · Packed on ____ · Best before ____", "Packed & marketed by: NAME, ADDRESS · PLACEHOLDER",
             "FSSAI Lic. No. ____ · PLACEHOLDER", "Customer care: phone / email · PLACEHOLDER",
             "Store in a cool, dry place · Country of origin: India (confirm)"]
    for i, r in enumerate(legal):
        g.append(text(lx, ly0 + i * 2.8 * k, r, fs * 0.9, C["ink"], weight=600 if i < 2 else 400))
    bx, by = x + w - 30 * k, y + h - 12 * k
    bars = "".join(f'<rect x="{bx + 1.6 * k + i * 0.62 * k:.2f}" y="{by + 1 * k:.2f}" width="{(0.2 + (i * 7 % 3) * 0.13) * k:.2f}" height="{6.4 * k:.2f}" fill="{C["ink"]}"/>' for i in range(42))
    g.append(f'<rect x="{bx:.2f}" y="{by:.2f}" width="{28.5 * k:.2f}" height="{10 * k:.2f}" fill="#FFFFFF"/>{bars}'
             + text(bx + 14.2 * k, by + 9.4 * k, "EAN-13 PLACEHOLDER", 1.5 * k, C["ink"], anchor="middle"))
    g.append(f'<rect x="{px:.2f}" y="{by:.2f}" width="{14 * k:.2f}" height="{7 * k:.2f}" fill="none" stroke="{C["earth"]}" stroke-width="{0.2 * k:.2f}" stroke-dasharray="{0.8 * k:.2f} {0.5 * k:.2f}"/>'
             + text(px + 7 * k, by + 4.4 * k, "FSSAI logo", 1.6 * k, C["earth"], anchor="middle"))
    vx = px + 17 * k
    g.append(f'<rect x="{vx:.2f}" y="{by:.2f}" width="{5 * k:.2f}" height="{5 * k:.2f}" fill="#FFFFFF" stroke="#1E8A3B" stroke-width="{0.45 * k:.2f}"/>'
             f'<circle cx="{vx + 2.5 * k:.2f}" cy="{by + 2.5 * k:.2f}" r="{1.4 * k:.2f}" fill="#1E8A3B"/>')
    return "".join(g)


def legal_side(v, ox, w, h, pid):
    k = w / 100
    dark = v == "v2"
    g = [f'<rect x="{ox}" y="0" width="{w}" height="{h}" fill="{C["forest"] if dark else C["ivory"]}"/>']
    sym, _, _ = place("symbol.svg", ox + w / 2, 66, h=24 * k, anchor="tc", recolour=REV if dark else None)
    g.append(sym)
    g.append(legal_panel(ox + 6 * k, 104, w - 12 * k, 170, "5kg", 1.0))
    g.append(landscape(ox - w * 0.8, h - 150, w * 2.6, 150, mode="dusk" if dark else "day", pid=pid))
    return f'<g clip-path="url(#cl-{pid})"><clipPath id="cl-{pid}"><rect x="{ox}" y="0" width="{w}" height="{h}"/></clipPath>{"".join(g)}</g>'


def side(v, ox, w, h, pid):
    k = w / 100
    dark = v == "v2"
    ink = C["ivory"] if dark else C["forest"]
    g = [f'<rect x="{ox}" y="0" width="{w}" height="{h}" fill="{C["forest"] if dark else C["ivory"]}"/>']
    sym, _, _ = place("symbol.svg", ox + w / 2, 66, h=34 * k, anchor="tc", recolour=REV if dark else None)
    g.append(sym)
    g.append(lines(ox + w / 2, 136, ["Good food", "grows from", "shared", "thinking."], 8.6 * k, ink, lead=1.32, family=SERIF, anchor="middle"))
    g.append(f'<line x1="{ox + w / 2 - 8 * k:.2f}" y1="182" x2="{ox + w / 2 + 8 * k:.2f}" y2="182" stroke="{C["gold"]}" stroke-width="0.5"/>')
    g.append(text(ox + w / 2, 196, "साँझी सोच, सुनहरा कल", 4.2 * k, C["gold"] if dark else C["earth"], family="Noto Serif Devanagari", anchor="middle"))
    g.append(landscape(ox - w * 0.8, h - 190, w * 2.6, 190, mode="dusk" if dark else "day", pid=pid))
    return f'<g clip-path="url(#cs-{pid})"><clipPath id="cs-{pid}"><rect x="{ox}" y="0" width="{w}" height="{h}"/></clipPath>{"".join(g)}</g>'


def gusset(v, ox, oy, w, h):
    """1 kg base gusset: the legal panel on the back half, the symbol row and tagline on the front half."""
    g = [f'<rect x="{ox}" y="{oy}" width="{w}" height="{h}" fill="{C["forest"]}"/>']
    g.append(legal_panel(ox + 8, oy + 6, w / 2 - 16, h - 12, "1kg", 1.0))
    for i in range(5):
        s, _, _ = place("symbol-mono.svg", ox + w / 2 + (i + 0.5) * (w / 2) / 5, oy + h / 2 - 16, h=18, anchor="tc", flat=C["gold"])
        g.append(f'<g opacity="{0.9 if i % 2 == 0 else 0.35}">{s}</g>')
    g.append(text(ox + w * 0.75, oy + h - 14, "Sanjhi Soch, Sunehra Kal", 4.6, C["gold_l"], family=SERIF, anchor="middle", ls=0.6))
    return "".join(g)


FONT_CSS = P2.FONT_CSS + f"""
@font-face{{font-family:"{SERIF}";src:url(file://{FONTDIR}/libre-caslon-text-latin-400-normal.woff2);font-weight:400;font-style:normal}}
@font-face{{font-family:"{SERIF}";src:url(file://{FONTDIR}/libre-caslon-text-latin-400-italic.woff2);font-weight:400;font-style:italic}}
"""


def wrap(body, vb, w_mm, h_mm):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" width="{w_mm}mm" height="{h_mm}mm">'
            f'<style>{FONT_CSS}</style>{body}</svg>')


def sheet(v, size):
    if size == "1kg":
        pw, ph, gh = 180.0, 280.0, 90.0
        body = back(v, size, 0, pw, ph) + front(v, size, pw, pw, ph, f"{v}1f") + gusset(v, 0, ph, 2 * pw, gh)
        return body, 2 * pw, ph + gh, [("TOP SEAL 12 mm", 12), ("ZIP 30 mm", 30)], \
            {"front": (pw, 0, pw, ph), "back": (0, 0, pw, ph)}, [("BACK", 0, pw, ph), ("FRONT", pw, pw, ph)]
    pw, ph, sw = 300.0, 450.0, 100.0
    body = side(v, 0, sw, ph, f"{v}5s1") + front(v, size, sw, pw, ph, f"{v}5f") + legal_side(v, sw + pw, sw, ph, f"{v}5s2") + back(v, size, 2 * sw + pw, pw, ph)
    return body, 2 * pw + 2 * sw, ph, [("TOP SEAL 15 mm", 15)], {"front": (sw, 0, pw, ph), "back": (2 * sw + pw, 0, pw, ph)}, \
        [("SIDE", 0, sw, ph), ("FRONT", sw, pw, ph), ("SIDE", sw + pw, sw, ph), ("BACK", 2 * sw + pw, pw, ph)]


def main():
    jobs = []
    for v, vname in (("v1", "ivory-landscape"), ("v2", "forest-edition")):
        for size in ("1kg", "5kg"):
            body, tw, th, zones, boxes, items = sheet(v, size)
            base = os.path.join(OUT, f"{v}-{vname}-{size}")
            note = (f"<!-- Sangat {v.upper()} {vname} {size} (v3, laid out to the client's brand board). NOT PRINT-READY: "
                    f"assumed panel sizes, live text (Libre Caslon Text, Playfair Display, Inter, Noto Serif Devanagari; OFL) "
                    f"to be outlined at prepress, regulatory, QR and URL content are placeholders. -->")
            open(base + "-artwork.svg", "w").write(wrap(note + body, f"{-BLEED} {-BLEED} {tw + 2 * BLEED} {th + 2 * BLEED}", tw + 2 * BLEED, th + 2 * BLEED))
            gd = wrap(note + body + guides(size, tw, th, zones, items), f"-6 -6 {tw + 12} {th + 12}", tw + 12, th + 12)
            open(base + "-guides.svg", "w").write(gd)
            px = 1800 / (tw + 12)
            jobs.append({"html": f'<html><body style="margin:0">{gd.replace(f"width=\"{tw + 12}mm\" height=\"{th + 12}mm\"", f"width=\"{(tw + 12) * px:.0f}\" height=\"{(th + 12) * px:.0f}\"")}</body></html>',
                         "png": base + "-guides.png", "w": int((tw + 12) * px), "h": int((th + 12) * px)})
            for panel, (x, y, w, h) in boxes.items():
                pxp = 1400 / h
                s = wrap(body, f"{x} {y} {w} {h}", w, h).replace(f'width="{w}mm" height="{h}mm"', f'width="{w * pxp:.0f}" height="{h * pxp:.0f}"')
                jobs.append({"html": f'<html><body style="margin:0">{s}</body></html>', "png": f"{base}-{panel}.png", "w": int(w * pxp), "h": int(h * pxp)})
        for size, (pw, ph) in (("1kg", (180.0, 280.0)), ("5kg", (300.0, 450.0))):
            body = front(v, size, 0, pw, ph, f"{v}{size}m", rice=True)
            pxp = 1400 / ph
            s = wrap(body, f"0 0 {pw} {ph}", pw, ph).replace(f'width="{pw}mm" height="{ph}mm"', f'width="{pw * pxp:.0f}" height="{ph * pxp:.0f}"')
            jobs.append({"html": f'<html><body style="margin:0">{s}</body></html>', "png": os.path.join(OUT, f"{v}-{vname}-{size}-front-mock.png"),
                         "w": int(pw * pxp), "h": int(ph * pxp)})
    P2.OUT = OUT
    render(jobs)


if __name__ == "__main__":
    main()
