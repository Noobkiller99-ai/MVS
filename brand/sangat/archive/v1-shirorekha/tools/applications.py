#!/usr/bin/env python3
"""Sangat brand applications (Phase 7), rendered to applications/*.png:

  website-desktop.png   site hero + 3D pack in a browser frame (real screenshots from the smoke test)
  website-mobile.png    mobile site + QR landing page (story.html) in phone frames
  stationery.png        business card front/back, letterhead, compliments slip
  social.png            Instagram post, story, profile avatar
  monochrome.png        one-colour, foil, deboss and stamp uses

Needs the site server on :8080 (npm start) for the story.html capture.
Names, numbers and addresses are PLACEHOLDERS, never real people's details.
"""
import base64, json, os, re, subprocess

HERE = os.path.dirname(os.path.abspath(__file__))
W = os.path.normpath(os.path.join(HERE, ".."))
SITE = os.path.normpath(os.path.join(W, "..", ".."))
OUT = os.path.join(W, "applications")
LOGO = os.path.join(W, "deliverables/logo/svg")
FONTS = "/root/.cache/brand-identity/fonts/google/ofl"
os.makedirs(OUT, exist_ok=True)
NODE_PATH = subprocess.run(["npm", "root", "-g"], capture_output=True, text=True).stdout.strip()

C = dict(forest="#1E3A2F", night="#13241B", ivory="#F6F1E5", husk="#E7DCC4", sage="#8E9F86", gold="#A07A35",
         gold_ui="#896126", gold_dark="#C9A35A", ink="#131F18", muted="#4C5951")


def logo(name, style=""):
    s = open(os.path.join(LOGO, f"sangat-{name}.svg")).read()
    s = re.sub(r'\s(id|data-[a-z-]+)="[^"]*"', "", s)
    return s.replace("<svg ", f'<svg style="display:block;{style}" ', 1)


def png(path):
    return "data:image/png;base64," + base64.b64encode(open(path, "rb").read()).decode()


def chatai(colour, size=40):
    t = open(os.path.join(W, "system/graphics/pattern-chatai-tile.svg")).read().replace("currentColor", colour)
    return f"url('data:image/svg+xml;base64,{base64.b64encode(t.encode()).decode()}') 0 0/{size}px {size}px"


def shoot(jobs):
    js = """
const {chromium}=require('playwright');
(async()=>{const jobs=%s;const b=await chromium.launch();
for(const j of jobs){const p=await b.newPage({viewport:{width:j.w,height:j.h},deviceScaleFactor:j.dpr||1.5});
await p.goto(j.url);await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(j.wait||300);
await p.screenshot({path:j.png,timeout:120000,fullPage:!!j.full});console.log('wrote',j.png);}
await b.close();})();""" % json.dumps(jobs)
    subprocess.run(["node", "-e", js], check=True, env={**os.environ, "NODE_PATH": NODE_PATH})


FONT_CSS = f"""
@font-face{{font-family:Tiro;src:url(file://{FONTS}/tirodevanagarihindi/TiroDevanagariHindi-Regular.ttf)}}
@font-face{{font-family:Mukta;src:url(file://{FONTS}/mukta/Mukta-Regular.ttf);font-weight:400}}
@font-face{{font-family:Mukta;src:url(file://{FONTS}/mukta/Mukta-SemiBold.ttf);font-weight:600}}
*{{box-sizing:border-box}} body{{margin:0;font-family:Mukta,sans-serif;color:{C['ink']}}}
.cap{{font:600 12px Mukta;letter-spacing:.16em;text-transform:uppercase;color:{C['muted']};margin-top:14px;text-align:center}}
.note{{font:400 13px/1.5 Mukta;color:{C['muted']};text-align:center}}
.lbl{{font:600 10px Mukta;letter-spacing:.16em;text-transform:uppercase}}
"""


def page(name, body, w, h, css="", bg=C["ivory"]):
    p = os.path.join(OUT, f"{name}.html")
    open(p, "w").write(f'<!doctype html><meta charset="utf-8"><style>{FONT_CSS}'
                       f'html,body{{width:{w}px;height:{h}px;overflow:hidden;background:{bg}}}{css}</style>{body}')
    return {"url": "file://" + p, "png": os.path.join(OUT, f"{name}.png"), "w": w, "h": h}


def website_desktop():
    shots = [png(os.path.join(SITE, f"test-output/desktop-{n}.png")) for n in ("00-hero", "11-closing")]
    frame = lambda src: (f'<div class="br"><div class="bar"><i></i><i></i><i></i><span>sangat · story website</span></div>'
                         f'<img src="{src}"></div>')
    css = """
    body{display:flex;gap:44px;justify-content:center;align-items:center;padding:40px}
    .br{width:820px;border-radius:14px;overflow:hidden;background:#fff;box-shadow:0 30px 60px rgba(19,36,27,.22)}
    .bar{height:34px;background:#ECE7DA;display:flex;align-items:center;gap:7px;padding:0 14px}
    .bar i{width:11px;height:11px;border-radius:50%;background:#CFC6B2}
    .bar span{margin-left:18px;font:400 12px Mukta;color:#4C5951;background:#F6F1E5;border-radius:6px;padding:2px 14px}
    .br img{display:block;width:100%}
    .wrap{position:absolute;left:0;right:0;bottom:16px}
    """
    body = (frame(shots[0]) + frame(shots[1]) + '<div class="wrap note">Website, desktop: header lockup, Sangat type and '
            'colour tokens, and the 3D pack in the closing chapter carries the V1 Forest Line front. Real screenshots of '
            'the built site (index.html).</div>')
    return page("website-desktop", body, 1780, 640, css, "#E7DCC4")


def website_mobile():
    story = os.path.join(OUT, "_story-mobile.png")
    shoot([{"url": "http://localhost:8080/story.html", "png": story, "w": 390, "h": 844, "dpr": 2, "full": True}])
    shots = [png(os.path.join(SITE, f"test-output/{n}.png")) for n in
             ("mobile-00-hero", "mobile-04-why", "mobile-nowebgl-05-closing")] + [png(story)]
    caps = ["Hero", "Why it matters", "Footer: lockup + tagline", "QR landing page (story.html)"]
    phone = lambda src, cap, top=False: (f'<figure><div class="ph"><div class="scr"><img src="{src}"></div></div>'
                                         f'<div class="cap">{cap}</div></figure>')
    css = """
    body{display:flex;gap:40px;justify-content:center;align-items:flex-start;padding:40px 30px}
    figure{margin:0}
    .ph{width:300px;height:640px;border-radius:44px;background:#131F18;padding:12px;box-shadow:0 30px 50px rgba(19,36,27,.28)}
    .scr{width:100%;height:100%;border-radius:34px;overflow:hidden;background:#F6F1E5}
    .scr img{width:100%;display:block}
    .wrap{position:absolute;left:0;right:0;bottom:16px}
    """
    body = "".join(phone(s, c) for s, c in zip(shots, caps)) + (
        '<div class="wrap note">Mobile site and the QR landing page. Batch fields on the landing page are labelled '
        'placeholders until MVS confirms them per batch.</div>')
    return page("website-mobile", body, 1500, 800, css, "#E7DCC4")


def stationery():
    card = lambda inner, bg, extra="": (f'<div class="card" style="background:{bg};{extra}">{inner}</div>')
    front = card(f'<div class="mid">{logo("stacked-colour-reversed", "height:118px")}</div>', C["forest"])
    back = card(f'<div class="line" style="background:{C["gold"]}"></div><div class="who">'
                f'<b>NAME PLACEHOLDER</b><span>Role placeholder</span></div>'
                f'<div class="how"><span>+91 00000 00000 · PLACEHOLDER</span><span>name@domain · PLACEHOLDER</span>'
                f'<span>Address line · PLACEHOLDER</span></div>'
                f'<div class="tg">Sanjhi Soch, Sunehra Kal</div>', C["ivory"], "border:1px solid #E1D7C1")
    letter = (f'<div class="a4"><div class="aline"></div><div class="ahead">{logo("horizontal-colour", "height:22px;width:auto")}'
              f'<div class="lbl" style="color:{C["gold_ui"]};margin-top:10px">In partnership with Manav Vikas Sansthan</div></div>'
              f'<div class="body"><p class="d">Date placeholder</p><p>Dear reader,</p>'
              + "".join('<div class="txt"></div>' for _ in range(9)) +
              f'<p style="margin-top:18px">Name placeholder<br><span style="color:{C["muted"]}">Role placeholder</span></p></div>'
              f'<div class="afoot"><span>Sangat · Address placeholder · FSSAI Lic. No. placeholder</span>'
              f'<span style="font-family:Tiro;color:{C["forest"]};font-size:12px">Sanjhi Soch, Sunehra Kal</span></div></div>')
    slip = (f'<div class="slip" style="background:{C["husk"]};--pat:{chatai(C["forest"] + "22", 26)}">'
            f'<div class="pat"></div><div class="sc">{logo("symbol-colour", "height:54px")}'
            f'<div style="font:400 26px/1.1 Tiro;color:{C["forest"]}">With compliments</div>'
            f'<div style="font:400 15px Tiro;color:{C["gold_ui"]}">साँझी सोच, सुनहरा कल</div></div></div>')
    css = f"""
    body{{display:grid;grid-template-columns:auto auto;gap:40px 60px;justify-content:center;align-content:center;padding:30px}}
    .card{{width:425px;height:275px;border-radius:10px;position:relative;overflow:hidden;box-shadow:0 18px 30px rgba(19,36,27,.2)}}
    .line{{position:absolute;left:0;right:0;top:34px;height:7px}}
    .mid{{position:absolute;inset:0;display:grid;place-items:center}}
    .who{{position:absolute;left:30px;top:68px}} .who b{{display:block;font:600 15px Mukta;letter-spacing:.14em;color:{C['forest']}}}
    .who span{{font:400 13px Mukta;color:{C['muted']}}}
    .how{{position:absolute;left:30px;top:150px;display:grid;gap:2px;font:400 12.5px Mukta;color:{C['ink']}}}
    .tg{{position:absolute;right:26px;bottom:20px;font:400 14px Tiro;color:{C['gold_ui']}}}
    .a4{{grid-row:span 2;width:420px;height:594px;background:#FBF8F1;position:relative;box-shadow:0 18px 30px rgba(19,36,27,.2)}}
    .aline{{position:absolute;left:0;right:0;top:28px;height:5px;background:{C['gold']}}}
    .ahead{{position:absolute;left:36px;right:36px;top:52px}}
    .body{{position:absolute;left:36px;right:36px;top:130px;font:400 11px/1.6 Mukta}}
    .body .d{{color:{C['muted']}}}
    .txt{{height:7px;background:#E6E0D2;border-radius:3px;margin:9px 0}} .txt:nth-child(5n){{width:70%}}
    .afoot{{position:absolute;left:36px;right:36px;bottom:24px;border-top:1px solid #E1D7C1;padding-top:10px;display:flex;
      justify-content:space-between;align-items:center;font:400 9px Mukta;color:{C['muted']}}}
    .slip{{width:425px;height:200px;position:relative;overflow:hidden;box-shadow:0 18px 30px rgba(19,36,27,.2)}}
    .slip .pat{{position:absolute;right:0;top:0;bottom:0;width:120px;background:var(--pat)}}
    .sc{{position:absolute;left:30px;top:30px;display:grid;gap:8px}}
    .stack{{display:grid;gap:30px}}
    .foot{{grid-column:1/-1}}
    """
    body = (f'<div class="stack"><div>{front}<div class="cap">Business card · front (85 × 55 mm)</div></div>'
            f'<div>{back}<div class="cap">Back · details are placeholders</div></div></div>'
            f'<div class="stack"><div>{letter}<div class="cap">Letterhead · A4</div></div></div>'
            f'<div>{slip}<div class="cap">Compliments slip · DL</div></div>'
            f'<div class="note" style="align-self:center;max-width:380px;text-align:left">Print: Sangat Forest and '
            f'Sunehra Gold as two spot colours (Pantone by printer drawdown), or gold as hot foil on the card front. '
            f'Uncoated 350 gsm card, 100 gsm letterhead.</div>')
    return page("stationery", body, 1060, 960, css, "#E7DCC4")


def social():
    post = (f'<div class="post" style="background:{C["forest"]}"><div class="pl" style="background:{C["gold_dark"]}"></div>'
            f'<div class="pc"><div class="k">The people behind your rice</div>'
            f'<div class="q">Every grain carries <em>someone\'s season of work.</em></div>'
            f'<div class="m">{logo("horizontal-colour-reversed", "height:30px")}</div></div></div>')
    story = (f'<div class="story" style="background:{C["ivory"]}">'
             f'<div class="sp" style="background:{chatai(C["forest"], 60)}"></div>'
             f'<div class="sc">{logo("symbol-colour", "height:120px;margin:0 auto")}'
             f'<div class="sq">Scan the back of your pack.</div>'
             f'<div class="ss">Meet the people and practices behind your rice.</div>'
             f'<div class="sb"><i></i>Link sticker · placeholder</div></div></div>')
    av = lambda bg, way, ring="": (f'<div class="av" style="background:{bg};{ring}">'
                                   f'{logo(way, "height:58%")}</div>')
    css = f"""
    body{{display:flex;gap:56px;justify-content:center;align-items:center;padding:30px}}
    .post{{width:540px;height:540px;position:relative;overflow:hidden;box-shadow:0 24px 40px rgba(19,36,27,.25)}}
    .pl{{position:absolute;left:0;right:0;top:64px;height:12px}}
    .pc{{position:absolute;left:52px;right:52px;top:120px;bottom:48px;display:flex;flex-direction:column}}
    .k{{font:600 13px Mukta;letter-spacing:.16em;text-transform:uppercase;color:{C['gold_dark']}}}
    .q{{font:400 50px/1.06 Tiro;color:{C['ivory']};margin-top:22px}} .q em{{color:{C['gold_dark']}}}
    .m{{margin-top:auto}}
    .story{{width:304px;height:540px;position:relative;overflow:hidden;box-shadow:0 24px 40px rgba(19,36,27,.25)}}
    .sl{{position:absolute;left:0;right:0;top:60px;height:8px}}
    .sp{{position:absolute;left:0;right:0;bottom:0;height:120px;opacity:.12}}
    .sc{{position:absolute;left:28px;right:28px;top:120px;text-align:center}}
    .sq{{font:400 32px/1.08 Tiro;color:{C['forest']};margin-top:26px}}
    .ss{{font:400 15px/1.5 Mukta;color:{C['muted']};margin-top:12px}}
    .sb{{display:inline-flex;gap:8px;align-items:center;margin-top:28px;background:#fff;border-radius:999px;padding:8px 16px;
      font:600 12px Mukta;color:{C['forest']};box-shadow:0 4px 12px rgba(0,0,0,.1)}}
    .sb i{{width:9px;height:9px;border-radius:50%;background:{C['gold']}}}
    .avs{{display:grid;gap:26px;justify-items:center}}
    .av{{width:160px;height:160px;border-radius:50%;display:grid;place-items:center;overflow:hidden}}
    .av svg{{height:58%;width:auto}}
    """
    body = (f'<div>{post}<div class="cap">Instagram post · 1080 × 1080</div></div>'
            f'<div>{story}<div class="cap">Story · 1080 × 1920</div></div>'
            f'<div class="avs">{av(C["forest"], "symbol-small-colour-reversed")}'
            f'{av(C["ivory"], "symbol-small-colour", "border:1px solid #DDD3BC")}'
            f'<div class="cap" style="margin:0">Profile avatar · forest / ivory</div></div>')
    return page("social", body, 1340, 660, css, "#E7DCC4")


def monochrome():
    tiles = [
        ("#FFFFFF", "horizontal-black", "Black · newspaper, fax, single-colour print"),
        ("#000000", "horizontal-white", "White · reversed on photography or black"),
        (C["forest"], "horizontal-white", "Ivory on forest (one ink + paper)"),
        ("#E7DCC4", "horizontal-forest", "Forest only · one-ink flexo on husk / kraft sack"),
    ]
    foil = (f'<div class="t" style="background:linear-gradient(135deg,#21402F,#13241B)">'
            f'<div style="filter:drop-shadow(0 1px 0 rgba(255,255,255,.35)) drop-shadow(0 -1px 0 rgba(0,0,0,.4))">'
            f'{logo("horizontal-gold", "width:300px;height:auto;filter:saturate(1.25) brightness(1.15)")}</div>'
            f'<div class="tc" style="color:#CFCDBE">Hot-foil gold on soft-touch forest</div></div>')
    deboss = (f'<div class="t" style="background:#EDE6D6"><div style="filter:drop-shadow(1px 1px 0 rgba(255,255,255,.9)) '
              f'drop-shadow(-1px -1px 0 rgba(0,0,0,.18))">{logo("horizontal-colour", "width:300px;height:auto;filter:brightness(0) invert(.93) sepia(.15)")}'
              f'</div><div class="tc">Blind deboss (no ink)</div></div>')
    stamp = (f'<div class="t" style="background:#D9C9A6"><div style="opacity:.82;transform:rotate(-2deg)">'
             f'{logo("stacked-forest", "height:120px")}</div><div class="tc">Rubber stamp / jute sack stencil</div></div>')
    cells = "".join(f'<div class="t" style="background:{bg}">{logo(w, "width:300px;height:auto")}<div class="tc" '
                    f'style="color:{"#CFCDBE" if bg in ("#000000", C["forest"]) else C["muted"]}">{t}</div></div>'
                    for bg, w, t in tiles)
    css = """
    body{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;padding:30px}
    .t{height:220px;border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:22px}
    .tc{font:400 13px Mukta;color:#4C5951}
    """
    return page("monochrome", cells + foil + deboss + stamp, 1500, 532, css, "#F6F1E5")


def main():
    jobs = [website_desktop(), website_mobile(), stationery(), social(), monochrome()]
    shoot(jobs)


if __name__ == "__main__":
    main()
