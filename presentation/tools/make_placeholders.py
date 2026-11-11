"""Generate designed photo-placeholder images for the Sangat DoCC deck.
Each placeholder is a real picture so PowerPoint 'Change Picture' keeps the frame."""
import sys, os
from PIL import Image, ImageDraw, ImageFont, ImageEnhance
P = sys.argv[1]; I = os.path.join(P, 'images'); F = os.path.expanduser('~/.fonts')
semi = lambda s: ImageFont.truetype(f'/usr/share/fonts/opentype/inter/Inter-SemiBold.otf', s)
reg = lambda s: ImageFont.truetype(f'/usr/share/fonts/opentype/inter/Inter-Regular.otf', s)
serif_i = lambda s: ImageFont.truetype(f'{F}/playfair-display-latin-400-italic.ttf', s)
items = [
 ('phx_s03_mvs_orientation', 1200, 900, 'SLIDE 03', 'INSERT MVS ORIENTATION / EHSAAS MELA PHOTO', 'Programme exposure with the MVS team', '4:3 landscape'),
 ('phx_s04_beauty_parlour', 900, 1200, 'SLIDE 04', 'INSERT BEAUTY PARLOUR OWNER PHOTO', 'Chandpur · local enterprise', '3:4 portrait'),
 ('phx_s04_pickle_maker', 900, 1200, 'SLIDE 04', 'INSERT PICKLE-MAKING INTERACTION PHOTO', 'Chandpur · home-made pickles', '3:4 portrait'),
 ('phx_s05_akshay_sir', 1200, 900, 'SLIDE 05', 'INSERT AKSHAY SIR NURSERY WALKTHROUGH PHOTO', 'Fatehgarh Sahib · nursery processes', '4:3 landscape'),
 ('phx_s09_shg_meeting', 1200, 900, 'SLIDE 09', 'INSERT SHG INTERACTION PHOTO', 'Women’s self-help group meeting', '4:3 landscape'),
 ('phx_s09_women_entrepreneur', 900, 1200, 'SLIDE 09', 'INSERT WOMEN ENTREPRENEUR PHOTO', 'Women’s livelihood activity', '3:4 portrait'),
 ('phx_s11_consumer_interview', 900, 1200, 'SLIDE 11', 'INSERT GROCERY STORE / CONSUMER INTERVIEW PHOTO', 'Consumer or retailer conversation', '3:4 portrait'),
 ('phx_s20_team_session', 1200, 900, 'SLIDE 20', 'INSERT TEAM WORKING SESSION PHOTO', 'Brand and packaging development', '4:3 landscape'),
]
land = Image.open(os.path.join(I, 'art_landscape_transparent.png')).convert('RGBA')
sym = Image.open(os.path.join(I, 'logo_symbol_gold.png')).convert('RGBA')
def wrap(d, text, font, width):
    words, lines, cur = text.split(), [], ''
    for w in words:
        t = (cur + ' ' + w).strip()
        if d.textlength(t, font=font) <= width: cur = t
        else: lines.append(cur); cur = w
    lines.append(cur); return lines
for name, W, H, slide, label, sub, ratio in items:
    im = Image.new('RGBA', (W, H), (237, 229, 211, 255))
    d = ImageDraw.Draw(im)
    for y in range(H):  # soft vertical tone
        t = y / H; c = tuple(int(a + (b - a) * t) for a, b in zip((240, 234, 219), (226, 216, 194)))
        d.line([(0, y), (W, y)], fill=c + (255,))
    # faint landscape silhouette along the bottom
    lw = W; lh = int(land.height * lw / land.width)
    l = land.resize((lw, lh), Image.LANCZOS)
    a = l.split()[3].point(lambda v: int(v * 0.13)); l.putalpha(a)
    g = ImageEnhance.Color(l).enhance(0.35); g.putalpha(a)
    keep = int(lh * (0.55 if W > H else 1.0)); g = g.crop((0, lh - keep, lw, lh))
    im.alpha_composite(g, (0, H - keep))
    # corner crop marks
    m, L, wdt = 36, 54, 3; col = (121, 92, 67, 255)
    for (x, y, sx, sy) in [(m, m, 1, 1), (W - m, m, -1, 1), (m, H - m, 1, -1), (W - m, H - m, -1, -1)]:
        d.line([(x, y), (x + sx * L, y)], fill=col, width=wdt); d.line([(x, y), (x, y + sy * L)], fill=col, width=wdt)
    # rice-ear symbol
    sh = int(H * 0.16); s = sym.resize((int(sym.width * sh / sym.height), sh), Image.LANCZOS)
    sa = s.split()[3].point(lambda v: int(v * 0.85)); s.putalpha(sa)
    cy = int(H * 0.30); im.alpha_composite(s, (W // 2 - s.width // 2, cy))
    y = cy + sh + 34
    f1 = semi(34 if W > H else 32)
    for line in wrap(d, label, f1, W - 2 * 110):
        tw = d.textlength(line, font=f1); d.text(((W - tw) / 2, y), line, font=f1, fill=(16, 63, 48, 255)); y += 46
    y += 10; f2 = serif_i(34)
    tw = d.textlength(sub, font=f2); d.text(((W - tw) / 2, y), sub, font=f2, fill=(121, 92, 67, 255)); y += 60
    f3 = reg(24); hint = f'{slide}  ·  {ratio}  ·  Right-click → Change Picture'
    tw = d.textlength(hint, font=f3); d.text(((W - tw) / 2, y), hint, font=f3, fill=(95, 101, 95, 255))
    im.convert('RGB').save(os.path.join(I, name + '.png'), optimize=True)
    print('wrote', name)
