import Image from "next/image";
import Link from "next/link";
import { Container } from "./shared/container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#020510]">
      <Container className="py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Taboriux" width={34} height={34} />
            <span className="font-[var(--font-space)] text-lg font-semibold text-white">Taboriux</span>
          </div>
          <div className="space-y-2 text-sm text-slate-300 md:text-right">
            <p>Redes Sociales</p>
            <div className="pt-1 md:flex md:justify-end">
              <Link
                href="https://instagram.com/taboriux"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Taboriux"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-200/30 bg-cyan-300/10 text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/20"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-slate-400">
          © {currentYear} Taboriux. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}
