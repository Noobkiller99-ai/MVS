import React from "react";
import { interpolate, useCurrentFrame, Img, staticFile } from "remotion";

interface ParallaxLandscapeProps {
  durationInFrames: number;
}

export const ParallaxLandscape: React.FC<ParallaxLandscapeProps> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  // Multiplane camera drift
  const bgScale = interpolate(frame, [0, durationInFrames], [1.02, 1.08], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const bgX = interpolate(frame, [0, durationInFrames], [0, -25], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const mgScale = interpolate(frame, [0, durationInFrames], [1.05, 1.14], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const mgX = interpolate(frame, [0, durationInFrames], [0, -55], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Foreground ears natural breeze sway
  const fgSway = Math.sin((frame / 30) * Math.PI * 1.2) * 2.5; // degrees
  const fgX = interpolate(frame, [0, durationInFrames], [0, 40], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Atmospheric sunray pulse
  const sunPulse = 0.85 + 0.15 * Math.sin((frame / 20) * Math.PI);

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* Layer 1: Background Master Landscape (Mountains & Sky) */}
      <div
        style={{
          position: "absolute",
          top: "-5%",
          left: "-10%",
          width: "120%",
          height: "110%",
          transform: `scale(${bgScale}) translateX(${bgX}px)`,
          transformOrigin: "center center",
        }}
      >
        <Img
          src={staticFile("landscape/sangat-landscape.png")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.96) contrast(1.04)",
          }}
        />
      </div>

      {/* Volumetric Sunrise Warmth Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, rgba(226, 203, 151, 0.28) 0%, rgba(201, 169, 107, 0.12) 40%, rgba(15, 61, 46, 0.25) 100%)",
          opacity: sunPulse,
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      />

      {/* Layer 2: Midground Terraced Fields & Village with Alpha */}
      <div
        style={{
          position: "absolute",
          top: "12%",
          left: "-8%",
          width: "116%",
          height: "95%",
          transform: `scale(${mgScale}) translateX(${mgX}px)`,
          transformOrigin: "center bottom",
          pointerEvents: "none",
        }}
      >
        <Img
          src={staticFile("landscape/sangat-landscape-transparent.png")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "drop-shadow(0 15px 30px rgba(10, 46, 34, 0.35))",
          }}
        />
      </div>

      {/* Layer 3: Foreground Swaying Basmati Ears (Depth Stalks) */}
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-12%",
          width: "85%",
          height: "75%",
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

      {/* Cinematic Golden Mist & Vignette */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 55%, rgba(10, 46, 34, 0.55) 100%)",
          pointerEvents: "none",
          zIndex: 20,
        }}
      />
    </div>
  );
};
