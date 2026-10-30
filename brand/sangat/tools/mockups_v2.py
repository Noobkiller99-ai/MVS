#!/usr/bin/env python3
"""Sangat v2 pack visualisations, from the packaging-v2 renders:

  mockups-v2/hero.png      1 kg + 5 kg on a warm table with a bowl of rice (the board's lead image)
  mockups-v2/range.png     both variations at both sizes
  mockups-v2/back.png      the back panel with the QR strip, front beside it
  mockups-v2/finishes.png  finishes call-out
  mockups-v2/shelf.png     retail shelf test among unbranded category colour blocks

Visualisations only, drawn in CSS/SVG from the real artwork; not print proofs.
"""
import base64, json, os, random, subprocess
from pouch import POUCH_CSS, pouch_clip

HERE = os.path.dirname(os.path.abspath(__file__))
W = os.path.normpath(os.path.join(HERE, ".."))
PK = os.path.join(W, "packaging-v2")
OUT = os.path.join(W, "mockups-v2")
FONTDIR = os.path.join(W, "v2/fonts")
os.makedirs(OUT, exist_ok=True)
NODE_PATH = subprocess.run(["npm", "root", "-g"], capture_output=True, text=True).stdout.strip()


def b64(name):
    return "data:image/png;base64," + base64.b64encode(open(os.path.join(PK, name), "rb").read()).decode()


IMG = {
    "v1-1kg": b64("v1-ivory-landscape-1kg-front-mock.png"), "v1-5kg": b64("v1-ivory-landscape-5kg-front-mock.png"),
    "v2-1kg": b64("v2-forest-edition-1kg-front-mock.png"), "v2-5kg": b64("v2-forest-edition-5kg-front-mock.png"),
    "v1-1kg-back": b64("v1-ivory-landscape-1kg-back.png"),
}

FONT_CSS = f"""
@font-face{{font-family:"Playfair Display";src:url(file://{FONTDIR}/playfair-display-latin-400-normal.woff2);font-weight:400}}
@font-face{{font-family:"Playfair Display";src:url(file://{FONTDIR}/playfair-display-latin-400-italic.woff2);font-weight:400;font-style:italic}}
@font-face{{font-family:"Inter";src:url(file://{FONTDIR}/inter-latin-400-normal.woff2);font-weight:400}}
@font-face{{font-family:"Inter";src:url(file://{FONTDIR}/inter-latin-600-normal.woff2);font-weight:600}}
"""


def pouch(key, w, h, size, behind="#efe8da", extra_style=""):
    clip = pouch_clip(w, h)
    mm = h / 280 if size == "1kg" else h / 450
    zone = (f'<div class="zip" style="--zip:{30 * mm:.1f}px"></div>' if size == "1kg" else
            f'<div class="handle" style="--handle-top:{22 * mm:.1f}px;--handle-w:{80 * mm:.1f}px;'
            f'--handle-h:{22 * mm:.1f}px;--behind:{behind}"></div>')
    return (f'<div class="pouch" style="width:{w}px;height:{h}px;--clip:\'{clip}\';--crimp:{12 * mm:.1f}px;{extra_style}">'
            f'<div class="body" style="--art:url({IMG[key]})"><div class="paper"></div></div><div class="crimp"></div>{zone}'
            f'<div class="base"></div></div>')


BASE_CSS = """
*{box-sizing:border-box} body{margin:0;font-family:Inter,sans-serif;color:#13231C}
.pouch .paper{position:absolute;inset:0;mix-blend-mode:multiply;opacity:.35;
  background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .55  0 0 0 0 .5  0 0 0 0 .42  0 0 0 .55 0'/></filter><rect width='160' height='160' filter='url(%23n)'/></svg>")}
.cap{font:600 12px Inter;letter-spacing:.16em;text-transform:uppercase;color:#6d5a3d;text-align:center;margin-top:16px}
.note{font:400 13px Inter;color:#6d5a3d;text-align:center}
.lbl{font:600 13px Inter;letter-spacing:.2em;text-transform:uppercase}
"""


def bowl_svg(w):
    rnd = random.Random(3)
    gs = []
    for _ in range(900):
        cx, cy = rnd.gauss(200, 75), rnd.uniform(40, 116)
        gs.append(f'<ellipse cx="{cx:.1f}" cy="{cy:.1f}" rx="{rnd.uniform(9, 12):.1f}" ry="2.6" transform="rotate({rnd.uniform(-70, 70):.0f} {cx:.1f} {cy:.1f})" '
                  f'fill="{rnd.choice(["#FFFFFF", "#FBF8F0", "#F3EDDF"])}" stroke="#DCD1B8" stroke-width=".6"/>')
    grains = "".join(gs)
    return f"""<svg viewBox="0 0 400 230" width="{w}" style="display:block;overflow:visible">
<defs><radialGradient id="bw" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#9B7A52"/><stop offset=".6" stop-color="#6E5236"/><stop offset="1" stop-color="#3E2C1C"/></radialGradient>
<clipPath id="heap"><path d="M40 112C60 30 340 30 360 112Z"/></clipPath>
<radialGradient id="hs" cx=".5" cy=".9" r=".8"><stop offset="0" stop-color="rgba(0,0,0,0)"/><stop offset="1" stop-color="rgba(120,90,50,.25)"/></radialGradient></defs>
<ellipse cx="200" cy="222" rx="170" ry="12" fill="rgba(40,25,10,.35)" filter="blur(4px)"/>
<g clip-path="url(#heap)"><rect x="30" y="20" width="340" height="100" fill="#F6F0E2"/>{grains.replace('transform="rotate(', 'transform="rotate(')}<rect x="30" y="20" width="340" height="100" fill="url(#hs)"/></g>
<path d="M30 110H370C362 178 300 218 200 218S38 178 30 110Z" fill="url(#bw)"/>
<ellipse cx="200" cy="111" rx="170" ry="9" fill="none" stroke="#B89A72" stroke-width="3"/>
</svg>"""


def page(name, body, w, h, css):
    p = os.path.join(OUT, f"{name}.html")
    open(p, "w").write(f'<!doctype html><meta charset="utf-8"><style>{FONT_CSS}{POUCH_CSS}{BASE_CSS}'
                       f'html,body{{width:{w}px;height:{h}px;overflow:hidden}}{css}</style>{body}')
    return {"url": "file://" + p, "png": os.path.join(OUT, f"{name}.png"), "w": w, "h": h}


TABLE_CSS = """
body{background:radial-gradient(90% 80% at 70% 30%,#F3E3C4 0%,#D9BC8C 45%,#8C6A43 100%)}
.light{position:absolute;inset:0;background:radial-gradient(50% 60% at 78% 18%,rgba(255,240,205,.75),rgba(255,240,205,0) 70%)}
.table{position:absolute;left:-5%;right:-5%;bottom:0;height:34%;
  background:repeating-linear-gradient(178deg,rgba(60,35,15,.0) 0 18px,rgba(60,35,15,.10) 18px 20px),
  linear-gradient(180deg,#A47B4E 0%,#7C5631 45%,#5A3B20 100%);box-shadow:0 -2px 0 rgba(255,230,190,.35) inset}
.leafshadow{position:absolute;left:-60px;top:-40px;width:520px;height:620px;opacity:.16;filter:blur(6px)}
"""


def leaf_shadow():
    return ('<svg class="leafshadow" viewBox="0 0 400 500"><g fill="#3a2a14">'
            + "".join(f'<path d="M{60 + i * 38} {500 - i * 12}C{20 + i * 40} {300 - i * 30} {120 + i * 30} {120 - i * 8} {200 + i * 18} {40 + i * 6}'
                      f'C{150 + i * 30} {160} {90 + i * 40} {320} {80 + i * 38} {500 - i * 12}Z"/>' for i in range(6))
            + '</g></svg>')


def hero():
    body = (f'<div class="light"></div><div class="table"></div>'
            f'<div style="position:absolute;left:150px;top:60px;width:560px">'
            f'<div class="lbl" style="color:#3D2E1A">Packaging design</div>'
            f'<div style="font:400 40px/1.15 \'Playfair Display\';color:#24170A;margin-top:16px">Premium. Authentic.<br><i>A better tomorrow.</i></div></div>'
            f'<div style="position:absolute;left:120px;bottom:120px">{bowl_svg(420)}</div>'
            f'<div style="position:absolute;left:560px;bottom:150px;display:flex;align-items:flex-end;gap:34px">'
            f'{pouch("v1-1kg", 300, 467, "1kg")}{pouch("v1-5kg", 430, 645, "5kg", "#E9D5B0")}</div>'
            f'<div class="note" style="position:absolute;left:0;right:0;bottom:18px;color:#F3E6CC">Visualisation from the print artwork; '
            f'not a photograph or a print proof.</div>')
    return page("hero", body, 1600, 1000, TABLE_CSS)


def rng():
    css = "body{background:radial-gradient(120% 90% at 50% 15%,#FBF7EE,#E9E0CC 70%,#D9CCB0)}"
    caps = [("v1-5kg", 360, 540, "5kg", "V1 Ivory Landscape · 5 kg"), ("v1-1kg", 250, 389, "1kg", "V1 Ivory Landscape · 1 kg"),
            ("v2-1kg", 250, 389, "1kg", "V2 Forest Edition · 1 kg"), ("v2-5kg", 360, 540, "5kg", "V2 Forest Edition · 5 kg")]
    row = "".join(f'<figure style="margin:0">{pouch(k, w, h, s, "#E9E0CC")}<div class="cap">{c}</div></figure>' for k, w, h, s, c in caps)
    body = (f'<div class="lbl" style="position:absolute;left:0;right:0;top:40px;text-align:center;color:#6d5a3d">Sangat · the range</div>'
            f'<div style="position:absolute;left:0;right:0;top:110px;display:flex;justify-content:center;align-items:flex-end;gap:54px">{row}</div>'
            f'<div class="note" style="position:absolute;left:0;right:0;bottom:22px">Pack sizes and materials are assumed until the converter\'s dielines arrive; '
            f'all regulatory content is placeholder.</div>')
    return page("range", body, 1700, 820, css)


def back():
    css = TABLE_CSS + ".tag{position:absolute;font:400 15px Inter;color:#2b1d0c}"
    body = (f'<div class="light"></div><div class="table"></div>'
            f'<div style="position:absolute;left:250px;bottom:120px;display:flex;gap:60px;align-items:flex-end">'
            f'{pouch("v1-1kg-back", 420, 653, "1kg")}{pouch("v1-1kg", 330, 513, "1kg")}</div>'
            f'<div style="position:absolute;left:1120px;top:200px;width:380px">'
            f'<div class="lbl" style="color:#3D2E1A">The back of the pack</div>'
            f'<div style="font:400 34px/1.15 \'Playfair Display\';color:#24170A;margin:14px 0 18px">Every grain <i>has a story.</i></div>'
            f'<div style="font:400 16px/1.6 Inter;color:#3D2E1A">The QR strip runs along the bottom of every back panel. The code opens '
            f'the Sangat story page: the farmers, the practices behind the rice and the journey from farm to pack.</div>'
            f'<div style="font:400 13px/1.5 Inter;color:#5B4527;margin-top:16px">QR code and short URL are placeholders until the '
            f'production page address is final. Nutrition, MRP, FSSAI and barcode panels are placeholders pending regulatory review.</div></div>')
    return page("back", body, 1600, 1000, css)


def finishes():
    items = [("1", "Matte paper-touch laminate", "Ivory ground with a fine paper grain, as on the board: warm, not glossy."),
             ("2", "Hot-foil gold", "The rice ear in the logo, the fine rules and the panicles."),
             ("3", "Clear window", "The rice itself, framed by a gold foil edge along the sweep."),
             ("4", "Embossed wordmark", "Sangat raised on the 5 kg front; blind emboss of the symbol on the tab."),
             ("5", "Spot matte on forest", "The forest sweep and tab in a deeper matte than the ivory.")]
    rows = "".join(f'<li><b>{n}</b><div><h4>{t}</h4><p>{d}</p></div></li>' for n, t, d in items)
    pins = [(59, 22.5, "2"), (88, 61, "3"), (16, 45, "1"), (40, 23, "4"), (50, 88, "5")]
    pin_html = "".join(f'<span class="pin" style="left:{x}%;top:{y}%">{n}</span>' for x, y, n in pins)
    css = """
    body{background:#F9F6EE;display:flex;align-items:center;gap:80px;padding:60px 100px}
    .wrap{position:relative}
    .pin{position:absolute;width:30px;height:30px;margin:-15px 0 0 -15px;border-radius:50%;background:#0F3D2E;color:#F9F6EE;
      font:600 14px/30px Inter;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,.35);z-index:3}
    h2{font:400 46px/1.05 'Playfair Display';color:#0F3D2E;margin:0 0 8px} .k{font:600 12px Inter;letter-spacing:.18em;text-transform:uppercase;color:#8B6F47;margin-bottom:26px}
    ul{list-style:none;margin:0;padding:0;max-width:620px} li{display:flex;gap:18px;padding:16px 0;border-top:1px solid #D9D4C8}
    li b{flex:none;width:30px;height:30px;border-radius:50%;background:#C9A96B;color:#0F3D2E;font:600 14px/30px Inter;text-align:center}
    h4{margin:0;font:600 17px Inter;color:#13231C} p{margin:2px 0 0;font:400 15px/1.5 Inter;color:#5B4F3E}
    .fine{margin-top:22px;font:400 13px/1.5 Inter;color:#6d5a3d}
    """
    body = (f'<div class="wrap">{pouch("v1-1kg", 420, 653, "1kg", "#F9F6EE")}{pin_html}</div>'
            f'<div><div class="k">Packaging · finishes</div><h2>Thoughtful textures.</h2><ul>{rows}</ul>'
            f'<div class="fine">A specification intent: foil, emboss and window registration, laminate and film are confirmed with '
            f'the converter on press proofs.</div></div>')
    return page("finishes", body, 1500, 800, css)


def shelf():
    blocks = ["#7a1f22", "#b3262b", "#e2b22c", "#4b2a6b", "#b08a5a", "#3f7a3a", "#7a1f22", "#e2b22c"]

    def comp(c, w, h):
        return (f'<div style="width:{w}px;height:{h}px;background:{c};border-radius:6px 6px 10px 10px;'
                f'box-shadow:inset 10px 0 18px rgba(0,0,0,.25),inset -10px 0 18px rgba(0,0,0,.25),0 14px 14px rgba(0,0,0,.25);position:relative">'
                f'<div style="position:absolute;left:18%;right:18%;top:30%;height:16%;background:rgba(255,255,255,.22);border-radius:3px"></div></div>')

    top = ([comp(blocks[i], 150, 236) for i in range(3)] + [pouch("v1-1kg", 152, 236, "1kg"), pouch("v1-1kg", 152, 236, "1kg"),
           pouch("v2-1kg", 152, 236, "1kg")] + [comp(blocks[i], 150, 236) for i in range(3, 6)])
    bot = ([comp(blocks[6], 196, 294), comp(blocks[4], 196, 294)] + [pouch("v1-5kg", 196, 294, "5kg", "#2a2f2b"),
           pouch("v2-5kg", 196, 294, "5kg", "#2a2f2b")] + [comp(blocks[7], 196, 294), comp(blocks[5], 196, 294)])
    css = """
    body{background:linear-gradient(180deg,#3b3f3a,#2a2f2b)}
    .sr{position:absolute;left:0;right:0;display:flex;justify-content:center;align-items:flex-end;gap:22px;height:310px}
    .pl{position:absolute;left:0;right:0;height:26px;background:linear-gradient(180deg,#e9e6df,#b9b4aa);box-shadow:0 12px 20px rgba(0,0,0,.45)}
    """
    body = (f'<div class="sr" style="top:60px">{"".join(top)}</div><div class="pl" style="top:372px"></div>'
            f'<div class="sr" style="top:420px">{"".join(bot)}</div><div class="pl" style="top:732px"></div>'
            f'<div class="note" style="position:absolute;left:0;right:0;bottom:14px;color:#c9c4b8">Shelf test, visualisation only. '
            f'Other packs are unbranded colour blocks in the category\'s common colours, not real products.</div>')
    return page("shelf", body, 1808, 820, css)


def main():
    jobs = [hero(), rng(), back(), finishes(), shelf()]
    js = """
const {chromium}=require('playwright');
(async()=>{const jobs=%s;const b=await chromium.launch();
for(const j of jobs){const p=await b.newPage({viewport:{width:j.w,height:j.h},deviceScaleFactor:1.5});
await p.goto(j.url);await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(300);
await p.screenshot({path:j.png,timeout:120000});console.log('wrote',j.png);}
await b.close();})();""" % json.dumps(jobs)
    subprocess.run(["node", "-e", js], check=True, env={**os.environ, "NODE_PATH": NODE_PATH})


if __name__ == "__main__":
    main()
