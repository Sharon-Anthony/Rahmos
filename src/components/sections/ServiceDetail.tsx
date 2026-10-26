import Link from "next/link";
import type { CSSProperties } from "react";
import type { Service } from "@/content/services";
import type { ServiceDetail as Detail } from "@/content/serviceDetails";
import { services } from "@/content/services";
import { contactLinks } from "@/lib/contact";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import styles from "./ServiceDetail.module.css";

type Props = { service: Service; detail: Detail; prev: Service; next: Service };

const Tick = () => (
  <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
    <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function ServiceDetail({ service, detail, prev, next }: Props) {
  return (
    <article>
      <header className={styles.hero}>
        <Container className={styles.heroGrid}>
          <div className={styles.heroText}>
            <nav aria-label="Breadcrumb" className={styles.crumbs}>
              <Link href="/services/">Services</Link>
              <span aria-hidden="true">/</span>
              <span>{service.title}</span>
            </nav>
            <p className={styles.eyebrow}>{detail.eyebrow}</p>
            <h1>{detail.headline}</h1>
            <p className={styles.intro}>{detail.intro}</p>
            <div className={styles.heroCta}>
              <Button href="#enquire" tone="dark">Start with a free call</Button>
            </div>
          </div>
          <div
            className={styles.arch}
            style={{ "--img": `url(/images/services/${service.slug}.jpg)` } as CSSProperties}
            role="img"
            aria-label={service.title}
          />
        </Container>
        <Container>
          <dl className={styles.facts}>
            {detail.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <Container className={styles.body}>
        <div className={styles.main}>
          <section aria-labelledby="inc">
            <h2 id="inc"><span>01</span>What we take care of</h2>
            <ul className={styles.included}>
              {detail.included.map((x) => (
                <li key={x.title}>
                  <h3>{x.title}</h3>
                  <p>{x.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="how">
            <h2 id="how"><span>02</span>How it works</h2>
            <ol className={styles.steps}>
              {detail.steps.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="docs">
            <h2 id="docs"><span>03</span>What to have ready</h2>
            <ul className={styles.docs}>
              {detail.documents.map((d) => (
                <li key={d}><Tick /><span>{d}</span></li>
              ))}
            </ul>
            <p className={styles.note}><strong>Good to know.</strong> {detail.goodToKnow}</p>
          </section>

          <section aria-labelledby="faq">
            <h2 id="faq"><span>04</span>Questions people ask</h2>
            <div className={styles.faqs}>
              {detail.faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>

        <aside className={styles.aside} aria-label="Talk to us">
          <div className={styles.asideCard}>
            <h2>Talk to a person</h2>
            <p>Tell us what you need. A consultant will reply within one business day.</p>
            <Button href="#enquire">Send an enquiry</Button>
            {(contactLinks.phone || contactLinks.whatsapp) && (
              <p className={styles.alt}>
                {contactLinks.whatsapp && <a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>}
                {contactLinks.phone && contactLinks.whatsapp && " · "}
                {contactLinks.phone && <a href={contactLinks.phone}>Call us</a>}
              </p>
            )}
          </div>
          <nav className={styles.others} aria-label="Other services">
            <h2>Other services</h2>
            <ul>
              {services.filter((s) => s.slug !== service.slug).map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}/`}>{s.title}</Link></li>
              ))}
            </ul>
          </nav>
        </aside>
      </Container>

      <Container>
        <nav className={styles.pager} aria-label="More services">
          <Link href={`/services/${prev.slug}/`}><small>Previous</small>{prev.title}</Link>
          <Link href={`/services/${next.slug}/`}><small>Next</small>{next.title}</Link>
        </nav>
      </Container>
    </article>
  );
}