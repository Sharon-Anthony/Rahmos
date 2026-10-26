import Link from "next/link";
import { cx } from "@/lib/cx";
import styles from "./Button.module.css";

type Props = {
  href: string;
  variant?: "solid" | "outline";
  tone?: "light" | "dark"; // surface the button sits on
  external?: boolean;
  children: React.ReactNode;
};

export function Button({ href, variant = "solid", tone = "light", external, children }: Props) {
  const className = cx(styles.btn, styles[variant], styles[tone]);
  return external ? (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}</a>
  ) : (
    <Link className={className} href={href}>{children}</Link>
  );
}
