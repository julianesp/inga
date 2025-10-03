import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información institucional */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">IK</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">IPS INGA KAMËNTSÁ</h3>
                <p className="text-sm text-gray-300">Servicios de Salud Indígena</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Institución Prestadora de Servicios de Salud comprometida con el bienestar
              de la comunidad indígena Inga Kamëntsá en el Valle de Sibundoy, Putumayo.
            </p>
            <div className="text-sm text-gray-400">
              <p>NIT: 846001214-3</p>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/sedes" className="text-gray-300 hover:text-white transition-colors">
                  Sedes
                </Link>
              </li>
              <li>
                <Link href="/directorio" className="text-gray-300 hover:text-white transition-colors">
                  Directorio Médico
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-gray-300 hover:text-white transition-colors">
                  Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <span>📍</span>
                <div>
                  <p>Calle 15 # 15 - 69</p>
                  <p>Sibundoy, Putumayo</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <Link href="tel:+573132863398" className="hover:text-white transition-colors">
                  313-286-3398
                </Link>
              </div>

              <div className="flex items-center space-x-2">
                <span>📧</span>
                <Link href="mailto:ipsingakamentsa@gmail.com" className="hover:text-white transition-colors">
                  ipsingakamentsa@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sedes */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <h4 className="text-lg font-semibold mb-4">Nuestras Sedes</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-gray-700 p-3 rounded">
              <h5 className="font-semibold text-green-400">Sede Sibundoy</h5>
              <p>Barrio Recreo</p>
              <p className="text-gray-300">Calle 15 # 15 - 69</p>
            </div>
            <div className="bg-gray-700 p-3 rounded">
              <h5 className="font-semibold text-green-400">Sede Colón</h5>
              <p>Barrio Centro</p>
              <p className="text-gray-300">Calle 8 #5-23</p>
            </div>
            <div className="bg-gray-700 p-3 rounded">
              <h5 className="font-semibold text-green-400">Sede Santiago</h5>
              <p className="text-gray-300">Carrera 15 #7-45</p>
            </div>
            <div className="bg-gray-700 p-3 rounded">
              <h5 className="font-semibold text-green-400">Sede San Andrés</h5>
              <p className="text-gray-300">Calle 6 #12-18</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 IPS INGA KAMËNTSÁ. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/atencion-usuario" className="text-gray-400 hover:text-white text-sm transition-colors">
              Atención al Usuario
            </Link>
            <Link href="/contacto" className="text-gray-400 hover:text-white text-sm transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}