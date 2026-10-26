import type { ReactNode } from "react";
import { site } from "@/content/site";
import { contactLinks } from "@/lib/contact";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "./ContactForm";
import styles from "./ContactPanel.module.css";

const gets = [
  { t: "A reply within one business day", d: "A real person reads every enquiry, no auto-responders." },
  { t: "A free first consultation", d: "We map out mainland, free zone or offshore for your activity." },
  { t: "Clear costs before you commit", d: "Government fees and ours, itemised, with no surprises later." },
];

type Props = { heading?: ReactNode; overlap?: boolean };

export function ContactPanel({
  heading = <>Let&rsquo;s talk about your <em>business</em></>,
  overlap = true,
}: Props) {
  return (
    <section className={overlap ? styles.section : `${styles.section} ${styles.flat}`} id="enquire">
      <Container className={styles.grid}>
        <div className={styles.card}>
          <p className={styles.eyebrow}>Non-binding &amp; confidential</p>
          <h2>{heading}</h2>
          <ContactForm />
        </div>

        <div className={styles.side}>
          <h3>What you get</h3>
          <ul className={styles.gets}>
            {gets.map((g, i) => (
              <li key={g.t}>
                <span className={styles.num}>{i + 1}</span>
                <div><strong>{g.t}</strong><p>{g.d}</p></div>
              </li>
            ))}
          </ul>

          <div className={styles.privacy}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
            <p>We use your name, email and phone only to reply to this enquiry and prepare your quote.</p>
          </div>

          <div className={styles.reach}>
            {contactLinks.phone && (
              <a href={contactLinks.phone} className={styles.row}>
                <span className={styles.icon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>
                </span>
                <span><small>Call us</small>{site.contact.phone}</span>
              </a>
            )}
            {contactLinks.whatsapp && (
              <a href={contactLinks.whatsapp} className={`${styles.row} ${styles.wa}`}>
                <span className={styles.icon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.7-5A8.5 8.5 0 1 1 21 11.5z" /></svg>
                </span>
                <span><small>Chat on WhatsApp</small>Message us</span>
              </a>
            )}
            {contactLinks.email && (
              <a href={contactLinks.email} className={styles.row}>
                <span className={styles.icon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
                </span>
                <span><small>Email</small>{site.contact.email}</span>
              </a>
            )}
            <p className={styles.office}>Office &middot; {site.hq}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}