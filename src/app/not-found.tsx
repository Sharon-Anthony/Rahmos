import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.wrap}>
      <Container>
        <p className={styles.code}>404</p>
        <h1>This page could not be found</h1>
        <p className={styles.text}>
          The page you are looking for may have moved or no longer exists.
        </p>
        <div className={styles.actions}>
          <Button href="/">Back to home</Button>
          <Button href="/contact/" variant="outline">Contact us</Button>
        </div>
      </Container>
    </section>
  );
}