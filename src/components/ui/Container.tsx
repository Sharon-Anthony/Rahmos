import { cx } from "@/lib/cx";
import styles from "./Container.module.css";

type Props = React.HTMLAttributes<HTMLDivElement> & { narrow?: boolean };

export function Container({ narrow, className, ...rest }: Props) {
  return <div className={cx(styles.container, narrow && styles.narrow, className)} {...rest} />;
}
