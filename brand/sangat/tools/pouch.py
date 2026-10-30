"""Shared CSS pouch shape for the Sangat pack visualisations (stand-up pouch silhouette, crimp, zip, handle)."""

# Pouch: the artwork clipped to a pouch silhouette, then curvature, crimp and sheen overlays.
POUCH_CSS = """
.pouch{position:relative;filter:drop-shadow(0 26px 22px rgba(10,20,14,.28)) drop-shadow(0 6px 6px rgba(10,20,14,.18))}
.pouch .body{position:absolute;inset:0;overflow:hidden;
  clip-path:path(var(--clip));background-size:100% 100%;background-image:var(--art)}
.pouch .body::before{content:"";position:absolute;inset:0;mix-blend-mode:multiply;
  background:linear-gradient(90deg,rgba(0,0,0,.30) 0%,rgba(0,0,0,.06) 9%,rgba(0,0,0,0) 22%,rgba(0,0,0,0) 70%,
  rgba(0,0,0,.08) 88%,rgba(0,0,0,.34) 100%)}
.pouch .body::after{content:"";position:absolute;inset:0;mix-blend-mode:screen;
  background:linear-gradient(100deg,rgba(255,255,255,0) 18%,rgba(255,255,255,.13) 30%,rgba(255,255,255,0) 42%),
  linear-gradient(180deg,rgba(255,255,255,.10) 0%,rgba(255,255,255,0) 14%,rgba(255,255,255,0) 86%,rgba(0,0,0,.0) 100%)}
.pouch .crimp{position:absolute;left:0;right:0;top:0;height:var(--crimp);
  background:repeating-linear-gradient(90deg,rgba(255,255,255,.10) 0 2px,rgba(0,0,0,.14) 2px 4px);
  clip-path:path(var(--clip));mix-blend-mode:overlay}
.pouch .zip{position:absolute;left:3%;right:3%;top:var(--zip);height:3px;border-radius:2px;
  background:linear-gradient(180deg,rgba(255,255,255,.18),rgba(0,0,0,.28))}
.pouch .base{position:absolute;left:4%;right:4%;bottom:-6px;height:14px;border-radius:50%;
  background:radial-gradient(ellipse at center,rgba(0,0,0,.35),rgba(0,0,0,0) 70%);filter:blur(3px);z-index:-1}
.pouch .handle{position:absolute;left:50%;transform:translateX(-50%);top:var(--handle-top);
  width:var(--handle-w);height:var(--handle-h);border-radius:999px;background:var(--behind);
  box-shadow:inset 0 3px 5px rgba(0,0,0,.35)}
"""


def pouch_clip(w, h, bulge=0.018):
    """Stand-up pouch silhouette: straight crimped top, sides bow out slightly, rounded gusseted base."""
    b = w * bulge
    r = w * 0.05
    return (f"M0 0 L{w} 0 C{w + b} {h * .35} {w + b} {h * .7} {w - r * .2} {h - r} "
            f"Q{w - r * .6} {h} {w - r * 1.6} {h} L{r * 1.6} {h} Q{r * .6} {h} {r * .2} {h - r} "
            f"C{-b} {h * .7} {-b} {h * .35} 0 0 Z")
