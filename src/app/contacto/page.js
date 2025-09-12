import ContactoSedes from "@/components/ContactoSedes";

export const metadata = {
  title: "Contacto - IPS INGA KAMËNTSÁ",
  description:
    "Contacta con nosotros para agendar citas, obtener información o llegar a nuestras sedes en Sibundoy, Colón, Santiago y San Andrés.",
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contacto</h1>
            <p className="text-xl leading-relaxed">
              Estamos aquí para atenderle. Encuentre la información de contacto
              de todas nuestras sedes y programe su cita de manera fácil y
              rápida.
            </p>
          </div>
        </div>
      </section>

      {/* Información de Emergencia */}
      <section className="py-12 bg-red-50 border-t-4 border-red-500">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              🚨 EMERGENCIAS MÉDICAS
            </h2>
            <p className="text-red-700 mb-4">
              Para situaciones de emergencia médica, contáctenos inmediatamente:
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+57842000000"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-red-700 transition-colors"
              >
                📞 (8) 420-0000
              </a>
              <p className="text-red-700 font-semibold">
                Disponible 24 horas, 7 días a la semana
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactoSedes />

      {/* Información Adicional de Contacto */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Otras Formas de Contacto
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">WhatsApp</h3>
              <p className="text-gray-600 mb-4">
                Comuníquese con nosotros a través de WhatsApp para consultas
                rápidas
              </p>
              <a
                href="https://wa.me/573123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block"
              >
                Escribir por WhatsApp
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Correo Electrónico
              </h3>
              <p className="text-gray-600 mb-4">
                Envíenos sus consultas por correo electrónico
              </p>
              <a
                href="mailto:contacto@ips-inga-kamentsa.org"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
              >
                Enviar Email
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Redes Sociales
              </h3>
              <p className="text-gray-600 mb-4">
                Síguenos en nuestras redes sociales para noticias y
                actualizaciones
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://facebook.com/ips-inga-kamentsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://instagram.com/ips.inga.kamentsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horarios Generales */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Horarios Generales de Atención
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-lg p-8 border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  📅 Días Hábiles
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-black">Lunes a Viernes:</span>
                    <span className="text-black">7:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-black">Sábados:</span>
                    <span className="text-black">8:00 AM - 12:00 PM</span>
                  </div>
                  <p className="text-sm text-green-700 mt-4">
                    * Los sábados solo en sedes de Sibundoy y Colón (ejemplo)
                  </p>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-8 border border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-4">
                  🚨 Emergencias (¿hay servicio de emergencias?)
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-black">Todos los días:</span>
                    <span className="text-black">24 horas</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-black">Festivos:</span>
                    <span className="text-black">24 horas</span>
                  </div>
                  <p className="text-sm text-red-700 mt-4">
                    * Servicio de emergencias disponible solo en sede principal
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 rounded-lg p-8 border border-blue-200 text-center">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                💡 Recomendaciones para su Visita
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <ul className="space-y-2 text-blue-700">
                  <li>• Llegue 15 minutos antes de su cita</li>
                  <li>• Traiga documento de identidad</li>
                  <li>• Porte su carné de afiliación a salud</li>
                  <li>• Traiga exámenes médicos previos</li>
                </ul>
                <ul className="space-y-2 text-blue-700">
                  <li>• Use tapabocas en todas las áreas</li>
                  <li>• Mantenga distanciamiento social</li>
                  <li>• Informe síntomas respiratorios</li>
                  <li>• Siga las indicaciones del personal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
