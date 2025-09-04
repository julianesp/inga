import InformacionInstitucional from '@/components/InformacionInstitucional';

export const metadata = {
  title: 'Información Institucional - IPS INGA KAMËNTSÁ',
  description: 'Conozca la historia, misión, visión y portafolio de servicios de IPS INGA KAMËNTSÁ. Medicina intercultural desde 1995.',
};

export default function InstitucionalPage() {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Información Institucional
            </h1>
            <p className="text-xl leading-relaxed">
              Conoce nuestra historia, misión, visión y el compromiso que tenemos 
              con la salud integral de nuestras comunidades.
            </p>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Más de 25 años al servicio de la salud intercultural
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              La IPS INGA KAMËNTSÁ es una institución pionera en Colombia en la implementación 
              de un modelo de salud intercultural, donde la medicina occidental y la medicina 
              tradicional indígena trabajan de manera complementaria para brindar atención 
              integral a nuestros usuarios.
            </p>
          </div>
        </div>
      </section>

      <InformacionInstitucional />

      {/* Valores Institucionales */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Nuestros Valores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Respeto</h3>
              <p className="text-gray-600">
                Respetamos la diversidad cultural, las creencias y los conocimientos 
                ancestrales de nuestros pueblos.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Calidad</h3>
              <p className="text-gray-600">
                Brindamos servicios de salud con los más altos estándares de 
                calidad y seguridad.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Integridad</h3>
              <p className="text-gray-600">
                Actuamos con honestidad, transparencia y compromiso ético 
                en todas nuestras acciones.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Solidaridad</h3>
              <p className="text-gray-600">
                Trabajamos unidos para el bienestar común de nuestras 
                comunidades y territorio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reconocimientos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Reconocimientos y Logros
            </h2>
            
            <div className="space-y-8">
              <div className="bg-yellow-50 rounded-lg p-8 border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">
                  🏆 Modelo de Salud Intercultural (2010)
                </h3>
                <p className="text-yellow-700">
                  Reconocimiento del Ministerio de Salud como modelo de referencia 
                  en salud intercultural para pueblos indígenas de Colombia.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-8 border-l-4 border-green-400">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  🌿 Certificación en Medicina Tradicional (2015)
                </h3>
                <p className="text-green-700">
                  Primera IPS del país certificada para la práctica formal 
                  de medicina tradicional indígena.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-400">
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  📚 Programa de Formación (2018)
                </h3>
                <p className="text-blue-700">
                  Creación del primer programa de formación en salud intercultural 
                  del suroccidente colombiano.
                </p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-8 border-l-4 border-purple-400">
                <h3 className="text-xl font-bold text-purple-800 mb-3">
                  🤝 Alianza Estratégica (2020)
                </h3>
                <p className="text-purple-700">
                  Alianza con universidades nacionales e internacionales para 
                  la investigación en medicina tradicional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Directivo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Equipo Directivo
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-4xl mb-4">👨‍💼</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Dr. Miguel Tandioy</h3>
                <p className="text-green-600 font-semibold mb-3">Gerente General</p>
                <p className="text-gray-600 text-sm">
                  Médico y líder indígena con más de 20 años de experiencia 
                  en salud intercultural.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-4xl mb-4">👩‍⚕️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Dra. Carmen Chindoy</h3>
                <p className="text-green-600 font-semibold mb-3">Directora Científica</p>
                <p className="text-gray-600 text-sm">
                  Especialista en medicina familiar y comunitaria, 
                  coordinadora de programas interculturales.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Taita Domingo Tandioy</h3>
                <p className="text-green-600 font-semibold mb-3">Coordinador Medicina Tradicional</p>
                <p className="text-gray-600 text-sm">
                  Médico tradicional y sabedor ancestral del pueblo Inga, 
                  guardián de los conocimientos medicinales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compromiso Social */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Nuestro Compromiso Social
            </h2>
            <p className="text-xl leading-relaxed mb-8">
              Trabajamos no solo por la salud individual, sino por el bienestar 
              colectivo de nuestras comunidades, preservando y fortaleciendo 
              nuestras tradiciones culturales y conocimientos ancestrales.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🌱</div>
                <h3 className="text-lg font-bold mb-2">Sostenibilidad</h3>
                <p className="text-sm opacity-90">
                  Cuidamos el medio ambiente y promovemos prácticas sostenibles
                </p>
              </div>
              
              <div>
                <div className="text-3xl mb-2">👨‍👩‍👧‍👦</div>
                <h3 className="text-lg font-bold mb-2">Comunidad</h3>
                <p className="text-sm opacity-90">
                  Fortalecemos el tejido social y la organización comunitaria
                </p>
              </div>
              
              <div>
                <div className="text-3xl mb-2">📚</div>
                <h3 className="text-lg font-bold mb-2">Educación</h3>
                <p className="text-sm opacity-90">
                  Transmitimos conocimientos a las nuevas generaciones
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}