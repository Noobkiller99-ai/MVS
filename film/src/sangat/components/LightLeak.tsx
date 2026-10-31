import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

// A warm light leak that sweeps diagonally and peaks at `peak` (absolute frame): the hidden cut between two
// scenes happens under its brightest frames (video-shotcraft transition-hidden-cut, style C, softened).
export const LightLeak: React.FC<{ peak: number; rise?: number; fall?: number; strength?: number }> = ({
  peak, rise = 16, fall = 22, strength = 0.85,
}) => {
  const frame = useCurrentFrame();
  if (frame < peak - rise || frame > peak + fall) return null;
  const up = interpolate(frame, [peak - rise, peak], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const down = interpolate(frame, [peak, peak + fall], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const k = Math.min(up * up, 1 - Math.pow(1 - down, 2)) * strength;
  const sweep = interpolate(frame, [peak - rise, peak + fall], [-30, 30], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ pointerEvents: "none", mixBlendMode: "screen", opacity: k }}>
      <AbsoluteFill style={{ background: `radial-gradient(60% 45% at ${50 + sweep}% ${40 - sweep * 0.6}%, #fff3d6 0%, #ffcf8a 30%, rgba(214,140,60,0.5) 55%, transparent 80%)` }} />
      <AbsoluteFill style={{ background: "linear-gradient(160deg, rgba(255,214,150,0.55), rgba(255,170,90,0.0) 60%)" }} />
      {/* the hot core: near white only at the peak, it hides the cut */}
      <AbsoluteFill style={{ background: "#FFF6E6", opacity: Math.pow(k, 3) }} />
    </AbsoluteFill>
  );
};
