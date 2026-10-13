import { describe, it, expect, vi, afterEach } from "vitest";
import { baseline, calculateScenario } from "@/lib/finance";
import { validateContact } from "@/lib/contact";
import { hospital } from "@/data/hospital";
import { POST } from "@/app/api/contact/route";
const valid = {
  name: "Test Person",
  company: "Test Hospital",
  email: "person@example.org",
  message: "",
  website: "",
  intent: "assessment",
};
afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});
describe("Finance source boundary", () => {
  it("preserves exact supplied five-year figure", () => {
    expect(baseline.annual).toBe(2853494);
    expect(baseline.fiveYear).toBe(14267469);
  });
  it("does not fabricate scenario calculations", async () => {
    await expect(
      calculateScenario({
        affectedEmployees: 1,
        annualHours: 1,
        loadedHourlyCost: 1,
      }),
    ).rejects.toThrow("not been connected");
  });
  it("delegates only to a supplied model", async () => {
    const calculate = vi
      .fn()
      .mockResolvedValue({ annual: 1, fiveYear: 2, kind: "adjusted scenario" });
    expect(
      (
        await calculateScenario(
          { affectedEmployees: 1, annualHours: 2, loadedHourlyCost: 3 },
          { version: "fixture-only", calculate },
        )
      ).annual,
    ).toBe(1);
    expect(calculate).toHaveBeenCalledOnce();
  });
  it("preserves unknown hospital facts", () => {
    expect(hospital.employees).toBeNull();
    expect(hospital.dasStatus).toBeNull();
    expect(hospital.coverageIssues).toEqual([]);
  });
});
describe("Contact integrity", () => {
  it("validates boundaries and honeypot", () => {
    expect(validateContact(valid)).toBe(true);
    for (const patch of [
      { name: "" },
      { email: "invalid" },
      { website: "spam" },
      { message: "a".repeat(2001) },
      { intent: "unknown" },
    ])
      expect(validateContact({ ...valid, ...patch })).toBe(false);
  });
  it("returns 503 without a configured backend", async () => {
    vi.stubEnv("CONTACT_WEBHOOK_URL", "");
    const response = await POST(
      new Request("http://localhost/api/contact", {
        method: "POST",
        body: JSON.stringify(valid),
      }),
    );
    expect(response.status).toBe(503);
    expect((await response.json()).ok).toBeUndefined();
  });
  it("rejects malformed inputs and cross-origin requests", async () => {
    expect(
      (
        await POST(
          new Request("http://localhost/api/contact", {
            method: "POST",
            body: "{}",
          }),
        )
      ).status,
    ).toBe(400);
    expect(
      (
        await POST(
          new Request("http://localhost/api/contact", {
            method: "POST",
            headers: { origin: "https://other.example" },
            body: JSON.stringify(valid),
          }),
        )
      ).status,
    ).toBe(403);
  });
  it("never reports success on downstream failure", async () => {
    vi.stubEnv("CONTACT_WEBHOOK_URL", "https://example.org/lead");
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("", { status: 500 }),
    );
    expect(
      (
        await POST(
          new Request("http://localhost/api/contact", {
            method: "POST",
            body: JSON.stringify(valid),
          }),
        )
      ).status,
    ).toBe(502);
  });
  it("reports success only on real acceptance", async () => {
    vi.stubEnv("CONTACT_WEBHOOK_URL", "https://example.org/lead");
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("", { status: 202 }),
    );
    const response = await POST(
      new Request("http://localhost/api/contact", {
        method: "POST",
        body: JSON.stringify(valid),
      }),
    );
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
  });
});
