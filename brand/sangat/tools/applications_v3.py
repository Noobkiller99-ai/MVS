#!/usr/bin/env python3
"""Sangat v3 applications, rendered to applications-v3/*.png:

  website-desktop.png   hero, why it matters (SRP figures), closing with the 3D pack (real screenshots)
  website-mobile.png    mobile site + the QR landing page (story.html)
  stationery.png        business card front/back, letterhead, compliments slip
  social.png            Instagram post, SRP figure post, story, avatars
  monochrome.png        one-colour, foil, emboss and stamp uses

Needs the site server on :8080 (npm start) and fresh smoke-test screenshots (npm test).
Names, numbers and addresses are PLACEHOLDERS.
"""
import base64, json, os, re, subprocess
from packaging_v2 import sprig, C
from packaging_v3 import landscape

HERE = os.path.dirname(os.path.abspath(__file__))
W = os.path.normpath(os.path.join(HERE, ".."))
SITE = os.path.normpath(os.path.join(W, "..", ".."))
OUT = os.path.join(W, "applications-v3")
LOGO = os.path.join(W, "deliverables/logo/svg")
FONTDIR = os.path.join(W, "v2/fonts")
os.makedirs(OUT, exist_ok=True)
NODE_PATH = subprocess.run(["npm", "root", "-g"], capture_output=True, text=True).stdout.strip()


def logo(name, style=""):
    s = open(os.path.join(LOGO, f"sangat-{name}.svg")).read()
    s = re.sub(r"<title>.*?</title>", "", s)
    return s.replace("<svg ", f'<svg style="display:block;{style}" ', 1)


def png(path):
    return "data:image/png;base64," + base64.b64encode(open(path, "rb").read()).decode()


def land(w, h, mode="day", align="xMidYMid"):
    """The pack landscape at its own proportions (1000 x 600), cropped to fill a w x h box."""
    return (f'<svg viewBox="0 120 1000 480" style="display:block;width:100%;height:100%" preserveAspectRatio="{align} slice">'
            f'{landscape(0, 0, 1000, 600, mode=mode, pid=f"a{w}{h}{mode}")}</svg>')


FONT_CSS = f"""
@font-face{{font-family:"Playfair Display";src:url(file://{FONTDIR}/playfair-display-latin-400-normal.woff2);font-weight:400}}
@font-face{{font-family:"Playfair Display";src:url(file://{FONTDIR}/playfair-display-latin-600-normal.woff2);font-weight:600}}
@font-face{{font-family:"Playfair Display";src:url(file://{FONTDIR}/playfair-display-latin-400-italic.woff2);font-weight:400;font-style:italic}}
@font-face{{font-family:"Inter";src:url(file://{FONTDIR}/inter-latin-400-normal.woff2);font-weight:400}}
@font-face{{font-family:"Inter";src:url(file://{FONTDIR}/inter-latin-600-normal.woff2);font-weight:600}}
@font-face{{font-family:"Libre Caslon Text";src:url(file://{FONTDIR}/libre-caslon-text-latin-400-normal.woff2);font-weight:400}}
@font-face{{font-family:"Libre Caslon Text";src:url(file://{FONTDIR}/libre-caslon-text-latin-400-italic.woff2);font-weight:400;font-style:italic}}
@font-face{{font-family:"Noto Serif Devanagari";src:url(file://{FONTDIR}/noto-serif-devanagari-devanagari-400-normal.woff2)}}
*{{box-sizing:border-box}} body{{margin:0;font-family:Inter,sans-serif;color:#13231C}}
.cap{{font:600 12px Inter;letter-spacing:.16em;text-transform:uppercase;color:#7A5F3B;margin-top:14px;text-align:center}}
.note{{font:400 13px/1.5 Inter;color:#5B4F3E;text-align:center}}
.pf{{font-family:"Playfair Display",serif}}
"""


def page(name, body, w, h, css="", bg="#F1ECE0"):
    p = os.path.join(OUT, f"{name}.html")
    open(p, "w").write(f'<!doctype html><meta charset="utf-8"><style>{FONT_CSS}'
                       f'html,body{{width:{w}px;height:{h}px;overflow:hidden;background:{bg}}}{css}</style>{body}')
    return {"url": "file://" + p, "png": os.path.join(OUT, f"{name}.png"), "w": w, "h": h}


def website_desktop():
    shots = [png(os.path.join(SITE, f"test-output/desktop-{n}.png")) for n in ("00-hero", "04-why", "11-closing")]
    frame = lambda s: (f'<div class="br"><div class="bar"><i></i><i></i><i></i><span>sangat · story website</span></div><img src="{s}"></div>')
    css = """body{display:flex;gap:28px;justify-content:center;align-items:center;padding:40px 30px 70px}
    .br{width:560px;border-radius:12px;overflow:hidden;background:#fff;box-shadow:0 26px 50px rgba(15,61,46,.22)}
    .bar{height:28px;background:#ECE7DA;display:flex;align-items:center;gap:6px;padding:0 12px}
    .bar i{width:9px;height:9px;border-radius:50%;background:#CFC6B2}
    .bar span{margin-left:14px;font:400 11px Inter;color:#4F5A52;background:#F9F6EE;border-radius:6px;padding:1px 12px}
    .br img{display:block;width:100%} .w{position:absolute;left:0;right:0;bottom:22px}"""
    body = "".join(frame(s) for s in shots) + ('<div class="w note">Website, desktop: the Sangat wordmark in the header, '
            'Playfair Display, Libre Caslon Text and Inter, the SRP figures in "Why it matters" and the 3D pack wearing the V1 front. '
            'Real screenshots of the built site.</div>')
    return page("website-desktop", body, 1800, 560, css)


def website_mobile():
    story = os.path.join(OUT, "_story-mobile.png")
    js = ("const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});"
          f"await p.goto('http://localhost:8080/story.html');await p.evaluate(()=>document.fonts.ready);await p.screenshot({{path:'{story}',fullPage:true}});await b.close();}})();")
    subprocess.run(["node", "-e", js], check=True, env={**os.environ, "NODE_PATH": NODE_PATH})
    shots = [png(os.path.join(SITE, f"test-output/{n}.png")) for n in ("mobile-00-hero", "mobile-04-why", "mobile-11-closing")] + [png(story)]
    caps = ["Hero", "Why it matters: SRP figures", "Closing: the pack", "QR landing page (story.html)"]
    css = """body{display:flex;gap:40px;justify-content:center;align-items:flex-start;padding:40px 30px}
    figure{margin:0} .ph{width:300px;height:640px;border-radius:44px;background:#13231C;padding:12px;box-shadow:0 30px 50px rgba(15,61,46,.28)}
    .scr{width:100%;height:100%;border-radius:34px;overflow:hidden;background:#F9F6EE} .scr img{width:100%;display:block}
    .w{position:absolute;left:0;right:0;bottom:16px}"""
    body = "".join(f'<figure><div class="ph"><div class="scr"><img src="{s}"></div></div><div class="cap">{c}</div></figure>'
                   for s, c in zip(shots, caps)) + ('<div class="w note">Mobile site and the QR landing page. Batch fields '
                   'stay labelled placeholders until MVS confirms them per batch.</div>')
    return page("website-mobile", body, 1500, 800, css)


def stationery():
    front = (f'<div class="card" style="background:{C["forest"]}"><div class="mid">'
             f'{logo("stacked-colour-reversed", "height:150px")}</div></div>')
    back = (f'<div class="card" style="background:{C["ivory"]};border:1px solid #E3DCCB"><div class="who"><b>NAME PLACEHOLDER</b>'
            f'<span>Role placeholder</span></div><div class="how"><span>+91 00000 00000 · PLACEHOLDER</span>'
            f'<span>name@domain · PLACEHOLDER</span><span>Address line · PLACEHOLDER</span></div>'
            f'<div class="sym">{logo("symbol-colour", "height:58px")}</div><div class="strip">{land(425, 60)}</div></div>')
    letter = (f'<div class="a4"><div class="ahead">{logo("primary-colour", "height:62px")}</div>'
              f'<div class="rule"></div><div class="body"><p class="d">Date placeholder</p><p>Dear reader,</p>'
              + "".join('<div class="txt"></div>' for _ in range(8)) +
              f'<p style="margin-top:16px">Name placeholder<br><span style="color:#5B4F3E">Role placeholder</span></p></div>'
              f'<div class="afoot">{land(420, 70)}<div class="aft"><span>Sangat · in partnership with Manav Vikas Sansthan · Address placeholder · FSSAI Lic. No. placeholder</span></div></div></div>')
    slip = (f'<div class="slip"><div class="sc">{logo("wordmark-colour", "height:58px")}'
            f'<div style="font:400 22px \'Libre Caslon Text\';letter-spacing:.06em;color:{C["forest"]};margin-top:14px">With compliments</div>'
            f'<div style="font:400 14px \'Noto Serif Devanagari\';color:#7A5F3B;margin-top:4px">साँझी सोच, सुनहरा कल</div></div>'
            f'<div class="sl">{land(150, 200)}</div></div>')
    css = f"""body{{display:grid;grid-template-columns:auto auto;gap:36px 60px;justify-content:center;align-content:center;padding:30px}}
    .card{{width:425px;height:275px;border-radius:10px;position:relative;overflow:hidden;box-shadow:0 18px 30px rgba(15,61,46,.2)}}
    .mid{{position:absolute;inset:0;display:grid;place-items:center}}
    .who{{position:absolute;left:30px;top:34px}} .who b{{display:block;font:600 15px Inter;letter-spacing:.14em;color:{C['forest']}}}
    .who span{{font:400 13px Inter;color:#5B4F3E}}
    .how{{position:absolute;left:30px;top:112px;display:grid;gap:3px;font:400 12.5px Inter}}
    .sym{{position:absolute;right:26px;top:30px}}
    .strip{{position:absolute;left:0;right:0;bottom:0;height:60px}}
    .a4{{grid-row:span 2;width:420px;height:594px;background:#FCFAF4;position:relative;box-shadow:0 18px 30px rgba(15,61,46,.2);overflow:hidden}}
    .ahead{{position:absolute;left:36px;top:34px}} .rule{{position:absolute;left:36px;right:36px;top:128px;height:1px;background:{C['gold']}}}
    .body{{position:absolute;left:36px;right:36px;top:150px;font:400 11px/1.6 Inter}} .body .d{{color:#5B4F3E}}
    .txt{{height:7px;background:#E9E3D4;border-radius:3px;margin:9px 0}} .txt:nth-child(4n){{width:70%}}
    .afoot{{position:absolute;left:0;right:0;bottom:0;height:70px}} .aft{{position:absolute;left:0;right:0;bottom:0;background:{C['forest']};
      color:#E2CB97;font:400 8.5px Inter;letter-spacing:.04em;padding:6px 36px}}
    .slip{{width:425px;height:200px;position:relative;overflow:hidden;background:{C['ivory']};box-shadow:0 18px 30px rgba(15,61,46,.2)}}
    .sc{{position:absolute;left:30px;top:34px}} .sl{{position:absolute;right:0;top:0;bottom:0;width:150px}}"""
    body = (f'<div style="display:grid;gap:26px"><div>{front}<div class="cap">Business card · front (85 × 55 mm)</div></div>'
            f'<div>{back}<div class="cap">Back · details are placeholders</div></div></div>'
            f'<div>{letter}<div class="cap">Letterhead · A4</div></div>'
            f'<div>{slip}<div class="cap">Compliments slip · DL</div></div>'
            f'<div class="note" style="align-self:center;max-width:380px;text-align:left">Print: Forest Green and Sunehra Gold as '
            f'spot colours or hot-foil gold on the card front; uncoated 350 gsm card, 100 gsm letterhead.</div>')
    return page("stationery", body, 1060, 960, css)


def social():
    post = (f'<div class="post" style="background:{C["forest"]}"><div class="pt">'
            f'<div style="font:500 20px \'Noto Serif Devanagari\';color:#E2CB97">हर दाने की अपनी कहानी</div>'
            f'<div class="pf" style="font-size:58px;line-height:1.02;color:#F9F6EE;font-weight:600;margin-top:10px">Every grain</div>'
            f'<div class="pf" style="font-size:58px;line-height:1.02;color:#E2CB97;font-style:italic">has a story.</div></div>'
            f'<div class="pl">{land(540, 230, "dusk")}</div><div class="pw">{logo("wordmark-colour-reversed", "height:48px")}</div></div>')
    stat = (f'<div class="post" style="background:{C["ivory"]}"><div class="pt">'
            f'<div style="font:600 13px Inter;letter-spacing:.16em;color:#7A5F3B">WHY IT MATTERS</div>'
            f'<div class="pf" style="font-size:120px;line-height:1;color:{C["forest"]};font-weight:600;margin-top:18px">19.7%</div>'
            f'<div class="pf" style="font-size:30px;line-height:1.15;color:{C["forest"]};margin-top:6px"><i>less water for every<br>kilo of rice</i></div>'
            f'<div style="font:400 15px/1.5 Inter;color:#4F5A52;margin-top:18px">SRP farms used 1,490 litres per kg of rice;<br>non-SRP farms used 1,855.</div></div>'
            f'<div style="position:absolute;left:52px;right:52px;bottom:34px;display:flex;justify-content:space-between;align-items:flex-end">'
            f'{logo("wordmark-colour", "height:40px")}<span style="font:400 10.5px/1.4 Inter;color:#7A5F3B;text-align:right">Source: MVS SRP vs non-SRP<br>field comparison</span></div></div>')
    story = (f'<div class="story" style="background:{C["ivory"]}"><div class="sc">{logo("symbol-colour", "height:84px;margin:0 auto")}'
             f'<div class="pf" style="font-size:30px;line-height:1.1;color:{C["forest"]};margin-top:20px">Scan the back<br><i style="color:#7A5F3B">of your pack.</i></div>'
             f'<div style="font:400 14px/1.5 Inter;color:#4F5A52;margin-top:10px">Meet the farmers. Discover the practices behind your rice.</div>'
             f'<div class="sb"><i></i>Link sticker · placeholder</div></div><div class="sl2">{land(304, 170)}</div></div>')
    av = lambda bg, way, b="": f'<div class="av" style="background:{bg};{b}">{logo(way, "height:64%;width:auto")}</div>'
    css = f"""body{{display:flex;gap:40px;justify-content:center;align-items:center;padding:30px}}
    .post{{width:480px;height:480px;position:relative;overflow:hidden;box-shadow:0 24px 40px rgba(15,61,46,.25)}}
    .pt{{position:absolute;left:46px;right:46px;top:46px}} .pl{{position:absolute;left:0;right:0;bottom:0;height:200px}}
    .pw{{position:absolute;right:40px;bottom:30px}}
    .story{{width:270px;height:480px;position:relative;overflow:hidden;box-shadow:0 24px 40px rgba(15,61,46,.25)}}
    .sc{{position:absolute;left:24px;right:24px;top:56px;text-align:center}} .sl2{{position:absolute;left:0;right:0;bottom:0;height:150px}}
    .sb{{display:inline-flex;gap:8px;align-items:center;margin-top:20px;background:#fff;border-radius:999px;padding:8px 14px;font:600 11px Inter;color:{C['forest']};box-shadow:0 4px 12px rgba(0,0,0,.1)}}
    .sb i{{width:8px;height:8px;border-radius:50%;background:{C['gold']}}}
    .avs{{display:grid;gap:24px;justify-items:center}} .av{{width:140px;height:140px;border-radius:50%;display:grid;place-items:center;overflow:hidden}}"""
    body = (f'<div>{post}<div class="cap">Instagram post · 1080 × 1080</div></div>'
            f'<div>{stat}<div class="cap">Impact post · SRP figure with source</div></div>'
            f'<div>{story}<div class="cap">Story · 1080 × 1920</div></div>'
            f'<div class="avs">{av(C["forest"], "symbol-colour-reversed")}{av(C["ivory"], "symbol-colour", "border:1px solid #D9D4C8")}'
            f'<div class="cap" style="margin:0">Avatar</div></div>')
    return page("social", body, 1640, 600, css)


def monochrome():
    tiles = [("#FFFFFF", "horizontal-black", "Black · single-colour print", "#5B4F3E"),
             ("#000000", "horizontal-white", "White · reversed on photography or black", "#bbb"),
             (C["forest"], "horizontal-white", "Ivory on forest (one ink + paper)", "#D3D7CC"),
             ("#E9E3D4", "horizontal-forest", "Forest only · one-ink flexo, jute or kraft sack", "#5B4F3E")]
    cells = "".join(f'<div class="t" style="background:{bg}">{logo(w, "width:300px;height:auto")}<div class="tc" style="color:{fc}">{t}</div></div>'
                    for bg, w, t, fc in tiles)
    foil = (f'<div class="t" style="background:linear-gradient(135deg,#145240,#0A2E22)"><div style="filter:drop-shadow(0 1px 0 rgba(255,255,255,.35)) drop-shadow(0 -1px 0 rgba(0,0,0,.4))">'
            f'{logo("horizontal-gold", "width:300px;height:auto;filter:saturate(1.2) brightness(1.12)")}</div><div class="tc" style="color:#D3D7CC">Hot-foil gold on matte forest</div></div>')
    emb = (f'<div class="t" style="background:#F4EFE3"><div style="filter:drop-shadow(1px 1px 0 rgba(255,255,255,.95)) drop-shadow(-1px -1px 0 rgba(0,0,0,.16))">'
           f'{logo("horizontal-colour", "width:300px;height:auto;filter:brightness(0) invert(.95) sepia(.12)")}</div><div class="tc">Blind emboss (no ink)</div></div>')
    stamp = (f'<div class="t" style="background:#D8C7A2"><div style="opacity:.82;transform:rotate(-2deg)">{logo("stacked-forest", "height:140px")}</div>'
             f'<div class="tc">Stamp / jute sack stencil</div></div>')
    css = """body{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;padding:30px}
    .t{height:230px;border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px}
    .tc{font:400 13px Inter;color:#5B4F3E}"""
    return page("monochrome", cells + foil + emb + stamp, 1500, 552, css, "#F9F6EE")


def main():
    jobs = [website_desktop(), website_mobile(), stationery(), social(), monochrome()]
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
