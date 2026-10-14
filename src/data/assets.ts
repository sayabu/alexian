const illustrations: Record<string, { src: string; alt: string }> = {
  "human-parent": { src: "/images/human-parent.png", alt: "Illustration of a Black American parent at work checking her phone with concern about a possible school call." },
  "human-clinician": { src: "/images/human-clinician.png", alt: "Illustration of an Asian American clinician in blue scrubs checking for a delayed message between tasks." },
  "human-family": { src: "/images/human-family.png", alt: "Illustration of a white American family member holding her phone while waiting for a hospital update." },
};
export const assets = Object.fromEntries(
  ["hospital-hero", "impact-productivity", "impact-visitor", "impact-critical-call", "human-parent", "human-clinician", "human-family", "science-lost-time", "science-lost-focus", "science-stress", "methodology-model", "mca-team", "mca-project"].map((id) => [id, {
    id,
    src: id === "hospital-hero" ? "/images/alexian-brothers-hero.png" : illustrations[id]?.src ?? null,
    ratio: id === "hospital-hero" ? "16:9" : "1:1",
    pixels: id === "hospital-hero" ? "1672 x 941" : illustrations[id] ? "1254 x 1254" : "1200 x 1200",
    alt: id === "hospital-hero" ? "User-supplied exterior image of Ascension Alexian Brothers hospital" : illustrations[id]?.alt ?? `Approved editorial image for ${id.replaceAll("-", " ")}`,
  }]),
);
