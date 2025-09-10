'use client';

import { useState, useEffect } from 'react';
import { obtenerCitasDelLocalStorage, formatearFechaLegible, eliminarCitaDelLocalStorage } from '@/utils/citasUtils';

const sedes = [
  { id: 'sibundoy', nombre: 'Sede Principal Sibundoy' },
  { id: 'colon', nombre: 'Sede Colón' },
  { id: 'santiago', nombre: 'Sede Santiago' },
  { id: 'san-andres', nombre: 'Sede San Andrés' }
];

export default function AdminCitasPage() {
  const [citas, setCitas] = useState([]);
  const [filtroSede, setFiltroSede] = useState('todas');
  const [filtroEstado, setFiltroEstado] = useState('todas');

  useEffect(() => {
    cargarCitas();
  }, []);

  const cargarCitas = () => {
    const citasGuardadas = obtenerCitasDelLocalStorage();
    setCitas(citasGuardadas);
  };

  const eliminarCita = (citaId) => {
    if (confirm('¿Estás seguro de que quieres eliminar esta cita?')) {
      eliminarCitaDelLocalStorage(citaId);
      cargarCitas();
    }
  };

  const obtenerNombreSede = (sedeId) => {
    const sede = sedes.find(s => s.id === sedeId);
    return sede ? sede.nombre : sedeId;
  };

  const citasFiltradas = citas.filter(cita => {
    const cumpleFiltroSede = filtroSede === 'todas' || cita.sedeId === filtroSede;
    const cumpleFiltroEstado = filtroEstado === 'todas' || cita.estado === filtroEstado;
    return cumpleFiltroSede && cumpleFiltroEstado;
  });

  const exportarCitas = () => {
    const datosExportar = citasFiltradas.map(cita => ({
      Fecha: formatearFechaLegible(cita.fecha),
      Hora: cita.hora,
      Sede: obtenerNombreSede(cita.sedeId),
      Paciente: cita.nombrePaciente,
      Teléfono: cita.telefonoPaciente,
      Documento: `${cita.tipoDocumento}: ${cita.numeroDocumento}`,
      Servicio: cita.servicio,
      Estado: cita.estado,
      'Fecha de creación': new Date(cita.fechaCreacion).toLocaleString('es-CO')
    }));

    const csv = [
      Object.keys(datosExportar[0]).join(','),
      ...datosExportar.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `citas-inga-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const limpiarTodasLasCitas = () => {
    if (confirm('¿Estás seguro de que quieres eliminar TODAS las citas? Esta acción no se puede deshacer.')) {
      localStorage.removeItem('citas-inga');
      cargarCitas();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              📋 Administración de Citas
            </h1>
            <div className="text-sm text-gray-600">
              Total: {citasFiltradas.length} citas
            </div>
          </div>

          {/* Filtros */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Filtrar por sede:
              </label>
              <select
                value={filtroSede}
                onChange={(e) => setFiltroSede(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="todas">Todas las sedes</option>
                {sedes.map(sede => (
                  <option key={sede.id} value={sede.id}>{sede.nombre}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Filtrar por estado:
              </label>
              <select
                value={filtroEstado}
                onChange={(e) => setFiltroEstado(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="todas">Todos los estados</option>
                <option value="agendada">Agendada</option>
                <option value="confirmada">Confirmada</option>
                <option value="cancelada">Cancelada</option>
                <option value="completada">Completada</option>
              </select>
            </div>

            <div className="flex items-end gap-2">
              <button
                onClick={exportarCitas}
                disabled={citasFiltradas.length === 0}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm"
              >
                📄 Exportar CSV
              </button>
              <button
                onClick={limpiarTodasLasCitas}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm"
              >
                🗑️ Limpiar
              </button>
            </div>
          </div>

          {/* Lista de citas */}
          {citasFiltradas.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg font-medium">📭 No hay citas registradas</p>
              <p className="text-sm">Las citas que se agenden aparecerán aquí.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {citasFiltradas
                .sort((a, b) => new Date(a.fecha + ' ' + a.hora) - new Date(b.fecha + ' ' + b.hora))
                .map((cita) => (
                  <div key={cita.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-lg font-semibold text-gray-800">
                            {formatearFechaLegible(cita.fecha)} - {cita.hora}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            cita.estado === 'agendada' ? 'bg-blue-100 text-blue-800' :
                            cita.estado === 'confirmada' ? 'bg-green-100 text-green-800' :
                            cita.estado === 'cancelada' ? 'bg-red-100 text-red-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {cita.estado}
                          </span>
                        </div>
                        
                        <h4 className="font-medium text-gray-900 mb-1">{cita.nombrePaciente}</h4>
                        <p className="text-sm text-gray-600 mb-1">📍 {obtenerNombreSede(cita.sedeId)}</p>
                        
                        <div className="text-sm text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-2">
                          <div>📞 {cita.telefonoPaciente}</div>
                          <div>🆔 {cita.tipoDocumento}: {cita.numeroDocumento}</div>
                          <div>🏥 {cita.servicio}</div>
                          <div>📅 Creada: {new Date(cita.fechaCreacion).toLocaleDateString('es-CO')}</div>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => eliminarCita(cita.id)}
                        className="ml-4 px-3 py-1 bg-red-100 text-red-600 rounded-md hover:bg-red-200 text-sm"
                      >
                        🗑️ Eliminar
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}