import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONTS, SAFE_ZONE } from "../tokens";

interface WordToken {
  text: string;
  italic?: boolean;
  highlight?: boolean;
}

interface KineticCaptionProps {
  words: (string | WordToken)[];
  startFrame?: number;
  staggerFrames?: number;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  highlightColor?: string;
  align?: "center" | "left" | "right";
  subTitle?: string;
  position?: "center" | "bottom" | "top";
}

export const KineticCaption: React.FC<KineticCaptionProps> = ({
  words,
  startFrame = 15,
  staggerFrames = 3,
  fontSize = 54,
  fontFamily = FONTS.display,
  color = COLORS.ivory,
  highlightColor = COLORS.goldLight,
  align = "center",
  subTitle,
  position = "bottom",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const parsedWords: WordToken[] = words.map((w) =>
    typeof w === "string" ? { text: w } : w
  );

  const positionStyles: React.CSSProperties =
    position === "center"
      ? {
          top: "50%",
          transform: "translateY(-50%)",
        }
      : position === "top"
      ? {
          top: SAFE_ZONE.top + 40,
        }
      : {
          bottom: SAFE_ZONE.bottom + 40,
        };

  return (
    <div
      style={{
        position: "absolute",
        left: SAFE_ZONE.left,
        right: SAFE_ZONE.right,
        display: "flex",
        flexDirection: "column",
        alignItems: align === "center" ? "center" : align === "left" ? "flex-start" : "flex-end",
        textAlign: align,
        pointerEvents: "none",
        zIndex: 50,
        ...positionStyles,
      }}
    >
      {/* Radial scrim for contrast */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "120%",
          height: "140%",
          background: "radial-gradient(ellipse at center, rgba(15, 61, 46, 0.45) 0%, rgba(15, 61, 46, 0) 75%)",
          filter: "blur(20px)",
          zIndex: -1,
        }}
      />

      {/* Subtitle / Category Label if present */}
      {subTitle && (
        <div
          style={{
            fontFamily: FONTS.sans,
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: COLORS.gold,
            marginBottom: 16,
            opacity: interpolate(
              spring({ frame: frame - startFrame, fps, config: { damping: 20 } }),
              [0, 1],
              [0, 1]
            ),
          }}
        >
          {subTitle}
        </div>
      )}

      {/* Main Animated Headline */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: align === "center" ? "center" : align === "left" ? "flex-start" : "flex-end",
          gap: "0.28em",
          lineHeight: 1.15,
        }}
      >
        {parsedWords.map((word, i) => {
          const wordDelay = startFrame + i * staggerFrames;
          const wordSpring = spring({
            frame: frame - wordDelay,
            fps,
            config: { damping: 16, stiffness: 140 },
          });

          const opacity = interpolate(wordSpring, [0, 1], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          const translateY = interpolate(wordSpring, [0, 1], [22, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          const blur = interpolate(wordSpring, [0, 1], [8, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          return (
            <span
              key={i}
              style={{
                display: "inline-block",
                fontFamily,
                fontSize,
                fontWeight: 400,
                fontStyle: word.italic ? "italic" : "normal",
                color: word.highlight ? highlightColor : color,
                opacity,
                transform: `translateY(${translateY}px)`,
                filter: `blur(${blur}px)`,
                textShadow: "0 4px 18px rgba(0, 0, 0, 0.45)",
              }}
            >
              {word.text}
            </span>
          );
        })}
      </div>
    </div>
  );
};
