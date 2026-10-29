"use client";
import { useEffect, useState } from "react";
import styles from "./Loader.module.css";

export function Loader() {
  const [hide, setHide] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHide(true), 1800);
    const t2 = setTimeout(() => setGone(true), 2700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (gone) return null;
  return (
    <div className={`${styles.loader} ${hide ? styles.hide : ""}`} role="status" aria-label="Loading">
      <div className={`${styles.panel} ${styles.top}`} />
      <div className={`${styles.panel} ${styles.bottom}`} />
      <div className={styles.content}>
        <img src="/images/logo.png" alt="Rahmos" height="64" className={styles.logo} />
        <span className={styles.tag}>Corporate Services &middot; UAE &amp; GCC</span>
        <span className={styles.line}><i /></span>
      </div>
    </div>
  );
}