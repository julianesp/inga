"use client";

import Link from "next/link";

export default function Transparencia() {
  const estadosFinancieros = [
    {
      titulo: "Estados Financieros - Septiembre 2025",
      fecha: "30 de Septiembre de 2025",
      descripcion:
        "Estado de Situación Financiera, Estado de Resultados Integral y Estado de Flujo de Efectivo",
      url: "https://ghx22gzm9l6t5pgk.public.blob.vercel-storage.com/estados_financieros/septiembre_30_2025.pdf",
      tipo: "Estados Financieros",
      tamaño: "3.2 MB",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-300/75 dark:bg-gray-900">
      {/* <PresentacionCarousel /> */}

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-green-600 via-green-700 to-blue-800 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              data-aos="fade-up"
            >
              Transparencia y Rendición de Cuentas
            </h1>
            <p
              className="text-xl text-white/90"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Información financiera y de gestión de la IPS Indígena Inga
              Kametsa
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Estados Financieros */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2
                className="text-3xl font-bold text-gray-800 dark:text-white mb-4"
                data-aos="fade-up"
              >
                Estados Financieros
              </h2>
              <p
                className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Consulta nuestros informes financieros y contables que reflejan
                la gestión transparente de recursos
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {estadosFinancieros.map((documento, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className="text-4xl">📄</div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                              {documento.titulo}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                              {documento.descripcion}
                            </p>
                            <div className="flex flex-wrap gap-3 text-sm">
                              <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100">
                                📅 {documento.fecha}
                              </span>
                              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100">
                                📊 {documento.tipo}
                              </span>
                              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100">
                                💾 {documento.tamaño}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          href={documento.url}
                          target="_blank"
                          className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          Ver
                        </Link>
                        <a
                          href={documento.url}
                          download
                          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                          </svg>
                          Descargar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
