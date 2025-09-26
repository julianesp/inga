"use client";

import { useState } from "react";

interface ContactoSede {
  id: string;
  nombre: string;
  municipio: string;
  direccion: string;
  telefono: string;
  email: string;
  horarios: string;
  coordenadas: {
    lat: number;
    lng: number;
  };
}

const contactoSedes: ContactoSede[] = [
  {
    id: "sibundoy",
    nombre: "Sede Principal Sibundoy",
    municipio: "Sibundoy, Putumayo",
    direccion: "Calle Principal #123, Centro",
    telefono: "3132863398",
    email: "ipsingakamentsa@gmail.com",
    horarios: "Lunes a Viernes: 7:00 AM - 5:00 PM\nSábados: 8:00 AM - 12:00 PM",
    coordenadas: { lat: 1.1585, lng: -76.9386 },
  },
  {
    id: "colon",
    nombre: "Sede Colón",
    municipio: "Colón, Putumayo",
    direccion: "Carrera 5 #67-89, Barrio Centro",
    telefono: "3132863398",
    email: "ipsingakamentsa@gmail.com",
    horarios: "Lunes a Viernes: 8:00 AM - 4:00 PM\nSábados: 8:00 AM - 12:00 PM",
    coordenadas: { lat: 1.2047, lng: -76.9847 },
  },
  {
    id: "santiago",
    nombre: "Sede Santiago",
    municipio: "Santiago, Putumayo",
    direccion: "Calle 12 #34-56, Zona Centro",
    telefono: "3132863398",
    email: "ipsingakamentsa@gmail.com",
    horarios: "Lunes a Viernes: 8:00 AM - 4:00 PM",
    coordenadas: { lat: 1.1889, lng: -76.8975 },
  },
  {
    id: "san-andres",
    nombre: "Sede San Andrés",
    municipio: "San Andrés, Putumayo",
    direccion: "Avenida Central #78-90, Centro",
    telefono: "3132863398",
    email: "ipsingakamentsa@gmail.com",
    horarios: "Lunes a Viernes: 8:00 AM - 4:00 PM",
    coordenadas: { lat: 1.2156, lng: -76.8567 },
  },
];

export default function ContactoSedes() {
  const [selectedSede, setSelectedSede] = useState<string>("sibundoy");
  const [showCitasForm, setShowCitasForm] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    telefono: "",
    email: "",
    sede: "",
    fechaPreferida: "",
    horaPreferida: "",
    especialidad: "",
    observaciones: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOpenForm = () => {
    setShowCitasForm(true);
  };

  const handleCloseForm = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowCitasForm(false);
      setIsClosing(false);
    }, 300); // Duración de la animación
  };

  const handleSubmitCita = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Solicitud de cita:", formData);
    alert(
      "Su solicitud de cita ha sido enviada. Nos pondremos en contacto con usted pronto."
    );
    setFormData({
      nombres: "",
      apellidos: "",
      telefono: "",
      email: "",
      sede: "",
      fechaPreferida: "",
      horaPreferida: "",
      especialidad: "",
      observaciones: "",
    });
    handleCloseForm();
  };

  const selectedSedeData = contactoSedes.find(
    (sede) => sede.id === selectedSede
  );

  return (
    <>
      <section id="contacto" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Contactos y Sedes
          </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de sedes */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Seleccionar Sede
            </h3>
            <div className="space-y-3">
              {contactoSedes.map((sede) => (
                <button
                  key={sede.id}
                  onClick={() => setSelectedSede(sede.id)}
                  className={`w-full text-left p-4 rounded-lg transition-colors ${
                    selectedSede === sede.id
                      ? "bg-green-600 text-white shadow-lg"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  <div className="font-semibold">{sede.nombre}</div>
                  <div className="text-sm opacity-90">{sede.municipio}</div>
                </button>
              ))}
            </div>

            {/* Botón para agendar citas */}
            <div className="mt-6">
              <button
                onClick={showCitasForm ? handleCloseForm : handleOpenForm}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold cursor-pointer"
              >
                {showCitasForm ? "Cerrar Formulario" : "Programar Cita"}
              </button>
            </div>
          </div>

          {/* Información de la sede seleccionada */}
          <div className="lg:col-span-2">
            {selectedSedeData && (
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  {selectedSedeData.nombre}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0"
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
                      <div>
                        <p className="font-semibold text-gray-800">Dirección</p>
                        <p className="text-gray-600">
                          {selectedSedeData.direccion}
                        </p>
                        <p className="text-gray-600">
                          {selectedSedeData.municipio}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <svg
                        className="w-6 h-6 text-green-600 mr-3"
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
                      <div>
                        <p className="font-semibold text-gray-800">Teléfono</p>
                        <a
                          href={`tel:${selectedSedeData.telefono}`}
                          className="text-green-600 hover:underline"
                        >
                          {selectedSedeData.telefono}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <svg
                        className="w-6 h-6 text-green-600 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-800">
                          Correo Electrónico
                        </p>
                        <a
                          href={`mailto:${selectedSedeData.email}`}
                          className="text-green-600 hover:underline"
                        >
                          {selectedSedeData.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0"
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
                      <div>
                        <p className="font-semibold text-gray-800 mb-2">
                          Horarios de Atención
                        </p>
                        <div className="text-gray-600 whitespace-pre-line">
                          {selectedSedeData.horarios}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mapa placeholder */}
                <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-gray-600">
                    <svg
                      className="w-16 h-16 mx-auto mb-2"
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
                    <p>Mapa de ubicación</p>
                    <p className="text-sm">
                      Lat: {selectedSedeData.coordenadas.lat}, Lng:{" "}
                      {selectedSedeData.coordenadas.lng}
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>
          </div>
        </div>
      </section>

      {/* Modal de formulario de citas */}
      {showCitasForm && (
        <div className={`fixed inset-0 z-40 flex items-end justify-center p-4 bg-opacity-50 backdrop-blur-sm  transition-all duration-300 ease-in-out ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}>
          <div className={`relative bg-white rounded-lg shadow-xl shadow-gray-500  p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border-black border-1  transition-all duration-300 ease-in-out ${
            isClosing ? 'opacity-0 scale-95 translate-y-4' : 'opacity-100 scale-100 -translate-y-3'
          }`}>
            {/* Botón de cerrar */}
              <button
                onClick={handleCloseForm}
                className="absolute top-4 right-4 text-black  text-2xl font-bold border border-black rounded-full w-8 cursor-pointer hover:scale-120 transition-all duration-300 ease-in-out hover:bg-black hover:text-white "
              >
              ×
            </button>

            <h4 className="text-2xl font-bold text-gray-800 mb-6">
              Programar Cita
            </h4>
            <form onSubmit={handleSubmitCita} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombres *
                  </label>
                  <input
                    type="text"
                    name="nombres"
                    value={formData.nombres}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Apellidos *
                  </label>
                  <input
                    type="text"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Sede *
                </label>
                <select
                  name="sede"
                  value={formData.sede}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                >
                  <option value="" className="text-gray-500">Seleccionar sede...</option>
                  <option value="sibundoy">Sibundoy</option>
                  <option value="colon">Colón</option>
                  <option value="santiago">Santiago</option>
                  <option value="san-andres">San Andrés</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Fecha Preferida *
                  </label>
                  <input
                    type="date"
                    name="fechaPreferida"
                    value={formData.fechaPreferida}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Hora Preferida *
                  </label>
                  <select
                    name="horaPreferida"
                    value={formData.horaPreferida}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  >
                    <option value="" className="text-gray-500">Seleccionar...</option>
                    <option value="08:00">8:00 AM</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Especialidad
                  </label>
                  <select
                    name="especialidad"
                    value={formData.especialidad}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  >
                    <option value="">Seleccionar...</option>
                    <option value="medicina-general">
                      Medicina General
                    </option>
                    <option value="pediatria">Pediatría</option>
                    <option value="ginecologia">Ginecología</option>
                    <option value="odontologia">Odontología</option>
                    <option value="medicina-tradicional">
                      Medicina Tradicional
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Observaciones
                </label>
                <textarea
                  name="observaciones"
                  value={formData.observaciones}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-500"
                  placeholder="Motivo de la consulta o información adicional..."
                ></textarea>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleCloseForm}
                  className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 transition-colors font-semibold cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold cursor-pointer"
                >
                  Enviar Solicitud
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
