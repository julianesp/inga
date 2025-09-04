'use client';

import { useState } from 'react';

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
    id: 'sibundoy',
    nombre: 'Sede Principal Sibundoy',
    municipio: 'Sibundoy',
    direccion: 'Calle Principal #123, Sibundoy, Putumayo',
    telefono: '(8) 420-1234',
    horarios: 'Lunes a Viernes: 7:00 AM - 5:00 PM | Sábados: 8:00 AM - 12:00 PM',
    servicios: ['Medicina General', 'Pediatría', 'Ginecología', 'Laboratorio Clínico', 'Odontología', 'Enfermería', 'Medicina Tradicional']
  },
  {
    id: 'colon',
    nombre: 'Sede Colón',
    municipio: 'Colón',
    direccion: 'Carrera 5 #67-89, Colón, Putumayo',
    telefono: '(8) 420-5678',
    horarios: 'Lunes a Viernes: 8:00 AM - 4:00 PM | Sábados: 8:00 AM - 12:00 PM',
    servicios: ['Medicina General', 'Enfermería', 'Vacunación', 'Control Prenatal', 'Medicina Tradicional']
  },
  {
    id: 'santiago',
    nombre: 'Sede Santiago',
    municipio: 'Santiago',
    direccion: 'Calle 12 #34-56, Santiago, Putumayo',
    telefono: '(8) 420-9012',
    horarios: 'Lunes a Viernes: 8:00 AM - 4:00 PM',
    servicios: ['Medicina General', 'Enfermería', 'Primeros Auxilios', 'Promoción y Prevención']
  },
  {
    id: 'san-andres',
    nombre: 'Sede San Andrés',
    municipio: 'San Andrés',
    direccion: 'Avenida Central #78-90, San Andrés, Putumayo',
    telefono: '(8) 420-3456',
    horarios: 'Lunes a Viernes: 8:00 AM - 4:00 PM',
    servicios: ['Medicina General', 'Enfermería', 'Atención Domiciliaria', 'Medicina Tradicional']
  }
];

export default function SedesSection() {
  const [selectedSede, setSelectedSede] = useState<string>('sibundoy');

  const handleAgendarCita = (sedeId: string) => {
    // Aquí iría la lógica para agendar citas
    alert(`Funcionalidad de citas para ${sedeId} en desarrollo`);
  };

  return (
    <section id="sedes" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Nuestras Sedes</h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Selector de sedes */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Seleccionar Sede</h3>
              <div className="space-y-2">
                {sedes.map((sede) => (
                  <button
                    key={sede.id}
                    onClick={() => setSelectedSede(sede.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedSede === sede.id 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
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
            {sedes.map((sede) => (
              selectedSede === sede.id && (
                <div key={sede.id} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{sede.nombre}</h3>
                      <p className="text-gray-600 mb-2">
                        <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {sede.direccion}
                      </p>
                      <p className="text-gray-600 mb-4">
                        <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {sede.telefono}
                      </p>
                    </div>
                    <button
                      onClick={() => handleAgendarCita(sede.id)}
                      className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
                    >
                      Agendar Cita
                    </button>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">
                      <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Horarios de Atención
                    </h4>
                    <p className="text-gray-600">{sede.horarios}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">
                      <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Servicios Disponibles
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {sede.servicios.map((servicio, index) => (
                        <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                          <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{servicio}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}