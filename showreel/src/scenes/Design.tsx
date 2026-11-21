import { AbsoluteFill, Img, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { C, Pixels, display, ease, eyebrow } from "../theme";

type Card = { src: string; tag: string; x: number; y: number; w: number; tilt: number; delay: number; cutout?: boolean };

const CARDS: Card[] = [
  { src: "work/ruang-disen.webp", tag: "Poster profil", x: 700, y: 120, w: 300, tilt: -5, delay: 6 },
  { src: "work/nyetor-sewa-motor.webp", tag: "Poster IG", x: 1040, y: 70, w: 250, tilt: 4, delay: 12 },
  { src: "work/compro-merah.webp", tag: "Company profile", x: 1330, y: 150, w: 360, tilt: -2, delay: 18 },
  { src: "work/techspiration-ux.webp", tag: "Poster event", x: 760, y: 560, w: 270, tilt: 3, delay: 24 },
  { src: "work/kartu-nama-renita.webp", tag: "Kartu nama", x: 1070, y: 640, w: 360, tilt: -3, delay: 30 },
  { src: "work/logo-nyetor.webp", tag: "Logo", x: 1480, y: 720, w: 330, tilt: 2, delay: 36 },
];

const MASCOTS = [
  { src: "work/maskot/kelelawar-3.webp", x: 1720, y: 470, w: 150, delay: 70 },
  { src: "work/maskot/rusa-melambai.webp", x: 120, y: 790, w: 200, delay: 78 },
  { src: "work/maskot/kucing.webp", x: 360, y: 880, w: 220, delay: 86 },
];

/** 8–15s: collage stickers drop in with spring, mascots pop up at the end. */
export const Design = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const drift = ease(f, [0, 210], [0, -40], (t) => t);

  return (
    <AbsoluteFill style={{ background: C.sky }}>
      <div style={{ position: "absolute", left: 120, top: 150 }}>
        <div style={{ ...eyebrow, color: C.terracotta, opacity: ease(f, [0, 16], [0, 1]) }}>01 · Desain grafis</div>
        <div style={{ ...display, fontSize: 170, marginTop: 24 }}>
          {["Poster,", "logo,", "maskot."].map((w, i) => (
            <div key={w} style={{ overflow: "hidden", paddingBlock: 4 }}>
              <div style={{ translate: `0 ${ease(f, [4 + i * 6, 30 + i * 6], [110, 0])}%`, color: i === 2 ? C.terracotta : C.navyDeep }}>{w}</div>
            </div>
          ))}
        </div>
      </div>

      {CARDS.map((c, i) => {
        const s = spring({ frame: f - c.delay, fps, config: { stiffness: 260, damping: 24 } });
        return (
          <div
            key={c.src}
            style={{
              position: "absolute",
              left: c.x,
              top: c.y,
              width: c.w,
              translate: `0 ${(1 - s) * -420 + drift * (1 + (i % 3) * 0.4)}px`,
              rotate: `${c.tilt + (1 - s) * (i % 2 ? 25 : -25)}deg`,
              opacity: s,
            }}
          >
            <div style={{ border: `8px solid ${C.surface}`, background: C.surface, boxShadow: "0 24px 48px -16px rgba(22,43,77,0.35)" }}>
              <Img src={staticFile(c.src)} style={{ width: "100%", display: "block" }} />
            </div>
            <div
              style={{
                ...eyebrow,
                fontSize: 20,
                position: "absolute",
                top: -22,
                left: 20,
                background: C.surface,
                color: C.navyDeep,
                padding: "6px 14px",
                boxShadow: "0 8px 16px -8px rgba(22,43,77,0.35)",
              }}
            >
              {c.tag}
            </div>
          </div>
        );
      })}

      {MASCOTS.map((m) => {
        const s = spring({ frame: f - m.delay, fps, config: { stiffness: 220, damping: 14 } });
        return (
          <Img
            key={m.src}
            src={staticFile(m.src)}
            style={{
              position: "absolute",
              left: m.x,
              top: m.y,
              width: m.w,
              scale: s,
              translate: `0 ${(1 - s) * 80}px`,
              filter: "drop-shadow(0 18px 20px rgba(22,43,77,0.3))",
            }}
          />
        );
      })}
      <Pixels frame={f} start={50} style={{ right: 110, top: 70 }} />
    </AbsoluteFill>
  );
};
