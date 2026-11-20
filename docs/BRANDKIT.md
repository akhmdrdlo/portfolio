# BRANDKIT — Akhmad Ridlo Rifa'i (Akidooo)

## 1. Visual Direction
**Editorial Graphic Studio meets Tactile Collage.**
Clean off-white canvas anchored by bold deep-navy diagonal blocks, crisp polaroid/sticker portfolio cards with floating white category tags, subtle pixel-art corner clusters, and 4-point sparkle accents.

**Strict Anti-Patterns (NEVER USE):**
- Dark mode neon / cyberpunk purple-pink gradients
- Generic SaaS glassmorphism cards with identical soft shadows
- Floating abstract 3D blobs or generic stock illustrations

## 2. Color Tokens (CSS Custom Properties)
```css
:root {
  /* Surfaces */
  --bg-canvas: #EEF4FB;          /* Ice off-white main canvas */
  --bg-surface: #FFFFFF;         /* Crisp card & tag surface */
  --bg-sky-panel: #C6DBF0;       /* Secondary section panel (Carousel/Steps) */

  /* Brand Navy */
  --navy-primary: #223F6D;       /* Headlines, diagonal hero/section blocks */
  --navy-deep: #162B4D;          /* Dark containers, borders, high-contrast buttons */
  --navy-muted: #4A6896;         /* Secondary captions, metadata */

  /* Accents (Extracted from PDF ornaments & avatar) */
  --blue-pixel: #6A93C7;         /* Pixel cluster mid-tone */
  --blue-sparkle: #9BBBE0;       /* Pixel cluster light-tone & subtle strokes */
  --terracotta: #B84A39;         /* Avatar circle & high-priority CTA badge accent */
  --cream-warm: #F3E7C9;         /* Avatar backdrop & warm highlight */

  /* Text */
  --ink-primary: #162B4D;
  --ink-body: #334155;
  --ink-inverse: #F8FAFC;
}
3. Typography
Display / Headlines: Anton or Barlow Condensed (Weight 800, UPPERCASE, tight tracking -0.01em, line-height 0.95). Used for section titles (RATE CARD, MAU BIKIN APA HARI INI?, SIAP BANTU!), large numbers (01, 02, 03), and prices (RP 35RB).

Body & UI: Plus Jakarta Sans (Weights 400, 500, 600, 700). Clean readability for descriptions, pricing breakdowns, and buttons.

Scale: Fluid typography via clamp(). Display Hero clamp(3.2rem, 8vw, 7.5rem), Section H2 clamp(2.2rem, 5vw, 4.2rem), Body 1rem (16px min).

4. Signature Visual Devices
Diagonal Navy Cut Blocks: Asymmetric angled backgrounds using clip-path: polygon(0 4%, 100% 0, 100% 96%, 0 100%) (adjust angle subtly per section).

Collage Sticker Cards: Portfolio previews framed in crisp 4px solid #FFFFFF border, tight offset shadow (0 12px 24px -8px rgba(22, 43, 77, 0.25)), slight organic tilt (-2deg to +2deg) that straightens on hover, topped with a floating rectangular white/ice label tag (POSTER IG, KARTU NAMA, COMPRO SIMPEL).

Stitched Dashed Frame: Used for the Akhmad Ridlo Rifa'i illustrated avatar (border: 4px dashed #162B4D with rotate(-2deg)).

Micro-Ornaments:

4-Point Sparkle (✦) placed near diagonal edges and headlines.

Pixel Cluster (3–4 small 8px squares in --navy-primary, --blue-pixel, --blue-sparkle) anchored at section corners.

5. Voice & Copywriting
Persona: Akhmad Ridlo Rifa'i — Desainer Grafis & Video Editor dari Bandung.

Tone: Akrab, to-the-point, percaya diri, solutif ("Materinya sudah siap? Aku bantu rapikan jadi desain yang enak dilihat.", "Yuk, ngobrol dulu!").

Contact & Conversion:

WhatsApp: 0821-2294-1060 (https://wa.me/6282122941060)

Email: akhmadd432@gmail.com

Location: Bandung, Indonesia