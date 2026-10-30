"""Outline text from an OFL font into SVG path data (fontTools only), for the Sangat v2 logo and pack type.

glyphs(text, font, wght, size) -> list of dicts {ch, d, x, adv} with y-down coordinates, baseline at y=0.
"""
from functools import lru_cache
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

FONTS = "/root/.cache/brand-identity/fonts/google/ofl"
PLAYFAIR = f"{FONTS}/playfairdisplay/PlayfairDisplay[wght].ttf"
INTER = f"{FONTS}/inter/Inter[opsz,wght].ttf"
NOTO_DEVA = f"{FONTS}/notoserifdevanagari/NotoSerifDevanagari[wdth,wght].ttf"


@lru_cache(None)
def _font(path):
    return TTFont(path)


def glyphs(text, path=PLAYFAIR, wght=600, size=100.0, tracking=0.0, extra=None, **axes):
    """tracking in 1/1000 em; extra = {index: dx in em/1000} manual kerning after glyph index."""
    f = _font(path)
    upm = f["head"].unitsPerEm
    k = size / upm
    loc = {"wght": wght, **axes}
    gs = f.getGlyphSet(location=loc)
    cmap = f.getBestCmap()
    hmtx = gs  # glyph set carries varied advances via .width
    out, x = [], 0.0
    for i, ch in enumerate(text):
        name = cmap[ord(ch)]
        g = gs[name]
        pen = SVGPathPen(gs, ntos=lambda v: f"{v:.2f}".rstrip("0").rstrip("."))
        g.draw(TransformPen(pen, (k, 0, 0, -k, x, 0)))
        out.append({"ch": ch, "name": name, "d": pen.getCommands(), "x": x, "adv": g.width * k})
        x += g.width * k + tracking * size / 1000 + (extra or {}).get(i, 0) * size / 1000
    return out


def metrics(path=PLAYFAIR):
    f = _font(path)
    os2 = f["OS/2"]
    upm = f["head"].unitsPerEm
    return {"cap": os2.sCapHeight / upm, "x": os2.sxHeight / upm, "asc": f["hhea"].ascent / upm,
            "desc": f["hhea"].descent / upm}


def width(gl):
    return gl[-1]["x"] + gl[-1]["adv"] if gl else 0.0
