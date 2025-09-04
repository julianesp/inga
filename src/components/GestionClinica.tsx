export default function GestionClinica() {
  const educacionPaciente = [
    {
      categoria: 'Prevención y Promoción',
      contenido: [
        'Higiene personal y familiar',
        'Alimentación saludable',
        'Actividad física y ejercicio',
        'Prevención de enfermedades infectocontagiosas',
        'Salud mental y bienestar emocional'
      ]
    },
    {
      categoria: 'Cuidados Específicos',
      contenido: [
        'Cuidado prenatal y postnatal',
        'Lactancia materna',
        'Crecimiento y desarrollo infantil',
        'Cuidados del adulto mayor',
        'Manejo de enfermedades crónicas'
      ]
    },
    {
      categoria: 'Medicina Tradicional',
      contenido: [
        'Uso apropiado de plantas medicinales',
        'Rituales de sanación y armonización',
        'Integración medicina tradicional-occidental',
        'Cuidados espirituales en salud',
        'Preservación del conocimiento ancestral'
      ]
    },
    {
      categoria: 'Seguridad del Paciente',
      contenido: [
        'Derechos y deberes del paciente',
        'Identificación y reporte de eventos adversos',
        'Uso seguro de medicamentos',
        'Consentimiento informado',
        'Comunicación efectiva con el personal de salud'
      ]
    }
  ];

  const protocolosSeguridad = [
    {
      titulo: 'Identificación Segura del Paciente',
      descripcion: 'Verificación de identidad mediante doble confirmación antes de cualquier procedimiento.',
      icono: '🆔'
    },
    {
      titulo: 'Comunicación Efectiva',
      descripcion: 'Protocolos claros de comunicación entre el equipo de salud y con los pacientes.',
      icono: '💬'
    },
    {
      titulo: 'Uso Seguro de Medicamentos',
      descripcion: 'Verificación de medicamentos, dosis y paciente antes de la administración.',
      icono: '💊'
    },
    {
      titulo: 'Prevención de Infecciones',
      descripcion: 'Estrictos protocolos de lavado de manos y esterilización de equipos.',
      icono: '🧼'
    },
    {
      titulo: 'Prevención de Caídas',
      descripcion: 'Evaluación de riesgo y medidas preventivas para evitar caídas de pacientes.',
      icono: '⚠️'
    },
    {
      titulo: 'Procedimientos Seguros',
      descripcion: 'Verificación de sitio quirúrgico y lista de verificación antes de procedimientos.',
      icono: '✅'
    }
  ];

  return (
    <section id="gestion-clinica" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Gestión Clínica y Seguridad del Paciente
        </h2>

        {/* Introducción */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Compromiso con la Excelencia en Atención
          </h3>
          <p className="text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            En IPS INGA KAMËNTSÁ, nos comprometemos con los más altos estándares de calidad y seguridad 
            en la atención médica. Nuestro programa de gestión clínica integra protocolos internacionales 
            con el respeto por las tradiciones culturales de nuestras comunidades.
          </p>
        </div>

        {/* Información y Educación para el Paciente */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Información y Educación para el Paciente
          </h3>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Creemos que un paciente informado es un paciente empoderado. Ofrecemos recursos educativos 
            que combinan conocimientos médicos modernos con sabiduría ancestral.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educacionPaciente.map((tema, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
                <h4 className="text-xl font-bold text-gray-800 mb-4">{tema.categoria}</h4>
                <ul className="space-y-2">
                  {tema.contenido.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Protocolos de Seguridad */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Protocolos de Seguridad del Paciente
          </h3>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Implementamos las mejores prácticas internacionales en seguridad del paciente, 
            adaptadas a nuestro contexto cultural y geográfico.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {protocolosSeguridad.map((protocolo, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">{protocolo.icono}</div>
                <h4 className="text-lg font-bold text-gray-800 mb-3 text-center">
                  {protocolo.titulo}
                </h4>
                <p className="text-gray-600 text-center text-sm">
                  {protocolo.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Derechos y Deberes del Paciente */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
            <h4 className="text-2xl font-bold text-blue-800 mb-6">Derechos del Paciente</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-700">Recibir atención médica de calidad sin discriminación</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-700">Ser informado sobre su estado de salud y tratamientos</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-700">Confidencialidad y privacidad de su información médica</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-700">Participar en decisiones sobre su atención médica</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-700">Recibir atención culturalmente apropiada</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-8 border border-green-200">
            <h4 className="text-2xl font-bold text-green-800 mb-6">Deberes del Paciente</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-green-700">Proporcionar información veraz sobre su estado de salud</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-green-700">Cumplir con los tratamientos y recomendaciones médicas</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-green-700">Respetar al personal de salud y otros pacientes</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-green-700">Asistir puntualmente a las citas programadas</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-green-700">Cuidar y hacer buen uso de las instalaciones</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white">
            <h4 className="text-2xl font-bold mb-4">¿Necesita más información?</h4>
            <p className="mb-6">
              Nuestro equipo está disponible para resolver sus dudas sobre nuestros protocolos 
              de atención y seguridad.
            </p>
            <a 
              href="#contacto" 
              className="inline-block bg-white text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Contactar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}