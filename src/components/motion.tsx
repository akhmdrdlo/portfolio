"use client";

import { useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGSAP, MQ } from "@/lib/gsap";
import { Sparkle } from "./ornaments";

/**
 * Wraps a section and reveals its marked children on scroll:
 * - [data-reveal-heading]: clip-path wipe up
 * - [data-reveal]: staggered rise
 * - [data-speed]: parallax drift (positive = slower than scroll, negative = faster)
 * - [data-pixels] rects: assemble on enter
 */
export function RevealSection({
  children,
  className = "",
  id,
  as: Tag = "section",
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "footer";
  ariaLabel?: string;
}) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        el.querySelectorAll<HTMLElement>("[data-reveal-heading]").forEach((h) => {
          gsap.fromTo(
            h,
            { clipPath: "inset(0 0 100% 0)", y: 40 },
            {
              clipPath: "inset(0 0 -10% 0)",
              y: 0,
              duration: 1,
              ease: "expo.out",
              scrollTrigger: { trigger: h, start: "top 88%", once: true },
            },
          );
        });

        const items = el.querySelectorAll<HTMLElement>("[data-reveal]");
        if (items.length) {
          gsap.set(items, { y: 48, autoAlpha: 0 });
          ScrollTrigger.batch(items, {
            start: "top 90%",
            once: true,
            onEnter: (batch) => gsap.to(batch, { y: 0, autoAlpha: 1, duration: 0.9, ease: "expo.out", stagger: 0.08, overwrite: true }),
          });
        }

        el.querySelectorAll<HTMLElement>("[data-speed]").forEach((p) => {
          const speed = Number(p.dataset.speed ?? 0);
          gsap.fromTo(
            p,
            { y: () => window.innerHeight * 0.12 * speed },
            {
              y: () => -window.innerHeight * 0.12 * speed,
              ease: "none",
              scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true, invalidateOnRefresh: true },
            },
          );
        });

        el.querySelectorAll<SVGElement>("[data-pixels]").forEach((cluster) => {
          gsap.from(cluster.querySelectorAll("[data-pixel]"), {
            scale: 0,
            transformOrigin: "50% 50%",
            stagger: 0.06,
            duration: 0.4,
            ease: "back.out(2)",
            scrollTrigger: { trigger: cluster, start: "top 90%", once: true },
          });
        });

        el.querySelectorAll<HTMLElement>("[data-spin]").forEach((s) => {
          gsap.to(s, {
            rotate: 360,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.6 },
          });
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <Tag ref={root as never} id={id} aria-label={ariaLabel} className={className}>
      {children}
    </Tag>
  );
}

/** Infinite ticker that speeds up and flips direction with scroll velocity. */
export function Marquee({ items, className = "", inverse = false }: { items: readonly string[]; className?: string; inverse?: boolean }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = root.current?.querySelector<HTMLElement>("[data-track]");
      if (!track) return;
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        const loop = gsap.to(track, { xPercent: -50, duration: 28, ease: "none", repeat: -1 });
        let dir = 1;
        const st = ScrollTrigger.create({
          onUpdate: (self) => {
            const v = self.getVelocity();
            if (v !== 0) dir = v > 0 ? 1 : -1;
            const boost = 1 + Math.min(Math.abs(v) / 400, 4);
            gsap.to(loop, { timeScale: dir * boost, duration: 0.2, overwrite: true });
            gsap.to(loop, { timeScale: dir, duration: 1.2, delay: 0.2, ease: "power2.out" });
          },
        });
        return () => {
          st.kill();
          loop.kill();
        };
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <span key={t} className="flex items-center">
          <span className={`display whitespace-nowrap px-6 text-[clamp(2rem,6vw,4.5rem)] ${inverse ? "!text-ink-inverse" : ""}`}>{t}</span>
          <Sparkle className={`h-5 w-5 shrink-0 md:h-7 md:w-7 ${inverse ? "text-sparkle" : "text-terracotta"}`} />
        </span>
      ))}
    </div>
  );

  return (
    <div ref={root} className={`overflow-clip ${className}`}>
      <div data-track className="flex w-max will-change-transform">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
