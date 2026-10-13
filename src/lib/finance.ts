import { hospital } from "@/data/hospital";
export interface Scenario {
  affectedEmployees: number;
  annualHours: number;
  loadedHourlyCost: number;
}
export interface FinanceResult {
  annual: number;
  fiveYear: number;
  kind: "baseline" | "adjusted scenario";
}
export interface FinanceAdapter {
  version: string;
  calculate: (scenario: Scenario) => Promise<FinanceResult>;
}
export const baseline: FinanceResult = {
  annual: hospital.finance.annual,
  fiveYear: hospital.finance.fiveYear,
  kind: "baseline",
};
export async function calculateScenario(
  scenario: Scenario,
  adapter?: FinanceAdapter,
): Promise<FinanceResult> {
  if (!adapter)
    throw new Error("The source calculator has not been connected.");
  if (Object.values(scenario).some((n) => !Number.isFinite(n) || n < 0))
    throw new Error("Scenario inputs must be finite and nonnegative.");
  return adapter.calculate(scenario);
}
