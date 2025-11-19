import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import { Footer } from "@/containers";
import { ThemeProvider } from "next-themes";
import AOSInit from "@/components/AOSInit";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default:
      "Asociación IPS Indígena Inga Kamentsa | Servicios de Salud del Alto Putumayo",
    template: "%s | IPS Inga Kamentsá",
  },
  description:
    "Asociación IPS Inga - Kamentsá. Servicios de salud integral del Alto Putumayo. Consulta médica general, Odontología, Medicina tradicional. Atención de calidad con identidad cultural.",
  keywords: [
    "IPS Inga Kamentsá",
    "ipsinka",
    "ipsinka sibundoy",
    "ipsinka alto putumayo",
    "ipsinka inga",
    "servicios salud Sibundoy",
    "medicina general Putumayo",
    "médicas Sibundoy",
    "consulta médica Putumayo",
    "IPS Sibundoy",
    "centro médico Putumayo",
    "atención médica integral",
    "salud Colombia",
    "consulta especializada",
    "servicios PQRS salud",

    "Sibundoy Putumayo",
    "Colón Putumayo",
    "Santiago Putumayo",
    "San Andrés Putumayo",
  ],
  authors: [{ name: "Asociación IPS Inga Kamentsá" }],
  creator: "Asociación IPS Inga Kamentsá",
  publisher: "Asociación IPS Inga Kamentsá",
  metadataBase: new URL("https://ipsinka.com"),
  openGraph: {
    title:
      "Asociación IPS Indígena Inga Kamentsa | Servicios de Salud del Alto Putumayo",
    description:
      "Servicios de salud integral del Alto Putumayo. Consulta médica general, Odontología, PQRS. Agenda tu cita. Atención de calidad con identidad cultural.",
    siteName: "Asociación IPS Indígena Inga Kamentsa",
    images: [
      {
        url: "https://ghx22gzm9l6t5pgk.public.blob.vercel-storage.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Asociación IPS Indígena Inga Kamentsa - Logo",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Asociación IPS Indígena Inga Kamentsa | Servicios de Salud del Alto Putumayo",
    description:
      "Servicios de salud integral del Alto Putumayo. Consulta médica, Odontología, Medicina tradicional. Atención de calidad con identidad cultural.",
    images: [
      "https://ghx22gzm9l6t5pgk.public.blob.vercel-storage.com/images/logo.jpg",
    ],
    creator: "@ips_inga",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Asociación IPS Indígena Inga Kamentsa",
  },
  other: {
    "apple-mobile-web-app-title": "Asociación IPS Indígena Inga Kamentsa",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "google-site-verification": "google66e0b63c9f25d263",
    "geo.region": "CO-PUT",
    "geo.placename": "Sibundoy, Putumayo",
    "geo.position": "1.149861;-76.832611",
    ICBM: "1.149861, -76.832611",
  },
};

export const viewport = {
  themeColor: "#0b3d2e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ipsinka.com/#organization",
        name: "Asociación IPS Indígena Inga Kamentsa",
        alternateName: "IPS Inga Kamentsá",
        url: "https://ipsinka.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://ghx22gzm9l6t5pgk.public.blob.vercel-storage.com/images/logo.jpg",
          width: "512",
          height: "512",
        },
        image: {
          "@type": "ImageObject",
          url: "https://ghx22gzm9l6t5pgk.public.blob.vercel-storage.com/images/logo.jpg",
          width: "512",
          height: "512",
        },
        sameAs: [
          "https://www.facebook.com/luisfernando.mutunbajoyjacacanamejoy",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+57-8-4206789",
          contactType: "customer service",
          areaServed: "CO",
          availableLanguage: ["Spanish"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Calle 15 N° 15-69",
          addressLocality: "Sibundoy",
          addressRegion: "Putumayo",
          addressCountry: "CO",
        },
      },
      {
        "@type": "MedicalOrganization",
        "@id": "https://ipsinka.com/#medical",
        name: "Asociación IPS Indígena Inga Kamentsa",
        description:
          "Institución Prestadora de Servicios de Salud del Alto Putumayo",
        medicalSpecialty: [
          "General Medicine",
          "Traditional Indigenous Medicine",
          "Emergency Services",
          "Preventive Care",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de Salud",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "Consulta Medicina General",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "Servicios de Urgencias",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "Consulta de Especialidades",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://ipsinka.com/#website",
        url: "https://ipsinka.com/",
        name: "Asociación IPS Indígena Inga Kamentsa",
        description:
          "Servicios de salud integral para toda la comunidad del Alto Putumayo",
        publisher: {
          "@id": "https://ipsinka.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://ipsinka.com/busqueda?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
        inLanguage: "es-CO",
        mainEntity: {
          "@type": "ItemList",
          name: "Navegación Principal",
          itemListElement: [
            {
              "@type": "SiteNavigationElement",
              name: "Servicios",
              url: "https://ipsinka.com/servicios",
              description:
                "Conoce nuestro portafolio completo de servicios de salud",
            },
            {
              "@type": "SiteNavigationElement",
              name: "Sedes",
              url: "https://ipsinka.com/sedes",
              description:
                "Nuestras sedes en Sibundoy, Colón, Santiago y San Andrés",
            },
            {
              "@type": "SiteNavigationElement",
              name: "Institucional",
              url: "https://ipsinka.com/institucional",
              description: "Historia, misión, visión y portafolio de servicios",
            },
            {
              "@type": "SiteNavigationElement",
              name: "Contacto",
              url: "https://ipsinka.com/contacto",
              description: "Contacta con nosotros para agendar citas",
            },
            {
              "@type": "SiteNavigationElement",
              name: "Directorio",
              url: "https://ipsinka.com/directorio",
              description: "Directorio completo de contactos",
            },
            {
              "@type": "SiteNavigationElement",
              name: "Eventos",
              url: "https://ipsinka.com/eventos",
              description: "Eventos programados y anuncios importantes",
            },
            {
              "@type": "SiteNavigationElement",
              name: "Atención al Usuario",
              url: "https://ipsinka.com/atencion-usuario",
              description: "PQRSF y Asociación de Usuarios",
            },
          ],
        },
      },
    ],
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AOSInit />

          {/* Patrón de marcas de agua */}
          <div className="watermark-pattern flex justify-center items-center">
            {/* <Image
              src="https://ghx22gzm9l6t5pgk.public.blob.vercel-storage.com/images/marca_agua.jpeg"
              alt=""
              className="watermark"
              aria-hidden="true"
              width={400}
              height={400}
            />
            <Image
              src="https://ghx22gzm9l6t5pgk.public.blob.vercel-storage.com/images/marca_agua.jpeg"
              alt=""
              className="watermark"
              aria-hidden="true"
              width={400}
              height={400}
            />
            <Image
              src="https://ghx22gzm9l6t5pgk.public.blob.vercel-storage.com/images/marca_agua.jpeg"
              alt=""
              className="watermark"
              aria-hidden="true"
              width={400}
              height={400}
            />
            <Image
              src="https://ghx22gzm9l6t5pgk.public.blob.vercel-storage.com/images/marca_agua.jpeg"
              alt=""
              className="watermark"
              aria-hidden="true"
              width={400}
              height={400}
            />
            <Image
              src="https://ghx22gzm9l6t5pgk.public.blob.vercel-storage.com/images/marca_agua.jpeg"
              alt=""
              className="watermark"
              aria-hidden="true"
              width={400}
              height={400}
            /> */}
            <Image
              src="https://ghx22gzm9l6t5pgk.public.blob.vercel-storage.com/images/marca_agua.jpeg"
              alt=""
              className="watermark"
              aria-hidden="true"
              width={400}
              height={400}
            />
            <Image
              src="https://ghx22gzm9l6t5pgk.public.blob.vercel-storage.com/images/marca_agua.jpeg"
              alt=""
              className="watermark"
              aria-hidden="true"
              width={400}
              height={400}
            />
          </div>

          <div className="watermark-container relative flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
