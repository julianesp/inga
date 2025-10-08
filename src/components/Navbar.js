"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";

const navigationLinks = [
  { href: "/", label: "Inicio" },
  { href: "/institucional", label: "Institucional" },
  { href: "/servicios", label: "Servicios" },
  { href: "/sedes", label: "Sedes" },
  { href: "/directorio", label: "Directorio" },
  { href: "/eventos", label: "Eventos" },
  { href: "/atencion-usuario", label: "Atención al Usuario" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // backdrop-blur-md
  return (
    <nav
      className={`border-white border-b-1 sticky top-0 z-50 rounded-bl-2xl rounded-br-2xl ${styles.navbar}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="https://ghx22gzm9l6t5pgk.public.blob.vercel-storage.com/images/logo.jpg"
                alt="Logo IPS Salud Integral"
                width={50}
                height={50}
                className="rounded-4xl hover:scale-125 transition-transform duration-500 hover:rotate-y-180"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div
            className={`hidden lg:flex items-center space-x-3 ${styles.links}`}
          >
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-green-400 px-3 py-2 rounded-md text-sm font-bold transition-all duration-200 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_80%),_-1px_-1px_2px_rgb(0_0_0_/_80%),_1px_-1px_2px_rgb(0_0_0_/_80%),_-1px_1px_2px_rgb(0_0_0_/_80%)] hover:scale-105"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
