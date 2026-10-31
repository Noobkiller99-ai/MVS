import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig, Img, staticFile } from "remotion";
import { COLORS, FONTS, SAFE_ZONE } from "../tokens";

interface BrandEndcardProps {
  durationInFrames: number;
}

export const BrandEndcard: React.FC<BrandEndcardProps> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Master logo spring entrance
  const logoSpring = spring({
    frame: frame - 6,
    fps,
    config: { damping: 20, stiffness: 160 },
  });

  const logoScale = interpolate(logoSpring, [0, 1], [0.86, 1.0]);
  const logoOpacity = interpolate(logoSpring, [0, 1], [0, 1]);

  // Tagline spring entrance
  const tagSpring = spring({
    frame: frame - 25,
    fps,
    config: { damping: 18, stiffness: 140 },
  });

  const tagOpacity = interpolate(tagSpring, [0, 1], [0, 1]);
  const tagY = interpolate(tagSpring, [0, 1], [25, 0]);

  // Subtle gold gleam sweep across symbol
  const gleamX = interpolate(frame, [22, 65], [-300, 800], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Hold stability for last 1.5 seconds, subtle 6-frame fade out at the very end
  const exitFade = interpolate(frame, [durationInFrames - 8, durationInFrames], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.ivory,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: exitFade,
        overflow: "hidden",
      }}
    >
      {/* Background radial warmth */}
      <div
        style={{
          position: "absolute",
          top: "42%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 950,
          height: 950,
          background: `radial-gradient(circle, rgba(201, 169, 107, 0.18) 0%, rgba(249, 246, 238, 0) 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Decorative top gold hairpin */}
      <div
        style={{
          position: "absolute",
          top: SAFE_ZONE.top + 20,
          width: 80,
          height: 2,
          backgroundColor: COLORS.gold,
          opacity: 0.6,
        }}
      />

      {/* Master Logo Staging */}
      <div
        style={{
          position: "relative",
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
            width: 520,
            height: "auto",
            filter: "drop-shadow(0 18px 40px rgba(15, 61, 46, 0.14))",
          }}
        />

        {/* Shimmer light bar across symbol */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: gleamX,
            width: 120,
            height: "100%",
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
            transform: "skewX(-30deg)",
            pointerEvents: "none",
            mixBlendMode: "overlay",
          }}
        />
      </div>

      {/* Tagline Container */}
      <div
        style={{
          marginTop: 50,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          transform: `translateY(${tagY}px)`,
          opacity: tagOpacity,
          padding: `0 ${SAFE_ZONE.left}px`,
        }}
      >
        {/* Primary English Tagline */}
        <div
          style={{
            fontFamily: FONTS.editorial,
            fontSize: 32,
            letterSpacing: "0.18em",
            color: COLORS.earthUI,
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          Sanjhi Soch, Sunehra Kal
        </div>

        {/* Hindi Devanagari Companion */}
        <div
          style={{
            fontFamily: FONTS.devanagari,
            fontSize: 26,
            letterSpacing: "0.08em",
            color: COLORS.forest,
            opacity: 0.88,
            marginBottom: 24,
          }}
        >
          साँझी सोच, सुनहरा कल
        </div>

        {/* Brand Association */}
        <div
          style={{
            fontFamily: FONTS.sans,
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: COLORS.sage,
            borderTop: `1px solid ${COLORS.stone}`,
            paddingTop: 16,
            width: 280,
          }}
        >
          Manav Vikas Sansthan
        </div>
      </div>

      {/* Bottom gold hairpin */}
      <div
        style={{
          position: "absolute",
          bottom: SAFE_ZONE.bottom + 20,
          width: 80,
          height: 2,
          backgroundColor: COLORS.gold,
          opacity: 0.6,
        }}
      />
    </div>
  );
};
