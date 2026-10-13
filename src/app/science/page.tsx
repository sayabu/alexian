import type { Metadata } from "next";
import { CTA } from "@/components/interactive";
import { Ref, SectionLabel, Sources, TextLink } from "@/components/ui";
export const metadata: Metadata = { title: "The Science" };
export default function Science() {
  return (
    <div className="support wrap">
      <TextLink href="/">Back to your briefing</TextLink>
      <SectionLabel number="02">THE SCIENCE</SectionLabel>
      <h1>
        A Dropped Signal
        <br />
        Can Interrupt
        <br />
        <em>More Than a Call.</em>
      </h1>
      <p className="lead intro">
        The evidence points to lost time, interrupted attention, and stress. The
        strength of the claim depends on what each study actually measured.
      </p>
      <div className="science-grid">
        <article className="yellow">
          <span className="eyebrow">01 / LOST TIME</span>
          <strong className="science-stat">60%</strong>
          <h2>Stepping out to make a call.</h2>
          <p>
            Reported leaving the building to make a call in a vendor-sponsored
            UK hybrid-worker survey, according to the supplied brief.
            <Ref id={1} />
          </p>
          <p className="fine-print">
            Censuswide for Cellnex UK · 2,000 workers · April–May 2024.
            Self-report, not observed time loss. Original page verification
            pending.
          </p>
        </article>
        <article className="blue">
          <span className="eyebrow">02 / LOST FOCUS</span>
          <strong className="science-stat">40</strong>
          <h2>People. A controlled task.</h2>
          <p>
            In a laboratory experiment, people unable to answer a ringing iPhone
            reported more anxiety and performed worse on a word-search task.
            <Ref id={2} />
          </p>
          <p className="fine-print">
            Clayton, Leshner & Almond · US · 2015 · 40 iPhone users. Authors
            reported no commercial interest. Not a hospital coverage experiment.
          </p>
        </article>
        <article className="coral">
          <span className="eyebrow">03 / EMOTIONAL STRESS</span>
          <strong className="science-stat">72%</strong>
          <h2>Connectivity can feel personal.</h2>
          <p>
            Reported higher stress from poor office connectivity in the Cellnex
            UK survey, as summarized in the supplied brief.
            <Ref id={1} />
          </p>
          <p className="fine-print">
            Vendor-sponsored, self-reported responses. Do not project this
            percentage onto US hospital employees.
          </p>
        </article>
      </div>
      <div className="section">
        <h2>
          A plausible pathway.
          <br />
          Not a productivity formula.
        </h2>
        <div className="pathway">
          {[
            "Signal loss",
            "Interruption",
            "Distraction or stress",
            "Potential work impact",
          ].map((s, i) => (
            <div key={s}>
              <span>0{i + 1}</span>
              <strong>{s}</strong>
              {i < 3 && <span aria-hidden="true">→</span>}
            </div>
          ))}
        </div>
        <p>
          Research on interrupted work found that people could finish faster
          while reporting greater stress, frustration and effort.
          <Ref id={3} />
        </p>
        <p>
          The pathway above is an evidence-informed explanation. No
          peer-reviewed study in the supplied brief directly quantifies annual
          workplace loss from hospital cellular dead zones. Lab phone
          separation, general IT interruptions, and poor cellular reception are
          different conditions.
        </p>
      </div>
      <div className="notice">
        <strong>There is no universal 35% employee productivity drop.</strong>
        <p>
          A change on a short laboratory task cannot be converted into an annual
          hospital workforce penalty. Measure exposure and validate assumptions
          before applying financial estimates.
        </p>
      </div>
      <div className="support-close">
        <h2>
          Evidence informs the question.
          <br />
          Measurement informs the answer.
        </h2>
        <CTA />
        <TextLink href="/methodology">See how we frame the math</TextLink>
      </div>
      <Sources ids={[1, 2, 3]} />
    </div>
  );
}
