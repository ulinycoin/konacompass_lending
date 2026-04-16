# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

KonaCompass is a pre-launch landing page for **Kona Compass** — a professional-grade rotator/orientation system for live sonar transducers (fishing). The current phase is **waitlist capture** before production begins.

The repo has two concerns:
- `landing/` — the Next.js website (the active codebase)
- `docs/` — strategy, brand, SEO, marketing, and product documentation (Russian/English)

## Landing: Development Commands

All commands run from `landing/`:

```bash
cd landing
npm run dev      # start dev server at localhost:3000
npm run build    # static export (uses --webpack flag)
npm run lint     # ESLint
```

The build outputs to `landing/out/` as a fully static site (`output: "export"`).

## Landing: Architecture

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · next-intl

**Routing — locale-prefixed:** All pages live under `src/app/[locale]/` and are served at `/{locale}/path`. Supported locales: `en`, `ru` (defined in `src/i18n.ts`). Static params are generated in `layout.tsx` via `generateStaticParams`.

**Internationalization:** next-intl is configured in `src/i18n.ts`. All UI strings come from `messages/en.json` and `messages/ru.json`. Use `useTranslations('Namespace')` in client components; `getTranslations` in server components.

**Pages:**
- `/[locale]/` — home / waitlist hero (`src/app/[locale]/page.tsx`)
- `/[locale]/specs` — full technical specs
- `/[locale]/compare` — comparison table vs. competitors
- `/[locale]/instructions` — user manual / quick-start guide

**Static assets:** Served from `public/`. Product images are in `public/konacompas-old/`, branding in `public/branding/` and `public/brand-logos/`. Reference them with the `basePath` prefix:
```tsx
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
<Image src={`${basePath}/konacompas-old/logo.png`} ... />
```

**GitHub Pages deployment:** `next.config.ts` detects `GITHUB_ACTIONS=true` and sets `basePath=/KonaCompass` and `assetPrefix` automatically. Do not hard-code these paths.

**WaitlistForm:** Lives in both `src/components/WaitlistForm.tsx` (shared component) and is also inlined in some pages. The form currently simulates submission with a `setTimeout` — no backend integration yet.

## Key Conventions

- New translatable strings go into **both** `messages/en.json` and `messages/ru.json` before use.
- Pages are client components (`"use client"`) when they use hooks; layout files are server components.
- `basePath` must be prepended to all `src` attributes for images and links that reference `public/` assets.
- The `compare/page.tsx` and `instructions/page.tsx` pages contain their own inlined `WaitlistForm` copies — if updating form logic, update `src/components/WaitlistForm.tsx` and reconcile the inline copies.
