import { AbsoluteFill, Img, Sequence, staticFile, useCurrentFrame } from "remotion";
import { C, display, ease, eyebrow } from "../theme";

const PHOTOS = [
  { src: "photo/sunrise-manglayang.webp", caption: "Sunrise, Manglayang" },
  { src: "photo/agustus-bendera.webp", caption: "Lomba Agustusan" },
  { src: "photo/nightscape-bandung.webp", caption: "Nightscape Bandung" },
  { src: "photo/kabut-manglayang.webp", caption: "Kabut Manglayang" },
];
const EACH = 36;

const Shot = ({ src, caption, index }: { src: string; caption: string; index: number }) => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ clipPath: `inset(0 0 0 ${ease(f, [0, 14], [100, 0])}%)` }}>
      <Img
        src={staticFile(src)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          scale: ease(f, [0, EACH + 14], [1.12, 1.0], (t) => t),
          translate: `${index % 2 ? -1 : 1}${ease(f, [0, EACH + 14], [0, 30], (t) => t)}px 0`,
        }}
      />
      <div
        style={{
          ...eyebrow,
          fontSize: 26,
          position: "absolute",
          right: 100,
          bottom: 100,
          background: C.surface,
          color: C.navyDeep,
          padding: "12px 22px",
          opacity: ease(f, [8, 18], [0, 1]),
        }}
      >
        {caption}
      </div>
    </AbsoluteFill>
  );
};

/** 15–20s: full-bleed photo wipes with slow push-in. */
export const Photo = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: C.navyDeep }}>
      {PHOTOS.map((p, i) => (
        <Sequence key={p.src} from={i * EACH} durationInFrames={EACH + 14} layout="absolute-fill">
          <Shot {...p} index={i} />
        </Sequence>
      ))}
      <AbsoluteFill style={{ background: "linear-gradient(90deg, rgba(22,43,77,0.75) 0%, rgba(22,43,77,0) 55%)" }} />
      <div style={{ position: "absolute", left: 120, top: 130 }}>
        <div style={{ ...eyebrow, color: C.sparkle, opacity: ease(f, [0, 14], [0, 1]) }}>02 · Fotografi</div>
        <div style={{ ...display, color: C.inverse, fontSize: 190, marginTop: 20 }}>
          {["Dari balik", "kamera."].map((w, i) => (
            <div key={w} style={{ overflow: "hidden", paddingBlock: 4 }}>
              <div style={{ translate: `0 ${ease(f, [4 + i * 6, 30 + i * 6], [110, 0])}%`, color: i ? C.terracotta : C.inverse }}>{w}</div>
            </div>
          ))}
        </div>
        <div style={{ ...eyebrow, fontSize: 28, color: C.inverse, marginTop: 30, opacity: ease(f, [30, 46], [0, 1]) }}>
          Juara 1 lomba fotografi jurusan
        </div>
      </div>
    </AbsoluteFill>
  );
};
