"use client";
import { useState, type FormEvent } from "react";
import { services } from "@/content/services";
import styles from "./ContactForm.module.css";

const short: Record<string, string> = {
  "company-setup": "Company setup",
  "visa-processing": "Visas",
  "bank-accounts": "Bank account",
  accounting: "Accounting",
  "tax-advisory": "VAT & tax",
  "consulting-compliance": "Consulting & PRO",
};

const options = [
  ...services.map((s) => ({ key: s.slug, label: short[s.slug] ?? s.title })),
  { key: "not-sure", label: "Not sure yet" },
];

export function ContactForm() {
  const [picked, setPicked] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  const toggle = (label: string) =>
    setPicked((p) => (p.includes(label) ? p.filter((x) => x !== label) : [...p, label]));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    data.set("services", picked.join(", "));
    data.set("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");
    data.set("subject", "New enquiry from Rahmos website");
    data.set("from_name", "Rahmos website");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) setSent(true);
else { console.log(json); setStatus("error"); }
    } catch {
      setStatus("error");
    }
  }

  if (sent) {
    return (
      <div role="status" className={styles.done}>
        <h3>Thank you, we have your details.</h3>
        <p>One of our consultants will reply to you shortly.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
      <div className={styles.pair}>
        <label>
          <span>First name</span>
          <input name="first" required autoComplete="given-name" />
        </label>
        <label>
          <span>Last name</span>
          <input name="last" autoComplete="family-name" />
        </label>
      </div>

      <label>
        <span>Email</span>
        <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
      </label>

      <label>
        <span>Phone</span>
        <div className={styles.phone}>
          <b>+971</b>
          <input name="phone" type="tel" autoComplete="tel-national" placeholder="50 123 4567" />
        </div>
      </label>

      <fieldset className={styles.chips}>
        <legend>What do you need help with?</legend>
        <div>
          {options.map((o) => (
            <label key={o.key} className={styles.chip}>
              <input type="checkbox" checked={picked.includes(o.label)} onChange={() => toggle(o.label)} />
              <span>{o.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label>
        <span>Anything we should know?</span>
        <textarea name="message" rows={4} placeholder="Business activity, number of partners, visas needed..." />
      </label>

      {status === "error" && (
        <p role="alert">Something went wrong. Please try again.</p>
      )}
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send my enquiry"}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </button>
    </form>
  );
}