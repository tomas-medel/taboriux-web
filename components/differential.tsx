import { differentiators } from "./content";
import { Container } from "./shared/container";

export function Differential() {
  return (
    <Container className="py-24">
      <div className="rounded-3xl border border-white/10 bg-[#040d23]/85 p-8 shadow-soft md:p-12">
        <h2 className="mb-6 font-[var(--font-space)] text-3xl font-bold text-white md:text-4xl">
          No solo desarrollamos. Transformamos.
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {differentiators.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(84,197,255,0.9)]" />
              <p className="font-medium text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
