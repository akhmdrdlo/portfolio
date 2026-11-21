"use client";

import { useRef } from "react";
import { gsap, useGSAP, MQ } from "@/lib/gsap";
import { LoopVideo } from "../LoopVideo";
import { PixelCluster, Sparkle } from "../ornaments";

/** Full showreel right under the hero: silent loop that scales up into place as you scroll. */
export function Showreel() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        gsap.fromTo(
          "[data-reel-frame]",
          { scale: 0.86, rotate: -1.5 },
          { scale: 1, rotate: 0, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "center center", scrub: true } },
        );
        gsap.to("[data-reel-spark]", { rotate: 360, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: 0.6 } });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} aria-label="Showreel" className="relative overflow-clip bg-navy-deep pb-20 pt-12 md:pb-28 md:pt-16">
      <PixelCluster className="absolute right-6 top-6 md:right-12" pattern={[[0, 0, 1], [1, 0, 2], [1, 1, 1], [2, 1, 2]]} />
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="mb-6 flex items-end justify-between gap-4 text-ink-inverse md:mb-8">
          <p className="display text-[clamp(2.4rem,6vw,4.5rem)] !text-ink-inverse">
            Showreel<span className="text-terracotta">.</span>
          </p>
          <p className="eyebrow mb-2 flex items-center gap-2 text-sparkle">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terracotta opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-terracotta" />
            </span>
            Desain · Foto · Video · Web
          </p>
        </div>

        <div data-reel-frame className="relative will-change-transform">
          <div className="relative aspect-video overflow-hidden border-4 border-surface bg-navy shadow-sticker-lift">
            <LoopVideo
              src="/video/showreel-full.mp4"
              poster="/video/showreel-full.webp"
              lazy
              label="Showreel Akhmad Ridlo Rifa'i: desain grafis, fotografi, video, dan web"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <span className="eyebrow absolute -top-3 left-4 bg-surface px-3 py-1 text-ink shadow-sticker">2021 – sekarang</span>
          <span data-reel-spark className="absolute -bottom-5 -right-3 text-terracotta md:-right-5">
            <Sparkle className="h-10 w-10 md:h-14 md:w-14" />
          </span>
        </div>
      </div>
    </section>
  );
}
