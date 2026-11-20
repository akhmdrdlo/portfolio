import { WA_NUMBER } from "@/data/site";
import { findRateItem, formatRupiah, type RateItem } from "@/data/rate-card";

export type Selection = Record<string, number>;

export type Line = { item: RateItem; qty: number; subtotal: number };

export function selectionLines(selection: Selection): Line[] {
  return Object.entries(selection).flatMap(([id, qty]) => {
    const item = findRateItem(id);
    if (!item || qty <= 0) return [];
    return [{ item, qty, subtotal: item.price * qty }];
  });
}

export function estimate(selection: Selection) {
  const lines = selectionLines(selection);
  const total = lines.reduce((sum, l) => sum + l.subtotal, 0);
  const count = lines.reduce((sum, l) => sum + l.qty, 0);
  const isFloor = lines.some((l) => l.item.priceMax || l.item.startFrom);
  return { lines, total, count, isFloor };
}

export function waLink(text: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function briefMessage(selection: Selection, note = ""): string {
  const { lines, total, isFloor } = estimate(selection);
  if (lines.length === 0) {
    return "Halo Kak Ridlo! Aku mau ngobrol soal desain/video. Boleh tanya-tanya dulu?";
  }
  const rows = lines.map(
    (l) => `• ${l.item.name} × ${l.qty} /${l.item.unit} — ${formatRupiah(l.subtotal)}${l.item.priceMax || l.item.startFrom ? " (mulai)" : ""}`,
  );
  return [
    "Halo Kak Ridlo! Aku mau pesan:",
    "",
    ...rows,
    "",
    `Estimasi${isFloor ? " mulai" : ""}: ${formatRupiah(total)}`,
    "",
    `Brief singkat: ${note.trim() || "(nanti aku ceritain di chat)"}`,
  ].join("\n");
}
