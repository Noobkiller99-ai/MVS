#!/usr/bin/env python3
"""Sangat packaging v3: laid out to the client's exact brand board, with the traced v3 logo.

Landscape: the client's master illustration (art/sangat-landscape*.svg, traced by landscape_vector.py), placed
unmodified (uniform scale, its own aspect ratio) and linked, never redrawn.
Front (board): ivory paper, forest tab with the gold symbol, the wordmark, the tagline, PREMIUM / BASMATI RICE /
NATURALLY AROMATIC · THOUGHTFULLY GROWN in Libre Caslon caps, faint etched rice ears at the edges, then the master
landscape full width at the bottom, with the net quantity and veg mark set over its foreground.
Back (board): "A shared journey / for a brighter tomorrow", the board's copy, a curved ivory band with the four value
icons, the master landscape, and the client's QR strip along the bottom.
Sides (5 kg): symbol, "Good food grows from shared thinking.", rule, a section of the landscape; the other side
carries the legal panel.
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


ART_DIR = os.path.join(W, "art")
ART_URL = "file://" + ART_DIR + "/"      # renders; saved artwork files link to ../art/ instead


def landscape(x, y, w, h, mode="day", window=False, rice=False, pid="L", net=None, align="xMidYMax", fit="meet"):
    """The client's master landscape (art/sangat-landscape-transparent.svg), placed unmodified: uniform scale and its
    own 2:1 aspect ratio. fit "meet" shows all of it, bottom-aligned in the box; fit "slice" fills the box and the
    box crops it (sides, social tiles). The transparent variant sits on ivory and on forest alike. mode, window, rice,
    pid and net are kept for older callers and ignored: nothing is drawn into the illustration."""
    href = f"{ART_URL}sangat-landscape-transparent.svg"
    if fit == "meet":
        iw = min(w, 2 * h)
        ih = iw / 2
    else:
        iw = max(w, 2 * h)
        ih = iw / 2
    ix = x + (0 if align.startswith("xMin") else (w - iw) if align.startswith("xMax") else (w - iw) / 2)
    iy = y + h - ih if align.endswith("YMax") else y + (h - ih) / 2
    img = f'<image href="{href}" x="{ix:.2f}" y="{iy:.2f}" width="{iw:.2f}" height="{ih:.2f}"/>'
    if fit == "slice":
        _uid[0] += 1
        cid = f"art{_uid[0]}"
        img = (f'<clipPath id="{cid}"><rect x="{x:.2f}" y="{y:.2f}" width="{w:.2f}" height="{h:.2f}"/></clipPath>'
               f'<g clip-path="url(#{cid})">{img}</g>')
    return img


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
    tg = []
    wm, ww, wh = place("wordmark.svg", ox + w / 2, top, w=128 * k, anchor="tc", recolour=REV if dark else None)
    tg.append(wm)
    y = top + wh + 6 * k
    tg.append(text(ox + w / 2, y, "Sanjhi Soch, Sunehra Kal", 4.6 * k, warm, family=SERIF, anchor="middle", ls=0.35 * k))
    y += 11 * k
    tg.append(text(ox + w / 2, y, "PREMIUM", 3.4 * k, warm, family=SERIF, anchor="middle", ls=0.9 * k))
    y += 7.6 * k
    tg.append(text(ox + w / 2, y, "BASMATI RICE", 7.0 * k, ink, family=SERIF, anchor="middle", ls=0.85 * k))
    y += 3.6 * k
    tg.append(f'<line x1="{ox + w / 2 - 33 * k:.2f}" y1="{y:.2f}" x2="{ox + w / 2 + 33 * k:.2f}" y2="{y:.2f}" stroke="{C["gold"]}" stroke-width="{0.35 * k:.2f}"/>')
    y += 6 * k
    tg.append(text(ox + w / 2, y, "NATURALLY AROMATIC", 2.9 * k, ink, family=SERIF, anchor="middle", ls=0.75 * k))
    y += 4.6 * k
    tg.append(text(ox + w / 2, y, "THOUGHTFULLY GROWN", 2.9 * k, ink, family=SERIF, anchor="middle", ls=0.75 * k))
    # centre the text block between the tab and the top of the landscape's tree
    tree_top = h - w / 2 + 0.1 * (w / 2)
    dy = max(0.0, ((tab_h + tree_top - 6 * k) - (top + y)) / 2)
    g.append(f'<g transform="translate(0 {dy:.2f})">' + "".join(tg) + "</g>")
    net = "1 kg" if size == "1kg" else "5 kg"
    g.append(landscape(ox, h - w / 2, w, w / 2, mode="day", pid=pid))
    g.append(text(ox + w - 9 * k, h - 8 * k, net, 9 * k, C["ivory"], family=SERIF, anchor="end"))
    vx, vy = ox + 11 * k, h - 7 * k
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
    g.append(landscape(ox, y, w, fh, mode="day", align="xMidYMax"))
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
    g.append(landscape(ox, h - 150, w, 150, mode="dusk" if dark else "day", align="xMaxYMax", fit="slice"))
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
    g.append(landscape(ox, h - 190, w, 190, mode="dusk" if dark else "day", align="xMinYMax", fit="slice"))
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
            note = (f"<!-- Sangat {v.upper()} {vname} {size} (v3, laid out to the client's brand board; landscape = the client's "
                    f"master illustration, linked from ../art/). NOT PRINT-READY: "
                    f"assumed panel sizes, live text (Libre Caslon Text, Playfair Display, Inter, Noto Serif Devanagari; OFL) "
                    f"to be outlined at prepress, regulatory, QR and URL content are placeholders. -->")
            rel = lambda t: t.replace(ART_URL, "../art/")
            open(base + "-artwork.svg", "w").write(rel(wrap(note + body, f"{-BLEED} {-BLEED} {tw + 2 * BLEED} {th + 2 * BLEED}", tw + 2 * BLEED, th + 2 * BLEED)))
            gd = wrap(note + body + guides(size, tw, th, zones, items), f"-6 -6 {tw + 12} {th + 12}", tw + 12, th + 12)
            open(base + "-guides.svg", "w").write(rel(gd))
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
