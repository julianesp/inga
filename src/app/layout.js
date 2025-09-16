import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import { Footer } from "@/containers";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

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

// app/layout.tsx
export const metadata = {
  title: { default: "IPS Inga-Kamentsa", template: "%s | IPS Inga-Kamentsa" },
  description: "Asociación IPS Indígena Inga-Kamentsa Valle de Sibundoy | Allpa Kaugsana Rurakuna Wasi Inga-Kamentsa Sibundui Mamapi",
  metadataBase: new URL("https://tudominio.ejemplo"),
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
    title: "IPS IKVS",
  },
  other: {
    "apple-mobile-web-app-title": "IngaKa",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default"
  },
};

export const viewport = {
  themeColor: "#0b3d2e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
