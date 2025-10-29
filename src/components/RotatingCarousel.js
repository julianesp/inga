"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/**
 * RotatingCarousel - Componente de carrusel de imágenes con rotación automática
 *
 * @param {Array} images - Array de objetos con la configuración de cada imagen. Estructura:
 *   {
 *     url: string - URL de la imagen,
 *     alt: string - Texto alternativo,
 *     title: string (opcional) - Título de la imagen
 *   }
 * @param {number} interval - Intervalo de rotación en milisegundos (default: 5000)
 * @param {string} height - Altura del carrusel (default: "400px")
 *
 * @example
 * <RotatingCarousel
 *   images={[
 *     { url: "/imagen1.jpg", alt: "Imagen 1", title: "Título 1" },
 *     { url: "/imagen2.jpg", alt: "Imagen 2", title: "Título 2" }
 *   ]}
 *   interval={5000}
 *   height="500px"
 * />
 */
export default function RotatingCarousel({
  images = [],
  interval = 5000,
  height = "400px",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [expandedImage, setExpandedImage] = useState(null);

  useEffect(() => {
    if (!isAutoPlaying || images.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isAutoPlaying, interval, images.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleImageClick = (imageUrl) => {
    setIsAutoPlaying(false);
    setExpandedImage(imageUrl);
  };

  const handleCloseExpandedImage = () => {
    setExpandedImage(null);
    setIsAutoPlaying(true);
  };

  if (images.length === 0) {
    return (
      <div
        className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-lg"
        style={{ height }}
      >
        <p className="text-gray-500 dark:text-gray-400">
          No hay imágenes disponibles
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Modal para imagen expandida */}
      {expandedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center cursor-pointer"
          onClick={handleCloseExpandedImage}
        >
          {/* max-h-[40vh] */}
          <div className="relative max-w-[90vw] max-h-[40vh]">
            <Image
              src={expandedImage}
              alt="Imagen expandida"
              className="max-w-full max-h-[90vh] object-contain"
              width={1920}
              height={1080}
              priority
            />
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
              onClick={handleCloseExpandedImage}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div
        className="relative overflow-hidden rounded-lg shadow-lg"
        style={{ height }}
      >
        {/* Imágenes */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="relative w-full h-full cursor-zoom-in"
              onClick={() => handleImageClick(image.url)}
            >
              <Image
                src={image.url}
                alt={image.alt || `Imagen ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />

              {/* Indicador de zoom */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black bg-opacity-75 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                  <p className="text-sm font-medium">Clic para expandir</p>
                </div>
              </div>

              {/* Título de la imagen */}
              {image.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 pointer-events-none">
                  <p className="text-white text-lg font-semibold text-center">
                    {image.title}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Controles de navegación - Flechas */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all z-20"
              aria-label="Imagen anterior"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all z-20"
              aria-label="Siguiente imagen"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Indicadores de posición */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-white w-8"
                    : "bg-white bg-opacity-50 hover:bg-opacity-75"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Botón de pausa/play */}
        {images.length > 1 && (
          <div className="absolute top-4 right-4 z-20">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                isAutoPlaying
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-gray-500 text-white hover:bg-gray-400"
              }`}
              aria-label={
                isAutoPlaying ? "Pausar rotación" : "Reanudar rotación"
              }
            >
              {isAutoPlaying ? "⏸ Pausa" : "▶ Auto"}
            </button>
          </div>
        )}

        {/* Contador de imágenes */}
        {images.length > 1 && (
          <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm z-20">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </>
  );
}
