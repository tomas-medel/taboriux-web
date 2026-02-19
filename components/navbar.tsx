"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "./content";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#040b1fcc]/90 backdrop-blur-xl">
      <nav className="mx-auto w-full max-w-6xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between gap-3">
          <Link href="#inicio" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Image src="/logo.png" alt="Taboriux" width={42} height={42} priority />
            <span className="font-[var(--font-space)] text-xl font-semibold tracking-wide text-white">
              Taboriux
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-200/85 transition hover:text-taboriux-bright"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="#contacto"
            className="hidden rounded-full border border-cyan-300/40 bg-cyan-300/20 px-5 py-2.5 text-sm font-semibold text-cyan-100 shadow-glow transition hover:-translate-y-0.5 hover:bg-cyan-300/30 md:inline-flex"
            onClick={() => setOpen(false)}
          >
            Agendar reunion
          </Link>

          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-200/30 bg-slate-900/50 text-cyan-100 md:hidden"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-white/10 transition-[max-height,opacity] duration-300 md:hidden ${
            open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-3 py-3">
            {navLinks.map((link) => (
              <Link
                key={`mobile-${link.href}`}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-200/85 transition hover:text-taboriux-bright"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex w-fit rounded-full border border-cyan-300/40 bg-cyan-300/20 px-4 py-2 text-sm font-semibold text-cyan-100"
            >
              Agendar reunion
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
