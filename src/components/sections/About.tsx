"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP, MQ } from "@/lib/gsap";
import { facts, site, tools } from "@/data/site";
import { RevealSection } from "../motion";
import { PixelCluster, Sparkle } from "../ornaments";

const manifesto =
  "Aku lulusan Teknik Informatika yang jatuh cinta sama visual. Sekarang aku menjembatani teknologi dan bisnis di PT Len Industri, dan di luar jam kantor aku desain, edit video, dan bikin website. Otak teknik bikin aku rapi soal struktur, tangan visual bikin hasilnya enak dilihat.";

/** Words light up one by one as the paragraph scrolls through the viewport. */
function ScrubText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  useGSAP(
    () => {
      const words = ref.current?.querySelectorAll("[data-word]");
      if (!words?.length) return;
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        gsap.fromTo(
          words,
          { opacity: 0.18 },
          { opacity: 1, stagger: 0.1, ease: "none", scrollTrigger: { trigger: ref.current, start: "top 80%", end: "bottom 45%", scrub: true } },
        );
      });
      return () => mm.revert();
    },
    { scope: ref },
  );
  return (
    <p ref={ref} className="text-[clamp(1.5rem,3.2vw,2.6rem)] font-semibold leading-[1.25] tracking-[-0.01em] text-ink">
      {text.split(" ").map((w, i) => (
        <span key={i} data-word className="inline-block pr-[0.28em]">
          {w}
        </span>
      ))}
    </p>
  );
}

export function About() {
  return (
    <RevealSection id="tentang" className="relative overflow-clip bg-canvas py-24 md:py-36" ariaLabel="Tentang aku">
      <PixelCluster className="absolute right-6 top-10 md:right-16" />
      <div className="mx-auto grid max-w-[1440px] gap-14 px-4 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-20 md:px-8">
        {/* Portrait column */}
        <div className="relative mx-auto w-full max-w-sm md:mx-0">
          <p className="eyebrow mb-6 flex items-center gap-3 text-navy-muted" data-reveal>
            <span className="display text-base text-terracotta">01</span>
            <span aria-hidden="true" className="h-px w-8 bg-current" />
            Kenalan dulu
          </p>
          <div className="relative pb-6 pr-10">
            {/* Back polaroid: real photo */}
            <div data-speed="1.1" className="absolute -right-2 top-10 w-[48%] rotate-[6deg] md:-right-6">
              <div className="border-4 border-b-[22px] border-surface bg-surface shadow-sticker">
                <Image src="/me/ridlo-photo.webp" alt={`${site.name} di Bandung`} width={1000} height={1000} sizes="(min-width: 768px) 14vw, 45vw" className="aspect-square w-full object-cover" />
              </div>
            </div>
            {/* Front: full-body cutout in the stitched frame */}
            <div data-speed="0.5" className="relative w-[78%]">
              <div className="stitched relative rotate-[-2deg] overflow-hidden bg-cream">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-sky/70" aria-hidden="true" />
                <div className="relative aspect-[307/520]">
                  <Image
                    src="/me/ridlo-fullbody.webp"
                    alt={`Foto ${site.name}`}
                    fill
                    sizes="(min-width: 768px) 26vw, 70vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <span className="eyebrow absolute -right-6 top-8 rotate-[4deg] bg-surface px-3 py-1.5 text-ink shadow-sticker">Hai, aku Ridlo!</span>
              <span data-spin className="absolute -bottom-5 -left-5 text-terracotta">
                <Sparkle className="h-12 w-12" />
              </span>
            </div>
          </div>
        </div>

        {/* Story column */}
        <div className="flex flex-col justify-center gap-12">
          <h2 className="display text-h2" data-reveal-heading>
            Otak teknik,
            <br />
            <span className="text-terracotta">tangan visual.</span>
          </h2>

          <ScrubText text={manifesto} />

          <dl className="grid grid-cols-2 gap-6 border-t-2 border-navy-deep/15 pt-8 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} data-reveal>
                <dt className="sr-only">{f.label}</dt>
                <dd className="display text-5xl text-navy md:text-6xl">{f.value}</dd>
                <dd className="mt-2 text-sm font-medium text-navy-muted">{f.label}</dd>
              </div>
            ))}
          </dl>

          <div data-reveal>
            <p className="eyebrow mb-3 text-navy-muted">Keahlian & alat</p>
            <ul className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <li key={t} className="rounded-full border-2 border-navy-deep/15 bg-surface px-4 py-1.5 text-sm font-semibold text-ink">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
