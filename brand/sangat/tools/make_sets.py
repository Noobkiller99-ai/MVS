"""Generate brand/sangat/sets.json: the four Sangat identity directions.

Symbols are computed on the brand-identity skill's 100-unit grid (filled primitives, data-op booleans,
colours by palette role). Run:  python3 brand/sangat/tools/make_sets.py
"""
import json, math, os

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "sets.json")
f = lambda v: f"{v:.2f}".rstrip("0").rstrip(".")


def lens(p1, p2, b):
    """Basmati-grain lens between tips p1 and p2, half-width b (two equal circular arcs)."""
    (x1, y1), (x2, y2) = p1, p2
    a = math.hypot(x2 - x1, y2 - y1) / 2
    R = (a * a + b * b) / (2 * b)
    return (f"M{f(x1)} {f(y1)}A{f(R)} {f(R)} 0 0 1 {f(x2)} {f(y2)}"
            f"A{f(R)} {f(R)} 0 0 1 {f(x1)} {f(y1)}Z")


def grain(cx, cy, length, b, deg=0.0, tip=0.42, belly=0.55):
    """A basmati grain: slender, softly tapered, rounded tips (not a pointed leaf lens).
    Four cubic curves; `tip` sets tip roundness, `belly` the fullness. Rotated `deg` clockwise from vertical."""
    L = length / 2
    t = math.radians(deg)
    c, s_ = math.cos(t), math.sin(t)
    def P(x, y):
        return f"{f(cx + x * c - y * s_)} {f(cy + x * s_ + y * c)}"
    return (f"M{P(0, -L)}C{P(tip * b, -L)} {P(b, -belly * L)} {P(b, 0)}"
            f"C{P(b, belly * L)} {P(tip * b, L)} {P(0, L)}"
            f"C{P(-tip * b, L)} {P(-b, belly * L)} {P(-b, 0)}"
            f"C{P(-b, -belly * L)} {P(-tip * b, -L)} {P(0, -L)}Z")


def tilted(cx, cy, length, b, deg):
    """Lens centred at (cx, cy), `length` long, tilted `deg` clockwise from vertical."""
    t = math.radians(deg)
    dx, dy = math.sin(t) * length / 2, -math.cos(t) * length / 2
    return lens((cx + dx, cy + dy), (cx - dx, cy - dy), b)


def circle(cx, cy, r):
    return f"M{f(cx - r)} {f(cy)}a{f(r)} {f(r)} 0 1 0 {f(2 * r)} 0a{f(r)} {f(r)} 0 1 0 {f(-2 * r)} 0Z"


def svg(body):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">{body}</svg>'


# ---------------------------------------------------------------- A: Shirorekha (the line that joins)
# A gold headline (the Devanagari shirorekha) with three basmati grains hanging from it: separate parts made one
# word. Second readings: a rice panicle, a toran over a doorway. Grain tops run up inside the bar for a solid join.
def symbol_A(gap_round=False):
    # Refinement round 1: whole grains held just below the line (a 7-unit gap) instead of fused into it;
    # three identical stems fused to a bar read as an inverted "Ш" / a comb in one colour.
    # Refinement round 2: grains and line slimmed to the wordmark's measured stem weight (Tiro thick stems
    # 16-18 / cap 100; symbol scale 1.27) so SANGAT stays the hero; grains ~85% of a stem, curves carry more mass.
    bar = '<rect id="shirorekha" x="10" y="12" width="80" height="11" data-color="accent"/>'
    grains = "".join(
        f'<path id="grain-{i}" d="{grain(x, (30 + bottom) / 2, bottom - 30, 5.6)}" data-color="primary"/>'
        for i, (x, bottom) in enumerate([(28, 86), (50, 95), (72, 86)], 1))
    return svg(f'<g id="grains">{grains}</g>{bar}')


def symbol_A_small():
    """Favicon cut (16-24 px only): heavier line, fuller grains, wider gaps so three grains stay three."""
    bar = '<rect id="shirorekha" x="5" y="9" width="90" height="15" data-color="accent"/>'
    grains = "".join(
        f'<path id="grain-{i}" d="{grain(x, (33 + bottom) / 2, bottom - 33, 8.6)}" data-color="primary"/>'
        for i, (x, bottom) in enumerate([(21, 89), (50, 96), (79, 89)], 1))
    return svg(f'<g id="grains">{grains}</g>{bar}')


def misuse_A(kind):
    """Misuses only this mark can suffer (brand-identity kit.md): drawn from the real geometry."""
    bar = '<rect x="10" y="12" width="80" height="11" data-color="accent"/>'
    if kind == "fused":     # grains pushed up into the line: the inverted-"Ш" reading returns
        g = "".join(f'<path d="{grain(x, (16 + b) / 2, b - 16, 5.6)}" data-color="primary"/>'
                    for x, b in [(28, 86), (50, 95), (72, 86)])
    else:                   # a fourth grain added: the three stakeholders are the idea
        g = "".join(f'<path d="{grain(x, (30 + b) / 2, b - 30, 5.6)}" data-color="primary"/>'
                    for x, b in [(20, 86), (40, 95), (60, 95), (80, 86)])
    return svg(g + bar)


# ---------------------------------------------------------------- B: Bindu (wordmark only)
# SAṄGAT: the dot over the N is how scholars romanise the anusvara of संगत; here it is a single golden point.
# The wordmark detail is added from the measured glyph positions (see apply_bindu below).
def symbol_small_B():
    return svg('<path id="initial" data-glyphs="N" data-cap="62" data-x="50" data-baseline="90" '
               'data-anchor="middle" data-color="primary"/>'
               f'<path id="bindu" d="{circle(50, 14.5, 8.5)}" data-color="accent"/>')


# ---------------------------------------------------------------- C: Sanjhi (cut-paper stencil)
# A disc cut like a Sanjhi paper stencil: eight grains face one shared centre, a gathering seen from above.
def symbol_C(n=8, inner=21, outer=43, b=5.0, dot=8.5):
    holes = []
    for k in range(n):
        t = math.radians(360 / n * k)
        r = (inner + outer) / 2
        holes.append(grain(50 + math.sin(t) * r, 50 - math.cos(t) * r, outer - inner, b, 360 / n * k))
    d = circle(50, 50, 48) + "".join(holes) + (circle(50, 50, dot) if dot else "")
    return svg(f'<path id="stencil" fill-rule="evenodd" d="{d}" data-color="accent"/>')


# ---------------------------------------------------------------- C (round 2): Mohar, the trader's seal
# The name in Devanagari cut through a gold stamp: heritage as a working object, not a monument. It prints as a
# real stamp, a deboss or a foil block. (The Sanjhi stencil idea moves into the pattern language.)
def symbol_C_seal(word="संगत", cap=17, baseline=59):
    return svg('<rect id="seal" x="6" y="6" width="88" height="88" rx="11" data-color="accent"/>'
               f'<path id="name-devanagari" data-glyphs="{word}" data-cap="{cap}" data-x="50" '
               f'data-baseline="{baseline}" data-anchor="middle" data-op="subtract"/>')


# ---------------------------------------------------------------- D: Saath (moving forward together)
# Two basmati grains walking side by side, leaning forward; the golden one a step ahead (sunehra kal).
def symbol_D():
    return svg(f'<path id="grain-together" d="{grain(37, 55, 82, 9.0, 18)}" data-color="primary"/>'
               f'<path id="grain-ahead" d="{grain(63, 45, 82, 9.0, 18)}" data-color="accent"/>')


def face(family, weights, location, case="as-is", tracking=0, fallback="serif", features=None):
    return {"family": family, "source": "google", "license": "OFL-1.1", "weights": weights,
            "location": location, "features": features or [], "case": case, "tracking": tracking,
            "fallback": fallback, "file": None}


def brand_colour(i, name, hexv, usage):
    return {"id": f"brand-{i}", "name": name, "hex": hexv, "source": "chosen", "locked": True, "usage": usage,
            "print": {"lab_d50": None, "cmyk": None, "pantone_ref": None}}


COMPETITORS = ("Category shelf (judgement, sites unreachable here): maroon/red + gold foil with monuments and crowns "
               "(India Gate, Daawat, Kohinoor, Lal Qilla), purple/navy script (Tilda), leaf-green kraft and badges "
               "(24 Mantra, Organic Tattva).")

SETS = [
    {
        "id": "A", "name": "Shirorekha", "recommended": True, "wordmark_tracking": 160,
        "mechanism": "The Devanagari headline that joins letters into one word: a gold line holds three grains in "
                     "the mark, gives the inscriptional capitals their hanging rule, and is the only gold in a "
                     "forest-and-ivory palette.",
        "expression_move": "The gold joining line: the single bright element in mark, layout and pack.",
        "differs_by": "Category marks are crests, monuments and leaves on maroon or kraft; this is a script-derived "
                      "abstract mark in deep forest with one line of gold, no illustration.",
        "axes": {"classic_contemporary": -1, "quiet_loud": 0, "warm_cool": -1, "friend_authority": 1},
        "type": {"pairing_mode": "contrast",
                 "display": face("Tiro Devanagari Hindi", [400], {}, "as-is", 0, "Georgia, serif"),  # caps only in the wordmark
                 "text": face("Mukta", [400, 600], {}, "as-is", 0, "system-ui, sans-serif", ["tnum"]),
                 "mono": None},
        "logo": {"type": "symbol+wordmark",
                 "concept": "One line joins three grains into a single word: shirorekha, panicle and toran at once.",
                 "colors": {"shirorekha": "accent", "grains": "primary", "wordmark": "primary"},
                 "tags": ["abstract-geometric"], "min_size": {"px": 20, "mm": 7}},
        "palette": {"name": "Shirorekha", "direction": "Deep Sangat forest on warm ivory, one line of muted gold.",
                    "brand": [brand_colour(1, "Sangat Forest", "#1E3A2F", "logo, headings, pack ground"),
                              brand_colour(2, "Sunehra Gold", "#A07A35", "the joining line, foil, small accents")],
                    "feels": ["assured", "rooted", "calm"]},
        "palette_build": {"light_bg": "#F6F1E5", "dark_bg": "#13241B",
                          "extra": ["#E7DCC4:Husk Sand:secondary surfaces, pack back panels",
                                    "#8E9F86:Paddy Sage:quiet text and patterns on forest",
                                    "#13241B:Night Forest:darkest ground, 5 kg pack base"]},
        "card": {"ground": "light"},
        "defaults_used": [
            {"id": "cream-ground", "why": "The brief asks for warm ivory, and ivory is the live Sangat site's ground (equity)."},
            {"id": "gold-brass-accent", "why": "The brief asks for a muted gold accent; it is held to one element (line, dot, grain or seal), never a frame or foil flood."}],
        "symbol_svg": symbol_A(),
        "symbol_small_svg": symbol_A_small(),
        "misuse_svgs": {"misuse-1": misuse_A("fused"), "misuse-2": misuse_A("four")},
        "misuse": [{"do": "stretch"}, {"do": "recolour"}, {"do": "effects"}, {"do": "crowd"},
                   {"svg": "logo/misuse-1.svg", "label": "Do not join the grains to the line"},
                   {"svg": "logo/misuse-2.svg", "label": "Never add or remove grains: always three"}],
    },
    {
        "id": "B", "name": "Bindu", "recommended": False,
        "mechanism": "One golden point: the dot that romanises संगत as SAṄGAT sits over the N, and the same single "
                     "point is the only colour in an ink-on-paper palette and the only mark the pack needs.",
        "expression_move": "The golden bindu over the N; everything else is black-green ink on paper.",
        "differs_by": "Against ornate, illustrated packs this is a pure typographic identity with one dot: "
                      "the quietest pack on a loud shelf.",
        "axes": {"classic_contemporary": 1, "quiet_loud": -2, "warm_cool": 0, "friend_authority": 1},
        "type": {"pairing_mode": "single-family",
                 "display": face("Eczar", [560], {"wght": 560}, "upper", 130, "Georgia, serif"),
                 "text": face("Eczar", [400, 600], {"wght": 400}, "as-is", 0, "Georgia, serif"),
                 "mono": None},
        "logo": {"type": "wordmark",
                 "concept": "SAṄGAT: the anusvara's romanised dot over the N, drawn as a golden bindu.",
                 "colors": {"wordmark": "primary", "bindu": "accent"},
                 "tags": [], "min_size": {"px": 24, "mm": 8}},
        "palette": {"name": "Bindu", "direction": "Ink black-green on paper white; one golden dot.",
                    "brand": [brand_colour(1, "Bindu Ink", "#17231D", "wordmark, all type"),
                              brand_colour(2, "Bindu Gold", "#B8862B", "the dot only; foil on pack")],
                    "feels": ["precise", "confident", "spare"]},
        "palette_build": {"light_bg": "#FBF8F2"},
        "card": {"ground": "light"},
        "defaults_used": [
            {"id": "cream-ground", "why": "The brief asks for warm ivory, and ivory is the live Sangat site's ground (equity)."},
            {"id": "gold-brass-accent", "why": "The brief asks for a muted gold accent; it is held to one element (line, dot, grain or seal), never a frame or foil flood."}],
        "symbol_small_svg": symbol_small_B(),
        "wordmark_detail_svg": '<svg xmlns="http://www.w3.org/2000/svg">'
                               f'<path id="bindu" d="{circle(286.1, -24, 13)}" data-color="accent"/></svg>',
    },
    {
        "id": "C", "name": "Mohar", "recommended": False,
        "mechanism": "A trader's seal: संगत cut through a gold stamp is the mark, the high-contrast Indian display "
                     "face is the seal's voice, and a night-forest ground lets the gold stamp carry the pack.",
        "expression_move": "The gold Devanagari seal on a dark ground.",
        "differs_by": "Heritage without monuments: a living craft instead of a palace, and dark forest instead of "
                      "maroon; the only dark-ground premium pack on a light or red shelf.",
        "axes": {"classic_contemporary": -2, "quiet_loud": 2, "warm_cool": -2, "friend_authority": 0},
        "type": {"pairing_mode": "contrast",
                 "display": face("Rozha One", [400], {}, "upper", 90, "Georgia, serif"),
                 "text": face("Mukta", [400, 600], {}, "as-is", 0, "system-ui, sans-serif", ["tnum"]),
                 "mono": None},
        "logo": {"type": "symbol+wordmark",
                 "concept": "The name in Devanagari, cut through a gold seal: Sangat stamped as a promise.",
                 "colors": {"seal": "accent", "wordmark": "accent"},
                 "tags": ["rounded-square-tile"], "min_size": {"px": 24, "mm": 8}},
        "palette": {"name": "Mohar", "direction": "Night forest ground, a gold seal, a paddy sage for quiet text.",
                    "brand": [brand_colour(1, "Night Forest", "#13241B", "pack and page ground"),
                              brand_colour(2, "Mohar Gold", "#C99A4B", "seal, wordmark on dark"),
                              brand_colour(3, "Paddy Sage", "#8C9C80", "secondary text and patterns on dark")],
                    "feels": ["festive", "crafted", "rich"]},
        "palette_build": {"dark_bg": "#13241B"},
        "card": {"ground": "dark"},
        "defaults_used": [
            {"id": "gold-brass-accent", "why": "The brief asks for a muted gold accent; here it is the seal itself, a single object."},
            {"id": "initial-in-rounded-square", "why": "The square is the seal block (a mohar is a stamp); the full Devanagari name is cut through it, not an initial in an app tile."}],
        "symbol_svg": symbol_C_seal(),
        "symbol_small_svg": symbol_C_seal("सं", 33, 66),
    },
    {
        "id": "D", "name": "Saath", "recommended": False,
        "mechanism": "Moving forward together: two grains lean forward side by side in the mark, the condensed "
                     "contemporary sans leans on its verticals, and a cool monsoon green carries one golden grain "
                     "a step ahead.",
        "expression_move": "The golden grain a step ahead: motion in an otherwise upright system.",
        "differs_by": "The category is static and ceremonial; this is the only contemporary, forward-moving mark "
                      "and the only condensed sans on the shelf.",
        "axes": {"classic_contemporary": 2, "quiet_loud": 1, "warm_cool": 1, "friend_authority": -1},
        "type": {"pairing_mode": "single-family",
                 "display": face("Akshar", [560], {"wght": 560, "CTRS": 0}, "upper", 140, "system-ui, sans-serif"),
                 "text": face("Akshar", [400, 600], {"wght": 400, "CTRS": 0}, "as-is", 10, "system-ui, sans-serif"),
                 "mono": None},
        "logo": {"type": "symbol+wordmark",
                 "concept": "Two basmati grains stride side by side; the golden one is a step ahead.",
                 "colors": {"grain-together": "primary", "grain-ahead": "accent", "wordmark": "primary"},
                 "tags": [], "min_size": {"px": 16, "mm": 6}},
        "palette": {"name": "Saath", "direction": "Monsoon green on rice white, a golden grain ahead.",
                    "brand": [brand_colour(1, "Monsoon Green", "#16443D", "mark, headings, pack ground"),
                              brand_colour(2, "Harvest Gold", "#B98A2E", "the leading grain, highlights")],
                    "feels": ["forward", "fresh", "open"]},
        "palette_build": {"light_bg": "#F4F2EC"},
        "card": {"ground": "light"},
        "defaults_used": [
            {"id": "cream-ground", "why": "The brief asks for warm ivory, and ivory is the live Sangat site's ground (equity)."},
            {"id": "gold-brass-accent", "why": "The brief asks for a muted gold accent; it is held to one element (line, dot, grain or seal), never a frame or foil flood."}],
        "symbol_svg": symbol_D(),
    },
]


def build():
    out = []
    for s in SETS:
        ident = {
            "set": {k: s[k] for k in ("id", "name", "recommended", "mechanism", "expression_move", "differs_by")},
            "axes": s["axes"],
            "type": s["type"],
            "logo": {
                "type": s["logo"]["type"], "concept": s["logo"]["concept"],
                "symbol": "logo/symbol.svg" if s.get("symbol_svg") else None,
                "wordmark": {"text": "Sangat", "role": "display", "location": None,
                             "tracking": s.get("wordmark_tracking", s["type"]["display"]["tracking"]), "case": "upper"},
                "monogram": None,
                "lockups": ["horizontal", "stacked"] if s.get("symbol_svg") else ["horizontal"],
                "colors": s["logo"]["colors"], "tags": s["logo"]["tags"],
                "clear_space": {"unit": "cap-height", "multiple": 1, "inferred": True},
                "min_size": s["logo"]["min_size"],
                **({"misuse": s["misuse"]} if s.get("misuse") else {}),
            },
            "palette_build": {"strategy": None, "accent": None, "light_bg": None, "dark_bg": None,
                              "neutral_tint": None, "neutral_chroma": None, "extra": [], **s["palette_build"]},
            "card": s["card"],
            "defaults_used": s["defaults_used"],
            "rationale": [
                {"claim": s["mechanism"], "evidence": "judgement"},
                {"claim": COMPETITORS, "evidence": "judgement"},
                {"claim": "All faces are OFL Google Fonts designed with both Latin and Devanagari, so Hindi lines "
                          "use the brand's own type rather than a fallback.", "evidence": "measured",
                 "source": "brand.py fonts audit --langs en,hi"},
            ],
        }
        pal = {"schema": "brand-identity/palette@1", **s["palette"]}
        out.append({"identity": ident, "palette": pal, "symbol_svg": s.get("symbol_svg"),
                    "symbol_small_svg": s.get("symbol_small_svg"),
                    "wordmark_detail_svg": s.get("wordmark_detail_svg"),
                    **({"misuse_svgs": s["misuse_svgs"]} if s.get("misuse_svgs") else {})})
    json.dump({"schema": "brand-identity/sets@1", "sets": out}, open(OUT, "w"), indent=1, ensure_ascii=False)
    print("wrote", os.path.relpath(OUT))


if __name__ == "__main__":
    build()
