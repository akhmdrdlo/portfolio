import { AbsoluteFill, Img, staticFile, useCurrentFrame } from "remotion";
import { C, Pixels, Sparkle, display, ease, eyebrow } from "../theme";

const ROLES = ["Desain grafis", "Video editor", "Web & IT"];

/** 3–8s: cutout portrait rises behind a diagonal navy band, roles stack in on the right. */
export const Who = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: C.canvas }}>
      {/* Big name behind the portrait */}
      <div
        style={{
          ...display,
          position: "absolute",
          left: 90,
          top: 80,
          fontSize: 330,
          color: C.sky,
          translate: `${ease(f, [0, 150], [0, -80], (t) => t)}px 0`,
        }}
      >
        Akhmad
      </div>

      {/* Portrait */}
      <Img
        src={staticFile("me/ridlo-cutout.webp")}
        style={{
          position: "absolute",
          bottom: 0,
          left: 260,
          height: 980,
          translate: `0 ${ease(f, [0, 30], [180, 0])}px`,
          opacity: ease(f, [0, 14], [0, 1]),
          filter: "drop-shadow(0 30px 40px rgba(22,43,77,0.25))",
        }}
      />

      {/* Diagonal band */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 250,
          background: C.navyDeep,
          clipPath: "polygon(0 35%, 100% 0, 100% 100%, 0 100%)",
          translate: `0 ${ease(f, [6, 34], [260, 0])}px`,
        }}
      />
      <div
        style={{
          ...eyebrow,
          position: "absolute",
          left: 120,
          bottom: 70,
          color: C.inverse,
          opacity: ease(f, [26, 44], [0, 1]),
        }}
      >
        Bandung · berkarya sejak 2021
      </div>

      {/* Roles */}
      <div style={{ position: "absolute", right: 140, top: 230, display: "flex", flexDirection: "column", gap: 26, alignItems: "flex-end" }}>
        <div style={{ ...eyebrow, color: C.muted, opacity: ease(f, [14, 30], [0, 1]) }}>Akhmad Ridlo Rifa&apos;i</div>
        {ROLES.map((r, i) => (
          <div key={r} style={{ overflow: "hidden", paddingBlock: 4 }}>
            <div
              style={{
                ...display,
                fontSize: 140,
                color: i === 2 ? C.terracotta : C.navyDeep,
                translate: `0 ${ease(f, [20 + i * 8, 48 + i * 8], [110, 0])}%`,
              }}
            >
              {r}
            </div>
          </div>
        ))}
      </div>

      <div style={{ position: "absolute", right: 130, top: 120, rotate: `${ease(f, [30, 150], [0, 220], (t) => t)}deg` }}>
        <Sparkle size={70} color={C.navy} />
      </div>
      <Pixels frame={f} start={30} style={{ left: 120, top: 90 }} />
    </AbsoluteFill>
  );
};
