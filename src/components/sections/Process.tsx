import { Container } from "@/components/ui/Container";
import { ProcessStepper } from "./ProcessStepper";
import styles from "./Process.module.css";

export function Process() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.head}>
          <div className={styles.titleRow}>
            <h2>How We Work &mdash; Our Process</h2>
            <span className={styles.rule} aria-hidden="true" />
          </div>
          <p>Five stages, and you always know which one you are in. Tap any stage to see what happens in it.</p>
        </div>
        <ProcessStepper />
      </Container>
    </section>
  );
}