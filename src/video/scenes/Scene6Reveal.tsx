import React from "react";
import { AbsoluteFill } from "remotion";
import { SCENE } from "../tokens";
import { BrandEndcard } from "../components/BrandEndcard";

export const Scene6Reveal: React.FC = () => {
  const duration = SCENE.reveal;

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      <BrandEndcard durationInFrames={duration} />
    </AbsoluteFill>
  );
};
