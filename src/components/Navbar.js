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
  // Detect click outside mobile menu
  const handleBackdropClick = (e) => {
    if (e.target.id === "mobile-menu-backdrop") {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`sticky top-0 z-50 ${styles.navbar}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="https://ghx22gzm9l6t5pgk.public.blob.vercel-storage.com/images/logo.jpg"
                alt="Logo IPS Inga Kametsa"
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
              className="relative p-2 bg-white/10 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg focus:outline-none"
            >
              <svg
                // barras menu navbar

                className="h-6 w-6 text-black [text-shadow:_2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000] drop-shadow-[0_4px_3px_rgba(0,0,0,0.5)] rounded-lg "
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
        {
          <div
            id="mobile-menu-backdrop"
            className={`lg:hidden fixed inset-0 z-40 flex items-start justify-center pt-20`}
            onClick={handleBackdropClick}
            style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
          >
            <div
              className={`
                bg-[#148f54] rounded-xl shadow-lg w-11/12 max-w-xs mx-auto flex flex-col items-center py-6 space-y-3 z-50
                transition-all duration-300
                ${
                  isMenuOpen
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-10 pointer-events-none"
                }
                backdrop-blur-md
              `}
              style={{
                transitionProperty: "opacity, transform",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-green-200 px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 text-center w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        }
      </div>
    </nav>
  );
}
