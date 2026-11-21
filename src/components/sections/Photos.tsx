"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { gsap, useGSAP, MQ } from "@/lib/gsap";
import { photos, type Photo } from "@/data/portfolio";
import { SectionHeading } from "../ui";
import { RevealSection } from "../motion";
import { Modal } from "../Modal";

const rows = [photos.slice(0, 6), photos.slice(6)];

/** Two photo rows sliding in opposite directions as the section scrolls past. */
export function Photos() {
  const [active, setActive] = useState<Photo | null>(null);
  const strip = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(`${MQ.motion} and ${MQ.desktop}`, () => {
        gsap.utils.toArray<HTMLElement>("[data-row]").forEach((row, i) => {
          const dir = i % 2 === 0 ? -1 : 1;
          gsap.fromTo(
            row,
            { xPercent: dir === -1 ? 0 : -18 },
            {
              xPercent: dir === -1 ? -18 : 0,
              ease: "none",
              scrollTrigger: { trigger: strip.current, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        });
      });
      return () => mm.revert();
    },
    { scope: strip },
  );

  return (
    <RevealSection className="relative overflow-clip bg-canvas py-24 md:py-32" ariaLabel="Fotografi">
      <div className="mx-auto mb-14 flex max-w-[1440px] flex-col gap-6 px-4 md:flex-row md:items-end md:justify-between md:px-8">
        <SectionHeading index="04" eyebrow="Lewat lensa" title={<>Dari balik<br /><span className="text-terracotta">kamera.</span></>} />
        <p className="max-w-sm text-ink-body" data-reveal>
          Landscape Manglayang, lomba Agustusan, dan latihan teknik kamera. Klik foto untuk lihat ukuran penuh.
        </p>
      </div>

      {/* Mobile: snap-scroll rows. Desktop: scroll-driven drift. */}
      <div ref={strip} className="flex flex-col gap-5 md:gap-8">
        {rows.map((row, ri) => (
          <div key={ri} className="overflow-x-auto [scrollbar-width:none] md:overflow-visible">
            <div data-row className="flex w-max snap-x snap-mandatory gap-5 px-4 md:snap-none md:gap-8 md:px-8">
              {row.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActive(p)}
                  data-cursor="Lihat"
                  className="group relative h-[46vw] max-h-[340px] min-h-[200px] shrink-0 snap-center overflow-hidden border-4 border-surface shadow-sticker md:h-[24vw]"
                  style={{ aspectRatio: `${p.image.w} / ${p.image.h}` }}
                  aria-label={`Lihat foto ${p.title}`}
                >
                  <Image
                    src={p.image.src}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 36vw, 70vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-navy-deep/90 to-transparent p-4 text-left text-ink-inverse transition-transform duration-500 ease-out-expo group-hover:translate-y-0 group-focus-visible:translate-y-0">
                    <span className="block font-bold">{p.title}</span>
                    <span className="block text-xs text-ink-inverse/80">{p.caption}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} label={active?.title ?? "Foto"}>
        {active ? (
          <figure className="bg-navy-deep p-3 md:p-4">
            <Image
              src={active.image.src}
              alt={`${active.title}, ${active.caption}`}
              width={active.image.w}
              height={active.image.h}
              sizes="100vw"
              className="mx-auto max-h-[78svh] w-auto object-contain"
            />
            <figcaption className="px-2 pt-4 text-ink-inverse">
              <span className="font-bold">{active.title}</span>
              <span className="text-ink-inverse/75">, {active.caption}</span>
            </figcaption>
          </figure>
        ) : null}
      </Modal>
    </RevealSection>
  );
}
