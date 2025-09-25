import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import { Footer } from "@/containers";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
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
  description: "🏥 IPS Inga-Kamentsa ➤ Servicios de salud integral en Sibundoy, Putumayo. Medicina occidental + tradicional indígena. ✅ Consulta médica general ✅ Urgencias ✅ Especialidades ✅ PQRS ☎️ Agenda tu cita",
  keywords: [
    "IPS Inga Kamentsa",
    "servicios salud Sibundoy",
    "medicina general Putumayo",
    "urgencias médicas Sibundoy",
    "consulta médica Putumayo",
    "medicina tradicional indígena",
    "EPS Sibundoy",
    "centro médico Putumayo",
    "atención médica integral",
    "salud indígena Colombia",
    "medicina ancestral",
    "consulta especializada",
    "servicios PQRS salud",
    "agendar cita médica"
  ],
  authors: [{ name: "IPS Inga-Kamentsa" }],
  creator: "IPS Inga-Kamentsa",
  publisher: "IPS Inga-Kamentsa",
  metadataBase: new URL("https://ips-inga-kamentsá.co"),
  alternates: {
    canonical: "https://ips-inga-kamentsá.co",
    languages: {
      'es-CO': 'https://ips-inga-kamentsá.co',
      'ik': 'https://ips-inga-kamentsá.co'
    }
  },
  openGraph: {
    title: "IPS Inga-Kamentsa | Servicios de Salud Integral Sibundoy Putumayo",
    description: "🏥 IPS Inga-Kamentsa ➤ Servicios de salud integral en Sibundoy, Putumayo. Medicina occidental + tradicional indígena. ✅ Consulta médica general ✅ Urgencias ✅ Especialidades ✅ PQRS ☎️ Agenda tu cita",
    url: "https://ips-inga-kamentsá.co",
    siteName: "IPS Inga-Kamentsa",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IPS Inga-Kamentsa - Servicios de Salud Integral Sibundoy Putumayo"
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
    title: "IPS Inga-Kamentsa",
  },
  other: {
    "apple-mobile-web-app-title": "IPS Inga-Kamentsa",
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
        "@id": "https://ips-inga-kamentsá.co/#organization",
        "name": "IPS Inga-Kamentsa",
        "alternateName": "Asociación IPS Indígena Inga-Kamentsa Valle de Sibundoy",
        "url": "https://ips-inga-kamentsá.co",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ips-inga-kamentsá.co/logo.png"
        },
        "sameAs": [
          "https://www.facebook.com/ips.inga.kamentsá"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+57-8-4206789",
          "contactType": "customer service",
          "areaServed": "CO",
          "availableLanguage": ["Spanish", "Inga"]
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
        "@id": "https://ips-inga-kamentsá.co/#medical",
        "name": "IPS Inga-Kamentsa",
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
                "name": "Medicina Tradicional Indígena"
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
        "@id": "https://ips-inga-kamentsá.co/#website",
        "url": "https://ips-inga-kamentsá.co",
        "name": "IPS Inga-Kamentsa",
        "description": "Servicios de salud integral combinando medicina occidental con conocimientos ancestrales de los pueblos Inga y Kamëntsá",
        "publisher": {
          "@id": "https://ips-inga-kamentsá.co/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://ips-inga-kamentsá.co/busqueda?q={search_term_string}",
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
              "url": "https://ips-inga-kamentsá.co/servicios",
              "description": "Conoce nuestro portafolio completo de servicios de salud"
            },
            {
              "@type": "SiteNavigationElement",
              "name": "Sedes",
              "url": "https://ips-inga-kamentsá.co/sedes",
              "description": "Nuestras sedes en Sibundoy, Colón, Santiago y San Andrés"
            },
            {
              "@type": "SiteNavigationElement",
              "name": "Institucional",
              "url": "https://ips-inga-kamentsá.co/institucional",
              "description": "Historia, misión, visión y portafolio de servicios"
            },
            {
              "@type": "SiteNavigationElement",
              "name": "Contacto",
              "url": "https://ips-inga-kamentsá.co/contacto",
              "description": "Contacta con nosotros para agendar citas"
            },
            {
              "@type": "SiteNavigationElement",
              "name": "Directorio",
              "url": "https://ips-inga-kamentsá.co/directorio",
              "description": "Directorio completo de contactos"
            },
            {
              "@type": "SiteNavigationElement",
              "name": "Eventos",
              "url": "https://ips-inga-kamentsá.co/eventos",
              "description": "Eventos programados y anuncios importantes"
            },
            {
              "@type": "SiteNavigationElement",
              "name": "Atención al Usuario",
              "url": "https://ips-inga-kamentsá.co/atencion-usuario",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <Breadcrumbs />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
