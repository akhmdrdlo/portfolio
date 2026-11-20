"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP, REVEAL_EVENT, isRevealed } from "@/lib/gsap";
import { PixelCluster, Sparkle } from "./ornaments";

const LABELS = ["Desain", "Video", "Motion", "Siap Bantu!"];

export function finishReveal() {
  try {
    sessionStorage.setItem("akidooo_loaded", "1");
  } catch {}
  document.documentElement.dataset.loaded = "1";
  window.dispatchEvent(new Event(REVEAL_EVENT));
}

/** Replays the preloader from the footer. */
export function replayPreloader() {
  try {
    sessionStorage.removeItem("akidooo_loaded");
  } catch {}
  window.scrollTo(0, 0);
  window.location.reload();
}

/**
 * Editorial preloader (~2s): counter 00→100 with cycling labels, stamp pop, diagonal curtain wipe.
 * Real page content is server-rendered underneath; an inline script in layout.tsx hides this
 * before first paint for returning visitors and reduced-motion users.
 */
export function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const counter = useRef<HTMLSpanElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (isRevealed()) return;
      const el = root.current;
      if (!el) return;

      const state = { n: 0 };
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          el.style.display = "none";
        },
      });

      tl.to(state, {
        n: 100,
        duration: 1.1,
        ease: "power2.inOut",
        onUpdate: () => {
          const n = Math.round(state.n);
          if (counter.current) counter.current.textContent = String(n).padStart(2, "0");
          const idx = Math.min(LABELS.length - 1, Math.floor((n / 100) * LABELS.length));
          if (label.current && label.current.textContent !== LABELS[idx]) label.current.textContent = LABELS[idx] ?? "";
        },
      })
        .to("[data-pl-sparkle]", { rotate: 180, duration: 1.1, ease: "power2.inOut" }, 0)
        .from("[data-pixel]", { scale: 0, transformOrigin: "50% 50%", stagger: 0.05, duration: 0.3 }, 0.1)
        .to("[data-pl-badge]", { scale: 1.06, duration: 0.18, ease: "power2.out" }, 1.1)
        .to("[data-pl-badge]", { scale: 1, duration: 0.17, ease: "power2.in" }, 1.28)
        .to("[data-pl-content]", { opacity: 0, y: -24, duration: 0.25, ease: "power2.in" }, 1.45)
        .fromTo(
          el,
          { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
          { clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)", duration: 0.65, ease: "expo.inOut" },
          1.45,
        )
        // Let the hero start while the curtain is still lifting.
        .add(() => {
          finishReveal();
        }, 1.7);
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      data-preloader
      role="status"
      aria-label="Memuat halaman"
      className="fixed inset-0 z-[100] grid place-items-center bg-navy-deep text-ink-inverse"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <PixelCluster className="absolute left-6 top-6 opacity-80" pattern={[[0, 0, 1], [1, 0, 2], [0, 1, 2], [2, 1, 1]]} size={10} />
      <PixelCluster className="absolute bottom-6 right-6 opacity-80" pattern={[[2, 0, 2], [1, 1, 1], [2, 1, 2], [0, 2, 1]]} size={10} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "linear-gradient(var(--ink-inverse) 1px, transparent 1px), linear-gradient(90deg, var(--ink-inverse) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div data-pl-content className="relative flex flex-col items-center gap-6">
        <div data-pl-badge className="relative h-28 w-24 rotate-[-3deg] border-4 border-dashed border-ink-inverse/80 bg-cream p-1">
          <Image src="/me/ridlo-avatar.webp" alt="" fill sizes="96px" className="object-cover object-top" priority />
        </div>
        <div className="flex items-end gap-3">
          <span ref={counter} className="display text-[clamp(5rem,18vw,9rem)] leading-none text-ink-inverse tabular-nums">
            00
          </span>
          <span className="display mb-3 text-3xl text-sparkle">%</span>
        </div>
        <div className="flex items-center gap-3">
          <span data-pl-sparkle className="inline-block text-sparkle">
            <Sparkle className="h-5 w-5" />
          </span>
          <span ref={label} className="eyebrow min-w-[9ch] text-ink-inverse">
            {LABELS[0]}
          </span>
        </div>
      </div>
      <span className="sr-only">Halaman sedang dimuat</span>
    </div>
  );
}
