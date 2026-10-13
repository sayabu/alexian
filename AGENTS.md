# MCA Healthcare — project standards

Build an honest, personalized hospital executive briefing that leads to a signal assessment before equipment recommendations.

## Structure

Exactly five content routes: / (ten narrative sections), /human-cost, /science, /methodology, /why-mca. API and metadata routes are infrastructure.

## Design

Signal theme: white ground, Merriweather headlines, Source Sans 3 body, yellow #FFDD44, orange #FA6404, sky #68CBF8, coral #E45863, ink #141414. Maintain accessible contrast, keyboard controls, mobile layout and reduced motion. Approved images only; central asset manifest.

## Integrity

Never invent hospital inputs, quotations, credentials, outcomes or backend success. Baseline is a supplied modeled estimate. Separate evidence from assumptions. Existing calculator is the sole eventual model source; keep scenario calculation disabled until provided. Unknown hospital data stays unknown. No patient information in forms or analytics.

## Engineering

Strict TypeScript; reusable UI; server components by default. Hospital data in src/data/hospital.ts, research in src/data/research.ts. Server secrets stay server-side. No identifying analytics payloads. Contact success requires actual backend acceptance.

## Checks

From site/: npm run typecheck; npm run lint; npm test; npm run test:e2e; npm run build. Visually inspect 390, 768, 1440 widths. Test failure and unconfigured states.
