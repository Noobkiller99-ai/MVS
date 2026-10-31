# Sangat packaging specification (v3, laid out to the client's brand board)

Artwork: `packaging-v3/` (built by `tools/packaging_v3.py`). Mockups: `mockups-v3/`. The logo on every panel is the v3 master traced from the board.

| | 1 kg | 5 kg |
|---|---|---|
| Format (assumed) | Stand-up pouch with zip, 180 × 280 mm, bottom gusset 2 × 45 mm | Side-gusset bag with handle, 300 × 450 mm, sides 100 mm |
| Keep-out zones | Top seal 12 mm, zip at 30 mm: no content above 34 mm except the tab | Top seal 15 mm, handle die-cut 80 × 22 mm at 22 mm: no content above 52 mm except the tab |
| Front (board) | Forest tab with the gold symbol, wordmark, tagline, PREMIUM / BASMATI RICE / NATURALLY AROMATIC · THOUGHTFULLY GROWN (Libre Caslon), etched ears at the corners, the client's master landscape at the bottom (linked from `art/`, unmodified), the clear rice window as on the board, net quantity and veg mark on the foreground | Same, scaled |
| Back (board) | "A shared journey / for a brighter tomorrow", the board's copy, curved ivory band with four value icons, the master landscape, **the client's QR strip along the bottom** | Same |
| Legal | On the 1 kg base gusset: nutrition, ingredients, legal lines, FSSAI logo, veg mark, barcode | On the second side panel |
| Other gusset / side | 1 kg gusset: symbols and tagline | Side: symbol, "Good food grows from shared thinking.", Hindi tagline, a section of the master landscape |

## Variations

- **V1 Ivory Landscape**: ivory ground, forest tab, the master landscape (transparent variant) and the clear rice window. The everyday range.
- **V2 Forest Edition**: forest ground, gold tab, the same master landscape and rice window on forest. Gift and festive packs, or the 5 kg.

## Finishes (intent, to confirm on press proofs)

Matte paper-touch laminate on ivory; hot-foil gold for the ear, rules, ears and window edge; embossed wordmark on the 5 kg front and blind-embossed symbol on the tab; deeper spot matte on forest areas.

## Placeholders (must be completed before print)

Converter dielines; ingredients; nutrition per 100 g; cooking guide; MRP; batch, packed-on and best-before;
packer/marketer name and address; FSSAI licence number and logo; official veg-mark artwork; customer care;
EAN-13 (GS1 India); the QR code and short URL. Regulatory review (FSSAI Labelling and Display Regulations) of
type sizes and panel placement. "Naturally aromatic" and "thoughtfully grown" are descriptive lines to be
confirmed by MVS; no certification, origin or impact claim is printed on the pack.

## The landscape and the clear rice window

The front carries the board's transparent section: a clear, leaf-shaped window showing the rice. Its outline and
position were measured on the client's exact brand board (5 kg front panel, board pixels x 1108–1432, y 44–530) and
stored as fractions of the front panel in `tools/window_v3.py`, so the 1 kg and 5 kg fronts place it identically:
the tip beside BASMATI RICE at 93% across and 47% down, down the right edge, along the top of the field to a point
at 53% across and 92% down, with a gold rim on its left edge.

The master landscape is placed at the board's scale (43% of the panel height, its own 2:1 aspect, anchored
bottom-left); the panel crops its right end, which is under the window. The illustration itself is not redrawn or
recoloured. In the print artwork the window is shown clear (hatched and labelled CLEAR WINDOW); the `-front-mock.png`
renders fill it with rice. The window film, its seal margins and registration need the converter's dieline.
