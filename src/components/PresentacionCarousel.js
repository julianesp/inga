"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Medicina con Identidad Cultural",
    subtitle: "IPS INGA KAMËNTSÁ",
    description:
      "Combinamos la medicina occidental con los conocimientos ancestrales de los pueblos Inga y Kamëntsá.",
    image:
      "https://ghx22gzm9l6t5pgk.public.blob.vercel-storage.com/images/portada.jpg",
    cta: {
      primary: { text: "Conocer Servicios", href: "/servicios" },
      secondary: { text: "Nuestras Sedes", href: "/sedes" },
    },
    bgColor: "from-green-600 to-blue-700",
  },
  {
    id: 2,
    title: "Atención 24/7",
    subtitle: "Servicios de Urgencias",
    description:
      "Estamos disponibles las 24 horas para atender sus emergencias médicas en todas nuestras sedes.",
    image: "/api/placeholder/1200/600",
    cta: {
      primary: { text: "Contactar Urgencias", href: "tel:+57842041199" },
      secondary: { text: "Ver Sedes", href: "/sedes" },
    },
    bgColor: "from-red-600 to-orange-700",
  },
  {
    id: 3,
    title: "Medicina Ancestral",
    subtitle: "Sabiduría Tradicional",
    description:
      "Preservamos y aplicamos los conocimientos medicinales ancestrales de nuestros pueblos originarios.",
    image: "/api/placeholder/1200/600",
    cta: {
      primary: { text: "Conocer Más", href: "/servicios" },
      secondary: { text: "Agendar Cita", href: "/contacto" },
    },
    bgColor: "from-green-700 to-emerald-800",
  },
];

export default function PresentacionCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative h-[600px] overflow-hidden -top-12">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          {/* Background image (for first slide) */}
          {index === 0 && (
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            ></div>
          )}

          {/* Background gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${slide.bgColor} ${index === 0 ? "opacity-75" : "opacity-100"
              }`}
          ></div>

          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-white space-y-6">
                  <div>
                    <p className="text-lg font-medium text-yellow-300 mb-2">
                      {slide.subtitle}
                    </p>
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-gray-100 leading-relaxed">
                      {slide.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    {slide.cta.primary.href.startsWith("tel:") ? (
                      <a
                        href={slide.cta.primary.href}
                        className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-200"
                      >
                        {slide.cta.primary.text}
                        <svg
                          className="ml-2 w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        href={slide.cta.primary.href}
                        className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-200"
                      >
                        {slide.cta.primary.text}
                        <svg
                          className="ml-2 w-5 h-5"
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
                      </Link>
                    )}

                    <Link
                      href={slide.cta.secondary.href}
                      className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
                    >
                      {slide.cta.secondary.text}
                    </Link>
                  </div>
                </div>

                {/* Illustration/Icon area */}
                <div className="hidden lg:flex justify-center items-center">
                  <div className="relative">
                    <div className="w-80 h-80 bg-white bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <div className="text-center">
                        {index === 0 && (
                          <div>
                            <div className="text-8xl mb-4">🏥</div>
                            <p className="text-white font-semibold text-lg">
                              Salud Integral
                            </p>
                          </div>
                        )}
                        {index === 1 && (
                          <div>
                            <div className="text-8xl mb-4">🚨</div>
                            <p className="text-white font-semibold text-lg">
                              Urgencias 24/7
                            </p>
                          </div>
                        )}
                        {index === 2 && (
                          <div>
                            <div className="text-8xl mb-4">🌿</div>
                            <p className="text-white font-semibold text-lg">
                              Medicina Ancestral
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Floating decorative elements */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full animate-pulse flex items-center justify-center">
                      <span className="text-2xl">✨</span>
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full animate-bounce flex items-center justify-center">
                      <span className="text-xl">⚕️</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-80 text-white p-3 rounded-full hover:bg-opacity-75 dark:hover:bg-opacity-90 transition-colors z-20"
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
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-80 text-white p-3 rounded-full hover:bg-opacity-75 dark:hover:bg-opacity-90 transition-colors z-20"
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

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentSlide
              ? "bg-yellow-400"
              : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute bottom-6 right-4 z-20">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${isAutoPlaying
            ? "bg-green-500 text-white"
            : "bg-gray-500 text-white hover:bg-gray-400"
            }`}
        >
          {isAutoPlaying ? "⏸️ Pausa" : "▶️ Auto"}
        </button>
      </div>
    </div>
  );
}
