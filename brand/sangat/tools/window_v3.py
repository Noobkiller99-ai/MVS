"""The clear rice window ("transparent section") on the Sangat pack front, measured on the client's exact brand board
(Sangat_Brand_Board_Exact.svg, 5 kg pack; front panel x 1108-1432, y 44-530 in board pixels, a 300 x 450
proportion) and stored as fractions of the front panel, so the 1 kg and 5 kg fronts place it identically.

Outline, clockwise from the tip: down the pack's right edge, then along the top of the field to the lower point,
then back up the gold-rimmed left edge."""
import numpy as np

PANEL = (1108.0, 44.0, 324.0, 486.0)        # x, y, w, h on the board
BOARD_PTS = {
    "right": [(1409.25, 272.0), (1420.0, 292.5), (1429.5, 317.5), (1432.0, 345.0), (1432.0, 390.0)],
    "field": [(1410.0, 410.0), (1380.0, 420.0), (1355.0, 435.0), (1327.5, 450.0), (1302.5, 465.0), (1285.0, 477.5)],
    "bottom": [(1280.0, 492.5)],
    "left": [(1287.5, 470.0), (1297.5, 445.0), (1310.0, 415.0), (1322.5, 390.0), (1335.0, 367.5), (1350.0, 350.0),
             (1370.0, 330.0), (1390.0, 302.5)],
}


def norm(pts):
    x0, y0, w, h = PANEL
    return [((x - x0) / w, (y - y0) / h) for x, y in pts]


def outline():
    """Closed outline as fractions (u, v) of the front panel."""
    return norm(BOARD_PTS["right"] + BOARD_PTS["field"] + BOARD_PTS["bottom"] + BOARD_PTS["left"])


def _cr(P, closed=True):
    P = [np.array(p, float) for p in P]
    n = len(P)
    d = f"M{P[0][0]:.2f} {P[0][1]:.2f}"
    for i in range(n if closed else n - 1):
        p0, p1, p2, p3 = P[(i - 1) % n], P[i], P[(i + 1) % n], P[(i + 2) % n]
        if not closed:
            p0, p3 = P[max(i - 1, 0)], P[min(i + 2, n - 1)]
        c1, c2 = p1 + (p2 - p0) / 6, p2 - (p3 - p1) / 6
        d += f"C{c1[0]:.2f} {c1[1]:.2f} {c2[0]:.2f} {c2[1]:.2f} {p2[0]:.2f} {p2[1]:.2f}"
    return d + ("Z" if closed else "")


def window_path(ox, oy, w, h):
    """The window outline on a front panel at (ox, oy) of size w x h."""
    return _cr([(ox + u * w, oy + v * h) for u, v in outline()])


def rims(ox, oy, w, h):
    """The two gold rims: the left edge (tip to lower point) and the field edge (right side to lower point)."""
    tip = BOARD_PTS["right"][:1]
    left = norm(tip + BOARD_PTS["left"][::-1] + BOARD_PTS["bottom"])
    field = norm(BOARD_PTS["right"][-1:] + BOARD_PTS["field"] + BOARD_PTS["bottom"])
    f = lambda pts: _cr([(ox + u * w, oy + v * h) for u, v in pts], closed=False)
    return f(left), f(field)
