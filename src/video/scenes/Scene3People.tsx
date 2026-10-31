import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, Img, staticFile } from "remotion";
import { COLORS, SCENE } from "../tokens";
import { KineticCaption } from "../components/KineticCaption";

export const Scene3People: React.FC = () => {
  const frame = useCurrentFrame();
  const duration = SCENE.people;

  // Shot 3A: Weathered Farmer Hands Cradling Panicle (Frames 0 - 75)
  const shotAScale = interpolate(frame, [0, 75], [1.02, 1.10], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shotAY = interpolate(frame, [0, 75], [0, -15], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shotAOpacity = interpolate(frame, [66, 76], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Shot 3B: Dignified Sikh Punjabi Farmer Portrait in Golden Field (Frames 70 - 150)
  const shotBScale = interpolate(frame, [70, duration], [1.02, 1.10], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shotBY = interpolate(frame, [70, duration], [8, -8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shotBOpacity = interpolate(frame, [70, 78], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Warm golden sun flare across the cut
  const flareOpacity = interpolate(frame, [65, 75, 85], [0, 0.40, 0], {
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
      {/* Shot 3A: Farmer Hands Cradling Golden Panicle */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: shotAOpacity,
          transform: `scale(${shotAScale}) translateY(${shotAY}px)`,
          transformOrigin: "center 40%",
        }}
      >
        <Img
          src={staticFile("footage/sangat_farmer_hands.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "contrast(1.06) brightness(1.02)",
          }}
        />
      </div>

      {/* Shot 3B: Authentic Sikh Punjabi Farmer in Golden Punjab Field */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: shotBOpacity,
          transform: `scale(${shotBScale}) translateY(${shotBY}px)`,
          transformOrigin: "center 30%",
        }}
      >
        <Img
          src={staticFile("footage/sangat_punjabi_farmer.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "contrast(1.06) brightness(1.02) saturate(1.05)",
          }}
        />
      </div>

      {/* Golden Light Flare on Transition */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "-20%",
          width: "140%",
          height: "140%",
          background:
            "radial-gradient(ellipse at 45% 35%, rgba(226, 203, 151, 0.6) 0%, rgba(201, 169, 107, 0.15) 45%, transparent 70%)",
          opacity: flareOpacity,
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      />

      {/* Subtle Cinematic Vignette */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 45%, rgba(15, 61, 46, 0.5) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Kinetic Typography */}
      <KineticCaption
        subTitle="THE PEOPLE · SANJHI SOCH"
        words={[
          { text: "Grown" },
          { text: "through" },
          { text: "shared" },
          { text: "effort.", italic: true, highlight: true },
        ]}
        startFrame={22}
        staggerFrames={4}
        position="bottom"
      />
    </AbsoluteFill>
  );
};
