export type AnalyticsEvent =
  | "primary_cta"
  | "secondary_cta"
  | "calculator_opened"
  | "calculator_changed"
  | "calculator_reset"
  | "research_page"
  | "form_started"
  | "form_succeeded";
// No network calls or personal data. Connect an approved provider here.
export function track(event: AnalyticsEvent) {
  if (typeof window !== "undefined")
    window.dispatchEvent(
      new CustomEvent("mca:analytics", { detail: { event } }),
    );
}
