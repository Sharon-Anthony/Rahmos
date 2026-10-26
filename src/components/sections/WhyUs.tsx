"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { whyUs, whyUsTitle } from "@/content/whyUs";
import { Container } from "@/components/ui/Container";
import styles from "./WhyUs.module.css";

const k = (n: number) => ({ "--k": n }) as CSSProperties;

export function WhyUs() {
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
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.section} data-inview={inView}>
      <Container>
        <div className={styles.titleRow}>
          <h2 className={styles.title}>
            {whyUsTitle.map((word, i) => (
              <span key={word} className={styles.mask}>
                <span className={`${styles.word} ${i === whyUsTitle.length - 1 ? styles.gold : ""}`} style={k(i)}>
                  {word}
                </span>
              </span>
            ))}
          </h2>
          <span className={styles.rule} aria-hidden="true" />
        </div>

        <ul className={styles.list}>
          {whyUs.map((w, i) => (
            <li key={w.title} style={k(i)}>
              <svg className={styles.check} viewBox="0 0 20 20" aria-hidden="true">
                <path pathLength={1} d="M3.5 10.5 8 15l8.5-9.5" />
              </svg>
              <div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}