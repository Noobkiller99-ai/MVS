#!/usr/bin/env python3
"""Sangat brand guidelines v3 (logo traced from the client's exact brand board) (1920 x 1080 pages) -> deliverables/sangat-brand-guidelines.pdf + brandbook-v3/page-NN.png"""
import base64, json, os, re, subprocess

HERE = os.path.dirname(os.path.abspath(__file__))
W = os.path.normpath(os.path.join(HERE, ".."))
OUT = os.path.join(W, "brandbook-v3")
D = os.path.join(W, "deliverables")
FONTDIR = os.path.join(W, "v2/fonts")
os.makedirs(OUT, exist_ok=True)
NODE_PATH = subprocess.run(["npm", "root", "-g"], capture_output=True, text=True).stdout.strip()
PAL = json.load(open(os.path.join(W, "system/palette.json")))


def img(rel, style=""):
    p = os.path.join(W, rel)
    return f'<img style="{style}" src="data:image/png;base64,{base64.b64encode(open(p, "rb").read()).decode()}">'


def logo(name, style=""):
    s = open(os.path.join(D, "logo/svg", f"sangat-{name}.svg")).read()
    s = re.sub(r"<title>.*?</title>", "", s)
    return s.replace("<svg ", f'<svg style="display:block;{style}" ', 1)


def icon(kind):
    from packaging_v2 import icon as ic
    return f'<svg viewBox="0 0 40 40" style="width:64px;height:64px">{ic(kind, 20, 20, 30, "#A9824A")}</svg>'


PAGES = []


def page(section, title, lead, body, dark=False):
    PAGES.append((section, title, lead, body, dark))


# 01 cover is special-cased in html()
page("1 · Brand", "Sangat: in good company.",
     "Premium basmati made in partnership with Manav Vikas Sansthan (MVS) and the farming families who grow it. "
     "The brand makes togetherness visible, warmly and without sounding like a charity.",
     """<div class="c3"><div><h4>Proposition</h4><p>Exceptional basmati you can feel good about, because the people behind it are in it together.</p>
     <h4>Purpose</h4><p>To bring the people who eat rice closer to the people and practices that grow it.</p>
     <h4>Personality</h4><p>Warm, authentic, assured, quietly proud. A good host, not a salesperson.</p></div>
     <div><h4>Values</h4><p>Togetherness (sangat) · Care in the field · Craft · Honesty: we say only what we can stand behind.</p>
     <h4>Audience</h4><p>Affluent urban Indian households, premium grocery and gourmet shoppers.</p>
     <h4>On the shelf</h4><p>The category shouts in maroon, red and yellow with monuments and crowns. Sangat is ivory and forest green with
     one golden ear and a drawn landscape: calm, premium and rooted.</p></div>
     <div><h4>The name and the line</h4><p><b>Sangat</b> (संगत): company, keeping good company. <b>Sanjhi</b>: shared. <b>Sunehra</b>: golden. <b>Kal</b>: tomorrow.</p>
     <div class="tag">Sanjhi Soch, Sunehra Kal<small>साँझी सोच, सुनहरा कल</small></div>
     <h4>Brand lines</h4><p>Every grain has a story · A shared journey for a brighter tomorrow · Good food grows from shared thinking.</p></div></div>""")

page("2.1 · Logo", "A golden ear grows out of the shared word.",
     "The wordmark from the client's brand board, vectorised from it exactly: customised Playfair letters, a single-storey g whose swash "
     "runs back under 'San' (the shared path), and a gold rice ear growing out of the g (the golden tomorrow).",
     f"""<div class="two" style="grid-template-columns:1.3fr 1fr;align-items:center"><div class="panel" style="background:#F9F6EE;padding:60px">{logo("primary-colour", "width:100%")}</div>
     <div><h4>Parts</h4><p>1 · Letters: traced from the board (customised Playfair), Forest Green.</p><p>2 · The swash g: its descender sweeps left under the whole word.</p>
     <p>3 · The ear: two gold blades and a curling tongue, shaded light to deep gold as on the board; flat Sunehra Gold or one colour where gradients cannot print.</p>
     <p>4 · Tagline: Libre Caslon Text set at the board's letter positions, Earth Brown.</p><h4>Fidelity</h4><p>The colour master overlaps the board's own logo by 0.89 IoU
     (the rest is edge anti-aliasing). Never retype the logo; use the supplied files.</p></div></div>""")

page("2.2 · Logo versions", "One family of marks.",
     "Primary (with tagline) wherever there is room; horizontal with the symbol for headers and narrow bands; stacked for "
     "square spaces; the symbol alone for icons, the pack tab and avatars.",
     f"""<div class="g3"><div class="cell">{logo("primary-colour", "height:200px")}<span>Primary</span></div>
     <div class="cell">{logo("horizontal-colour", "height:120px")}<span>Horizontal</span></div>
     <div class="cell">{logo("stacked-colour", "height:250px")}<span>Stacked</span></div>
     <div class="cell">{logo("wordmark-colour", "height:150px")}<span>Wordmark</span></div>
     <div class="cell">{logo("symbol-colour", "height:200px")}<span>Symbol: two leaves and the ear</span></div>
     <div class="cell" style="background:#0F3D2E">{logo("symbol-colour-reversed", "height:200px")}<span style="color:#D3D7CC">Symbol reversed</span></div></div>""")

page("2.3 · Colourways and tests", "Tested from 16 px to the shelf.",
     "Colour on Ivory, reversed on Forest Green, and one-colour cuts (black, white, forest, gold foil) in which the ear, "
     "leaves and stem are separated by small gaps so nothing fuses. Every version ships as SVG and transparent PNG.",
     f"""{img("deliverables/logo/logo-test-sheet.png", "")}""")

clear = (f'<div style="position:relative;display:inline-block;padding:70px;border:2px dashed #C9A96B">{logo("primary-colour", "height:260px")}'
         f'<span style="position:absolute;left:8px;top:8px;font:600 13px Inter;color:#7A5F3B">x</span></div>')
mis = [("Stretched", logo("wordmark-colour", "height:90px;transform:scaleX(1.45);transform-origin:left")),
       ("Recoloured", logo("wordmark-colour", "height:90px;filter:hue-rotate(250deg) saturate(3)")),
       ("Ear removed", logo("wordmark-forest", "height:90px;clip-path:inset(28% 0 0 0)")),
       ("Effects", logo("wordmark-colour", "height:90px;filter:drop-shadow(6px 6px 3px rgba(0,0,0,.5))")),
       ("Busy ground", f'<div style="background:repeating-linear-gradient(45deg,#C9A96B 0 12px,#A7B89F 12px 24px);padding:10px">{logo("wordmark-colour", "height:72px")}</div>'),
       ("Low contrast", f'<div style="background:#C9A96B;padding:10px">{logo("wordmark-colour", "height:72px")}</div>')]
page("2.4 · Space, size and misuse", "Give it room.",
     "Clear space on every side: x, the height of the lowercase a. Minimum sizes: wordmark 25 mm wide in print and 32 px high "
     "on screen; below that, use the symbol (16 px with the favicon tile).",
     f"""<div class="two" style="grid-template-columns:1fr 1.15fr;align-items:center"><div style="text-align:center">{clear}</div>
     <div class="mis">{"".join(f'<div class="m"><div class="mi">{h}</div><span>✕ {t}</span></div>' for t, h in mis)}</div></div>""")

crow = "".join(f'<tr><td><i style="background:{c["hex"]}"></i></td><td><b>{c["name"]}</b><br><span>{c["role"]}</span></td><td>{c["hex"]}</td>'
               f'<td>{" ".join(map(str, c["rgb"]))}</td><td>{" ".join(map(str, c["cmyk_start"]))}</td><td>{c["share"]}</td><td>{c["usage"]}</td></tr>'
               for c in PAL["colours"])
page("3 · Colour", "Forest, ivory and a golden ear.",
     "Six brand colours from the board plus four support tones. CMYK values are uncalibrated starting builds; the printer "
     "matches Pantone from drawdowns. Measured contrast: Ivory on Forest 11.3:1, Gold on Forest 5.4:1, Earth Brown (UI) on Ivory 5.5:1; "
     "Gold on Ivory is 2.1:1, so it is never small text on light grounds.",
     f"""<table class="t pal"><tr><th></th><th>Colour</th><th>HEX</th><th>RGB</th><th>CMYK start</th><th>Share</th><th>Use</th></tr>{crow}</table>""")

page("4 · Typography", "As on the board: Playfair Display, with Inter.",
     "Primary: Playfair Display (the logo is customised Playfair) for display headlines. Secondary: Inter for reading and every panel of information. "
     "The board sets its tagline and pack lines in a calmer serif, matched by measurement to Libre Caslon Text. Hindi: Noto Serif Devanagari. All SIL OFL.",
     """<div class="c3 spec"><div><p class="sm">Primary · Playfair Display · 400 / 600 / Italic</p><p style="font:400 120px/1 'Playfair Display'">Aa</p>
     <p style="font:400 46px/1.1 'Playfair Display'">Every grain <i>has a story.</i></p>
     <p class="sm" style="margin-top:26px">Editorial · Libre Caslon Text</p><p style="font:400 22px/1.4 'Libre Caslon Text';letter-spacing:.12em">BASMATI RICE</p>
     <p style="font:400 22px 'Libre Caslon Text';letter-spacing:.12em;color:#7A5F3B">Sanjhi Soch, Sunehra Kal</p></div>
     <div><p class="sm">Secondary · Inter · 400 / 600</p><p style="font:400 120px/1 Inter">Aa</p><p style="font:400 19px/1.6 Inter">Sangat brings together farming families,
     Manav Vikas Sansthan and people who care about what they eat. 0123456789 ₹ %</p><p style="font:600 14px Inter;letter-spacing:.16em">SCAN TO EXPLORE · NET QUANTITY</p></div>
     <div><p class="sm">Noto Serif Devanagari · 400 / 500</p><p style="font:500 110px/1.1 'Noto Serif Devanagari'">संगत</p>
     <p style="font:500 32px/1.5 'Noto Serif Devanagari'">हर दाने की अपनी कहानी</p><p style="font:400 26px/1.5 'Noto Serif Devanagari';color:#7A5F3B">साँझी सोच, सुनहरा कल</p></div></div>""")

icons = "".join(f'<figure>{icon(k)}<figcaption>{t}</figcaption></figure>' for k, t in
                [("farmers", "Local farmers"), ("practices", "Sustainable practices"), ("communities", "Thriving communities"), ("tomorrow", "A brighter tomorrow")])
page("5 · Graphic language", "A landscape, a sweep and golden ears.",
     "As on the board, drawn flat in the brand colours: misty mountains, a big tree, one farmhouse, terraced fields; the forest sweep with "
     "its fine gold edge and the leaf-shaped rice window; arching gold rice ears; etched ears at the corners; four line icons on a 24 grid.",
     f"""<div class="two" style="grid-template-columns:1.4fr 1fr">{img("packaging-v3/v1-ivory-landscape-1kg-front.png", "max-height:100%;object-fit:cover;object-position:bottom;height:560px;width:100%")}
     <div><div class="icons">{icons}</div><h4 style="margin-top:40px">Rules</h4><p>The landscape always sits at the bottom of a surface; the sweep rises left to right;
     ears bow to the right; one farmhouse, never a crowd. No outlines, no gradients in print artwork, no stock imagery.</p></div></div>""")

page("6.1 · Packaging · V1 Ivory Landscape · 1 kg", "The board, made print-ready in structure.",
     "Back · front · base gusset, laid out to the board. The back ends in the QR strip; nutrition and legal text sit on the base gusset. "
     "Magenta: assumed trim, top seal and zip; blue: safe area. Every regulatory item is a labelled placeholder.",
     img("packaging-v3/v1-ivory-landscape-1kg-guides.png", ""))
page("6.2 · Packaging · V1 Ivory Landscape · 5 kg", "Side · front · side · back.",
     "One side carries 'Good food grows from shared thinking.' as on the board, the other the nutrition and legal panel; the handle "
     "die-cut runs through the tab; nothing important sits above 52 mm.", img("packaging-v3/v1-ivory-landscape-5kg-guides.png", ""))
page("6.3 · Packaging · V2 Forest Edition", "The same story at dusk.",
     "Forest ground, gold tab, the landscape in deep greens, no window: for gifting, festive packs or the 5 kg.",
     f"""<div class="two" style="grid-template-columns:2.1fr 1fr">{img("packaging-v3/v2-forest-edition-1kg-guides.png", "")}{img("packaging-v3/v2-forest-edition-5kg-front.png", "")}</div>""")
page("6.4 · The QR strip", "Every grain has a story.",
     "The client's strip runs the full width of the bottom of every back panel, set in the brand fonts: the Hindi line, the headline, "
     "the gold sprig, the SCAN TO EXPLORE card and the footer bar. The QR opens story.html (placeholder until the URL is final).",
     img("mockups-v3/back.png", ""))
page("6.5 · Packaging in use", "Premium. Authentic. A better tomorrow.",
     "Visualised from the print artwork (not photographs or proofs): the 1 kg and 5 kg on the table, the range and the finishes.",
     f"""<div class="two">{img("mockups-v3/hero.png", "")}<div style="display:grid;gap:16px;align-content:start">{img("mockups-v3/range.png", "")}{img("mockups-v3/finishes.png", "")}</div></div>""")
page("6.6 · Shelf test", "Calm in a loud aisle.",
     "Among the category's common colours (unbranded blocks, not real products), ivory and forest with one gold ear stand apart.",
     img("mockups-v3/shelf.png", ""))

srp_rows = [("Water", "19.7% less water for every kilo of rice", "1,490 L", "1,855 L"),
            ("Crop protection", "36.8% less insecticide", "96 ml-g", "152 ml-g"),
            ("Fertiliser", "21.8% less nitrogen for every kilo of rice", "27.4 g", "35.0 g"),
            ("Livelihoods", "₹5,323 more net return per acre", "₹60,130", "₹54,807")]
srp_t = "".join(f"<tr><td><b>{a}</b><br>{b}</td><td class='r g'>{c}</td><td class='r'>{d}</td></tr>" for a, b, c, d in srp_rows)
page("7.1 · Website", "The identity, carried by the 3D grain.",
     "Header wordmark at 50 px, Playfair Display, Libre Caslon Text and Inter self-hosted, the brand tokens in site.css, and the 3D pack wearing the V1 1 kg front.",
     f"""{img("applications-v3/website-desktop.png", "")}""")
page("7.2 · Why it matters: the SRP figures", "Numbers a buyer can feel.",
     "Four reasons, one figure each, from MVS's SRP vs non-SRP comparison: water, crop protection, fertiliser and the farmer's income. "
     "Each card shows the figure, an SRP vs non-SRP bar pair and one line of context. No tables: only what a buyer will read.",
     f"""<div class="two" style="grid-template-columns:1fr 1.25fr"><table class="t"><tr><th>Reason · figure on the site</th><th class="r">SRP</th><th class="r">Non-SRP</th></tr>{srp_t}</table>
     {img("applications-v3/website-mobile.png", "")}</div>
     <p class="fine">Basis (from the MVS document): milled rice at 67% recovery (FCI out-turn ratio); water = irrigations × 5 cm × 1 acre (2,02,343 L per irrigation).
     The site credits the source in one line; soil has no figure in the document, so it is not shown.</p>""")
page("8.1 · Stationery", "Two inks and a little gold.", "Business card, letterhead and compliments slip; names and details are placeholders.",
     img("applications-v3/stationery.png", ""))
page("8.2 · Social and one-colour use", "Recognisable in any single ink.",
     "Post, impact post (with its source line), story and avatars; the mark in black, white, ivory on forest, forest only, gold foil, "
     "blind emboss and as a sack stamp.",
     f"""<div style="display:grid;gap:18px">{img("applications-v3/social.png", "max-height:330px;margin:0 auto")}{img("applications-v3/monochrome.png", "max-height:330px;margin:0 auto")}</div>""")
page("9 · Before anything is printed", "What is real, and what is still a placeholder.",
     "The identity is complete as design. These items need MVS, suppliers or regulators before production.",
     """<div class="c3"><div><h4>Confirm with MVS</h4><ul><li>Every product fact and pack line ("naturally aromatic", "thoughtfully grown")</li>
     <li>The SRP comparison's season, location and number of farms, before the figures go live</li><li>Batch data for the QR page</li>
     <li>Farmer names, photographs and quotes, only with consent; the back-panel farmer is an illustration</li></ul></div>
     <div><h4>Suppliers and regulators</h4><ul><li>Converter dielines for 1 kg and 5 kg (sizes here are assumed)</li><li>FSSAI labelling review: veg mark,
     licence, MRP, net quantity, nutrition, type sizes</li><li>GS1 barcode; the QR code from the final story.html URL</li><li>Pantone drawdowns; foil, emboss and window proofs</li></ul></div>
     <div><h4>Protect the brand</h4><ul><li>Trademark search and filing for SANGAT and the mark (not done here)</li><li>Photography to system/photography.md</li>
     <li>Fonts: Playfair Display, Inter, Noto Serif Devanagari, SIL OFL 1.1: free for print, web and the outlined logo</li></ul></div></div>""")


def html():
    css = f"""
    @font-face{{font-family:"Playfair Display";src:url(file://{FONTDIR}/playfair-display-latin-400-normal.woff2);font-weight:400}}
    @font-face{{font-family:"Playfair Display";src:url(file://{FONTDIR}/playfair-display-latin-600-normal.woff2);font-weight:600}}
    @font-face{{font-family:"Playfair Display";src:url(file://{FONTDIR}/playfair-display-latin-400-italic.woff2);font-weight:400;font-style:italic}}
    @font-face{{font-family:"Inter";src:url(file://{FONTDIR}/inter-latin-400-normal.woff2);font-weight:400}}
    @font-face{{font-family:"Inter";src:url(file://{FONTDIR}/inter-latin-600-normal.woff2);font-weight:600}}
    @font-face{{font-family:"Libre Caslon Text";src:url(file://{FONTDIR}/libre-caslon-text-latin-400-normal.woff2);font-weight:400}}
    @font-face{{font-family:"Noto Serif Devanagari";src:url(file://{FONTDIR}/noto-serif-devanagari-devanagari-400-normal.woff2);font-weight:400}}
    @font-face{{font-family:"Noto Serif Devanagari";src:url(file://{FONTDIR}/noto-serif-devanagari-devanagari-500-normal.woff2);font-weight:500}}
    @page{{size:1920px 1080px;margin:0}}
    *{{box-sizing:border-box}} body{{margin:0;font:400 19px/1.55 Inter;color:#13231C}}
    .pg{{width:1920px;height:1080px;background:#F9F6EE;position:relative;overflow:hidden;page-break-after:always;padding:52px 80px 92px;display:flex;flex-direction:column}}
    .hd{{display:flex;justify-content:space-between;align-items:center;height:64px}} .hd .s{{font:600 13px Inter;letter-spacing:.16em;text-transform:uppercase;color:#7A5F3B}}
    .hd .n{{font:400 40px 'Playfair Display';color:#0F3D2E}} .hd svg{{height:58px;width:auto}}
    .line{{position:absolute;left:0;right:0;top:130px;height:2px;background:#C9A96B}}
    h2{{font:400 52px/1.06 'Playfair Display';color:#0F3D2E;margin:66px 0 8px;max-width:1500px}}
    .lead{{color:#4F5A52;max-width:1450px;margin:0 0 24px;font-size:18.5px}}
    .bd{{flex:1;min-height:0;position:relative}} .bd>img{{max-width:100%;max-height:100%;object-fit:contain;display:block;margin:0 auto;border-radius:8px}}
    h4{{font:600 13px Inter;letter-spacing:.16em;text-transform:uppercase;color:#7A5F3B;margin:0 0 6px}} p{{margin:0 0 16px}} ul{{margin:0;padding-left:20px}} li{{margin-bottom:8px}}
    .c3{{display:grid;grid-template-columns:repeat(3,1fr);gap:56px}}
    .two{{display:grid;grid-template-columns:1fr 1fr;gap:40px;height:100%;grid-template-rows:100%}} .two>*{{min-height:0}}
    .two img{{max-width:100%;max-height:100%;object-fit:contain;display:block;border-radius:8px}}
    .tag{{font:400 30px/1.2 'Libre Caslon Text';color:#7A5F3B;letter-spacing:.12em;margin:6px 0 24px}} .tag small{{display:block;font:400 22px 'Noto Serif Devanagari';color:#7A5F3B;letter-spacing:0}}
    .panel{{border-radius:12px;border:1px solid #E3DCCB}}
    .g3{{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:1fr 1fr;gap:18px;height:100%}}
    .cell{{border:1px solid #E3DCCB;border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;background:#FCFAF4}}
    .cell span,figcaption,.mis span{{font:600 12px Inter;letter-spacing:.12em;text-transform:uppercase;color:#7A5F3B}}
    .mis{{display:grid;grid-template-columns:1fr 1fr;gap:16px}} .m{{border:1px solid #E3DCCB;border-radius:12px;padding:22px;height:190px;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;background:#fff}}
    .mis span{{color:#B3262B}}
    .t{{border-collapse:collapse;width:100%;font-size:16px}} .t th{{text-align:left;font:600 12px Inter;letter-spacing:.14em;text-transform:uppercase;color:#4F5A52;padding:8px 10px;border-bottom:1px solid #D9D4C8}}
    .t td{{padding:5px 10px;border-bottom:1px solid #E6E0D2;vertical-align:middle;font-variant-numeric:tabular-nums}} .t .r{{text-align:right}} .t .g{{color:#0F3D2E;font-weight:600}}
    .pal i{{display:block;width:46px;height:26px;border-radius:6px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.08)}} .pal span{{color:#4F5A52;font-size:13px}}
    .spec p.sm{{font:600 12px Inter;letter-spacing:.14em;text-transform:uppercase;color:#7A5F3B}}
    .icons{{display:flex;gap:30px}} figure{{margin:0;text-align:center}}
    .fine{{font-size:13px;color:#4F5A52;margin-top:8px}}
    .ft{{position:absolute;left:80px;right:80px;bottom:30px;border-top:1px solid #D9D4C8;padding-top:12px;display:flex;justify-content:space-between;
      font:600 11px Inter;letter-spacing:.16em;text-transform:uppercase;color:#4F5A52}}
    .cover{{background:#0F3D2E;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:40px;color:#F9F6EE}}
    .cover .k{{font:600 14px Inter;letter-spacing:.3em;text-transform:uppercase;color:#E2CB97}}
    """
    wm_small = logo("wordmark-colour", "")
    out = [f'<section class="pg cover">{logo("primary-colour-reversed", "height:360px")}<div class="k">Brand guidelines · Version 3.0 · October 2026</div>'
           f'<div style="font:400 18px Inter;color:#D3D7CC">Premium basmati rice · in partnership with Manav Vikas Sansthan</div></section>']
    for i, (sec, title, lead, body, dark) in enumerate(PAGES, 2):
        out.append(f'<section class="pg"><div class="hd">{wm_small}<div class="s">{sec}</div><div class="n">{i:02d}</div></div><div class="line"></div>'
                   f'<h2>{title}</h2><p class="lead">{lead}</p><div class="bd">{body}</div>'
                   f'<div class="ft"><span>Sangat brand guidelines</span><span>Sanjhi Soch, Sunehra Kal</span><span>v3.0 · October 2026</span></div></section>')
    return f'<!doctype html><meta charset="utf-8"><style>{css}</style>' + "".join(out)


def main():
    hp = os.path.join(OUT, "brandbook.html")
    open(hp, "w").write(html())
    pdf = os.path.join(D, "sangat-brand-guidelines.pdf")
    js = f"""const {{chromium}}=require('playwright');(async()=>{{const b=await chromium.launch();const p=await b.newPage({{viewport:{{width:1920,height:1080}}}});
await p.goto('file://{hp}');await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(600);
await p.pdf({{path:'{pdf}',width:'1920px',height:'1080px',printBackground:true,preferCSSPageSize:true}});
const n=await p.$$('.pg');for(let i=0;i<n.length;i++){{await n[i].screenshot({{path:'{OUT}/page-'+String(i+1).padStart(2,'0')+'.png',timeout:120000}});}}
await b.close();}})();"""
    subprocess.run(["node", "-e", js], check=True, env={**os.environ, "NODE_PATH": NODE_PATH})
    os.remove(hp)
    print("wrote", pdf, len(PAGES) + 1, "pages")


if __name__ == "__main__":
    main()
