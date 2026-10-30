#!/usr/bin/env python3
"""Logo test sheet (illustrate skill contact sheet): every layout on light and dark, one-colour, greyscale, and the
symbol and favicon at 16-128 px. Writes deliverables/logo/logo-test-sheet.png."""
import base64, os, re, subprocess

HERE = os.path.dirname(os.path.abspath(__file__))
W = os.path.normpath(os.path.join(HERE, ".."))
D = os.path.join(W, "deliverables")
NODE_PATH = subprocess.run(["npm", "root", "-g"], capture_output=True, text=True).stdout.strip()


def inl(name, st):
    s = open(os.path.join(D, "logo/svg", f"sangat-{name}.svg")).read()
    return re.sub(r"<title>.*?</title>", "", s).replace("<svg ", f'<svg style="display:block;{st}" ', 1)


def img(rel, st):
    return f'<img style="{st}" src="data:image/png;base64,{base64.b64encode(open(os.path.join(D, rel), "rb").read()).decode()}">'


rows = [("#F9F6EE", inl("primary-colour", "height:190px") + inl("stacked-colour", "height:230px") + inl("symbol-colour", "height:150px"), "colour on Ivory"),
        ("#0F3D2E", inl("primary-colour-reversed", "height:190px") + inl("stacked-colour-reversed", "height:230px") + inl("symbol-colour-reversed", "height:150px"), "reversed on Forest Green"),
        ("#FFFFFF", inl("horizontal-black", "height:84px") + inl("horizontal-forest", "height:84px") + inl("horizontal-gold", "height:84px"), "black · forest · gold (one colour)"),
        ("#000000", inl("horizontal-white", "height:84px") + inl("horizontal-colour", "height:84px;filter:grayscale(1) brightness(1.6)"), "white · greyscale check"),
        ("#F9F6EE", "".join(f'<figure>{inl("symbol-colour", f"width:{s}px;height:{s}px")}<figcaption>{s}px</figcaption></figure>' for s in (16, 24, 32, 48, 128))
         + "".join(f'<figure>{img(f"digital/web-icons/favicon-{s}.png", f"width:{s * 4}px;image-rendering:pixelated")}<figcaption>favicon {s} ×4</figcaption></figure>' for s in (16, 32))
         + f'<figure>{img("digital/web-icons/icon-192.png", "width:96px")}<figcaption>app icon</figcaption></figure>', "small sizes"),
        ("#0F3D2E", "".join(f'<figure>{inl("symbol-colour-reversed", f"width:{s}px;height:{s}px")}<figcaption>{s}px</figcaption></figure>' for s in (16, 24, 32, 48))
         + inl("wordmark-colour-reversed", "height:32px") + '<span style="color:#ccc;font-size:12px">wordmark at 32 px (minimum on screen)</span>', "")]
html = ('<!doctype html><meta charset="utf-8"><style>body{margin:0;font:12px sans-serif}.r{display:flex;gap:44px;align-items:center;padding:26px 40px}'
        'figure{margin:0;text-align:center}figcaption{margin-top:6px;font-size:11px;color:#888}.l{font-size:12px;color:#888}</style>'
        + "".join(f'<div class="r" style="background:{b}">{c}<span class="l">{t}</span></div>' for b, c, t in rows))
p = os.path.join(D, "logo/logo-test-sheet.html")
open(p, "w").write(html)
js = ("const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1400,height:900}});"
      f"await p.goto('file://{p}');await p.screenshot({{path:'{p[:-5]}.png',fullPage:true}});await b.close();}})();")
subprocess.run(["node", "-e", js], check=True, env={**os.environ, "NODE_PATH": NODE_PATH})
os.remove(p)
print("ok")
