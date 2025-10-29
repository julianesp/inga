'use client';

import { useState, useEffect } from 'react';
import { obtenerCitasDelLocalStorage, formatearFechaLegible, eliminarCitaDelLocalStorage, guardarCitaEnLocalStorage, generarId, validarDatosCita } from '@/utils/citasUtils';
import { SERVICIOS_DISPONIBLES } from '@/types/citas';
import { cargarCitasEjemplo, agregarCitasEjemplo } from '@/data/citasEjemplo';

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
  const [modalAbierto, setModalAbierto] = useState(false);
  const [formData, setFormData] = useState({
    sedeId: 'sibundoy',
    fecha: '',
    hora: '08:00',
    nombrePaciente: '',
    telefonoPaciente: '',
    tipoDocumento: 'CC',
    numeroDocumento: '',
    servicio: 'Medicina General',
    estado: 'agendada'
  });
  const [errores, setErrores] = useState([]);

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

  const abrirModalNuevaCita = () => {
    // Establecer fecha mínima como hoy
    const hoy = new Date().toISOString().split('T')[0];
    setFormData({
      sedeId: 'sibundoy',
      fecha: hoy,
      hora: '08:00',
      nombrePaciente: '',
      telefonoPaciente: '',
      tipoDocumento: 'CC',
      numeroDocumento: '',
      servicio: 'Medicina General',
      estado: 'agendada'
    });
    setErrores([]);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setErrores([]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errores.length > 0) {
      setErrores([]);
    }
  };

  const guardarNuevaCita = (e) => {
    e.preventDefault();

    const nuevaCita = {
      id: generarId(),
      ...formData,
      fechaCreacion: new Date().toISOString()
    };

    const erroresValidacion = validarDatosCita(nuevaCita);

    if (erroresValidacion.length > 0) {
      setErrores(erroresValidacion);
      return;
    }

    try {
      guardarCitaEnLocalStorage(nuevaCita);
      cargarCitas();
      cerrarModal();
    } catch (error) {
      setErrores(['Error al guardar la cita. Por favor intente nuevamente.']);
    }
  };

  const handleCargarEjemplos = () => {
    if (confirm('¿Deseas cargar las citas de ejemplo? Esto reemplazará todas las citas actuales.')) {
      cargarCitasEjemplo();
      cargarCitas();
    }
  };

  const handleAgregarEjemplos = () => {
    agregarCitasEjemplo();
    cargarCitas();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              📋 Administración de Citas
            </h1>
            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-600">
                Total: {citasFiltradas.length} citas
              </div>
              <button
                onClick={abrirModalNuevaCita}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 font-medium text-sm"
              >
                ➕ Nueva Cita
              </button>
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

            <div className="flex items-end gap-2 flex-wrap">
              <button
                onClick={handleAgregarEjemplos}
                className="px-3 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 text-sm"
              >
                ➕ Agregar Ejemplos
              </button>
              <button
                onClick={handleCargarEjemplos}
                className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm"
              >
                📥 Cargar Ejemplos
              </button>
              <button
                onClick={exportarCitas}
                disabled={citasFiltradas.length === 0}
                className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm"
              >
                📄 Exportar
              </button>
              <button
                onClick={limpiarTodasLasCitas}
                className="px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm"
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

      {/* Modal para crear nueva cita */}
      {modalAbierto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">➕ Nueva Cita</h2>
              <button
                onClick={cerrarModal}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={guardarNuevaCita} className="p-6">
              {/* Errores */}
              {errores.length > 0 && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800 font-semibold mb-2">Por favor corrige los siguientes errores:</p>
                  <ul className="list-disc list-inside text-red-700 text-sm space-y-1">
                    {errores.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Sede */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sede <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="sedeId"
                    value={formData.sedeId}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    {sedes.map(sede => (
                      <option key={sede.id} value={sede.id}>{sede.nombre}</option>
                    ))}
                  </select>
                </div>

                {/* Fecha */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fecha <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                {/* Hora */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Hora <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="hora"
                    value={formData.hora}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="07:00">07:00 AM</option>
                    <option value="07:30">07:30 AM</option>
                    <option value="08:00">08:00 AM</option>
                    <option value="08:30">08:30 AM</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="09:30">09:30 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="10:30">10:30 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="14:30">02:30 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="15:30">03:30 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="16:30">04:30 PM</option>
                    <option value="17:00">05:00 PM</option>
                  </select>
                </div>

                {/* Estado */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Estado <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="estado"
                    value={formData.estado}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="agendada">Agendada</option>
                    <option value="confirmada">Confirmada</option>
                    <option value="completada">Completada</option>
                    <option value="cancelada">Cancelada</option>
                  </select>
                </div>

                {/* Nombre del Paciente */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre del Paciente <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nombrePaciente"
                    value={formData.nombrePaciente}
                    onChange={handleInputChange}
                    placeholder="Ej: María Elena Jacanamejoy"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="telefonoPaciente"
                    value={formData.telefonoPaciente}
                    onChange={handleInputChange}
                    placeholder="Ej: 3201234567"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                {/* Tipo de Documento */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de Documento <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="tipoDocumento"
                    value={formData.tipoDocumento}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="CC">Cédula de Ciudadanía (CC)</option>
                    <option value="TI">Tarjeta de Identidad (TI)</option>
                    <option value="CE">Cédula de Extranjería (CE)</option>
                    <option value="PP">Pasaporte (PP)</option>
                  </select>
                </div>

                {/* Número de Documento */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Número de Documento <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="numeroDocumento"
                    value={formData.numeroDocumento}
                    onChange={handleInputChange}
                    placeholder="Ej: 1234567890"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                {/* Servicio */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Servicio <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    {SERVICIOS_DISPONIBLES.map(servicio => (
                      <option key={servicio} value={servicio}>{servicio}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Botones */}
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={cerrarModal}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 font-medium"
                >
                  Guardar Cita
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}