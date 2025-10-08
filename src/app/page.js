"use client";

import GlobalSearch from "@/components/GlobalSearch";
import Link from "next/link";
import PresentacionCarousel from "@/components/PresentacionCarousel";
import HealthInfoSection from "@/components/HealthInfoSection";

export default function Home() {

  return (
    <div className="min-h-screen">
      <PresentacionCarousel />

      
      <HealthInfoSection />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bienvenidos a IPS Salud Integral
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Tu salud es nuestra prioridad
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Ofrecemos servicios de salud integral con atención médica y odontológica de calidad para toda la comunidad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sedes"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Ver Nuestras Sedes
              </Link>
              <Link
                href="/contacto"
                className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-block"
              >
                Agendar Cita
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <GlobalSearch />

      {/* Services Preview */}
      <section className="py-16 bg-gray-50 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 ">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:justify-center lg:max-w-5xl lg:mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-200">
              <div className="text-4xl mb-4">👩‍⚕️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Medicina General
              </h3>
              <p className="text-gray-600 mb-4">
                Atención médica integral para toda la familia
              </p>
              <Link
                href="/servicios"
                className="text-green-600 hover:text-green-800 font-semibold"
              >
                Ver más
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-200">
              <div className="text-4xl mb-4">🦷</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Odontología
              </h3>
              <p className="text-gray-600 mb-4">
                Servicios dentales especializados y preventivos
              </p>
              <Link
                href="/servicios"
                className="text-green-600 hover:text-green-800 font-semibold"
              >
                Ver más
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-200">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Urgencias
              </h3>
              <p className="text-gray-600 mb-4">
                Atención médica de emergencia 24/7
              </p>
              <Link
                href="/contacto"
                className="text-green-600 hover:text-green-800 font-semibold"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            ¿Por qué elegir IPS Salud Integral?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-4xl mb-4 text-center">⏰</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                Horarios Flexibles
              </h3>
              <p className="text-gray-600 text-center">
                Atención de lunes a viernes y servicio de urgencias disponible
                24/7 para tu tranquilidad.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-4xl mb-4 text-center">👨‍⚕️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                Personal Calificado
              </h3>
              <p className="text-gray-600 text-center">
                Médicos y odontólogos con experiencia comprometidos con tu salud
                y bienestar.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-4xl mb-4 text-center">📍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                Múltiples Sedes
              </h3>
              <p className="text-gray-600 text-center">
                Presencia en Sibundoy, Colón, Santiago y San Andrés para estar
                cerca de ti.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-4xl mb-4 text-center">💰</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                Tarifas Accesibles
              </h3>
              <p className="text-gray-600 text-center">
                Servicios de salud de calidad a precios justos y asequibles para
                toda la comunidad.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-4xl mb-4 text-center">🏥</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                Atención Integral
              </h3>
              <p className="text-gray-600 text-center">
                Desde consulta general hasta tratamientos odontológicos
                especializados.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-4xl mb-4 text-center">📋</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                Fácil Acceso
              </h3>
              <p className="text-gray-600 text-center">
                Proceso de agendamiento sencillo y atención oportuna para todos
                nuestros pacientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-gray-50 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Acceso Rápido
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href="/sedes"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-8 text-center hover:from-green-600 hover:to-green-700 transition-colors"
            >
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-2">
                Nuestras Sedes
              </h3>
              <p>Encuentra la sede más cercana a ti</p>
            </Link>

            <Link
              href="/directorio"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-8 text-center hover:from-blue-600 hover:to-blue-700 transition-colors"
            >
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-2xl font-bold mb-2">
                Directorio
              </h3>
              <p>Contacta a nuestro personal</p>
            </Link>

            <Link
              href="/atencion-usuario"
              className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg p-8 text-center hover:from-purple-600 hover:to-purple-700 transition-colors"
            >
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-2">
                PQRS
              </h3>
              <p>Envía tus peticiones, quejas o reclamos</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
