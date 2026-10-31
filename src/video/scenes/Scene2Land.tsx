import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, Img, staticFile } from "remotion";
import { COLORS, SCENE } from "../tokens";
import { KineticCaption } from "../components/KineticCaption";

export const Scene2Land: React.FC = () => {
  const frame = useCurrentFrame();
  const duration = SCENE.land;

  // Shot 2A: Expansive Flat Punjab Paddy Plain with Irrigation Canal (Frames 0 - 68)
  const shotAScale = interpolate(frame, [0, 68], [1.0, 1.10], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shotAY = interpolate(frame, [0, 68], [0, -20], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shotAOpacity = interpolate(frame, [58, 68], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Foreground authentic Punjab basmati ears wind sway in Shot 2A
  const fgSway = Math.sin((frame / 30) * Math.PI * 1.5) * 2.5;
  const fgX = interpolate(frame, [0, 68], [0, 35], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Shot 2B: Close Tracking of Ripening Basmati Panicle in Punjab (Frames 60 - 120)
  const shotBScale = interpolate(frame, [60, duration], [1.02, 1.12], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shotBY = interpolate(frame, [60, duration], [-15, 10], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shotBOpacity = interpolate(frame, [60, 68], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Golden sunrise atmospheric shimmer
  const sunGlow = 0.85 + 0.15 * Math.sin((frame / 20) * Math.PI);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.forestDeep,
        overflow: "hidden",
      }}
    >
      {/* Shot 2A: Flat Punjab Basmati Landscape (Canal & Sunrise) */}
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
          src={staticFile("footage/sangat_punjab_landscape.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "contrast(1.06) brightness(1.02) saturate(1.05)",
          }}
        />

        {/* Foreground Basmati Stalks Swaying (Shot 2A Depth Layer) */}
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            right: "-8%",
            width: "75%",
            height: "65%",
            transform: `translateX(${fgX}px) rotate(${fgSway}deg)`,
            transformOrigin: "bottom right",
            pointerEvents: "none",
            filter: "drop-shadow(-8px -12px 25px rgba(0, 0, 0, 0.45))",
            zIndex: 10,
          }}
        >
          <Img
            src={staticFile("landscape/sangat-landscape-ears.svg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>

      {/* Shot 2B: Macro Panicle Ripening in Punjab Sun */}
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
          src={staticFile("footage/sangat_panicle_punjab.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "contrast(1.08) brightness(1.03) saturate(1.06)",
          }}
        />
      </div>

      {/* Volumetric Sunray & Golden Mist Atmosphere */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, rgba(226, 203, 151, 0.28) 0%, rgba(201, 169, 107, 0.10) 35%, rgba(15, 61, 46, 0.25) 100%)",
          opacity: sunGlow,
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      />

      {/* Cinematic Vignette */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 45%, rgba(10, 46, 34, 0.55) 100%)",
          pointerEvents: "none",
          zIndex: 20,
        }}
      />

      {/* Kinetic Typography */}
      <KineticCaption
        subTitle="PUNJAB · LAND OF FIVE RIVERS"
        words={[
          { text: "Rooted" },
          { text: "in" },
          { text: "the" },
          { text: "fertile" },
          { text: "plains.", italic: true, highlight: true },
        ]}
        startFrame={18}
        staggerFrames={4}
        position="bottom"
      />
    </AbsoluteFill>
  );
};
