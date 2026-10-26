import { site } from "@/content/site";
import { contactLinks } from "@/lib/contact";
import { Container } from "@/components/ui/Container";
import { EnquiryForm } from "./EnquiryForm";
import styles from "./ContactSection.module.css";

const steps = [
  "Send us a few details about your activity, ownership and visa needs.",
  "We come back with clear options and costs for mainland, free zone or offshore.",
  "You pick a route and we handle the paperwork end to end.",
];

export function ContactSection() {
  return (
    <section className={styles.section}>
      <Container className={styles.grid}>
        <div className={styles.card}>
          <h2>Send an enquiry</h2>
          <p className={styles.note}>The first consultation is free.</p>
          <EnquiryForm />
        </div>

        <aside className={styles.panel}>
          <h3>What happens next</h3>
          <ol className={styles.steps}>
            {steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>

          <dl className={styles.details}>
            <dt>Office</dt>
            <dd>{site.hq}</dd>
            {contactLinks.phone && (
              <>
                <dt>Phone</dt>
                <dd><a href={contactLinks.phone}>{site.contact.phone}</a></dd>
              </>
            )}
            {contactLinks.whatsapp && (
              <>
                <dt>WhatsApp</dt>
                <dd><a href={contactLinks.whatsapp}>Message us</a></dd>
              </>
            )}
            {contactLinks.email && (
              <>
                <dt>Email</dt>
                <dd><a href={contactLinks.email}>{site.contact.email}</a></dd>
              </>
            )}
          </dl>
        </aside>
      </Container>
    </section>
  );
}