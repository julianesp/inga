import InformacionInstitucional from "@/components/InformacionInstitucional";
import GestionClinica from "@/components/GestionClinica";

export const metadata = {
  title: "Servicios",
  description:
    "Conoce nuestro portafolio completo de servicios de salud: medicina general, especialidades y más.",
};

export default function ServiciosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl leading-relaxed">
              Ofrecemos servicios de salud integral con atención médica general
              y odontológica de calidad.
            </p>
          </div>
        </div>
      </section>

      {/* /* Servicios Detallados */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Medicina General */}
            <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
              <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                🩺 Medicina General
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Consulta Externa
                  </h3>
                  <ul className="space-y-2 text-gray-900">
                    <li>
                      • Diagnóstico y tratamiento de enfermedades generales
                    </li>
                    <li>• Control y seguimiento de patologías crónicas</li>
                    <li>• Medicina preventiva</li>
                    <li>• Atención integral para toda la familia</li>
                    <li>• Certificados médicos</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Atención domiciliaria
                  </h3>
                  <ul className="space-y-2 text-gray-900">
                    <li>• Sibundoy: 2 visitas mensuales</li>
                    <li>• Santiago: 2 visitas mensuales</li>
                    <li>• Colón: 1 visita domiciliaria</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-8 border border-green-200">
              <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
                🦷 Odontología
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Servicios Odontológicos
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-900">
                    <li>Odontología general</li>
                    <li>Limpieza dental (profilaxis)</li>
                    <li>Extracción de piezas dentales</li>
                    <li>Obturaciones (calzas)</li>
                    <li>Tratamiento de caries</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Odontología Preventiva
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-900">
                    <li>Valoración odontológica</li>
                    <li>Educación en salud oral</li>
                    <li>Aplicación de flúor</li>
                    <li>Sellantes dentales</li>
                    <li>Control periódico</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Atención domiciliaria
                  </h3>
                  <ul className="space-y-2 text-gray-900">
                    <li>• Sibundoy: 2 visitas mensuales</li>
                    <li>• Santiago: 2 visitas mensuales</li>
                    <li>• Colón: 1 visita domiciliaria</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Información para solicitar visita - Span completo */}
          <div className="mt-12 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Información para solicitar visita
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
                Enviar información relevante: nombres completos del paciente y
                familiares, contacto telefónico y relación con el paciente.
                Estos datos permiten coordinar la atención domiciliaria de forma
                eficiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programas Especiales */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Programas Especiales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">👶</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Programa Materno Infantil
              </h3>
              <ul className="text-gray-600 text-sm space-y-1 text-left">
                <li>• Control prenatal</li>
                <li>• Atención del parto</li>
                <li>• Control de crecimiento y desarrollo</li>
                <li>• Programa de vacunación</li>
                <li>• Lactancia materna</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">🏃‍♂️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Promoción y Prevención
              </h3>
              <ul className="text-gray-600 text-sm space-y-1 text-left">
                <li>• Jornadas de salud comunitaria</li>
                <li>• Educación en salud</li>
                <li>• Prevención de enfermedades</li>
                <li>• Estilos de vida saludable</li>
                <li>• Saneamiento básico</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">👴</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Atención Domiciliaria
              </h3>
              <ul className="text-gray-600 text-sm space-y-1 text-left">
                <li>• Visitas médicas domiciliarias</li>
                <li>• Cuidado de pacientes crónicos</li>
                <li>• Atención a adultos mayores</li>
                <li>• Rehabilitación en el hogar</li>
                <li>• Cuidados paliativos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <InformacionInstitucional />
      <GestionClinica />

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Necesita Información Específica?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nuestro equipo está disponible para brindarle información detallada
            sobre cualquiera de nuestros servicios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Contactar Ahora
            </a>
            <a
              href="/directorio"
              className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-block"
            >
              Ver Directorio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
