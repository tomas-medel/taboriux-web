import Link from "next/link";
import { ExplodedKeyboard3D } from "./exploded-keyboard-3d";
import { Container } from "./shared/container";

export function Hero() {
  return (
    <Container id="inicio" className="relative overflow-hidden pb-24 pt-20 md:pb-28 md:pt-28">
      <div className="shape-drift-a pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-300/25 blur-[120px]" />
      <div className="shape-drift-b pointer-events-none absolute -right-24 top-6 h-80 w-80 rounded-full bg-violet-500/25 blur-[130px] animate-shimmer" />

      <div className="relative z-10 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div className="space-y-7">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/90">
            Innovacion sin limites, confianza total
          </p>
          <h1 className="animate-fade-up font-[var(--font-space)] text-4xl font-bold leading-tight text-white md:text-6xl">
            Tecnología que transforma desafíos en oportunidades
          </h1>
          <p className="animate-fade-up max-w-2xl text-lg text-slate-300 md:text-xl">
          Somos una empresa tecnológica que desafía lo convencional. No nos limitamos
          a soluciones existentes: diseñamos y desarrollamos sistemas innovadores y
          seguros, adaptados a las necesidades de cada organización. Actuamos con
          creatividad, estrategia y compromiso en cada proyecto.
          </p>

          <div className="animate-fade-up flex flex-wrap gap-4">
            <Link
              href="#contacto"
              className="cta-primary rounded-full px-7 py-3 text-sm font-bold text-slate-900 transition duration-300 hover:-translate-y-1"
            >
              Trabajemos juntos
            </Link>
            <Link
              href="#servicios"
              className="rounded-full border border-cyan-200/40 bg-slate-900/40 px-7 py-3 text-sm font-semibold text-cyan-100 transition duration-300 hover:border-cyan-200/70 hover:bg-slate-900/80"
            >
              Conocer servicios
            </Link>
          </div>

          <div className="grid max-w-3xl gap-4 pt-3 sm:grid-cols-2">
            <div className="glass-panel px-5 py-4">
              <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/85">Misión</p>
              <p className="mt-1 text-sm font-semibold text-white">Impulsar a las organizaciones a través de soluciones informáticas innovadoras y seguras, adaptándonos a cualquier desafío y convirtiéndolo en una oportunidad de crecimiento.</p>
            </div>
            <div className="glass-panel px-5 py-4">
              <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/85">Visión</p>
              <p className="mt-1 text-sm font-semibold text-white">Ser una empresa referente en soluciones tecnológicas innovadoras y seguras, reconocida por nuestra capacidad de adaptación, excelencia y compromiso en cada proyecto.</p>
            </div>
          </div>
        </div>

        <div className="relative flex h-[460px] items-center justify-center [perspective:1400px]">
          <div className="shape-drift-c absolute h-96 w-96 rounded-full border border-cyan-300/25 bg-cyan-300/10 blur-[1px] animate-spin-slow" />
          <div className="shape-orbit absolute h-72 w-72 rotate-45 rounded-[28%] border border-violet-300/35 bg-violet-400/15 animate-float-y" />
          <ExplodedKeyboard3D />
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
        </div>
      </div>
    </Container>
  );
}

