import type { Metadata, Viewport } from "next";
import { Anton, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/data/site";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton", display: "swap" });
const jakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const description =
  "Portofolio Akhmad Ridlo Rifa'i dari Bandung: desain grafis, video & motion, website, dan IT Business Development di PT Len Industri. Valedictorian Bangkit, Google Associate Cloud Engineer.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} · ${site.role}`, template: `%s · ${site.name}` },
  description,
  authors: [{ name: site.name }],
  keywords: ["desain grafis Bandung", "video editor Bandung", "jasa desain poster", "company profile", "logo UMKM", "motion graphic", "Akhmad Ridlo"],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: site.url,
    title: `${site.name} · ${site.role}`,
    description,
    images: [{ url: "/me/ridlo-avatar.webp", width: 747, height: 1000, alt: site.name }],
  },
  twitter: { card: "summary_large_image", title: site.name, description },
};

export const viewport: Viewport = {
  themeColor: "#162B4D",
  width: "device-width",
  initialScale: 1,
};

/** Decides before first paint whether the preloader should run (once per session, never for reduced motion). */
const preloaderGate = `try{var d=document.documentElement;if(sessionStorage.getItem('akidooo_loaded')||matchMedia('(prefers-reduced-motion: reduce)').matches){d.dataset.loaded='1'}}catch(e){document.documentElement.dataset.loaded='1'}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${anton.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preloaderGate }} />
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
