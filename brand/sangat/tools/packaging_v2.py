#!/usr/bin/env python3
"""Sangat packaging v2 (client reference board, Oct 2026): 1 kg stand-up pouch and 5 kg handle bag.

Variations
  V1 "Ivory Landscape"  ivory pouch, forest tab, hand-drawn landscape with a forest sweep, gold rice ears and a
                        clear window onto the rice (as on the reference board)
  V2 "Forest Edition"   forest-green pouch, gold tab, the same landscape at dusk, no window (gift / 5 kg)

Every back panel carries the client's QR strip along the bottom ("Every grain has a story", scan to explore).

Outputs (packaging-v2/):
  <v>-<size>-artwork.svg   flat artwork, live text in the brand fonts (outline at prepress), all panels
  <v>-<size>-guides.svg/png artwork + trim, bleed, safe area, seal/zip or handle zones
  <v>-<size>-front.png / -back.png   panel renders for mockups and review

NOT PRINT-READY: panel sizes are assumed until the converter's dielines arrive; every regulatory item is a labelled
placeholder pending FSSAI review; QR and URL are placeholders.
"""
import math, os, re, subprocess, json

HERE = os.path.dirname(os.path.abspath(__file__))
W = os.path.normpath(os.path.join(HERE, ".."))
OUT = os.path.join(W, "packaging-v2")
LOGO = os.path.join(W, "v2/logo")
FONTDIR = os.path.join(W, "v2/fonts")
os.makedirs(OUT, exist_ok=True)
NODE_PATH = subprocess.run(["npm", "root", "-g"], capture_output=True, text=True).stdout.strip()

C = dict(forest="#0F3D2E", forest_d="#0A2E22", forest_m="#1D5240", ivory="#F9F6EE", gold="#C9A96B",
         gold_l="#E2CB97", gold_d="#A9824A", earth="#8B6F47", sage="#A7B89F", sage_l="#C9D3C1", stone="#D9D4C8",
         ink="#13231C", field1="#8FA97E", field2="#6F8E5E", field3="#55764A", tree="#3F6248", tree2="#2F5240",
         roof="#8B6F47", wall="#EDE5D3", mist="#E4E6DA")
BLEED = 3.0
TOP_CLEAR = {"1kg": 34.0, "5kg": 52.0}   # nothing important above: top seal + zip (1 kg), handle cut-out (5 kg)


def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


# ---------------------------------------------------------------- logo placement ----------------------------
def _logo(name):
    s = open(os.path.join(LOGO, name)).read()
    vb = [float(v) for v in re.search(r'viewBox="([^"]+)"', s).group(1).split()]
    paths = re.findall(r"<path ([^>]*)/>", s)
    return vb, paths


def place(name, x, y, w=None, h=None, recolour=None, anchor="tl"):
    """Place a logo master; recolour maps data-color role -> hex. anchor 'tc' = x is the horizontal centre."""
    vb, paths = _logo(name)
    k = (w / vb[2]) if w else (h / vb[3])
    if anchor == "tc":
        x -= vb[2] * k / 2
    out = []
    for attrs in paths:
        role = re.search(r'data-color="([^"]+)"', attrs)
        a = attrs
        if recolour and role and role.group(1) in recolour:
            a = re.sub(r'fill="[^"]+"', f'fill="{recolour[role.group(1)]}"', a)
        out.append(f"<path {a}/>")
    return (f'<g transform="translate({x:.2f} {y:.2f}) scale({k:.5f}) translate({-vb[0]:.3f} {-vb[1]:.3f})">'
            + "".join(out) + "</g>"), vb[2] * k, vb[3] * k


REV = {"primary": C["ivory"], "accent": C["gold"], "accent-2": C["gold_l"], "secondary": C["sage"]}
SYM_ON_FOREST = {"primary": C["ivory"], "accent": C["gold"], "accent-2": C["gold_l"], "secondary": C["sage"]}
SYM_ON_GOLD = {"primary": C["forest"], "accent": C["ivory"], "accent-2": C["gold_l"], "secondary": C["forest_m"]}


# ---------------------------------------------------------------- type -------------------------------------
def text(x, y, s, size, fill, family="Inter", weight=400, anchor="start", ls=0.0, italic=False, extra=""):
    st = ' font-style="italic"' if italic else ""
    return (f'<text x="{x:.2f}" y="{y:.2f}" font-family="{family}" font-size="{size:.2f}" font-weight="{weight}"{st} '
            f'fill="{fill}" text-anchor="{anchor}" letter-spacing="{ls:.3f}"{extra}>{esc(s)}</text>')


def lines(x, y, rows, size, fill, lead=1.42, **kw):
    return "".join(text(x, y + i * size * lead, r, size, fill, **kw) for i, r in enumerate(rows))


# ---------------------------------------------------------------- illustration (illustrate skill, SVG track) --
def _grain(px, py, ang, L, wdt, colour):
    """A teardrop grain of length L pointing along ang (degrees, 0 = right)."""
    a = math.radians(ang)
    ux, uy = math.cos(a), math.sin(a)
    nx, ny = -uy, ux
    tx, ty = px + ux * L, py + uy * L
    c1 = (px + ux * L * 0.25 + nx * wdt, py + uy * L * 0.25 + ny * wdt)
    c2 = (px + ux * L * 0.8 + nx * wdt * 0.6, py + uy * L * 0.8 + ny * wdt * 0.6)
    c3 = (px + ux * L * 0.8 - nx * wdt * 0.6, py + uy * L * 0.8 - ny * wdt * 0.6)
    c4 = (px + ux * L * 0.25 - nx * wdt, py + uy * L * 0.25 - ny * wdt)
    return (f'<path d="M{px:.2f} {py:.2f}C{c1[0]:.2f} {c1[1]:.2f} {c2[0]:.2f} {c2[1]:.2f} {tx:.2f} {ty:.2f}'
            f'C{c3[0]:.2f} {c3[1]:.2f} {c4[0]:.2f} {c4[1]:.2f} {px:.2f} {py:.2f}Z" fill="{colour}"/>')


def panicle(x, y, length, angle, droop, colour, grain=None, n=11, leaf=None):
    """A rice ear: a stem that rises and arches over to the right, grains alternating along its upper half,
    and (optionally) one long leaf blade from the base. angle: lean from vertical in degrees; droop 0..0.6."""
    L = length
    a = math.radians(angle)
    p0 = (x, y)
    p1 = (x + math.sin(a) * L * 0.7, y - math.cos(a) * L * 0.95)
    p2 = (x + math.sin(a) * L * 0.7 + L * (0.25 + droop * 0.6), y - math.cos(a) * L * 0.95 + L * droop * 0.55)

    def q(t):
        u = 1 - t
        return (u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0], u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1])

    sw = L * 0.014
    out = []
    if leaf:
        lx = x + L * 0.02
        out.append(f'<path d="M{x:.2f} {y:.2f}C{lx - L * 0.12:.2f} {y - L * 0.45:.2f} {lx - L * 0.28:.2f} {y - L * 0.7:.2f} '
                   f'{lx - L * 0.42:.2f} {y - L * 0.78:.2f}C{lx - L * 0.22:.2f} {y - L * 0.62:.2f} {lx - L * 0.06:.2f} {y - L * 0.4:.2f} '
                   f'{x + sw * 2:.2f} {y:.2f}Z" fill="{leaf}"/>')
    d = f"M{p0[0]:.2f} {p0[1]:.2f}Q{p1[0]:.2f} {p1[1]:.2f} {p2[0]:.2f} {p2[1]:.2f}"
    out.append(f'<path d="{d}" fill="none" stroke="{colour}" stroke-width="{sw:.2f}" stroke-linecap="round"/>')
    g = grain or L * 0.085
    for i in range(n):
        t = 0.42 + 0.58 * i / (n - 1)
        px, py = q(t)
        qx, qy = q(max(0.0, t - 0.02))
        tang = math.degrees(math.atan2(py - qy, px - qx))
        size = g * (1.0 - 0.35 * i / (n - 1))
        side = 1 if i % 2 else -1
        out.append(_grain(px, py, tang + side * 38, size, size * 0.32, colour))
    tx, ty = q(1.0)
    out.append(_grain(tx, ty, math.degrees(math.atan2(ty - q(0.98)[1], tx - q(0.98)[0])), g * 0.7, g * 0.22, colour))
    return "".join(out)


def tree(x, y, r, c1, c2, trunk):
    return (f'<rect x="{x - r * 0.08:.2f}" y="{y - r * 0.3:.2f}" width="{r * 0.16:.2f}" height="{r * 0.9:.2f}" fill="{trunk}"/>'
            f'<circle cx="{x:.2f}" cy="{y - r * 0.9:.2f}" r="{r:.2f}" fill="{c1}"/>'
            f'<circle cx="{x - r * 0.55:.2f}" cy="{y - r * 0.55:.2f}" r="{r * 0.7:.2f}" fill="{c1}"/>'
            f'<circle cx="{x + r * 0.5:.2f}" cy="{y - r * 0.6:.2f}" r="{r * 0.66:.2f}" fill="{c2}"/>')


def landscape(x, y, w, h, mode="day", window=False, net=None, panel_id="L", rice=False):
    """The Sangat landscape in a 1000x600 box scaled to w x h: hills, trees, a farmhouse, paddy fields, then the
    forest sweep with gold rice ears; window=True cuts the rice window above the sweep on the right."""
    sx, sy = w / 1000, h / 600
    if mode == "day":
        far, mid, f1, f2, f3, t1, t2, sweep, ear, mist = (C["sage_l"], C["sage"], C["field1"], C["field2"],
                                                          C["field3"], C["tree"], C["tree2"], C["forest"],
                                                          C["gold"], C["mist"])
        house_w, house_r = C["wall"], C["roof"]
    else:  # dusk, on forest
        far, mid, f1, f2, f3, t1, t2, sweep, ear, mist = ("#2C5444", "#24493A", "#3B6650", "#2F5B46", "#25503D",
                                                          "#1A3D2F", "#163628", C["forest_d"], C["gold"], "#2A5243")
        house_w, house_r = "#C9BFA6", C["gold_d"]
    g = []
    g.append(f'<path d="M0 250C120 196 230 186 330 222C430 256 520 176 640 166C760 156 870 226 1000 206V600H0Z" fill="{far}"/>')
    g.append(f'<path d="M0 286C80 270 160 262 240 270" fill="none" stroke="{mist}" stroke-width="5" opacity=".7"/>')
    g.append(f'<path d="M0 322C150 278 300 296 420 318C560 342 700 276 1000 298V600H0Z" fill="{mid}"/>')
    for tx, ty, r in [(120, 318, 22), (160, 322, 16), (470, 326, 20), (505, 330, 15), (840, 300, 24), (880, 304, 17)]:
        g.append(tree(tx, ty, r, t1, t2, t2))
    # farmhouse
    g.append(f'<rect x="292" y="300" width="56" height="34" fill="{house_w}"/>'
             f'<path d="M284 302L320 276L356 302Z" fill="{house_r}"/>'
             f'<rect x="314" y="314" width="12" height="20" fill="{house_r}"/>')
    g.append(f'<path d="M0 372C200 344 460 354 1000 384V600H0Z" fill="{f1}"/>')
    for i in range(6):
        yy = 384 + i * 15
        g.append(f'<path d="M0 {yy}C220 {yy - 22} 520 {yy - 10} 1000 {yy + 22}" fill="none" stroke="{f2}" '
                 f'stroke-width="2.4" opacity=".55"/>')
    g.append(f'<path d="M0 452C260 420 600 436 1000 470V600H0Z" fill="{f2}"/>')
    for i in range(5):
        yy = 466 + i * 16
        g.append(f'<path d="M0 {yy}C260 {yy - 26} 600 {yy - 10} 1000 {yy + 24}" fill="none" stroke="{f3}" '
                 f'stroke-width="2.6" opacity=".6"/>')
    sweep_d = "M0 600V478C240 528 520 470 760 330C850 278 930 252 1000 242V600Z"
    defs = ""
    if window:
        win_d = "M590 548C660 400 800 250 1000 96V242C930 252 850 278 760 330C700 365 646 440 590 548Z"
        defs = (f'<clipPath id="win-{panel_id}"><path d="{win_d}"/></clipPath>')
        if rice:   # mockup only: the rice seen through the window
            import random
            rnd = random.Random(7)
            grains = "".join(
                f'<ellipse cx="{rnd.uniform(560, 1010):.1f}" cy="{rnd.uniform(80, 560):.1f}" rx="{rnd.uniform(15, 19):.1f}" ry="3.6" '
                f'transform="rotate({rnd.uniform(0, 180):.0f} 0 0)" fill="{rnd.choice(["#FFFFFF", "#F6F1E4", "#EDE5D2", "#FBF8F1"])}" '
                f'stroke="#D8CDB4" stroke-width=".8"/>' for _ in range(900))
            # rotate each grain about its own centre
            grains = re.sub(r'cx="([\d.]+)" cy="([\d.]+)"(.*?)transform="rotate\((\d+) 0 0\)"',
                            lambda m: f'cx="{m.group(1)}" cy="{m.group(2)}"{m.group(3)}transform="rotate({m.group(4)} {m.group(1)} {m.group(2)})"', grains)
            g.append(f'<path d="{win_d}" fill="#E9DFC8"/><g clip-path="url(#win-{panel_id})">{grains}</g>'
                     f'<path d="{win_d}" fill="#FFFFFF" opacity=".12"/>'
                     f'<path d="{win_d}" fill="none" stroke="{C["gold"]}" stroke-width="4"/>')
        else:
            g.append(f'<path d="{win_d}" fill="#FFFFFF"/>'
                     f'<g clip-path="url(#win-{panel_id})">' +
                     "".join(f'<line x1="{560 + i * 22}" y1="80" x2="{360 + i * 22}" y2="620" stroke="#D9D4C8" stroke-width="3"/>'
                             for i in range(30)) + '</g>'
                     f'<path d="{win_d}" fill="none" stroke="{C["gold"]}" stroke-width="4"/>'
                     + text(800, 330, "CLEAR WINDOW", 15, C["earth"], weight=600, anchor="middle", extra=' transform="rotate(-38 800 330)"'))
    g.append(f'<path d="{sweep_d}" fill="{sweep}"/>')
    g.append(f'<path d="M0 478C240 528 520 470 760 330C850 278 930 252 1000 242" fill="none" stroke="{ear}" stroke-width="3.2"/>')
    # gold rice ears rising from the sweep, bowing to the right
    for px, py, L, ang, dr, lf in [(40, 610, 220, 4, 0.30, True), (115, 610, 270, 10, 0.36, False),
                                   (190, 610, 230, 16, 0.40, True), (265, 610, 180, 22, 0.42, False)]:
        g.append(panicle(px, py, L, ang, dr, ear, n=12, leaf=(C["gold_d"] if mode == "day" else "#8E7446") if lf else None))
    if net:
        g.append(text(940, 560, net, 64, C["ivory"], family="Playfair Display", weight=400, anchor="end"))
    body = "".join(g)
    return (f'<g transform="translate({x:.2f} {y:.2f}) scale({sx:.5f} {sy:.5f})">'
            f'<defs>{defs}</defs>{body}</g>')


def farmer_scene(x, y, w, h, cid="fs"):
    """Flat illustration: a farmer in a paddy field at harvest (a generic figure, not a specific person).
    Drawn on a 400x200 board, scaled uniformly to the width and cropped to h around the figure."""
    s = w / 400
    top = max(0.0, 178 - h / s)
    g = [f'<rect width="400" height="200" fill="#E9E3D2"/>',
         f'<path d="M0 92C80 60 170 64 240 86C300 104 350 70 400 74V200H0Z" fill="{C["sage_l"]}"/>',
         f'<path d="M0 118C120 96 260 104 400 122V200H0Z" fill="{C["sage"]}"/>',
         tree(70, 112, 14, C["tree"], C["tree2"], C["tree2"]), tree(330, 110, 16, C["tree"], C["tree2"], C["tree2"]),
         f'<path d="M0 140C140 126 280 130 400 146V200H0Z" fill="{C["field1"]}"/>']
    # farmer: hat, head, kurta, arm with sickle; legs hidden in the paddy
    fx, fy = 205, 128
    g += [f'<path d="M{fx - 13} {fy + 6}C{fx - 15} {fy - 14} {fx + 15} {fy - 14} {fx + 13} {fy + 6}L{fx + 11} {fy + 44}H{fx - 11}Z" fill="#EDE6D6"/>',
          f'<circle cx="{fx}" cy="{fy - 18}" r="7.5" fill="{C["earth"]}"/>',
          f'<ellipse cx="{fx}" cy="{fy - 23}" rx="17" ry="4.2" fill="{C["gold"]}"/>',
          f'<path d="M{fx - 8} {fy - 24}C{fx - 7} {fy - 33} {fx + 7} {fy - 33} {fx + 8} {fy - 24}Z" fill="{C["gold_d"]}"/>',
          f'<path d="M{fx + 10} {fy - 2}L{fx + 26} {fy + 14}L{fx + 22} {fy + 18}L{fx + 7} {fy + 6}Z" fill="#EDE6D6"/>',
          f'<path d="M{fx + 24} {fy + 14}C{fx + 34} {fy + 8} {fx + 40} {fy + 16} {fx + 36} {fy + 24}" fill="none" stroke="{C["stone"]}" stroke-width="2.4" stroke-linecap="round"/>',
          f'<path d="M{fx - 12} {fy}L{fx - 22} {fy + 18}L{fx - 18} {fy + 21}L{fx - 7} {fy + 6}Z" fill="#E2D9C4"/>']
    # paddy in front (gold), across the field
    for i in range(26):
        px = 6 + i * 15.5
        g.append(panicle(px, 206, 40 + (i * 7) % 16, 6 + (i * 13) % 14, 0.3, C["gold_d"] if i % 3 else C["gold"], n=7))
    g.append(f'<path d="M0 176C120 168 280 170 400 180V200H0Z" fill="{C["field2"]}"/>')
    return (f'<clipPath id="{cid}"><rect x="{x:.2f}" y="{y:.2f}" width="{w:.2f}" height="{h:.2f}"/></clipPath>'
            f'<g clip-path="url(#{cid})"><g transform="translate({x:.2f} {y - top * s:.2f}) scale({s:.5f})">{"".join(g)}</g></g>')


def icon(kind, cx, cy, s, colour):
    """Line icons on a 24 grid, stroke 1.4 (packaging only)."""
    k = s / 24
    st = f'fill="none" stroke="{colour}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"'
    d = {
        "farmers": f'<circle cx="12" cy="8" r="3.4" {st}/><path d="M5 20c.8-4 3.6-6 7-6s6.2 2 7 6" {st}/><path d="M6.5 6.2h11" {st}/>',
        "practices": f'<path d="M12 3c3.5 4.2 5.4 7.4 5.4 10.1a5.4 5.4 0 0 1-10.8 0C6.6 10.4 8.5 7.2 12 3z" {st}/><path d="M12 19v-6.5m0 2.2 2.6-2.4" {st}/>',
        "communities": f'<circle cx="7" cy="9" r="2.4" {st}/><circle cx="17" cy="9" r="2.4" {st}/><circle cx="12" cy="7" r="2.8" {st}/><path d="M3 19c.6-3 2.2-4.6 4.4-4.6M21 19c-.6-3-2.2-4.6-4.4-4.6M7.2 20c.6-3.6 2.4-5.4 4.8-5.4s4.2 1.8 4.8 5.4" {st}/>',
        "tomorrow": f'<path d="M3 17h18" {st}/><path d="M7 17a5 5 0 0 1 10 0" {st}/><path d="M12 6.5V9M5.6 9.6l1.7 1.7M18.4 9.6l-1.7 1.7M3.5 13.6h2M18.5 13.6h2" {st}/>',
    }[kind]
    return f'<g transform="translate({cx - s / 2:.2f} {cy - s / 2:.2f}) scale({k:.4f})">{d}</g>'


def sprig(x, y, w, colour, sw, flat=0.5):
    """Line-drawn paddy sprig for the QR strip (outline grains along a long curve)."""
    sx = w / 600
    sy = sx * flat
    out = [f'<path d="M0 120C120 70 260 40 420 52C500 58 560 80 600 112" fill="none" stroke="{colour}" stroke-width="{sw / sx:.2f}"/>',
           f'<path d="M-20 160C140 90 280 60 380 66" fill="none" stroke="{colour}" stroke-width="{sw / sx:.2f}"/>']
    for i in range(18):
        t = i / 17
        px = 120 + t * 470
        py = 70 - 40 * math.sin(math.pi * t * 0.9) + 30 * t * t
        for side in (-1, 1):
            out.append(f'<ellipse cx="{px:.1f}" cy="{py + side * 9:.1f}" rx="10" ry="5" transform="rotate({side * 32 + 18} {px:.1f} {py + side * 9:.1f})" '
                       f'fill="none" stroke="{colour}" stroke-width="{sw / sx * 0.9:.2f}"/>')
    return f'<g transform="translate({x:.2f} {y:.2f}) scale({sx:.5f} {sy:.5f})">{"".join(out)}</g>'


def qr_strip(x, y, w, h):
    """The client's QR strip (attached artwork), set in the Sangat fonts and palette."""
    bar = h * 0.15
    g = [f'<clipPath id="strip-{x:.0f}-{w:.0f}"><rect x="{x}" y="{y}" width="{w}" height="{h}"/></clipPath>',
         f'<g clip-path="url(#strip-{x:.0f}-{w:.0f})">',
         f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{C["forest"]}"/>',
         f'<rect x="{x}" y="{y + h - bar:.2f}" width="{w}" height="{bar:.2f}" fill="{C["forest_d"]}"/>']
    m = w * 0.06
    g.append(sprig(x + w * 0.02, y + h * 0.70, w * 0.6, C["gold_d"], max(0.16, w * 0.001)))
    g.append(text(x + m, y + h * 0.17, "हर दाने की अपनी कहानी", h * 0.068, C["gold_l"], family="Noto Serif Devanagari", weight=500))
    g.append(text(x + m, y + h * 0.36, "Every grain", h * 0.155, C["ivory"], family="Playfair Display", weight=600))
    g.append(text(x + m, y + h * 0.53, "has a story.", h * 0.155, C["gold_l"], family="Playfair Display", weight=400, italic=True))
    g.append(lines(x + m, y + h * 0.65, ["Meet the farmers. Discover the", "practices behind your rice."], h * 0.052, "#E7E3D6", lead=1.35))
    # scan card
    cw, ch = w * 0.29, h * 0.72
    cx, cy = x + w - m * 0.6 - cw, y + h * 0.05
    g.append(f'<rect x="{cx:.2f}" y="{cy:.2f}" width="{cw:.2f}" height="{ch:.2f}" rx="{cw * 0.07:.2f}" fill="{C["ivory"]}"/>')
    g.append(text(cx + cw / 2, cy + ch * 0.11, "SCAN TO EXPLORE", ch * 0.058, C["forest"], weight=600, anchor="middle", ls=ch * 0.012))
    q = cw * 0.62
    qx, qy = cx + (cw - q) / 2, cy + ch * 0.17
    g.append(f'<rect x="{qx:.2f}" y="{qy:.2f}" width="{q:.2f}" height="{q:.2f}" fill="#FFFFFF"/>')
    g.append(f'<rect x="{qx + q * 0.07:.2f}" y="{qy + q * 0.07:.2f}" width="{q * 0.86:.2f}" height="{q * 0.86:.2f}" fill="none" '
             f'stroke="{C["earth"]}" stroke-width="{q * 0.012:.2f}" stroke-dasharray="{q * 0.04:.2f} {q * 0.025:.2f}"/>')
    g.append(text(qx + q / 2, qy + q * 0.36, "QR CODE", q * 0.1, C["forest"], weight=600, anchor="middle", ls=q * 0.01))
    g.append(text(qx + q / 2, qy + q * 0.5, "PLACEHOLDER", q * 0.07, C["earth"], weight=600, anchor="middle", ls=q * 0.012))
    g.append(lines(qx + q / 2, qy + q * 0.63, ["Generate from the final", "HTTPS URL of story.html"], q * 0.052, C["ink"], lead=1.3, anchor="middle"))
    g.append(text(qx + q / 2, qy + q * 0.83, "Not scannable", q * 0.055, C["earth"], weight=600, anchor="middle"))
    g.append(text(cx + cw / 2, cy + ch * 0.80, "Point your phone camera here", ch * 0.045, C["ink"], anchor="middle"))
    g.append(f'<line x1="{cx + cw * 0.22:.2f}" y1="{cy + ch * 0.85:.2f}" x2="{cx + cw * 0.78:.2f}" y2="{cy + ch * 0.85:.2f}" stroke="{C["stone"]}" stroke-width="{ch * 0.004:.2f}"/>')
    g.append(text(cx + cw / 2, cy + ch * 0.905, "or visit", ch * 0.042, C["ink"], anchor="middle"))
    g.append(text(cx + cw / 2, cy + ch * 0.96, "[CONFIRM SHORT URL]", ch * 0.045, C["earth"], weight=600, anchor="middle"))
    g.append(text(x + w / 2, y + h - bar * 0.4, "FARMER STORIES  •  CULTIVATION PRACTICES  •  OUR JOURNEY",
                  min(bar * 0.26, w * 0.021), C["gold_l"], weight=600, anchor="middle", ls=min(bar * 0.05, w * 0.004)))
    g.append("</g>")
    return "".join(g)


# ---------------------------------------------------------------- panels -------------------------------------
def front(v, size, ox, w, h, pid, rice=False):
    k = w / 180
    dark = v == "v2"
    ground = C["forest"] if dark else C["ivory"]
    tab = C["gold"] if dark else C["forest"]
    g = [f'<rect x="{ox}" y="0" width="{w}" height="{h}" fill="{ground}"/>']
    # the tab, from the top seal down; symbol below the zip / handle
    tw = 31 * k
    tab_h = (52 if size == "1kg" else 112)
    g.append(f'<rect x="{ox + w / 2 - tw / 2:.2f}" y="0" width="{tw:.2f}" height="{tab_h:.2f}" fill="{tab}"/>')
    sym, _, _ = place("symbol.svg", ox + w / 2, tab_h - 21 * k, h=17 * k, anchor="tc",
                      recolour=SYM_ON_GOLD if dark else SYM_ON_FOREST)
    g.append(sym)
    top = tab_h + 12 * k
    wm, ww, wh = place("wordmark.svg", ox + w / 2, top, w=118 * k, anchor="tc", recolour=REV if dark else None)
    g.append(wm)
    y = top + wh + 7 * k
    tg_col = C["gold"] if dark else C["earth"]
    g.append(text(ox + w / 2, y, "Sanjhi Soch, Sunehra Kal", 6.2 * k, tg_col, family="Playfair Display", anchor="middle", ls=0.9 * k))
    y += 6.4 * k
    g.append(text(ox + w / 2, y, "साँझी सोच, सुनहरा कल", 4.4 * k, tg_col, family="Noto Serif Devanagari", anchor="middle"))
    y += 10 * k
    ink = C["ivory"] if dark else C["forest"]
    g.append(text(ox + w / 2, y, "PREMIUM", 3.2 * k, C["gold"] if dark else C["gold_d"], weight=600, anchor="middle", ls=1.1 * k))
    y += 7.6 * k
    g.append(text(ox + w / 2, y, "BASMATI RICE", 7.4 * k, ink, family="Playfair Display", anchor="middle", ls=1.4 * k))
    y += 4 * k
    g.append(f'<line x1="{ox + w / 2 - 30 * k:.2f}" y1="{y:.2f}" x2="{ox + w / 2 + 30 * k:.2f}" y2="{y:.2f}" stroke="{C["gold"]}" stroke-width="{0.35 * k:.2f}"/>')
    y += 5.2 * k
    g.append(text(ox + w / 2, y, "NATURALLY AROMATIC · THOUGHTFULLY GROWN", 2.7 * k, C["sage"] if dark else C["earth"], weight=500, anchor="middle", ls=0.6 * k))
    y += 6.4 * k
    g.append(text(ox + w / 2, y, "IN PARTNERSHIP WITH MANAV VIKAS SANSTHAN", 2.3 * k, C["gold"] if dark else C["gold_d"], weight=600, anchor="middle", ls=0.55 * k))
    ly = y - 26 * k
    lh = h - ly
    g.append(landscape(ox, ly, w, lh, mode="dusk" if dark else "day", window=(v == "v1"), panel_id=pid, rice=rice))
    # net quantity + partnership on the sweep
    g.append(text(ox + w - 10 * k, h - 23 * k, "NET QUANTITY", 2.4 * k, C["gold_l"], weight=600, anchor="end", ls=0.5 * k))
    g.append(text(ox + w - 10 * k, h - 11 * k, "1 kg" if size == "1kg" else "5 kg", 11 * k, C["ivory"], family="Playfair Display", anchor="end"))
    vx, vy = ox + w - 10 * k - 5 * k, h - 36 * k
    g.append(f'<rect x="{vx:.2f}" y="{vy:.2f}" width="{5 * k:.2f}" height="{5 * k:.2f}" fill="#FFFFFF" stroke="#1E8A3B" stroke-width="{0.5 * k:.2f}"/>'
             f'<circle cx="{vx + 2.5 * k:.2f}" cy="{vy + 2.5 * k:.2f}" r="{1.4 * k:.2f}" fill="#1E8A3B"/>'
             + text(vx - 1.5 * k, vy + 3.4 * k, "veg mark: official FSSAI artwork", 1.7 * k, C["sage_l"], anchor="end"))
    return "".join(g)


def back(v, size, ox, w, h):
    k = w / 180
    g = [f'<rect x="{ox}" y="0" width="{w}" height="{h}" fill="{C["forest"]}"/>']
    m = 12 * k
    y = TOP_CLEAR[size] + 6 * k
    sym, _, _ = place("symbol.svg", ox + m - 1.5 * k, y - 4 * k, h=11 * k, recolour=SYM_ON_FOREST)
    g.append(sym)
    y += 18 * k
    g.append(text(ox + m, y, "A shared journey", 8.6 * k, C["ivory"], family="Playfair Display"))
    g.append(text(ox + m, y + 9.6 * k, "for a brighter tomorrow", 8.6 * k, C["gold_l"], family="Playfair Display", italic=True))
    y += 17 * k
    body = ["Sangat brings together farming families, Manav Vikas Sansthan",
            "(MVS) and people who care about what they eat, to support more",
            "sustainable rice cultivation practices, season after season."]
    g.append(lines(ox + m, y, body, 3.05 * k, "#DCE2D6", lead=1.5))
    y += 13 * k
    # values band (ivory) with four line icons
    bh = 19 * k
    g.append(f'<rect x="{ox + m:.2f}" y="{y:.2f}" width="{w - 2 * m:.2f}" height="{bh:.2f}" rx="{2 * k:.2f}" fill="{C["ivory"]}"/>')
    cols = [("farmers", "LOCAL", "FARMERS"), ("practices", "SUSTAINABLE", "PRACTICES"),
            ("communities", "THRIVING", "COMMUNITIES"), ("tomorrow", "A BRIGHTER", "TOMORROW")]
    cw = (w - 2 * m) / 4
    for i, (ic, a, b) in enumerate(cols):
        cx = ox + m + cw * (i + 0.5)
        g.append(icon(ic, cx, y + 6.6 * k, 7.6 * k, C["gold_d"]))
        g.append(text(cx, y + 13.6 * k, a, 2.1 * k, C["forest"], weight=600, anchor="middle", ls=0.3 * k))
        g.append(text(cx, y + 16.4 * k, b, 2.1 * k, C["forest"], weight=600, anchor="middle", ls=0.3 * k))
        if i:
            g.append(f'<line x1="{ox + m + cw * i:.2f}" y1="{y + 3 * k:.2f}" x2="{ox + m + cw * i:.2f}" y2="{y + bh - 3 * k:.2f}" stroke="{C["stone"]}" stroke-width="{0.25 * k:.2f}"/>')
    y += bh
    # farmer illustration, full width under the band
    fh = (30 if size == "1kg" else 34) * k
    g.append(farmer_scene(ox + m, y, w - 2 * m, fh, cid=f"fs-{v}-{size}"))
    g.append(text(ox + w - m - 1.5 * k, y + fh - 1.6 * k, "Illustration", 1.6 * k, C["ivory"], anchor="end"))
    y += fh + 5 * k
    # regulatory panel (ivory) - all placeholders
    strip_h = (96 if size == "1kg" else 150)
    reg_h = h - strip_h - y - 4 * k
    rw = w - 2 * m
    g.append(f'<rect x="{ox + m:.2f}" y="{y:.2f}" width="{rw:.2f}" height="{reg_h:.2f}" rx="{1.6 * k:.2f}" fill="{C["ivory"]}"/>')
    px, py = ox + m + 3.4 * k, y + 5 * k
    fs = 2.0 * k
    g.append(text(px, py, "NUTRITION INFORMATION (per 100 g, uncooked) · PLACEHOLDER", fs, C["forest"], weight=600, ls=0.15 * k))
    rows = ["Energy (kcal)", "Protein (g)", "Carbohydrate (g)", "  of which total sugars (g)", "  of which added sugars (g)",
            "Total fat (g)", "  of which saturated fat (g)", "  of which trans fat (g)", "Sodium (mg)"]
    col = rw * 0.47
    for i, r in enumerate(rows):
        yy = py + 3.3 * k + i * 2.75 * k
        if yy > y + reg_h - 2 * k:
            break
        g.append(text(px, yy, r, fs * 0.9, C["ink"]))
        g.append(text(px + col - 6 * k, yy, "—", fs * 0.9, C["ink"], anchor="end"))
        g.append(f'<line x1="{px:.2f}" y1="{yy + 0.9 * k:.2f}" x2="{px + col - 6 * k:.2f}" y2="{yy + 0.9 * k:.2f}" stroke="{C["stone"]}" stroke-width="{0.12 * k:.2f}"/>')
    qx = px + col
    legal = ["INGREDIENTS: Basmati rice · PLACEHOLDER (confirm)",
             "COOKING: method and water ratio · PLACEHOLDER",
             "Net quantity: " + ("1 kg" if size == "1kg" else "5 kg") + " · MRP ₹ ____ (incl. of all taxes)",
             "Batch no. ____ · Packed on ____ · Best before ____",
             "Packed & marketed by: NAME, ADDRESS · PLACEHOLDER",
             "FSSAI Lic. No. ______________ · PLACEHOLDER",
             "Customer care: phone / email · PLACEHOLDER",
             "Store in a cool, dry place · Country of origin: India (confirm)"]
    for i, r in enumerate(legal):
        yy = py + i * 2.9 * k
        if yy > y + reg_h - 9 * k:
            break
        g.append(text(qx, yy, r, fs * 0.88, C["ink"], weight=600 if r.isupper() or i < 2 else 400))
    # barcode + FSSAI logo placeholders
    bx, by = ox + w - m - 31 * k, y + reg_h - 11 * k
    bars = "".join(f'<rect x="{bx + 2 * k + i * 0.62 * k:.2f}" y="{by + 1.2 * k:.2f}" width="{(0.2 + (i * 7 % 3) * 0.14) * k:.2f}" height="{6.2 * k:.2f}" fill="{C["ink"]}"/>' for i in range(42))
    g.append(f'<rect x="{bx:.2f}" y="{by:.2f}" width="{29 * k:.2f}" height="{9.6 * k:.2f}" fill="#FFFFFF"/>{bars}'
             + text(bx + 14.5 * k, by + 9 * k, "EAN-13 PLACEHOLDER", 1.5 * k, C["ink"], anchor="middle"))
    g.append(f'<rect x="{qx:.2f}" y="{by:.2f}" width="{14 * k:.2f}" height="{7 * k:.2f}" fill="none" stroke="{C["earth"]}" stroke-width="{0.2 * k:.2f}" stroke-dasharray="{0.8 * k:.2f} {0.5 * k:.2f}"/>'
             + text(qx + 7 * k, by + 4.4 * k, "FSSAI logo", 1.6 * k, C["earth"], anchor="middle"))
    # the QR strip
    g.append(qr_strip(ox, h - strip_h, w, strip_h))
    return "".join(g)


def side(v, ox, w, h, pid):
    k = w / 100
    dark = v == "v2"
    g = [f'<rect x="{ox}" y="0" width="{w}" height="{h}" fill="{C["forest"] if dark else C["ivory"]}"/>']
    sym, _, _ = place("symbol.svg", ox + w / 2, 70, h=26 * k, anchor="tc", recolour=SYM_ON_FOREST if dark else None)
    g.append(sym)
    ink = C["ivory"] if dark else C["forest"]
    g.append(lines(ox + w / 2, 128, ["Good food", "grows from", "shared", "thinking."], 9.5 * k, ink, lead=1.18,
                   family="Playfair Display", italic=True, anchor="middle"))
    g.append(f'<line x1="{ox + w / 2 - 10 * k:.2f}" y1="{180:.2f}" x2="{ox + w / 2 + 10 * k:.2f}" y2="180" stroke="{C["gold"]}" stroke-width="0.5"/>')
    g.append(text(ox + w / 2, 194, "Sanjhi Soch, Sunehra Kal", 4.6 * k, C["gold"] if dark else C["earth"], family="Playfair Display", anchor="middle"))
    g.append(text(ox + w / 2, 202, "साँझी सोच, सुनहरा कल", 4.2 * k, C["gold"] if dark else C["earth"], family="Noto Serif Devanagari", anchor="middle"))
    g.append(landscape(ox - w * 0.6, h - 170, w * 2.6, 170, mode="dusk" if dark else "day", panel_id=pid))
    return f'<g clip-path="url(#clip-{pid})"><clipPath id="clip-{pid}"><rect x="{ox}" y="0" width="{w}" height="{h}"/></clipPath>{"".join(g)}</g>'


def gusset(v, ox, oy, w, h):
    g = [f'<rect x="{ox}" y="{oy}" width="{w}" height="{h}" fill="{C["forest"]}"/>']
    n = 9
    for i in range(n):
        cx = ox + (i + 0.5) * w / n
        s, _, _ = place("symbol.svg", cx, oy + h / 2 - 8, h=16, anchor="tc", recolour=SYM_ON_FOREST)
        g.append(f'<g opacity="{0.9 if i % 2 == 0 else 0.35}">{s}</g>')
    g.append(text(ox + w / 2, oy + h - 8, "Sanjhi Soch, Sunehra Kal", 4.4, C["gold_l"], family="Playfair Display", anchor="middle", ls=0.8))
    return "".join(g)


FONT_CSS = f"""
@font-face{{font-family:"Playfair Display";src:url(file://{FONTDIR}/playfair-display-latin-400-normal.woff2);font-weight:400;font-style:normal}}
@font-face{{font-family:"Playfair Display";src:url(file://{FONTDIR}/playfair-display-latin-600-normal.woff2);font-weight:600;font-style:normal}}
@font-face{{font-family:"Playfair Display";src:url(file://{FONTDIR}/playfair-display-latin-400-italic.woff2);font-weight:400;font-style:italic}}
@font-face{{font-family:"Inter";src:url(file://{FONTDIR}/inter-latin-400-normal.woff2);font-weight:400}}
@font-face{{font-family:"Inter";src:url(file://{FONTDIR}/inter-latin-500-normal.woff2);font-weight:500}}
@font-face{{font-family:"Inter";src:url(file://{FONTDIR}/inter-latin-600-normal.woff2);font-weight:600}}
@font-face{{font-family:"Noto Serif Devanagari";src:url(file://{FONTDIR}/noto-serif-devanagari-devanagari-400-normal.woff2);font-weight:400}}
@font-face{{font-family:"Noto Serif Devanagari";src:url(file://{FONTDIR}/noto-serif-devanagari-devanagari-500-normal.woff2);font-weight:500}}
"""


def sheet(v, size):
    """Returns (svg, total_w, total_h, panel boxes)."""
    if size == "1kg":
        pw, ph, gh = 180.0, 280.0, 90.0
        items = [("BACK", 0, pw, ph), ("FRONT", pw, pw, ph)]
        body = back(v, size, 0, pw, ph) + front(v, size, pw, pw, ph, f"{v}1f") + gusset(v, 0, ph, 2 * pw, gh)
        tw, th = 2 * pw, ph + gh
        zones = [("TOP SEAL 12 mm", 12), ("ZIP 30 mm", 30)]
        boxes = {"front": (pw, 0, pw, ph), "back": (0, 0, pw, ph)}
    else:
        pw, ph, sw = 300.0, 450.0, 100.0
        x = 0
        body = side(v, x, sw, ph, f"{v}5s1")
        x += sw
        body += front(v, size, x, pw, ph, f"{v}5f")
        fx = x
        x += pw
        body += side(v, x, sw, ph, f"{v}5s2")
        x += sw
        body += back(v, size, x, pw, ph)
        bx = x
        tw, th = 2 * pw + 2 * sw, ph
        zones = [("TOP SEAL 15 mm", 15)]
        boxes = {"front": (fx, 0, pw, ph), "back": (bx, 0, pw, ph)}
        items = [("SIDE", 0, sw, ph), ("FRONT", fx, pw, ph), ("SIDE", fx + pw, sw, ph), ("BACK", bx, pw, ph)]
    return body, tw, th, zones, boxes, items


def guides(size, tw, th, zones, items):
    g = [f'<rect x="{-BLEED}" y="{-BLEED}" width="{tw + 2 * BLEED}" height="{th + 2 * BLEED}" fill="none" stroke="#E6007E" stroke-width=".3" stroke-dasharray="2 1"/>']
    for name, x, w, h in items:
        g.append(f'<rect x="{x}" y="0" width="{w}" height="{h}" fill="none" stroke="#E6007E" stroke-width=".35"/>')
        g.append(f'<rect x="{x + 6}" y="6" width="{w - 12}" height="{h - 12}" fill="none" stroke="#00A3E0" stroke-width=".3" stroke-dasharray="1.5 1"/>')
        g.append(f'<text x="{x + 2}" y="-0.8" font-family="Inter" font-size="2.6" fill="#E6007E">{name} {w:.0f} × {h:.0f} mm (assumed)</text>')
    for label, y in zones:
        g.append(f'<line x1="0" y1="{y}" x2="{tw}" y2="{y}" stroke="#E6007E" stroke-width=".3" stroke-dasharray="3 1.5"/>')
        g.append(f'<text x="{tw - 2}" y="{y - 1}" font-family="Inter" font-size="2.4" fill="#E6007E" text-anchor="end">{label}</text>')
    if size == "5kg":
        for name, x, w, h in items:
            if name in ("FRONT", "BACK"):
                g.append(f'<rect x="{x + w / 2 - 40}" y="22" width="80" height="22" rx="11" fill="#FFFFFF" fill-opacity=".85" stroke="#E6007E" stroke-width=".4"/>'
                         f'<text x="{x + w / 2}" y="35" font-family="Inter" font-size="3" fill="#E6007E" text-anchor="middle">HANDLE DIE-CUT</text>')
    return "".join(g)


def wrap(svg_body, vb, w_mm, h_mm):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" width="{w_mm}mm" height="{h_mm}mm">'
            f'<style>{FONT_CSS}</style>{svg_body}</svg>')


def render(jobs):
    tmp = os.path.join(OUT, "_render")
    os.makedirs(tmp, exist_ok=True)
    for i, j in enumerate(jobs):
        j["url"] = "file://" + os.path.join(tmp, f"{i}.html")
        open(os.path.join(tmp, f"{i}.html"), "w").write(j.pop("html"))
    js = """
const {chromium}=require('playwright');
(async()=>{const jobs=%s;const b=await chromium.launch();
for(const j of jobs){const p=await b.newPage({viewport:{width:j.w,height:j.h}});
await p.goto(j.url);await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(250);
await p.screenshot({path:j.png,timeout:120000,omitBackground:false});console.log('wrote',j.png);}
await b.close();})();""" % json.dumps(jobs)
    subprocess.run(["node", "-e", js], check=True, env={**os.environ, "NODE_PATH": NODE_PATH})


def main():
    jobs = []
    for v, vname in (("v1", "ivory-landscape"), ("v2", "forest-edition")):
        for size in ("1kg", "5kg"):
            body, tw, th, zones, boxes, items = sheet(v, size)
            base = os.path.join(OUT, f"{v}-{vname}-{size}")
            note = (f'<!-- Sangat {v.upper()} {vname} {size}. NOT PRINT-READY: assumed panel sizes, live text '
                    f'(Playfair Display, Inter, Noto Serif Devanagari, OFL) to be outlined at prepress, regulatory and QR '
                    f'content are placeholders. -->')
            art = wrap(note + body, f"{-BLEED} {-BLEED} {tw + 2 * BLEED} {th + 2 * BLEED}", tw + 2 * BLEED, th + 2 * BLEED)
            open(base + "-artwork.svg", "w").write(art)
            gd = wrap(note + body + guides(size, tw, th, zones, items), f"-6 -6 {tw + 12} {th + 12}", tw + 12, th + 12)
            open(base + "-guides.svg", "w").write(gd)
            px = 1800 / (tw + 12)
            jobs.append({"html": f'<html><body style="margin:0">{gd.replace(f"width=\"{tw + 12}mm\" height=\"{th + 12}mm\"", f"width=\"{(tw + 12) * px:.0f}\" height=\"{(th + 12) * px:.0f}\"")}</body></html>',
                         "png": base + "-guides.png", "w": int((tw + 12) * px), "h": int((th + 12) * px)})
            for panel, (x, y, w, h) in boxes.items():
                pxp = 1400 / h
                s = wrap(body, f"{x} {y} {w} {h}", w, h).replace(f'width="{w}mm" height="{h}mm"', f'width="{w * pxp:.0f}" height="{h * pxp:.0f}"')
                jobs.append({"html": f'<html><body style="margin:0">{s}</body></html>', "png": f"{base}-{panel}.png",
                             "w": int(w * pxp), "h": int(h * pxp)})
        for size, (pw, ph) in (("1kg", (180.0, 280.0)), ("5kg", (300.0, 450.0))):
            body = front(v, size, 0, pw, ph, f"{v}{size}m", rice=True)
            pxp = 1400 / ph
            s = wrap(body, f"0 0 {pw} {ph}", pw, ph).replace(f'width="{pw}mm" height="{ph}mm"', f'width="{pw * pxp:.0f}" height="{ph * pxp:.0f}"')
            jobs.append({"html": f'<html><body style="margin:0">{s}</body></html>', "png": os.path.join(OUT, f"{v}-{vname}-{size}-front-mock.png"),
                         "w": int(pw * pxp), "h": int(ph * pxp)})
    render(jobs)


if __name__ == "__main__":
    main()
