import { Container } from "./shared/container";
import { processSteps } from "./content";

export function ScrollLab() {
  return (
    <Container className="py-8 md:py-16">
      <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-[#050b1f]/60 p-6 backdrop-blur-xl md:grid-cols-[1.1fr_1fr] md:p-10">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200/90">
            Proceso
          </p>
          <h2 className="font-[var(--font-space)] text-3xl font-bold text-white md:text-5xl">
            Método claro para resultados extraordinarios
          </h2>
          <p className="max-w-xl text-slate-300">
            Ejecutamos cada etapa con orden técnico, enfoque estratégico y criterio de negocio
            para asegurar resultados medibles desde el primer sprint.
          </p>

          <div className="grid gap-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="glass-panel p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-cyan-200/90">
                  {index + 1}. {step.title}
                </p>
                <p className="mt-1 text-sm text-slate-200">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden min-h-[420px] items-center justify-center [perspective:1200px] md:flex">
          <div className="holo-ring holo-ring-a" />
          <div className="holo-ring holo-ring-b" />
          <div className="obj-core obj-core-a" />
          <div className="obj-core obj-core-b" />
          <div className="obj-core obj-core-c" />
          <div className="absolute bottom-8 left-1/2 h-28 w-52 -translate-x-1/2 rounded-full bg-cyan-300/12 blur-2xl" />
        </div>
      </div>
    </Container>
  );
}
