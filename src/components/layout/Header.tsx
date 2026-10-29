"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/content/site";
import { services } from "@/content/services";
import { contactLinks } from "@/lib/contact";
import { Container } from "@/components/ui/Container";
import { cx } from "@/lib/cx";
import styles from "./Header.module.css";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
);

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropClosed, setDropClosed] = useState(false);
  const close = () => setOpen(false);

  const listRef = useRef<HTMLUListElement>(null);
  const [bar, setBar] = useState<{ x: number; w: number } | null>(null);
  const measure = (el: HTMLElement | null) => (el ? { x: el.offsetLeft, w: el.offsetWidth } : null);
  const resetBar = () =>
    setBar(measure(listRef.current?.querySelector<HTMLElement>('[aria-current="page"]')?.closest("li") ?? null));
  useEffect(() => { resetBar(); }, [path]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cx(styles.header, scrolled && styles.scrolled)}>
      <Container className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label={`${site.shortName}, home`} onClick={close}>
          <img src="/images/logo.png" alt="Rahmos" height="54" />
          <span className={styles.word}>{site.shortName}</span>
         
        </Link>

        <button
          type="button"
          className={styles.burger}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <nav id="site-menu" aria-label="Main" className={cx(styles.nav, open && styles.open)}>
          <ul ref={listRef} className={styles.list} onMouseLeave={resetBar}>
            {nav.map((item) => (
              <li key={item.href} className={styles.item} onMouseLeave={() => setDropClosed(false)} onMouseEnter={(e) => setBar(measure(e.currentTarget))}
onFocus={(e) => setBar(measure(e.currentTarget))}>
                <Link
                  href={item.href}
                  className={styles.link}
                  aria-current={path.startsWith(item.href) ? "page" : undefined}
                  onClick={close}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg className={styles.caret} viewBox="0 0 12 12" aria-hidden="true">
                      <path d="m2.5 4.5 3.5 3.5 3.5-3.5" />
                    </svg>
                  )}
                </Link>

                {item.dropdown && (
                  <div className={cx(styles.menu, dropClosed && styles.menuClosed)}>
                    <ul className={styles.menuGrid}>
                      {services.map((s, i) => (
                        <li key={s.slug}>
                          <Link href={`/services/${s.slug}/`} onClick={(e) => { close(); setDropClosed(true); e.currentTarget.blur(); }}>
                            <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                            <span>
                              <strong>{s.title}</strong>
                              <small>{s.tags.join(" · ")}</small>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href="/services/" className={styles.all} onClick={close}>View all services &rarr;</Link>
                  </div>
                )}
              </li>
            ))}
            <li
  aria-hidden="true"
  className={styles.bar}
  style={bar ? { transform: `translateX(${bar.x}px)`, width: bar.w, opacity: 1 } : undefined}
/>
          </ul>

          <div className={styles.right}>
            <div className={styles.reach}>
              <p className={styles.ask}>Have any questions?</p>
              {contactLinks.phone ? (
                <a href={contactLinks.phone}><PhoneIcon />{site.contact.phone}</a>
              ) : (
                <span><PhoneIcon />Free first consultation</span>
              )}
              {contactLinks.email ? (
                <a href={contactLinks.email}><MailIcon />{site.contact.email}</a>
              ) : (
                <span><MailIcon />Reply within one business day</span>
              )}
            </div>
            <Link href="/contact/" className={styles.cta} onClick={close}>Enquire now</Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}