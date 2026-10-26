"use client";

import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { process as stages } from "@/content/process";
import { processIcons } from "@/components/icons/ProcessIcons";
import { cx } from "@/lib/cx";
import styles from "./ProcessStepper.module.css";

const last = stages.length - 1;

export function ProcessStepper() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [inView, setInView] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);

  // Start the walkthrough only once the section is actually on screen.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const go = (next: number) => {
    const n = (next + stages.length) % stages.length; // wraps around, so the walkthrough loops
    if (n === active) return;
    setDir(next > active ? 1 : -1);
    setActive(n);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const map: Record<string, number> = {
      ArrowRight: active + 1,
      ArrowDown: active + 1,
      ArrowLeft: active - 1,
      ArrowUp: active - 1,
      Home: 0,
      End: last,
    };
    if (!(e.key in map)) return;
    e.preventDefault();
    const n = Math.max(0, Math.min(last, map[e.key]));
    go(n);
    tabs.current[n]?.focus();
  };

  const autoplay = inView;
  const step = stages[active];
  const Icon = processIcons[step.icon];
  const next = stages[(active + 1) % stages.length];

  return (
    <div
      ref={root}
      className={styles.stepper}
      data-inview={inView}
      style={{ "--i": active, "--last": last } as CSSProperties}
    >
      <div className={styles.rail}>
        <div className={styles.track} aria-hidden="true">
          <div className={styles.fill} />
        </div>

        <ol className={styles.nodes} role="tablist" aria-label="Our process" onKeyDown={onKeyDown}>
          {stages.map((s, i) => {
            const NodeIcon = processIcons[s.icon];
            const state = i === active ? styles.active : i < active ? styles.done : "";
            return (
              <li key={s.label} style={{ "--k": i } as CSSProperties}>
                <button
                  ref={(el) => { tabs.current[i] = el; }}
                  role="tab"
                  id={`proc-tab-${i}`}
                  aria-selected={i === active}
                  aria-controls="proc-panel"
                  tabIndex={i === active ? 0 : -1}
                  className={cx(styles.node, state)}
                  onClick={() => go(i)}
                >
                  {i === active && autoplay && (
                    <svg className={styles.ring} viewBox="0 0 100 100" aria-hidden="true">
                      <circle
                        className={styles.arc}
                        cx="50" cy="50" r="48" pathLength={1}
                        onAnimationEnd={() => go(active + 1)}
                      />
                    </svg>
                  )}
                  <NodeIcon className={styles.nodeIcon} />
                </button>
                <span className={cx(styles.label, i === active && styles.labelActive)}>{s.label}</span>
              </li>
            );
          })}
        </ol>
      </div>

      <div className={styles.panelWrap}>
        <span className={styles.notch} aria-hidden="true" />
        <div
          id="proc-panel"
          role="tabpanel"
          aria-labelledby={`proc-tab-${active}`}
          className={styles.panel}
        >
          
          <div key={active} className={styles.content} style={{ "--dx": `${dir * 28}px` } as CSSProperties}>
            <span className={styles.ghost} aria-hidden="true">{String(active + 1).padStart(2, "0")}</span>

            <div className={styles.badge} aria-hidden="true">
              <Icon className={styles.badgeIcon} />
            </div>

            <div className={styles.copy}>
              <p className={styles.kicker}>Stage {active + 1} of {stages.length}</p>
              <h3>{step.title}</h3>
              <p className={styles.text}>{step.text}</p>
            </div>
          </div>

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.arrow}
              onClick={() => go(active - 1)}
              aria-label="Previous stage"
            >
              <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M12 4 6 10l6 6" /></svg>
            </button>
            <button
              type="button"
              className={cx(styles.arrow, styles.arrowNext)}
              onClick={() => go(active + 1)}
              aria-label={`Next stage: ${next.label}`}
            >
              <span>Next: {next.label}</span>
              <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m8 4 6 6-6 6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}