"""The gold ear of the Sangat wordmark, redrawn as clean curves fitted to the board (board pixel coordinates).

Three parts, read off the board at 8x: the outer left blade, the inner tongue that curls from its tip, and the taller
right blade. Each edge is a Catmull-Rom curve through the measured points."""
import numpy as np


def _cr(points, closed=True):
    P = [np.array(p, float) for p in points]
    n = len(P)
    d = f"M{P[0][0]:.2f} {P[0][1]:.2f}"
    rng = range(n) if closed else range(n - 1)
    for i in rng:
        p0, p1, p2, p3 = P[(i - 1) % n], P[i], P[(i + 1) % n], P[(i + 2) % n]
        if not closed:
            p0 = P[max(i - 1, 0)]
            p3 = P[min(i + 2, n - 1)]
        c1 = p1 + (p2 - p0) / 6
        c2 = p2 - (p3 - p1) / 6
        d += f"C{c1[0]:.2f} {c1[1]:.2f} {c2[0]:.2f} {c2[1]:.2f} {p2[0]:.2f} {p2[1]:.2f}"
    return d + "Z"


T = (391.0, 69.5)                        # shared tip of the left blade and the tongue
LEFT_BLADE = [T, (384, 79), (375, 91), (367, 105), (361, 120), (358.5, 135), (359.5, 150), (364, 163), (371, 177),
              (372.5, 172), (371, 160), (368.5, 148), (366.5, 135), (367, 122), (370, 110), (375.5, 98), (382, 87),
              (387.5, 77)]
TONGUE = [T, (392.5, 80), (391, 91), (387, 101), (381, 110), (373, 121.5), (375.5, 112), (378.5, 104),
          (382.5, 95), (386.5, 85), (389.5, 75)]
RIGHT_BLADE = [(400.5, 98.5), (402.5, 108), (402, 120), (398.5, 133), (392.5, 147), (387, 160), (383.5, 173),
               (382.5, 186), (383.5, 197), (385.5, 207.5), (381, 200), (376, 190), (372, 178), (370.5, 165),
               (372.5, 152), (376.5, 140), (382.5, 128), (389.5, 116), (395.5, 106)]


def ear_paths():
    return {"blade-left": _cr(LEFT_BLADE), "tongue": _cr(TONGUE), "blade-right": _cr(RIGHT_BLADE)}
