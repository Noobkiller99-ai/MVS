"""The clear rice window ("transparent section") on the Sangat pack front, built from the landscape artwork so it flows
with it, as on the client's brand board: the window is the top band of the big hill that sweeps from the bottom
middle of the artwork up to its top-right corner. Its upper edge IS the hill's crest (traced from
art/source/sangat-landscape-source.png) with a gold rim; its lower edge runs inside the hill, opening from a point
near the bottom middle and widening to the pack edge. The artwork's foreground rice ears are drawn over the window,
so they cross in front of the rice the way they do on the board.

All geometry is in source-art pixels (1774 x 887) and mapped for a given placement of the artwork."""
import numpy as np

CREST = [(760, 742), (830, 703), (900, 668), (970, 636), (1060, 597), (1150, 566), (1245, 521), (1300, 492),
         (1350, 462), (1386, 440)] + [(1414, 421), (1420, 416), (1426, 412), (1432, 407), (1438, 403), (1444, 399), (1450, 394), (1456, 390), (1462, 386), (1468, 382), (1474, 379), (1480, 375), (1486, 371), (1492, 367), (1498, 364), (1504, 360), (1510, 356), (1516, 353), (1522, 349), (1528, 345), (1534, 342), (1540, 338), (1546, 335), (1552, 331), (1558, 328), (1564, 325), (1570, 321), (1576, 318), (1582, 314), (1588, 311), (1594, 307), (1600, 304), (1606, 301), (1612, 297), (1618, 294), (1624, 290), (1630, 287), (1636, 283), (1642, 280), (1648, 277), (1654, 273), (1660, 270), (1666, 267), (1672, 264), (1678, 260), (1684, 257), (1690, 254), (1696, 251), (1702, 248), (1708, 245), (1714, 243), (1720, 240), (1726, 237), (1732, 234), (1738, 232), (1744, 230), (1750, 227), (1756, 225), (1762, 222), (1768, 220)]
DEPTH = 300          # how far below the crest the window's lower edge reaches at the right edge (art px)
POWER = 1.15


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


def _smooth(P, n=3):
    P = np.array(P, float)
    k = np.ones(2 * n + 1) / (2 * n + 1)
    out = P.copy()
    for i in (0, 1):
        pad = np.r_[[P[0, i]] * n, P[:, i], [P[-1, i]] * n]
        out[:, i] = np.convolve(pad, k, "valid")
    out[0], out[-1] = P[0], P[-1]
    return out


def art_geometry():
    """Crest and lower edge in art pixels, both ending on the art's right edge (x = 1774)."""
    crest = _smooth(CREST)[::2]
    crest = np.vstack([crest, [[1774, CREST[-1][1]]]])
    x0, x1 = crest[0, 0], 1774.0
    lower = np.array([[x, y + DEPTH * max(0.0, (x - x0) / (x1 - x0)) ** POWER] for x, y in crest])
    return crest, lower


TIP = (0.93, 0.47)        # fraction of the front panel: the window's tip beside BASMATI RICE, as on the board
SHOULDER_V = 0.53         # where the tip's right side meets the pack edge


def _clip_x(P, xmax):
    """Polyline truncated at x = xmax (interpolating the crossing)."""
    out = [P[0]]
    for a, b in zip(P[:-1], P[1:]):
        if b[0] <= xmax:
            out.append(b)
            continue
        t = (xmax - a[0]) / (b[0] - a[0])
        out.append(a + t * (b - a))
        break
    return np.array(out)


def geometry(ox, w, h, art=None):
    """A wedge that flows with the artwork, as on the board. Its gold-rimmed upper edge is the hill crest's own curve,
    stretched from where the crest starts (low in the fields) up to the tip beside BASMATI RICE; its lower edge runs
    inside the hill below the crest. The pack's right edge closes it. art = (x, y, width) of the artwork's placement."""
    ax, ay, aw = art or (ox, h - w / 2, w)
    s = aw / 1774
    m = lambda P: np.array([[ax + x * s, ay + y * s] for x, y in P])
    crest, lower = art_geometry()
    crest, lower = m(crest), m(lower)
    right = ox + w
    lower = _clip_x(lower, right)
    B = crest[0]
    T = np.array([ox + TIP[0] * w, TIP[1] * h])
    R = crest[-1]
    sx, sy = (T[0] - B[0]) / (R[0] - B[0]), (T[1] - B[1]) / (R[1] - B[1])
    upper = np.array([[B[0] + (p[0] - B[0]) * sx, B[1] + (p[1] - B[1]) * sy] for p in crest])
    S = np.array([right, SHOULDER_V * h])
    outline = list(upper) + [S] + list(lower[::-1][:-1])
    return upper, lower, outline


def window_path(ox, oy, w, h, art=None):
    return _cr(geometry(ox, w, h, art)[2])


def outline(w=1.0, h=1.0, art=None):
    _, _, o = geometry(0, w, h, art)
    return [(p[0] / w, p[1] / h) for p in o]


def rims(ox, oy, w, h, art=None):
    """Gold rims: the window's upper edge (the stretched crest) and its lower edge inside the hill."""
    crest, lower, _ = geometry(ox, w, h, art)
    return _cr(list(crest), closed=False), _cr(list(lower), closed=False)
