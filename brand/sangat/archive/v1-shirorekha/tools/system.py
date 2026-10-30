"""Sangat identity system (Phases 3-4): palette spec, graphic language SVGs, icon set.

Writes into brand/sangat/system/:
  palette.json, palette.md          colour roles with HEX / RGB / OKLCH / starting CMYK, contrast pairs
  graphics/*.svg                    pattern tile, divider, frame, bindu marker, grain motif
  icons/*.svg                       brand icon set (24-unit grid)
Run:  python3 brand/sangat/tools/system.py
"""
import json, math, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from make_sets import grain, circle  # noqa: E402  (same grain geometry as the logo)

W = os.path.normpath(os.path.join(HERE, ".."))
SYS = os.path.join(W, "system")
for d in ("graphics", "icons"):
    os.makedirs(os.path.join(SYS, d), exist_ok=True)

# ----------------------------------------------------------------------------------------------- colour
PALETTE = [
    # id, name, hex, role, usage, share of a typical surface (proportion guide, judgement)
    ("forest", "Sangat Forest", "#1E3A2F", "Primary", "Logo, headings, 1 kg pack ground, primary buttons", "40%"),
    ("ivory", "Basmati Ivory", "#F6F1E5", "Background", "Page ground, pack label panels, stationery", "35%"),
    ("husk", "Husk Sand", "#E7DCC4", "Secondary", "Secondary surfaces, back-of-pack panels, cards", "10%"),
    ("sage", "Paddy Sage", "#8E9F86", "Secondary", "Quiet text and patterns on forest, illustrations", "5%"),
    ("night", "Night Forest", "#13241B", "Secondary", "Darkest ground: 5 kg pack base, footer, dark mode", "5%"),
    ("gold", "Sunehra Gold", "#A07A35", "Accent", "The joining line, foil, the bindu story marker. One element per surface", "≤3%"),
    ("gold-ui", "Sunehra Gold (UI)", "#896126", "Accent (digital)", "Gold on ivory for screens where 3:1 is needed (links, small rules)", "UI only"),
    ("gold-light", "Gold on Dark", "#C9A35A", "Accent (on dark)", "The line and bindu on forest / night grounds", "≤3%"),
    ("ink", "Ink", "#131F18", "Text", "Body text on light grounds", "—"),
    ("ink-muted", "Ink Muted", "#4C5951", "Text", "Secondary text on light grounds", "—"),
]


def hex2rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def lin(c):
    c /= 255
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4


def lum(h):
    r, g, b = (lin(c) for c in hex2rgb(h))
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def contrast(a, b):
    la, lb = sorted((lum(a), lum(b)), reverse=True)
    return (la + 0.05) / (lb + 0.05)


def oklch(h):
    r, g, b = (lin(c) for c in hex2rgb(h))
    l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b
    m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b
    s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b
    l, m, s = (v ** (1 / 3) for v in (l, m, s))
    L = 0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s
    A = 1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s
    B = 0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s
    return round(L, 3), round(math.hypot(A, B), 3), round(math.degrees(math.atan2(B, A)) % 360, 1)


def cmyk_start(h):
    """Uncalibrated starting build: partial GCR, total ink <= 300%. Proof against the printer's profile."""
    r, g, b = (c / 255 for c in hex2rgb(h))
    c, m, y = 1 - r, 1 - g, 1 - b
    k = min(c, m, y) * 0.82
    if k >= 0.999:
        return (0, 0, 0, 100)
    c, m, y = ((v - k) / (1 - k) for v in (c, m, y))
    # dark colours: keep some chromatic ink under black for depth (press practice), cap total ink
    lift = max(0.0, k - 0.45) * 0.9
    c, m, y = (min(1, v + lift * v / max(c, m, y, 1e-6)) for v in (c, m, y))
    tot = (c + m + y + k)
    if tot > 3.0:
        s = (3.0 - k) / (c + m + y)
        c, m, y = c * s, m * s, y * s
    return tuple(round(v * 100) for v in (c, m, y, k))


def palette():
    rows = []
    for pid, name, hx, role, usage, share in PALETTE:
        rows.append({"id": pid, "name": name, "hex": hx, "rgb": hex2rgb(hx), "oklch": oklch(hx),
                     "cmyk_start": cmyk_start(hx), "role": role, "usage": usage, "share": share})
    pairs = [("Ink on Ivory", "#131F18", "#F6F1E5"), ("Forest on Ivory", "#1E3A2F", "#F6F1E5"),
             ("Ivory on Forest", "#F6F1E5", "#1E3A2F"), ("Ivory on Night", "#F6F1E5", "#13241B"),
             ("Gold-on-dark on Forest", "#C9A35A", "#1E3A2F"), ("Gold (print) on Ivory", "#A07A35", "#F6F1E5"),
             ("Gold UI on Ivory", "#896126", "#F6F1E5"), ("Sage on Forest", "#8E9F86", "#1E3A2F"),
             ("Ink muted on Husk", "#4C5951", "#E7DCC4")]
    pr = [{"pair": n, "fg": a, "bg": b, "ratio": round(contrast(a, b), 2),
           "use": "body text" if contrast(a, b) >= 4.5 else ("large text / graphics" if contrast(a, b) >= 3 else "decoration only")}
          for n, a, b in pairs]
    json.dump({"colours": rows, "contrast": pr,
               "note": "CMYK values are uncalibrated starting builds; proof against the printer's profile "
                       "(e.g. ISO Coated v2 / FOGRA39 for coated stock). Pantone references to be matched by "
                       "the printer's drawdown; none are claimed here."},
              open(os.path.join(SYS, "palette.json"), "w"), indent=1)
    md = ["# Sangat colour system", "",
          "| Colour | Role | HEX | RGB | OKLCH | CMYK (starting build) | Use | Share |", "|---|---|---|---|---|---|---|---|"]
    for r in rows:
        md.append(f"| **{r['name']}** | {r['role']} | `{r['hex']}` | {', '.join(map(str, r['rgb']))} | "
                  f"{r['oklch'][0]} {r['oklch'][1]} {r['oklch'][2]} | {' '.join(f'{k}{v}' for k, v in zip('CMYK', r['cmyk_start']))} | "
                  f"{r['usage']} | {r['share']} |")
    md += ["", "## Measured contrast (WCAG 2)", "", "| Pair | Ratio | Use |", "|---|---|---|"]
    md += [f"| {p['pair']} | {p['ratio']}:1 | {p['use']} |" for p in pr]
    md += ["", "## Packaging colour", "",
           "- 1 kg ground: Sangat Forest, matte. 5 kg ground: Night Forest, matte. Label panel: Basmati Ivory, uncoated-look varnish.",
           "- Gold: a warm, low-shine gold foil for the joining line, the bindu and the wordmark highlight on dark only. "
           "Match foil to Sunehra Gold by drawdown; never flood a panel with foil.",
           "- Never place gold on gold, gold text below 9 pt, or the logo on Husk Sand at small sizes (contrast 1.2:1 against ivory).",
           "",
           "## Digital", "",
           "- Tokens: `../kit/A/tokens/tokens.css` (generated by the brand-identity kit) and the site's `assets/css/site.css`.",
           "- On ivory use **Sunehra Gold (UI)** `#896126` for any gold that must be read (≥ 3:1); the print gold is for foil and large graphics.",
           "", "*CMYK and Pantone: " + "uncalibrated starting builds; proof with the printer's profile.*"]
    open(os.path.join(SYS, "palette.md"), "w").write("\n".join(md) + "\n")
    return rows, pr


# ----------------------------------------------------------------------------------------------- graphics
def write(path, body, vb, extra=""):
    open(os.path.join(SYS, path), "w").write(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}"{extra}>{body}</svg>\n')


def graphics():
    # 1. Chatai weave: the woven mat people sit on together for a shared meal, woven from grains. A herringbone of
    #    grains (columns alternate +45 / -45 degrees), cut like a Sanjhi paper stencil. Tile 40x40, seamless:
    #    shapes that cross an edge are repeated on the opposite edge. currentColor inherits the ground.
    g = []
    for col, ang in ((0, 45), (1, -45)):
        x = 10 + col * 20
        for y in (-10, 10, 30, 50):
            for dx in (0, -40, 40):
                g.append(f'<path d="{grain(x + dx, y, 22, 3.3, ang)}"/>')
    body = "".join(g)
    write("graphics/pattern-chatai-tile.svg", f'<title>Sangat chatai weave (tile)</title><g fill="currentColor">{body}</g>',
          "0 0 40 40")
    tiles = "".join(f'<use href="#t" x="{x * 40}" y="{y * 40}"/>' for x in range(9) for y in range(6))
    write("graphics/pattern-chatai-swatch.svg",
          f'<title>Sangat chatai weave</title><defs><clipPath id="c"><rect width="360" height="240"/></clipPath>'
          f'<clipPath id="tc"><rect width="40" height="40"/></clipPath>'
          f'<g id="t" clip-path="url(#tc)" fill="#C9A35A">{body}</g></defs>'
          f'<rect width="360" height="240" fill="#1E3A2F"/><g clip-path="url(#c)">{tiles}</g>', "0 0 360 240")

    # 2. Shirorekha divider: the mark's line at full width, three grains held under its centre.
    grains = "".join(f'<path d="{grain(300 + dx, 21 + (2 if dx == 0 else 0), 18 if dx == 0 else 15, 1.9)}" fill="#1E3A2F"/>'
                     for dx in (-8, 0, 8))
    write("graphics/divider-shirorekha.svg",
          f'<title>Sangat divider</title><rect x="0" y="6" width="600" height="3" fill="#A07A35"/>{grains}', "0 0 600 34")

    # 3. Bindu story marker (from direction B): one golden point that means "there is more here" (QR, story links).
    write("graphics/bindu-marker.svg",
          f'<title>Sangat story marker</title><path d="{circle(12, 12, 6)}" fill="#A07A35"/>'
          f'<path d="{circle(12, 12, 10.5)}M12 2.9a9.1 9.1 0 1 0 .01 0Z" fill="#A07A35" fill-rule="evenodd" opacity=".35"/>',
          "0 0 24 24")

    # 4. Frame: a hanging-rule frame for labels and certificates of origin (when real data exists).
    write("graphics/frame-hanging.svg",
          '<title>Sangat label frame</title><rect x="0" y="0" width="300" height="5" fill="#A07A35"/>'
          '<rect x="0" y="12" width="300" height="1" fill="#1E3A2F"/><rect x="0" y="187" width="300" height="1" fill="#1E3A2F"/>'
          '<rect x="0" y="12" width="1" height="176" fill="#1E3A2F"/><rect x="299" y="12" width="1" height="176" fill="#1E3A2F"/>',
          "0 0 300 188")

    # 5. Single grain motif (for scale bars, bullets, the website's static fallback)
    write("graphics/grain-motif.svg", f'<title>Sangat grain</title><path d="{grain(10, 40, 76, 7.4, 0)}" fill="#1E3A2F"/>',
          "0 0 20 80")


# ----------------------------------------------------------------------------------------------- icons
# 24-unit grid, filled shapes + 1.8-unit lines, rounded only where the grain is. Built from the brand's grain and
# line so the set belongs to Sangat (not a generic outline library). Colour: currentColor.
def ln(x1, y1, x2, y2, w=1.8):
    a = math.atan2(y2 - y1, x2 - x1)
    dx, dy = -math.sin(a) * w / 2, math.cos(a) * w / 2
    return f'M{x1 + dx:.2f} {y1 + dy:.2f}L{x2 + dx:.2f} {y2 + dy:.2f}L{x2 - dx:.2f} {y2 - dy:.2f}L{x1 - dx:.2f} {y1 - dy:.2f}Z'


def ring(cx, cy, r, w=1.8):
    return circle(cx, cy, r) + circle(cx, cy, r - w)


ICONS = {
    # the three stakeholders: three grains under one line (the logo, reduced)
    "together": [f'<rect x="3" y="3.5" width="18" height="2.4"/>'] +
                [f'<path d="{grain(x, 14.4, 12.6 if x == 12 else 11, 2.1)}"/>' for x in (6.8, 12, 17.2)],
    # water: a grain-shaped drop over a field line
    "water": [f'<path d="M12 2.6C9 6.8 6.4 10.2 6.4 13.6a5.6 5.6 0 0 0 11.2 0C17.6 10.2 15 6.8 12 2.6Z"/>',
              f'<path d="{ln(3, 21, 21, 21)}"/>'],
    # soil / straw back to the soil: three grains lying on a line
    "soil": [f'<path d="{ln(3, 19.6, 21, 19.6, 2.2)}"/>', f'<path d="{grain(9, 15.6, 10, 2.1, 90)}"/>',
             f'<path d="{grain(15.6, 15.6, 10, 2.1, 90)}"/>', f'<path d="{grain(12.3, 11.2, 10, 2.1, 90)}"/>'],
    # looking before spraying: lens + grain
    "scout": [f'<path d="{ring(10.5, 10.5, 6.6)}" fill-rule="evenodd"/>', f'<path d="{ln(15.4, 15.4, 20.6, 20.6, 2.4)}"/>',
              f'<path d="{grain(10.5, 10.5, 6.4, 1.5, 0)}"/>'],
    # a plan for every season: calendar card with the hanging line
    "season": ['<path d="M4 5h16v15H4Z M5.8 9.4v8.8h12.4V9.4Z" fill-rule="evenodd"/>', '<rect x="4" y="5" width="16" height="2.6"/>',
               f'<path d="{ln(8, 3, 8, 6.5)}"/>', f'<path d="{ln(16, 3, 16, 6.5)}"/>', f'<path d="{grain(12, 14, 6, 1.4, 90)}"/>'],
    # harvest: a bent panicle of grains
    "harvest": [f'<path d="{ln(5.4, 21, 10.6, 5.4, 2.2)}"/>'] + [f'<path d="{grain(x, y, 7.4, 2.0, a)}"/>' for x, y, a in
                ((13.4, 5.6, 72), (17.2, 8.8, 105), (18.6, 13.8, 140))],
    # milling: two stones and the grain between
    "milling": ['<rect x="3.5" y="4" width="17" height="4.4" rx="1"/>', '<rect x="3.5" y="15.6" width="17" height="4.4" rx="1"/>',
                f'<path d="{grain(12, 12, 9.4, 1.7, 90)}"/>'],
    # pack: stand-up pouch with the line
    "pack": ['<path d="M6 4h12l1.4 16.4H4.6Z M7.8 9.2l-.9 9.4h10.2l-.9-9.4Z" fill-rule="evenodd"/>', '<rect x="5.6" y="4" width="12.8" height="2.2"/>'],
    # your kitchen: bowl with grains
    "kitchen": ['<path d="M3 11.5h18a9 9 0 0 1-18 0Z"/>'] + [f'<path d="{grain(x, 7.6, 6, 1.4, a)}"/>' for x, a in ((8.5, -25), (12, 0), (15.5, 25))],
    # the story behind the pack (QR): square with the bindu
    "story": ['<path d="M3.5 3.5h7v7h-7Z M5.3 5.3v3.4h3.4V5.3Z" fill-rule="evenodd"/>',
              '<path d="M13.5 3.5h7v7h-7Z M15.3 5.3v3.4h3.4V5.3Z" fill-rule="evenodd"/>',
              '<path d="M3.5 13.5h7v7h-7Z M5.3 15.3v3.4h3.4v-3.4Z" fill-rule="evenodd"/>', f'<path d="{circle(17, 17, 3.2)}"/>'],
}


def icons():
    for name, parts in ICONS.items():
        write(f"icons/{name}.svg", f'<title>{name}</title><g fill="currentColor">{"".join(parts)}</g>', "0 0 24 24")
    return list(ICONS)


if __name__ == "__main__":
    rows, pr = palette()
    graphics()
    names = icons()
    for r in rows:
        print(f"{r['name']:<20} {r['hex']}  RGB {r['rgb']}  CMYK~{r['cmyk_start']}")
    for p in pr:
        print(f"{p['pair']:<26} {p['ratio']:>5}:1  {p['use']}")
    print("icons:", ", ".join(names))
