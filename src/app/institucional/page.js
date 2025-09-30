import InformacionInstitucional from '@/components/InformacionInstitucional';

export const metadata = {
  title: 'Institucional',
  description: 'Conozca la historia, misión, visión y portafolio de servicios de IPS INGA KAMËNTSÁ. Atención médica profesional desde 1995.',
};

export default function InstitucionalPage() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Información Institucional
            </h1>
            <p className="text-xl leading-relaxed">
              Conoce nuestra historia, misión, visión y el compromiso que tenemos
              con la salud integral de nuestras comunidades.
            </p>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Más de 20 años al servicio de la salud integral
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              La IPS INGA KAMËNTSÁ es una institución de salud comprometida con brindar
              atención médica de calidad, contando con profesionales altamente capacitados
              y especialistas en diferentes áreas de la medicina para ofrecer servicios
              integrales a nuestros usuarios.
            </p>
          </div>
        </div>
      </section>

      <InformacionInstitucional />

      {/* Valores Institucionales */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Nuestros Valores
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Respeto</h3>
              <p className="text-gray-600">
                Respetamos la diversidad cultural y las necesidades específicas
                de cada paciente y comunidad.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Calidad</h3>
              <p className="text-gray-600">
                Brindamos servicios de salud con los más altos estándares de
                calidad y seguridad.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Integridad</h3>
              <p className="text-gray-600">
                Actuamos con honestidad, transparencia y compromiso ético
                en todas nuestras acciones.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Solidaridad</h3>
              <p className="text-gray-600">
                Trabajamos unidos para el bienestar común de nuestras
                comunidades y territorio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reconocimientos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Reconocimientos y Logros
            </h2>

            <div className="space-y-8">
              <div className="bg-yellow-50 rounded-lg p-8 border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">
                  🏆 Certificación de Calidad (2010)
                </h3>
                <p className="text-yellow-700">
                  Reconocimiento del Ministerio de Salud como institución de referencia
                  en atención médica de calidad para la región del Putumayo.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-8 border-l-4 border-green-400">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  🏥 Acreditación en Servicios Médicos (2015)
                </h3>
                <p className="text-green-700">
                  Primera IPS de la región en obtener acreditación completa
                  en servicios de medicina general y especializada.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-400">
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  📚 Programa de Formación Médica (2018)
                </h3>
                <p className="text-blue-700">
                  Creación del primer programa de formación continua en medicina
                  del suroccidente colombiano.
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-8 border-l-4 border-purple-400">
                <h3 className="text-xl font-bold text-purple-800 mb-3">
                  🤝 Alianza Estratégica (2020)
                </h3>
                <p className="text-purple-700">
                  Alianza con universidades nacionales e internacionales para
                  la investigación médica y formación profesional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Directivo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Equipo Directivo
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">👨‍💼</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Nohelly Puerchambud</h3>
                <p className="text-green-600 font-semibold mb-3">Gerente</p>
                <p className="text-gray-600 text-sm">
                  Profesional con amplia experiencia en administración de instituciones
                  de salud, liderando la gestión estratégica y operativa de la IPS
                  para garantizar servicios médicos de calidad a la comunidad.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">👩‍⚕️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Dra. Carmen Chindoy</h3>
                <p className="text-green-600 font-semibold mb-3">Directora Científica</p>
                <p className="text-gray-600 text-sm">
                  Especialista en medicina familiar y comunitaria,
                  coordinadora de programas de atención integral.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Dr. Domingo Tandioy</h3>
                <p className="text-green-600 font-semibold mb-3">Coordinador de Servicios Médicos</p>
                <p className="text-gray-600 text-sm">
                  Médico especialista con amplia experiencia en medicina comunitaria
                  y coordinación de servicios de salud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compromiso Social */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Nuestro Compromiso Social
            </h2>
            <p className="text-xl leading-relaxed mb-8">
              Trabajamos no solo por la salud individual, sino por el bienestar
              colectivo de nuestras comunidades, administrando eficientemente
              los recursos y servicios médicos para garantizar una atención
              integral y de calidad.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🌱</div>
                <h3 className="text-lg font-bold mb-2">Gestión Eficiente</h3>
                <p className="text-sm opacity-90">
                  Optimizamos recursos y procesos para brindar servicios
                  médicos de calidad de manera sostenible
                </p>
              </div>

              <div>
                <div className="text-3xl mb-2">👨‍👩‍👧‍👦</div>
                <h3 className="text-lg font-bold mb-2">Atención Integral</h3>
                <p className="text-sm opacity-90">
                  Coordinamos servicios médicos especializados para
                  brindar atención completa a nuestros pacientes
                </p>
              </div>

              <div>
                <div className="text-3xl mb-2">📚</div>
                <h3 className="text-lg font-bold mb-2">Formación Continua</h3>
                <p className="text-sm opacity-90">
                  Capacitamos constantemente a nuestro equipo médico
                  para mantener los más altos estándares de atención
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}