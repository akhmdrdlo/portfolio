import { AbsoluteFill, Img, staticFile, useCurrentFrame } from "remotion";
import { C, DISPLAY, Pixels, SANS, display, ease, eyebrow } from "../theme";

const LINES = ["$ deploy portfolio", "✓ Next.js", "✓ Laravel", "✓ Google Cloud", "● online"];
const BADGES = [
  { big: "Valedictorian", small: "Bangkit Academy 2024" },
  { big: "Google ACE", small: "Associate Cloud Engineer" },
  { big: "PT Len", small: "Business Development IT" },
];

/** 30–35s: code window types out, screenshots slide, achievement badges stack. */
export const Tech = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: C.canvas }}>
      <div style={{ position: "absolute", left: 120, top: 120 }}>
        <div style={{ ...eyebrow, color: C.terracotta, opacity: ease(f, [0, 14], [0, 1]) }}>04 · Web & IT</div>
        <div style={{ ...display, fontSize: 150, marginTop: 24 }}>
          {["Kerja di IT,", "ngoding juga."].map((w, i) => (
            <div key={w} style={{ overflow: "hidden", paddingBlock: 4 }}>
              <div style={{ translate: `0 ${ease(f, [4 + i * 6, 30 + i * 6], [110, 0])}%`, color: i ? C.terracotta : C.navyDeep }}>{w}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Code window */}
      <div
        style={{
          position: "absolute",
          left: 120,
          top: 560,
          width: 720,
          height: 380,
          background: C.navyDeep,
          border: `8px solid ${C.surface}`,
          padding: 36,
          fontFamily: "Consolas, monospace",
          fontSize: 36,
          color: C.sparkle,
          translate: `0 ${ease(f, [10, 34], [120, 0])}px`,
          opacity: ease(f, [10, 22], [0, 1]),
        }}
      >
        <div style={{ display: "flex", gap: 12, marginBottom: 22 }}>
          {[C.terracotta, C.cream, C.pixel].map((c) => (
            <div key={c} style={{ width: 20, height: 20, borderRadius: 10, background: c }} />
          ))}
        </div>
        {LINES.map((l, i) => {
          const start = 24 + i * 12;
          const chars = Math.floor(ease(f, [start, start + 10], [0, l.length], (t) => t));
          return (
            <div key={l} style={{ height: 48, color: i === 0 ? C.inverse : i === LINES.length - 1 ? C.terracotta : C.sparkle }}>
              {l.slice(0, chars)}
            </div>
          );
        })}
      </div>

      {/* Screenshots */}
      <Img
        src={staticFile("tech/swif.webp")}
        style={{
          position: "absolute",
          left: 1080,
          top: 110,
          width: 520,
          border: `8px solid ${C.surface}`,
          rotate: "-2deg",
          boxShadow: "0 24px 48px -16px rgba(22,43,77,0.35)",
          translate: `${ease(f, [14, 40], [300, 0])}px 0`,
          opacity: ease(f, [14, 26], [0, 1]),
        }}
      />
      <Img
        src={staticFile("tech/selaras.webp")}
        style={{
          position: "absolute",
          left: 1330,
          top: 320,
          width: 500,
          border: `8px solid ${C.surface}`,
          rotate: "2deg",
          boxShadow: "0 24px 48px -16px rgba(22,43,77,0.35)",
          translate: `${ease(f, [22, 48], [300, 0])}px 0`,
          opacity: ease(f, [22, 34], [0, 1]),
        }}
      />

      {/* Badges */}
      <div style={{ position: "absolute", left: 960, top: 700, display: "flex", gap: 24 }}>
        {BADGES.map((b, i) => (
          <div
            key={b.big}
            style={{
              background: i === 0 ? C.navyDeep : C.surface,
              border: `6px solid ${C.surface}`,
              boxShadow: "0 18px 36px -14px rgba(22,43,77,0.35)",
              padding: "22px 26px",
              width: 280,
              rotate: `${[-2, 1.5, -1][i]}deg`,
              translate: `0 ${ease(f, [50 + i * 8, 74 + i * 8], [160, 0])}px`,
              opacity: ease(f, [50 + i * 8, 62 + i * 8], [0, 1]),
            }}
          >
            <div style={{ fontFamily: DISPLAY, textTransform: "uppercase", fontSize: 40, lineHeight: 1, color: i === 0 ? C.inverse : C.navy }}>{b.big}</div>
            <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 22, marginTop: 10, color: i === 0 ? C.sparkle : C.terracotta }}>{b.small}</div>
          </div>
        ))}
      </div>
      <Pixels frame={f} start={40} style={{ right: 110, top: 60 }} />
    </AbsoluteFill>
  );
};
