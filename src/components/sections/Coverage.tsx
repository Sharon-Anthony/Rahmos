import { coverage } from "@/content/coverage";
import { Container } from "@/components/ui/Container";
import { CoverageMap } from "./CoverageMap";
import styles from "./Coverage.module.css";

export function Coverage() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.titleRow}>
          <h2>Based in Dubai, working across the Gulf</h2>
          <span className={styles.rule} aria-hidden="true" />
        </div>
        <p className={styles.intro}>{coverage.intro}</p>

        <CoverageMap />

        <p className={styles.note}>{coverage.note}</p>
      </Container>
    </section>
  );
}