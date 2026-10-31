import React from "react";
import { AbsoluteFill, Img, staticFile, useCurrentFrame } from "remotion";
import { COLORS, FONTS } from "../tokens";
import { lerpF, smooth, outCubic } from "../ease";

// Scene 6 (00:22 to 00:25): the brand frame. Clean ivory; the Sangat wordmark (the traced master) resolves
// left to right, then its gold rice ear grows out of the g: the grain's last appearance. The tagline settles
// beneath, and the frame holds for a full second.
export const Brand: React.FC<{ offset: number }> = ({ offset }) => {
  const f = useCurrentFrame() - offset;
  const bg = lerpF(f, -18, 0, 0, 1, smooth);
  const wipe = lerpF(f, -8, 22, 0, 1, outCubic);
  const rise = lerpF(f, -8, 26, 18, 0, outCubic);
  const ear = lerpF(f, 16, 40, 0, 1, outCubic);
  const tag = lerpF(f, 30, 54, 0, 1, smooth);
  const track = lerpF(f, 30, 60, 0.32, 0.14, outCubic);
  const rule = lerpF(f, 26, 50, 0, 1, outCubic);
  const W = 760, H = (W * 193.06) / 452.62;   // the wordmark master viewBox
  const mask = `linear-gradient(90deg, #000 ${wipe * 120 - 20}%, transparent ${wipe * 120}%)`;
  return (
    <AbsoluteFill style={{ background: COLORS.ivory, opacity: bg }}>
      <AbsoluteFill style={{ background: "radial-gradient(70% 45% at 50% 44%, rgba(255,250,236,1), rgba(240,232,214,1) 100%)" }} />
      <div style={{ position: "absolute", left: (1080 - W) / 2, top: 780 + rise, width: W, height: H }}>
        <Img src={staticFile("sangat/logo/sangat-wordmark-letters.svg")} style={{ position: "absolute", inset: 0, width: W, height: H,
          WebkitMaskImage: mask, maskImage: mask }} />
        <Img src={staticFile("sangat/logo/sangat-wordmark-ear.svg")} style={{ position: "absolute", inset: 0, width: W, height: H,
          opacity: ear, transform: `scaleY(${0.6 + 0.4 * ear})`, transformOrigin: "62% 52%",
          filter: `drop-shadow(0 0 ${18 * (1 - ear)}px rgba(201,169,107,0.9))` }} />
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, top: 780 + H + 58, display: "flex", justifyContent: "center" }}>
        <div style={{ width: 260 * rule, height: 1.5, background: COLORS.gold }} />
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, top: 780 + H + 92, textAlign: "center", opacity: tag,
        fontFamily: FONTS.editorial, fontSize: 46, letterSpacing: `${track}em`, color: COLORS.earthUi }}>
        Sanjhi Soch, Sunehra Kal
      </div>
    </AbsoluteFill>
  );
};
