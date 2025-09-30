"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import styles from "../styles/Navbar.module.scss";

const getNavigationLinks = (t) => [
  { href: "/", label: t(translations.nav.home) },
  { href: "/institucional", label: t(translations.nav.institutional) },
  { href: "/servicios", label: t(translations.nav.services) },
  { href: "/sedes", label: t(translations.nav.locations) },
  { href: "/directorio", label: t(translations.nav.directory) },
  { href: "/eventos", label: t(translations.nav.events) },
  { href: "/atencion-usuario", label: t(translations.nav.userSupport) },
  { href: "/contacto", label: t(translations.nav.contact) },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const navigationLinks = getNavigationLinks(t);

  // backdrop-blur-md
  return (
    <nav
      className={`border-white border-b-1 sticky top-0 z-50 rounded-bl-2xl rounded-br-2xl  dark:bg-slate-800/75 ${styles.navbar}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="https://ghx22gzm9l6t5pgk.public.blob.vercel-storage.com/images/logo.jpg"
                alt="Logo IPS INGA KAMËNTSÁ"
                width={50}
                height={50}
                className="rounded-4xl"
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
                className="text-white dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <LanguageToggle />
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <LanguageToggle />
            {/* <ThemeToggle /> */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 focus:outline-none focus:text-green-600"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
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
