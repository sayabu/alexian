"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, ArrowRight } from "lucide-react";
import { hospital, money } from "@/data/hospital";
import { track } from "@/lib/analytics";
import { validateContact } from "@/lib/contact";
import {nav} from "@/data/navigation";
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => {
    if (path !== "/") track("research_page");
  }, [path]);
  return (
    <header>
      <Link href="/" className="brand" aria-label="MCA Healthcare home">
        MCA
        <span>
          HEALTHCARE
          <br />
          SIGNAL BRIEFING
        </span>
      </Link>
      <button
        className="menu"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? "open" : ""} aria-label="Main navigation">
        {nav.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            aria-current={path === href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
      <CTA small />
    </header>
  );
}
export function CTA({
  secondary = false,
  small = false,
}: {
  secondary?: boolean;
  small?: boolean;
}) {
  return (
    <Link
      onClick={() => {
        track(secondary ? "secondary_cta" : "primary_cta");
        window.dispatchEvent(
          new CustomEvent("mca:contact-intent", {
            detail: secondary ? "discussion" : "assessment",
          }),
        );
      }}
      className={`button ${secondary ? "secondary" : ""} ${small ? "small" : ""}`}
      href={`/?intent=${secondary ? "discussion" : "assessment"}#contact`}
    >
      {secondary ? "Review the Findings with MCA" : "Start with the Signal"}
      <ArrowUpRight size={18} />
    </Link>
  );
}
export function Calculator() {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button
        className="button secondary"
        onClick={() => {
          track("calculator_opened");
          dialog.current?.showModal();
        }}
      >
        Explore Your Estimate <ArrowUpRight size={18} />
      </button>
      <dialog ref={dialog} aria-labelledby="calculator-title">
        <button
          className="close"
          aria-label="Close estimate"
          onClick={() => dialog.current?.close()}
        >
          <X />
        </button>
        <span className="tag">SUPPLIED BASELINE</span>
        <h2 id="calculator-title">
          A starting point.
          <br />
          Not a verdict.
        </h2>
        <div className="dialog-value">{money(hospital.finance.annual)}</div>
        <p>
          Modeled annual workforce value. Five-year cumulative nominal estimate:{" "}
          {money(hospital.finance.fiveYear)}.
        </p>
        <p>
          The original calculator and its inputs have not yet been provided.
          Scenario adjustments are unavailable until that model is connected.
        </p>
        <button disabled className="button">
          Adjust scenario — not connected
        </button>
        <p>
          <Link href="/methodology" onClick={() => dialog.current?.close()}>
            See assumptions and limitations →
          </Link>
        </p>
        <button className="text-link" onClick={() => track("calculator_reset")}>
          Reset to supplied baseline
        </button>
      </dialog>
    </>
  );
}
export function ContactForm({ configured }: { configured: boolean }) {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [intent, setIntent] = useState("assessment");
  const started = useRef(false);
  useEffect(() => {
    const sync = () =>
      setIntent(
        new URLSearchParams(window.location.search).get("intent") ===
          "discussion"
          ? "discussion"
          : "assessment",
      );
    const select = (event: Event) =>
      setIntent((event as CustomEvent<string>).detail);
    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("mca:contact-intent", select);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("mca:contact-intent", select);
    };
  }, []);
  return (
    <form
      onFocus={() => {
        if (!started.current) {
          track("form_started");
          started.current = true;
        }
      }}
      onSubmit={async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        if (!validateContact(data)) {
          setStatus(
            "Please enter your name, organization and valid work email.",
          );
          return;
        }
        setBusy(true);
        try {
          const r = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          const result = await r.json();
          if (r.ok && result.ok) {
            setStatus("Your request has been received.");
            track("form_succeeded");
          } else setStatus(result.error || "Delivery could not be confirmed.");
        } catch {
          setStatus("Could not connect. Your request has not been confirmed.");
        } finally {
          setBusy(false);
        }
      }}
    >
      <label>
        I’d like to
        <select
          name="intent"
          value={intent}
          onChange={(e) => setIntent(e.target.value)}
        >
          <option value="assessment">Discuss a signal assessment</option>
          <option value="discussion">Review the findings with MCA</option>
        </select>
      </label>
      <div className="form-row">
        <label>
          Your name
          <input
            name="name"
            required
            minLength={2}
            maxLength={120}
            autoComplete="name"
          />
        </label>
        <label>
          Hospital / company
          <input
            name="company"
            required
            minLength={2}
            maxLength={180}
            defaultValue={hospital.name}
            autoComplete="organization"
          />
        </label>
      </div>
      <label>
        Work email
        <input
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
        />
      </label>
      <label>
        Anything we should know? <span>(optional)</span>
        <textarea name="message" maxLength={2000} rows={3} />
      </label>
      <div className="honeypot" aria-hidden="true">
        <label>
          Leave empty
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <p className="form-note">
        {configured
          ? "We use these details to respond to your request. Please do not include patient information."
          : "Preview mode: contact delivery is not connected. No request will be sent. Please do not enter personal or patient information."}
      </p>
      <button className="button" disabled={!configured || busy}>
        {busy
          ? "Sending…"
          : configured
            ? "Send request"
            : "Request delivery not configured"}
        <ArrowRight size={18} />
      </button>
      <p role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
