"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { gsap, useGSAP, MQ, REVEAL_EVENT, isRevealed } from "@/lib/gsap";
import { site } from "@/data/site";
import { works } from "@/data/portfolio";
import { MagneticLink, StickerCard } from "../ui";
import { PixelCluster, Sparkle } from "../ornaments";
import { LoopVideo } from "../LoopVideo";

const pick = (id: string) => works.find((w) => w.id === id)!;

/** Sticker layout around the portrait. `speed` drives parallax depth (higher = closer to camera). */
const stickers = [
  { work: pick("ruang-disen"), tilt: -6, speed: 1.4, pos: "left-[3%] top-[30%] w-[22vw] max-w-[230px] md:left-[8%] md:top-[18%] md:w-[13vw]", mobile: true, cutout: false },
  { work: pick("nyetor-sewa-motor"), tilt: 5, speed: 1.9, pos: "right-[3%] top-[22%] w-[20vw] max-w-[200px] md:right-[9%] md:top-[12%] md:w-[11vw]", mobile: true, cutout: false },
  { work: pick("maskot-rusa"), tilt: 4, speed: 1.2, pos: "right-[5%] bottom-[14%] w-[13vw] max-w-[200px]", mobile: false, cutout: true },
  { work: pick("kartu-nama-renita"), tilt: 4, speed: 2.2, pos: "left-[6%] bottom-[20%] w-[16vw] max-w-[240px] md:w-[15vw]", mobile: false, cutout: false },
];

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const el = root.current;
      if (!el) return;
      const q = (s: string) => Array.from(el.querySelectorAll<HTMLElement>(s));
      const lines = q("[data-hero-line]");
      const portrait = q("[data-hero-portrait]");
      const cards = q("[data-hero-sticker]");
      const fades = q("[data-hero-fade]");
      const mm = gsap.matchMedia();

      mm.add(MQ.motion, () => {
        let off = () => {};
        // Entrance only when the preloader actually ran; returning visitors see the page instantly.
        if (!isRevealed() && contextSafe) {
          gsap.set(lines, { yPercent: 110 });
          gsap.set([...portrait, ...cards, ...fades], { autoAlpha: 0 });
          const run = contextSafe(() => {
            const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
            tl.to(lines, { yPercent: 0, duration: 1.1, stagger: 0.08 })
              .fromTo(portrait, { y: 80, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.2 }, 0.1)
              .fromTo(
                cards,
                { y: -120, autoAlpha: 0, rotate: (i: number) => (i % 2 ? 18 : -18) },
                { y: 0, autoAlpha: 1, rotate: 0, duration: 1, stagger: 0.07, ease: "back.out(1.4)" },
                0.25,
              )
              .fromTo(fades, { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.06 }, 0.45);
          });
          window.addEventListener(REVEAL_EVENT, run, { once: true });
          off = () => window.removeEventListener(REVEAL_EVENT, run);
        }

        // Scroll parallax: each layer drifts at its own speed as the hero leaves.
        const st = { trigger: root.current, start: "top top", end: "bottom top", scrub: true };
        gsap.to("[data-hero-video]", { yPercent: 10, ease: "none", scrollTrigger: st });
        gsap.to("[data-hero-name]", { yPercent: 35, ease: "none", scrollTrigger: st });
        gsap.to("[data-hero-portrait-wrap]", { yPercent: 14, scale: 1.04, ease: "none", scrollTrigger: st });
        gsap.utils.toArray<HTMLElement>("[data-hero-sticker-wrap]").forEach((el) => {
          const speed = Number(el.dataset.speed ?? 1);
          gsap.to(el, { y: () => -window.innerHeight * 0.32 * speed, rotate: speed * 6, ease: "none", scrollTrigger: st });
        });
        gsap.to("[data-hero-sparkle]", { rotate: 270, ease: "none", scrollTrigger: st });

        return off;
      });

      // Pointer depth on desktop: stickers lean toward the cursor.
      mm.add(`${MQ.fine} and ${MQ.motion} and ${MQ.desktop}`, () => {
        const els = gsap.utils.toArray<HTMLElement>("[data-hero-sticker]");
        const setters = els.map((el) => ({
          x: gsap.quickTo(el, "x", { duration: 0.8, ease: "power3.out" }),
          y: gsap.quickTo(el, "y", { duration: 0.8, ease: "power3.out" }),
          depth: Number(el.parentElement?.dataset.speed ?? 1),
        }));
        const move = (e: PointerEvent) => {
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          setters.forEach((s) => {
            s.x(nx * 24 * s.depth);
            s.y(ny * 18 * s.depth);
          });
        };
        window.addEventListener("pointermove", move);
        return () => window.removeEventListener("pointermove", move);
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="top" className="relative isolate flex min-h-[100svh] flex-col overflow-clip bg-canvas pt-16">
      {/* Showreel background: silent loop at the very back, tinted to canvas so the name stays legible */}
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-clip">
        <div data-hero-video className="absolute inset-[-6%_0_-6%_0]">
          <LoopVideo src="/video/showreel-hero.mp4" poster="/video/showreel-hero.webp" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-canvas/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-canvas/50 via-transparent to-canvas/60" />
      </div>

      {/* Meta row */}
      <div className="relative z-30 mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 pt-4 md:px-8">
        <p data-hero-fade className="eyebrow flex items-center gap-2 text-navy-muted">
          <Sparkle className="h-3 w-3 text-terracotta" />
          {site.role}
        </p>
        <p data-hero-fade className="eyebrow hidden text-navy-muted sm:block">
          {site.city}, Indonesia
        </p>
      </div>

      {/* Stage: name (back) → portrait (mid) → stickers (front) */}
      <div className="relative min-h-[54svh] flex-1 md:min-h-[70svh]">
        <h1 data-hero-name className="absolute inset-x-0 top-[2%] z-0 select-none text-center md:top-[4%]">
          <span className="sr-only">{site.name}, {site.role} dari {site.city}</span>
          <span aria-hidden="true" className="display block text-[clamp(4rem,20vw,15rem)] leading-[0.86]">
            <span className="line-mask">
              <span data-hero-line className="block">Akhmad</span>
            </span>
            <span className="line-mask">
              <span data-hero-line className="block text-navy">
                Ridlo<span className="text-terracotta">.</span>
              </span>
            </span>
          </span>
        </h1>

        <span data-hero-sparkle className="absolute left-[12%] top-[6%] z-10 hidden text-navy md:block">
          <Sparkle className="h-10 w-10" />
        </span>
        <span data-hero-sparkle className="absolute right-[14%] top-[44%] z-10 text-terracotta">
          <Sparkle className="h-6 w-6 md:h-8 md:w-8" />
        </span>
        <PixelCluster className="absolute right-[4%] top-[4%] z-10 hidden md:block" />
        <PixelCluster className="absolute bottom-[30%] left-[3%] z-10" pattern={[[1, 0, 2], [0, 1, 1], [1, 1, 0]]} />

        <div data-hero-portrait-wrap className="absolute inset-x-0 bottom-0 top-[18%] z-10 md:top-[10%]">
          <div data-hero-portrait className="relative mx-auto h-full" style={{ aspectRatio: "1012 / 1800" }}>
            <Image
              src="/me/ridlo-cutout.webp"
              alt={`Foto ${site.name}`}
              fill
              priority
              quality={85}
              sizes="(min-width: 768px) 45vh, 60vw"
              className="object-contain object-bottom drop-shadow-[0_24px_40px_rgba(22,43,77,0.25)]"
            />
          </div>
        </div>

        {stickers.map(({ work, tilt, speed, pos, mobile, cutout }) => (
          <div key={work.id} data-hero-sticker-wrap data-speed={speed} className={`absolute z-20 ${pos} ${mobile ? "" : "hidden md:block"}`}>
            <div data-hero-sticker>
              {cutout ? (
                <Image
                  src={work.image.src}
                  alt={`${work.title}, ${work.client}`}
                  width={work.image.w}
                  height={work.image.h}
                  sizes="13vw"
                  className="h-auto w-full drop-shadow-[0_14px_18px_rgba(22,43,77,0.3)]"
                  style={{ rotate: `${tilt}deg` }}
                />
              ) : (
                <StickerCard image={work.image} alt={`${work.title}, ${work.client}`} tag={work.tag} tilt={tilt} sizes="(min-width: 768px) 16vw, 22vw" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Diagonal navy band */}
      <div className="relative z-30 -mt-14 bg-navy-deep text-ink-inverse md:-mt-20" style={{ clipPath: "polygon(0 22%, 100% 0, 100% 100%, 0 100%)" }}>
        <div className="mx-auto grid max-w-[1440px] gap-5 px-4 pb-7 pt-14 md:grid-cols-[1.4fr_1fr] md:items-end md:px-8 md:pb-10 md:pt-24">
          <p data-hero-fade className="max-w-xl text-[0.95rem] leading-relaxed text-ink-inverse/90 sm:text-lg md:text-xl">
            {site.intro}
          </p>
          <div data-hero-fade className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center md:justify-end">
            <MagneticLink href="#karya" variant="light" className="!px-3 sm:!px-6">
              Lihat karyaku <ArrowDown size={16} className="hidden min-[400px]:block" />
            </MagneticLink>
            <MagneticLink href={site.whatsapp.href} target="_blank" rel="noopener noreferrer" variant="accent" className="!px-3 sm:!px-6">
              <span className="whitespace-nowrap">Yuk, ngobrol dulu!</span> <ArrowUpRight size={16} className="hidden min-[400px]:block" />
            </MagneticLink>
          </div>
        </div>
      </div>
    </section>
  );
}
