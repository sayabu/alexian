export type Quality = "supplied" | "estimated" | "verified" | "not assessed";
export interface Hospital {
  id: string;
  name: string;
  address: string;
  imageId: string;
  customUrl: string | null;
  area: number | null;
  employees: { value: number; quality: Quality; source: string } | null;
  buildings: number | null;
  dasStatus: string | null;
  coverageIssues: string[];
  finance: {
    annual: number;
    fiveYear: number;
    date: string | null;
    modelVersion: string | null;
    assumptionsRef: string;
    quality: Quality;
  };
  sources: string[];
  allowedCases: string[];
  indexable: boolean;
}
export const hospital: Hospital = {
  id: "alexian-brothers",
  name: "Ascension Alexian Brothers Medical Center",
  address: "800 Biesterfield Rd, Elk Grove Village, IL 60007",
  imageId: "hospital-hero",
  customUrl: null,
  area: null,
  employees: null,
  buildings: null,
  dasStatus: null,
  coverageIssues: [],
  finance: {
    annual: 2853494,
    fiveYear: 14267469,
    date: null,
    modelVersion: null,
    assumptionsRef: "/methodology",
    quality: "supplied",
  },
  sources: ["MCA Healthcare Master Prompt, October 9, 2026"],
  allowedCases: [],
  indexable: false,
};
export const money = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
