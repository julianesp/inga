export default function InformacionInstitucional() {
  const servicios = [
    'Medicina General',
    'Pediatría',
    'Ginecología y Obstetricia',
    'Odontología',
    'Enfermería',
    'Laboratorio Clínico',
    'Medicina Tradicional Indígena',
    'Promoción y Prevención',
    'Control Prenatal',
    'Vacunación',
    'Primeros Auxilios',
    'Atención Domiciliaria',
    'Consulta Externa',
    'Procedimientos Menores'
  ];

  return (
    <section id="institucional" className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Información Institucional</h2>
        
        {/* Historia y presentación */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Nuestra Historia</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              La IPS INGA KAMËNTSÁ nació como respuesta a la necesidad de brindar servicios de salud 
              culturalmente apropiados para la comunidad indígena Inga del Valle de Sibundoy, Putumayo.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Fundada en 1995, nuestra institución ha crecido para servir no solo a la población indígena 
              Inga y Kamëntsá, sino también a toda la comunidad del Valle de Sibundoy y municipios aledaños.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Durante más de 25 años, hemos trabajado incansablemente para integrar la medicina occidental 
              con los conocimientos ancestrales de medicina tradicional, ofreciendo un modelo de atención 
              integral y respetuoso de la diversidad cultural.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Atención Intercultural</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Reconocemos y valoramos la riqueza cultural de nuestros pueblos. Nuestro equipo incluye 
              médicos tradicionales y profesionales de la salud que hablan inga y kamëntsá.
            </p>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
              <p className="text-green-800 font-semibold">
                &ldquo;Bëngbe kwa iachingana atun yachaikuna suma jambi&rdquo; 
              </p>
              <p className="text-green-700 text-sm mt-1">
                &ldquo;Aquí encontrará buenos médicos y buena medicina&rdquo;
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Trabajamos bajo el principio de complementariedad entre sistemas médicos, 
              respetando las decisiones de nuestros usuarios sobre el tipo de atención que desean recibir.
            </p>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-green-600 text-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Misión
            </h3>
            <p className="leading-relaxed text-green-50">
              Brindar servicios integrales de salud con calidad, calidez y pertinencia cultural, 
              combinando la medicina occidental con los saberes ancestrales de los pueblos indígenas 
              Inga y Kamëntsá, contribuyendo al bienestar físico, mental y espiritual de nuestras 
              comunidades del Valle de Sibundoy y región.
            </p>
          </div>

          <div className="bg-blue-600 text-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Visión
            </h3>
            <p className="leading-relaxed text-blue-50">
              Ser reconocidos como la institución líder en salud intercultural del sur de Colombia, 
              modelo de referencia en la integración exitosa de sistemas médicos, contribuyendo a la 
              preservación de la cultura y mejoramiento de la calidad de vida de los pueblos indígenas 
              y comunidades campesinas de nuestra región.
            </p>
          </div>
        </div>

        {/* Portafolio de Servicios */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Portafolio de Servicios</h3>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios de salud diseñados para atender las necesidades 
            específicas de nuestra población, combinando la medicina moderna con prácticas tradicionales.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {servicios.map((servicio, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border border-green-100 hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">{servicio}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              ¿Necesita información específica sobre algún servicio?
            </p>
            <a 
              href="#contacto" 
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Contactar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}