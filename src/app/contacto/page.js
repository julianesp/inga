import ContactoSedes from "@/components/ContactoSedes";
import ModalInstagram from "@/components/ModalInstagram";
import Link from "next/link";

export const metadata = {
  title: "Contacto",
  description:
    "Contacta con nosotros para agendar citas, obtener información o llegar a nuestras sedes en Sibundoy, Colón, Santiago y San Andrés.",
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-800 dark:to-blue-900 text-white py-16">
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

      <ContactoSedes />

      {/* Información Adicional de Contacto */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Otras Formas de Contacto
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                WhatsApp
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Comuníquese con nosotros a través de WhatsApp para consultas
                rápidas
              </p>
              <Link
                href="https://wa.me/573132863398"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block"
              >
                Escribir por WhatsApp
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Correo Electrónico
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Envíenos sus consultas por correo electrónico
              </p>
              <Link
                href="mailto:ipsingakamentsa@gmail.com"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
              >
                Enviar Email
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Redes Sociales
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Síguenos en nuestras redes sociales para noticias y
                actualizaciones
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  href={
                    typeof window !== "undefined" &&
                    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
                      ? "fb://profile/100008728661876"
                      : "https://www.facebook.com/luisfernando.mutunbajoyjacacanamejoy"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Facebook
                </Link>

                <ModalInstagram />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horarios Generales */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
              Horarios Generales de Atención
            </h2>

            <div className="flex justify-center">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-8 border border-green-200 dark:border-green-800 w-3/5">
                <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-4">
                  📅 Días Hábiles
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-black dark:text-white">
                      Lunes a Viernes:
                    </span>
                    <span className="text-black dark:text-gray-300">
                      8:00 AM - 5:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-black dark:text-white">
                      Sábados:
                    </span>
                    <span className="text-black dark:text-gray-300">
                      8:00 AM - 12:00 PM
                    </span>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300 mt-4">
                    * Los sábados solo en sedes de Sibundoy y Colón (ejemplo)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800 text-center">
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-4">
                💡 Recomendaciones para su Visita
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                  <li>• Llegue 15 minutos antes de su cita</li>
                  <li>• Traiga documento de identidad</li>
                  <li>• Porte su carné de afiliación a salud</li>
                  <li>• Traiga exámenes médicos previos</li>
                </ul>
                <ul className="space-y-2 text-blue-700 dark:text-blue-300">
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
