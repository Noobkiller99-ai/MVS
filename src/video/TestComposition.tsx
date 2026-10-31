import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";
import { COLORS, FONTS, SAFE_ZONE } from "./tokens";
import { fontStyles } from "./fonts";

export const TestComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring for logo
  const logoProgress = spring({
    frame: frame - 15,
    fps,
    config: { damping: 20, stiffness: 180 },
  });

  const logoScale = interpolate(logoProgress, [0, 1], [0.85, 1.0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const logoOpacity = interpolate(logoProgress, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Text entrance spring
  const textProgress = spring({
    frame: frame - 40,
    fps,
    config: { damping: 18, stiffness: 160 },
  });

  const textOpacity = interpolate(textProgress, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const textY = interpolate(textProgress, [0, 1], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.ivory,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: FONTS.display,
      }}
    >
      <style>{fontStyles}</style>

      {/* Subtle background radial glow */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          width: 800,
          height: 800,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, rgba(201, 169, 107, 0.12) 0%, rgba(249, 246, 238, 0) 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Master Logo Lockup */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: `scale(${logoScale})`,
          opacity: logoOpacity,
        }}
      >
        <Img
          src={staticFile("brand/sangat-stacked-colour.png")}
          style={{
            width: 480,
            height: "auto",
            filter: "drop-shadow(0 15px 35px rgba(15, 61, 46, 0.12))",
          }}
        />
      </div>

      {/* Launch Film Test Title */}
      <div
        style={{
          marginTop: 60,
          textAlign: "center",
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
          padding: `0 ${SAFE_ZONE.left}px`,
        }}
      >
        <div
          style={{
            fontFamily: FONTS.editorial,
            fontSize: 34,
            letterSpacing: "0.14em",
            color: COLORS.earthUI,
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Sanjhi Soch, Sunehra Kal
        </div>
        <div
          style={{
            fontFamily: FONTS.sans,
            fontSize: 22,
            letterSpacing: "0.2em",
            color: COLORS.forest,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          5-Second Technical Verification Render
        </div>
      </div>
    </AbsoluteFill>
  );
};
