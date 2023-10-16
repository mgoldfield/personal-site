import Link from "next/link";
import styles from "./page.module.css";

export function isProduction() {
  return process.env.NODE_ENV === "production";
}

export function Title() {
  const homeLink = isProduction() ? "https://mattg.xyz" : "localhost::3000";
  return (
    <div className="header-title">
      <Link href={homeLink}>Matthew Goldfield</Link>
    </div>
  );
}

function HeaderNavLink({
  children: title,
  href,
}: {
  children: string;
  href: string;
}) {
  return (
    <Link className={styles.headerNavLink} href={href}>
      {title}
    </Link>
  );
}

export function HeaderNav() {
  return (
    <nav className="header-nav">
      <HeaderNavLink href="./about">About</HeaderNavLink>
      <HeaderNavLink href="./projects">Projects</HeaderNavLink>
      <HeaderNavLink href="./blog">Blog</HeaderNavLink>
      <HeaderNavLink href="https://github.com/mgoldfield">Github</HeaderNavLink>
    </nav>
  );
}
