"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import Logo from "./Logo";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-secondary/20 glass shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-3 text-center">
        <div className="relative w-full">
          <Logo />
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-md p-1 md:hidden"
          >
            <FaBars className="text-xl text-primary" />
          </button>
        </div>
        <nav className="mt-4 hidden md:block" aria-label="Main">
          <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-6 p-0">
            {nav.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="text-sm font-medium text-primary/90 hover:text-secondary">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 md:hidden">
          <aside className="ml-auto flex h-full w-full max-w-xs flex-col bg-white p-5 shadow-xl">
            <button type="button" className="mb-4 self-start" onClick={() => setOpen(false)} aria-label="Close menu">
              <FaXmark className="text-2xl" />
            </button>
            <ul className="m-0 flex list-none flex-col gap-4 p-0">
              {nav.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} onClick={() => setOpen(false)} className="font-medium">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      )}
    </header>
  );
}
