"""Phase 2 demo: each identity direction on a 1 kg premium rice pouch (concept mockup, not print artwork).

Uses the brand-identity skill's built masters (sets/X/logo/build/master-*.svg), recoloured by role with CSS.
Output: concepts/pack-concepts.html + .png
Run:  python3 brand/sangat/tools/pack_concepts.py
"""
import os, re, subprocess, json

HERE = os.path.dirname(os.path.abspath(__file__))
W = os.path.normpath(os.path.join(HERE, ".."))
OUT = os.path.join(W, "concepts")
os.makedirs(OUT, exist_ok=True)
FONTS = "/root/.cache/brand-identity/fonts/google/ofl"


def master(set_id, kind):
    p = os.path.join(W, "sets", set_id, "logo", "build", f"master-{kind}.svg")
    if not os.path.exists(p):
        return ""
    s = open(p, encoding="utf-8").read()
    return re.sub(r"<\?xml[^>]*>", "", s)


# Each concept: ground, ink for the wordmark, colours by role, a pattern/feature and the logo lockup kind.
CONCEPTS = [
    dict(id="A", name="Shirorekha", ground="#1E3A2F", ink="#F3ECDC", primary="#F3ECDC", accent="#C9A35A",
         lockup="lockup-stacked", sub="#C9B98F", feature="rule",
         note="Forest pouch; the gold shirorekha runs edge to edge and everything hangs from it."),
    dict(id="B", name="Bindu", ground="#FBF8F2", ink="#17231D", primary="#17231D", accent="#B8862B",
         lockup="primary", sub="#5B655E", feature="bindu",
         note="Paper-white pouch, ink type, one foil dot: the quietest pack on the shelf."),
    dict(id="C", name="Mohar", ground="#13241B", ink="#D7AE62", primary="#D7AE62", accent="#D7AE62",
         lockup="lockup-stacked", sub="#8C9C80", feature="stencil",
         note="Night-forest pouch, gold seal as a debossed foil block, Sanjhi stencil band."),
    dict(id="D", name="Saath", ground="#16443D", ink="#F4F2EC", primary="#F4F2EC", accent="#D2A548",
         lockup="wordmark", sub="#B9C7BF", feature="grains",
         note="Monsoon-green pouch; the two grains stride large across the front."),
]


def feature_svg(c):
    if c["feature"] == "rule":
        return f'<div class="rule" style="background:{c["accent"]}"></div>'
    if c["feature"] == "stencil":
        # Sanjhi stencil band: a row of grain cut-outs (illustrate skill: hand-authored SVG, no backend)
        cells = "".join(f'<ellipse cx="{12 + i * 24}" cy="12" rx="3.2" ry="9" />' for i in range(17))
        return (f'<svg class="band" viewBox="0 0 400 24" preserveAspectRatio="none"><rect width="400" height="24" '
                f'fill="{c["accent"]}"/><g fill="{c["ground"]}">{cells}</g></svg>')
    if c["feature"] == "grains":
        sym = master("D", "symbol")
        return f'<div class="giant">{sym}</div>'
    return ""


def pack(c):
    lock = master(c["id"], c["lockup"]) or master(c["id"], "primary")
    style = (f'--g:{c["ground"]};--ink:{c["ink"]};--p:{c["primary"]};--a:{c["accent"]};--sub:{c["sub"]}')
    return f"""
<figure class="cell">
  <div class="pouch k-{c['feature']}" style="{style}">
    <div class="seal"></div>
    {feature_svg(c) if c['feature'] != 'grains' else ''}
    {feature_svg(c) if c['feature'] == 'grains' else ''}
    <div class="logo">{lock}</div>
    <p class="desc">Premium Basmati Rice</p>
    <p class="tag">Sanjhi Soch, Sunehra Kal</p>
    <p class="hi" lang="hi">साँझी सोच, सुनहरा कल</p>
    <div class="foot"><span class="wt">1 kg</span><span class="qr" aria-hidden="true"></span><span class="ph">Net weight and specs: PLACEHOLDER</span></div>
  </div>
  <figcaption><b>{c['id']} · {c['name']}</b><br>{c['note']}</figcaption>
</figure>"""


HTML = f"""<!doctype html><meta charset="utf-8"><title>Sangat · directions on pack</title><style>
@font-face{{font-family:Mukta;src:url(file://{FONTS}/mukta/Mukta-Regular.ttf)}}
@font-face{{font-family:Tiro;src:url(file://{FONTS}/tirodevanagarihindi/TiroDevanagariHindi-Regular.ttf)}}
body{{margin:0;background:#E9E5DC;font:14px Mukta,system-ui;color:#222;padding:40px 40px 30px}}
h1{{font:400 30px Tiro,serif;margin:0 0 4px;letter-spacing:.06em}} .lead{{margin:0 0 28px;color:#555}}
.grid{{display:grid;grid-template-columns:repeat(4,1fr);gap:34px}}
.cell{{margin:0}} figcaption{{margin-top:16px;line-height:1.45;color:#333}}
.pouch{{position:relative;aspect-ratio:2/3;background:var(--g);border-radius:10px 10px 18px 18px;overflow:hidden;
  box-shadow:0 30px 40px -24px rgba(0,0,0,.45), inset 14px 0 30px -18px rgba(255,255,255,.25), inset -18px 0 30px -18px rgba(0,0,0,.35);
  display:flex;flex-direction:column;align-items:center;color:var(--ink)}}
.seal{{position:absolute;inset:0 0 auto 0;height:7%;background:linear-gradient(rgba(0,0,0,.12),rgba(0,0,0,0));border-bottom:1px dashed rgba(127,127,127,.35)}}
.rule{{position:absolute;left:0;right:0;top:24%;height:6px}}
.band{{position:absolute;left:0;right:0;top:12%;width:100%;height:22px}}
.giant{{position:absolute;right:-6%;top:3%;width:78%}}
.giant svg{{width:100%;height:auto}}
.giant [data-color=primary]{{fill:#2A5A51}} .giant [data-color=accent]{{fill:var(--a)}}
.logo{{width:62%;margin-top:30%}} .k-bindu .logo{{width:74%;margin-top:42%}} .k-grains .logo{{margin-top:104%;width:64%}}
.k-rule .logo{{margin-top:36%;width:56%}}
.logo svg{{width:100%;height:auto;display:block}}
.logo [data-color=primary]{{fill:var(--p)}} .logo [data-color=accent]{{fill:var(--a)}} .logo [data-color=text]{{fill:var(--ink)}}
.desc{{margin:8% 0 0;font:600 11px Mukta;letter-spacing:.24em;text-transform:uppercase;color:var(--sub)}}
.tag{{margin:3% 0 0;font:400 15px Tiro,serif;letter-spacing:.04em}} .hi{{margin:1% 0 0;font:400 14px Tiro,serif;color:var(--sub)}}
.k-grains .desc{{margin-top:5%}}
.foot{{position:absolute;left:8%;right:8%;bottom:5%;display:flex;align-items:flex-end;justify-content:space-between;gap:8px}}
.wt{{font:600 16px Mukta;letter-spacing:.06em}} .qr{{width:42px;height:42px;border:2px solid var(--sub);border-radius:6px;
  background:repeating-linear-gradient(90deg,var(--sub) 0 3px,transparent 3px 7px),repeating-linear-gradient(0deg,var(--sub) 0 3px,transparent 3px 7px);opacity:.75}}
.ph{{position:absolute;left:0;bottom:-16px;font:9px Mukta;color:var(--sub);opacity:.8}}
.k-bindu .tag{{font-size:14px}}
</style>
<h1>SANGAT · four directions on a 1 kg pouch</h1>
<p class="lead">Concept mockups for comparison only: not print artwork. Net weight, QR target and specifications are placeholders.</p>
<div class="grid">{''.join(pack(c) for c in CONCEPTS)}</div>"""

html = os.path.join(OUT, "pack-concepts.html")
open(html, "w", encoding="utf-8").write(HTML)
png = os.path.join(OUT, "pack-concepts.png")
subprocess.run(["node", "-e", f"""
const {{chromium}}=require('playwright');(async()=>{{const b=await chromium.launch();
const p=await b.newPage({{viewport:{{width:1600,height:900}},deviceScaleFactor:1.5}});
await p.goto('file://{html}');await p.waitForTimeout(700);await p.screenshot({{path:'{png}',fullPage:true}});await b.close()}})()"""],
               check=True)
print("wrote", os.path.relpath(png))
