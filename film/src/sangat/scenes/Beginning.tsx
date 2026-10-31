import React from "react";
import { AbsoluteFill, OffthreadVideo, staticFile, useCurrentFrame } from "remotion";
import { DustField } from "../../lib/DustField";
import { lerpF, smooth, inCubic } from "../ease";

// Scene 1 (00:00 to 00:04): one milled basmati grain emerges from warm darkness under a golden key light, turning
// slowly as the camera creeps in. In its last frames the camera pushes into the grain's glow, which becomes the
// light the landscape is revealed in. Footage: the website's 3D grain (film/capture, shot "beginning").
export const Beginning: React.FC<{ offset: number }> = ({ offset }) => {
  const f = useCurrentFrame() - offset;
  const emerge = lerpF(f, 0, 42, 0, 1, smooth);
  const push = lerpF(f, 92, 138, 1, 3.2, inCubic);
  const burn = lerpF(f, 100, 124, 1, 2.6, inCubic);   // the grain's glow blooms into the leak
  const out = lerpF(f, 108, 118, 1, 0, smooth);       // gone before the leak peaks
  const glow = lerpF(f, 14, 70, 0, 1, smooth) * (1 - lerpF(f, 100, 120, 0, 0.4));
  return (
    <AbsoluteFill style={{ background: "radial-gradient(60% 42% at 50% 46%, #2a1c10 0%, #120c07 55%, #060403 100%)", opacity: out }}>
      <AbsoluteFill style={{ overflow: "hidden" }}>
        <AbsoluteFill style={{ transform: `scale(${push})`, transformOrigin: "50% 47%", filter: `brightness(${(0.15 + 0.85 * emerge) * burn})`, opacity: emerge }}>
          <OffthreadVideo src={staticFile("sangat/footage/beginning.mp4")} muted style={{ width: "100%", height: "100%" }} />
        </AbsoluteFill>
      </AbsoluteFill>
      <AbsoluteFill style={{ mixBlendMode: "screen", opacity: glow * 0.55,
        background: "radial-gradient(28% 18% at 46% 42%, rgba(255,196,120,0.55), rgba(255,170,80,0) 70%)" }} />
      <AbsoluteFill style={{ opacity: 0.5 * emerge }}>
        <DustField count={46} seed="sangat-dust" opacity={0.55} color="#E8C48A" />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
