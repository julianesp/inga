"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function formatFecha(value) {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Sección de noticias destacadas para la página de inicio.
 * Muestra las últimas noticias publicadas (máx. 3) y un enlace a la
 * página completa de noticias.
 */
export default function NoticiasDestacadas() {
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    let activo = true;
    const cargarNoticias = async () => {
      try {
        const res = await fetch("/api/noticias");
        if (!res.ok) throw new Error("Error al cargar noticias");
        const data = await res.json();
        const lista = Array.isArray(data) ? data : (data.results ?? []);
        if (activo) setNoticias(lista.slice(0, 3));
      } catch {
        if (activo) setNoticias([]);
      } finally {
        if (activo) setCargando(false);
      }
    };
    cargarNoticias();
    return () => {
      activo = false;
    };
  }, []);

  // No renderizar la sección si no hay noticias que mostrar.
  if (!cargando && noticias.length === 0) return null;

  return (
    <section className="py-16 bg-white/45 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2
            className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
            data-aos="fade-down"
          >
            📰 Últimas Noticias
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Entérate de las novedades, eventos y comunicados de la IPS Inga
            Kamëntsá.
          </p>
        </div>

        {cargando ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Cargando noticias...
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {noticias.map((noticia) => (
                <article
                  key={noticia.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col"
                  data-aos="fade-up"
                >
                  {noticia.imagen_url && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={noticia.imagen_url}
                      alt={noticia.titulo}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    {noticia.tipo === "evento" && (
                      <span className="inline-block self-start mb-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                        Evento
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {noticia.titulo}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">
                      {noticia.descripcion}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-auto">
                      {formatFecha(noticia.fecha_evento || noticia.creado_en)}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/noticias"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                data-aos="zoom-in"
              >
                Ver todas las noticias
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
