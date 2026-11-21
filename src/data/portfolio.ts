/**
 * Portofolio Akhmad Ridlo Rifa'i.
 *
 * Cara menambah karya baru:
 * 1. Taruh file di /public/work (desain), /public/photo (foto), atau pakai ID YouTube untuk video.
 * 2. Tambahkan satu objek ke `works`, `photos`, atau `videos` di bawah — ukuran gambar (w/h) wajib diisi
 *    supaya layout tidak loncat saat gambar dimuat.
 * 3. `featured: true` membuat karya tampil di kolase hero.
 */

export type Media = { src: string; w: number; h: number };

export type WorkCategory = "sosmed" | "identitas" | "compro" | "branding";

export const workCategories: { id: WorkCategory | "semua"; label: string }[] = [
  { id: "semua", label: "Semua" },
  { id: "sosmed", label: "Poster & Sosmed" },
  { id: "identitas", label: "Kartu & ID" },
  { id: "compro", label: "Company Profile" },
  { id: "branding", label: "Logo & Maskot" },
];

export type Work = {
  id: string;
  title: string;
  client: string;
  category: WorkCategory;
  tag: string;
  summary: string;
  image: Media;
  palette?: string[];
  featured?: boolean;
  /** Gambar tanpa background (PNG/WebP transparan): tampil utuh tanpa crop. */
  cutout?: boolean;
  /** Variasi tambahan yang tampil di lightbox (mis. pose maskot lain). */
  gallery?: Media[];
};

export const works: Work[] = [
  {
    id: "nyetor-sewa-motor",
    title: "Nyewa Motor 24 Jam",
    client: "Nyetor",
    category: "sosmed",
    tag: "Poster IG",
    summary: "Poster promo sewa motor 24 jam, harganya ditaruh paling besar.",
    image: { src: "/work/nyetor-sewa-motor.webp", w: 369, h: 650 },
    palette: ["#1D4FA3", "#FFFFFF", "#F2C230"],
    featured: true,
  },
  {
    id: "ruang-disen",
    title: "Clash of Designer",
    client: "Ruang Disen",
    category: "sosmed",
    tag: "Poster Profil",
    summary: "Poster profil peserta lomba desain, nama ditulis vertikal dengan aksen emas.",
    image: { src: "/work/ruang-disen.webp", w: 475, h: 598 },
    palette: ["#14254A", "#E6B422", "#FFFFFF"],
    featured: true,
  },
  {
    id: "kominfo-himatif",
    title: "Kabinet Baskara Bhawana",
    client: "HIMATIF UIN SGD Bandung",
    category: "sosmed",
    tag: "Feed Instagram",
    summary: "Seri feed perkenalan pengurus himpunan, satu poster untuk tiap orang.",
    image: { src: "/work/kominfo-himatif.webp", w: 342, h: 429 },
    palette: ["#B3261E", "#1C1C1C", "#F5F5F5"],
  },
  {
    id: "techspiration-ux",
    title: "Tech-Spiration #2",
    client: "Dicoding Community UIN SGD",
    category: "sosmed",
    tag: "Poster Event",
    summary: "Poster webinar UX Research lengkap dengan pembicara, tanggal, dan QR pendaftaran.",
    image: { src: "/work/techspiration-ux.webp", w: 358, h: 490 },
    palette: ["#2FA84F", "#F4F1E8", "#1B1B1B"],
    featured: true,
  },
  {
    id: "dicoding-ml-ai",
    title: "Learning Path Terpopuler",
    client: "Dicoding Community UIN SGD",
    category: "sosmed",
    tag: "Infografis",
    summary: "Infografis hasil survei learning path paling diminati, dibuat jadi pie chart.",
    image: { src: "/work/dicoding-ml-ai.webp", w: 359, h: 460 },
    palette: ["#3BB273", "#4C8DF6", "#F59E42"],
  },
  {
    id: "nyetor-idul-adha",
    title: "Selamat Idul Adha",
    client: "Nyetor",
    category: "sosmed",
    tag: "Story Ucapan",
    summary: "Story ucapan Idul Adha dengan kaligrafi dan ilustrasi hewan kurban.",
    image: { src: "/work/nyetor-idul-adha.webp", w: 274, h: 471 },
    palette: ["#1E7B3C", "#FFFFFF", "#C9A227"],
  },
  {
    id: "banner-idul-fitri",
    title: "Mini Trivia Idul Fitri",
    client: "Konten musiman",
    category: "sosmed",
    tag: "Banner",
    summary: "Banner header untuk konten trivia Lebaran.",
    image: { src: "/work/banner-idul-fitri.webp", w: 1129, h: 468 },
    palette: ["#1F6B3A", "#F3E7C9", "#FFFFFF"],
  },
  {
    id: "kartu-nama-renita",
    title: "Kartu Nama Marketing",
    client: "Renita Sari",
    category: "identitas",
    tag: "Kartu Nama",
    summary: "Kartu nama dengan blok diagonal hitam dan logo matahari terbit.",
    image: { src: "/work/kartu-nama-renita.webp", w: 310, h: 186 },
    palette: ["#1A1A1A", "#E8EEF5", "#F2A33A"],
    featured: true,
  },
  {
    id: "id-card-sabit",
    title: "Kartu Identitas Tim",
    client: "SABIT Academy",
    category: "identitas",
    tag: "ID Card",
    summary: "ID card dua sisi untuk tim SABIT.",
    image: { src: "/work/id-card-sabit.webp", w: 693, h: 554 },
    palette: ["#E8501F", "#FFFFFF", "#1A1A1A"],
  },
  {
    id: "id-card-umbrella",
    title: "Clearance Pass",
    client: "Eksplorasi personal",
    category: "identitas",
    tag: "ID Card",
    summary: "Latihan desain kartu akses fiksi ala perusahaan di film.",
    image: { src: "/work/id-card-umbrella.webp", w: 358, h: 496 },
    palette: ["#C8102E", "#111111", "#FFFFFF"],
  },
  {
    id: "compro-merah",
    title: "Company Profile Merah",
    client: "Klien korporat",
    category: "compro",
    tag: "Compro",
    summary: "Company profile beberapa halaman dengan warna utama merah.",
    image: { src: "/work/compro-merah.webp", w: 735, h: 1031 },
    palette: ["#C62828", "#FFFFFF", "#9E9E9E"],
    featured: true,
  },
  {
    id: "compro-oranye",
    title: "Profil Infrastruktur",
    client: "Klien industri",
    category: "compro",
    tag: "Compro",
    summary: "Halaman company profile dengan potongan diagonal oranye dan biru.",
    image: { src: "/work/compro-oranye.webp", w: 225, h: 634 },
    palette: ["#F28C1B", "#1E4E9C", "#FFFFFF"],
  },
  {
    id: "maskot-it-fair",
    title: "Maskot IT Fair XIII",
    client: "HIMATIF UIN SGD Bandung",
    category: "branding",
    tag: "Maskot",
    summary: "Maskot kelelawar IT Fair XIII dengan enam ekspresi untuk publikasi acara.",
    image: { src: "/work/maskot/kelelawar-3.webp", w: 226, h: 214 },
    cutout: true,
    gallery: [
      { src: "/work/maskot/kelelawar-1.webp", w: 197, h: 195 },
      { src: "/work/maskot/kelelawar-2.webp", w: 206, h: 193 },
      { src: "/work/maskot/kelelawar-3.webp", w: 226, h: 214 },
      { src: "/work/maskot/kelelawar-4.webp", w: 196, h: 187 },
      { src: "/work/maskot/kelelawar-5.webp", w: 181, h: 204 },
      { src: "/work/maskot/kelelawar-6.webp", w: 181, h: 202 },
    ],
    palette: ["#E0457B", "#3B3F7A", "#FFFFFF"],
    featured: true,
  },
  {
    id: "maskot-rusa",
    title: "Maskot Rusa",
    client: "Maskot acara",
    category: "branding",
    tag: "Maskot",
    summary: "Maskot rusa berjersey biru, dibuat dalam pose melambai dan pose standby.",
    image: { src: "/work/maskot/rusa-melambai.webp", w: 332, h: 418 },
    cutout: true,
    gallery: [
      { src: "/work/maskot/rusa-melambai.webp", w: 332, h: 418 },
      { src: "/work/maskot/rusa-standby.webp", w: 333, h: 418 },
    ],
    palette: ["#E3923E", "#1E8BF0", "#6B3F1F"],
  },
  {
    id: "maskot-kucing",
    title: "Maskot Kucing",
    client: "Maskot acara",
    category: "branding",
    tag: "Maskot",
    summary: "Maskot kucing oranye-putih dengan helm ksatria.",
    image: { src: "/work/maskot/kucing.webp", w: 309, h: 229 },
    cutout: true,
    palette: ["#F2A65A", "#FFFFFF", "#B8B8B8"],
  },
  {
    id: "logo-nyetor",
    title: "Nyetor",
    client: "Nyewa Motor",
    category: "branding",
    tag: "Logo",
    summary: "Logo tulisan dengan siluet motor di huruf terakhir.",
    image: { src: "/work/logo-nyetor.webp", w: 809, h: 286 },
    palette: ["#14328C", "#2E8BEA", "#FFFFFF"],
  },
  {
    id: "logo-bakers-aunty",
    title: "Bakers Kitchen & Aunty Didi's",
    client: "UMKM kuliner",
    category: "branding",
    tag: "Logo UMKM",
    summary: "Dua logo usaha kuliner. Yang kedua pakai lettering tangan.",
    image: { src: "/work/logo-bakers-aunty.webp", w: 578, h: 286 },
    palette: ["#C0392B", "#E9A86B", "#FFFFFF"],
  },
  {
    id: "logo-ombak",
    title: "Ombak & Bukit",
    client: "Brand wisata",
    category: "branding",
    tag: "Logo",
    summary: "Logo emblem berisi ombak, pohon kelapa, dan bukit.",
    image: { src: "/work/logo-ombak.webp", w: 215, h: 218 },
    palette: ["#0E7C86", "#3FBF8A", "#1B4F72"],
  },
  {
    id: "logo-nyapa",
    title: "Nyapa (Nyari Apa Aja)",
    client: "Startup lokal",
    category: "branding",
    tag: "Logo",
    summary: "Logo dari dua bentuk balon chat yang saling mengunci.",
    image: { src: "/work/logo-nyapa.webp", w: 167, h: 154 },
    palette: ["#0F5E4C", "#F2C230", "#2E8B57"],
  },
  {
    id: "logo-phoenix",
    title: "Phoenix",
    client: "Eksplorasi personal",
    category: "branding",
    tag: "Logo",
    summary: "Latihan logo burung phoenix dengan gradasi biru.",
    image: { src: "/work/logo-phoenix.webp", w: 188, h: 202 },
    palette: ["#1F6FB5", "#5BC0EB", "#1A1A1A"],
  },
];

export type VideoCategory = "cinematic" | "motion" | "iklan";

export const videoCategories: { id: VideoCategory; index: string; label: string; title: string; pitch: string }[] = [
  {
    id: "cinematic",
    index: "A",
    label: "Cinematic & After Movie",
    title: "After movie & video profil",
    pitch: "Acara kampus, KKN, sampai film pendek. Di video profil jurusan aku sekaligus jadi DoP.",
  },
  {
    id: "motion",
    index: "B",
    label: "Motion Graphic",
    title: "Motion graphic",
    pitch: "Stinger, bumper, dan teaser untuk IT Fair, SAKTI Podcast, dan LPM Suaka.",
  },
  {
    id: "iklan",
    index: "C",
    label: "Iklan & Video Profil Usaha",
    title: "Iklan & video usaha",
    pitch: "Iklan untuk Hil GYM dan video profil PT Lemonada.",
  },
];

export type Video = {
  id: string;
  title: string;
  client: string;
  category: VideoCategory;
  year: number;
  summary: string;
  /** Tampil besar sebagai unggulan di kategorinya. */
  featured?: boolean;
  source: { kind: "youtube"; videoId: string } | { kind: "drive"; fileId: string };
};

/**
 * Sumber: folder Drive "Portofolio Video" (semua file "siapa pun yang punya link") + YouTube.
 * TODO(Ridlo): cek ulang `client` & `summary` yang ditulis dari judul file.
 */
export const videos: Video[] = [
  // A: Cinematic & After Movie
  {
    id: "after-movie-monitor-2024",
    title: "After Movie MONITOR 2024",
    client: "MONITOR 2024",
    category: "cinematic",
    year: 2025,
    summary: "After movie acara MONITOR 2024.",
    featured: true,
    source: { kind: "drive", fileId: "1zT8ypSnd1jDkFFEwIswl3yo2Jh0QN3UG" },
  },
  {
    id: "video-profil-jurusan",
    title: "Video Profil Teknik Informatika",
    client: "Teknik Informatika UIN SGD Bandung",
    category: "cinematic",
    year: 2024,
    summary: "DoP & editor video profil program studi Teknik Informatika UIN Sunan Gunung Djati.",
    featured: true,
    source: { kind: "youtube", videoId: "FN5jHHXKp8o" },
  },
  {
    id: "after-movie-kkn",
    title: "After Movie KKN",
    client: "KKN UIN SGD Bandung",
    category: "cinematic",
    year: 2025,
    summary: "Rangkuman kegiatan KKN dari hari pertama sampai perpisahan.",
    source: { kind: "drive", fileId: "1w6ohDH6pi2TNiUa3E8dFDbLJHQax3eSX" },
  },
  {
    id: "pbak-2024",
    title: "PBAK 2024 Teknik Informatika",
    client: "Teknik Informatika UIN SGD Bandung",
    category: "cinematic",
    year: 2024,
    summary: "Video event penyambutan mahasiswa baru jurusan.",
    source: { kind: "youtube", videoId: "t6gmjf0Fw3U" },
  },
  {
    id: "tutur-project",
    title: "Tutur Project",
    client: "Proyek film",
    category: "cinematic",
    year: 2025,
    summary: "Proyek video naratif.",
    source: { kind: "drive", fileId: "1gMN26ETK3lMX9Hr0w81VOQAjgJ-6CbhW" },
  },
  {
    id: "ms-force-cifest",
    title: "MS Force, CIFEST",
    client: "West Java Cinematography Festival",
    category: "cinematic",
    year: 2024,
    summary: "Karya video untuk ajang West Java Cinematography Festival (CIFEST).",
    source: { kind: "drive", fileId: "10jBSuBLx0Mgd5J3TgagUtl6tugIhaIUc" },
  },
  {
    id: "sakti-rewind",
    title: "SAKTI Rewind",
    client: "SAKTI Podcast",
    category: "cinematic",
    year: 2024,
    summary: "Kilas balik satu periode produksi SAKTI dalam satu video.",
    source: { kind: "drive", fileId: "1Q8Z_E-OqDPK4TkHRU1J3v1afqOfAyWcn" },
  },
  {
    id: "tour-highlight",
    title: "Tour Highlight",
    client: "Dokumentasi perjalanan",
    category: "cinematic",
    year: 2024,
    summary: "Highlight perjalanan tur.",
    source: { kind: "drive", fileId: "17FqtzwtLJvbs0EBpLj7TujmktuPhQ_yp" },
  },
  {
    id: "bad-days-project",
    title: "Bad Days Project",
    client: "Proyek personal",
    category: "cinematic",
    year: 2024,
    summary: "Video pendek bertema hari-hari yang berat.",
    source: { kind: "drive", fileId: "1TotErP_Ms6cHETNSvmdeCD4-iqiZgcM5" },
  },

  // B: Motion Graphic
  {
    id: "stinger-it-fair",
    title: "Stinger IT FAIR XIII",
    client: "IT FAIR XIII · HIMATIF",
    category: "motion",
    year: 2024,
    summary: "Stinger transisi untuk tayangan IT FAIR XIII, pakai maskot acaranya.",
    featured: true,
    source: { kind: "drive", fileId: "1MAusbF1JplGXfAIcHakFUrQpkxZwMVgf" },
  },
  {
    id: "bumper-podcast",
    title: "Bumper Podcast SAKTI",
    client: "SAKTI Podcast",
    category: "motion",
    year: 2024,
    summary: "Bumper pembuka di setiap episode podcast Informatika UIN Bandung.",
    featured: true,
    source: { kind: "drive", fileId: "1y23JHiNeJsRNZtC9h81t1rH6bQ3EPwVd" },
  },
  {
    id: "pjmtd-animation",
    title: "PJMTD Animation",
    client: "LPM Suaka · PJMTD",
    category: "motion",
    year: 2026,
    summary: "Animasi motion graphic untuk pelatihan jurnalistik PJMTD.",
    source: { kind: "drive", fileId: "1oeZZus-jQzMooZecsQ-kehp6HgM90mBJ" },
  },
  {
    id: "teaser-sakti",
    title: "Teaser SAKTI",
    client: "SAKTI Podcast",
    category: "motion",
    year: 2024,
    summary: "Teaser pendek sebelum episode baru rilis.",
    source: { kind: "drive", fileId: "17rLiPdCQUsostPmR-jWq-Tay527oFkHQ" },
  },
  {
    id: "bumper-if",
    title: "Bumper IF",
    client: "Teknik Informatika UIN SGD",
    category: "motion",
    year: 2024,
    summary: "Bumper logo jurusan untuk pembuka konten video.",
    source: { kind: "drive", fileId: "1V1Vzc5VJVNBf2D9TAgP6CIYyEO5pq0Re" },
  },
  {
    id: "bumper-brosis",
    title: "Bumper Brosis",
    client: "Brosis",
    category: "motion",
    year: 2024,
    summary: "Intro logo animasi pendek.",
    source: { kind: "drive", fileId: "1Q5w9t4yIb8DjobEtAYttx06e6xVfAQVW" },
  },

  // C: Iklan
  {
    id: "hil-gym-ads",
    title: "Hil GYM",
    client: "Hil GYM",
    category: "iklan",
    year: 2024,
    summary: "Video iklan untuk Hil GYM.",
    featured: true,
    source: { kind: "drive", fileId: "1xca07TUldLxNAqm3HAi6NRs_Vg7JQ8ke" },
  },
  {
    id: "lemonada-cifest",
    title: "PT Lemonada",
    client: "PT Lemonada · West Java Cinematography Festival",
    category: "iklan",
    year: 2024,
    summary: "DoP & videografer video profil PT Lemonada untuk ajang West Java Cinematography Festival.",
    featured: true,
    source: { kind: "drive", fileId: "1XPsmjrs5zvYtPwSmo73c036ZGYwlgf-M" },
  },
];

export type Photo = { id: string; title: string; caption: string; image: Media };

export const photos: Photo[] = [
  { id: "sunrise-manglayang", title: "Sunrise on Bandung", caption: "Matahari terbit dari bukit Manglayang", image: { src: "/photo/sunrise-manglayang.webp", w: 1800, h: 1350 } },
  { id: "agustus-bendera", title: "Chasing the Flag", caption: "Lomba bendera, Agustusan 2022", image: { src: "/photo/agustus-bendera.webp", w: 1800, h: 1200 } },
  { id: "nightscape-bandung", title: "Nightscape on Bandung", caption: "Panorama low-light dari Manglayang", image: { src: "/photo/nightscape-bandung.webp", w: 1800, h: 1350 } },
  { id: "siluet-senja", title: "Silhouette Sunset", caption: "Siluet di depan danau buatan", image: { src: "/photo/siluet-senja.webp", w: 1800, h: 1013 } },
  { id: "pucuk-teh", title: "Freshly Picked Tea", caption: "Pucuk teh dari kebun Lembang", image: { src: "/photo/pucuk-teh.webp", w: 1800, h: 1350 } },
  { id: "agustus-kerupuk", title: "A Girl and 'Kerupuk'", caption: "Lomba makan kerupuk, Agustusan 2022", image: { src: "/photo/agustus-kerupuk.webp", w: 1800, h: 1200 } },
  { id: "kabut-manglayang", title: "Dying Mister Mist", caption: "Kabut di tengah hutan Manglayang", image: { src: "/photo/kabut-manglayang.webp", w: 1800, h: 1350 } },
  { id: "pray-on-frame", title: "Pray on Frame", caption: "Latihan teknik framing", image: { src: "/photo/pray-on-frame.webp", w: 1800, h: 1013 } },
  { id: "art-on-selection", title: "Art on Selection", caption: "Seleksi jalur prestasi kaligrafi UIN SGD", image: { src: "/photo/art-on-selection.webp", w: 1800, h: 1200 } },
  { id: "getting-ready", title: "Getting Ready", caption: "Low-light outdoor", image: { src: "/photo/getting-ready.webp", w: 1800, h: 1800 } },
  { id: "tire-d", title: "Tire-d of Bumpy", caption: "Shutter cepat, fokus di polisi tidur", image: { src: "/photo/tire-d.webp", w: 1800, h: 1174 } },
  { id: "lay-low", title: "Lay Low Business", caption: "Low-light indoor", image: { src: "/photo/lay-low.webp", w: 1800, h: 1624 } },
];

export const featuredWorks = works.filter((w) => w.featured);
