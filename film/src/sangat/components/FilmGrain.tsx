import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

// Film grain and a soft vignette over the whole film. The noise seed changes every frame (it is grain, not
// texture), at a low opacity so it is felt rather than seen.
export const FilmGrain: React.FC<{ opacity?: number; vignette?: number }> = ({ opacity = 0.07, vignette = 0.35 }) => {
  const frame = useCurrentFrame();
  const seed = frame % 24;
  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity, mixBlendMode: "overlay" }}>
        <filter id={`g${seed}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed={seed} stitchTiles="stitch" />
          <feColorMatrix values="0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 1.6 -0.3" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#g${seed})`} />
      </svg>
      <AbsoluteFill style={{ background: `radial-gradient(120% 80% at 50% 45%, transparent 55%, rgba(10,8,5,${vignette}) 100%)` }} />
    </AbsoluteFill>
  );
};
