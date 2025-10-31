"use client";

import Link from "next/link";
import EventosCalendario from "@/components/EventosCalendario";
import ModalInstagram from "@/components/ModalInstagram";

export default function EventosContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 dark:bg-gray-800 dark:from-green-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Eventos y Anuncios
            </h1>
            <p className="text-xl leading-relaxed">
              Mantente informado sobre nuestras jornadas de salud,
              capacitaciones, eventos comunitarios y anuncios importantes.
            </p>
          </div>
        </div>
      </section>

      {/* Próximos Eventos Destacados */}
      <section className="py-16 my-2 rounded-xl bg-white/75 dark:bg-gray-800 border dark:border-white">
        <div className="container mx-auto px-4 dark:bg-gray-800">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Próximos Eventos Destacados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto dark:bg-gray-800">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 border-l-4 border-blue-500 dark:from-gray-800 dark:border-white">
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">🏥</div>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Próximamente
                </span>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Jornada de Vacunación Infantil
              </h3>
              <p className="text-blue-700 mb-4 dark:text-white">
                Jornada especial de vacunación para niños de 0 a 5 años en todas
                nuestras sedes.
              </p>
              <div className="text-sm text-blue-600 dark:text-white">
                <p>📅 15 de Enero, 2025</p>
                <p>🕐 8:00 AM - 4:00 PM</p>
                <p>📍 Todas las sedes</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-8 border-l-4 border-green-500  dark:from-gray-800  dark:border-white">
              <div className="flex items-start justify-between mb-4 ">
                <div className="text-3xl">🎓</div>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Registros Abiertos
                </span>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">
                Taller de Hábitos Saludables
              </h3>
              <p className="text-green-700 mb-4 dark:text-white">
                Participa en nuestro taller para aprender sobre alimentación
                balanceada, actividad física y bienestar general.
              </p>
              <div className="text-sm text-green-600 dark:text-white">
                <p>📅 20 de Enero, 2025</p>
                <p>🕐 2:00 PM - 5:00 PM</p>
                <p>📍 Sede Colón</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-8 border-l-4 border-purple-500 dark:from-gray-800  dark:border-white">
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">🤝</div>
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Confirmado
                </span>
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">
                Encuentro Comunitario
              </h3>
              <p className="text-purple-700 mb-4 dark:text-white">
                Espacio abierto para compartir información, resolver dudas y
                fortalecer la participación de toda la comunidad.
              </p>
              <div className="text-sm text-purple-600 dark:text-white">
                <p>📅 1 de Febrero, 2025</p>
                <p>🕐 9:00 AM - 3:00 PM</p>
                <p>📍 Auditorio Principal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EventosCalendario />

      {/* Tipos de Eventos */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:border-t-white border">
        <div className="container mx-auto px-4 dark:bg-gray-800">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Tipos de Eventos que Organizamos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow dark:bg-gray-800 border dark:border-white">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Jornadas de Salud
              </h3>
              <p className="text-gray-600 text-sm dark:text-white">
                Brigadas médicas, vacunación, exámenes preventivos y atención
                especializada
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow dark:bg-gray-800 border dark:border-white">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Capacitaciones
              </h3>
              <p className="text-gray-600 text-sm dark:text-white">
                Talleres de primeros auxilios y promoción de la salud
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow dark:bg-gray-800 border dark:border-white">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Celebraciones
              </h3>
              <p className="text-gray-600 text-sm dark:text-white">
                Eventos especiales, días conmemorativos y encuentros
                comunitarios
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow dark:bg-gray-800 border dark:border-white">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Encuentros
              </h3>
              <p className="text-gray-600 text-sm dark:text-white">
                Reuniones con líderes, asambleas de usuarios y espacios de
                diálogo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Participar */}
      <section className="py-16 bg-white/90 dark:bg-gray-800 border dark:border-t-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Cómo Participar en Nuestros Eventos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">1️⃣</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Infórmate
                </h3>
                <p className="text-gray-600 dark:text-white">
                  Revisa regularmente nuestro calendario de eventos y anuncios
                  en la página web o en nuestras redes sociales.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">2️⃣</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Regístrate
                </h3>
                <p className="text-gray-600 dark:text-white">
                  Para eventos que requieren registro previo, comunícate con
                  nosotros por teléfono, email o presencialmente.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">3️⃣</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Participa
                </h3>
                <p className="text-gray-600 dark:text-white">
                  Asiste puntualmente al evento y participa activamente en las
                  actividades programadas.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 border border-green-200 dark:from-gray-800 dark:border-white">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center ">
                📱 Mantente Conectado
              </h3>
              <p className="text-gray-700 text-center mb-6 dark:text-white">
                No te pierdas ningún evento importante. Suscríbete a nuestras
                notificaciones y síguenos en redes sociales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://www.facebook.com/luisfernando.mutunbajoyjacacanamejoy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Síguenos en Facebook
                </Link>
                <ModalInstagram />
                <Link
                  href="/contacto"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors text-center"
                >
                  Contactar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Eventos Pasados */}
      <section className="py-16 bg-gray-50/85 dark:bg-gray-800 dark:border-t-white border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Eventos Realizados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-300 h-48 flex items-center justify-center dark:bg-gray-800 border dark:border-white rounded-lg">
                <div className="text-center text-gray-600">
                  <div className="text-4xl mb-2">📸</div>
                  <p className="text-black dark:text-white">
                    Jornada de Salud Visual
                  </p>
                  <p className="text-sm text-black dark:text-white">
                    Diciembre 2024
                  </p>
                </div>
              </div>

              <div className="p-4 dark:bg-gray-800">
                <h3 className="font-bold text-gray-800 mb-2 ">
                  Jornada de Salud Visual
                </h3>
                <p className="text-gray-600 text-sm dark:text-white">
                  Más de 200 personas atendidas en nuestra jornada de salud
                  visual con entrega gratuita de lentes.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-300 h-48 flex items-center justify-center dark:bg-gray-800 border dark:border-white rounded-lg">
                <div className="text-center text-gray-600">
                  <div className="text-4xl mb-2">🌿</div>
                  <p className="dark:text-white">Feria de Salud Comunitaria</p>
                  <p className="text-sm dark:text-white">Noviembre 2024</p>
                </div>
              </div>
              <div className="p-4 dark:bg-gray-800">
                <h3 className="font-bold text-gray-800 mb-2 ">
                  Feria de Salud Comunitaria
                </h3>
                <p className="text-gray-600 text-sm dark:text-white">
                  Evento de salud integral con atención médica y actividades de
                  promoción y prevención.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-300 h-48 flex items-center justify-center dark:bg-gray-800 border dark:border-white rounded-lg">
                <div className="text-center text-gray-600">
                  <div className="text-4xl mb-2">👶</div>
                  <p className="dark:text-white">Jornada Materno Infantil</p>
                  <p className="text-sm dark:text-white">Octubre 2024</p>
                </div>
              </div>
              <div className="p-4 dark:bg-gray-800">
                <h3 className="font-bold text-gray-800 mb-2">
                  Jornada Materno Infantil
                </h3>
                <p className="text-gray-600 text-sm dark:text-white">
                  Atención especializada para madres gestantes y niños menores
                  de 5 años.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
