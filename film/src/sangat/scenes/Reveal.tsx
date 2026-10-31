import React from "react";
import { AbsoluteFill, staticFile, useCurrentFrame } from "remotion";
import { Pouch } from "../components/Pouch";
import { lerpF, smooth, inOutCubic } from "../ease";

// Scene 5 (00:18 to 00:22): the reveal. The 3D pack the grain poured into dissolves into the real 1 kg pack
// (the V1 Ivory Landscape artwork, unaltered), and the camera eases back along a warm table to bring in the 5 kg
// pack beside it: soft window light from the upper right, contact shadows, one slow sheen across the packs.
export const Reveal: React.FC<{ offset: number }> = ({ offset }) => {
  const f = useCurrentFrame() - offset;
  const fadeIn = lerpF(f, -1, 2, 0, 1, smooth);   // a two-frame match cut from the 3D pack
  const t = lerpF(f, -6, 112, 0, 1, inOutCubic);
  // camera: the 1 kg pack starts exactly where the 3D pack ends in scene 4 (centre 570, 1080; 620 px wide), so the
  // dissolve is a match cut; then it eases back to frame both packs on the table
  const s0 = 620 / 360, c0x = 570 - 760 * s0, c0y = 1080 - 1030 * s0;
  const s1 = 1.12, c1x = 540 - 505 * s1, c1y = 1420 - 1310 * s1;   // resting frame: both packs, centred, larger
  const zoom = s0 + (s1 - s0) * t;
  const tx = c0x + (c1x - c0x) * t, ty = c0y + (c1y - c0y) * t;
  const sheen = lerpF(f, 46, 104, -0.2, 1.2, smooth);
  const fadeOut = lerpF(f, 112, 138, 1, 0, smooth);
  return (
    <AbsoluteFill style={{ opacity: fadeIn * fadeOut, overflow: "hidden",
      background: "radial-gradient(90% 60% at 72% 26%, #F6E8CC 0%, #E2C79A 45%, #A9814F 100%)" }}>
      {/* warm window light from the upper right */}
      <AbsoluteFill style={{ background: "radial-gradient(45% 30% at 82% 16%, rgba(255,240,206,0.85), rgba(255,240,206,0) 72%)" }} />
      <AbsoluteFill style={{ transform: `translate(${tx}px, ${ty}px) scale(${zoom})`, transformOrigin: "0 0" }}>
        {/* the table */}
        <div style={{ position: "absolute", left: -200, right: -200, top: 1290, bottom: -200,
          background: "repeating-linear-gradient(179deg, rgba(60,35,15,0) 0 22px, rgba(60,35,15,0.08) 22px 24px), linear-gradient(180deg, #A9804F 0%, #7B5531 55%, #5A3B20 100%)",
          boxShadow: "inset 0 3px 0 rgba(255,230,190,0.35)" }} />
        <div style={{ position: "absolute", left: 70, top: 1310 - 690 }}>
          <Pouch src={staticFile("sangat/packs/sangat-5kg-front.png")} width={460} height={690} kind="5kg" sheen={sheen - 0.15} behind="#E6CFA6" />
        </div>
        <div style={{ position: "absolute", left: 580, top: 1310 - 560 }}>
          <Pouch src={staticFile("sangat/packs/sangat-1kg-front.png")} width={360} height={560} kind="1kg" sheen={sheen} />
        </div>
      </AbsoluteFill>
      <AbsoluteFill style={{ background: "linear-gradient(180deg, rgba(20,12,4,0) 70%, rgba(20,12,4,0.25) 100%)" }} />
    </AbsoluteFill>
  );
};
