"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, MQ } from "@/lib/gsap";

/** Lightweight cursor label (LIHAT / GESER / PLAY) for elements with [data-cursor], fine pointers only. */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia(`${MQ.fine} and ${MQ.motion}`).matches) return;
    const xTo = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3.out" });
    const move = (e: PointerEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      const target = (e.target as Element | null)?.closest<HTMLElement>("[data-cursor]");
      setLabel(target?.dataset.cursor ?? null);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[90] hidden [@media(pointer:fine)]:block">
      <div
        className={`eyebrow -translate-x-1/2 -translate-y-1/2 rounded-full bg-terracotta px-4 py-2.5 text-ink-inverse shadow-sticker-lift transition-[opacity,scale] duration-300 ease-out-expo ${
          label ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
      >
        {label}
      </div>
    </div>
  );
}
