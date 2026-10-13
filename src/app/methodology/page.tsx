import type { Metadata } from "next";
import { hospital, money } from "@/data/hospital";
import { CTA, Calculator } from "@/components/interactive";
import { Ref, SectionLabel, Sources, TextLink } from "@/components/ui";
export const metadata: Metadata = { title: "The Math & Methodology" };
export default function Methodology() {
  return (
    <div className="support wrap">
      <TextLink href="/">Back to your briefing</TextLink>
      <SectionLabel number="03">THE MATH</SectionLabel>
      <h1>
        From Lost Minutes
        <br />
        to <em>Potential Millions.</em>
      </h1>
      <p className="lead intro">
        Make the assumptions visible. Keep the estimate in perspective. Then
        measure what matters.
      </p>
      <div className="equation">
        <span>
          Affected
          <br />
          employees
        </span>
        <b>×</b>
        <span>
          Modeled annual
          <br />
          lost hours each
        </span>
        <b>×</b>
        <span>
          Loaded hourly
          <br />
          labor cost
        </span>
        <b>=</b>
        <strong>
          Potential annual
          <br />
          labor productivity value
        </strong>
      </div>
      <p className="fine-print">
        Conceptual equation only. This is not a substitute for the separate
        source calculator.
      </p>
      <div className="section two-col">
        <div>
          <span className="eyebrow">SUPPLIED DEMONSTRATION BASELINE</span>
          <h2>
            {money(hospital.finance.annual)}
            <br />
            <small>potential annual value</small>
          </h2>
          <p>
            Five-year cumulative nominal output:{" "}
            {money(hospital.finance.fiveYear)}. Not discounted NPV. The supplied
            five-year output is preserved exactly; rounding can differ from five
            times the displayed annual value.
          </p>
          <Calculator />
        </div>
        <div>
          <h3>What this number does not tell us.</h3>
          <p>
            It does not establish actual losses, cash savings, or a return on
            investment. The original model, employee counts, labor rates,
            exposure inputs, date, and version have not yet been provided.
          </p>
          <p>
            No hospital-specific calculator inputs have been inferred from the
            total.
          </p>
        </div>
      </div>
      <div className="hours-grid">
        <article className="yellow">
          <strong>
            44<span>hrs</span>
          </strong>
          <h3>Direct loss reference</h3>
          <p>
            Up to 44 hours per employee per year in vendor-sponsored manager
            estimates. Not observed hospital time loss.
            <Ref id={4} />
          </p>
        </article>
        <article className="blue">
          <strong>
            +23<span>hrs</span>
          </strong>
          <h3>Additional assumption</h3>
          <p>
            A proposed distraction allowance, about 1.1% of a 2,080-hour year.
            Not empirically measured lost time.
            <Ref id={6} />
          </p>
        </article>
        <article className="coral">
          <strong>
            67<span>hrs</span>
          </strong>
          <h3>A scenario, not a norm</h3>
          <p>
            Combined hours for fully affected staff. Exposure and overlapping
            losses need review before use.
            <Ref id={6} />
          </p>
        </article>
      </div>
      <div className="section">
        <h2>
          What we know.
          <br />
          What remains to be measured.
        </h2>
        <div className="option-grid three">
          <article>
            <h3>We know</h3>
            <p>
              Adjacent research associates interruptions and phone separation
              with stress and changes in task performance. Vendor surveys
              describe connectivity workarounds.
              <Ref id={2} />
              <Ref id={4} />
            </p>
          </article>
          <article>
            <h3>We estimate</h3>
            <p>
              Annual affected time and its labor value. The additional 23 hours
              are a proposal; a 3% annual emotional penalty is not established.
            </p>
          </article>
          <article>
            <h3>We need to measure</h3>
            <p>
              Coverage by location and carrier, affected staff, frequency and
              duration, existing systems, and actual workarounds.
            </p>
          </article>
        </div>
      </div>
      <div className="evidence-note">
        <h2>Sensitivity without invented inputs.</h2>
        <p>
          Hypothetical relative example: holding all else equal in the
          conceptual equation, halving affected staff halves the result. This
          illustrates sensitivity only; it does not recalculate the supplied
          hospital estimate.
        </p>
        <ul>
          <li>
            Test a direct-time-only scenario against direct time plus the
            proposed allowance.
          </li>
          <li>
            Use locally measured lower and upper exposure bounds. No numeric
            campus range is available yet.
          </li>
          <li>
            Avoid counting the same minutes as both reconnection time and
            distraction.
          </li>
          <li>
            Do not assume every employee is exposed for the full working year.
          </li>
        </ul>
      </div>
      <div className="support-close">
        <h2>
          The next useful input
          <br />
          is a measured one.
        </h2>
        <CTA />
      </div>
      <Sources ids={[2, 4, 6]} />
    </div>
  );
}
