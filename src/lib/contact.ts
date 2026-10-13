export interface Contact {
  name: string;
  company: string;
  email: string;
  message: string;
  intent: "assessment" | "discussion";
  website: string;
}
export function validateContact(value: unknown): value is Contact {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    ["name", "company", "email", "message", "website", "intent"].every(
      (k) => typeof v[k] === "string",
    ) &&
    String(v.name).trim().length > 1 &&
    String(v.name).length <= 120 &&
    String(v.company).trim().length > 1 &&
    String(v.company).length <= 180 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v.email)) &&
    String(v.email).length <= 254 &&
    String(v.message).length <= 2000 &&
    v.website === "" &&
    ["assessment", "discussion"].includes(String(v.intent))
  );
}
