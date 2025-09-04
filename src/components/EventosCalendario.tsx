'use client';

import { useState } from 'react';

interface Evento {
  id: string;
  titulo: string;
  fecha: string;
  hora: string;
  tipo: 'jornada' | 'capacitacion' | 'celebracion' | 'anuncio';
  descripcion: string;
  sede: string;
  imagen?: string;
  registro?: boolean;
}

const eventos: Evento[] = [
  {
    id: '1',
    titulo: 'Jornada de Vacunación Infantil',
    fecha: '2025-01-15',
    hora: '8:00 AM - 4:00 PM',
    tipo: 'jornada',
    descripcion: 'Jornada especial de vacunación para niños de 0 a 5 años. Incluye todas las vacunas del esquema nacional.',
    sede: 'Sibundoy',
    registro: true
  },
  {
    id: '2',
    titulo: 'Taller de Medicina Tradicional',
    fecha: '2025-01-20',
    hora: '2:00 PM - 5:00 PM',
    tipo: 'capacitacion',
    descripcion: 'Taller sobre el uso adecuado de plantas medicinales dirigido por los sabedores tradicionales.',
    sede: 'Colón',
    registro: true
  },
  {
    id: '3',
    titulo: 'Celebración Día de la Medicina Ancestral',
    fecha: '2025-01-25',
    hora: '9:00 AM - 12:00 PM',
    tipo: 'celebracion',
    descripcion: 'Encuentro cultural celebrando la medicina tradicional inga y kamëntsá.',
    sede: 'Santiago',
    registro: false
  },
  {
    id: '4',
    titulo: 'Brigada de Salud Rural',
    fecha: '2025-02-01',
    hora: '7:00 AM - 3:00 PM',
    tipo: 'jornada',
    descripcion: 'Atención médica en veredas alejadas con servicios de medicina general y odontología.',
    sede: 'San Andrés',
    registro: false
  },
  {
    id: '5',
    titulo: 'Capacitación en Primeros Auxilios',
    fecha: '2025-02-10',
    hora: '8:00 AM - 12:00 PM',
    tipo: 'capacitacion',
    descripcion: 'Curso básico de primeros auxilios para líderes comunitarios.',
    sede: 'Sibundoy',
    registro: true
  }
];

const anuncios = [
  {
    id: '1',
    titulo: 'Nuevos Horarios de Atención',
    fecha: '2025-01-08',
    contenido: 'A partir del 15 de enero, la sede Colón ampliará su horario de atención hasta las 6:00 PM.',
    tipo: 'info'
  },
  {
    id: '2',
    titulo: 'Mantenimiento Sistema de Citas',
    fecha: '2025-01-12',
    contenido: 'El sistema de citas en línea estará en mantenimiento el 20 de enero de 6:00 AM a 12:00 PM.',
    tipo: 'alerta'
  },
  {
    id: '3',
    titulo: 'Nueva Especialidad Disponible',
    fecha: '2025-01-10',
    contenido: 'Ya está disponible el servicio de psicología en la sede principal de Sibundoy.',
    tipo: 'novedad'
  }
];

export default function EventosCalendario() {
  const [filtroTipo, setFiltroTipo] = useState<string>('todos');
  const [vistaActiva, setVistaActiva] = useState<'eventos' | 'anuncios'>('eventos');

  const eventosFiltrados = filtroTipo === 'todos' 
    ? eventos 
    : eventos.filter(evento => evento.tipo === filtroTipo);

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'jornada': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'capacitacion': return 'bg-green-100 text-green-800 border-green-200';
      case 'celebracion': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'anuncio': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case 'jornada': return '🏥';
      case 'capacitacion': return '📚';
      case 'celebracion': return '🎉';
      case 'anuncio': return '📢';
      default: return '📅';
    }
  };

  const getAnuncioColor = (tipo: string) => {
    switch (tipo) {
      case 'info': return 'border-l-blue-500 bg-blue-50';
      case 'alerta': return 'border-l-yellow-500 bg-yellow-50';
      case 'novedad': return 'border-l-green-500 bg-green-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  return (
    <section id="eventos-calendario" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Eventos y Anuncios
        </h2>

        {/* Selector de vista */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-1 flex">
            <button
              onClick={() => setVistaActiva('eventos')}
              className={`px-6 py-3 rounded-lg transition-colors ${
                vistaActiva === 'eventos'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              📅 Eventos Programados
            </button>
            <button
              onClick={() => setVistaActiva('anuncios')}
              className={`px-6 py-3 rounded-lg transition-colors ${
                vistaActiva === 'anuncios'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              📢 Anuncios
            </button>
          </div>
        </div>

        {vistaActiva === 'eventos' && (
          <>
            {/* Filtros */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setFiltroTipo('todos')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filtroTipo === 'todos'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-green-50'
                }`}
              >
                Todos los Eventos
              </button>
              <button
                onClick={() => setFiltroTipo('jornada')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filtroTipo === 'jornada'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50'
                }`}
              >
                🏥 Jornadas de Salud
              </button>
              <button
                onClick={() => setFiltroTipo('capacitacion')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filtroTipo === 'capacitacion'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-green-50'
                }`}
              >
                📚 Capacitaciones
              </button>
              <button
                onClick={() => setFiltroTipo('celebracion')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filtroTipo === 'celebracion'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-purple-50'
                }`}
              >
                🎉 Celebraciones
              </button>
            </div>

            {/* Lista de eventos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {eventosFiltrados.map((evento) => (
                <div key={evento.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{getTipoIcon(evento.tipo)}</span>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-1">{evento.titulo}</h3>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${getTipoColor(evento.tipo)}`}>
                            {evento.tipo.charAt(0).toUpperCase() + evento.tipo.slice(1)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{new Date(evento.fecha).toLocaleDateString('es-CO', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{evento.hora}</span>
                      </div>

                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Sede {evento.sede}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{evento.descripcion}</p>

                    {evento.registro && (
                      <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                        Registrarse al Evento
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {vistaActiva === 'anuncios' && (
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {anuncios.map((anuncio) => (
                <div key={anuncio.id} className={`rounded-lg p-6 border-l-4 ${getAnuncioColor(anuncio.tipo)}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{anuncio.titulo}</h3>
                      <p className="text-gray-700 mb-3">{anuncio.contenido}</p>
                      <p className="text-sm text-gray-500">
                        Publicado el {new Date(anuncio.fecha).toLocaleDateString('es-CO', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                    <div className="ml-4">
                      <span className="text-2xl">
                        {anuncio.tipo === 'info' && '📝'}
                        {anuncio.tipo === 'alerta' && '⚠️'}
                        {anuncio.tipo === 'novedad' && '🆕'}
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
                Suscríbase para recibir por correo electrónico los anuncios más relevantes de la IPS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Su correo electrónico"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}