"use client";
import { useState, type FormEvent } from "react";
import { services } from "@/content/services";
import styles from "./EnquiryForm.module.css";

// Static export has no server. Wire `onSubmit` to a form service (Formspree, Web3Forms, own API) later.
export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: POST to the chosen form endpoint.
    setSent(true);
  }

  if (sent) {
    return <p role="status" className={styles.done}>Thank you. We have your details and will be in touch shortly.</p>;
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label>Name<input name="name" required autoComplete="name" /></label>
      <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      <label>Phone<input name="phone" type="tel" autoComplete="tel" /></label>
      <label>
        Service you need
        <select name="service" defaultValue="">
          <option value="" disabled>Choose one</option>
          {services.map((s) => <option key={s.slug}>{s.title}</option>)}
          <option>Something else</option>
        </select>
      </label>
      <label>Message<textarea name="message" rows={5} /></label>
      <button type="submit">Send enquiry</button>
    </form>
  );
}
