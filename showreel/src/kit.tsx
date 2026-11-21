/**
 * Kinetic-type kit for the showreel. Every primitive reads the local Sequence frame,
 * so it can be dropped anywhere on the timeline.
 */
import { interpolatePath } from "@remotion/paths";
import { loadFont as loadJakarta } from "@remotion/google-fonts/PlusJakartaSans";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import type { CSSProperties, ReactNode } from "react";
import { C, DISPLAY } from "./theme";

export const { fontFamily: HEAVY } = loadJakarta("normal", { weights: ["800"], subsets: ["latin"] });

export const OUT = Easing.bezier(0.16, 1, 0.3, 1);
export const SNAP = Easing.bezier(0.85, 0, 0.15, 1);

export const k = (f: number, i: number[], o: number[], easing: (t: number) => number = OUT) =>
  interpolate(f, i, o, { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing });

/** Big heavy uppercase type (the old reel's geometric sans look). */
export const heavy = (size: number, color: string = C.navyDeep): CSSProperties => ({
  fontFamily: HEAVY,
  fontWeight: 800,
  fontSize: size,
  lineHeight: 0.95,
  letterSpacing: "-0.02em",
  textTransform: "uppercase",
  color,
});

export const tall = (size: number, color: string = C.navyDeep): CSSProperties => ({
  fontFamily: DISPLAY,
  fontSize: size,
  lineHeight: 0.9,
  textTransform: "uppercase",
  color,
});

export const outline = (color: string, width = 3): CSSProperties => ({
  color: "transparent",
  WebkitTextStroke: `${width}px ${color}`,
});

export const Center = ({ children, bg, style }: { children: ReactNode; bg?: string; style?: CSSProperties }) => (
  <AbsoluteFill style={{ background: bg, alignItems: "center", justifyContent: "center", ...style }}>{children}</AbsoluteFill>
);

/** Words appear one by one (W → WHO → WHO AM → WHO AM I?). */
export const TypeBuild = ({
  units,
  start = 0,
  step = 6,
  column = false,
  style,
  accentLast = false,
}: {
  units: string[];
  start?: number;
  step?: number;
  column?: boolean;
  style: CSSProperties;
  accentLast?: boolean;
}) => {
  const f = useCurrentFrame();
  const shown = Math.max(0, Math.min(units.length, Math.floor((f - start) / step) + 1));
  return (
    <div style={{ display: "flex", flexDirection: column ? "column" : "row", alignItems: "center", gap: column ? 0 : "0.25em", ...style }}>
      {units.slice(0, shown).map((u, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            color: accentLast && i === units.length - 1 ? C.terracotta : undefined,
            scale: k(f, [start + i * step, start + i * step + 5], [1.25, 1], SNAP),
          }}
        >
          {u}
        </span>
      ))}
    </div>
  );
};

/** Letters typed one at a time with a blinking block cursor. */
export const Typewriter = ({ text, start = 0, cps = 1.2, style, cursor = true }: { text: string; start?: number; cps?: number; style: CSSProperties; cursor?: boolean }) => {
  const f = useCurrentFrame();
  const n = Math.max(0, Math.min(text.length, Math.floor((f - start) * cps)));
  const done = n >= text.length;
  return (
    <span style={style}>
      {text.slice(0, n)}
      {cursor && (!done || Math.floor(f / 8) % 2 === 0) ? <span style={{ color: C.terracotta }}>▌</span> : null}
    </span>
  );
};

/** Wide letter spacing collapses into a tight word ("H E L L O" → "HELLO"). */
export const Tracking = ({ text, start = 0, dur = 22, from = 0.7, style }: { text: string; start?: number; dur?: number; from?: number; style: CSSProperties }) => {
  const f = useCurrentFrame();
  return (
    <div style={{ ...style, letterSpacing: `${k(f, [start, start + dur], [from, -0.02], SNAP)}em`, opacity: k(f, [start, start + 6], [0, 1]) }}>{text}</div>
  );
};

/** Fixed prefix with a last word that rolls to the next one every `every` frames. */
export const SlotSwap = ({ words, start = 0, every = 18, style, accent = C.terracotta }: { words: string[]; start?: number; every?: number; style: CSSProperties; accent?: string }) => {
  const f = useCurrentFrame();
  const t = Math.max(0, f - start);
  const i = Math.min(words.length - 1, Math.floor(t / every));
  const local = t - i * every;
  return (
    <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", paddingBlock: "0.04em" }}>
      <span style={{ display: "inline-block", ...style, color: accent, translate: `0 ${k(local, [0, 7], [105, 0], SNAP)}%` }}>{words[i]}</span>
    </span>
  );
};

/** Repeated outlined rows scrolling vertically, the middle row filled. */
export const StackRepeat = ({ text, rows = 7, size, start = 0, color = C.navyDeep, fillColor }: { text: string; rows?: number; size: number; start?: number; color?: string; fillColor?: string }) => {
  const f = useCurrentFrame();
  const mid = Math.floor(rows / 2);
  return (
    <Center>
      <div style={{ translate: `0 ${k(f - start, [0, 40], [size * 1.6, 0])}px`, display: "flex", flexDirection: "column", alignItems: "center" }}>
        {Array.from({ length: rows }, (_, r) => (
          <div
            key={r}
            style={{
              ...heavy(size, color),
              ...(r === mid ? { color: fillColor ?? color } : outline(color, 2.5)),
              opacity: k(f - start, [Math.abs(r - mid) * 2, Math.abs(r - mid) * 2 + 8], [0, r === mid ? 1 : 0.85]),
              translate: `${(r % 2 ? -1 : 1) * k(f - start, [0, 90], [0, 40], (x) => x)}px 0`,
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </Center>
  );
};

/** Huge word repeated in a row that slides across (cropped by the frame). */
export const Marquee = ({ text, size, y, speed = 14, dir = 1, color = C.navyDeep, outlined = false }: { text: string; size: number; y: number; speed?: number; dir?: 1 | -1; color?: string; outlined?: boolean }) => {
  const f = useCurrentFrame();
  return (
    <div style={{ position: "absolute", top: y, left: 0, whiteSpace: "nowrap", translate: `${dir === 1 ? -f * speed : f * speed - 2400}px 0` }}>
      {Array.from({ length: 6 }, (_, i) => (
        <span key={i} style={{ ...heavy(size, color), ...(outlined ? outline(color, 3) : {}), marginRight: "0.3em" }}>
          {text}
        </span>
      ))}
    </div>
  );
};

/** Circle growing from a point to cover the frame (or shrinking when reverse). */
export const CircleWipe = ({ start = 0, dur = 18, color, x = "50%", y = "50%", reverse = false, children }: { start?: number; dur?: number; color: string; x?: string; y?: string; reverse?: boolean; children?: ReactNode }) => {
  const f = useCurrentFrame();
  const r = reverse ? k(f, [start, start + dur], [150, 0], SNAP) : k(f, [start, start + dur], [0, 150], SNAP);
  return <AbsoluteFill style={{ background: color, clipPath: `circle(${r}% at ${x} ${y})` }}>{children}</AbsoluteFill>;
};

/** Solid panel sweeping in from one side. */
export const PanelSwipe = ({ start = 0, dur = 14, color, from = "left", children, style }: { start?: number; dur?: number; color: string; from?: "left" | "right" | "top" | "bottom"; children?: ReactNode; style?: CSSProperties }) => {
  const f = useCurrentFrame();
  const p = k(f, [start, start + dur], [100, 0], SNAP);
  // "left" means the panel enters from the left edge, so it is clipped from the right.
  const clip = { left: `inset(0 ${p}% 0 0)`, right: `inset(0 0 0 ${p}%)`, top: `inset(0 0 ${p}% 0)`, bottom: `inset(${p}% 0 0 0)` }[from];
  return <AbsoluteFill style={{ background: color, clipPath: clip, ...style }}>{children}</AbsoluteFill>;
};

/** Growing underline bar. */
export const Underline = ({ start = 0, width, color = C.terracotta, height = 10, shrinkAt }: { start?: number; width: number; color?: string; height?: number; shrinkAt?: number }) => {
  const f = useCurrentFrame();
  const grow = k(f, [start, start + 12], [0, 1], SNAP);
  const shrink = shrinkAt ? k(f, [shrinkAt, shrinkAt + 10], [1, 0], SNAP) : 1;
  return <div style={{ width: width * grow * shrink, height, background: color, marginInline: "auto" }} />;
};

/** Counts up to a real number. */
export const Counter = ({ to, start = 0, dur = 24, suffix = "", style }: { to: number; start?: number; dur?: number; suffix?: string; style: CSSProperties }) => {
  const f = useCurrentFrame();
  return (
    <span style={{ ...style, fontVariantNumeric: "tabular-nums" }}>
      {Math.round(k(f, [start, start + dur], [0, to]))}
      {suffix}
    </span>
  );
};

/** Shapes in a 100×100 box, used for morphing. */
export const SHAPES = {
  dot: "M50 46 C52.2 46 54 47.8 54 50 C54 52.2 52.2 54 50 54 C47.8 54 46 52.2 46 50 C46 47.8 47.8 46 50 46 Z",
  circle: "M50 8 C73.2 8 92 26.8 92 50 C92 73.2 73.2 92 50 92 C26.8 92 8 73.2 8 50 C8 26.8 26.8 8 50 8 Z",
  square: "M10 10 C36 10 64 10 90 10 C90 36 90 64 90 90 C64 90 36 90 10 90 C10 64 10 36 10 10 Z",
  sparkle: "M50 2 C52.5 27 62 41 98 50 C62 59 52.5 73 50 98 C47.5 73 38 59 2 50 C38 41 47.5 27 50 2 Z",
  bar: "M40 4 C46 4 54 4 60 4 C59 26 58 50 57 70 C52 70 48 70 43 70 C42 50 41 26 40 4 Z",
  pill: "M20 38 C40 38 60 38 80 38 C86 38 92 44 92 50 C92 56 86 62 80 62 C60 62 40 62 20 62 C14 62 8 56 8 50 C8 44 14 38 20 38 Z",
} as const;

/** Morphs through a list of shapes, `each` frames per step. */
export const Morph = ({ seq, start = 0, each = 16, size, color, rotate = true }: { seq: string[]; start?: number; each?: number; size: number; color: string; rotate?: boolean }) => {
  const f = useCurrentFrame();
  const t = Math.max(0, f - start);
  const i = Math.min(seq.length - 2, Math.floor(t / each));
  const p = k(t - i * each, [0, each * 0.8], [0, 1], SNAP);
  const d = interpolatePath(p, seq[i]!, seq[i + 1]!);
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible", rotate: rotate ? `${k(t, [0, each * seq.length], [0, 180])}deg` : undefined }}>
      <path d={d} fill={color} />
    </svg>
  );
};

/** Quick-cut image flashes, `each` frames per image, with a slight push. */
export const Flash = ({ srcs, start = 0, each = 7, render }: { srcs: string[]; start?: number; each?: number; render: (src: string, local: number, i: number) => ReactNode }) => {
  const f = useCurrentFrame();
  const t = f - start;
  if (t < 0) return null;
  const i = Math.min(srcs.length - 1, Math.floor(t / each));
  return <>{render(srcs[i]!, t - i * each, i)}</>;
};
