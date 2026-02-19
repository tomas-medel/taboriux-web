import { serviceItems } from "./content";
import { Container } from "./shared/container";

const icons = [
  "M5 17L12 6L19 17M9 13H15",
  "M5 9H19M8 13H16M10 17H14",
  "M12 4L18 7V12C18 16.2 15.4 19.8 12 21C8.6 19.8 6 16.2 6 12V7L12 4Z"
] as const;

export function Services() {
  return (
    <Container id="servicios" className="py-24">
      <div className="mb-10 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200/90">
          Servicios
        </p>
        <h2 className="font-[var(--font-space)] text-3xl font-bold text-white md:text-4xl">
          Para la innovación, comodidad y seguridad de tu empresa
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {serviceItems.map((item, index) => (
          <article
            key={item.title}
            className="depth-card glass-sheen group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a1636]/95 via-[#101a3c]/90 to-[#1b1141]/85 p-7 shadow-soft hover:border-cyan-300/45 hover:shadow-glow"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-300/20 blur-2xl opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none absolute -left-12 bottom-0 h-24 w-24 rounded-full bg-violet-400/25 blur-2xl transition duration-500 group-hover:scale-125" />

            <div className="depth-layer relative z-10 mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-200/30 bg-cyan-300/10 text-cyan-200 transition group-hover:bg-cyan-300/20">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-none stroke-current stroke-[1.8] transition-transform duration-500 group-hover:scale-110"
              >
                <path d={icons[index]} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="depth-layer relative z-10 mb-3 text-xl font-semibold text-white">{item.title}</h3>
            <p className="depth-layer relative z-10 text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}
