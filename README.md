# vynnychenko.dev

Iryna Vynnychenko's personal site: CV, service pages, and a technical blog. Built with Next.js 14
(App Router) and statically exported (`next build` with `output: 'export'`) to GitHub Pages, served
at [vynnychenko.dev](https://vynnychenko.dev).

## Tech stack

- **Framework**: Next.js 14 (App Router, static export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Graphics**: three.js and pixi.js for a couple of interactive/animated components
- **Tests**: Vitest (pure unit tests for `src/lib/` and `src/data/` logic)
- **Deploy**: GitHub Pages (see `.github/workflows/`, `deploy.sh`)

## Project structure

```
src/
  app/            Next.js route groups, one per locale: (en), (uk), (de), (fr), (es), (it), (tr)
                  plus root-level files (robots.ts, sitemap.ts, icons, fonts, global styles).
  components/     React components (About, Experience, BlogIndex, ContactForm, etc.), including
                  the three.js/pixi.js scenes under components/three and components/pixi.
  data/           Content: blog posts (data/blog/*.ts), services, experience, contacts page copy,
                  and site-wide chrome/translations strings.
  lib/            Small, mostly-pure helper modules: i18n path helpers, SEO/metadata builders,
                  blog SEO helpers, the contact form's validation/submit logic, and the GEO feed
                  builders (llms.txt, llms-full.txt, rss.xml).
```

### Internationalization (i18n)

The site supports 7 locales: `en`, `ua`, `de`, `fr`, `es`, `it`, `tr`. It uses a
route-group-per-locale layout under `src/app/` rather than the Next.js built-in i18n routing:

- `en` is unprefixed (`/`, `/blog/`, ...).
- Every other locale is prefixed (`/ua/`, `/de/blog/`, ...).
- `src/lib/i18n.ts` centralizes the prefix/path logic (`getLangFromPath`, `withLangPrefix`,
  `stripLangPrefix`, `getEquivalentPath`, `getHomePath`, `getBlogIndexPath`, `getBlogPostPath`,
  `pickLocalized`, ...) so every page and metadata helper builds locale-aware URLs the same way.
- `src/lib/seo.ts` and `src/lib/blog-seo.ts` build locale-aware `<head>` metadata (canonical URLs,
  hreflang alternates, Open Graph locale, etc.) from those path helpers.
- Copy lives in `src/data/translations.ts` (site-wide UI strings) and `src/data/blog/*.ts`
  (per-post content, one `en`/`ua`/`de`/`fr`/`es`/`it`/`tr` field per string).

## Getting started

```bash
npm install
npm run dev          # start the dev server
npm run build         # production build (static export)
npm run start         # serve the production build locally
npm run test           # run the unit test suite once
npm run test:watch     # run the unit test suite in watch mode
npm run lint            # ESLint (next lint)
```

## Testing

Unit tests (Vitest, Node environment) cover the pure logic in `src/lib/` and `src/data/` that is
easiest to break silently: i18n path helpers, SEO/hreflang alternates, contact form validation,
blog SEO metadata, the GEO feed builders, and blog pagination. Tests live alongside the code they
cover as `*.test.ts` files. CI runs `npm run test` on every push/PR, alongside lint and build.

## Scripts

- `scripts/clean.mjs` - active build-clean script, wired into `npm run clean` /
  `npm run build:clean` / `npm run dev:clean`.
- `scripts/archive/` - one-off content-migration scripts (and the translation JSON data files they
  consumed) used in the past to backfill `de`/`fr`/`es`/`it`/`tr` locale strings into
  `src/data/blog/*.ts`. They have already been applied - every string in the blog data now has
  every locale - so they're dead code, kept only for history. See `scripts/archive/README.md`.

## Deployment

The site is statically exported and deployed to GitHub Pages (custom domain via `public/CNAME`).
See `.github/workflows/` for the CI (lint/test/build) and deploy pipelines, and `deploy.sh` for the
manual deploy path.
