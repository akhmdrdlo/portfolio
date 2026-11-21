/**
 * Sisi teknik Akhmad Ridlo Rifa'i: prestasi, sertifikasi, publikasi, dan proyek software.
 * Sumber: portofolio lama (legacy/) + CV LinkedIn Nov 2026.
 */

import type { Media } from "./portfolio";

export type Achievement = { value: string; title: string; detail: string };

export const achievements: Achievement[] = [
  { value: "Valedictorian", title: "Bangkit Academy 2024 Batch 2", detail: "Distinction Graduate di jalur Cloud Computing, program Google, Tokopedia, Gojek & Traveloka." },
  { value: "Google ACE", title: "Associate Cloud Engineer", detail: "Tersertifikasi resmi Google Cloud sejak April 2025." },
  { value: "Best Presenter", title: "Capstone Project Bangkit", detail: "Memimpin tim JejakBatik sebagai Project Manager dan presenter terbaik di peer review." },
  { value: "Juara 1", title: "Soft Skills Challenge Bangkit", detail: "Tantangan soft skill dan bikin konten untuk peserta Bangkit." },
  { value: "3", title: "Publikasi ilmiah", detail: "Dua riset machine learning dan satu tentang sistem informasi gudang." },
];

export type Certification = { name: string; issuer: string; date: string };

export const certifications: Certification[] = [
  { name: "Associate Cloud Engineer", issuer: "Google Cloud", date: "Apr 2025" },
  { name: "Menjadi Google Cloud Engineer", issuer: "Dicoding Indonesia", date: "Nov 2024" },
  { name: "Applied ML in Google Cloud", issuer: "Dicoding Indonesia", date: "Des 2024" },
  { name: "Fundamental UX Design", issuer: "Dicoding Indonesia", date: "Apr 2025" },
  { name: "Belajar Dasar AI", issuer: "Dicoding Indonesia", date: "Nov 2024" },
  { name: "NDG Linux Essentials", issuer: "Cisco Networking Academy", date: "Jul 2024" },
  { name: "Google Play Store Listing", issuer: "Google Play Academy", date: "Mar 2024" },
  { name: "TOEFA English · Skor 570", issuer: "UIN Sunan Gunung Djati", date: "Nov 2024" },
];

export type Publication = { title: string; venue: string };

export const publications: Publication[] = [
  { title: "SWIF: Warehouse Automation System using Agile Methods", venue: "Sistem informasi" },
  { title: "Data-Driven Insights of the Ecotheology Implementation at Islamic Schools in Indonesia using Machine Learning", venue: "ASCI Journal" },
  { title: "Performance Comparison of KNN, Decision Tree, and SVM Algorithms for Diabetes Classification", venue: "CoreID Journal" },
];

export type TechProject = {
  id: string;
  title: string;
  kind: string;
  summary: string;
  impact: string;
  stack: string[];
  image?: Media;
  github?: string;
  featured?: boolean;
};

export const techProjects: TechProject[] = [
  {
    id: "pt-len",
    title: "Dashboard Monitoring Program",
    kind: "PT Len Industri (Persero)",
    summary: "Dashboard internal Next.js + Strapi CMS yang menyatukan monitoring program strategis divisi Business Development.",
    impact: "Data yang tadinya tersebar di banyak spreadsheet kini ada di satu dashboard; evaluasi mingguan lebih hemat waktu sekitar 30%.",
    stack: ["Next.js", "Strapi CMS", "PostgreSQL", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "jejakbatik",
    title: "JejakBatik",
    kind: "ML & Google Cloud · Capstone Bangkit",
    summary: "Backend klasifikasi motif batik bertenaga CNN di Cloud Run, dengan IAM least privilege.",
    impact: "Biaya cloud turun sekitar 40%, respons model di bawah 1,5 detik per gambar.",
    stack: ["TensorFlow", "Cloud Run", "App Engine", "Cloud Storage"],
    featured: true,
  },
  {
    id: "swif",
    title: "SWIF Smart Warehouse",
    kind: "Sistem informasi · Laravel 11",
    summary: "Sistem gudang dengan log transaksi otomatis, invoice PDF, dan status stok real-time.",
    impact: "Laporan stok bulanan yang tadinya berjam-jam jadi hitungan menit.",
    stack: ["Laravel 11", "MySQL", "Bootstrap 5", "DomPDF"],
    image: { src: "/tech/swif.webp", w: 1366, h: 768 },
    github: "https://github.com/akhmdrdlo/SWIF-Smart-Warehouse",
    featured: true,
  },
  {
    id: "flask-survey",
    title: "Flask Survey di AWS",
    kind: "Cloud infrastructure",
    summary: "Aplikasi survei Flask di kluster EC2 + Load Balancer dengan read replica RDS.",
    impact: "Tetap stabil melayani 25.000+ responden bersamaan selama periode puncak.",
    stack: ["Flask", "AWS EC2", "AWS RDS", "AWS ELB", "Nginx"],
    featured: true,
  },
  {
    id: "selaras",
    title: "SELARAS",
    kind: "Ticketing kampus · Laravel 11",
    summary: "Platform pengaduan sarana prasarana Fakultas Saintek dengan kompresi foto otomatis.",
    impact: "Penanganan keluhan sekitar 50% lebih cepat, storage per upload hemat sampai 70%.",
    stack: ["Laravel 11", "MySQL", "Tailwind CSS", "Intervention Image"],
    image: { src: "/tech/selaras.webp", w: 1366, h: 743 },
    github: "https://github.com/akhmdrdlo/selaras-saintek",
    featured: true,
  },
  {
    id: "suaka-analytics",
    title: "Web Analytics LPM Suaka",
    kind: "Portal berita · GA4 & AdSense",
    summary: "Memantau traffic, membaca perilaku pembaca, dan menata ulang penempatan iklan portal berita.",
    impact: "CTR iklan naik sekitar 25% dan redaksi punya data topik yang paling dibaca.",
    stack: ["Google Analytics 4", "AdSense", "WordPress", "Search Console"],
    featured: true,
  },
  {
    id: "elibrarie",
    title: "E-Librarie",
    kind: "Perpustakaan digital · PHP",
    summary: "Sistem perpustakaan dengan importir Excel dan validasi data otomatis.",
    impact: "500+ data buku masuk dalam kurang dari 10 detik.",
    stack: ["PHP Native", "MySQL", "PhpSpreadsheet"],
    image: { src: "/tech/elibrarie.webp", w: 1366, h: 768 },
    github: "https://github.com/akhmdrdlo/E-Librarie",
  },
  {
    id: "vwarehouse",
    title: "V-Warehouse",
    kind: "Inventaris · Laravel 8",
    summary: "Gudang virtual dengan hak akses bertingkat Administrator dan Operator.",
    impact: "Akses tidak sah dan manipulasi stok tertutup lewat middleware + BCrypt.",
    stack: ["Laravel 8", "MySQL", "BCrypt"],
    image: { src: "/tech/vwarehouse.webp", w: 1366, h: 768 },
    github: "https://github.com/akhmdrdlo/v-warehouse",
  },
  {
    id: "serayu",
    title: "Serayu Restoran",
    kind: "Aplikasi desktop · Java",
    summary: "Aplikasi kasir dan pemesanan restoran dengan cetak struk otomatis.",
    impact: "Antrean kasir sekitar 40% lebih cepat, laporan omzet harian otomatis.",
    stack: ["Java Swing", "MySQL", "JDBC", "JasperReports"],
    image: { src: "/tech/serayu.webp", w: 788, h: 713 },
    github: "https://github.com/akhmdrdlo/Serayu-Resto-Desktop",
  },
  {
    id: "madoka",
    title: "Madoka Bookshelf",
    kind: "Web app offline · Vanilla JS",
    summary: "Rak buku digital yang jalan 100% di browser tanpa akun dan tanpa server.",
    impact: "Respons instan karena semua data tersimpan di localStorage.",
    stack: ["HTML", "CSS", "JavaScript", "localStorage"],
    image: { src: "/tech/madoka.webp", w: 1366, h: 736 },
    github: "https://github.com/akhmdrdlo/Bookshelf-Apps",
  },
  {
    id: "sabit-blueprint",
    title: "Kurikulum Coding SABIT",
    kind: "Edukasi · Mentoring",
    summary: "Merancang kurikulum dasar pemrograman, logika, dan Git untuk pemula.",
    impact: "15+ pemula berhasil membangun landing page portofolio mereka sendiri.",
    stack: ["Curriculum Design", "Git/GitHub", "Mentoring"],
  },
];

export const techStack = ["Next.js", "React", "Laravel", "Tailwind CSS", "Google Cloud", "AWS", "MySQL", "PostgreSQL", "Python", "Strapi"] as const;
