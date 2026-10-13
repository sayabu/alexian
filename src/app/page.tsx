import {
  ArrowDown,
  ArrowUpRight,
  Clock3,
  HeartHandshake,
  PhoneCall,
  MapPin,
  ScanLine,
  Settings2,
  ChartNoAxesCombined,
  Route,
} from "lucide-react";
import { hospital, money } from "@/data/hospital";
import { CTA, Calculator, ContactForm } from "@/components/interactive";
import { Placeholder, SectionLabel, TextLink } from "@/components/ui";
export default function Home() {
  return (
    <>
      <section className="hero wrap" id="briefing">
        <div className="briefing-meta">
          <span>
            <i /> A PERSONALIZED EXECUTIVE BRIEFING
          </span>
          <span>ELK GROVE VILLAGE, IL · DEMONSTRATION</span>
        </div>
        <div className="campus-hero">
          <p className="eyebrow">PREPARED FOR YOUR CAMPUS</p>
          <h1>Ascension <span>Alexian Brothers</span></h1>
          <Placeholder id="hospital-hero" />
        </div>
        <div className="hero-grid campus-intro">
          <h2>The signal is missing.<br /><em>The cost isn’t.</em></h2>
          <div>
            <p className="hero-copy">We know what improving cellular coverage may cost. But do we know what poor coverage is costing us today?</p>
            <CTA />
            <a href="#financial-impact" className="hero-jump">See the potential impact <ArrowDown size={16} /></a>
          </div>
        </div>
        <div className="hero-bottom">
          <span>01 — THE QUESTION</span>
          <p>
            A clearer picture starts with measurement.
            <br />
            An equipment recommendation comes later.
          </p>
          <ArrowDown size={22} />
        </div>
      </section>
      <section className="section wrap" id="hidden-impacts">
        <SectionLabel number="02">BEYOND THE SIGNAL BARS</SectionLabel>
        <div className="section-heading">
          <h2>
            A small interruption.
            <br />A wider impact.
          </h2>
          <p>
            Connectivity reaches beyond a device. It can shape how people work,
            wait, and stay in touch.
          </p>
        </div>
        <div className="impact-grid">
          {[
            {
              icon: Clock3,
              title: "Time that adds up.",
              text: "Stepping outside. Retrying a call. Finding a place to connect. Small workarounds can interrupt the working day.",
              tag: "EMPLOYEE PRODUCTIVITY",
              color: "yellow",
            },
            {
              icon: HeartHandshake,
              title: "Connection is personal.",
              text: "For a patient or visitor, being able to reach the people who matter is part of the experience.",
              tag: "PATIENT & VISITOR EXPERIENCE",
              color: "blue",
            },
            {
              icon: PhoneCall,
              title: "Some moments matter more.",
              text: "When a message is expected, unreliable reception can add uncertainty to an already important moment.",
              tag: "IMPORTANT COMMUNICATIONS",
              color: "coral",
            },
          ].map((x, i) => (
            <article className={`impact ${x.color}`} key={x.title}>
              <div className="impact-top">
                <x.icon size={34} strokeWidth={1.4} />
                <span>0{i + 1}</span>
              </div>
              <h3>{x.title}</h3>
              <p>{x.text}</p>
              <span className="eyebrow">{x.tag}</span>
            </article>
          ))}
        </div>
        <TextLink href="/science">
          Explore the evidence behind the impacts
        </TextLink>
      </section>
      <section className="finance-band" id="financial-impact">
        <div className="wrap section">
          <SectionLabel number="03">
            THE POTENTIAL FINANCIAL IMPACT
          </SectionLabel>
          <div className="section-heading">
            <h2>
              What could the
              <br />
              hidden cost look like?
            </h2>
            <span className="tag">MODELED ESTIMATE · NOT VERIFIED LOSS</span>
          </div>
          <div className="finance-grid">
            <div>
              <span className="eyebrow">POTENTIAL ANNUAL WORKFORCE VALUE</span>
              <div className="big-money">{money(hospital.finance.annual)}</div>
              <p>
                Supplied demonstration estimate for
                <br />
                {hospital.name}.
              </p>
              <Calculator />
            </div>
            <div className="five-year">
              <span className="eyebrow">A FIVE-YEAR PERSPECTIVE</span>
              <strong>{money(hospital.finance.fiveYear)}</strong>
              <div
                className="comparison"
                role="img"
                aria-label="Supplied five-year estimate is approximately five times the annual estimate"
              >
                <div>
                  <span>1 YEAR</span>
                  <i style={{ width: "20%" }} />
                </div>
                <div>
                  <span>5 YEARS</span>
                  <i style={{ width: "100%" }} />
                </div>
              </div>
              <p>
                Cumulative nominal model output, not discounted NPV. This is
                potential labor productivity value, not an invoice, verified
                loss, or guaranteed recoverable savings.
              </p>
              <TextLink href="/methodology">
                See the math and its limits
              </TextLink>
            </div>
          </div>
          <p className="fine-print">
            Baseline supplied in the project brief. Underlying employee counts,
            labor rates, exposure assumptions, calculation date and model
            version are awaiting validation.
          </p>
        </div>
      </section>
      <section className="section wrap" id="human-impact">
        <SectionLabel number="04">THE HUMAN SIDE</SectionLabel>
        <div className="section-heading">
          <h2>
            Behind every missed
            <br />
            connection, a person.
          </h2>
          <p>Illustrative moments, not reported events at this hospital.</p>
        </div>
        <div className="story-grid">
          {[
            [
              "human-parent",
              "The parent at work.",
              "A school might be calling. A parent keeps checking a phone that has no reception.",
            ],
            [
              "human-clinician",
              "The clinician between tasks.",
              "A delayed message means checking again, changing location, and trying to reconnect.",
            ],
            [
              "human-family",
              "The family waiting.",
              "An update is expected. A visitor wonders whether to stay nearby or step outside for signal.",
            ],
          ].map(([id, title, text]) => (
            <article key={id}>
              <Placeholder id={id} compact />
              <div className="story-copy">
                <span className="eyebrow">ILLUSTRATIVE SCENARIO</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
        <TextLink href="/human-cost">
          Read the human stories and their context
        </TextLink>
      </section>
      <section className="campus-band" id="campus">
        <div className="wrap section campus-grid">
          <div>
            <SectionLabel number="05">YOUR HOSPITAL CAMPUS</SectionLabel>
            <h2>
              A specific place.
              <br />
              An open question.
            </h2>
            <p>
              Before prescribing a solution, establish where connectivity works,
              where it does not, and who is affected.
            </p>
            <div className="address">
              <MapPin />
              <div>
                <strong>{hospital.name}</strong>
                <p>{hospital.address}</p>
                <small>
                  Hospital identity and address supplied in the project brief.
                </small>
              </div>
            </div>
          </div>
          <div className="facts">
            <div>
              <span>Hospital information</span>
              <strong>Supplied · not independently verified</strong>
            </div>
            <div>
              <span>Coverage performance</span>
              <strong>Not assessed</strong>
            </div>
            <div>
              <span>Existing DAS condition</span>
              <strong>Not assessed</strong>
            </div>
            <div>
              <span>Campus and workforce inputs</span>
              <strong>Awaiting confirmed data</strong>
            </div>
            <p>
              Unknown facts stay unknown. No coverage deficiency is asserted for
              this campus.
            </p>
          </div>
        </div>
      </section>
      <section className="section wrap" id="technical-paths">
        <SectionLabel number="06">
          THE RIGHT PATH DEPENDS ON THE EVIDENCE
        </SectionLabel>
        <div className="section-heading">
          <h2>
            Aging doesn’t always
            <br />
            mean replacing.
          </h2>
          <p>
            An existing distributed antenna system (DAS) may have useful life
            left. Site evidence should determine the next step.
          </p>
        </div>
        <div className="option-grid">
          {[
            [
              "01",
              "Optimize",
              "Improve the performance of an existing system where the findings support it.",
            ],
            [
              "02",
              "Modernize selectively",
              "Update the elements that need attention and retain what still works.",
            ],
            [
              "03",
              "Replace when justified",
              "Consider replacement when measured needs and system limitations warrant it.",
            ],
            [
              "04",
              "Combine solutions",
              "Match approaches to different buildings, spaces, and carrier requirements.",
            ],
          ].map(([n, title, text]) => (
            <article key={n}>
              <span className="option-number">{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="process-band" id="process">
        <div className="wrap section">
          <SectionLabel number="07">START WITH THE SIGNAL</SectionLabel>
          <h2>
            Measure first.
            <br />
            Make a better decision.
          </h2>
          <div className="process-grid">
            {[
              [
                ScanLine,
                "Measure",
                "Understand actual coverage across agreed spaces and carriers.",
              ],
              [
                Settings2,
                "Diagnose",
                "Identify the gaps and review existing infrastructure.",
              ],
              [
                ChartNoAxesCombined,
                "Model",
                "Connect observed exposure with transparent financial assumptions.",
              ],
              [
                Route,
                "Recommend",
                "Compare appropriate options against the evidence.",
              ],
            ].map(([Icon, title, text], i) => {
              const I = Icon as typeof ScanLine;
              return (
                <article key={String(title)}>
                  <div>
                    <I size={30} />
                    <span>
                      0{i + 1} <ArrowUpRight size={22} />
                    </span>
                  </div>
                  <h3>{String(title)}</h3>
                  <p>{String(text)}</p>
                </article>
              );
            })}
          </div>
          <p className="process-note">
            The goal: confidence in the decision before a commitment to
            equipment.
          </p>
        </div>
      </section>
      <section className="section wrap" id="funding">
        <SectionLabel number="08">FLEXIBILITY AFTER THE FINDINGS</SectionLabel>
        <div className="section-heading">
          <h2>
            One set of findings.
            <br />
            Different ways forward.
          </h2>
          <p>
            Funding is a discussion to have once the need is understood.
            Availability and terms require confirmation with MCA.
          </p>
        </div>
        <div className="funding-grid">
          {[
            [
              "Capital investment",
              "Evaluate an upfront investment in the appropriate infrastructure.",
            ],
            [
              "Phased investment",
              "Prioritize identified needs across an agreed sequence of work.",
            ],
            [
              "Signal Source as a Service",
              "Discuss whether a service approach to the signal source is available and appropriate.",
            ],
            [
              "DAS as a Service",
              "Explore whether a service model for in-building infrastructure fits the project.",
            ],
          ].map(([title, text]) => (
            <article key={title}>
              <ArrowUpRight />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section wrap next-step" id="assessment">
        <SectionLabel number="09">THE NEXT PRACTICAL STEP</SectionLabel>
        <div className="next-grid">
          <h2>
            Find out what
            <br />
            the signal is
            <br />
            <em>telling you.</em>
          </h2>
          <div>
            <p className="lead">
              A signal assessment begins with a conversation about your campus,
              priorities, and access requirements.
            </p>
            <details open>
              <summary>What might an assessment cover?</summary>
              <p>
                Agreed buildings and high-priority areas, carrier coverage, and
                an initial review of existing systems.
              </p>
            </details>
            <details>
              <summary>Who should be involved?</summary>
              <p>
                Facilities and IT teams can help coordinate access, priorities,
                and existing documentation. Clinical operations can inform
                access constraints where relevant.
              </p>
            </details>
            <details>
              <summary>What can help the decision?</summary>
              <p>
                Coverage observations, identified gaps, and a basis for
                comparing technical paths. Scope, deliverables, timing and
                pricing must be confirmed with MCA.
              </p>
            </details>
            <TextLink href="/why-mca">
              Get to know the people behind the process
            </TextLink>
          </div>
        </div>
      </section>
      <section className="contact-band" id="contact">
        <div className="wrap section contact-grid">
          <div>
            <SectionLabel number="10">
              A CLEARER SIGNAL. A CLEARER DECISION.
            </SectionLabel>
            <h2>
              Before investing
              <br />
              in a solution,
              <br />
              <em>
                understand
                <br />
                the problem.
              </em>
            </h2>
            <p>
              Start with a signal assessment conversation.
              <br />
              Or review the findings together first.
            </p>
            <CTA secondary />
            <p className="fine-print">
              No equipment recommendation is assumed.
            </p>
          </div>
          <div>
            <h3>Let’s start with the signal.</h3>
            <ContactForm
              configured={Boolean(process.env.CONTACT_WEBHOOK_URL)}
            />
          </div>
        </div>
      </section>
    </>
  );
}
