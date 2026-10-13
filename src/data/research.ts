export interface Citation {
  id: number;
  title: string;
  authors: string;
  year: string;
  publication: string;
  type: string;
  method: string;
  url?: string;
  limitation: string;
  claims: string[];
}
export const research: Citation[] = [
  {
    id: 1,
    title: "Hybrid worker connectivity survey",
    authors: "Censuswide / Cellnex UK",
    year: "2024",
    publication: "Cellnex UK",
    type: "Vendor-sponsored survey",
    method: "2,000 UK hybrid workers; April–May 2024; self-reported responses.",
    limitation:
      "Figures are reported in the supplied research brief. Original page verification pending. This is not a US hospital sample and does not establish causation.",
    claims: [
      "60% reported leaving the building to make a call",
      "72% reported increased stress",
    ],
  },
  {
    id: 2,
    title: "The Extended iSelf",
    authors: "Russell B. Clayton, Glenn Leshner, Anthony Almond",
    year: "2015",
    publication: "Journal of Computer-Mediated Communication",
    type: "Peer-reviewed laboratory experiment",
    method:
      "40 iPhone users; US study; within-subjects word-search tasks with and without access to a ringing phone. Authors disclosed no commercial interest.",
    url: "https://academic.oup.com/jcmc/article/20/2/119/4067530",
    limitation:
      "Short laboratory task, not a study of hospital dead zones or annual workforce productivity.",
    claims: [
      "Phone separation and inability to answer were associated with greater anxiety and lower task performance",
    ],
  },
  {
    id: 3,
    title: "The cost of interrupted work: more speed and stress",
    authors: "Gloria Mark, Daniela Gudith, Ulrich Klocke",
    year: "2008",
    publication: "ACM CHI",
    type: "Peer-reviewed experiment",
    method: "Controlled task interruption experiment.",
    url: "https://ics.uci.edu/~gmark/chi08-mark.pdf",
    limitation:
      "General task interruption, not cellular coverage. Does not supply an annual hospital loss multiplier.",
    claims: [
      "Interrupted participants reported greater stress, frustration, effort and time pressure",
    ],
  },
  {
    id: 4,
    title: "In-Building Mobile Connectivity Report",
    authors: "Coleman Parkes / SignalBoosters.com",
    year: "Date not confirmed",
    publication: "SignalBoosters.com",
    type: "Vendor-sponsored manager estimates",
    method: "500 managers, as reported in the supplied research brief.",
    limitation:
      "Up to 44 hours per year is an estimate, not time measured in hospitals. Original source verification pending.",
    claims: ["Research-associated 44-hour direct loss scenario"],
  },
  {
    id: 5,
    title:
      "Hospital Cell Coverage Complaints: Google Reviews and Reddit Quote Set",
    authors: "Supplied research compilation",
    year: "2026",
    publication: "Prepared October 7, 2026",
    type: "Unverified online accounts",
    method:
      "Sample of approximately 250–430 most-relevant Google reviews for each of nine Houston hospitals; selected Reddit accounts.",
    limitation:
      "Original links to be verified. Anonymous accounts are unverified; historical coverage may have changed. No accounts are attributed to the demonstration hospital.",
    claims: [
      "Resident missed communications",
      "Visitor waited outside for a surgeon update",
      "Visitors sought reception",
    ],
  },
  {
    id: 6,
    title: "Lead Generation for MCA — Research & Notes on Loss",
    authors: "Supplied working notes",
    year: "2026",
    publication: "Research notes, October 9",
    type: "Modeling proposal, not independent research",
    method:
      "Proposed 44 direct hours plus approximately 23 additional distraction hours.",
    limitation:
      "23 hours is an assumption, about 1.1% of 2,080 hours, not empirically measured loss. The source calculator and hospital inputs have not been supplied.",
    claims: ["67-hour fully affected staff scenario"],
  },
];
