# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/landing site for **Nicanteen**, a physical carrier for nicotine pouches. Single-page product site (hero → video → features → product → about → contact → footer) with a contact form, a newsletter signup, and "Shop Now" buttons that deep-link to an external Shopify store. Production domain: `thenicanteen.com`. Deploys on Vercel (README) or Railway (recent commits pin the Node version for Railway).

## Commands

```bash
npm run dev      # dev server with Turbopack at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # next lint (ESLint 9 flat config, extends next/core-web-vitals + next/typescript)
```

There is no test suite. Node >= 20 is required (`engines` in package.json).

## Git workflow

Never commit directly to `main`. Work on a feature branch (`feature/`, `fix/`, `chore/`, `hotfix/` prefixes) and open a PR — a hook enforces this. See the user's global `~/.claude/CLAUDE.md` for the full branching strategy.

## Stack

Next.js 15 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 (`@tailwindcss/postcss`) · shadcn/ui components. Path alias `@/*` maps to the repo root (see `tsconfig.json`).

## Architecture — read this before editing the page

**`app/page.tsx` is a single monolithic client component (`'use client'`) containing the entire page inline** — header, all sections, contact form, and footer are hand-written JSX in that one file, not composed from smaller components. The contact form's `useState` + submit handler live there too.

**The `components/sections/*` (Hero, Product, Features, Contact, About, newsletter) and `components/layout/*` (Header, Footer) files are an alternate, refactored implementation that `page.tsx` does NOT use.** The only component `page.tsx` actually imports is `MobileMenu` (`components/layout/mobile-menu.tsx`). `UPDATE_GUIDE.md` describes the intended migration toward these components (swap inline gradient buttons for `<BrandButton>`, add `<NewsletterSection>`), but it was never completed. **When changing page content, edit `app/page.tsx` directly — editing the section components will have no visible effect.** If you touch a shared element (e.g. the nav links), it may exist in both places; confirm which one renders before assuming.

### Two independent form backends
- **Contact form** → `POST /api/contact` (`app/api/contact/route.ts`), a server route that calls the **Resend** HTTP API to email `nicanteenllc@gmail.com`. It validates fields, checks email format, and HTML-escapes input to prevent XSS. Requires `RESEND_API_KEY`.
- **Newsletter signup** (only in the unused `components/sections/newsletter.tsx`) → writes directly from the **client** to Supabase's `newsletter_subscribers` table via `lib/supabase/client.ts`. Because it's client-side, it relies on the RLS insert policy in `supabase-schema.sql`.

### Supabase
`lib/supabase/client.ts` (browser) and `lib/supabase/server.ts` (SSR, cookie-based via `@supabase/ssr`) wrap client creation. `supabase-schema.sql` is the full DB schema (`newsletter_subscribers`, `contact_messages`, `product_views`, `customer_reviews`) with RLS policies allowing anonymous inserts. Note: the contact route emails via Resend and does **not** currently persist to the `contact_messages` table, despite the table existing.

## Environment variables

Copy `.env.local.example` → `.env.local`. All are optional except `RESEND_API_KEY` (needed for the contact form to work):
- `RESEND_API_KEY` — Resend email API key. Without it, `/api/contact` returns 500.
- `NEXT_PUBLIC_SHOPIFY_URL` — external store URL for all "Shop Now" / "Buy Now" buttons (opened via `window.open`).
- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` — for the Supabase newsletter/analytics features.

On Resend's free tier email is sent from `onboarding@resend.dev`; sending from `thenicanteen.com` requires verifying the domain in Resend.

## Conventions

- **Brand colors are hard-coded hex** in `page.tsx` inline styles: primary green `#16a34a`, light green `#4ade80`, gradients `linear-gradient(to right, #16a34a, #4ade80)`, on black backgrounds. The shadcn CSS-variable theme (`tailwind.config.ts`, `--primary` etc.) and `BrandButton` exist but are used only by the unused component set. When adding UI to `page.tsx`, match the inline-hex style already there.
- shadcn/ui primitives live in `components/ui/`; compose classes with `cn()` from `lib/utils.ts`. New shadcn components are added per `components.json`.
- Adding the product video: drop `public/video.mp4` and uncomment the `<video>` block in `page.tsx` (~line 133).
