import { processSteps } from "./content";
import { Container } from "./shared/container";

export function Process() {
  return (
    <Container id="proceso" className="py-24">
      <div className="mb-12 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200/90">
          Proceso
        </p>
        <h2 className="font-[var(--font-space)] text-3xl font-bold text-white md:text-4xl">
          Metodo claro para resultados extraordinarios
        </h2>
      </div>

      <div className="relative grid gap-6 md:grid-cols-3">
        <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-cyan-400/0 via-cyan-300/40 to-cyan-400/0 md:block" />
        {processSteps.map((step, index) => (
          <article
            key={step.title}
            className="depth-card group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/45 p-7 backdrop-blur-sm hover:border-cyan-300/35"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-cyan-300/20 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="depth-layer relative z-10 mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-200/40 bg-cyan-200/10 text-sm font-bold text-cyan-100">
              {index + 1}
            </div>
            <h3 className="depth-layer relative z-10 mb-3 text-xl font-semibold text-white">{step.title}</h3>
            <p className="depth-layer relative z-10 text-slate-300">{step.description}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}
