"use client";

import { Fragment, useEffect, useRef, useState, type CSSProperties } from "react";
import { site } from "@/content/site";
import { contactLinks } from "@/lib/contact";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import styles from "./CallBand.module.css";

const words = ["Tell", "us", "what", "you", "are", "building."];
const k = (n: number) => ({ "--k": n }) as CSSProperties;

export function CallBand() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.band} data-inview={inView}>
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.kicker}>
            <span className={styles.line} aria-hidden="true" />
            Free first consultation
          </p>

          <h2 className={styles.title}>
            {words.map((w, i) => (
              <Fragment key={w}>
                <span className={styles.mask}>
                  <span className={styles.word} style={k(i)}>{w}</span>
                </span>{" "}
              </Fragment>
            ))}
          </h2>

          <p className={styles.sub}>
            A short call is enough. Tell us your activity, who owns the company and how many visas you need,
            and we will come back with clear options and costs.
          </p>

          <div className={styles.actions}>
            <Button href="/contact/" tone="dark">Book a consultation</Button>
            {contactLinks.phone && (
              <a href={contactLinks.phone} className={styles.call}>
                <small>or call</small>
                {site.contact.phone}
              </a>
            )}
          </div>
        </div>

        <figure className={styles.photo}>
          <img src="/images/cta.jpg" alt="A Rahmos consultant going through documents with a client" width={1000} height={1250} />
          <figcaption className={styles.note}>
            <span aria-hidden="true" />
            <span>
              <strong>Reply within one business day</strong>
              Every enquiry is read by a person.
            </span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}