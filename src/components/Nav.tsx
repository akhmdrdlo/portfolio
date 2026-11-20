"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { Monogram } from "./ornaments";

const links = [
  { href: "#tentang", label: "Tentang" },
  { href: "#karya", label: "Karya" },
  { href: "#video", label: "Video" },
  { href: "#teknik", label: "Teknik" },
  { href: "#layanan", label: "Layanan" },
  { href: "#kontak", label: "Kontak" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = links.map((l) => document.querySelector(l.href)).filter((s): s is Element => !!s);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    if (open) window.__lenis?.stop();
    else window.__lenis?.start();
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled ? "bg-canvas/90 shadow-[0_1px_0_rgba(22,43,77,0.08)] backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 md:px-8" aria-label="Navigasi utama">
        <a href="#top" className="text-2xl" aria-label="Kembali ke atas">
          <Monogram />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={active === l.href ? "true" : undefined}
                className="relative rounded-full px-4 py-2 text-sm font-semibold text-ink transition-colors hover:text-terracotta aria-[current]:text-terracotta"
              >
                {l.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left bg-terracotta transition-transform duration-300 ${
                    active === l.href ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-10 items-center rounded-full bg-navy-deep px-5 text-sm font-bold text-ink-inverse transition-colors hover:bg-terracotta sm:inline-flex"
          >
            Ngobrol, yuk
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full bg-navy-deep text-ink-inverse md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-16 bg-navy-deep px-6 pb-10 pt-8 text-ink-inverse transition-[clip-path] duration-500 ease-out-expo md:hidden ${
          open ? "[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]" : "pointer-events-none [clip-path:polygon(0_0,100%_0,100%_0,0_0)]"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <ul className="flex flex-col gap-2">
          {links.map((l, i) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="display flex items-baseline gap-4 py-2 text-5xl !text-ink-inverse">
                <span className="font-sans text-sm font-bold text-sparkle">0{i + 1}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={site.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex min-h-12 items-center rounded-full bg-terracotta px-6 font-bold"
        >
          Chat WhatsApp · {site.whatsapp.display}
        </a>
      </div>
    </header>
  );
}
