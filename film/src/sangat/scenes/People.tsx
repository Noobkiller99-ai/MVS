import React from "react";
import { AbsoluteFill, OffthreadVideo, staticFile, useCurrentFrame } from "remotion";
import { SCENE, OVERLAP } from "../tokens";
import { lerpF, smooth } from "../ease";

// Scene 3 (00:08 to 00:13): cultivation. The panicle stands over paddy water and ripens from green to gold
// (the website's 3D scene, shot "cultivation"). No farmer footage has been supplied, and the film does not
// generate people: pass `farmerClip` (a file in public/) and the scene opens on that real footage instead, then
// dissolves into the ripening panicle. See README, "Missing assets".
export const People: React.FC<{ offset: number; farmerClip?: string | null }> = ({ offset, farmerClip }) => {
  const f = useCurrentFrame() - offset;
  const len = SCENE.people + 2 * OVERLAP;
  const fadeIn = lerpF(f, -12, 10, 0, 1, smooth);
  const drift = lerpF(f, -OVERLAP, SCENE.people + OVERLAP, 1.06, 1.0);
  const clipOut = lerpF(f, 70, 92, 1, 0, smooth);
  return (
    <AbsoluteFill style={{ background: "#ECE9DA", opacity: fadeIn, overflow: "hidden" }}>
      <AbsoluteFill style={{ transform: `scale(${drift})` }}>
        <OffthreadVideo src={staticFile("sangat/footage/cultivation.mp4")} muted playbackRate={165 / len}
          style={{ width: "100%", height: "100%" }} />
      </AbsoluteFill>
      {farmerClip ? (
        <AbsoluteFill style={{ opacity: clipOut }}>
          <OffthreadVideo src={staticFile(farmerClip)} muted style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </AbsoluteFill>
      ) : null}
      <AbsoluteFill style={{ mixBlendMode: "screen", opacity: 0.35,
        background: "radial-gradient(60% 30% at 70% 12%, rgba(255,226,170,0.7), rgba(255,226,170,0) 70%)" }} />
    </AbsoluteFill>
  );
};
