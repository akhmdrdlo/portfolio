"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { gsap, useGSAP, MQ, ScrollTrigger } from "@/lib/gsap";
import { works, workCategories, type Work, type WorkCategory } from "@/data/portfolio";
import { waLink } from "@/lib/whatsapp";
import { RevealSection } from "../motion";
import { SectionHeading, StickerCard } from "../ui";
import { Modal } from "../Modal";
import { Sparkle } from "../ornaments";

const TILTS = [-2, 1.5, -1, 2, -1.5, 1];

/** Greedy masonry: drop each work into the currently shortest column (by aspect ratio). */
function distribute(items: Work[], cols: number): Work[][] {
  const columns: Work[][] = Array.from({ length: cols }, () => []);
  const heights = new Array<number>(cols).fill(0);
  for (const w of items) {
    const ratio = Math.min(w.image.h / w.image.w, 1.8);
    let target = 0;
    for (let i = 1; i < cols; i++) if ((heights[i] ?? 0) < (heights[target] ?? 0) - 0.05) target = i;
    columns[target]!.push(w);
    heights[target] = (heights[target] ?? 0) + ratio + 0.35;
  }
  return columns;
}

function useColumns() {
  const [cols, setCols] = useState(2);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setCols(mq.matches ? 3 : 2);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return cols;
}

const COLUMN_SPEEDS = [0.35, -0.25, 0.55];

export function Works() {
  const [filter, setFilter] = useState<WorkCategory | "semua">("semua");
  const [active, setActive] = useState<Work | null>(null);
  const cols = useColumns();
  const grid = useRef<HTMLDivElement>(null);

  const visible = useMemo(() => (filter === "semua" ? works : works.filter((w) => w.category === filter)), [filter]);
  const columns = useMemo(() => distribute(visible, cols), [visible, cols]);

  // Column parallax: each column drifts at its own speed for collage depth.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(`${MQ.motion} and ${MQ.desktop}`, () => {
        gsap.utils.toArray<HTMLElement>("[data-col]").forEach((col, i) => {
          const s = COLUMN_SPEEDS[i % COLUMN_SPEEDS.length] ?? 0;
          gsap.fromTo(
            col,
            { y: () => 80 * s },
            { y: () => -80 * s, ease: "none", scrollTrigger: { trigger: grid.current, start: "top bottom", end: "bottom top", scrub: true } },
          );
        });
      });
      return () => mm.revert();
    },
    { scope: grid, dependencies: [cols, filter], revertOnUpdate: true },
  );

  useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 450);
    return () => clearTimeout(t);
  }, [filter, cols]);

  return (
    <RevealSection id="karya" className="relative bg-sky/60 py-24 md:py-32" ariaLabel="Karya pilihan">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="02"
            eyebrow="Karya pilihan"
            title={
              <>
                Hasil yang <span className="text-terracotta">bicara</span>
                <br />
                sendiri.
              </>
            }
          />
          <p className="max-w-sm text-ink-body" data-reveal>
            Dari poster yang bikin berhenti scroll sampai logo yang gampang diingat. Klik salah satu buat lihat lebih dekat.
          </p>
        </div>

        {/* Filter chips: horizontal snap-scroll on mobile */}
        <div className="-mx-4 mt-10 overflow-x-auto px-4 [scrollbar-width:none] md:mx-0 md:px-0" data-reveal>
          <LayoutGroup>
            <ul className="flex w-max gap-2" role="tablist" aria-label="Filter kategori karya">
              {workCategories.map((c) => {
                const selected = filter === c.id;
                const count = c.id === "semua" ? works.length : works.filter((w) => w.category === c.id).length;
                return (
                  <li key={c.id}>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setFilter(c.id)}
                      className={`relative min-h-11 rounded-full px-5 text-sm font-bold transition-colors ${selected ? "text-ink-inverse" : "text-ink hover:text-terracotta"}`}
                    >
                      {selected ? <motion.span layoutId="work-chip" className="absolute inset-0 rounded-full bg-navy-deep" transition={{ type: "spring", stiffness: 260, damping: 24 }} /> : null}
                      <span className="relative">
                        {c.label} <span className={selected ? "text-sparkle" : "text-navy-muted"}>{count}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </LayoutGroup>
        </div>

        <div ref={grid} className="mt-12 grid gap-6 md:gap-10" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
          {columns.map((col, ci) => (
            <div key={ci} data-col className="flex flex-col gap-10 md:gap-14">
              <AnimatePresence mode="popLayout">
                {col.map((w, i) => (
                  <motion.button
                    layout
                    key={w.id}
                    type="button"
                    onClick={() => setActive(w)}
                    data-cursor="Lihat"
                    initial={{ opacity: 0, y: 30, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ type: "spring", stiffness: 260, damping: 24 }}
                    className="group text-left"
                    aria-label={`Lihat ${w.title} — ${w.client}`}
                  >
                    <StickerCard
                      image={w.image}
                      alt=""
                      tag={w.tag}
                      tilt={TILTS[(ci * 3 + i) % TILTS.length]}
                      sizes="(min-width: 1024px) 30vw, 46vw"
                      imageClassName="max-h-[560px]"
                      fit={w.category === "branding" ? "contain" : "cover"}
                    />
                    <span className="mt-4 flex items-start justify-between gap-3 px-1">
                      <span>
                        <span className="block font-bold text-ink transition-colors group-hover:text-terracotta">{w.title}</span>
                        <span className="block text-sm text-navy-muted">{w.client}</span>
                      </span>
                      <ArrowUpRight size={18} className="mt-1 shrink-0 text-navy-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-terracotta" />
                    </span>
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <p className="mt-16 flex items-center justify-center gap-2 text-center text-sm font-semibold text-navy-muted" data-reveal>
          <Sparkle className="h-3 w-3 text-terracotta" /> Portofolio lengkap terus bertambah. Mau lihat contoh yang lebih spesifik? Tanya aja.
        </p>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} label={active ? `${active.title} — ${active.client}` : "Detail karya"}>
        {active ? <WorkDetail work={active} /> : null}
      </Modal>
    </RevealSection>
  );
}

function WorkDetail({ work }: { work: Work }) {
  const category = workCategories.find((c) => c.id === work.category)?.label;
  return (
    <div className="grid max-h-[88svh] overflow-y-auto bg-canvas md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:overflow-hidden">
      <div className="relative flex min-h-[40svh] items-center justify-center bg-navy-deep p-6 md:max-h-[88svh] md:p-10">
        <Image
          src={work.image.src}
          alt={`${work.title} — ${work.client}`}
          width={work.image.w}
          height={work.image.h}
          sizes="(min-width: 768px) 60vw, 100vw"
          quality={85}
          className="max-h-[70svh] w-auto border-4 border-surface object-contain shadow-sticker-lift"
        />
      </div>
      <div className="flex flex-col gap-6 p-6 md:overflow-y-auto md:p-10">
        <div>
          <p className="eyebrow mb-3 text-terracotta">{category}</p>
          <h3 className="display text-5xl">{work.title}</h3>
          <p className="mt-2 font-semibold text-navy-muted">{work.client}</p>
        </div>
        <p className="leading-relaxed text-ink-body">{work.summary}</p>
        {work.palette ? (
          <div>
            <p className="eyebrow mb-3 text-navy-muted">Palet warna</p>
            <ul className="flex gap-3">
              {work.palette.map((c) => (
                <li key={c} className="flex flex-col items-center gap-1.5">
                  <span className="h-12 w-12 rounded-full border-4 border-surface shadow-sticker" style={{ background: c }} />
                  <span className="font-mono text-[0.7rem] text-navy-muted">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <a
          href={waLink(`Halo Kak Ridlo! Aku lihat karya "${work.title}" di portofoliomu. Aku mau bikin yang mirip, bisa ngobrol dulu?`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-terracotta px-6 font-bold text-ink-inverse transition-[filter] hover:brightness-110"
        >
          Mau yang seperti ini <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}
