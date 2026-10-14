import type { Metadata } from "next";
import { CTA } from "@/components/interactive";
import {
  Placeholder,
  Ref,
  SectionLabel,
  Sources,
  TextLink,
} from "@/components/ui";
export const metadata: Metadata = { title: "The Human Cost" };
export default function Human() {
  return (
    <div className="support wrap">
      <TextLink href="/">Back to your briefing</TextLink>
      <SectionLabel number="01">THE HUMAN COST</SectionLabel>
      <h1>
        When a Signal
        <br />
        Disappears, the
        <br />
        <em>World Doesn’t Stop.</em>
      </h1>
      <p className="lead intro">
        Someone is waiting for an update. Someone needs to reach home. The need
        to connect continues, even when reception doesn’t.
      </p>
      <div className="notice">
        These are anonymous, unverified firsthand reports from the supplied
        research compilation. They are not accounts from Ascension Alexian
        Brothers Medical Center. Original post links remain to be verified. The AI-generated illustrations depict fictional people, not the individuals described in these accounts.
      </div>
      <div className="account-list">
        {[
          [
            "human-clinician",
            "01",
            "A resident waiting for the message.",
            "A first-year resident described missing urgent calls and texts from attendings and discovering them later, despite attempts to use Wi-Fi calling.",
            "r/Residency · 2022 · Paraphrased account",
          ],
          [
            "human-family",
            "02",
            "Outside, waiting for an update.",
            "A family member described waiting outside Strong Hospital in cold weather to receive a surgeon’s update on their partner.",
            "r/Rochester · 2023 · Paraphrased account",
          ],
          [
            "human-parent",
            "03",
            "Looking for a place to connect.",
            "A hospital visitor reported having reception only near windows or outdoors. The account illustrates a workaround, not a measure of how commonly this occurs.",
            "r/ATT · 2022 · Paraphrased account",
          ],
        ].map(([id, n, title, text, source]) => (
          <article className="account" key={id}>
            <Placeholder id={id} />
            <div>
              <span className="eyebrow">{n} / UNVERIFIED FIRSTHAND REPORT</span>
              <h2>{title}</h2>
              <p>
                {text}
                <Ref id={5} />
              </p>
              <small>
                {source}
                <br />
                Original link to be verified.
              </small>
            </div>
          </article>
        ))}
      </div>
      <div className="evidence-note">
        <h2>Anecdotes deserve context.</h2>
        <p>
          The supplied review sampled nine Houston hospitals. Clear cellular
          complaints appeared only in the Houston VA sample; one other hospital
          had an ambiguous mention. This was a keyword review of approximately
          250–430 most-relevant reviews per hospital, not a representative
          prevalence study.
          <Ref id={5} />
        </p>
        <p>
          Historical accounts may no longer describe current conditions. They
          identify questions worth asking, not deficiencies at this campus.
        </p>
      </div>
      <div className="support-close">
        <h2>
          The signal is missing.
          <br />
          The need to connect isn’t.
        </h2>
        <CTA />
        <TextLink href="/science">Explore the science</TextLink>
      </div>
      <Sources ids={[5]} />
    </div>
  );
}
