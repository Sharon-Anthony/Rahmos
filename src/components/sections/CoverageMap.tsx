"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { coverage } from "@/content/coverage";
import { coverageIcons } from "@/components/icons/CoverageIcons";
import styles from "./CoverageMap.module.css";

// Feeds the cursor position to CSS so each card can light up under the pointer.
const spotlight = (e: PointerEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

export function CoverageMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [hq, ...regional] = coverage.markets;
  const HqIcon = coverageIcons[hq.icon];

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
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.map} data-inview={inView}>
      <article className={styles.hq} onPointerMove={spotlight}>
        <div className={styles.clip} aria-hidden="true">
          <span className={styles.orbit} />
          <span className={styles.glow} />
        </div>

        <div className={styles.hqIcon}>
          <HqIcon className={styles.icon} />
        </div>

        <div className={styles.hqText}>
          <p className={styles.badge}><span className={styles.pulse} aria-hidden="true" />{hq.role}</p>
          <h3>{hq.name}</h3>
        </div>

        <span className={styles.hqCode} aria-hidden="true">{hq.code}</span>
      </article>

      <ul className={styles.row}>
        {regional.map((m, i) => {
          const Icon = coverageIcons[m.icon];
          return (
            <li key={m.name} className={styles.card} style={{ "--k": i } as CSSProperties} onPointerMove={spotlight}>
              <span className={styles.glow} aria-hidden="true" />
              <span className={styles.code}>{m.code}</span>
              <Icon className={styles.icon} />
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}