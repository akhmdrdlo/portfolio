"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import { videos, videoCategories, type Video } from "@/data/portfolio";
import { RevealSection, Marquee } from "../motion";
import { SectionHeading } from "../ui";
import { Modal } from "../Modal";
import { PixelCluster, Sparkle } from "../ornaments";

function embedUrl(v: Video): string {
  return v.source.kind === "youtube"
    ? `https://www.youtube-nocookie.com/embed/${v.source.videoId}?autoplay=1&rel=0&modestbranding=1`
    : `https://drive.google.com/file/d/${v.source.fileId}/preview`;
}

/** Thumbnail with a branded fallback if the remote image can't load (e.g. private Drive file). */
function Thumb({ video, priority }: { video: Video; priority?: boolean }) {
  const [failed, setFailed] = useState(false);
  const src =
    video.source.kind === "youtube"
      ? `https://i.ytimg.com/vi/${video.source.videoId}/hqdefault.jpg`
      : `https://drive.google.com/thumbnail?id=${video.source.fileId}&sz=w960`;

  if (failed) {
    return (
      <div className="absolute inset-0 grid place-items-center overflow-hidden bg-navy">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "repeating-linear-gradient(135deg, var(--navy-deep) 0 18px, transparent 18px 36px)" }}
        />
        <Sparkle className="relative h-12 w-12 text-sparkle/60" />
        <PixelCluster className="absolute bottom-4 left-4" />
      </div>
    );
  }

  return video.source.kind === "youtube" ? (
    <Image
      src={src}
      alt=""
      fill
      priority={priority}
      sizes="(min-width: 768px) 45vw, 100vw"
      className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
      onError={() => setFailed(true)}
    />
  ) : (
    // Drive thumbnails redirect across Google hosts; render them unoptimized.
    <Image
      src={src}
      alt=""
      fill
      unoptimized
      referrerPolicy="no-referrer"
      sizes="(min-width: 768px) 45vw, 100vw"
      className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
      onError={() => setFailed(true)}
    />
  );
}

function VideoCard({ v, onPlay, big = false }: { v: Video; onPlay: (v: Video) => void; big?: boolean }) {
  return (
    <button type="button" onClick={() => onPlay(v)} data-cursor="Play" className="group block w-full text-left" aria-label={`Putar ${v.title}`}>
      <span className={`relative block aspect-video overflow-hidden border-4 border-surface ${big ? "shadow-sticker-lift" : "shadow-sticker"}`}>
        <Thumb video={v} />
        {big ? <span className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-transparent to-transparent" /> : null}
        <span
          className={`absolute grid place-items-center rounded-full transition-transform duration-300 group-hover:scale-110 ${
            big ? "bottom-4 right-4 h-14 w-14 bg-terracotta text-ink-inverse md:h-16 md:w-16" : "right-3 top-3 h-11 w-11 bg-surface text-ink group-hover:bg-terracotta group-hover:text-ink-inverse"
          }`}
        >
          <Play className={`ml-0.5 fill-current ${big ? "h-6 w-6" : "h-4 w-4"}`} />
        </span>
        {big ? (
          <span className="absolute bottom-0 left-0 right-20 p-4 md:p-6">
            <span className="eyebrow block text-sparkle">Unggulan · {v.year}</span>
            <span className="display mt-1 block text-3xl !text-ink-inverse md:text-5xl">{v.title}</span>
          </span>
        ) : null}
      </span>
      <span className="mt-3 block">
        {big ? null : <span className="block font-bold">{v.title}</span>}
        <span className="block text-sm font-semibold text-ink-inverse/60">
          {v.client}
          {big ? "" : ` · ${v.year}`}
        </span>
        <span className="mt-1 block text-sm leading-relaxed text-ink-inverse/75">{v.summary}</span>
      </span>
    </button>
  );
}

export function Videos() {
  const [active, setActive] = useState<Video | null>(null);

  return (
    <RevealSection id="video" className="relative overflow-clip py-28 text-ink-inverse md:py-40" ariaLabel="Video dan motion">
      <div className="absolute inset-0 bg-navy-deep diagonal-cut" aria-hidden="true" />
      <div className="relative">
        <Marquee items={["After movie", "Cinematic", "Motion graphic", "Bumper", "Iklan", "Video profil"]} inverse className="mb-16 opacity-90" />

        <div className="mx-auto max-w-[1440px] px-4 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading index="03" eyebrow="Video & motion" inverse title={<>Biar ceritamu<br />bergerak.</>} />
            <div className="flex flex-col gap-4 md:items-end" data-reveal>
              <p className="max-w-sm text-ink-inverse/80 md:text-right">Kirim rekaman mentahnya, aku olah jadi video yang betah ditonton. Klik untuk putar.</p>
              <ul className="flex flex-wrap gap-2">
                {videoCategories.map((c) => (
                  <li key={c.id}>
                    <a href={`#video-${c.id}`} className="inline-flex min-h-10 items-center gap-2 rounded-full border-2 border-ink-inverse/25 px-4 text-sm font-bold transition-colors hover:border-ink-inverse hover:bg-ink-inverse hover:text-ink">
                      <span className="display text-base text-terracotta">{c.index}</span> {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {videoCategories.map((c) => {
            const list = videos.filter((v) => v.category === c.id);
            const featured = list.filter((v) => v.featured);
            const others = list.filter((v) => !v.featured);
            return (
              <section key={c.id} id={`video-${c.id}`} aria-label={c.label} className="mt-20 scroll-mt-24 md:mt-28">
                <div className="mb-8 grid gap-4 border-t-2 border-ink-inverse/15 pt-8 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:items-end">
                  <div className="flex items-start gap-4">
                    <span className="display text-6xl text-terracotta md:text-7xl">{c.index}</span>
                    <div>
                      <p className="eyebrow text-sparkle">{c.label}</p>
                      <h3 className="display mt-2 text-[clamp(1.8rem,3.6vw,3rem)] !text-ink-inverse" data-reveal-heading>
                        {c.title}
                      </h3>
                    </div>
                  </div>
                  <p className="max-w-md text-ink-inverse/75 md:justify-self-end" data-reveal>
                    {c.pitch} <span className="font-semibold text-ink-inverse">{list.length} video.</span>
                  </p>
                </div>

                <ul className="grid gap-8 md:grid-cols-2 md:gap-10">
                  {featured.map((v, i) => (
                    <li key={v.id} data-reveal style={{ rotate: `${i % 2 ? 0.8 : -0.8}deg` }}>
                      <VideoCard v={v} onPlay={setActive} big />
                    </li>
                  ))}
                </ul>

                {others.length > 0 ? (
                  <div className="-mx-4 mt-10 overflow-x-auto px-4 [scrollbar-width:none] md:mx-0 md:px-0">
                    <ul className="flex w-max snap-x snap-mandatory gap-5 md:grid md:w-auto md:grid-cols-3 md:gap-8 lg:grid-cols-4">
                      {others.map((v) => (
                        <li key={v.id} className="w-[72vw] max-w-[320px] shrink-0 snap-start md:w-auto md:max-w-none">
                          <VideoCard v={v} onPlay={setActive} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </section>
            );
          })}

          <p className="mt-14 flex items-center gap-2 text-sm text-ink-inverse/70" data-reveal>
            <Sparkle className="h-3 w-3 text-sparkle" /> Semua video dikirim dalam MP4 Full HD 1080p, siap langsung diunggah.
          </p>
        </div>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} label={active?.title ?? "Video"}>
        {active ? (
          <div className="bg-navy-deep">
            <div className="relative aspect-video w-full">
              <iframe
                src={embedUrl(active)}
                title={active.title}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="p-5 text-ink-inverse md:p-6">
              <p className="eyebrow text-sparkle">{videoCategories.find((c) => c.id === active.category)?.label} · {active.client}</p>
              <p className="mt-1 text-lg font-bold">{active.title}</p>
              <p className="mt-1 text-sm text-ink-inverse/75">{active.summary}</p>
            </div>
          </div>
        ) : null}
      </Modal>
    </RevealSection>
  );
}
