"use client";

import { useState } from "react";

interface Evento {
  id: string;
  titulo: string;
  fecha: string;
  hora: string;
  tipo: "jornada" | "capacitacion" | "celebracion" | "anuncio";
  descripcion: string;
  sede: string;
  imagen?: string;
  registro?: boolean;
}

const eventos: Evento[] = [
  {
    id: "1",
    titulo: "Jornada de Vacunación Infantil",
    fecha: "2025-01-15",
    hora: "8:00 AM - 4:00 PM",
    tipo: "jornada",
    descripcion:
      "Invitamos a todas las familias de la comunidad a participar en la jornada de vacunación para niños y niñas de 0 a 5 años. Protejamos juntos la salud de nuestros pequeños.",
    sede: "Sibundoy",
    registro: false,
  },
  {
    id: "2",
    titulo: "Taller de Promoción y Prevención en Salud",
    fecha: "2025-01-20",
    hora: "2:00 PM - 5:00 PM",
    tipo: "capacitacion",
    descripcion:
      "Espacio formativo dirigido a la comunidad para fortalecer los conocimientos sobre hábitos saludables, prevención de enfermedades y autocuidado. ¡Participa y contribuye a una mejor calidad de vida!",
    sede: "Colón",
    registro: false,
  },
  {
    id: "3",
    titulo: "Celebración Día de la Salud Comunitaria",
    fecha: "2025-01-25",
    hora: "9:00 AM - 12:00 PM",
    tipo: "celebracion",
    descripcion:
      "Acompáñenos a celebrar el bienestar y la salud de nuestra comunidad con actividades culturales y recreativas para todas las edades.",
    sede: "Santiago",
    registro: false,
  },
  {
    id: "4",
    titulo: "Brigada de Salud Rural",
    fecha: "2025-02-01",
    hora: "7:00 AM - 3:00 PM",
    tipo: "jornada",
    descripcion:
      "La comunidad está invitada a la brigada de salud en veredas rurales, donde se ofrecerán servicios médicos y odontológicos gratuitos.",
    sede: "San Andrés",
    registro: false,
  },
];

const anuncios = [
  {
    id: "1",
    titulo: "Nuevos Horarios de Atención",
    fecha: "2025-01-08",
    contenido:
      "A partir del 15 de enero, la sede Colón ampliará su horario de atención hasta las 6:00 PM.",
    tipo: "info",
  },
  {
    id: "2",
    titulo: "Mantenimiento Sistema de Citas",
    fecha: "2025-01-12",
    contenido:
      "El sistema de citas en línea estará en mantenimiento el 20 de enero de 6:00 AM a 12:00 PM.",
    tipo: "alerta",
  },
  {
    id: "3",
    titulo: "Nueva Especialidad Disponible",
    fecha: "2025-01-10",
    contenido:
      "Ya está disponible el servicio de psicología en la sede principal de Sibundoy.",
    tipo: "novedad",
  },
];

export default function EventosCalendario() {
  const [filtroTipo, setFiltroTipo] = useState<string>("todos");
  const [vistaActiva, setVistaActiva] = useState<"eventos" | "anuncios">(
    "eventos"
  );
  const [emailSuscripcion, setEmailSuscripcion] = useState<string>("");

  const eventosFiltrados =
    filtroTipo === "todos"
      ? eventos
      : eventos.filter((evento) => evento.tipo === filtroTipo);

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case "jornada":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "capacitacion":
        return "bg-green-100 text-green-800 border-green-200";
      case "celebracion":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "anuncio":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case "jornada":
        return "🏥";
      case "capacitacion":
        return "📚";
      case "celebracion":
        return "🎉";
      case "anuncio":
        return "📢";
      default:
        return "📅";
    }
  };

  const getAnuncioColor = (tipo: string) => {
    switch (tipo) {
      case "info":
        return "border-l-blue-500 bg-blue-50";
      case "alerta":
        return "border-l-yellow-500 bg-yellow-50";
      case "novedad":
        return "border-l-green-500 bg-green-50";
      default:
        return "border-l-gray-500 bg-gray-50";
    }
  };

  const handleSuscripcion = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailSuscripcion)) {
      alert("Por favor ingrese un correo electrónico válido");
      return;
    }

    // Crear mensaje para WhatsApp
    const mensaje = `🔔 *NUEVA SUSCRIPCIÓN - NOTIFICACIONES IPS INGA KAMËNTSÁ* 🔔

📧 *Correo Electrónico:* ${emailSuscripcion}

El usuario desea suscribirse para recibir notificaciones de anuncios importantes de la IPS.

---
Fecha de suscripción: ${new Date().toLocaleString("es-CO", {
      timeZone: "America/Bogota",
    })}
#Suscripcion #Notificaciones #IPSIngaKamentsa`;

    const mensajeCodificado = encodeURIComponent(mensaje);
    const urlWhatsApp = `https://wa.me/573132863398?text=${mensajeCodificado}`;

    // Abrir WhatsApp
    window.open(urlWhatsApp, "_blank");

    // Limpiar campo y mostrar confirmación
    setEmailSuscripcion("");
    alert(
      "¡Gracias por suscribirte! Tu correo será registrado y comenzarás a recibir nuestras notificaciones importantes."
    );
  };

  return (
    <section
      id="eventos-calendario"
      className="py-16 bg-gray-50/85 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Eventos y Anuncios
        </h2>

        {/* Selector de vista */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-1 flex">
            <button
              onClick={() => setVistaActiva("eventos")}
              className={`px-6 py-3 rounded-lg transition-colors ${
                vistaActiva === "eventos"
                  ? "bg-green-600 text-white"
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              📅 Eventos Programados
            </button>
            <button
              onClick={() => setVistaActiva("anuncios")}
              className={`px-6 py-3 rounded-lg transition-colors ${
                vistaActiva === "anuncios"
                  ? "bg-green-600 text-white"
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              📢 Anuncios
            </button>
          </div>
        </div>

        {vistaActiva === "eventos" && (
          <>
            {/* Filtros */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setFiltroTipo("todos")}
                className={`px-4 py-2 rounded-lg transition-colors dark:border-white border ${
                  filtroTipo === "todos"
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-600 hover:bg-green-50"
                }`}
              >
                Todos los Eventos
              </button>
              <button
                onClick={() => setFiltroTipo("jornada")}
                className={`px-4 py-2 rounded-lg transition-colors dark:border-white border ${
                  filtroTipo === "jornada"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-blue-50"
                }`}
              >
                🏥 Jornadas de Salud
              </button>
              <button
                onClick={() => setFiltroTipo("capacitacion")}
                className={`px-4 py-2 rounded-lg transition-colors dark:border-white border ${
                  filtroTipo === "capacitacion"
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-600 hover:bg-green-50"
                }`}
              >
                📚 Capacitaciones
              </button>
              <button
                onClick={() => setFiltroTipo("celebracion")}
                className={`px-4 py-2 rounded-lg transition-colors dark:border-white border ${
                  filtroTipo === "celebracion"
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-600 hover:bg-purple-50"
                }`}
              >
                🎉 Celebraciones
              </button>
            </div>

            {/* Lista de eventos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {eventosFiltrados.map((evento) => (
                <div
                  key={evento.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow dark:bg-gray-800 border dark:border-white"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">
                          {getTipoIcon(evento.tipo)}
                        </span>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-1">
                            {evento.titulo}
                          </h3>
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${getTipoColor(
                              evento.tipo
                            )}`}
                          >
                            {evento.tipo.charAt(0).toUpperCase() +
                              evento.tipo.slice(1)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4 ">
                      <div className="flex items-center text-gray-600 dark:text-white">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>
                          {new Date(evento.fecha).toLocaleDateString("es-CO", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>

                      <div className="flex items-center text-gray-600 dark:text-white">
                        <svg
                          className="w-5 h-5 mr-2"
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
                        <span>{evento.hora}</span>
                      </div>

                      <div className="flex items-center text-gray-600 dark:text-white">
                        <svg
                          className="w-5 h-5 mr-2"
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
                        <span>Sede {evento.sede}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 dark:text-white">
                      {evento.descripcion}
                    </p>

                    {evento.registro && (
                      <button
                        onClick={() => {
                          const mensaje = `🏥 *REGISTRO EVENTO - IPS INGA KAMËNTSÁ* 🏥

📅 *Evento:* ${evento.titulo}
📍 *Sede:* ${evento.sede}
📆 *Fecha:* ${new Date(evento.fecha).toLocaleDateString("es-CO", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
🕐 *Hora:* ${evento.hora}

👤 Solicito registrarme para este evento.

---
Fecha de solicitud: ${new Date().toLocaleString("es-CO", {
                            timeZone: "America/Bogota",
                          })}
#RegistroEvento #IPSIngaKamentsa`;

                          const mensajeCodificado = encodeURIComponent(mensaje);
                          const urlWhatsApp = `https://wa.me/573118487680?text=${mensajeCodificado}`;
                          window.open(urlWhatsApp, "_blank");
                        }}
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center gap-2"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382" />
                        </svg>
                        Registrarse al Evento
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {vistaActiva === "anuncios" && (
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {anuncios.map((anuncio) => (
                <div
                  key={anuncio.id}
                  className={`rounded-lg p-6 border-l-4 ${getAnuncioColor(
                    anuncio.tipo
                  )}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {anuncio.titulo}
                      </h3>
                      <p className="text-gray-700 mb-3">{anuncio.contenido}</p>
                      <p className="text-sm text-gray-500">
                        Publicado el{" "}
                        {new Date(anuncio.fecha).toLocaleDateString("es-CO", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="ml-4">
                      <span className="text-2xl">
                        {anuncio.tipo === "info" && "📝"}
                        {anuncio.tipo === "alerta" && "⚠️"}
                        {anuncio.tipo === "novedad" && "🆕"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Suscripción a notificaciones */}
            <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                ¿Quiere recibir notificaciones de anuncios importantes?
              </h3>
              <p className="text-gray-600 mb-6">
                Suscríbase para recibir por correo electrónico los anuncios más
                relevantes de la IPS.
              </p>
              <form
                onSubmit={handleSuscripcion}
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              >
                <input
                  type="email"
                  placeholder="Su correo electrónico"
                  value={emailSuscripcion}
                  onChange={(e) => setEmailSuscripcion(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-800"
                  required
                />
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
