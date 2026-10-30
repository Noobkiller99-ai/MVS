#!/usr/bin/env python3
"""Pack and shelf visualisations for Sangat (Phase 5 + 7).

Builds HTML scenes from the front-panel renders in packaging/ and screenshots them with Playwright:
  mockups/packs-1kg-5kg.png   both variations, 1 kg stand-up pouch + 5 kg handle bag
  mockups/shelf.png           retail shelf, Sangat facings among neutral, unbranded competitor blocks
  mockups/finishes.png        finishes call-out on the V1 1 kg front

These are VISUALISATIONS, not production proofs: shading, crimps and shelf are drawn in CSS; competitor packs are
deliberately blank colour blocks (the category colours from strategy.md), never real brands.
"""
import base64, os, subprocess, json

HERE = os.path.dirname(os.path.abspath(__file__))
W = os.path.normpath(os.path.join(HERE, ".."))
PK = os.path.join(W, "packaging")
OUT = os.path.join(W, "mockups")
os.makedirs(OUT, exist_ok=True)
FONTS = "/root/.cache/brand-identity/fonts/google/ofl"


def b64(path):
    return "data:image/png;base64," + base64.b64encode(open(path, "rb").read()).decode()


IMG = {k: b64(os.path.join(PK, f"{k}-front.png")) for k in
       ["v1-forest-line-1kg", "v1-forest-line-5kg", "v2-grain-window-1kg", "v2-grain-window-5kg"]}

FONT_CSS = f"""
@font-face{{font-family:Tiro;src:url(file://{FONTS}/tirodevanagarihindi/TiroDevanagariHindi-Regular.ttf)}}
@font-face{{font-family:Mukta;src:url(file://{FONTS}/mukta/Mukta-Regular.ttf);font-weight:400}}
@font-face{{font-family:Mukta;src:url(file://{FONTS}/mukta/Mukta-SemiBold.ttf);font-weight:600}}
"""

# Pouch: the artwork clipped to a pouch silhouette, then curvature, crimp and sheen overlays.
POUCH_CSS = """
.pouch{position:relative;filter:drop-shadow(0 26px 22px rgba(10,20,14,.28)) drop-shadow(0 6px 6px rgba(10,20,14,.18))}
.pouch .body{position:absolute;inset:0;overflow:hidden;
  clip-path:path(var(--clip));background-size:100% 100%;background-image:var(--art)}
.pouch .body::before{content:"";position:absolute;inset:0;mix-blend-mode:multiply;
  background:linear-gradient(90deg,rgba(0,0,0,.30) 0%,rgba(0,0,0,.06) 9%,rgba(0,0,0,0) 22%,rgba(0,0,0,0) 70%,
  rgba(0,0,0,.08) 88%,rgba(0,0,0,.34) 100%)}
.pouch .body::after{content:"";position:absolute;inset:0;mix-blend-mode:screen;
  background:linear-gradient(100deg,rgba(255,255,255,0) 18%,rgba(255,255,255,.13) 30%,rgba(255,255,255,0) 42%),
  linear-gradient(180deg,rgba(255,255,255,.10) 0%,rgba(255,255,255,0) 14%,rgba(255,255,255,0) 86%,rgba(0,0,0,.0) 100%)}
.pouch .crimp{position:absolute;left:0;right:0;top:0;height:var(--crimp);
  background:repeating-linear-gradient(90deg,rgba(255,255,255,.10) 0 2px,rgba(0,0,0,.14) 2px 4px);
  clip-path:path(var(--clip));mix-blend-mode:overlay}
.pouch .zip{position:absolute;left:3%;right:3%;top:var(--zip);height:3px;border-radius:2px;
  background:linear-gradient(180deg,rgba(255,255,255,.18),rgba(0,0,0,.28))}
.pouch .base{position:absolute;left:4%;right:4%;bottom:-6px;height:14px;border-radius:50%;
  background:radial-gradient(ellipse at center,rgba(0,0,0,.35),rgba(0,0,0,0) 70%);filter:blur(3px);z-index:-1}
.pouch .handle{position:absolute;left:50%;transform:translateX(-50%);top:var(--handle-top);
  width:var(--handle-w);height:var(--handle-h);border-radius:999px;background:var(--behind);
  box-shadow:inset 0 3px 5px rgba(0,0,0,.35)}
"""


def pouch_clip(w, h, bulge=0.018):
    """Stand-up pouch silhouette: straight crimped top, sides bow out slightly, rounded gusseted base."""
    b = w * bulge
    r = w * 0.05
    return (f"M0 0 L{w} 0 C{w + b} {h * .35} {w + b} {h * .7} {w - r * .2} {h - r} "
            f"Q{w - r * .6} {h} {w - r * 1.6} {h} L{r * 1.6} {h} Q{r * .6} {h} {r * .2} {h - r} "
            f"C{-b} {h * .7} {-b} {h * .35} 0 0 Z")


def pouch(key, w, h, size, behind="#efe8da"):
    """size: '1kg' (crimp + zip) or '5kg' (crimp + handle cut-out)."""
    clip = pouch_clip(w, h)
    mm = h / 280 if size == "1kg" else h / 450
    extra = (f'<div class="zip" style="--zip:{30 * mm:.1f}px"></div>' if size == "1kg" else
             f'<div class="handle" style="--handle-top:{22 * mm:.1f}px;--handle-w:{80 * mm:.1f}px;'
             f'--handle-h:{22 * mm:.1f}px;--behind:{behind}"></div>')
    return (f'<div class="pouch" style="width:{w}px;height:{h}px;--clip:\'{clip}\';--crimp:{12 * mm:.1f}px">'
            f'<div class="body" style="--art:url({IMG[key]})"></div><div class="crimp"></div>{extra}'
            f'<div class="base"></div></div>')


def page(body, w, h, extra_css=""):
    return (f'<!doctype html><meta charset="utf-8"><style>{FONT_CSS}{POUCH_CSS}'
            f'*{{box-sizing:border-box}}html,body{{margin:0;width:{w}px;height:{h}px;overflow:hidden}}'
            f'body{{font-family:Mukta,sans-serif;color:#131F18}}{extra_css}</style>{body}')


def packs():
    css = """
    body{background:radial-gradient(120% 90% at 50% 20%,#F6F1E5 0%,#E7DCC4 70%,#d9ccb1 100%)}
    .row{position:absolute;left:0;right:0;top:120px;display:flex;justify-content:center;align-items:flex-end;gap:56px}
    .label{position:absolute;left:0;right:0;top:44px;text-align:center;font:600 13px Mukta;letter-spacing:.16em;
      text-transform:uppercase;color:#4C5951}
    .cap{position:absolute;top:752px;font:600 12px Mukta;letter-spacing:.16em;text-transform:uppercase;color:#4C5951;
      text-align:center}
    .note{position:absolute;left:0;right:0;bottom:22px;text-align:center;font:400 13px Mukta;color:#4C5951}
    """
    row = (pouch("v1-forest-line-5kg", 400, 600, "5kg", "#E7DCC4") + pouch("v1-forest-line-1kg", 270, 420, "1kg") +
           pouch("v2-grain-window-1kg", 270, 420, "1kg") + pouch("v2-grain-window-5kg", 400, 600, "5kg", "#E7DCC4"))
    caps = ('<div class="cap" style="left:150px;width:400px">V1 Forest Line · 5 kg</div>'
            '<div class="cap" style="left:606px;width:270px">V1 Forest Line · 1 kg</div>'
            '<div class="cap" style="left:932px;width:270px">V2 Grain Window · 1 kg</div>'
            '<div class="cap" style="left:1258px;width:400px">V2 Grain Window · 5 kg</div>')
    body = (f'<div class="label">Sangat · packaging visualisation</div><div class="row">{row}</div>'
            f'<div style="position:absolute;left:0;right:0;top:722px;height:0;background:rgba(0,0,0,.08)"></div>'
            f'{caps}<div class="note">Visualisation only, not a print proof. Pack sizes, materials and every '
            f'regulatory panel are placeholders pending the converter\'s dielines and FSSAI review.</div>')
    return page(body, 1808, 960, css)


def shelf():
    # Neutral category blocks (strategy.md shelf map): maroon+gold, red, yellow, purple, kraft, leaf green.
    blocks = ["#7a1f22", "#b3262b", "#e2b22c", "#4b2a6b", "#b08a5a", "#3f7a3a", "#7a1f22", "#e2b22c"]

    def comp(c, w, h):
        return (f'<div style="width:{w}px;height:{h}px;background:{c};border-radius:6px 6px 10px 10px;'
                f'box-shadow:inset 10px 0 18px rgba(0,0,0,.25),inset -10px 0 18px rgba(0,0,0,.25),'
                f'0 14px 14px rgba(0,0,0,.25);position:relative">'
                f'<div style="position:absolute;left:18%;right:18%;top:30%;height:16%;background:rgba(255,255,255,.22);'
                f'border-radius:3px"></div></div>')

    def shelf_row(items, top):
        return (f'<div class="shelfrow" style="top:{top}px">{"".join(items)}</div>'
                f'<div class="plank" style="top:{top + 312}px"></div>')

    top_row = ([comp(blocks[i], 150, 236) for i in range(3)] +
               [pouch("v1-forest-line-1kg", 152, 236, "1kg"), pouch("v1-forest-line-1kg", 152, 236, "1kg"),
                pouch("v2-grain-window-1kg", 152, 236, "1kg")] +
               [comp(blocks[i], 150, 236) for i in range(3, 6)])
    bot_row = ([comp(blocks[6], 196, 294), comp(blocks[4], 196, 294)] +
               [pouch("v1-forest-line-5kg", 196, 294, "5kg", "#2a2f2b"),
                pouch("v2-grain-window-5kg", 196, 294, "5kg", "#2a2f2b")] +
               [comp(blocks[7], 196, 294), comp(blocks[5], 196, 294)])
    css = """
    body{background:linear-gradient(180deg,#3b3f3a,#2a2f2b)}
    .shelfrow{position:absolute;left:0;right:0;display:flex;justify-content:center;align-items:flex-end;gap:22px;height:310px}
    .plank{position:absolute;left:0;right:0;height:26px;background:linear-gradient(180deg,#e9e6df,#b9b4aa);
      box-shadow:0 12px 20px rgba(0,0,0,.45)}
    .light{position:absolute;inset:0;pointer-events:none;
      background:radial-gradient(70% 60% at 50% 30%,rgba(255,248,230,.10),rgba(0,0,0,.25))}
    .note{position:absolute;left:0;right:0;bottom:14px;text-align:center;font:400 13px Mukta;color:#c9c4b8}
    """
    body = (shelf_row(top_row, 60) + shelf_row(bot_row, 420) + '<div class="light"></div>'
            '<div class="note">Shelf test, visualisation only. Other packs are unbranded colour blocks in the '
            'category\'s common colours (maroon, red, yellow, purple, kraft, leaf green), not real products.</div>')
    return page(body, 1808, 820, css)


def finishes():
    items = [
        ("1", "Soft-touch matte laminate", "Whole pouch. Lets the forest read deep and calm, not glossy."),
        ("2", "Hot-foil gold", "The hanging line and the bindu only. One foil, never on type below 8 pt."),
        ("3", "Spot UV (raised gloss)", "The three grains on V1: catches light like polished rice on matte."),
        ("4", "Blind deboss", "The chatai weave on gussets and side panels: felt, not shouted."),
        ("5", "Clear window (V2)", "The three grains cut as windows; the real rice is the illustration."),
    ]
    rows = "".join(f'<li><b>{n}</b><div><h4>{t}</h4><p>{d}</p></div></li>' for n, t, d in items)
    pins = [(88, 26.2, "2"), (67, 36, "3"), (12, 60, "1"), (56, 93, "2")]
    pin_html = "".join(f'<span class="pin" style="left:{x}%;top:{y}%">{n}</span>' for x, y, n in pins)
    css = """
    body{background:#F6F1E5;display:flex;align-items:center;gap:80px;padding:60px 90px}
    .wrap{position:relative}
    .pin{position:absolute;width:30px;height:30px;margin:-15px 0 0 -15px;border-radius:50%;background:#F6F1E5;
      color:#1E3A2F;font:600 14px/30px Mukta;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,.35);z-index:3}
    h2{font:400 44px/1.05 Tiro;color:#1E3A2F;margin:0 0 8px}
    .k{font:600 12px Mukta;letter-spacing:.16em;text-transform:uppercase;color:#896126;margin-bottom:26px}
    ul{list-style:none;margin:0;padding:0;max-width:620px}
    li{display:flex;gap:18px;padding:16px 0;border-top:1px solid rgba(30,58,47,.18)}
    li b{flex:none;width:30px;height:30px;border-radius:50%;background:#1E3A2F;color:#F6F1E5;font:600 14px/30px Mukta;
      text-align:center}
    h4{margin:0;font:600 17px Mukta;color:#131F18}
    p{margin:2px 0 0;font:400 15px/1.5 Mukta;color:#4C5951}
    .note{margin-top:22px;font:400 13px/1.5 Mukta;color:#4C5951}
    """
    body = (f'<div class="wrap">{pouch("v1-forest-line-1kg", 400, 622, "1kg")}{pin_html}</div>'
            f'<div><div class="k">Packaging · finishes</div><h2>Felt before it is read.</h2><ul>{rows}</ul>'
            f'<div class="note">Finishes are a specification intent. Foil, UV and deboss registration, laminate '
            f'and window film must be confirmed with the converter on press proofs.</div></div>')
    return page(body, 1500, 760, css)


def main():
    scenes = {"packs-1kg-5kg": (packs(), 1808, 960), "shelf": (shelf(), 1808, 820),
              "finishes": (finishes(), 1500, 760)}
    jobs = []
    for name, (html, w, h) in scenes.items():
        p = os.path.join(OUT, f"{name}.html")
        open(p, "w").write(html)
        jobs.append({"html": p, "png": os.path.join(OUT, f"{name}.png"), "w": w, "h": h})
    js = """
const {chromium}=require('playwright');
(async()=>{const jobs=%s;const b=await chromium.launch();
for(const j of jobs){const p=await b.newPage({viewport:{width:j.w,height:j.h},deviceScaleFactor:1.5});
await p.goto('file://'+j.html);await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(300);
await p.screenshot({path:j.png,timeout:120000});console.log('wrote',j.png);}
await b.close();})();""" % json.dumps(jobs)
    subprocess.run(["node", "-e", js], check=True, env={**os.environ, "NODE_PATH": subprocess.run(
        ["npm", "root", "-g"], capture_output=True, text=True).stdout.strip()})


if __name__ == "__main__":
    main()
