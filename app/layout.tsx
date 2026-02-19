import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  preload: false
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taboriux.com"),
  title: {
    default: "Taboriux",
    template: "%s | Taboriux"
  },
  description:
    "Taboriux ayuda a empresas a acelerar su transformacion digital con desarrollo de software, automatizacion inteligente, arquitectura escalable y seguridad tecnologica.",
  keywords: [
    "soluciones digitales para empresas",
    "empresa de tecnologia",
    "empresa de desarrollo de software",
    "software empresarial",
    "desarrollo de software a medida",
    "desarrollo web empresarial",
    "desarrollo de apps",
    "integraciones de sistemas",
    "integracion de APIs",
    "automatizacion inteligente",
    "automatizacion de procesos",
    "automatizacion empresarial",
    "optimizacion operativa",
    "seguridad informatica empresarial",
    "ciberseguridad para empresas",
    "seguridad de aplicaciones",
    "seguridad desde el diseno",
    "transformacion digital",
    "arquitectura de software",
    "arquitectura escalable",
    "consultoria tecnologica",
    "consultoria TI",
    "modernizacion de sistemas legacy",
    "innovacion digital",
    "servicios tecnologicos B2B",
    "soluciones de software en Mexico",
    "Taboriux"
  ],
  applicationName: "Taboriux",
  authors: [{ name: "Taboriux" }],
  creator: "Taboriux",
  publisher: "Taboriux",
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    type: "website",
    url: "https://taboriux.com",
    title: "Taboriux | Soluciones Digitales para Empresas",
    description:
      "Software, automatizacion y seguridad para empresas que buscan crecimiento, eficiencia y ventaja competitiva.",
    siteName: "Taboriux",
    locale: "es_MX",
    alternateLocale: ["es_ES", "en_US"],
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Logo de Taboriux"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Taboriux | Tecnologia Estrategica para Empresas",
    description:
      "Impulsamos a empresas con soluciones digitales de alto nivel: software, automatizacion y seguridad.",
    images: ["/logo.png"]
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: ["/logo.png"],
    apple: [{ url: "/logo.png" }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-[var(--font-inter)]`}>
        {children}
      </body>
    </html>
  );
}
