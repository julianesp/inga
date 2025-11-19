"use client";

import PresentacionCarousel from "@/components/PresentacionCarousel";

export default function Transparencia() {
  return (
    <div className="min-h-screen bg-slate-300/75 dark:bg-gray-900">
      {/* <PresentacionCarousel /> */}

      {/* Secciones de información */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div
              className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-200"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="text-5xl mb-6">🏥</div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Servicios de Salud Integral
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Ofrecemos atención médica de calidad. Nuestros servicios
                incluyen medicina general, especialidades.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                Atención médica de calidad con enfoque intercultural
              </p>
            </div>

            <div
              className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-200"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="text-5xl mb-6">📊</div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Informes y Transparencia
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Mantenemos un compromiso con la transparencia y rendición de
                cuentas. Conoce nuestros informes de gestión, resultados de
                atención médica y participación en reuniones.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                Transparencia en la gestión y rendición de cuentas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Compromiso */}
      <section className="py-16 bg-gradient-to-br from-green-600 via-green-700 to-blue-800 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-4xl font-bold mb-8"
              data-aos="fade-up"
            >
              Nuestro Compromiso
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div data-aos="fade-up" data-aos-delay="100">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-3">Transparencia</h3>
                <p className="text-white/90">
                  Información clara y accesible sobre nuestra gestión
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3">Rendición de Cuentas</h3>
                <p className="text-white/90">
                  Reportes periódicos sobre nuestros resultados y actividades
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="300">
                <div className="text-5xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-3">Cumplimiento</h3>
                <p className="text-white/90">
                  Adherencia a normas y estándares de calidad en salud
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
