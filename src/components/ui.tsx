"use client";

import Image from "next/image";
import { useRef, type ComponentProps, type ReactNode } from "react";
import { gsap, useGSAP, MQ } from "@/lib/gsap";
import type { Media } from "@/data/portfolio";

type Variant = "primary" | "ghost" | "light" | "accent";

const variants: Record<Variant, string> = {
  primary: "bg-navy-deep text-ink-inverse hover:bg-navy",
  accent: "bg-terracotta text-ink-inverse hover:brightness-110",
  light: "bg-surface text-ink hover:bg-cream",
  ghost: "border-2 border-current text-current hover:bg-current/10",
};

/** Link-styled button with a subtle magnetic pull (max 8px) on fine pointers. */
export function MagneticLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ComponentProps<"a"> & { variant?: Variant; children: ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(`${MQ.fine} and ${MQ.motion}`, () => {
        const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
          const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
          xTo(Math.max(-1, Math.min(1, dx)) * 8);
          yTo(Math.max(-1, Math.min(1, dy)) * 8);
        };
        const leave = () => {
          xTo(0);
          yTo(0);
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        return () => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        };
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <a
      ref={ref}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-wide transition-[background-color,filter] duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

/**
 * Collage sticker card: 4px white border, offset shadow, organic tilt that straightens on hover,
 * with a floating label tag that lifts.
 */
export function StickerCard({
  image,
  alt,
  tag,
  tilt = 0,
  sizes,
  priority = false,
  className = "",
  imageClassName = "",
  fit = "cover",
}: {
  image: Media;
  alt: string;
  tag?: string;
  tilt?: number;
  sizes: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  fit?: "cover" | "contain";
}) {
  return (
    <figure
      className={`group/sticker relative transition-transform duration-500 ease-out-expo will-change-transform hover:z-10 hover:[transform:rotate(0deg)_scale(1.03)] ${className}`}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className="relative overflow-hidden border-4 border-surface bg-surface shadow-sticker transition-shadow duration-500 group-hover/sticker:shadow-sticker-lift">
        <Image
          src={image.src}
          alt={alt}
          width={image.w}
          height={image.h}
          sizes={sizes}
          priority={priority}
          quality={85}
          className={`block h-full w-full ${fit === "cover" ? "object-cover" : "object-contain"} ${imageClassName}`}
        />
      </div>
      {tag ? (
        <figcaption className="eyebrow absolute -top-3 left-3 bg-surface px-2.5 py-1 text-[0.65rem] text-ink shadow-[0_4px_10px_-4px_rgba(22,43,77,0.35)] transition-transform duration-300 group-hover/sticker:-translate-y-1">
          {tag}
        </figcaption>
      ) : null}
    </figure>
  );
}

/** Section heading: eyebrow index + display title with masked line reveal hooks. */
export function SectionHeading({
  index,
  eyebrow,
  title,
  className = "",
  inverse = false,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  className?: string;
  inverse?: boolean;
}) {
  return (
    <header className={className}>
      <p className={`eyebrow mb-4 flex items-center gap-3 ${inverse ? "text-sparkle" : "text-navy-muted"}`}>
        <span className={`display text-base ${inverse ? "text-ink-inverse" : "text-terracotta"}`}>{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-current" />
        {eyebrow}
      </p>
      <h2 className={`display text-h2 ${inverse ? "!text-ink-inverse" : ""}`} data-reveal-heading>
        {title}
      </h2>
    </header>
  );
}
