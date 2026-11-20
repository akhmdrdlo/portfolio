"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export const REVEAL_EVENT = "akidooo:reveal";

/** True once the preloader has finished (or was skipped). */
export function isRevealed(): boolean {
  return typeof document !== "undefined" && document.documentElement.dataset.loaded !== undefined;
}

/** Runs `cb` right away if the page is revealed, otherwise after the preloader finishes. */
export function onReveal(cb: () => void): () => void {
  if (isRevealed()) {
    cb();
    return () => {};
  }
  const handler = () => cb();
  window.addEventListener(REVEAL_EVENT, handler, { once: true });
  return () => window.removeEventListener(REVEAL_EVENT, handler);
}

export const MQ = {
  motion: "(prefers-reduced-motion: no-preference)",
  reduced: "(prefers-reduced-motion: reduce)",
  desktop: "(min-width: 768px)",
  fine: "(pointer: fine)",
} as const;

export { gsap, ScrollTrigger, useGSAP };
