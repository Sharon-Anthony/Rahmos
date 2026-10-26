import styles from "./SectionHeading.module.css";

type Props = { title: string; lead?: string; tone?: "light" | "dark" };

export function SectionHeading({ title, lead, tone = "light" }: Props) {
  return (
    <header className={`${styles.head} ${tone === "dark" ? styles.dark : ""}`}>
      <h2>{title}</h2>
      {lead && <p>{lead}</p>}
    </header>
  );
}
