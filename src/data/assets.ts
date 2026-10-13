export const assets = Object.fromEntries(
  [
    "hospital-hero",
    "impact-productivity",
    "impact-visitor",
    "impact-critical-call",
    "human-parent",
    "human-clinician",
    "human-family",
    "science-lost-time",
    "science-lost-focus",
    "science-stress",
    "methodology-model",
    "mca-team",
    "mca-project",
  ].map((id) => [
    id,
    {
      id,
      src: id === "hospital-hero" ? "/images/alexian-brothers-hero.png" : null,
      ratio: id === "hospital-hero" ? "16:9" : "1:1",
      pixels: id === "hospital-hero" ? "1920 × 1080" : "1200 × 1200",
      alt:
        id === "hospital-hero"
          ? "User-supplied exterior image of Ascension Alexian Brothers hospital"
          : `Approved editorial image for ${id.replaceAll("-", " ")}`,
    },
  ]),
);
