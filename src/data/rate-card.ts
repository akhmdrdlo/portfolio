/**
 * Rate card Akhmad Ridlo Rifa'i — sumber tunggal harga & kategori layanan.
 * Diselaraskan dengan "Rate_Card_Akhmad_Ridlo_Rifai.pptx".
 *
 * Aturan:
 * - `price` selalu harga terendah (dipakai estimator).
 * - `priceMax` diisi bila harga berupa rentang (mis. 75–100rb).
 * - `startFrom` = harga "mulai dari", final menyesuaikan brief.
 */

export type Unit = "desain" | "konten" | "lembar" | "slide" | "video" | "paket" | "dokumen";

export type RateItem = {
  id: string;
  name: string;
  note: string;
  price: number;
  priceMax?: number;
  startFrom?: boolean;
  unit: Unit;
};

export type RateCategory = {
  id: string;
  index: string;
  name: string;
  short: string;
  hook: string;
  pitch: string;
  footnote: string;
  items: RateItem[];
};

export const rateCard: RateCategory[] = [
  {
    id: "simpel",
    index: "01",
    name: "Desain Simpel",
    short: "Simpel",
    hook: "Cepat, rapi, siap pakai",
    pitch: "Materinya sudah siap? Aku bantu rapikan jadi desain yang enak dilihat.",
    footnote: "Semua harga sudah termasuk maksimal 2x revisi minor + file siap pakai.",
    items: [
      { id: "feed-story", name: "Feed / Story Sosmed", note: "1 slide promo atau info, materi dari kamu", price: 35_000, unit: "desain" },
      { id: "kupon", name: "Kupon / Voucher / Stiker", note: "Tata letak simpel, langsung siap cetak", price: 40_000, unit: "desain" },
      { id: "flyer", name: "Flyer / Poster Simpel", note: "Pengumuman atau katalog 1 sisi", price: 50_000, unit: "desain" },
      { id: "banner", name: "Banner / Spanduk / X-Banner", note: "File resolusi tinggi, aman untuk cetak besar", price: 75_000, unit: "desain" },
      { id: "kartu-nama", name: "Kartu Nama", note: "1–2 sisi, bikin kesan pertama lebih profesional", price: 100_000, unit: "desain" },
    ],
  },
  {
    id: "carousel",
    index: "02",
    name: "Carousel & Paket Sosmed",
    short: "Carousel",
    hook: "Satu cerita, banyak slide",
    pitch: "Satu cerita dibagi jadi beberapa slide, biar orang betah geser sampai habis.",
    footnote: "Mau rutin posting? Ambil paket, lebih hemat dibanding pesan satuan.",
    items: [
      { id: "carousel-3-5", name: "Carousel 3–5 Slide", note: "Visual geser yang menyambung", price: 100_000, unit: "konten" },
      { id: "carousel-6-8", name: "Carousel 6–8 Slide", note: "Untuk infografis atau materi padat", price: 150_000, unit: "konten" },
      { id: "tambah-slide", name: "Tambah Slide", note: "Per slide tambahan berikutnya", price: 25_000, unit: "slide" },
      { id: "paket-10-feed", name: "Paket 10 Feed Simpel", note: "Hemat untuk konten rutin", price: 300_000, unit: "paket" },
      { id: "paket-12-konten", name: "Paket 12 Konten Sosmed", note: "9 feed simpel + 3 carousel", price: 500_000, unit: "paket" },
    ],
  },
  {
    id: "kompleks",
    index: "03",
    name: "Compro, Poster & Branding",
    short: "Kompleks",
    hook: "Dibangun dari nol",
    pitch: "Butuh dokumen yang kelihatan serius, atau identitas yang gampang diingat? Ini bagianku.",
    footnote: "Company profile dihitung per lembar. Paket logo & maskot sudah termasuk beberapa opsi konsep.",
    items: [
      { id: "compro-simpel", name: "Company Profile Simpel", note: "Per lembar, layout bersih & rapi", price: 35_000, unit: "lembar" },
      { id: "compro-kompleks", name: "Company Profile Kompleks", note: "Per lembar, desain lebih detail", price: 70_000, unit: "lembar" },
      { id: "terjemahan", name: "Terjemahan ID → EN", note: "Per dokumen, sekalian rapikan layout", price: 200_000, unit: "dokumen" },
      { id: "poster-kustom", name: "Poster Kustom / Event", note: "Olah foto & konsep baru dari nol", price: 100_000, unit: "desain" },
      { id: "brosur", name: "Brosur Lipat 2 / Lipat 3", note: "Bolak-balik 2 sisi, siap cetak", price: 150_000, unit: "desain" },
      { id: "logo-umkm", name: "Logo UMKM", note: "2 opsi konsep + file master PNG/PDF", price: 150_000, startFrom: true, unit: "paket" },
      { id: "logo-guideline", name: "Logo + Mini Brand Guideline", note: "3 konsep + filosofi logo + panduan warna", price: 300_000, startFrom: true, unit: "paket" },
      { id: "maskot", name: "Maskot Acara", note: "3 konsep + filosofi + panduan warna", price: 450_000, startFrom: true, unit: "paket" },
    ],
  },
  {
    id: "video",
    index: "04",
    name: "Edit Video & Motion",
    short: "Video",
    hook: "Biar kontenmu bergerak",
    pitch: "Kirim rekaman mentahnya, aku olah jadi video yang betah ditonton.",
    footnote: "Hasil video dikirim dalam MP4 Full HD 1080p, siap langsung diunggah.",
    items: [
      { id: "edit-simpel", name: "Edit Video Simpel (≤ 60 dtk)", note: "Potong-gabung klip + musik", price: 50_000, unit: "video" },
      { id: "reels", name: "Reels / TikTok / Shorts", note: "Lengkap dengan subtitle, transisi & SFX", price: 75_000, priceMax: 100_000, unit: "video" },
      { id: "paket-10-reels", name: "Paket 10 Reels / TikTok", note: "Hemat untuk stok konten sebulan", price: 650_000, unit: "paket" },
      { id: "youtube", name: "YouTube / Podcast", note: "Durasi 5–10 menit", price: 150_000, priceMax: 250_000, unit: "video" },
      { id: "video-compro", name: "Video Company Profile", note: "Durasi 1–3 menit + voice over", price: 300_000, priceMax: 500_000, unit: "video" },
      { id: "bumper", name: "Bumper Logo", note: "Intro logo animasi singkat", price: 100_000, unit: "video" },
      { id: "motion-2d", name: "Motion 2D", note: "Animasi motion 2D sesuai naskah", price: 150_000, startFrom: true, unit: "video" },
    ],
  },
];

export const allRateItems: RateItem[] = rateCard.flatMap((c) => c.items);

export function findRateItem(id: string): RateItem | undefined {
  return allRateItems.find((item) => item.id === id);
}

/** Rp 35.000 → "35RB", 1.500.000 → "1,5JT" — gaya display rate card. */
export function shortRupiah(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toLocaleString("id-ID", { maximumFractionDigits: 1 })}JT`;
  return `${Math.round(value / 1000)}RB`;
}

export function formatRupiah(value: number): string {
  return `Rp ${value.toLocaleString("id-ID")}`;
}

/** Label harga lengkap untuk display, mis. "RP 75–100RB", "MULAI RP 150RB". */
export function priceLabel(item: RateItem): string {
  if (item.priceMax) return `Rp ${Math.round(item.price / 1000)}–${shortRupiah(item.priceMax)}`;
  return `${item.startFrom ? "Mulai " : ""}Rp ${shortRupiah(item.price)}`;
}

export function categoryRange(category: RateCategory): string {
  const lows = category.items.map((i) => i.price);
  const highs = category.items.map((i) => i.priceMax ?? i.price);
  return `Rp ${shortRupiah(Math.min(...lows))} – ${shortRupiah(Math.max(...highs))}`;
}

/**
 * Layanan tanpa harga tetap (custom quote). Tampil sebagai kategori ke-5 di rate card,
 * tidak masuk estimator karena harganya tergantung kompleksitas.
 */
export type QuoteService = {
  id: string;
  index: string;
  short: string;
  name: string;
  hook: string;
  pitch: string;
  examples: { name: string; note: string }[];
  steps: string[];
  waText: string;
};

export const websiteService: QuoteService = {
  id: "website",
  index: "05",
  short: "Website",
  name: "Website & Sistem",
  hook: "Harga sesuai kompleksitas",
  pitch: "Dari landing page sampai sistem informasi. Tiap website beda kebutuhan, jadi harganya kita obrolin dulu setelah aku paham brief-nya.",
  examples: [
    { name: "Landing page & company profile", note: "Satu halaman promosi atau profil usaha yang rapi dan cepat" },
    { name: "Website portofolio", note: "Seperti website ini, lengkap dengan animasi dan galeri karya" },
    { name: "Sistem informasi & dashboard", note: "Inventaris, ticketing, monitoring, lengkap dengan login & laporan" },
    { name: "Deploy & cloud", note: "Online di Vercel, Google Cloud, atau AWS, siap dipakai" },
  ],
  steps: ["Ceritakan kebutuhanmu", "Aku susun scope & estimasi", "Desain, bangun, lalu online"],
  waText:
    "Halo Kak Ridlo! Aku mau konsultasi bikin website.\n\nJenis website: \nFitur yang dibutuhkan: \nTarget selesai: \nContoh referensi (kalau ada): ",
};
