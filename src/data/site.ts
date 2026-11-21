/** Identitas, kontak, dan perjalanan Akhmad Ridlo Rifa'i — satu sumber untuk seluruh halaman. */

export const WA_NUMBER = "6282122941060";

export const site = {
  name: "Akhmad Ridlo Rifa'i",
  shortName: "Ridlo",
  studio: "Akidooo",
  role: "Desainer Grafis, Video Editor & IT",
  city: "Bandung",
  url: "https://akidooo.vercel.app",
  email: "akhmadd432@gmail.com",
  whatsapp: {
    number: WA_NUMBER,
    display: "0821-2294-1060",
    href: `https://wa.me/${WA_NUMBER}`,
  },
  cv: "/cv-akhmad-ridlo.pdf",
  tagline: "Otak teknik, tangan visual.",
  intro:
    "Halo! Aku Ridlo dari Bandung. Sehari-hari aku kerja di PT Len Industri sebagai Business Development IT. Di luar jam kantor aku desain, edit video, dan bikin website.",
} as const;

export type Social = { label: string; href: string; handle: string };

export const socials: Social[] = [
  { label: "Instagram", href: "https://www.instagram.com/akhmdrdlo/", handle: "@akhmdrdlo" },
  { label: "YouTube", href: "https://www.youtube.com/@arsip-ren", handle: "@arsip-ren" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akhmdrdlo/", handle: "in/akhmdrdlo" },
  { label: "Shutterstock", href: "https://www.shutterstock.com/g/Akhmad+Ridlo", handle: "Akhmad Ridlo" },
  { label: "Dreamstime", href: "https://www.dreamstime.com/akhmdrdlo25_info", handle: "akhmdrdlo25" },
  { label: "GitHub", href: "https://www.github.com/akhmdrdlo", handle: "akhmdrdlo" },
];

export type Milestone = {
  period: string;
  role: string;
  place: string;
  story: string;
};

/** Hanya pengalaman yang membentuk sisi visual & kreatif (sumber: CV LinkedIn, Nov 2026). */
export const journey: Milestone[] = [
  {
    period: "Sep 2021 – sekarang",
    role: "Freelance Videographer & Graphic Designer",
    place: "Proyek mandiri",
    story: "DoP & editor video profil Teknik Informatika, video profil PT Lemonada, video Program Ketahanan Pangan Kementerian Imigrasi dan Pemasyarakatan RI, sampai iklan komersial.",
  },
  {
    period: "2023 – 2025",
    role: "Reporter & Jurnalis Foto",
    place: "LPM Suaka",
    story: "Liputan foto yang paling aku ingat: aksi buruh di Gedung Sate, aksi bela Palestina, dan kebakaran pabrik tekstil di Cibiru. Aku juga mengedit dokumenter untuk kanal YouTube Suaka.",
  },
  {
    period: "Des 2023 – Jun 2025",
    role: "Cameraman, Editor → PIC Video Production",
    place: "SAKTI Podcast",
    story: "Awalnya pegang kamera dan edit tiap episode. Setahun kemudian aku memimpin divisi produksi video dan mengecek setiap episode sebelum tayang.",
  },
  {
    period: "Nov 2024 – Nov 2025",
    role: "Ketua",
    place: "Ruang Grafis",
    story: "Mengurus anggota komunitas desain dan mengajar kelas dasar UI/UX.",
  },
  {
    period: "Mar 2025 – Jan 2026",
    role: "Lead of KOMINFO Division",
    place: "HIMATIF UIN SGD Bandung",
    story: "Memegang media sosial dan identitas visual himpunan, dari feed rutin sampai maskot IT Fair XIII.",
  },
  {
    period: "Sep 2025 – sekarang",
    role: "Creative Director",
    place: "SABIT Community",
    story: "Mengurus kampanye digital, identitas visual, dan materi belajar SABIT.",
  },
  {
    period: "Nov 2025 – sekarang",
    role: "Business Development IT Support",
    place: "PT Len Industri (Persero)",
    story: "Menganalisis spesifikasi produk dan pesaingnya, lalu menyusunnya jadi presentasi dan proposal tender.",
  },
];

export const facts = [
  { value: "5+", label: "tahun di kamera, timeline edit & desain" },
  { value: "Top 7", label: "West Java Cinematography Festival" },
  { value: "Juara 1", label: "Lomba fotografi tingkat jurusan" },
  { value: "S.T.", label: "Teknik Informatika, UIN SGD Bandung" },
] as const;

export const crafts = ["Desain Grafis", "Video Editing", "Motion 2D", "Fotografi", "Web Development", "Cloud", "Branding"] as const;

export const tools = ["Adobe Premiere Pro", "After Effects", "CapCut", "Figma", "Canva", "Director of Photography", "Fotografi", "Motion Graphic"] as const;
