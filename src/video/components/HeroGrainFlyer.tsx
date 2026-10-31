import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig, Img, staticFile } from "remotion";
import { COLORS } from "../tokens";

export interface HeroGrainFlyerProps {
  startFrame?: number;
  durationInFrames?: number;
  startX?: number; // percentage or px
  startY?: number;
  endX?: number;
  endY?: number;
  startScale?: number;
  endScale?: number;
  startRotation?: number; // deg
  endRotation?: number; // deg
  glowColor?: string;
  width?: number;
  zIndex?: number;
  arrivalBurst?: boolean; // flash burst when arriving at end
}

export const HeroGrainFlyer: React.FC<HeroGrainFlyerProps> = ({
  startFrame = 0,
  durationInFrames = 60,
  startX = 540,
  startY = 1200,
  endX = 540,
  endY = 700,
  startScale = 0.8,
  endScale = 1.0,
  startRotation = -15,
  endRotation = 12,
  glowColor = COLORS.gold,
  width = 130,
  zIndex = 50,
  arrivalBurst = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = interpolate(
    frame,
    [startFrame, startFrame + durationInFrames],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // Smooth ease-in-out curve
  const easeProgress = 0.5 - 0.5 * Math.cos(progress * Math.PI);

  const currentX = interpolate(easeProgress, [0, 1], [startX, endX]);
  const currentY = interpolate(easeProgress, [0, 1], [startY, endY]);
  const currentScale = interpolate(easeProgress, [0, 1], [startScale, endScale]);
  const currentRotation = interpolate(easeProgress, [0, 1], [startRotation, endRotation]);

  // Gentle float bobbing after arrival
  const postArrivalFrame = Math.max(0, frame - (startFrame + durationInFrames));
  const bobY = Math.sin((postArrivalFrame / 20) * Math.PI) * 5;
  const bobRot = Math.sin((postArrivalFrame / 24) * Math.PI) * 2;

  // Opacity fade in
  const opacity = interpolate(
    frame,
    [startFrame, startFrame + Math.min(10, durationInFrames * 0.25)],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // Arrival burst glow
  const burstFrame = startFrame + durationInFrames;
  const burstOpacity = arrivalBurst
    ? interpolate(frame, [burstFrame - 2, burstFrame + 2, burstFrame + 18], [0, 0.9, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 0;

  return (
    <div
      style={{
        position: "absolute",
        left: currentX,
        top: currentY + bobY,
        width,
        transform: `translate(-50%, -50%) scale(${currentScale}) rotate(${currentRotation + bobRot}deg)`,
        opacity,
        zIndex,
        pointerEvents: "none",
        filter: `drop-shadow(0 0 25px ${glowColor}) drop-shadow(0 0 50px rgba(226, 203, 151, 0.55))`,
      }}
    >
      {/* Translucent Luminous Hero Grain Sprite */}
      <Img
        src={staticFile("footage/hero_grain_sprite.png")}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          filter: "brightness(1.1) contrast(1.15)",
        }}
      />

      {/* Trailing golden aura halo */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "140%",
          height: "140%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(226, 203, 151, 0.45) 0%, rgba(201, 169, 107, 0.15) 50%, transparent 80%)`,
          pointerEvents: "none",
          mixBlendMode: "screen",
        }}
      />

      {/* Arrival flash burst */}
      {arrivalBurst && burstOpacity > 0 && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 320,
            height: 320,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(226, 203, 151, 0.6) 40%, transparent 75%)`,
            opacity: burstOpacity,
            mixBlendMode: "screen",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
};
