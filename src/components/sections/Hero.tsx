import type { CSSProperties } from "react";
import { site, heroFacts } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import styles from "./Hero.module.css";

const d = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.ring} aria-hidden="true" />
      <div className={styles.disc} aria-hidden="true" />

      <Container className={styles.content}>
        <p className={styles.eyebrow} style={d(0.2)}>{site.descriptor}</p>

        <h1 className={styles.name}>
          <span className={styles.mask}><span className={styles.word} style={d(0.35)}>Rahmos</span></span>{" "}
          <span className={styles.mask}><span className={`${styles.word} ${styles.gold}`} style={d(0.5)}>Consultancies</span></span>{" "}
          <span className={styles.mask}><span className={styles.word} style={d(0.65)}>FZC LLC</span></span>
        </h1>

        <p className={styles.tagline} style={d(0.95)}>{site.tagline}</p>

        <ul className={styles.facts}>
          {heroFacts.map((f, i) => (
            <li key={f.label} style={d(1.2 + i * 0.14)}>
              <strong>{f.label}</strong>
              <span>{f.value}</span>
            </li>
          ))}
        </ul>

        <div className={styles.bar} style={d(1.7)}>
          <p>Company profile &mdash; Established {site.founded}</p>
          <Button href="/contact/" tone="dark">Book a free consultation</Button>
        </div>
      </Container>
    </section>
  );
}
