"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Check, Copy, Download, Mail, MessageCircle, RotateCcw } from "lucide-react";
import { site, socials } from "@/data/site";
import { RevealSection, Marquee } from "../motion";
import { MagneticLink } from "../ui";
import { PixelCluster, Sparkle, Monogram } from "../ornaments";
import { replayPreloader } from "../Preloader";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <>
      <RevealSection id="kontak" className="relative overflow-clip pb-16 pt-32 text-ink-inverse md:pb-24 md:pt-44" ariaLabel="Kontak">
        <div className="absolute inset-0 bg-navy-deep diagonal-cut-reverse" aria-hidden="true" />
        <PixelCluster className="absolute left-6 top-24 md:left-12" pattern={[[0, 0, 1], [1, 0, 2], [1, 1, 1], [2, 1, 2]]} />

        <div className="relative mx-auto grid max-w-[1440px] gap-14 px-4 md:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] md:items-center md:px-8">
          <div>
            <p className="eyebrow mb-6 flex items-center gap-3 text-sparkle" data-reveal>
              <span className="display text-base !text-ink-inverse">08</span>
              <span aria-hidden="true" className="h-px w-8 bg-current" />
              Kontak
            </p>
            <h2 className="display text-[clamp(3.4rem,11vw,10rem)] !text-ink-inverse" data-reveal-heading>
              Yuk,
              <br />
              ngobrol <span className="text-terracotta">dulu!</span>
            </h2>
            <p className="mt-8 max-w-lg text-lg text-ink-inverse/85" data-reveal>
              Mau konsultasi konsep dulu atau langsung pesan paket? Dua-duanya boleh, chat aja.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2" data-reveal>
              <MagneticLink href={site.whatsapp.href} target="_blank" rel="noopener noreferrer" variant="accent" className="!justify-between !rounded-2xl !px-6 !py-5">
                <span className="flex items-center gap-3">
                  <MessageCircle size={22} />
                  <span className="text-left">
                    <span className="block text-xs font-semibold uppercase tracking-wider opacity-80">WhatsApp</span>
                    <span className="block text-lg">{site.whatsapp.display}</span>
                  </span>
                </span>
                <ArrowUpRight size={20} />
              </MagneticLink>
              <button
                type="button"
                onClick={copyEmail}
                className="flex min-h-12 items-center justify-between gap-3 rounded-2xl border-2 border-ink-inverse/25 px-6 py-5 text-left transition-colors hover:border-ink-inverse/60"
                aria-label={`Salin email ${site.email}`}
              >
                <span className="flex min-w-0 items-center gap-3">
                  <Mail size={22} className="shrink-0" />
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-sparkle">{copied ? "Tersalin!" : "Email"}</span>
                    <span className="block truncate text-lg font-bold">{site.email}</span>
                  </span>
                </span>
                {copied ? <Check size={20} className="shrink-0 text-sparkle" /> : <Copy size={20} className="shrink-0" />}
              </button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[300px]" data-speed="-0.5">
            <div className="rotate-[3deg] border-4 border-dashed border-ink-inverse/70 bg-cream p-2">
              <div className="relative aspect-[747/1000]">
                <Image src="/me/ridlo-avatar.webp" alt={`Ilustrasi ${site.name}`} fill sizes="300px" className="object-cover" />
              </div>
            </div>
            <p className="display absolute -bottom-6 -left-6 rotate-[-6deg] bg-terracotta px-4 py-2 text-4xl !text-ink-inverse shadow-sticker-lift">Siap bantu!</p>
            <span data-spin className="absolute -right-4 -top-4 text-sparkle">
              <Sparkle className="h-10 w-10" />
            </span>
          </div>
        </div>

        <ul className="relative mx-auto mt-20 grid max-w-[1440px] grid-cols-2 gap-x-6 gap-y-4 px-4 sm:grid-cols-3 md:grid-cols-6 md:px-8" data-reveal>
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="group flex min-h-11 flex-col justify-center border-t border-ink-inverse/20 pt-3">
                <span className="flex items-center gap-1 font-bold transition-colors group-hover:text-terracotta">
                  {s.label} <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
                <span className="text-sm text-ink-inverse/65">{s.handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </RevealSection>

      <footer className="bg-canvas">
        <Marquee items={["Desain grafis", "Video editor", "Bandung", "Siap bantu"]} className="border-b-2 border-navy-deep/10 py-6" />
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <Monogram className="text-3xl" />
            <p className="mt-2 text-sm text-navy-muted">
              © {new Date().getFullYear()} {site.name}. Desain grafis & video, satu pintu.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href={site.cv} download className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-navy-deep px-5 text-sm font-bold text-ink transition-colors hover:bg-navy-deep hover:text-ink-inverse">
              <Download size={16} /> Unduh CV
            </a>
            <button type="button" onClick={replayPreloader} className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold text-navy-muted transition-colors hover:text-terracotta">
              <RotateCcw size={15} /> Putar ulang intro
            </button>
            <a href="#top" className="inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold text-navy-muted transition-colors hover:text-terracotta">
              Kembali ke atas ↑
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
