import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig, Img, staticFile } from "remotion";
import { COLORS, FONTS, SAFE_ZONE } from "../tokens";

interface ProductShowcaseProps {
  durationInFrames: number;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance physics
  const packSpring = spring({
    frame: frame - 6,
    fps,
    config: { damping: 18, stiffness: 120 },
  });

  const packScale = interpolate(packSpring, [0, 1], [0.88, 1.0]);
  const packY = interpolate(packSpring, [0, 1], [60, 0]);
  const packOpacity = interpolate(packSpring, [0, 1], [0, 1]);

  // Subtle continuous camera drift
  const cameraDrift = interpolate(frame, [0, durationInFrames], [1.0, 1.04], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Specular light sweep across packaging face
  const lightSweepX = interpolate(frame, [25, 80], [-400, 1200], {
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
        overflow: "hidden",
      }}
    >
      {/* Studio Cyclorama Background Lighting */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1100,
          height: 1100,
          background: `radial-gradient(circle, rgba(201, 169, 107, 0.16) 0%, rgba(249, 246, 238, 0) 65%)`,
          pointerEvents: "none",
        }}
      />

      {/* Decorative Brand Framing Lines */}
      <div
        style={{
          position: "absolute",
          top: SAFE_ZONE.top - 40,
          left: SAFE_ZONE.left,
          right: SAFE_ZONE.right,
          height: 1,
          background: `linear-gradient(90deg, transparent 0%, ${COLORS.gold} 50%, transparent 100%)`,
          opacity: 0.45,
        }}
      />

      {/* Hero Products Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "65%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: `scale(${packScale * cameraDrift}) translateY(${packY}px)`,
          opacity: packOpacity,
        }}
      >
        {/* Soft Ambient Occlusion Ground Shadows */}
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            width: "80%",
            height: 60,
            background:
              "radial-gradient(ellipse at center, rgba(15, 61, 46, 0.28) 0%, rgba(15, 61, 46, 0) 70%)",
            filter: "blur(18px)",
          }}
        />

        {/* 5kg Woven Handle Bag (Midground Right) */}
        <div
          style={{
            position: "absolute",
            right: "12%",
            bottom: "15%",
            width: 480,
            height: "auto",
            zIndex: 1,
            filter: "drop-shadow(0 20px 30px rgba(15, 61, 46, 0.18))",
          }}
        >
          <Img
            src={staticFile("packaging/v1-ivory-landscape-5kg-front-mock.png")}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>

        {/* 1kg Standing Pouch (Foreground Left) */}
        <div
          style={{
            position: "absolute",
            left: "14%",
            bottom: "13%",
            width: 440,
            height: "auto",
            zIndex: 2,
            filter: "drop-shadow(0 25px 40px rgba(15, 61, 46, 0.22))",
          }}
        >
          <Img
            src={staticFile("packaging/v1-ivory-landscape-1kg-front-mock.png")}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>

        {/* Dynamic Specular Light Sweep Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: lightSweepX,
            width: 250,
            height: "100%",
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0) 100%)",
            transform: "skewX(-25deg)",
            pointerEvents: "none",
            mixBlendMode: "overlay",
            zIndex: 10,
          }}
        />
      </div>

      {/* Product Information Overlay */}
      <div
        style={{
          position: "absolute",
          bottom: SAFE_ZONE.bottom - 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          zIndex: 30,
        }}
      >
        <div
          style={{
            fontFamily: FONTS.display,
            fontSize: 48,
            fontWeight: 600,
            color: COLORS.forest,
            letterSpacing: "0.06em",
            marginBottom: 8,
          }}
        >
          SANGAT
        </div>
        <div
          style={{
            fontFamily: FONTS.editorial,
            fontSize: 26,
            letterSpacing: "0.14em",
            color: COLORS.earthUI,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Naturally Aromatic · Thoughtfully Grown
        </div>
        <div
          style={{
            fontFamily: FONTS.sans,
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: "0.22em",
            color: COLORS.gold,
            textTransform: "uppercase",
            padding: "6px 18px",
            border: `1px solid ${COLORS.gold}`,
            borderRadius: 999,
          }}
        >
          Available in 1kg & 5kg Packs
        </div>
      </div>
    </div>
  );
};
