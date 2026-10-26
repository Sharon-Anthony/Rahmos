import { Container } from "./Container";
import styles from "./PageHeader.module.css";

export function PageHeader({ title, lead }: { title: string; lead?: string }) {
  return (
    <section className={styles.band}>
      <div className={styles.circle} aria-hidden="true" />
      <Container>
        <h1>{title}</h1>
        {lead && <p>{lead}</p>}
      </Container>
    </section>
  );
}
