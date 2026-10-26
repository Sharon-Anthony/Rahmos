import type { Metadata } from "next";
import { about } from "@/content/about";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Coverage } from "@/components/sections/Coverage";
import { Enquiry } from "@/components/sections/Enquiry";
import styles from "./about.module.css";

export const metadata: Metadata = { title: "About", description: about.intro };

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About us" lead="A Dubai-based corporate services and management consulting firm." />

      <section className={styles.story}>
        <Container>
          <p className={styles.eyebrow}>Who we are</p>
          <p className={styles.intro}>{about.intro}</p>
          <div className={styles.body}>
            {about.body.map((p) => <p key={p}>{p}</p>)}
          </div>
          <dl className={styles.facts}>
            {about.snapshot.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </Container>
      </section>

      <section className={styles.principles} aria-labelledby="how">
        <Container>
          <p className={styles.eyebrow}>How we work</p>
          <h2 id="how">Four habits we hold ourselves to</h2>
          <ol className={styles.list}>
            {about.principles.map((p, i) => (
              <li key={p.title}>
                <span className={styles.n}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className={styles.vm}>
        <Container className={styles.vmGrid}>
          <div><h2>Our vision</h2><p>{about.vision}</p></div>
          <div><h2>Our mission</h2><p>{about.mission}</p></div>
        </Container>
      </section>

      <Coverage />
      <Enquiry heading="Let's talk about your plans" />
    </>
  );
}