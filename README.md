# MCA Healthcare / Start with the Signal

Five-page Next.js App Router executive briefing using strict TypeScript, React, Tailwind, Lucide, and locally bundled Merriweather / Source Sans 3 fonts. The homepage has exactly ten sections. No generated or stock imagery represents the hospital.

## Run locally

Node.js 20.9+ required (Node 22+ recommended).

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. From the repository parent, first `cd site`.

```sh
npm run typecheck
npm run lint
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

Playwright runs 390, 768 and 1440 pixel layouts against the production server. Unit tests cover the model boundary, unknown hospital facts, input validation, missing delivery, failed delivery and confirmed delivery. E2E checks cover five routes, overflow, noindex, citation targets, dialog keyboard behavior, mobile navigation and honest contact states.

## Vercel deployment

Import this repository and set Root Directory to `site` if using the parent repository (or leave it empty if importing this folder). Use the Next.js preset and `npm run build`. Set server environment variables as appropriate. Redeploy after enabling contact delivery because the form configured state is rendered on the server at build time. Configure a production HTTPS origin with `SITE_URL`. The demo stays noindex by default.

## Content and architecture

- `src/data/hospital.ts`: reusable typed hospital identity, provenance, missing facts, exact financial baseline and indexing preference.
- `src/data/research.ts`: numbered citations, source type, methods, limitations and claims.
- `src/data/assets.ts`: image IDs, suggested sizes, aspect ratios and alt-text intent. Replace placeholders via this manifest and UI component when approved assets arrive.
- `src/lib/finance.ts`: typed adapter boundary; no invented replacement calculator. Supplied baseline is immutable and the five-year figure is preserved exactly.
- `src/lib/contact.ts`, `src/app/api/contact/route.ts`: shared validation, honeypot, payload limit, origin check and server-only webhook delivery.
- `src/lib/analytics.ts`: local custom-event hooks only. No external analytics transmission or personal information.
- `src/components`: shared navigation, modal, forms and presentation primitives.
- `src/app/globals.css`: Signal tokens, responsive grid, focus states and reduced-motion behavior.

## Integrations and launch requirements

Copy `.env.example` to `.env.local` to configure local delivery. Set CONTACT_WEBHOOK_URL to an approved HTTPS receiver that returns 2xx only after accepting a lead. CONTACT_WEBHOOK_TOKEN is optional server-side bearer authentication. The endpoint never reports success when unconfigured or on upstream failure. The receiver should implement durable acceptance, rate limiting, retention rules and operational monitoring; never put secrets in NEXT_PUBLIC variables. Add the approved privacy notice before public lead collection.

Provide the original calculator implementation, model version/date, validated employee and labor inputs, exposure assumptions and expected fixtures. Implement FinanceAdapter once and connect it before enabling adjustments. The current dialog only reviews the supplied baseline; its adjustment action is deliberately disabled. The reset retains that baseline.

Provide approved campus and editorial images, MCA profile, confirmed service offerings, named team members, permissioned case studies and customer quotes. Provide original Reddit/Google deep links before treating those accounts as verified sources. They currently appear only as attributed, explicitly unverified paraphrases. Cellnex and SignalBoosters figures remain attributed to supplied briefs pending original-page verification.

No page claims current poor coverage at the demo hospital. The additional 23 hours is an assumption, not a measured annual emotional loss. No chart implies observed historical losses; the comparison uses only supplied annual and five-year values.

## Production notes

The demo defaults to noindex. Update both hospital.indexable and robots policy deliberately when publishing approved personalized content. Do not add fictional structured metadata. Unknown fields are omitted or labeled not assessed. There are no accounts, databases, tracking cookies or stored leads in this preview.
