import Link from "next/link";
import { ReactNode } from "react";

function HeaderNavLink({
  children: title,
  href,
}: {
  children: string | ReactNode;
  href: string;
}) {
  return (
    <Link className="text-white/90  no-underline hover:text-white" href={href}>
      {title}
    </Link>
  );
}

export function HeaderNav() {
  return (
    <nav className="bg-slate-600 p-2 sticky drop-shadow-xl ">
      <div className="text-center underline decoration-double"><Link href="/">Matthew Goldfield</Link></div>
      <div className="prose prose-xl mx-auto flex justify-between flex-row">
        <HeaderNavLink href="/about">About</HeaderNavLink>
        <HeaderNavLink href="/projects">Projects</HeaderNavLink>
        <HeaderNavLink href="/blog">Blog</HeaderNavLink>
        <HeaderNavLink href="https://github.com/mgoldfield">Github</HeaderNavLink>
      </div>

    </nav>
  );
}

