"use client";

import { useRef } from "react";
import { gsap, useGSAP, MQ } from "@/lib/gsap";
import { journey } from "@/data/site";
import { RevealSection } from "../motion";
import { SectionHeading } from "../ui";
import { PixelCluster } from "../ornaments";

export function Journey() {
  const list = useRef<HTMLOListElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        gsap.fromTo(
          "[data-progress]",
          { scaleY: 0 },
          { scaleY: 1, ease: "none", scrollTrigger: { trigger: list.current, start: "top 70%", end: "bottom 60%", scrub: true } },
        );
      });
      return () => mm.revert();
    },
    { scope: list },
  );

  return (
    <RevealSection className="relative overflow-clip bg-cream/60 py-24 md:py-32" ariaLabel="Perjalanan">
      <PixelCluster className="absolute bottom-10 right-8" pattern={[[0, 0, 2], [1, 0, 1], [1, 1, 0], [2, 2, 1]]} />
      <div className="mx-auto grid max-w-[1440px] gap-14 px-4 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:px-8">
        <div className="md:sticky md:top-28 md:self-start">
          <SectionHeading index="05" eyebrow="Perjalanan" title={<>Dari kamera<br />ke <span className="text-terracotta">timeline.</span></>} />
          <p className="mt-6 max-w-sm text-ink-body" data-reveal>
            Organisasi dan kerjaan yang paling banyak ngajarin aku soal desain dan video.
          </p>
        </div>

        <ol ref={list} className="relative">
          <span aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-0.5 bg-navy-deep/10" />
          <span aria-hidden="true" data-progress className="absolute bottom-2 left-[7px] top-2 w-0.5 origin-top bg-terracotta" />
          {journey.map((m) => (
            <li key={m.role} data-reveal className="relative pb-12 pl-10 last:pb-0">
              <span aria-hidden="true" className="absolute left-0 top-1.5 h-4 w-4 rotate-45 border-2 border-navy-deep bg-canvas" />
              <p className="eyebrow text-terracotta">{m.period}</p>
              <h3 className="display mt-2 text-3xl md:text-4xl">{m.role}</h3>
              <p className="mt-1 font-semibold text-navy-muted">{m.place}</p>
              <p className="mt-3 max-w-xl leading-relaxed text-ink-body">{m.story}</p>
            </li>
          ))}
        </ol>
      </div>
    </RevealSection>
  );
}
