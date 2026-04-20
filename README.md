# KonaCompass

Pre-launch project for **Kona Compass** — a professional-grade rotator and orientation system for live sonar transducers (fishing). Current phase: waitlist capture ahead of production.

## Structure

```
KonaCompass/
├── landing/          # Next.js website (active codebase)
│   ├── src/
│   │   ├── app/[locale]/     # locale-prefixed pages (en, ru)
│   │   │   ├── page.tsx      # home / waitlist hero
│   │   │   ├── specs/        # technical specifications
│   │   │   ├── compare/      # competitor comparison table
│   │   │   ├── instructions/ # user manual / quick-start
│   │   │   ├── legal/        # legal pages
│   │   │   ├── privacy/      # privacy policy
│   │   │   ├── terms/        # terms of service
│   │   │   └── cookies/      # cookie policy
│   │   ├── components/       # shared React components
│   │   └── i18n.ts           # next-intl config
│   ├── messages/
│   │   ├── en.json           # English UI strings
│   │   └── ru.json           # Russian UI strings
│   └── public/               # static assets, images, logos
├── docs/
│   ├── project/      # goals, spec, acceptance criteria, roadmap, release checklist
│   ├── brand/        # positioning, tone of voice, brand platform
│   ├── product/      # product description, FAQ, discovery
│   ├── marketing/    # content, channels, GTM strategy
│   ├── seo/          # SEO audit, strategy, page structure
│   ├── sales/        # funnel, leads, CTA handling
│   ├── market-research/ # OSINT, market, competitors, user segments
│   └── invoice/      # billing documents
├── assets/           # source photos, videos, references, logos
└── .agents/          # agent skills and workflows
    └── skills/       # reusable procedures for specialist tasks
```

## Landing Stack

**Next.js 16** · **React 19** · **TypeScript** · **Tailwind CSS v4** · **next-intl**

- Static export → `landing/out/` (deployed to GitHub Pages at `/KonaCompass`)
- Locale-prefixed routing: `/en/`, `/ru/`
- All UI strings are in `messages/en.json` and `messages/ru.json`
- WaitlistForm currently simulates submission — no backend yet

## Dev Commands

```bash
cd landing
npm run dev      # dev server at localhost:3000
npm run build    # static export (--webpack)
npm run lint     # ESLint
```

## Deployment

GitHub Pages via GitHub Actions. `next.config.ts` auto-sets `basePath=/KonaCompass` and `assetPrefix` when `GITHUB_ACTIONS=true`. Do not hard-code these paths.

## Agent System

`.codex/` defines the operating model and agent registry. `.agents/skills/` holds reusable procedures. Route tasks through the relevant agent role before editing code or content when the task spans more than one discipline:

| Role | Scope |
|---|---|
| `orchestrator` | task decomposition |
| `strategy` | positioning, messaging |
| `landing` | UI, implementation |
| `seo-geo` | discoverability |
| `pr-smm` | distribution |
| `growth-campaign` | launch coordination |
| `paid-media` | ads |
| `partnerships` | collaborations |
| `email-lifecycle` | nurture flows |
| `analytics` | measurement |
| `reviewer` | final QC |

Public-facing changes must pass a review agent before being considered done.
