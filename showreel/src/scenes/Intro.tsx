import { AbsoluteFill, useCurrentFrame } from "remotion";
import { C, Pixels, Sparkle, display, ease, eyebrow } from "../theme";

/** 0–3s: navy canvas, sparkle spins in, "HALO, AKU RIDLO." masked line reveal. */
export const Intro = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: C.navyDeep, alignItems: "center", justifyContent: "center" }}>
      <AbsoluteFill
        style={{
          opacity: 0.07,
          backgroundImage: `linear-gradient(${C.inverse} 2px, transparent 2px), linear-gradient(90deg, ${C.inverse} 2px, transparent 2px)`,
          backgroundSize: "96px 96px",
        }}
      />
      <Pixels frame={f} start={4} size={26} style={{ left: 120, top: 110 }} />
      <Pixels frame={f} start={10} size={26} pattern={[[2, 0, 2], [1, 1, 1], [2, 1, 2], [0, 2, 1]]} style={{ right: 200, bottom: 190 }} />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 36 }}>
        <div style={{ rotate: `${ease(f, [0, 40], [-180, 0])}deg`, scale: ease(f, [0, 22], [0, 1]) }}>
          <Sparkle size={110} color={C.terracotta} />
        </div>
        <div style={{ ...display, color: C.inverse, fontSize: 230, textAlign: "center" }}>
          {["Halo, aku", "Ridlo."].map((line, i) => (
            <div key={line} style={{ overflow: "hidden", paddingBlock: 6 }}>
              <div style={{ translate: `0 ${ease(f, [10 + i * 7, 38 + i * 7], [110, 0])}%` }}>
                {line === "Ridlo." ? (
                  <>
                    Ridlo<span style={{ color: C.terracotta }}>.</span>
                  </>
                ) : (
                  line
                )}
              </div>
            </div>
          ))}
        </div>
        <div style={{ ...eyebrow, color: C.sparkle, opacity: ease(f, [40, 60], [0, 1]) }}>Akidooo · Showreel</div>
      </div>
    </AbsoluteFill>
  );
};
