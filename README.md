# Kona Compass — Waitlist Landing

Pre-launch landing page for **Kona Compass** — a precision rotator/orientation system for live sonar transducers (Garmin Panoptix, Lowrance ActiveTarget, Humminbird MEGA Live).

Live site: **[konacompass.com](https://konacompass.com)**

---

## Project Structure

```
KonaCompass/
└── landing/              ← Next.js application (the entire active codebase)
    ├── src/
    │   ├── app/
    │   │   ├── [locale]/         ← all pages, locale-prefixed (en, ru)
    │   │   │   ├── page.tsx          home / waitlist hero
    │   │   │   ├── specs/            technical specifications
    │   │   │   ├── compare/          comparison table vs. competitors
    │   │   │   ├── instructions/     user manual / quick-start
    │   │   │   ├── blog/             blog index + articles
    │   │   │   ├── privacy/          privacy policy
    │   │   │   ├── terms/            terms of service
    │   │   │   ├── cookies/          cookie policy
    │   │   │   └── unsubscribe/      one-click unsubscribe
    │   │   ├── api/
    │   │   │   ├── waitlist/         POST — save email, send confirmation
    │   │   │   └── unsubscribe/      POST — verify token, delete from DB
    │   │   ├── layout.tsx            root layout
    │   │   ├── page.tsx              root redirect → /en/
    │   │   ├── sitemap.ts            auto-generated sitemap
    │   │   └── robots.ts             robots.txt
    │   ├── components/
    │   │   ├── WaitlistForm.tsx      email capture form
    │   │   ├── Header.tsx            nav + locale switcher
    │   │   ├── ConsentBanner.tsx     GDPR cookie consent
    │   │   ├── LegalDocument.tsx     reusable legal page layout
    │   │   └── SocialIcons.tsx       social media icons
    │   ├── lib/
    │   │   ├── unsubscribe.ts        HMAC token sign / verify
    │   │   └── consent.ts            cookie consent state
    │   └── i18n.ts                   next-intl config
    ├── messages/
    │   ├── en.json                   all English UI strings
    │   └── ru.json                   all Russian UI strings
    └── public/
        ├── branding/                 logo and brand assets
        ├── brand-logos/              partner / compatibility logos
        ├── konacompas-old/           product photography
        └── product/                  product renders
```

---

## Architecture

### Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styles | Tailwind CSS v4 |
| i18n | next-intl |
| Database | Supabase (PostgreSQL) |
| Email | Resend |
| Deployment | Vercel (production) · GitHub Pages (static mirror) |

### Routing

All pages live under `src/app/[locale]/` and are served at `/{locale}/path`.

| URL | File | Description |
|---|---|---|
| `/en/` · `/ru/` | `[locale]/page.tsx` | Home — hero + waitlist form |
| `/en/specs` | `[locale]/specs/page.tsx` | Full technical specifications |
| `/en/compare` | `[locale]/compare/page.tsx` | Comparison table vs. competitors |
| `/en/instructions` | `[locale]/instructions/page.tsx` | User manual / quick-start guide |
| `/en/blog` | `[locale]/blog/page.tsx` | Blog index |
| `/en/privacy` | `[locale]/privacy/page.tsx` | Privacy policy |
| `/en/terms` | `[locale]/terms/page.tsx` | Terms of service |
| `/en/cookies` | `[locale]/cookies/page.tsx` | Cookie policy |
| `/en/unsubscribe` | `[locale]/unsubscribe/page.tsx` | One-click unsubscribe |

The root `/` redirects to `/en/` via `src/app/page.tsx`.

### API Routes

| Endpoint | File | Description |
|---|---|---|
| `POST /api/waitlist` | `src/app/api/waitlist/route.ts` | Saves email to Supabase, sends confirmation email via Resend |
| `POST /api/unsubscribe` | `src/app/api/unsubscribe/route.ts` | Verifies HMAC token, removes email from Supabase |

### Internationalization

Supported locales: `en`, `ru`. Defined in `src/i18n.ts`.

All UI strings live in:
- `messages/en.json`
- `messages/ru.json`

Usage in components:
```tsx
// Client component
const t = useTranslations('Namespace');

// Server component
const t = await getTranslations('Namespace');
```

When adding new copy, always add the key to **both** locale files before use.

---

## Local Development

### Prerequisites

- Node.js 22+
- npm

### 1. Install dependencies

```bash
cd landing
npm install
```

### 2. Configure environment variables

Create `landing/.env.local`:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-role-key
RESEND_API_KEY=re_your_api_key
UNSUBSCRIBE_SECRET=a-long-random-secret-string
```

### 3. Run

```bash
npm run dev       # dev server at http://localhost:3000
npm run build     # production build → landing/out/
npm run lint      # ESLint
```

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `SUPABASE_URL` | Yes | Supabase project URL |
| `SUPABASE_SERVICE_KEY` | Yes | Service role key — **server-side only, never expose to client** |
| `RESEND_API_KEY` | Yes | Resend API key for sending confirmation emails |
| `UNSUBSCRIBE_SECRET` | Yes | Secret used to sign HMAC-SHA256 tokens in unsubscribe links |

On Vercel these are set under **Project → Settings → Environment Variables**.

---

## Database

### Supabase table: `waitlist`

```sql
create table waitlist (
  id         bigserial primary key,
  email      text unique not null,
  locale     text not null default 'en',
  created_at timestamptz not null default now()
);
```

The `email` column has a unique constraint — duplicate signups return HTTP 200 but are not re-inserted.

---

## Deployment

### Vercel (production)

The site is deployed on Vercel connected to this repository. Every push to `main` triggers an automatic deployment.

| Setting | Value |
|---|---|
| Root directory | `landing` |
| Build command | `npm run build` |
| Output directory | `landing/out` |
| Framework preset | Next.js |

Domain: `konacompass.com`

### GitHub Pages (static mirror)

`.github/workflows/deploy-pages.yml` builds a static export on every push to `main`.

The build sets `GITHUB_ACTIONS=true` which activates `basePath=/KonaCompass` in `next.config.ts`.

> **Limitation:** API routes (`/api/*`) are not available on GitHub Pages. The waitlist form and unsubscribe endpoint only work on the Vercel deployment.

---

## Adding New Content

### New page

1. Create `src/app/[locale]/your-page/page.tsx`
2. Add a `layout.tsx` in the same folder for custom `<title>` / `<meta description>`
3. Add new strings to both `messages/en.json` and `messages/ru.json`
4. Add the route to `src/app/sitemap.ts`

### New blog post

1. Create `src/app/[locale]/blog/your-post-slug/page.tsx`
2. Add a `layout.tsx` with title and description metadata
3. Add the slug to `src/app/sitemap.ts`

### New locale

1. Add the locale code to the `locales` array in `src/i18n.ts`
2. Create `messages/{locale}.json` with all keys from `en.json`
3. Update `generateStaticParams` in `src/app/[locale]/layout.tsx`

---

## Important Notes

- **WaitlistForm copies** — `compare/page.tsx` and `instructions/page.tsx` have inlined copies of `WaitlistForm`. When changing form logic, update `src/components/WaitlistForm.tsx` and reconcile those copies.
- **Static assets** — always prepend `basePath` to `src` attributes for images referencing `public/`:
  ```tsx
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  <Image src={`${basePath}/branding/logo.png`} ... />
  ```
- **Email sender domain** — `noreply@konacompass.com` must be verified in Resend. Update the `from` field in `src/app/api/waitlist/route.ts` if the domain changes.
- **Unsubscribe tokens** — HMAC-SHA256 signed with `UNSUBSCRIBE_SECRET`. Rotating the secret invalidates all existing unsubscribe links in already-sent emails.
- **Tailwind v4** — configuration is in `postcss.config.mjs`, not `tailwind.config.js`. Global styles are in `src/app/globals.css`.
- **No staging environment** — the waitlist API writes to the real Supabase table. Use a separate Supabase project or table for testing.
