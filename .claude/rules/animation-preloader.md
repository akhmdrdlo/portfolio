# Animation & Opening Loading Session Rules

## 1. Opening Loading Session (Preloader)
Implement a signature editorial preloader (`src/components/Preloader.tsx`) that runs once per browser session (`sessionStorage.getItem('akidooo_loaded')`), with an optional subtle replay button in the footer.

**Choreography Sequence (Total duration: 1.8s–2.2s, never sluggish):**
1. **Stage 1 — Canvas Lock & Counter (0.0s–1.1s):**
   - Fullscreen `--navy-deep` (`#162B4D`) backdrop with subtle grid/pixel corner clusters.
   - Center displays condensed display counter `00` → `100%` (eased non-linear progression using GSAP or `requestAnimationFrame`), accompanied by rotating 4-point sparkle SVG (`✦`) and kinetic cycling micro-labels: `DESAIN` → `VIDEO` → `MOTION` → `SIAP BANTU!`.
2. **Stage 2 — Stamp Flash (1.1s–1.45s):**
   - Brief scale-pop of the stitched-frame monogram/avatar badge (`scale: 0.85 -> 1.05 -> 1`).
3. **Stage 3 — Diagonal Curtain Wipe Reveal (1.45s–2.1s):**
   - Preloader exits via an **angled diagonal `clip-path` wipe upward** mirroring the PDF's diagonal navy blocks, immediately triggering the Hero headline kinetic mask reveal and staggered collage card drop-in.
4. **Hard Constraints:**
   - Lock vertical scroll while preloader is active; immediately unlock on `onComplete`.
   - Always render real DOM content behind the preloader so SSR/SEO and crawlers are never blocked.
   - If `prefers-reduced-motion: reduce` is enabled, skip the preloader immediately (`duration: 0`).

## 2. Page-Wide Motion System
- **Smooth Scroll:** Initialize Lenis synced with `GSAP ScrollTrigger.update()` and `gsap.ticker`.
- **Hero Entrance:** Split-line masked reveal (`translateY(110%)` → `0%`) for `RATE CARD` display heading + staggered floating entrance for portfolio collage stickers.
- **Scroll Choreography:**
  - **Parallax Collage Depth:** Portfolio cards inside angled navy sections shift subtly at differentiated vertical speeds (`data-speed`) on scroll.
  - **Step Progression (`01 PEMBUKA` → `02 ISI` → `03 PENUTUP`):** Scroll-triggered stagger with crisp spring physics (`stiffness: 260, damping: 24`).
  - **Floating Ornaments:** 4-point sparkles (`✦`) rotate gently on scroll velocity; pixel clusters assemble on viewport enter.
- **Micro-Interactions:**
  - Sticker cards straighten (`rotate(0deg) scale(1.03)`) on hover while their floating white tag lifts slightly (`translateY(-4px)`).
  - Magnetic pull effect (max `8px` radius) on primary CTA buttons (`Yuk, Ngobrol Dulu!`, `Pesan via WA`).
  - Custom lightweight cursor label (`LIHAT`, `GESER`, `PLAY`) on desktop pointer devices (`@media (pointer: fine)` only).

## 3. Performance & Guardrails
- **GPU-Accelerated Properties ONLY:** Animate strictly `transform`, `opacity`, and `clip-path`. NEVER animate `width`, `height`, `top`, `left`, `margin`, or `padding`.
- **GSAP Cleanup:** Always wrap GSAP animations inside `gsap.context()` or `@gsap/react`'s `useGSAP()` to prevent memory leaks in React Strict Mode.
- **Reduced Motion:** Respect `@media (prefers-reduced-motion: reduce)` globally—disable parallax, continuous loops, and smooth scroll hijacking.