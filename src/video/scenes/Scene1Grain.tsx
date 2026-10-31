import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, Img, staticFile } from "remotion";
import { COLORS, SCENE } from "../tokens";
import { KineticCaption } from "../components/KineticCaption";

export const Scene1Grain: React.FC = () => {
  const frame = useCurrentFrame();
  const duration = SCENE.grain;

  // Shot 1A: Raw Seed in Fertile Earth (F0 - F60)
  const shotAScale = interpolate(frame, [0, 60], [1.0, 1.15], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shotAOpacity = interpolate(frame, [50, 60], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Shot 1B: The Hero Grain Awakens & Levitates (F52 - F120)
  const shotBScale = interpolate(frame, [52, duration], [1.02, 1.18], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shotBY = interpolate(frame, [52, duration], [20, -20], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shotBOpacity = interpolate(frame, [52, 62], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Dynamic golden shimmer streak
  const glintX = interpolate(frame, [15, 95], [-300, 1100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Soft transition into golden morning light
  const exitGlow = interpolate(frame, [duration - 14, duration], [0, 0.85], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.forestDark,
        overflow: "hidden",
      }}
    >
      {/* Background Radial Glow */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: `radial-gradient(circle at 50% 45%, rgba(15, 61, 46, 0.6) 0%, rgba(6, 26, 19, 0.98) 80%)`,
        }}
      />

      {/* Shot 1A: Raw Grain in Soil */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: shotAOpacity,
          transform: `scale(${shotAScale})`,
          transformOrigin: "center center",
        }}
      >
        <Img
          src={staticFile("footage/sangat_macro_grain.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "contrast(1.08) brightness(1.02)",
          }}
        />
      </div>

      {/* Shot 1B: Translucent Hero Grain Levitating with Golden Dust */}
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
          src={staticFile("footage/sangat_hero_grain_levitate.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "contrast(1.10) brightness(1.04)",
          }}
        />

        {/* Specular golden light sweep */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: glintX,
            width: 200,
            height: "100%",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(226, 203, 151, 0.35) 50%, transparent 100%)",
            transform: "skewX(-30deg)",
            mixBlendMode: "screen",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Kinetic Typography */}
      <KineticCaption
        subTitle="THE ORIGIN · A GRAIN AWAKENS"
        words={[
          { text: "Every" },
          { text: "grain" },
          { text: "has" },
          { text: "a" },
          { text: "beginning.", italic: true, highlight: true },
        ]}
        startFrame={18}
        staggerFrames={4}
        position="bottom"
      />

      {/* Transition Out: Warm Morning Sunrise Glow */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: COLORS.goldLight,
          opacity: exitGlow,
          pointerEvents: "none",
          mixBlendMode: "screen",
        }}
      />
    </AbsoluteFill>
  );
};
