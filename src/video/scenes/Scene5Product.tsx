import React from "react";
import { AbsoluteFill } from "remotion";
import { SCENE } from "../tokens";
import { ProductShowcase } from "../components/ProductShowcase";

export const Scene5Product: React.FC = () => {
  const duration = SCENE.product;

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      <ProductShowcase durationInFrames={duration} />
    </AbsoluteFill>
  );
};
