import SedesSection from "@/components/SedesSection";

export const metadata = {
  title: "Sedes - IPS INGA KAMËNTSÁ",
  description:
    "Conoce nuestras sedes en Sibundoy, Colón, Santiago y San Andrés. Información sobre horarios, servicios y cómo llegar.",
};

export default function SedesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestras Sedes
            </h1>
            <p className="text-xl leading-relaxed">
              Atendemos en cuatro municipios del Valle de Sibundoy, ofreciendo
              servicios de salud accesibles y culturalmente apropiados para
              nuestras comunidades.
            </p>
          </div>
        </div>
      </section>

      <SedesSection />

      {/* Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Cobertura y Alcance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  📍 Ubicación Estratégica
                </h3>
                <p className="text-gray-600 mb-4">
                  Nuestras sedes están ubicadas estratégicamente en el Valle de
                  Sibundoy para garantizar el acceso a servicios de salud a
                  todas las comunidades indígenas y campesinas de la región.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Sede Principal: Sibundoy (Centro administrativo)</li>
                  <li>• Sede Colón: Atención especializada</li>
                  <li>• Sede Santiago: Servicios básicos</li>
                  <li>• Sede San Andrés: Medicina comunitaria</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  🚐 Transporte y Acceso
                </h3>
                <p className="text-gray-600 mb-4">
                  Facilitamos el acceso a nuestros servicios mediante diferentes
                  opciones de transporte y programas de atención móvil para
                  comunidades alejadas.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Transporte público regular</li>
                  <li>• Servicio de ambulancia</li>
                  <li>• Brigadas de salud móviles</li>
                  <li>• Atención domiciliaria</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-green-50 rounded-lg p-8 border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-4 text-center">
                🌍 Compromiso con la Comunidad
              </h3>
              <p className="text-green-700 text-center max-w-3xl mx-auto">
                Cada una de nuestras sedes refleja nuestro compromiso con la
                atención integral y respetuosa de la diversidad cultural.
                Trabajamos de la mano con las autoridades indígenas y líderes
                comunitarios para garantizar servicios de calidad que honren
                nuestras tradiciones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
