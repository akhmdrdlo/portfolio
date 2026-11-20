import type { CSSProperties } from "react";

type OrnamentProps = { className?: string; style?: CSSProperties };

/** 4-point sparkle ✦ */
export function Sparkle({ className = "", style }: OrnamentProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} style={style} fill="currentColor">
      <path d="M12 0c.6 5.9 2.9 9.6 12 12-9.1 2.4-11.4 6.1-12 12-.6-5.9-2.9-9.6-12-12C9.1 9.6 11.4 5.9 12 0Z" />
    </svg>
  );
}

const PIXEL_COLORS = ["var(--navy-primary)", "var(--blue-pixel)", "var(--blue-sparkle)"];

/** Pixel cluster: small 8px squares on a grid. `pattern` is a list of [col,row,colorIndex]. */
export function PixelCluster({
  className = "",
  style,
  pattern = [
    [0, 0, 0],
    [1, 0, 1],
    [1, 1, 2],
    [2, 1, 0],
  ],
  size = 8,
}: OrnamentProps & { pattern?: [number, number, number][]; size?: number }) {
  const cols = Math.max(...pattern.map((p) => p[0])) + 1;
  const rows = Math.max(...pattern.map((p) => p[1])) + 1;
  return (
    <svg
      viewBox={`0 0 ${cols * size} ${rows * size}`}
      width={cols * size}
      height={rows * size}
      aria-hidden="true"
      className={className}
      style={style}
      data-pixels
    >
      {pattern.map(([x, y, c], i) => (
        <rect key={i} x={x * size} y={y * size} width={size} height={size} fill={PIXEL_COLORS[c % 3]} data-pixel />
      ))}
    </svg>
  );
}

export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span className={`display inline-flex items-center gap-1 ${className}`} aria-label="Akidooo">
      AKIDOOO
      <Sparkle className="h-[0.55em] w-[0.55em] text-terracotta" />
    </span>
  );
}
