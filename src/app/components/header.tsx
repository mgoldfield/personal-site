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
      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium" 
      href={href}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {title}
    </Link>
  );
}

export function HeaderNav() {
  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 backdrop-blur-sm bg-white/95 dark:bg-slate-900/95">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Matthew Goldfield
          </Link>
          <div className="flex items-center space-x-8">
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

