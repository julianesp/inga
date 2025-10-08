import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import { Footer } from "@/containers";
import Breadcrumbs from "@/components/Breadcrumbs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "IPS INGA KAMËNTSÁ - Institución Prestadora de Servicios de Salud",
//   description:
//     "IPS INGA KAMËNTSÁ - Servicios de salud en Sibundoy, Colón, Santiago y San Andrés. Atención médica integral para la comunidad indígena.",
// };

export const metadata = {
  title: {
    default: "Inicio",
    template: "%s"
  },
  description: "🏥 IPS Salud Integral ➤ Servicios de salud integral en Sibundoy, Putumayo. ✅ Consulta médica general ✅ Urgencias ✅ Especialidades ✅ PQRS ☎️ Agenda tu cita",
  keywords: [
    "IPS salud",
    "servicios salud Sibundoy",
    "medicina general Putumayo",
    "urgencias médicas Sibundoy",
    "consulta médica Putumayo",
    "EPS Sibundoy",
    "centro médico Putumayo",
    "atención médica integral",
    "salud Colombia",
    "consulta especializada",
    "servicios PQRS salud",
    "agendar cita médica"
  ],
  authors: [{ name: "IPS Salud Integral" }],
  creator: "IPS Salud Integral",
  publisher: "IPS Salud Integral",
  metadataBase: new URL("https://ips-salud-integral.co"),
  alternates: {
    canonical: "https://ips-salud-integral.co"
  },
  openGraph: {
    title: "IPS Salud Integral | Servicios de Salud Sibundoy Putumayo",
    description: "🏥 IPS Salud Integral ➤ Servicios de salud integral en Sibundoy, Putumayo. ✅ Consulta médica general ✅ Urgencias ✅ Especialidades ✅ PQRS ☎️ Agenda tu cita",
    url: "https://ips-salud-integral.co",
    siteName: "IPS Salud Integral",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IPS Salud Integral - Servicios de Salud Sibundoy Putumayo"
      }
    ],
    locale: "es_CO",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "IPS Inga-Kamentsa | Medicina con Identidad Cultural",
    description: "🏥 Servicios de salud integral combinando medicina occidental con conocimientos ancestrales en Sibundoy, Putumayo",
    images: ["/twitter-image.jpg"],
    creator: "@ips_inga_kamentsá"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "IPS Salud Integral",
  },
  other: {
    "apple-mobile-web-app-title": "IPS Salud Integral",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "geo.region": "CO-PUT",
    "geo.placename": "Sibundoy, Putumayo",
    "geo.position": "1.149861;-76.832611",
    "ICBM": "1.149861, -76.832611"
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
        "@id": "https://ips-salud-integral.co/#organization",
        "name": "IPS Salud Integral",
        "alternateName": "Institución Prestadora de Servicios de Salud Valle de Sibundoy",
        "url": "https://ips-salud-integral.co",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ips-salud-integral.co/logo.png"
        },
        "sameAs": [
          "https://www.facebook.com/ips.salud.integral"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+57-8-4206789",
          "contactType": "customer service",
          "areaServed": "CO",
          "availableLanguage": ["Spanish"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Calle 15 N° 15-69",
          "addressLocality": "Sibundoy",
          "addressRegion": "Putumayo",
          "addressCountry": "CO"
        }
      },
      {
        "@type": "MedicalOrganization",
        "@id": "https://ips-salud-integral.co/#medical",
        "name": "IPS Salud Integral",
        "description": "Institución Prestadora de Servicios de Salud especializada en medicina occidental y tradicional indígena",
        "medicalSpecialty": [
          "General Medicine",
          "Traditional Indigenous Medicine",
          "Emergency Services",
          "Preventive Care"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios de Salud",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Consulta Medicina General"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Servicios de Urgencias"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Consulta de Especialidades"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://ips-salud-integral.co/#website",
        "url": "https://ips-salud-integral.co",
        "name": "IPS Salud Integral",
        "description": "Servicios de salud integral para toda la comunidad",
        "publisher": {
          "@id": "https://ips-salud-integral.co/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://ips-salud-integral.co/busqueda?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "inLanguage": "es-CO",
        "mainEntity": {
          "@type": "ItemList",
          "name": "Navegación Principal",
          "itemListElement": [
            {
              "@type": "SiteNavigationElement",
              "name": "Servicios",
              "url": "https://ips-salud-integral.co/servicios",
              "description": "Conoce nuestro portafolio completo de servicios de salud"
            },
            {
              "@type": "SiteNavigationElement",
              "name": "Sedes",
              "url": "https://ips-salud-integral.co/sedes",
              "description": "Nuestras sedes en Sibundoy, Colón, Santiago y San Andrés"
            },
            {
              "@type": "SiteNavigationElement",
              "name": "Institucional",
              "url": "https://ips-salud-integral.co/institucional",
              "description": "Historia, misión, visión y portafolio de servicios"
            },
            {
              "@type": "SiteNavigationElement",
              "name": "Contacto",
              "url": "https://ips-salud-integral.co/contacto",
              "description": "Contacta con nosotros para agendar citas"
            },
            {
              "@type": "SiteNavigationElement",
              "name": "Directorio",
              "url": "https://ips-salud-integral.co/directorio",
              "description": "Directorio completo de contactos"
            },
            {
              "@type": "SiteNavigationElement",
              "name": "Eventos",
              "url": "https://ips-salud-integral.co/eventos",
              "description": "Eventos programados y anuncios importantes"
            },
            {
              "@type": "SiteNavigationElement",
              "name": "Atención al Usuario",
              "url": "https://ips-salud-integral.co/atencion-usuario",
              "description": "PQRSF y Asociación de Usuarios"
            }
          ]
        }
      }
    ]
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <Navbar />
        <Breadcrumbs />
        {children}
        <Footer />
      </body>
    </html>
  );
}
