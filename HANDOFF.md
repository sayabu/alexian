# Verification and handoff — October 9, 2026

## Passed

- Production Next.js build, including strict TypeScript validation.
- ESLint: zero errors or warnings.
- Vitest: 10 unit/component tests.
- Playwright: 27 browser tests across 1440, 768 and 390 pixel viewports.
- Visual review of all five routes and homepage at all three target sizes.
- Exact ten-section homepage, internal navigation, source targets, noindex metadata, accessible modal dismissal/focus return, responsive navigation, reduced motion and unconfigured contact behavior.

A tablet overflow in the story placeholders was discovered and fixed before the final 27-test pass. Research navigation and baseline review work without lead collection.

## Review locally

Current production preview: http://127.0.0.1:3100

Restart it from this folder with `npm run start -- --port 3100` after `npm run build`. For editing use `npm run dev -- --port 3100` after stopping the production preview. The project has not been publicly deployed.

## Explicitly pending

- Original calculator and validated input fixtures; adjustments remain disabled.
- Approved hospital and editorial image assets; manifest IDs are ready for replacement.
- Approved MCA mission, services, teams, experience, case studies and customer permissions.
- Lead receiver configuration, approved privacy language, and receiver-side rate limiting/retention before public collection.
- Analytics provider; current hooks dispatch local events with no personal data or network transmission.
- Deep-link verification for Reddit/Google accounts and original Cellnex/SignalBoosters evidence. Unverified accounts are paraphrased and labeled.
- Production hosting/domain configuration and deliberate decision about indexing.

The financial baseline is supplied model output, not verified loss. The separate finance adapter does not invent replacement math. No current coverage deficiencies are asserted for the demonstration campus.
