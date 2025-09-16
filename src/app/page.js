"use client";

import GlobalSearch from "@/components/GlobalSearch";
import Link from "next/link";
import PresentacionCarousel from "@/components/PresentacionCarousel";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <PresentacionCarousel />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t(translations.home.hero.title)}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {t(translations.home.hero.subtitle)}
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              {t(translations.home.hero.description)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sedes"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                {t(translations.home.hero.viewLocations)}
              </Link>
              <Link
                href="/contacto"
                className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-block"
              >
                {t(translations.home.hero.scheduleAppointment)}
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <GlobalSearch />

      {/* Services Preview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
            {t(translations.home.services.title)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-200">
              <div className="text-4xl mb-4">👩‍⚕️</div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {t(translations.home.services.generalMedicine.title)}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t(translations.home.services.generalMedicine.description)}
              </p>
              <Link
                href="/servicios"
                className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-semibold"
              >
                {t(translations.home.services.seeMore)}
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-200">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {t(translations.home.services.traditionalMedicine.title)}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t(translations.home.services.traditionalMedicine.description)}
              </p>
              <Link
                href="/servicios"
                className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-semibold"
              >
                {t(translations.home.services.seeMore)}
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-200">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {t(translations.home.services.specialties.title)}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t(translations.home.services.specialties.description)}
              </p>
              <Link
                href="/servicios"
                className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-semibold"
              >
                {t(translations.home.services.seeMore)}
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-200">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {t(translations.home.services.emergencies.title)}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t(translations.home.services.emergencies.description)}
              </p>
              <Link
                href="/contacto"
                className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-semibold"
              >
                {t(translations.home.services.contact)}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
            {t(translations.home.quickAccess.title)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href="/sedes"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-8 text-center hover:from-green-600 hover:to-green-700 transition-colors"
            >
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-2">{t(translations.home.quickAccess.locations.title)}</h3>
              <p>{t(translations.home.quickAccess.locations.description)}</p>
            </Link>

            <Link
              href="/directorio"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-8 text-center hover:from-blue-600 hover:to-blue-700 transition-colors"
            >
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-2xl font-bold mb-2">{t(translations.home.quickAccess.directory.title)}</h3>
              <p>{t(translations.home.quickAccess.directory.description)}</p>
            </Link>

            <Link
              href="/atencion-usuario"
              className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg p-8 text-center hover:from-purple-600 hover:to-purple-700 transition-colors"
            >
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-2">{t(translations.home.quickAccess.pqrs.title)}</h3>
              <p>{t(translations.home.quickAccess.pqrs.description)}</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
