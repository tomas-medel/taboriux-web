import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { MouseLight } from "@/components/mouse-light";
import { Navbar } from "@/components/navbar";
import { SceneEffects } from "@/components/scene-effects";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ScrollLab } from "@/components/scroll-lab";
import { Services } from "@/components/services";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Taboriux",
    url: "https://taboriux.com",
    logo: "https://taboriux.com/logo.png",
    image: "https://taboriux.com/logo.png",
    description:
      "Empresa tecnologica especializada en desarrollo de software, automatizacion inteligente y seguridad para empresas.",
    areaServed: "MX",
    sameAs: ["https://instagram.com/taboriux"],
    knowsAbout: [
      "Desarrollo de software a medida",
      "Automatizacion de procesos",
      "Arquitectura de software",
      "Ciberseguridad empresarial",
      "Transformacion digital"
    ]
  };

  return (
    <main className="relative overflow-hidden pt-28 md:pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SceneEffects />
      <MouseLight />
      <ScrollReveal />
      <Navbar />
      <section>
        <Hero />
      </section>
      <section className="reveal-on-scroll section-divider">
        <Services />
      </section>
      <section className="reveal-on-scroll section-divider">
        <ScrollLab />
      </section>
      <section className="reveal-on-scroll section-divider">
        <FinalCTA />
      </section>

      <Footer />
    </main>
  );
}
