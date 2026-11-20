"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { formatRupiah } from "@/data/rate-card";
import { briefMessage, waLink } from "@/lib/whatsapp";
import { useEstimator } from "./EstimatorProvider";
import { Modal } from "../Modal";

const spring = { type: "spring", stiffness: 260, damping: 24 } as const;

/** Floating summary pill (bottom-right) + drawer that sends the brief to WhatsApp. */
export function EstimatorDock() {
  const { summary, drawerOpen, setDrawerOpen, set, clear, selection } = useEstimator();
  const [note, setNote] = useState("");

  return (
    <>
      <AnimatePresence>
        {summary.count > 0 && !drawerOpen ? (
          <motion.button
            key="pill"
            type="button"
            onClick={() => setDrawerOpen(true)}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={spring}
            className="fixed bottom-4 right-4 z-40 flex min-h-14 items-center gap-3 rounded-full bg-navy-deep py-2 pl-2 pr-5 text-ink-inverse shadow-sticker-lift ring-2 ring-surface md:bottom-6 md:right-6"
            aria-label={`Buka estimasi: ${summary.count} item, ${formatRupiah(summary.total)}`}
          >
            <span className="relative grid h-10 w-10 place-items-center rounded-full bg-terracotta">
              <ShoppingBag size={18} />
              <motion.span
                key={summary.count}
                initial={{ scale: 1.6 }}
                animate={{ scale: 1 }}
                transition={spring}
                className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-surface px-1 text-[0.7rem] font-bold text-ink"
              >
                {summary.count}
              </motion.span>
            </span>
            <span className="text-left leading-tight">
              <span className="block text-[0.7rem] font-semibold uppercase tracking-wider text-sparkle">Estimasi{summary.isFloor ? " mulai" : ""}</span>
              <span className="block font-bold tabular-nums">{formatRupiah(summary.total)}</span>
            </span>
          </motion.button>
        ) : null}
      </AnimatePresence>

      <Modal open={drawerOpen} onClose={() => setDrawerOpen(false)} label="Estimasi pesanan" className="!w-[min(560px,calc(100vw-2rem))]">
        <div className="flex max-h-[86svh] flex-col bg-canvas">
          <div className="flex items-center justify-between bg-navy-deep px-5 py-4 text-ink-inverse md:px-6">
            <p className="display text-3xl !text-ink-inverse">Estimasi kamu</p>
            {summary.count > 0 ? (
              <button type="button" onClick={clear} className="flex min-h-10 items-center gap-1.5 text-sm font-semibold text-sparkle hover:text-ink-inverse">
                <Trash2 size={15} /> Kosongkan
              </button>
            ) : null}
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4 md:px-6">
            {summary.lines.length === 0 ? (
              <p className="py-8 text-center text-navy-muted">Belum ada layanan dipilih. Tekan &ldquo;+ Pilih&rdquo; di daftar harga, ya.</p>
            ) : (
              <ul className="divide-y divide-navy-deep/10">
                {summary.lines.map(({ item, qty, subtotal }) => (
                  <li key={item.id} className="flex items-center gap-3 py-3">
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-ink">{item.name}</p>
                      <p className="text-xs text-navy-muted">
                        {formatRupiah(item.price)} /{item.unit}
                        {item.priceMax || item.startFrom ? " · harga mulai" : ""}
                      </p>
                    </div>
                    <div className="flex items-center rounded-full border-2 border-navy-deep/15 bg-surface">
                      <button type="button" onClick={() => set(item.id, qty - 1)} className="grid h-9 w-9 place-items-center" aria-label={`Kurangi ${item.name}`}>
                        {qty === 1 ? <X size={14} /> : <Minus size={14} />}
                      </button>
                      <span className="w-6 text-center text-sm font-bold tabular-nums">{qty}</span>
                      <button type="button" onClick={() => set(item.id, qty + 1)} className="grid h-9 w-9 place-items-center" aria-label={`Tambah ${item.name}`}>
                        <Plus size={14} />
                      </button>
                    </div>
                    <p className="w-24 text-right text-sm font-bold tabular-nums text-ink">{formatRupiah(subtotal)}</p>
                  </li>
                ))}
              </ul>
            )}

            <label className="mt-4 block">
              <span className="eyebrow mb-2 block text-navy-muted">Brief singkat (opsional)</span>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                placeholder="Contoh: poster promo grand opening kafe, deadline Jumat."
                className="w-full resize-none rounded-lg border-2 border-navy-deep/15 bg-surface p-3 text-sm text-ink placeholder:text-navy-muted/70 focus:border-navy focus:outline-none"
              />
            </label>
          </div>

          <div className="border-t-2 border-navy-deep/10 bg-surface px-5 py-4 md:px-6">
            <div className="mb-3 flex items-baseline justify-between">
              <span className="text-sm font-semibold text-navy-muted">Estimasi{summary.isFloor ? " mulai" : ""}</span>
              <span className="display text-4xl tabular-nums">{formatRupiah(summary.total)}</span>
            </div>
            <a
              href={waLink(briefMessage(selection, note))}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-terracotta px-6 font-bold text-ink-inverse transition-[filter] hover:brightness-110"
            >
              <MessageCircle size={18} /> Kirim brief ke WhatsApp
            </a>
            <p className="mt-2 text-center text-xs text-navy-muted">Ini estimasi awal. Harga final menyesuaikan brief kamu.</p>
          </div>
        </div>
      </Modal>
    </>
  );
}
