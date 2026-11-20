"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { ArrowUpRight, Check, Globe, Minus, Plus, Play } from "lucide-react";
import { rateCard, categoryRange, priceLabel, websiteService, type RateCategory, type RateItem } from "@/data/rate-card";
import { waLink } from "@/lib/whatsapp";
import { works } from "@/data/portfolio";
import { useEstimator } from "../estimator/EstimatorProvider";
import { IgCarousel } from "../estimator/IgCarousel";
import { RevealSection } from "../motion";
import { SectionHeading, StickerCard } from "../ui";
import { Sparkle } from "../ornaments";

const spring = { type: "spring", stiffness: 260, damping: 24 } as const;
const byId = (id: string) => works.find((w) => w.id === id)!;

function PriceRow({ item }: { item: RateItem }) {
  const { qty, set, toggle } = useEstimator();
  const n = qty(item.id);
  const picked = n > 0;

  return (
    <li className={`group flex flex-wrap items-center gap-x-4 gap-y-3 rounded-xl border-2 p-4 transition-colors duration-300 md:flex-nowrap md:p-5 ${picked ? "border-navy-deep bg-surface" : "border-transparent bg-surface/70 hover:bg-surface"}`}>
      <div className="min-w-0 flex-1 basis-[60%] md:basis-auto">
        <p className="font-bold text-ink">{item.name}</p>
        <p className="text-sm text-navy-muted">{item.note}</p>
      </div>
      <p className="whitespace-nowrap text-right">
        <span className="display text-2xl text-navy md:text-3xl">{priceLabel(item)}</span>
        <span className="ml-1 text-sm font-semibold text-navy-muted">/{item.unit}</span>
      </p>
      <div className="ml-auto flex h-11 w-[132px] shrink-0 justify-end">
        <AnimatePresence mode="popLayout" initial={false}>
          {picked ? (
            <motion.div
              key="stepper"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={spring}
              className="flex items-center rounded-full bg-navy-deep text-ink-inverse"
            >
              <button type="button" onClick={() => set(item.id, n - 1)} className="grid h-11 w-11 place-items-center" aria-label={`Kurangi ${item.name}`}>
                <Minus size={16} />
              </button>
              <span className="w-8 text-center font-bold tabular-nums" aria-live="polite">
                {n}
              </span>
              <button type="button" onClick={() => set(item.id, n + 1)} className="grid h-11 w-11 place-items-center" aria-label={`Tambah ${item.name}`}>
                <Plus size={16} />
              </button>
            </motion.div>
          ) : (
            <motion.button
              key="pick"
              type="button"
              onClick={() => toggle(item.id)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={spring}
              className="flex h-11 items-center gap-1.5 rounded-full border-2 border-navy-deep px-5 text-sm font-bold text-ink transition-colors hover:bg-navy-deep hover:text-ink-inverse"
              aria-label={`Pilih ${item.name}`}
            >
              <Plus size={16} /> Pilih
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </li>
  );
}

function Showcase({ category }: { category: RateCategory }) {
  if (category.id === "carousel") {
    return <IgCarousel slides={[byId("ruang-disen"), byId("dicoding-ml-ai"), byId("techspiration-ux"), byId("nyetor-idul-adha")]} />;
  }
  if (category.id === "video") {
    return (
      <a href="#video" className="group relative block aspect-video overflow-hidden border-4 border-surface shadow-sticker" data-cursor="Play">
        <Image src="https://i.ytimg.com/vi/t6gmjf0Fw3U/hqdefault.jpg" alt="Cuplikan video profil jurusan" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute inset-0 grid place-items-center bg-navy-deep/40">
          <span className="flex items-center gap-2 rounded-full bg-surface px-5 py-3 text-sm font-bold text-ink">
            <Play size={16} className="fill-current" /> Tonton contoh video
          </span>
        </span>
      </a>
    );
  }
  const picks =
    category.id === "simpel"
      ? [byId("nyetor-sewa-motor"), byId("kartu-nama-renita"), byId("techspiration-ux")]
      : [byId("compro-merah"), byId("maskot-it-fair"), byId("logo-nyetor")];
  return (
    <div className="grid grid-cols-3 items-center gap-3 md:gap-6">
      {picks.map((w, i) => (
        <div key={w.id} className={i === 1 ? "md:-translate-y-4" : "md:translate-y-3"}>
          <StickerCard image={w.image} alt={`${w.title} — ${w.client}`} tag={w.tag} tilt={[-3, 2, -1.5][i]} sizes="(min-width: 1024px) 16vw, 30vw" imageClassName="aspect-[4/5]" fit={w.category === "branding" ? "contain" : "cover"} />
          {w.palette ? (
            <div className="mt-3 flex justify-center gap-1.5" aria-label={`Palet ${w.title}`}>
              {w.palette.map((c) => (
                <span key={c} className="h-4 w-4 rounded-full border-2 border-surface shadow" style={{ background: c }} />
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function WebsitePanel() {
  const w = websiteService;
  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
      <div className="flex flex-col gap-6">
        <div>
          <p className="eyebrow text-terracotta">Kategori {w.index} · {w.hook}</p>
          <h3 className="display mt-3 text-[clamp(2.4rem,5vw,4rem)]">{w.name}</h3>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-body">{w.pitch}</p>
        </div>
        <ol className="flex flex-col gap-3">
          {w.steps.map((step, i) => (
            <li key={step} className="flex items-center gap-4 rounded-xl border-2 border-navy-deep/10 bg-surface p-4">
              <span className="display text-3xl text-terracotta">0{i + 1}</span>
              <span className="font-bold text-ink">{step}</span>
            </li>
          ))}
        </ol>
        <a
          href={waLink(w.waText)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-full bg-terracotta px-6 font-bold text-ink-inverse transition-[filter] hover:brightness-110"
        >
          Konsultasi gratis via WhatsApp <ArrowUpRight size={16} />
        </a>
      </div>
      <div>
        <p className="eyebrow mb-4 text-navy-muted">Yang bisa aku bikin</p>
        <ul className="flex flex-col gap-3">
          {w.examples.map((ex) => (
            <li key={ex.name} className="flex items-start gap-4 rounded-xl bg-surface/70 p-4 md:p-5">
              <Globe size={20} className="mt-0.5 shrink-0 text-navy" />
              <span>
                <span className="block font-bold text-ink">{ex.name}</span>
                <span className="block text-sm text-navy-muted">{ex.note}</span>
              </span>
              <span className="ml-auto shrink-0 self-center whitespace-nowrap text-sm font-semibold text-navy-muted">Sesuai brief</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 flex items-start gap-2 text-sm text-navy-muted">
          <Sparkle className="mt-1 h-3 w-3 shrink-0 text-terracotta" />
          Harga website tergantung jumlah halaman, fitur, dan integrasi. Konsultasi dan estimasi awal gratis.
        </p>
      </div>
    </div>
  );
}

export function Services() {
  const [activeId, setActiveId] = useState(rateCard[0]!.id);
  const isWeb = activeId === websiteService.id;
  const active = rateCard.find((c) => c.id === activeId) ?? rateCard[0]!;
  const { qty } = useEstimator();

  return (
    <RevealSection id="layanan" className="relative overflow-clip bg-canvas py-24 md:py-32" ariaLabel="Layanan dan harga">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading index="07" eyebrow="Rate card" title={<>Mau bikin apa<br /><span className="text-terracotta">hari ini?</span></>} />
          <p className="max-w-sm text-ink-body" data-reveal>
            Pilih layanannya, atur jumlahnya, lalu kirim brief langsung ke WhatsApp. Estimasinya kehitung otomatis.
          </p>
        </div>

        {/* Category tabs */}
        <div className="sticky top-16 z-20 -mx-4 mt-12 bg-canvas/95 px-4 py-3 backdrop-blur-sm md:mx-0 md:px-0" data-reveal>
          <LayoutGroup>
            <div className="overflow-x-auto [scrollbar-width:none]">
              <ul className="flex w-max gap-2 md:w-full md:justify-between" role="tablist" aria-label="Kategori layanan">
                {rateCard.map((c) => {
                  const on = !isWeb && c.id === active.id;
                  const picked = c.items.reduce((s, i) => s + qty(i.id), 0);
                  return (
                    <li key={c.id} className="md:flex-1">
                      <button
                        type="button"
                        role="tab"
                        aria-selected={on}
                        aria-controls={`panel-${c.id}`}
                        onClick={() => setActiveId(c.id)}
                        className={`relative flex min-h-14 w-full items-center gap-3 rounded-xl px-4 text-left transition-colors ${on ? "text-ink-inverse" : "text-ink hover:bg-surface"}`}
                      >
                        {on ? <motion.span layoutId="svc-tab" className="absolute inset-0 rounded-xl bg-navy-deep" transition={spring} /> : null}
                        <span className={`display relative text-2xl ${on ? "!text-sparkle" : "!text-terracotta"}`}>{c.index}</span>
                        <span className="relative">
                          <span className="block whitespace-nowrap text-sm font-bold">{c.short}</span>
                          <span className={`block whitespace-nowrap text-xs ${on ? "text-ink-inverse/75" : "text-navy-muted"}`}>{categoryRange(c)}</span>
                        </span>
                        {picked > 0 ? (
                          <span className="relative ml-auto grid h-6 min-w-6 place-items-center rounded-full bg-terracotta px-1.5 text-xs font-bold text-ink-inverse">
                            <Check size={12} className="mr-0.5" />
                            {picked}
                          </span>
                        ) : null}
                      </button>
                    </li>
                  );
                })}
                <li className="md:flex-1">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isWeb}
                    aria-controls={`panel-${websiteService.id}`}
                    onClick={() => setActiveId(websiteService.id)}
                    className={`relative flex min-h-14 w-full items-center gap-3 rounded-xl px-4 text-left transition-colors ${isWeb ? "text-ink-inverse" : "text-ink hover:bg-surface"}`}
                  >
                    {isWeb ? <motion.span layoutId="svc-tab" className="absolute inset-0 rounded-xl bg-navy-deep" transition={spring} /> : null}
                    <span className={`display relative text-2xl ${isWeb ? "!text-sparkle" : "!text-terracotta"}`}>{websiteService.index}</span>
                    <span className="relative">
                      <span className="block whitespace-nowrap text-sm font-bold">{websiteService.short}</span>
                      <span className={`block whitespace-nowrap text-xs ${isWeb ? "text-ink-inverse/75" : "text-navy-muted"}`}>Tanya harga</span>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </LayoutGroup>
        </div>

        <AnimatePresence mode="wait">
          {isWeb ? (
            <motion.div
              key={websiteService.id}
              id={`panel-${websiteService.id}`}
              role="tabpanel"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <WebsitePanel />
            </motion.div>
          ) : (
          <motion.div
            key={active.id}
            id={`panel-${active.id}`}
            role="tabpanel"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16"
          >
            <div className="flex flex-col gap-8">
              <div>
                <p className="eyebrow text-terracotta">Kategori {active.index} · {active.hook}</p>
                <h3 className="display mt-3 text-[clamp(2.4rem,5vw,4rem)]">{active.name}</h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-body">{active.pitch}</p>
              </div>
              <Showcase category={active} />
            </div>

            <div>
              <p className="eyebrow mb-4 text-navy-muted">Daftar harga</p>
              <ul className="flex flex-col gap-3">
                {active.items.map((item) => (
                  <PriceRow key={item.id} item={item} />
                ))}
              </ul>
              <p className="mt-6 flex items-start gap-2 text-sm text-navy-muted">
                <Sparkle className="mt-1 h-3 w-3 shrink-0 text-terracotta" />
                {active.footnote}
              </p>
            </div>
          </motion.div>
          )}
        </AnimatePresence>
      </div>
    </RevealSection>
  );
}
