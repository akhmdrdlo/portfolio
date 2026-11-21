import { loadFont as loadAnton } from "@remotion/google-fonts/Anton";
import { loadFont as loadJakarta } from "@remotion/google-fonts/PlusJakartaSans";
import { Easing, interpolate } from "remotion";
import type { CSSProperties } from "react";

export const { fontFamily: DISPLAY } = loadAnton("normal", { weights: ["400"], subsets: ["latin"] });
export const { fontFamily: SANS } = loadJakarta("normal", { weights: ["500", "700"], subsets: ["latin"] });

/** Brandkit tokens (docs/BRANDKIT.md). */
export const C = {
  canvas: "#EEF4FB",
  surface: "#FFFFFF",
  sky: "#C6DBF0",
  navy: "#223F6D",
  navyDeep: "#162B4D",
  muted: "#4A6896",
  pixel: "#6A93C7",
  sparkle: "#9BBBE0",
  terracotta: "#B84A39",
  cream: "#F3E7C9",
  inverse: "#F8FAFC",
};

export const EXPO = Easing.bezier(0.16, 1, 0.3, 1);

/** Clamped interpolate with the brand ease. */
export const ease = (frame: number, input: number[], output: number[], easing = EXPO) =>
  interpolate(frame, input, output, { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing });

export const display: CSSProperties = {
  fontFamily: DISPLAY,
  textTransform: "uppercase",
  lineHeight: 0.92,
  letterSpacing: "-0.01em",
  color: C.navyDeep,
};

export const eyebrow: CSSProperties = {
  fontFamily: SANS,
  fontWeight: 700,
  fontSize: 30,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
};

export const Sparkle = ({ size, color, style }: { size: number; color: string; style?: CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={style}>
    <path fill={color} d="M12 0c.6 5.9 2.9 9.6 12 12-9.1 2.4-11.4 6.1-12 12-.6-5.9-2.9-9.6-12-12C9.1 9.6 11.4 5.9 12 0Z" />
  </svg>
);

const PIX = [C.navy, C.pixel, C.sparkle];

/** Pixel cluster that assembles from `start` frame. */
export const Pixels = ({
  frame,
  start = 0,
  size = 22,
  pattern = [
    [0, 0, 0],
    [1, 0, 1],
    [1, 1, 2],
    [2, 1, 0],
  ],
  style,
}: {
  frame: number;
  start?: number;
  size?: number;
  pattern?: number[][];
  style?: CSSProperties;
}) => (
  <div style={{ position: "absolute", ...style }}>
    {pattern.map(([x, y, c], i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          left: x * size,
          top: y * size,
          width: size,
          height: size,
          background: PIX[c % 3],
          scale: ease(frame, [start + i * 3, start + i * 3 + 12], [0, 1]),
        }}
      />
    ))}
  </div>
);
