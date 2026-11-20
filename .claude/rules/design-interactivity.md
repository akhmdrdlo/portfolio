---
paths:
  - "src/components/**/*"
  - "src/data/**/*"
---

# Interactive Design & Rate Card UX Rules

## 1. Interactive Service Explorer (4+1 Categories)
Transform the static 8-page PDF into an engaging, conversion-ready web experience:
- **Category Filter & Jump Navigation:** Sticky minimal top nav with active section indicator (`01 Simpel`, `02 Carousel`, `03 Kompleks & Branding`, `04 Video & Motion`, `Kontak`).
- **Interactive Rate Card Calculator / Cart Drawer:**
  - Every price row has a `+ Pilih` toggle or quantity stepper (essential for per-sheet items like `Compro Simpel Rp 35rb/lembar` or `Tambah Slide Rp 25rb`).
  - Floating bottom-right summary pill displays selected item count + live estimated total (`Estimasi: Rp XXX.000`).
  - Clicking **"Kirim Brief ke WhatsApp"** builds an encoded `https://wa.me/6282122941060?text=...` message listing the exact selected services, quantities, and estimated subtotal.

## 2. Category-Specific Interactive Showcases
- **Kategori 1 (Simpel):** Overlapping collage cards with click-to-zoom **Lightbox Modal** showing full high-res artwork, project context, and turnaround estimate.
- **Kategori 2 (Carousel):** Interactive **Instagram Carousel Simulator** (drag/swipe horizontal + arrow buttons + slide dot indicator) synced with the `01 PEMBUKA`, `02 ISI`, `03 PENUTUP` cards below it.
- **Kategori 3 (Compro, Logo & Maskot):** Interactive **Before/After or Spread Flip Preview** for Company Profile + tab toggle between `Compro & Brosur` vs `Logo, Branding & Maskot` with color palette swatches from each case study.
- **Kategori 4 (Video & Motion):** 9:16 Vertical Reels player cards and 16:9 Motion cards with **muted hover-preview** and click-to-open modal with audio controls (never leave empty dashed placeholders).

## 3. Accessibility & Responsive Floors
- Maintain minimum WCAG AA contrast (`>= 4.5:1` for body text, `>= 3:1` for large condensed display text).
- Visible keyboard focus rings (`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B84A39]`).
- All collage clusters gracefully stack or become horizontal snap-scroll galleries on `< 768px` mobile viewports with zero horizontal overflow.