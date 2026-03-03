import Link from "next/link";
import { ReactNode } from "react";

function HeaderNavLink({
  children: title,
  href,
}: {
  children: string | ReactNode;
  href: string;
}) {
  const isExternal = href.startsWith('http');
  return (
    <Link 
      className="text-stone-300 hover:text-white transition-colors duration-200 font-medium" 
      href={href}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {title}
    </Link>
  );
}

export function HeaderNav() {
  return (
    <nav className="border-b border-navy-light sticky top-0 z-50 backdrop-blur-sm bg-navy/95">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold text-white hover:text-amber-400 transition-colors duration-200"
          >
            Matthew Goldfield
          </Link>
          <div className="flex items-center space-x-5 sm:space-x-8">
            <HeaderNavLink href="/about">About</HeaderNavLink>
            <HeaderNavLink href="/projects">Projects</HeaderNavLink>
            <HeaderNavLink href="/blog">Blog</HeaderNavLink>
            <HeaderNavLink href="https://github.com/mgoldfield">GitHub</HeaderNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

