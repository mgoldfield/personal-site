import Link from "next/link";
import styles from "../page.module.css";

export function isProduction() {
  return process.env.NODE_ENV === "production";
}

export function Title() {
  const homeLink = isProduction() ? "https://mattg.xyz" : "localhost::3000";
  return (
    <div className={styles.headerTitle}>
      <Link href={homeLink} className={styles.headerTitle}>
        Matthew Goldfield
      </Link>
    </div>
  );
}


