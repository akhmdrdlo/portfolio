"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowUpRight, BadgeCheck, BookOpen, Code2, GitBranch } from "lucide-react";
import { gsap, useGSAP, MQ } from "@/lib/gsap";
import { achievements, certifications, publications, techProjects, techStack, type TechProject } from "@/data/tech";
import { websiteService } from "@/data/rate-card";
import { waLink } from "@/lib/whatsapp";
import { RevealSection, Marquee } from "../motion";
import { MagneticLink, SectionHeading } from "../ui";
import { PixelCluster, Sparkle } from "../ornaments";

/** Card visual: real screenshot, or a branded "code window" so there are never empty boxes. */
function ProjectVisual({ p }: { p: TechProject }) {
  if (p.image) {
    return (
      <Image
        src={p.image.src}
        alt={`Tampilan ${p.title}`}
        width={p.image.w}
        height={p.image.h}
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
        className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
      />
    );
  }
  return (
    <div className="relative flex aspect-[16/10] w-full flex-col bg-navy-deep p-4 font-mono text-[0.72rem] leading-relaxed text-sparkle md:text-xs" aria-hidden="true">
      <div className="mb-3 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-terracotta" />
        <span className="h-2.5 w-2.5 rounded-full bg-cream" />
        <span className="h-2.5 w-2.5 rounded-full bg-pixel" />
      </div>
      <p>
        <span className="text-ink-inverse/50">$</span> deploy <span className="text-ink-inverse">{p.id}</span>
      </p>
      {p.stack.slice(0, 4).map((s) => (
        <p key={s}>
          <span className="text-terracotta">✓</span> {s}
        </p>
      ))}
      <p className="mt-auto text-ink-inverse/60">
        <span className="text-ink-inverse">●</span> online
      </p>
      <PixelCluster className="absolute bottom-3 right-3" />
    </div>
  );
}

function ProjectCard({ p }: { p: TechProject }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border-4 border-surface bg-surface shadow-sticker transition-[box-shadow,translate] duration-500 hover:-translate-y-1 hover:shadow-sticker-lift">
      <div className="overflow-hidden">
        <ProjectVisual p={p} />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="eyebrow text-terracotta">{p.kind}</p>
        <h3 className="display text-3xl">{p.title}</h3>
        <p className="text-sm leading-relaxed text-ink-body">{p.summary}</p>
        <p className="flex gap-2 text-sm font-semibold text-navy">
          <Sparkle className="mt-1 h-3 w-3 shrink-0 text-terracotta" />
          {p.impact}
        </p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {p.stack.map((s) => (
            <li key={s} className="rounded-full bg-canvas px-2.5 py-1 text-[0.7rem] font-semibold text-navy-muted">
              {s}
            </li>
          ))}
        </ul>
        {p.github ? (
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center gap-1.5 self-start text-sm font-bold text-ink transition-colors hover:text-terracotta"
          >
            <GitBranch size={16} /> Lihat kode <ArrowUpRight size={14} />
          </a>
        ) : null}
      </div>
    </article>
  );
}

export function Tech() {
  const [showAll, setShowAll] = useState(false);
  const featured = techProjects.filter((p) => p.featured);
  const list = showAll ? techProjects : featured;
  const certRow = useRef<HTMLDivElement>(null);

  // Certifications drift sideways as the strip scrolls past (desktop only).
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(`${MQ.motion} and ${MQ.desktop}`, () => {
        gsap.fromTo(
          "[data-cert-track]",
          { xPercent: 4 },
          { xPercent: -14, ease: "none", scrollTrigger: { trigger: certRow.current, start: "top bottom", end: "bottom top", scrub: true } },
        );
      });
      return () => mm.revert();
    },
    { scope: certRow },
  );

  return (
    <RevealSection id="teknik" className="relative overflow-clip bg-canvas py-24 md:py-32" ariaLabel="Sisi teknik">
      <div aria-hidden="true" className="absolute inset-x-0 top-[28%] h-[46%] bg-sky/70 diagonal-cut" />
      <PixelCluster className="absolute left-6 top-10 md:left-12" pattern={[[0, 0, 0], [1, 0, 1], [0, 1, 2], [2, 1, 1]]} />

      <div className="relative mx-auto max-w-[1440px] px-4 md:px-8">
        {/* Intro: current job */}
        <div className="grid gap-10 md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] md:items-end">
          <SectionHeading
            index="06"
            eyebrow="Sisi teknik"
            title={
              <>
                Kerja di IT,
                <br />
                <span className="text-terracotta">ngoding juga.</span>
              </>
            }
          />
          <div className="flex flex-col gap-4" data-reveal>
            <p className="text-lg leading-relaxed text-ink-body">
              Di PT Len Industri (Persero) aku Business Development IT Support. Aku menganalisis spesifikasi produk dan pesaingnya untuk presentasi dan proposal tender,
              dan membangun dashboard monitoring internal pakai Next.js dan Strapi. Proyek website lain aku kerjakan pakai Next.js dan Laravel.
            </p>
            <ul className="flex flex-wrap gap-2">
              {techStack.map((t) => (
                <li key={t} className="flex items-center gap-1.5 rounded-full border-2 border-navy-deep/15 bg-surface px-3 py-1 text-sm font-semibold text-ink">
                  <Code2 size={13} className="text-navy-muted" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Achievements */}
        <ul className="-mx-4 mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 pt-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-5">
          {achievements.map((a, i) => (
            <li
              key={a.title}
              data-reveal
              className={`relative flex w-[78vw] max-w-[300px] shrink-0 snap-start flex-col gap-2 border-4 border-surface p-5 shadow-sticker sm:w-auto sm:max-w-none ${i === 0 ? "bg-navy-deep text-ink-inverse" : "bg-surface"}`}
              style={{ rotate: `${[-1.5, 1, -0.5, 1.5, -1][i] ?? 0}deg` }}
            >
              <span className={`display text-4xl ${i === 0 ? "!text-ink-inverse" : "text-navy"}`}>{a.value}</span>
              <span className={`font-bold ${i === 0 ? "text-sparkle" : "text-terracotta"}`}>{a.title}</span>
              <span className={`text-sm leading-relaxed ${i === 0 ? "text-ink-inverse/80" : "text-navy-muted"}`}>{a.detail}</span>
            </li>
          ))}
        </ul>

        {/* Projects */}
        <div className="mt-24 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h3 className="display text-[clamp(2rem,4.5vw,3.4rem)]" data-reveal-heading>
            Proyek <span className="text-terracotta">software</span>
          </h3>
          <p className="max-w-sm text-sm text-navy-muted" data-reveal>
            Dari dashboard internal PT Len sampai aplikasi untuk kampus dan UMKM.
          </p>
        </div>
        <ul className="-mx-4 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 md:gap-8 lg:grid-cols-3">
          {list.map((p) => (
            <li key={p.id} className="w-[82vw] max-w-[340px] shrink-0 snap-start sm:w-auto sm:max-w-none">
              <ProjectCard p={p} />
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((s) => !s)}
            aria-expanded={showAll}
            className="inline-flex min-h-12 items-center rounded-full border-2 border-navy-deep px-6 text-sm font-bold text-ink transition-colors hover:bg-navy-deep hover:text-ink-inverse"
          >
            {showAll ? "Tampilkan yang utama saja" : `Lihat semua proyek (${techProjects.length})`}
          </button>
        </div>

        {/* Publications */}
        <div className="mt-24 grid gap-8 md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]">
          <h3 className="display text-[clamp(2rem,4.5vw,3.4rem)]" data-reveal-heading>
            Publikasi
            <br />
            <span className="text-terracotta">ilmiah</span>
          </h3>
          <ol className="flex flex-col divide-y-2 divide-navy-deep/10 border-y-2 border-navy-deep/10">
            {publications.map((pub, i) => (
              <li key={pub.title} data-reveal className="flex gap-4 py-5">
                <span className="display text-3xl text-terracotta">0{i + 1}</span>
                <span>
                  <span className="block font-bold leading-snug text-ink">{pub.title}</span>
                  <span className="mt-1 flex items-center gap-1.5 text-sm text-navy-muted">
                    <BookOpen size={14} /> {pub.venue}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Certifications strip */}
      <div ref={certRow} className="relative mt-24">
        <div className="mx-auto mb-6 max-w-[1440px] px-4 md:px-8">
          <h3 className="display text-[clamp(2rem,4.5vw,3.4rem)]" data-reveal-heading>
            Sertifikasi
          </h3>
        </div>
        <div className="overflow-x-auto [scrollbar-width:none] md:overflow-visible">
          <ul data-cert-track className="flex w-max snap-x snap-mandatory gap-4 px-4 md:snap-none md:gap-6 md:px-8">
            {certifications.map((c, i) => (
              <li
                key={c.name}
                className="relative flex w-[250px] shrink-0 snap-start flex-col gap-3 border-4 border-surface bg-surface p-5 shadow-sticker md:w-[280px]"
                style={{ rotate: `${i % 2 ? 1.2 : -1.2}deg` }}
              >
                <span className="absolute -top-3 right-4 bg-cream px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-ink shadow-sm">{c.date}</span>
                <BadgeCheck className={i === 0 ? "text-terracotta" : "text-navy"} size={28} />
                <span className="font-bold leading-snug text-ink">{c.name}</span>
                <span className="mt-auto text-sm text-navy-muted">{c.issuer}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Website CTA */}
      <div className="relative mx-auto mt-24 max-w-[1440px] px-4 md:px-8">
        <div className="relative overflow-clip bg-navy-deep px-6 py-10 text-ink-inverse md:px-12 md:py-14" data-reveal>
          <Marquee items={["Landing page", "Company profile", "Sistem informasi", "Dashboard", "Portofolio"]} inverse className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-[0.07]" />
          <div className="relative grid gap-8 md:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] md:items-center">
            <div>
              <p className="eyebrow mb-3 text-sparkle">Butuh website?</p>
              <p className="display text-[clamp(2.2rem,5vw,4rem)] !text-ink-inverse">
                Ceritain dulu, <span className="text-terracotta">harga menyusul.</span>
              </p>
              <p className="mt-4 max-w-xl text-ink-inverse/80">
                Tiap website beda kompleksitasnya, jadi aku nggak pasang harga tetap. Kirim kebutuhanmu, nanti aku bantu susun scope dan estimasinya.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <MagneticLink href={waLink(websiteService.waText)} target="_blank" rel="noopener noreferrer" variant="accent">
                Konsultasi website <ArrowUpRight size={16} />
              </MagneticLink>
              <a href="#layanan" className="text-sm font-semibold text-sparkle underline-offset-4 hover:underline">
                Lihat semua layanan
              </a>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
