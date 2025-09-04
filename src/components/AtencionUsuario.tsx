'use client';

import { useState } from 'react';

interface PQRSF {
  tipo: string;
  nombres: string;
  apellidos: string;
  tipoDocumento: string;
  numeroDocumento: string;
  telefono: string;
  email: string;
  sede: string;
  descripcion: string;
}

const asociacionUsuarios = [
  {
    nombre: 'María Tandioy',
    cargo: 'Presidenta',
    telefono: '(8) 420-1111',
    email: 'presidencia@asociacionusuarios-inga.org'
  },
  {
    nombre: 'Carlos Jamioy',
    cargo: 'Vicepresidente',
    telefono: '(8) 420-2222',
    email: 'vicepresidencia@asociacionusuarios-inga.org'
  },
  {
    nombre: 'Ana Chindoy',
    cargo: 'Secretaria',
    telefono: '(8) 420-3333',
    email: 'secretaria@asociacionusuarios-inga.org'
  }
];

export default function AtencionUsuario() {
  const [formData, setFormData] = useState<PQRSF>({
    tipo: '',
    nombres: '',
    apellidos: '',
    tipoDocumento: '',
    numeroDocumento: '',
    telefono: '',
    email: '',
    sede: '',
    descripcion: ''
  });

  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el PQRSF
    console.log('PQRSF enviado:', formData);
    alert('Su PQRSF ha sido enviado exitosamente. Recibirá respuesta en máximo 15 días hábiles.');
    setFormData({
      tipo: '',
      nombres: '',
      apellidos: '',
      tipoDocumento: '',
      numeroDocumento: '',
      telefono: '',
      email: '',
      sede: '',
      descripcion: ''
    });
    setShowForm(false);
  };

  return (
    <section id="atencion-usuario" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Atención al Usuario</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <div className="bg-green-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-800">Correo Institucional</p>
                    <a href="mailto:contacto@ips-inga-kamentsa.org" className="text-green-600 hover:underline">
                      contacto@ips-inga-kamentsa.org
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-800">Línea Principal</p>
                    <p className="text-gray-600">(8) 420-1234</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Asociación de Usuarios */}
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Asociación de Usuarios</h3>
              <p className="text-gray-600 mb-6">
                La Asociación de Usuarios de la IPS INGA KAMËNTSÁ representa los intereses y derechos de nuestros usuarios, 
                velando por la calidad y accesibilidad de los servicios de salud.
              </p>
              
              <div className="space-y-4">
                {asociacionUsuarios.map((miembro, index) => (
                  <div key={index} className="border-l-4 border-blue-400 pl-4">
                    <h4 className="font-semibold text-gray-800">{miembro.nombre}</h4>
                    <p className="text-sm text-gray-600 mb-1">{miembro.cargo}</p>
                    <p className="text-sm text-gray-600">Tel: {miembro.telefono}</p>
                    <a href={`mailto:${miembro.email}`} className="text-sm text-blue-600 hover:underline">
                      {miembro.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PQRSF */}
          <div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Gestión PQRSF</h3>
              <p className="text-gray-600 mb-6">
                Peticiones, Quejas, Reclamos, Sugerencias y Felicitaciones. 
                Su opinión es importante para mejorar nuestros servicios.
              </p>
              
              {!showForm ? (
                <div className="text-center">
                  <button
                    onClick={() => setShowForm(true)}
                    className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                  >
                    Enviar PQRSF
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tipo de PQRSF *
                    </label>
                    <select
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Seleccionar...</option>
                      <option value="peticion">Petición</option>
                      <option value="queja">Queja</option>
                      <option value="reclamo">Reclamo</option>
                      <option value="sugerencia">Sugerencia</option>
                      <option value="felicitacion">Felicitación</option>
                    </select>
                  </div>

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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Tipo de Documento *
                      </label>
                      <select
                        name="tipoDocumento"
                        value={formData.tipoDocumento}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="">Seleccionar...</option>
                        <option value="CC">Cédula de Ciudadanía</option>
                        <option value="TI">Tarjeta de Identidad</option>
                        <option value="RC">Registro Civil</option>
                        <option value="CE">Cédula de Extranjería</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Número de Documento *
                      </label>
                      <input
                        type="text"
                        name="numeroDocumento"
                        value={formData.numeroDocumento}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Sede relacionada
                    </label>
                    <select
                      name="sede"
                      value={formData.sede}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Seleccionar...</option>
                      <option value="sibundoy">Sibundoy</option>
                      <option value="colon">Colón</option>
                      <option value="santiago">Santiago</option>
                      <option value="san-andres">San Andrés</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Descripción detallada *
                    </label>
                    <textarea
                      name="descripcion"
                      value={formData.descripcion}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Describa detalladamente su petición, queja, reclamo, sugerencia o felicitación..."
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                    >
                      Enviar PQRSF
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="flex-1 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}