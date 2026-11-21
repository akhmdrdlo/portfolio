import { AbsoluteFill, useCurrentFrame } from "remotion";
import { C, Pixels, Sparkle, display, ease, eyebrow } from "../theme";

/** 35–40s: "Yuk, ngobrol dulu!" + contact, ends on navy so the loop meets the intro. */
export const Outro = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: C.navyDeep, alignItems: "center", justifyContent: "center" }}>
      <Pixels frame={f} start={6} size={26} style={{ left: 140, bottom: 150 }} />
      <Pixels frame={f} start={12} size={26} pattern={[[0, 0, 1], [1, 0, 2], [1, 1, 1], [2, 1, 2]]} style={{ right: 160, top: 130 }} />
      <div style={{ ...display, color: C.inverse, fontSize: 250, textAlign: "center" }}>
        {["Yuk,", "ngobrol dulu!"].map((w, i) => (
          <div key={w} style={{ overflow: "hidden", paddingBlock: 6 }}>
            <div style={{ translate: `0 ${ease(f, [0 + i * 7, 28 + i * 7], [110, 0])}%`, color: i ? C.terracotta : C.inverse }}>{w}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 30, marginTop: 50, opacity: ease(f, [30, 48], [0, 1]) }}>
        <div style={{ ...eyebrow, color: C.inverse, fontSize: 34 }}>WA 0821-2294-1060</div>
        <Sparkle size={30} color={C.sparkle} style={{ rotate: `${ease(f, [30, 150], [0, 180], (t) => t)}deg` }} />
        <div style={{ ...eyebrow, color: C.inverse, fontSize: 34 }}>Akidooo · Bandung</div>
      </div>
    </AbsoluteFill>
  );
};
