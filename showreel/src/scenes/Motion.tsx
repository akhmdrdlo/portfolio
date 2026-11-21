import { Video } from "@remotion/media";
import { AbsoluteFill, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { C, Sparkle, display, ease, eyebrow } from "../theme";

const Frame = ({ src, trim, label, style, start }: { src: string; trim: number; label: string; style: React.CSSProperties; start: number }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <div
      style={{
        position: "absolute",
        ...style,
        translate: `0 ${ease(f, [start, start + 26], [140, 0])}px`,
        opacity: ease(f, [start, start + 12], [0, 1]),
      }}
    >
      <div style={{ border: `8px solid ${C.surface}`, background: C.navy, boxShadow: "0 30px 60px -20px rgba(0,0,0,0.5)", overflow: "hidden", height: "100%" }}>
        <Video src={staticFile(src)} trimBefore={trim * fps} muted style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ ...eyebrow, fontSize: 22, position: "absolute", top: -24, left: 24, background: C.surface, color: C.navyDeep, padding: "6px 14px" }}>{label}</div>
    </div>
  );
};

/** 20–30s: real footage from earlier projects in sticker frames, kinetic headline. */
export const Motion = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: C.navyDeep }}>
      <div style={{ position: "absolute", left: 120, top: 120, width: 640 }}>
        <div style={{ ...eyebrow, color: C.sparkle, opacity: ease(f, [0, 14], [0, 1]) }}>03 · Video & motion</div>
        <div style={{ ...display, color: C.inverse, fontSize: 168, marginTop: 24 }}>
          {["Edit,", "motion,", "after movie."].map((w, i) => (
            <div key={w} style={{ overflow: "hidden", paddingBlock: 4 }}>
              <div style={{ translate: `0 ${ease(f, [4 + i * 6, 30 + i * 6], [110, 0])}%`, color: i === 2 ? C.terracotta : C.inverse }}>{w}</div>
            </div>
          ))}
        </div>
        <div style={{ ...eyebrow, fontSize: 26, color: C.inverse, marginTop: 36, lineHeight: 1.6, opacity: ease(f, [36, 52], [0, 1]) }}>
          Top 7 West Java
          <br />
          Cinematography Festival
        </div>
      </div>

      <Frame src="clips/motion.mp4" trim={0} label="Motion graphic" start={10} style={{ left: 820, top: 110, width: 980, height: 552 }} />
      <Frame src="clips/reels.mp4" trim={2} label="Reels" start={22} style={{ left: 980, top: 700, width: 520, height: 292 }} />
      <div style={{ position: "absolute", right: 90, bottom: 110, rotate: `${ease(f, [0, 300], [0, 360], (t) => t)}deg` }}>
        <Sparkle size={80} color={C.terracotta} />
      </div>
    </AbsoluteFill>
  );
};
