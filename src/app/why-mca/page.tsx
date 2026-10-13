import type { Metadata } from "next";
import { CTA } from "@/components/interactive";
import { Placeholder, SectionLabel, TextLink } from "@/components/ui";
export const metadata: Metadata = { title: "Why MCA" };
export default function Why() {
  return (
    <div className="support wrap">
      <TextLink href="/">Back to your briefing</TextLink>
      <SectionLabel number="04">WHY MCA</SectionLabel>
      <h1>
        The People and
        <br />
        Experience
        <br />
        <em>Behind the Signal.</em>
      </h1>
      <p className="lead intro">
        Start with the campus. Understand the need. Build the recommendation
        around the evidence.
      </p>
      <div className="notice">
        Company profile pending. MCA’s approved mission, service capabilities,
        healthcare experience and team details will be added here. No
        credentials or project outcomes are implied.
      </div>
      <div className="section two-col">
        <div>
          <span className="eyebrow">MISSION / CONTENT AWAITING APPROVAL</span>
          <h2>
            A clearer picture.
            <br />A practical path.
          </h2>
          <p>
            The briefing’s approach is to understand current coverage before
            considering an investment. MCA’s formal mission and differentiators
            are awaiting company-supplied content.
          </p>
        </div>
        <Placeholder id="mca-team" />
      </div>
      <h2>Capabilities to confirm.</h2>
      <p>
        These modules define the planned company profile. Service availability
        is awaiting MCA verification.
      </p>
      <div className="option-grid three">
        {[
          "Cellular engineering & design",
          "DAS & public safety DAS",
          "Installation & modernization",
          "Maintenance & support",
          "Healthcare project experience",
          "People & specialist teams",
        ].map((title) => (
          <article key={title}>
            <span className="tag">PROFILE PENDING</span>
            <h3>{title}</h3>
            <p>
              Approved scope, relevant experience, and supporting details to be
              supplied by MCA.
            </p>
          </article>
        ))}
      </div>
      <div className="section two-col">
        <Placeholder id="mca-project" />
        <div>
          <span className="eyebrow">PROJECTS / CUSTOMER VOICES</span>
          <h2>Proof belongs here.</h2>
          <p>
            Approved case studies, project photography, customer permissions and
            attributable quotes are awaiting supply. No placeholder customer
            names, logos, results or testimonials are presented.
          </p>
          <TextLink href="/#process">
            See the measurement-first process
          </TextLink>
        </div>
      </div>
      <div className="support-close">
        <h2>
          Start with a conversation.
          <br />
          Start with the signal.
        </h2>
        <CTA />
      </div>
    </div>
  );
}
