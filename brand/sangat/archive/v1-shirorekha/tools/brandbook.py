#!/usr/bin/env python3
"""Sangat brand book: the brand-identity kit (13 pages) + the system-in-use pages built here (14 onwards).

Writes brandbook/brandbook.html (one 1920x1080 page per section), prints it to PDF with Playwright and merges it
behind kit/A/sangat-guidelines.pdf into deliverables/sangat-brand-guidelines.pdf.
"""
import base64, json, os, re, subprocess
from pypdf import PdfReader, PdfWriter

HERE = os.path.dirname(os.path.abspath(__file__))
W = os.path.normpath(os.path.join(HERE, ".."))
OUT = os.path.join(W, "brandbook")
os.makedirs(OUT, exist_ok=True)
FONTS = "/root/.cache/brand-identity/fonts/google/ofl"
NODE_PATH = subprocess.run(["npm", "root", "-g"], capture_output=True, text=True).stdout.strip()
PAL = json.load(open(os.path.join(W, "system/palette.json")))


def img(rel, style=""):
    p = os.path.join(W, rel)
    mime = "image/svg+xml" if p.endswith(".svg") else "image/png"
    return f'<img style="{style}" src="data:{mime};base64,{base64.b64encode(open(p, "rb").read()).decode()}">'


def svg_inline(rel, style="", colour=None):
    s = open(os.path.join(W, rel)).read()
    s = re.sub(r"<title>.*?</title>", "", s)
    if colour:
        s = s.replace("currentColor", colour)
    return s.replace("<svg ", f'<svg style="{style}" ', 1)


PAGES = []


def page(section, title, lead, body):
    PAGES.append((section, title, lead, body))


# 14 Strategy -------------------------------------------------------------------------------------------------
page("1.1 · Strategy", "In good company.",
     "Sangat is premium basmati made with Manav Vikas Sansthan and the farming families who grow it. "
     "The brand makes togetherness visible, without sounding like a charity.",
     """<div class="cols3">
     <div><h4>Proposition</h4><p>Exceptional basmati you can feel good about, because the people behind it are in it together.</p>
     <h4>Purpose</h4><p>To bring the people who eat rice closer to the people and practices that grow it.</p>
     <h4>Personality</h4><p>Assured, warm, articulate, quietly proud. A good host, not a salesperson.</p></div>
     <div><h4>Values</h4><p>Togetherness (sangat) · Care in the field · Craft and consistency · Honesty: we say only what we can stand behind.</p>
     <h4>Audience</h4><p>Affluent urban Indian households, premium grocery and gourmet shoppers, people who notice design.</p>
     <h4>Must never read as</h4><p>An NGO or charity product, a rustic organic label, an ornate heritage cliché, a mass-market staple.</p></div>
     <div><h4>The name</h4><p><b>Sangat</b> (संगत): company, keeping good company, a gathering. <b>Sanjhi</b> (साँझी): shared.
     <b>Sunehra</b> (सुनहरा): golden. <b>Kal</b> (कल): tomorrow.</p>
     <div class="tag">Sanjhi Soch, Sunehra Kal<small>साँझी सोच, सुनहरा कल</small></div>
     <h4>On the shelf</h4><p>The category shouts in maroon, red, yellow and gold frames, with monuments and crowns, or in leaf green and kraft.
     Sangat takes the open space: near-black forest, ivory, one restrained gold line, Indian-designed type.</p></div></div>""")

# 15 Directions ------------------------------------------------------------------------------------------------
page("2.1 · Logo directions", "Four ideas, judged in grey first.",
     "A Shirorekha: three grains held by one line. B Bindu: the anusvara dot as a golden seed. "
     "C Mohar: a Devanagari seal. D Saath: two grains moving forward together.",
     f"""<div class="two">{img("concepts/concept-sheet.png", "")}{img("concepts/pack-concepts.png", "")}</div>""")

# 16 Critique --------------------------------------------------------------------------------------------------
rows = [("Brand relevance", 9, 6, 7, 8), ("Distinctiveness", 8, 7, 6, 5), ("Premium appeal", 8, 9, 8, 6),
        ("Scalability", 7, 9, 5, 9), ("Versatility", 9, 7, 7, 7), ("Timelessness", 8, 9, 7, 6),
        ("Reproducibility", 9, 9, 7, 9)]
table = "".join(f"<tr><td>{r[0]}</td>" + "".join(f"<td>{v}</td>" for v in r[1:]) + "</tr>" for r in rows)
page("2.2 · Critique and selection", "Shirorekha: the mark the system hangs from.",
     "Scores are design judgement out of 10. A wins on relevance, versatility and reproducibility; "
     "B is the runner-up and gives the system its bindu; C gives it the chatai weave.",
     f"""<div class="two"><div><table class="t"><tr><th></th><th>A Shirorekha</th><th>B Bindu</th><th>C Mohar</th><th>D Saath</th></tr>
     {table}<tr class="tot"><td>Total / 70</td><td>58</td><td>56</td><td>47</td><td>50</td></tr></table>
     <h4 style="margin-top:34px">Refinement</h4><p><b>Round 1</b>: three grains fused to the bar read as an inverted "Ш". Whole grains now hang
     7 units below the line, like a toran: the letter reading is gone at every size.</p>
     <p><b>Round 2</b>: the symbol out-weighed the capitals. Grains and line were slimmed to the wordmark's stem weight,
     and a separate small cut was drawn for 16–24 px.</p></div>
     <div class="stack2" style="height:100%;display:flex;flex-direction:column;gap:14px">{img("refine/round1-contact.png", "")}{img("refine/round2-A-lockup.png", "")}</div></div>""")

# 17 Colour ----------------------------------------------------------------------------------------------------
crow = ""
for c in PAL["colours"]:
    cm = c.get("cmyk_start")
    crow += (f'<tr><td><i style="background:{c["hex"]}"></i></td><td><b>{c["name"]}</b><br><span>{c["role"]}</span></td>'
             f'<td>{c["hex"]}</td><td>{" ".join(map(str, c["rgb"]))}</td>'
             f'<td>{" ".join(map(str, cm)) if cm else "screen only"}</td><td>{c["usage"]}</td></tr>')
page("3.1 · Colour for print and screen", "Forest, ivory and one golden line.",
     "CMYK values are uncalibrated starting builds for coated stock. Spot colours (Pantone) are matched by the printer "
     "from drawdowns, and the gold line is hot foil wherever the budget allows.",
     f"""<table class="t pal"><tr><th></th><th>Colour</th><th>HEX</th><th>RGB</th><th>CMYK start</th><th>Use</th></tr>{crow}</table>""")

# 18 Logo files ------------------------------------------------------------------------------------------------
page("3.2 · Logo files and tests", "Tested at 16 px, on packs and in one colour.",
     "Every layout ships as editable SVG and transparent 2400 px PNG in colour, reversed, black, white, forest and gold. "
     "The favicon and app icon use the small cut.",
     f"""{img("deliverables/logo/logo-test-sheet.png", "")}""")

# 19 Graphic language ------------------------------------------------------------------------------------------
icons = "".join(f'<figure>{svg_inline(f"system/icons/{n}.svg", "width:56px;height:56px", "#1E3A2F")}<figcaption>{n}</figcaption></figure>'
                for n in ["together", "water", "soil", "scout", "season", "harvest", "milling", "pack", "kitchen", "story"])
page("4.1 · Graphic language", "One grain, one line, one point, one weave.",
     "The hanging line holds content; the bindu marks the story and the QR code only; the chatai weave is "
     "woven from basmati grains, cut like a Sanjhi stencil; icons are drawn from the same grain.",
     f"""<div class="gl"><div class="sw" style="background:#1E3A2F">{svg_inline("system/graphics/pattern-chatai-swatch.svg", "width:100%;height:100%")}</div>
     <div class="sw" style="background:#E7DCC4;padding:40px">{svg_inline("system/graphics/frame-hanging.svg", "width:100%;height:100%", "#1E3A2F")}</div>
     <div class="sw" style="background:#F6F1E5;display:grid;place-items:center">{svg_inline("system/graphics/bindu-marker.svg", "width:90px", "#A07A35")}</div></div>
     <div class="icons">{icons}</div>""")

# 20–21 Packaging artwork --------------------------------------------------------------------------------------
page("5.1 · Packaging · V1 Forest Line", "The logo becomes the pack.",
     "1 kg stand-up pouch, back · front · bottom gusset. The gold line runs edge to edge as hot foil and the three "
     "grains hang from it in spot UV. Magenta: assumed trim and zip; blue: safe area. Placeholders are labelled.",
     f"""{img("packaging/v1-forest-line-1kg-guides.png", "")}""")
page("5.2 · Packaging · V2 Grain Window", "The real rice is the illustration.",
     "5 kg handle bag, side · front · side · back. The three grains are clear windows onto the rice; the forest base "
     "carries quantity and the partnership line. Handle die-cut and gusset sizes are assumed until dielines arrive.",
     f"""{img("packaging/v2-grain-window-5kg-guides.png", "")}""")
page("5.3 · Packaging in use", "Felt before it is read.",
     "Both variations at 1 kg and 5 kg, and the finishes that carry the premium: soft-touch matte, one hot foil, "
     "spot UV grains, blind-debossed weave, clear windows. Visualisations, not print proofs.",
     f"""<div class="two" style="grid-template-columns:1.25fr 1fr">{img("mockups/packs-1kg-5kg.png", "")}{img("mockups/finishes.png", "")}</div>""")
page("5.4 · Shelf test", "Quiet in a loud aisle.",
     "Among the category's common colours (shown as unbranded blocks, not real products), the forest-and-ivory "
     "facings with one gold line are the calmest and the most visible.",
     f"""{img("mockups/shelf.png", "")}""")

# 24–25 Web ----------------------------------------------------------------------------------------------------
page("6.1 · Website", "The identity, carried by the 3D grain.",
     "Header lockup at 26 px (22 px on mobile), Tiro and Mukta self-hosted, tokens in site.css, the gold progress line "
     "under the header, and the 3D pack wearing the V1 front.",
     f"""{img("applications/website-desktop.png", "max-height:66%")}
     <div class="cols3" style="margin-top:20px"><div><h4>Buttons</h4><p>Pill, Sangat Forest with ivory text; secondary as text link with a 1 px underline. Focus ring: 3 px Sunehra Gold.</p></div>
     <div><h4>Section grounds</h4><p>Ivory for reading, Husk Sand for cards, Forest and Night Forest for the "why" chapter and the footer. Gold never fills a section.</p></div>
     <div><h4>Type on screen</h4><p>Tiro 400 for headings (italic for the emphasised half), Mukta 400/600 for text and labels; labels in caps at +0.16 em.</p></div></div>""")
page("6.2 · Mobile and the QR story", "From the back of the pack to the people.",
     "The QR code on every pack opens story.html: the batch (placeholders until MVS confirms each batch) and three "
     "routes into the story. The bindu marks the QR on pack and screen.",
     f"""{img("applications/website-mobile.png", "")}""")

# 26–27 Applications -------------------------------------------------------------------------------------------
page("7.1 · Stationery", "Two inks and a little gold.", "Business card, A4 letterhead and compliments slip. All names "
     "and contact details are placeholders.", f"""{img("applications/stationery.png", "")}""")
page("7.2 · Social and one-colour use", "Recognisable in any single ink.",
     "Post, story and avatar on the brand grounds; the mark in black, white, ivory on forest, forest only, hot foil, "
     "blind deboss and as a stamp on a jute sack.",
     f"""<div class="two" style="grid-template-columns:1fr 1.1fr">{img("applications/social.png", "")}{img("applications/monochrome.png", "")}</div>""")

# 28 Open items ------------------------------------------------------------------------------------------------
page("8.1 · Before anything is printed", "What is real, and what is still a placeholder.",
     "This system is complete as design. These items need people, suppliers or regulators before production.",
     """<div class="cols3"><div><h4>Confirm with MVS</h4><ul><li>Every product fact: grain length, ageing, origin, variety</li>
     <li>Batch data for the QR page</li><li>Farmer names, photos and quotes, only with consent</li>
     <li>Any certification or impact claim: none is made here</li></ul></div>
     <div><h4>Suppliers and regulators</h4><ul><li>Converter dielines for 1 kg and 5 kg (sizes here are assumed)</li>
     <li>FSSAI labelling review: veg mark, licence, MRP, net quantity, nutrition</li><li>Barcode (GS1 India) and QR URL</li>
     <li>Pantone drawdowns, foil and UV registration on press proofs</li></ul></div>
     <div><h4>Protect the brand</h4><ul><li>Trademark search and filing for SANGAT and the mark (not done here)</li>
     <li>Photography shoot to the direction in system/photography.md</li><li>Fonts are SIL OFL 1.1: free for print, web and the outlined logo</li></ul></div></div>""")


def html():
    css = f"""
    @font-face{{font-family:Tiro;src:url(file://{FONTS}/tirodevanagarihindi/TiroDevanagariHindi-Regular.ttf)}}
    @font-face{{font-family:Mukta;src:url(file://{FONTS}/mukta/Mukta-Regular.ttf);font-weight:400}}
    @font-face{{font-family:Mukta;src:url(file://{FONTS}/mukta/Mukta-SemiBold.ttf);font-weight:600}}
    @page{{size:1920px 1080px;margin:0}}
    *{{box-sizing:border-box}} body{{margin:0;font:400 19px/1.55 Mukta;color:#131F18}}
    .pg{{width:1920px;height:1080px;background:#F6F1E5;position:relative;overflow:hidden;page-break-after:always;padding:56px 80px 96px;display:flex;flex-direction:column}}
    .bd{{flex:1;min-height:0;position:relative}} .bd>img{{max-width:100%;max-height:100%;object-fit:contain;display:block;margin:0 auto}}
    .two{{height:100%;grid-template-rows:100%}} .two>*{{min-height:0}} .two>img,.two>div>img{{max-width:100%;max-height:100%;object-fit:contain;display:block}} .stack2>img{{flex:1 1 0;min-height:0;width:100%;object-fit:contain;object-position:left top}}
    .hd{{display:flex;justify-content:space-between;align-items:flex-start}}
    .hd .b{{font:400 30px Tiro}} .hd .s{{font:600 13px Mukta;letter-spacing:.16em;text-transform:uppercase;color:#896126}}
    .hd .n{{font:400 44px Tiro}}
    .line{{position:absolute;left:0;right:0;top:128px;height:4px;background:#A07A35}}
    h2{{font:400 54px/1.04 Tiro;color:#1E3A2F;margin:74px 0 8px;max-width:1500px}}
    .lead{{color:#4C5951;max-width:1350px;margin:0 0 24px;font-size:19px}}
    h4{{font:600 13px Mukta;letter-spacing:.16em;text-transform:uppercase;color:#896126;margin:0 0 6px}}
    p{{margin:0 0 18px}} ul{{margin:0;padding-left:20px}} li{{margin-bottom:8px}}
    .cols3{{display:grid;grid-template-columns:repeat(3,1fr);gap:56px}}
    .two{{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start}}
    .tag{{font:400 34px/1.2 Tiro;color:#1E3A2F;margin:6px 0 26px}} .tag small{{display:block;font-size:22px;color:#896126}}
    .t{{border-collapse:collapse;width:100%;font-size:17px}} .t th{{text-align:left;font:600 12px Mukta;letter-spacing:.14em;text-transform:uppercase;color:#4C5951;padding:8px 10px;border-bottom:1px solid #DDD3BC}}
    .t td{{padding:6px 10px;border-bottom:1px solid #E6DECC;vertical-align:middle}} .t .tot td{{font-weight:600;color:#1E3A2F;border-top:2px solid #1E3A2F}}
    .t td:not(:first-child){{font-variant-numeric:tabular-nums}}
    .pal i{{display:block;width:48px;height:30px;border-radius:6px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.08)}} .pal span{{color:#4C5951;font-size:14px}}
    .gl{{display:grid;grid-template-columns:1.4fr 1fr 0.6fr;gap:24px;height:420px}} .sw{{border-radius:12px;overflow:hidden}}
    .icons{{display:flex;justify-content:space-between;margin-top:36px}} figure{{margin:0;text-align:center}}
    figcaption{{font:400 14px Mukta;color:#4C5951;margin-top:8px}}
    img{{border-radius:8px}}
    .ft{{position:absolute;left:80px;right:80px;bottom:30px;border-top:1px solid #DDD3BC;padding-top:12px;display:flex;
      justify-content:space-between;font:600 11px Mukta;letter-spacing:.16em;text-transform:uppercase;color:#4C5951}}
    """
    out = []
    for i, (sec, title, lead, body) in enumerate(PAGES, 14):
        out.append(f'<section class="pg"><div class="hd"><div class="b">Sangat</div><div class="s">{sec}</div>'
                   f'<div class="n">{i:02d}</div></div><div class="line"></div><h2>{title}</h2><p class="lead">{lead}</p>'
                   f'<div class="bd">{body}</div><div class="ft"><span>Brand guidelines · system in use</span><span>Sanjhi Soch, Sunehra Kal</span>'
                   f'<span>Version 1.0 · October 2026</span></div></section>')
    return f'<!doctype html><meta charset="utf-8"><style>{css}</style>' + "".join(out)


def main():
    hp = os.path.join(OUT, "brandbook.html")
    open(hp, "w").write(html())
    pdf = os.path.join(OUT, "brandbook-extension.pdf")
    js = f"""const {{chromium}}=require('playwright');(async()=>{{const b=await chromium.launch();const p=await b.newPage({{viewport:{{width:1920,height:1080}}}});
await p.goto('file://{hp}');await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(500);
await p.pdf({{path:'{pdf}',width:'1920px',height:'1080px',printBackground:true,preferCSSPageSize:true}});
const n=await p.$$('.pg');for(let i=0;i<n.length;i++){{await n[i].screenshot({{path:'{OUT}/page-'+String(i+14).padStart(2,'0')+'.png',timeout:120000}});}}
await b.close();}})();"""
    subprocess.run(["node", "-e", js], check=True, env={**os.environ, "NODE_PATH": NODE_PATH})
    w = PdfWriter()
    for src in [os.path.join(W, "kit/A/sangat-guidelines.pdf"), pdf]:
        for pg in PdfReader(src).pages:
            w.add_page(pg)
    dst = os.path.join(W, "deliverables/sangat-brand-guidelines.pdf")
    with open(dst, "wb") as f:
        w.write(f)
    print("wrote", dst, len(w.pages), "pages")


if __name__ == "__main__":
    main()
