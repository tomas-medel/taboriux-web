import { Container } from "./shared/container";
import Link from "next/link";

export function FinalCTA() {
  return (
    <Container id="contacto" className="pb-24 pt-10">
      <div className="relative overflow-hidden rounded-[2rem] border border-cyan-200/20 bg-gradient-to-r from-[#130f35] via-[#1b1141] to-[#150d30] p-10 shadow-soft md:p-14">
        <div className="pointer-events-none absolute -left-16 top-0 h-52 w-52 rounded-full bg-cyan-300/20 blur-[90px]" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-52 w-52 rounded-full bg-cyan-300/20 blur-[90px]" />
        <div className="relative z-10 space-y-6 text-center">
          <h2 className="font-[var(--font-space)] text-3xl font-bold text-white md:text-5xl">
            El futuro digital no se espera. Se construye.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-200/90">
            ¿Querés trabajar conmigo, colaborar o simplemente charlar? ¡Estoy siempre abierto a nuevas oportunidades!
          </p>

          <Link
            href="https://taboriux.getform.com/58ok5"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-2 inline-flex rounded-full bg-cyan-300 px-8 py-3 text-base font-bold text-slate-900 shadow-glow transition hover:-translate-y-0.5 hover:bg-cyan-200"
          >
            Enviar mensaje
          </Link>
        </div>
      </div>
    </Container>
  );
}
