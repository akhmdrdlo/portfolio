"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, type PanInfo } from "motion/react";
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Send } from "lucide-react";
import type { Work } from "@/data/portfolio";

const STEPS = [
  { no: "01", label: "Pembuka", text: "Cover yang bikin orang berhenti scroll" },
  { no: "02", label: "Isi", text: "Materi mengalir, nyambung antar slide" },
  { no: "03", label: "Penutup", text: "Ajakan & kontak biar gampang dihubungi" },
];

/** Instagram carousel simulator: swipe/drag, arrows, dots — synced with the 01/02/03 step cards. */
export function IgCarousel({ slides }: { slides: Work[] }) {
  const [index, setIndex] = useState(0);
  const go = (i: number) => setIndex(Math.max(0, Math.min(slides.length - 1, i)));

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -50 || info.velocity.x < -400) go(index + 1);
    else if (info.offset.x > 50 || info.velocity.x > 400) go(index - 1);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:items-center">
      <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-2xl border-2 border-navy-deep/10 bg-surface shadow-sticker">
        <div className="flex items-center gap-2 px-3 py-2.5">
          <span className="h-7 w-7 rounded-full bg-gradient-to-br from-terracotta to-cream p-[2px]">
            <span className="block h-full w-full rounded-full bg-navy-deep" />
          </span>
          <span className="text-xs font-bold text-ink">akidooo.studio</span>
          <span className="ml-auto text-[0.7rem] font-semibold text-navy-muted">
            {index + 1}/{slides.length}
          </span>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden bg-navy-deep" data-cursor="Geser">
          <motion.div
            className="flex h-full cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={onDragEnd}
            animate={{ x: `${-index * 100}%` }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            {slides.map((s, i) => (
              <div key={s.id} className="relative h-full w-full shrink-0">
                <Image src={s.image.src} alt={`Slide ${i + 1}: ${s.title}`} fill sizes="320px" className="pointer-events-none object-cover" draggable={false} />
              </div>
            ))}
          </motion.div>
          <button
            type="button"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            className="absolute left-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-surface/90 text-ink shadow transition-opacity disabled:opacity-0"
            aria-label="Slide sebelumnya"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            disabled={index === slides.length - 1}
            className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-surface/90 text-ink shadow transition-opacity disabled:opacity-0"
            aria-label="Slide berikutnya"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="flex items-center gap-3 px-3 py-2.5 text-ink">
          <Heart size={20} />
          <MessageCircle size={20} />
          <Send size={20} />
          <div className="mx-auto flex gap-1.5" role="tablist" aria-label="Pilih slide">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide ${i + 1}`}
                onClick={() => go(i)}
                className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${i === index ? "w-4 bg-navy" : "w-1.5 bg-sparkle"}`}
              />
            ))}
          </div>
          <span className="w-[68px]" />
        </div>
      </div>

      <ol className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
        {STEPS.map((step, i) => {
          const on = i === Math.min(index, STEPS.length - 1);
          return (
            <li key={step.no}>
              <button
                type="button"
                onClick={() => go(i)}
                className={`flex w-full items-start gap-4 rounded-xl border-2 p-4 text-left transition-[background-color,border-color,transform] duration-300 ${
                  on ? "-translate-y-0.5 border-navy-deep bg-navy-deep text-ink-inverse" : "border-navy-deep/10 bg-surface text-ink hover:border-navy-deep/30"
                }`}
              >
                <span className={`display text-3xl ${on ? "!text-sparkle" : "!text-terracotta"}`}>{step.no}</span>
                <span>
                  <span className="block font-bold uppercase tracking-wide">{step.label}</span>
                  <span className={`block text-sm ${on ? "text-ink-inverse/80" : "text-navy-muted"}`}>{step.text}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
