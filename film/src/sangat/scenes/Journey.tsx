import React from "react";
import { AbsoluteFill, OffthreadVideo, staticFile, useCurrentFrame } from "remotion";
import { SCENE, OVERLAP } from "../tokens";
import { lerpF, smooth } from "../ease";

// Scene 4 (00:13 to 00:18): the ripe grain falls at harvest, gathers in a heap, is milled and graded, and pours
// into the pack (the website's 3D scene, shot "journey": one continuous camera, so the moves are match cuts
// within one world). Enters from scene 3 on the falling grain; ends on the 3D pack, which scene 5 matches.
export const Journey: React.FC<{ offset: number }> = ({ offset }) => {
  const f = useCurrentFrame() - offset;
  const len = SCENE.journey + 2 * OVERLAP;
  const fadeIn = lerpF(f, -OVERLAP, 6, 0, 1, smooth);
  const push = lerpF(f, -OVERLAP, 20, 1.08, 1.0, smooth);
  return (
    <AbsoluteFill style={{ background: "#EFE8D8", opacity: fadeIn, overflow: "hidden" }}>
      <AbsoluteFill style={{ transform: `scale(${push})` }}>
        <OffthreadVideo src={staticFile("sangat/footage/journey.mp4")} muted playbackRate={165 / len}
          style={{ width: "100%", height: "100%" }} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
