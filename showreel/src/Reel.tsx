/**
 * Showreel v3: hard kinetic typography in the spirit of the 2024 reel
 * (letter builds, tracking collapses, slot swaps, outlined stacks, circle wipes, morphs),
 * rebuilt in the Akidooo brand with the current story. No age on screen.
 */
import { Video } from "@remotion/media";
import { AbsoluteFill, Img, Sequence, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { C, Pixels, SANS, Sparkle } from "./theme";
import {
  Center,
  CircleWipe,
  Counter,
  Flash,
  Marquee,
  Morph,
  PanelSwipe,
  SHAPES,
  SNAP,
  SlotSwap,
  StackRepeat,
  Tracking,
  TypeBuild,
  Typewriter,
  Underline,
  heavy,
  k,
  outline,
  tall,
} from "./kit";

const small = (size: number, color: string) => ({ fontFamily: SANS, fontWeight: 700, fontSize: size, letterSpacing: "0.16em", textTransform: "uppercase" as const, color });

/* 01 — dot pulses then blows up into the canvas */
const S01 = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: "#0B1526" }}>
      <Center>
        <div style={{ width: 28, height: 28, borderRadius: 14, background: C.inverse, scale: k(f, [0, 8, 16, 24], [0, 1.3, 0.9, 1.1]) }} />
      </Center>
      <CircleWipe start={26} dur={18} color={C.canvas} />
    </AbsoluteFill>
  );
};

/* 02 — "H A L O !!" collapses */
const S02 = () => {
  const f = useCurrentFrame();
  return (
    <Center bg={C.canvas}>
      <div style={{ scale: k(f, [30, 54], [1, 1.6], SNAP), opacity: k(f, [44, 54], [1, 0]) }}>
        <Tracking text="Halo!!" start={0} dur={24} from={0.9} style={heavy(250)} />
      </div>
    </Center>
  );
};

/* 03 — SIAPA / AKU / SIH? built word by word */
const S03 = () => {
  const f = useCurrentFrame();
  return (
    <Center bg={C.canvas}>
      <TypeBuild units={["Siapa", "aku", "sih?"]} step={11} column accentLast style={{ ...heavy(230), lineHeight: 0.92 }} />
      <Pixels frame={f} start={30} size={24} style={{ right: 180, top: 140 }} />
    </Center>
  );
};

/* 04 — navy panel swipes in, underline, slot swap "TENANG / DULU" */
const S04 = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: C.canvas }}>
      <PanelSwipe start={0} dur={12} color={C.navyDeep} from="left">
        <Center>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 26 }}>
            <div style={{ height: 230, display: "flex", alignItems: "center" }}>
              <SlotSwap words={["Santai", "Kenalan", "Dulu."]} start={10} every={14} style={heavy(220)} accent={C.inverse} />
            </div>
            <Underline start={14} width={360} color={C.terracotta} height={12} shrinkAt={52} />
          </div>
        </Center>
      </PanelSwipe>
      <div style={{ position: "absolute", right: 120, bottom: 120, rotate: `${k(f, [0, 60], [0, 180])}deg` }}>
        <Sparkle size={70} color={C.terracotta} />
      </div>
    </AbsoluteFill>
  );
};

/* 05 — profile card: portrait slides in, name typed, roles drop line by line */
const ROLES = ["Desain grafis", "Video editor", "Web developer", "Business Dev IT · PT Len"];
const S05 = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill style={{ background: C.navyDeep }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "44%" }}>
      <PanelSwipe start={0} dur={14} color={C.canvas} from="left">
        <Img
          src={staticFile("me/ridlo-cutout.webp")}
          style={{ position: "absolute", bottom: 0, left: 140, height: 960, translate: `${k(f, [6, 30], [-200, 0])}px 0`, opacity: k(f, [6, 16], [0, 1]) }}
        />
      </PanelSwipe>
      </div>
      <div style={{ position: "absolute", left: "48%", top: 210, right: 100 }}>
        <Typewriter text="AKHMAD RIDLO RIFA'I" start={10} cps={0.9} style={heavy(84, C.inverse)} />
        <div style={{ height: 8, background: C.terracotta, width: k(f, [30, 44], [0, 280], SNAP), marginTop: 28, marginBottom: 34 }} />
        {ROLES.map((r, i) => {
          const s = spring({ frame: f - 40 - i * 7, fps, config: { stiffness: 260, damping: 24 } });
          return (
            <div key={r} style={{ overflow: "hidden" }}>
              <div style={{ ...tall(i === 3 ? 74 : 104, i === 3 ? C.sparkle : C.inverse), translate: `0 ${(1 - s) * 110}%`, paddingBlock: 4 }}>{r}</div>
            </div>
          );
        })}
        <div style={{ ...small(28, C.sparkle), marginTop: 30, opacity: k(f, [80, 92], [0, 1]) }}>Bandung · berkarya sejak 2021</div>
      </div>
    </AbsoluteFill>
  );
};

/* 06 — "MAU LIHAT / KARYAKU?" */
const S06 = () => (
  <Center bg={C.canvas}>
    <TypeBuild units={["Mau", "lihat", "karyaku?"]} step={8} accentLast style={heavy(170)} />
  </Center>
);

/* 07 — outlined DESAIN stack + rapid design flashes */
const WORKS = ["work/nyetor-sewa-motor.webp", "work/ruang-disen.webp", "work/kominfo-himatif.webp", "work/techspiration-ux.webp", "work/dicoding-ml-ai.webp", "work/compro-merah.webp", "work/kartu-nama-renita.webp", "work/id-card-sabit.webp", "work/logo-nyetor.webp", "work/logo-ombak.webp"];
const S07 = () => (
  <AbsoluteFill style={{ background: C.sky }}>
    <StackRepeat text="Desain grafis" size={150} rows={7} fillColor={C.terracotta} />
    <Flash
      srcs={WORKS}
      start={22}
      each={7}
      render={(src, local, i) => (
        <Center>
          <div style={{ border: `10px solid ${C.surface}`, background: C.surface, boxShadow: "0 30px 60px -20px rgba(22,43,77,0.45)", rotate: `${i % 2 ? 3 : -3}deg`, scale: k(local, [0, 6], [1.15, 1], SNAP) }}>
            <Img src={staticFile(src)} style={{ display: "block", maxHeight: 640, maxWidth: 900 }} />
          </div>
        </Center>
      )}
    />
  </AbsoluteFill>
);

/* 08 — "AKU BIKIN [slot]" with matching artwork popping on the right */
const MAKES = [
  { w: "Poster", src: "work/ruang-disen.webp" },
  { w: "Logo", src: "work/logo-nyetor.webp" },
  { w: "Maskot", src: "work/maskot/kelelawar-3.webp", cut: true },
  { w: "Compro", src: "work/compro-merah.webp" },
  { w: "Feed IG", src: "work/kominfo-himatif.webp" },
];
const S08 = () => {
  const f = useCurrentFrame();
  const every = 22;
  const i = Math.min(MAKES.length - 1, Math.floor(f / every));
  const local = f - i * every;
  const m = MAKES[i]!;
  return (
    <AbsoluteFill style={{ background: C.canvas }}>
      <div style={{ position: "absolute", left: 120, top: 330 }}>
        <div style={tall(120, C.muted)}>Aku bikin</div>
        <div style={{ height: 250 }}>
          <SlotSwap words={MAKES.map((x) => x.w)} every={every} style={tall(250)} />
        </div>
      </div>
      <div style={{ position: "absolute", right: 160, top: 0, bottom: 0, width: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ rotate: `${k(local, [0, 10], [i % 2 ? 14 : -14, i % 2 ? 3 : -3], SNAP)}deg`, scale: k(local, [0, 10], [0.4, 1], SNAP) }}>
          {m.cut ? (
            <Img src={staticFile(m.src)} style={{ width: 460, filter: "drop-shadow(0 24px 28px rgba(22,43,77,0.35))" }} />
          ) : (
            <div style={{ border: `10px solid ${C.surface}`, background: C.surface, boxShadow: "0 30px 60px -20px rgba(22,43,77,0.45)" }}>
              <Img src={staticFile(m.src)} style={{ display: "block", maxHeight: 720, maxWidth: 620 }} />
            </div>
          )}
        </div>
      </div>
      {f > 88 ? (
        <>
          <Img src={staticFile("work/maskot/rusa-melambai.webp")} style={{ position: "absolute", left: 1180, bottom: 40, width: 220, scale: k(f, [88, 98], [0, 1], SNAP) }} />
          <Img src={staticFile("work/maskot/kucing.webp")} style={{ position: "absolute", right: 80, bottom: 60, width: 230, scale: k(f, [92, 102], [0, 1], SNAP) }} />
        </>
      ) : null}
    </AbsoluteFill>
  );
};

/* 09 — FOTOGRAFI stack, photos punch through a circle that morphs into a frame */
const PHOTOS = ["photo/sunrise-manglayang.webp", "photo/agustus-bendera.webp", "photo/nightscape-bandung.webp", "photo/kabut-manglayang.webp", "photo/siluet-senja.webp", "photo/pucuk-teh.webp"];
const S09 = () => {
  const f = useCurrentFrame();
  const radius = k(f, [18, 30], [0, 1], SNAP);
  return (
    <AbsoluteFill style={{ background: C.canvas }}>
      <StackRepeat text="Fotografi" size={170} rows={7} fillColor={C.navy} />
      <Flash
        srcs={PHOTOS}
        start={18}
        each={13}
        render={(src, local) => (
          <AbsoluteFill
            style={{
              clipPath: f < 60 ? `circle(${radius * 36}% at 50% 50%)` : `inset(${k(f, [60, 72], [14, 0], SNAP)}% ${k(f, [60, 72], [26, 0], SNAP)}% round ${k(f, [60, 72], [400, 0])}px)`,
            }}
          >
            <Img src={staticFile(src)} style={{ width: "100%", height: "100%", objectFit: "cover", scale: k(local, [0, 13], [1.12, 1]) }} />
          </AbsoluteFill>
        )}
      />
      <div style={{ position: "absolute", left: 120, bottom: 110, ...small(30, C.inverse), background: C.navyDeep, padding: "14px 24px", opacity: k(f, [70, 80], [0, 1]) }}>
        Juara 1 lomba fotografi jurusan
      </div>
    </AbsoluteFill>
  );
};

/* 10 — MOTION GRAPHIC assembling with semicircles and a bar */
const S10 = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: C.canvas }}>
      <div style={{ position: "absolute", left: -160, top: -160, width: 520, height: 520, borderRadius: 260, background: C.navyDeep, rotate: `${k(f, [0, 20], [-90, 0], SNAP)}deg`, clipPath: "inset(50% 0 0 50%)", scale: k(f, [0, 14], [0, 1], SNAP) }} />
      <div style={{ position: "absolute", right: -200, bottom: -200, width: 560, height: 560, borderRadius: 280, background: C.terracotta, clipPath: "inset(0 50% 50% 0)", scale: k(f, [4, 18], [0, 1], SNAP) }} />
      <Center>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <Typewriter text="MOTION" start={4} cps={0.6} cursor={false} style={heavy(200)} />
            <div style={{ height: 150, width: k(f, [16, 30], [0, 300], SNAP), background: C.navyDeep }} />
          </div>
          <div style={{ overflow: "hidden" }}>
            <div style={{ ...heavy(200, C.terracotta), translate: `0 ${k(f, [20, 34], [110, 0], SNAP)}%` }}>Graphic</div>
          </div>
        </div>
      </Center>
    </AbsoluteFill>
  );
};

/* 11 — real footage in frame, labels swap, then WOW! marquees */
const S11 = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill style={{ background: C.navyDeep }}>
      <Sequence durationInFrames={100} layout="absolute-fill">
        <div style={{ position: "absolute", left: 120, top: 120, ...small(30, C.sparkle) }}>
          Bumper · stinger · after movie
        </div>
        <div style={{ position: "absolute", left: 120, top: 180, ...tall(150, C.inverse) }}>
          <span style={{ display: "inline-block", height: 150 }}>
            <SlotSwap words={["Edit.", "Motion.", "Cerita."]} every={26} start={4} style={tall(150)} />
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            right: 110,
            top: 150,
            width: 1060,
            height: 596,
            border: `10px solid ${C.surface}`,
            overflow: "hidden",
            scale: k(f, [0, 16], [0.6, 1], SNAP),
            rotate: `${k(f, [0, 16], [-6, 0], SNAP)}deg`,
          }}
        >
          <Video src={staticFile("clips/motion.mp4")} trimBefore={2 * fps} muted style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div
          style={{
            position: "absolute",
            left: 160,
            bottom: 90,
            width: 400,
            height: 225,
            border: `8px solid ${C.surface}`,
            overflow: "hidden",
            translate: `0 ${k(f, [20, 34], [300, 0], SNAP)}px`,
          }}
        >
          <Video src={staticFile("clips/reels.mp4")} trimBefore={1 * fps} muted style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </Sequence>
      <Sequence from={100} layout="absolute-fill">
        <AbsoluteFill style={{ background: C.terracotta }}>
          <Marquee text="Wow!" size={300} y={-30} speed={22} color={C.inverse} outlined />
          <Marquee text="Wow!" size={300} y={330} speed={30} dir={-1} color={C.inverse} />
          <Marquee text="Wow!" size={300} y={690} speed={22} color={C.inverse} outlined />
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};

/* 12 — numbers: 17 video, Top 7 CIFEST */
const S12 = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: C.navyDeep }}>
      <CircleWipe start={0} dur={14} color={C.navyDeep} x="80%" y="20%" />
      <div style={{ position: "absolute", left: 120, top: 150, display: "flex", alignItems: "flex-end", gap: 40 }}>
        <Counter to={17} start={4} dur={22} style={tall(400, C.inverse)} />
        <div style={{ ...tall(120, C.sparkle), marginBottom: 40 }}>video</div>
      </div>
      <div style={{ position: "absolute", left: 120, bottom: 140, overflow: "hidden" }}>
        <div style={{ translate: `0 ${k(f, [34, 48], [110, 0], SNAP)}%` }}>
          <span style={{ ...tall(150, C.terracotta) }}>Top 7 </span>
          <span style={{ ...tall(150, C.inverse), ...outline(C.inverse, 3) }}>West Java</span>
        </div>
      </div>
      <div style={{ position: "absolute", left: 124, bottom: 100, ...small(28, C.sparkle), opacity: k(f, [48, 58], [0, 1]) }}>Cinematography Festival</div>
      <Pixels frame={f} start={20} size={26} style={{ right: 160, top: 140 }} />
    </AbsoluteFill>
  );
};

/* 13 — tech: "NGODING PAKAI [slot]" + typed terminal */
const S13 = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: C.canvas }}>
      <PanelSwipe start={0} dur={12} color={C.canvas} from="top" />
      <div style={{ position: "absolute", left: 120, top: 170 }}>
        <div style={tall(120, C.muted)}>Ngoding pakai</div>
        <div style={{ height: 200 }}>
          <SlotSwap words={["Next.js", "Laravel", "Google Cloud", "AWS"]} start={6} every={20} style={tall(190)} />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: 120,
          bottom: 120,
          width: 820,
          background: C.navyDeep,
          border: `8px solid ${C.surface}`,
          padding: "28px 34px",
          fontFamily: "Consolas, monospace",
          fontSize: 34,
          color: C.sparkle,
          translate: `0 ${k(f, [8, 24], [300, 0], SNAP)}px`,
        }}
      >
        <Typewriter text="$ npm run build  ✓ online" start={20} cps={0.8} style={{}} />
      </div>
      <Img
        src={staticFile("tech/swif.webp")}
        style={{ position: "absolute", right: 90, top: 330, width: 620, border: `10px solid ${C.surface}`, rotate: "3deg", translate: `${k(f, [12, 28], [900, 0], SNAP)}px 0`, boxShadow: "0 30px 60px -20px rgba(22,43,77,0.4)" }}
      />
      <Img
        src={staticFile("tech/selaras.webp")}
        style={{ position: "absolute", right: 330, top: 620, width: 540, border: `10px solid ${C.surface}`, rotate: "-2deg", translate: `${k(f, [22, 38], [900, 0], SNAP)}px 0`, boxShadow: "0 30px 60px -20px rgba(22,43,77,0.4)" }}
      />
    </AbsoluteFill>
  );
};

/* 14 — VALEDICTORIAN marquee + counters */
const S14 = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: C.navyDeep }}>
      <Marquee text="Valedictorian" size={210} y={60} speed={18} color={C.inverse} />
      <Marquee text="Bangkit 2024" size={150} y={300} speed={24} dir={-1} color={C.sparkle} outlined />
      <div style={{ position: "absolute", left: 120, right: 120, bottom: 110, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        {[
          { n: 11, l: "proyek software" },
          { n: 8, l: "sertifikasi" },
          { n: 3, l: "publikasi" },
        ].map((x, i) => (
          <div key={x.l} style={{ translate: `0 ${k(f, [20 + i * 6, 34 + i * 6], [260, 0], SNAP)}px` }}>
            <Counter to={x.n} start={22 + i * 6} dur={18} style={tall(220, i === 0 ? C.terracotta : C.inverse)} />
            <div style={small(30, C.sparkle)}>{x.l}</div>
          </div>
        ))}
        <div style={{ textAlign: "right", translate: `0 ${k(f, [44, 58], [260, 0], SNAP)}px` }}>
          <div style={tall(120, C.inverse)}>Google</div>
          <div style={small(30, C.sparkle)}>Associate Cloud Engineer</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* 15 — morph: dot → circle → square → sparkle → bar, lands as the "!" of SIAP BANTU! */
const S15 = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: C.canvas }}>
      <Center>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ ...heavy(230), clipPath: `inset(0 ${k(f, [50, 64], [100, 0], SNAP)}% 0 0)` }}>Siap bantu</div>
          <div style={{ position: "relative", width: 160, height: 230 }}>
            <div style={{ position: "absolute", left: 0, top: 0 }}>
              <Morph seq={[SHAPES.dot, SHAPES.circle, SHAPES.square, SHAPES.sparkle, SHAPES.bar]} start={0} each={13} size={160} color={C.terracotta} rotate={false} />
            </div>
            <div style={{ position: "absolute", left: 60, top: 176, width: 40, height: 40, borderRadius: 20, background: C.terracotta, scale: k(f, [54, 62], [0, 1], SNAP) }} />
          </div>
        </div>
      </Center>
    </AbsoluteFill>
  );
};

/* 16 — YUK, NGOBROL DULU! then everything shrinks back to the opening dot */
const S16 = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: "#0B1526" }}>
      <CircleWipe start={78} dur={22} color={C.navyDeep} reverse>
        <Center>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Tracking text="Yuk," start={0} dur={16} from={0.6} style={heavy(200, C.inverse)} />
            <TypeBuild units={["ngobrol", "dulu!"]} start={10} step={8} accentLast style={heavy(200, C.inverse)} />
            <div style={{ ...small(36, C.sparkle), marginTop: 46, opacity: k(f, [30, 42], [0, 1]) }}>WA 0821-2294-1060 · Akidooo</div>
          </div>
        </Center>
        <Pixels frame={f} start={20} size={26} style={{ left: 150, bottom: 150 }} />
      </CircleWipe>
      <Center>
        <div style={{ width: 28, height: 28, borderRadius: 14, background: C.inverse, scale: k(f, [96, 104], [0, 1]) }} />
      </Center>
    </AbsoluteFill>
  );
};

export const SCENES_V3 = [
  { name: "01 Dot", C: S01, d: 50 },
  { name: "02 Halo", C: S02, d: 55 },
  { name: "03 Siapa aku", C: S03, d: 60 },
  { name: "04 Kenalan", C: S04, d: 64 },
  { name: "05 Profil", C: S05, d: 115 },
  { name: "06 Karyaku", C: S06, d: 50 },
  { name: "07 Desain", C: S07, d: 95 },
  { name: "08 Aku bikin", C: S08, d: 115 },
  { name: "09 Fotografi", C: S09, d: 100 },
  { name: "10 Motion graphic", C: S10, d: 55 },
  { name: "11 Footage + Wow", C: S11, d: 140 },
  { name: "12 Angka video", C: S12, d: 80 },
  { name: "13 Ngoding", C: S13, d: 100 },
  { name: "14 Valedictorian", C: S14, d: 95 },
  { name: "15 Morph siap bantu", C: S15, d: 80 },
  { name: "16 Ngobrol", C: S16, d: 110 },
] as const;

export const REEL_DURATION = SCENES_V3.reduce((a, s) => a + s.d, 0);

export const Reel = () => {
  let at = 0;
  return (
    <AbsoluteFill style={{ background: C.canvas }}>
      {SCENES_V3.map((s) => {
        const from = at;
        at += s.d;
        return (
          <Sequence key={s.name} name={s.name} from={from} durationInFrames={s.d} layout="absolute-fill">
            <s.C />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
