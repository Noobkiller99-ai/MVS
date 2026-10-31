import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, Img, staticFile } from "remotion";
import { COLORS, SCENE } from "../tokens";
import { KineticCaption } from "../components/KineticCaption";

export const Scene4Journey: React.FC = () => {
  const frame = useCurrentFrame();
  const duration = SCENE.journey;

  // Shot 4A: Punjab Harvest Tractor & Thresher Action (Frames 0 - 55)
  const shotAScale = interpolate(frame, [0, 55], [1.02, 1.10], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shotAY = interpolate(frame, [0, 55], [0, -15], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shotAOpacity = interpolate(frame, [46, 55], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Shot 4B: Golden Winnowing Cascade in Breeze (Frames 50 - 105)
  const shotBScale = interpolate(frame, [50, 105], [1.02, 1.10], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shotBY = interpolate(frame, [50, 105], [-10, 12], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shotBOpacity = interpolate(frame, [50, 58, 96, 105], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Shot 4C: Pristine Extra-Long Milled Basmati Cascade (Frames 98 - 150)
  const shotCScale = interpolate(frame, [98, duration], [1.02, 1.10], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shotCY = interpolate(frame, [98, duration], [-15, 12], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shotCOpacity = interpolate(frame, [98, 106], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Subtle golden transition flare between harvest and milling
  const flareOpacity = interpolate(frame, [95, 103, 112], [0, 0.45, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Transition dissolve into warm ivory cyclorama in final 15 frames
  const exitIvoryFade = interpolate(frame, [duration - 15, duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.forestDeep,
        overflow: "hidden",
      }}
    >
      {/* Shot 4A: Punjab Harvest Action (Tractor & Thresher) */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: shotAOpacity,
          transform: `scale(${shotAScale}) translateY(${shotAY}px)`,
          transformOrigin: "center center",
        }}
      >
        <Img
          src={staticFile("footage/sangat_punjab_harvest_action.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "contrast(1.08) brightness(1.02) saturate(1.05)",
          }}
        />
      </div>

      {/* Shot 4B: Golden Winnowing Cascade */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: shotBOpacity,
          transform: `scale(${shotBScale}) translateY(${shotBY}px)`,
          transformOrigin: "center center",
        }}
      >
        <Img
          src={staticFile("footage/sangat_golden_harvest.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "contrast(1.10) brightness(1.02)",
          }}
        />
      </div>

      {/* Shot 4C: Milled Extra-Long Basmati Cascade */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: shotCOpacity,
          transform: `scale(${shotCScale}) translateY(${shotCY}px)`,
          transformOrigin: "center center",
        }}
      >
        <Img
          src={staticFile("footage/sangat_milled_cascade.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "contrast(1.06) brightness(1.03)",
          }}
        />
      </div>

      {/* Golden Light Flare Across Transition */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: COLORS.goldLight,
          opacity: flareOpacity,
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      />

      {/* Cinematic Studio Warmth Gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(180deg, rgba(15,61,46,0.35) 0%, rgba(249,246,238,0) 40%, rgba(15,61,46,0.45) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Kinetic Typography */}
      <KineticCaption
        subTitle="THE JOURNEY · PURITY & CARE"
        words={[
          { text: "A" },
          { text: "journey" },
          { text: "shaped" },
          { text: "by" },
          { text: "care.", italic: true, highlight: true },
        ]}
        startFrame={20}
        staggerFrames={4}
        position="bottom"
      />

      {/* Transition Out: Dissolve to Warm Ivory Cyclorama */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: COLORS.ivory,
          opacity: exitIvoryFade,
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
