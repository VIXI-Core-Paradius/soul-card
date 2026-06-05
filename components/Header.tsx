"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/nav";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="group flex flex-col leading-tight">
          <span className="font-serif text-lg font-bold tracking-wide text-gold-bright">
            {SITE.title}
          </span>
          <span className="text-[0.65rem] tracking-[0.25em] text-muted">
            {SITE.titleJa}
          </span>
        </Link>

        {/* PC ナビ */}
        <nav className="hidden gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm tracking-widest transition-colors hover:text-gold-bright ${
                isActive(l.href) ? "text-gold-bright" : "text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* モバイル トグル */}
        <button
          aria-label="メニュー"
          className="md:hidden text-gold-bright"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-current mb-1.5" />
          <span className="block h-0.5 w-6 bg-current mb-1.5" />
          <span className="block h-0.5 w-6 bg-current" />
        </button>
      </div>

      {/* モバイル メニュー */}
      {open && (
        <nav className="flex flex-col border-t border-border md:hidden">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`px-5 py-3 text-sm tracking-widest ${
                isActive(l.href) ? "text-gold-bright" : "text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
