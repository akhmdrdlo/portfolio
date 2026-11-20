# Akidooo Studio — Portfolio & Interactive Rate Card

Interactive portfolio and service rate card web app for **Akhmad Ridlo Rifa'i** (Desain Grafis & Video Editor, Bandung).

## Source of Truth
@docs/BRANDKIT.md

## Tech Stack
- **Framework:** Next.js (App Router) + TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 + CSS custom properties from Brandkit
- **Motion:** GSAP 3 (`ScrollTrigger`) + Framer Motion (`motion/react`) + Lenis smooth scroll
- **Icons:** Lucide React + custom inline SVG ornaments (4-point sparkle & pixel cluster)

## Commands
- Dev server: `npm run dev`
- Typecheck: `npx tsc --noEmit`
- Lint: `npm run lint`
- Production build: `npm run build`

## Core Architecture & Content Integrity
1. All copy must be in natural, warm, concise Indonesian matching Akhmad Ridlo Rifa'i's persona (never stiff corporate jargon, never lorem ipsum).
2. Pricing and service categories live in a single typed data file: `src/data/rate-card.ts`.
3. Every pricing item must clearly display its unit (`/desain`, `/konten`, `/lembar`, `/slide`, `/video`, `/paket`, `/dokumen`) and connect directly to the interactive WhatsApp Estimator (`6282122941060`).
4. Never leave empty placeholder boxes in production UI; if media is pending, provide an interactive preview component or real asset slot with clean fallback.

## Mandatory Verification Workflow
Before marking any UI or animation task complete:
1. Run `npx tsc --noEmit && npm run build`.
2. Verify visual layout and motion states at `375px` (mobile) and `1440px` (desktop) via Playwright screenshot inspection if available.
3. Confirm zero horizontal overflow (`overflow-x`) caused by diagonal `clip-path` blocks or tilted cards.