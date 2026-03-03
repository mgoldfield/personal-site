import "../styles/globals.css";
import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import { Inter, Crimson_Pro } from "next/font/google";
import { HeaderNav } from "./components/header";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson-pro',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Matthew Goldfield",
  description: "Personal website and blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${crimsonPro.variable} dark:bg-slate-800 min-h-screen flex flex-col`}>
        <header>
          <HeaderNav />
        </header>
        <div className="flex-1">
          {children}
        </div>
        <footer className="border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Matthew Goldfield
          </div>
        </footer>
      </body>
    </html>
  );
}
