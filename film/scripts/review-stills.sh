#!/bin/bash
# Render review stills of the Sangat film at its key beats and tile them into out/qa/contact.png.
# Usage: scripts/review-stills.sh [frame ...]
set -e
cd "$(dirname "$0")/.."
FRAMES=${@:-"20 70 112 128 170 225 262 330 385 420 470 520 548 600 650 672 700 745"}
mkdir -p out/qa
for f in $FRAMES; do
  npx remotion still SangatLaunchReel "out/qa/f$(printf %04d $f).png" --frame=$f --ignore-certificate-errors \
    ${REMOTION_BROWSER:+--browser-executable="$REMOTION_BROWSER"} --log=error >/dev/null
done
python3 - "$FRAMES" <<'PY'
import sys
from PIL import Image, ImageDraw
fr = sys.argv[1].split()
ims = [Image.open(f"out/qa/f{int(f):04d}.png").convert("RGB").resize((270, 480)) for f in fr]
cols = 6
rows = (len(ims) + cols - 1) // cols
o = Image.new("RGB", (cols * 280, rows * 505), "white")
d = ImageDraw.Draw(o)
for i, (im, f) in enumerate(zip(ims, fr)):
    x, y = (i % cols) * 280, (i // cols) * 505
    o.paste(im, (x, y))
    d.text((x + 4, y + 484), f"f{f}  {int(f)/30:.2f}s", fill=(0, 0, 0))
o.save("out/qa/contact.png")
PY
echo out/qa/contact.png
