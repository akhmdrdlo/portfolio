---
name: akidooo-editorial-motion
description: Use when adding or changing any section, card, or animation on the Akidooo portfolio — covers the motion primitives (RevealSection, Marquee, parallax data-speed, preloader reveal event), sticker card styling, and how to add new portfolio items.
---

# Akidooo Editorial Motion

Read `docs/BRANDKIT.md` and `.claude/rules/animation-preloader.md` first. This skill maps those rules to the code that already exists — reuse it instead of writing new animation plumbing.

## Primitives (src/components)
- `motion.tsx › RevealSection` — wrap a section; mark children with:
  - `data-reveal-heading` → clip-path wipe up (use on display h2)
  - `data-reveal` → staggered rise on enter (don't combine with `data-speed` on the same element)
  - `data-speed="0.5"` → scroll parallax (positive drifts slower, negative faster)
  - `data-spin` → ornament rotates with scroll
  - `<PixelCluster>` inside auto-assembles on enter
- `motion.tsx › Marquee` — velocity-reactive ticker.
- `ui.tsx › StickerCard` — 4px white border, offset shadow, tilt that straightens on hover, floating tag.
- `ui.tsx › MagneticLink` — primary CTAs (8px magnetic pull, fine pointers only).
- `ui.tsx › SectionHeading` — index + eyebrow + display title.
- `Modal.tsx` — native `<dialog>`; stops Lenis while open.
- `Cursor.tsx` — add `data-cursor="Lihat" | "Geser" | "Play"` to any clickable media.

## Rules of thumb
- Every GSAP call lives inside `useGSAP` + `gsap.matchMedia()` with `MQ.motion` so reduced-motion users get static content.
- Animate only `transform`, `opacity`, `clip-path`.
- Entrance animations that must wait for the preloader use `REVEAL_EVENT` / `isRevealed()` from `src/lib/gsap.ts`; wrap late callbacks with `contextSafe` and pass element arrays, not selector strings.
- Diagonal blocks: put the clip-path on an absolutely positioned background layer (`diagonal-cut`), keep content in normal flow, and give the section `overflow-clip`.

## Adding content
- Designs/photos/videos: `src/data/portfolio.ts` (always include `w`/`h`). Convert new images to WebP ≤1800px before dropping them in `public/`.
- Prices: `src/data/rate-card.ts` only.
- Identity, journey, socials: `src/data/site.ts`.

## Verify
`npx tsc --noEmit && npm run lint && npm run build`, then check 375px and 1440px and that `document.documentElement.scrollWidth <= innerWidth`.
