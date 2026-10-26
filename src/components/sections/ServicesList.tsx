import Link from "next/link";
import type { CSSProperties } from "react";
import { services } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import styles from "./ServicesList.module.css";

type Props = { title?: string; lead?: string; cta?: boolean };

export function ServicesList({
  title,
  lead = "A complete, single-window solution for setting up and running a business in the UAE and wider GCC.",
  cta = true,
}: Props) {
  return (
    <section className={styles.section}>
      <Container>
        {title && (
          <div className={styles.head}>
            <h2>{title}</h2>
            <span className={styles.rule} aria-hidden="true" />
          </div>
        )}
        <p className={styles.lead}>{lead}</p>

        <ul className={styles.grid}>
          {services.map((s) => (
            <li
              key={s.slug}
              id={s.slug}
              className={styles.card}
              style={{ "--img": `url(/images/services/${s.slug}.jpg)` } as CSSProperties}
            >
              <Link href={`/services/${s.slug}/`} className={styles.cover} aria-label={s.title} />
              <div className={styles.photo} />
              <h3>{s.title}</h3>
              <div className={styles.panel}>
                <p>{s.summary}</p>
                <span className={styles.tags}>{s.tags.join(" · ")}</span>
                <span className={styles.more}>View details</span>
              </div>
            </li>
          ))}
        </ul>

        {cta && (
          <div className={styles.cta}>
            <Button href="/contact/">Talk to us</Button>
          </div>
        )}
      </Container>
    </section>
  );
}