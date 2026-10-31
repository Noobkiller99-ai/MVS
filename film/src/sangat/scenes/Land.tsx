import React from "react";
import { AbsoluteFill, Img, staticFile, useCurrentFrame } from "remotion";
import { HEIGHT, WIDTH } from "../tokens";
import { lerpF, smooth, inOutCubic, inCubic } from "../ease";

// Scene 2 (00:04 to 00:08): the Sangat landscape (the client's master illustration, its seven layers unchanged)
// revealed by a multiplane camera: it settles from a close, warm, high view to the composed frame while the layers
// slide at different speeds (video-shotcraft depth-layer-moves). Every layer lines up exactly at the end of the
// move, so the resting frame is the artwork itself. The exit pushes through the foreground rice into scene 3.
const ART_W = 3548, ART_H = 1774;
const LAYERS: { name: string; k: number }[] = [
  { name: "sky", k: 0.3 }, { name: "mountains", k: 0.45 }, { name: "full", k: 0.75 }, { name: "trees", k: 0.65 },
  { name: "farmhouse", k: 0.65 }, { name: "fields", k: 0.8 }, { name: "foliage", k: 1.0 }, { name: "rice-ears", k: 1.18 },
];

export const Land: React.FC<{ offset: number }> = ({ offset }) => {
  const f = useCurrentFrame() - offset;
  const scale = (HEIGHT * 1.0) / ART_H;                 // the art fills the frame height
  const artW = ART_W * scale;
  const camEnd = artW * 0.36, camStart = artW * 0.24;    // the farmhouse and tree first, then the valley
  const t = lerpF(f, -18, 112, 0, 1, inOutCubic);
  const cam = camStart + (camEnd - camStart) * t;
  const zoom = 1.18 - 0.18 * t;                          // a slow pull back that settles on the composed frame
  const exit = lerpF(f, 104, 138, 0, 1, inCubic);        // push through the foreground into scene 3
  const fadeIn = lerpF(f, 0, 5, 0, 1, smooth);     // appears under the light leak's peak
  return (
    <AbsoluteFill style={{ background: "#F7F4E9", opacity: fadeIn, overflow: "hidden" }}>
      {LAYERS.map(({ name, k }) => {
        const z = (1 + (zoom - 1) * k) * (1 + exit * (k >= 1 ? 2.2 * k : 0.35 * k));
        const x = WIDTH / 2 - (camEnd + (cam - camEnd) * k) * z;
        const y = HEIGHT / 2 - (HEIGHT / 2) * z;
        const blur = exit * (k >= 1 ? 14 * k : 0) + (k < 0.5 ? 0.6 : 0);
        return (
          <Img key={name} src={staticFile(`sangat/landscape/${name}.png`)} style={{
            position: "absolute", left: 0, top: 0, width: artW, height: HEIGHT,
            transform: `translate(${x}px, ${y}px) scale(${z})`, transformOrigin: "0 0",
            filter: blur > 0.5 ? `blur(${blur}px)` : undefined }} />
        );
      })}
      {/* atmospheric depth: morning haze over the far hills, warm sun from the upper right */}
      <AbsoluteFill style={{ background: "linear-gradient(180deg, rgba(249,246,238,0) 22%, rgba(249,246,238,0.28) 38%, rgba(249,246,238,0) 52%)" }} />
      <AbsoluteFill style={{ mixBlendMode: "screen", opacity: 0.55 - 0.25 * t,
        background: "radial-gradient(70% 40% at 82% 14%, rgba(255,214,150,0.65), rgba(255,214,150,0) 70%)" }} />
    </AbsoluteFill>
  );
};
