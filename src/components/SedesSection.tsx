"use client";

import { useState } from "react";

interface Sede {
  id: string;
  nombre: string;
  municipio: string;
  direccion: string;
  telefono: string;
  horarios: string;
  servicios: string[];
}

const sedes: Sede[] = [
  {
    id: "sibundoy",
    nombre: "Sede Principal Sibundoy",
    municipio: "Sibundoy",
    direccion: "Calle 15 # 15 - 69",
    telefono: "+573132863398",
    horarios: "Lunes a Viernes: 8:00 AM - 12:00 PM y 2:00 PM - 5:00 PM",
    servicios: ["Medicina General", "Odontología"],
  },
  {
    id: "colon",
    nombre: "Sede Colón",
    municipio: "Colón",
    direccion: "Carrera 5 #67-89, Colón, Putumayo",
    telefono: "+573132863398",
    horarios: "Lunes a Viernes: 8:00 AM - 12:00 PM y 2:00 PM - 5:00 PM",
    servicios: ["Medicina General", "Odontología"],
  },
  {
    id: "santiago",
    nombre: "Sede Santiago",
    municipio: "Santiago",
    direccion: "Calle 12 #34-56, Santiago, Putumayo",
    telefono: "+573132863398",
    horarios: "Lunes a Viernes: 8:00 AM - 12:00 PM y 2:00 PM - 5:00 PM",
    servicios: ["Medicina General", "Odontología"],
  },
  {
    id: "san-andres",
    nombre: "Sede San Andrés",
    municipio: "San Andrés",
    direccion: "Avenida Central #78-90, San Andrés, Putumayo",
    telefono: "+573132863398",
    horarios: "Lunes a Viernes: 8:00 AM - 12:00 PM y 2:00 PM - 5:00 PM",
    servicios: ["Medicina General", "Odontología"],
  },
];

export default function SedesSection() {
  const [selectedSede, setSelectedSede] = useState<string>("sibundoy");

  const handleAgendarCita = (sede: Sede) => {
    const numeroWhatsApp = "573174503604"; // Número de WhatsApp de la IPS INGA
    const mensaje = encodeURIComponent(
      `¡Hola! 👋\n\nQuiero agendar una cita médica en ${sede.nombre}.\n\n` +
        `📍 Sede: ${sede.nombre} - ${sede.municipio}\n` +
        `📞 Teléfono sede: ${sede.telefono}\n` +
        `🕐 Horarios: ${sede.horarios}\n\n` +
        `Por favor, ayúdame con la disponibilidad de citas. ¡Gracias!`
    );

    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    window.open(urlWhatsApp, "_blank");
  };

  return (
    <section id="sedes" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Nuestras Sedes
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Selector de sedes */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Seleccionar Sede
              </h3>
              <div className="space-y-2">
                {sedes.map((sede) => (
                  <button
                    key={sede.id}
                    onClick={() => setSelectedSede(sede.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors cursor-pointer ${
                      selectedSede === sede.id
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    <div className="font-medium">{sede.nombre}</div>
                    <div className="text-sm opacity-75">{sede.municipio}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Información de la sede seleccionada */}
          <div className="lg:w-2/3">
            {sedes.map(
              (sede) =>
                selectedSede === sede.id && (
                  <div
                    key={sede.id}
                    className="bg-white rounded-lg shadow-lg p-8"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {sede.nombre}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          <svg
                            className="w-5 h-5 inline mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {sede.direccion}
                        </p>
                        <p className="text-gray-600 mb-4">
                          <svg
                            className="w-5 h-5 inline mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          {sede.telefono}c
                        </p>
                      </div>

                      <button
                        onClick={() => handleAgendarCita(sede)}
                        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap flex items-center gap-2 cursor-pointer"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z" />
                        </svg>
                        Agendar por WhatsApp
                      </button>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">
                        <svg
                          className="w-5 h-5 inline mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Horarios de Atención
                      </h4>
                      <p className="text-gray-600">{sede.horarios}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">
                        <svg
                          className="w-5 h-5 inline mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                        Servicios Disponibles
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {sede.servicios.map((servicio, index) => (
                          <div
                            key={index}
                            className="flex items-center p-3 bg-green-50 rounded-lg"
                          >
                            <svg
                              className="w-4 h-4 text-green-600 mr-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-700">{servicio}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>

        {/* Información sobre citas por WhatsApp */}
        <div className="mt-12 bg-green-50 rounded-lg p-8 border border-green-200">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-green-800 mb-4 text-center flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z" />
              </svg>
              Agendamiento de Citas por WhatsApp
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-green-800 mb-3">
                  📱 ¿Cómo funciona?
                </h4>
                <ol className="space-y-2 text-green-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    <span>
                      Haz clic en &quot;Agendar por WhatsApp&quot; de la sede
                      que prefieras
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    <span>Se abrirá WhatsApp con un mensaje pre-escrito</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      3
                    </span>
                    <span>
                      Nuestro personal te ayudará a encontrar la fecha y hora
                      ideal
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      4
                    </span>
                    <span>Recibirás confirmación de tu cita por WhatsApp</span>
                  </li>
                </ol>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-green-800 mb-3">
                  ✅ Ventajas del servicio
                </h4>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span>
                    <span>Atención personalizada y humana</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span>
                    <span>Horario disponible de lunes a viernes de 8:00 a 5:00 p.m</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span>
                    <span>Información en tiempo real sobre disponibilidad</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span>
                    <span>Posibilidad de hacer preguntas adicionales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span>
                    <span>Recordatorios de cita por el mismo medio</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-100 rounded-lg border-l-4 border-yellow-500">
              <p className="text-yellow-800 text-sm">
                <strong>💡 Tip:</strong> Ten a la mano tu documento de identidad
                y preferencias de horario para agilizar el proceso de
                agendamiento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
