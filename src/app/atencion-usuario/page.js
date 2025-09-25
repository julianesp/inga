import AtencionUsuario from "@/components/AtencionUsuario";
import Link from "next/link";

export const metadata = {
  title: "Atención al Usuario",
  description:
    "Área de Atención al Usuario: PQRSF, información de contacto y Asociación de Usuarios de la IPS INGA KAMËNTSÁ.",
};

export default function AtencionUsuarioPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Atención al Usuario
            </h1>
            <p className="text-xl leading-relaxed">
              Estamos comprometidos con brindarle la mejor atención. Aquí puede
              enviar sus peticiones, quejas, reclamos, sugerencias y
              felicitaciones.
            </p>
          </div>
        </div>
      </section>

      {/* PQRSF Info */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
              ¿Qué es PQRSF?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-3xl mb-3">📝</div>
                <h3 className="font-bold text-blue-800 mb-2">Peticiones</h3>
                <p className="text-sm text-gray-600">
                  Solicitudes de información, documentos o servicios
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-3xl mb-3">😞</div>
                <h3 className="font-bold text-blue-800 mb-2">Quejas</h3>
                <p className="text-sm text-gray-600">
                  Manifestaciones de insatisfacción con el servicio
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-3xl mb-3">⚠️</div>
                <h3 className="font-bold text-blue-800 mb-2">Reclamos</h3>
                <p className="text-sm text-gray-600">
                  Manifestaciones sobre presunta falta de calidad
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-3xl mb-3">💡</div>
                <h3 className="font-bold text-blue-800 mb-2">Sugerencias</h3>
                <p className="text-sm text-gray-600">
                  Propuestas para mejorar nuestros servicios
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-3xl mb-3">👏</div>
                <h3 className="font-bold text-blue-800 mb-2">Felicitaciones</h3>
                <p className="text-sm text-gray-600">
                  Reconocimientos por la calidad del servicio
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AtencionUsuario />

      {/* Proceso PQRSF */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Proceso de Atención PQRSF
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">1️⃣</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Recepción
                </h3>
                <p className="text-gray-600 text-sm">
                  Recibimos su PQRSF y le asignamos un número de radicado
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">2️⃣</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Análisis
                </h3>
                <p className="text-gray-600 text-sm">
                  Analizamos su caso y lo direccionamos al área competente
                </p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">3️⃣</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Gestión
                </h3>
                <p className="text-gray-600 text-sm">
                  El área responsable gestiona y busca la solución apropiada
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">4️⃣</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Respuesta
                </h3>
                <p className="text-gray-600 text-sm">
                  Le enviamos la respuesta en máximo 15 días hábiles
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canales de Comunicación */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Otros Canales de Comunicación
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Línea Telefónica
                </h3>
                <p className="text-gray-600 mb-4">
                  Atención directa por teléfono
                </p>
                <a
                  href="tel:+57842011111"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block"
                >
                  (8) 420-1111
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Correo Electrónico
                </h3>
                <p className="text-gray-600 mb-4">
                  Envíenos sus consultas por email
                </p>
                <a
                  href="mailto:atencion.usuario@ips-inga-kamentsa.org"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
                >
                  Escribir Email
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Presencial
                </h3>
                <p className="text-gray-600 mb-4">
                  Visítenos en cualquiera de nuestras sedes
                </p>
                <Link
                  href="/sedes"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors inline-block"
                >
                  Ver Sedes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Derechos y Deberes */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Sus Derechos y Deberes como Usuario
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
                  📋 Sus Derechos
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-blue-700">
                      Recibir atención de calidad sin discriminación
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-blue-700">
                      Ser informado sobre su estado de salud
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-blue-700">
                      Confidencialidad de su información médica
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-blue-700">
                      Participar en decisiones sobre su tratamiento
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-blue-700">
                      Recibir atención culturalmente apropiada
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-blue-700">
                      Presentar peticiones, quejas y reclamos
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
                  🤝 Sus Deberes
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-green-700">
                      Proporcionar información veraz sobre su salud
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-green-700">
                      Cumplir con los tratamientos prescritos
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-green-700">
                      Respetar al personal y otros pacientes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-green-700">
                      Asistir puntualmente a las citas
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-green-700">
                      Cuidar las instalaciones y equipos
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-green-700">
                      Seguir las normas de bioseguridad
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
