"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageCarousel({ images, title, description }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden group">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              width={300}
              height={300}
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover cursor-pointer"
              onClick={openModal}
            />
          </div>
        ))}

        {/* Zoom indicator - Only shows on hover, NO dark background */}
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={openModal}
        >
          {/* Subtle hover overlay */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

          {/* Zoom icon - appears on hover */}
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white bg-opacity-95 rounded-full p-3 transform scale-90 group-hover:scale-100 shadow-lg border-2 border-blue-500">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
          </div>
        </div>

        {/* Mobile touch indicator - small and subtle */}
        <div className="absolute top-3 right-3 bg-blue-500 bg-opacity-80 text-white rounded-full p-1.5 shadow-lg md:hidden">
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
            />
          </svg>
        </div>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors z-10"
            >
              <svg
                className="w-4 h-4"
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
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors z-10"
            >
              <svg
                className="w-4 h-4"
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

        {/* Image indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentImage
                    ? "bg-white"
                    : "bg-white bg-opacity-50 hover:bg-opacity-75"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 dark:text-black">
          {title}
        </h3>
        <p className="text-gray-900 leading-relaxed">
          {description}
        </p>
        {images[currentImage].description && (
          <p className="text-sm text-gray-500 mt-3 italic">
            {images[currentImage].description}
          </p>
        )}
      </div>

      {/* Modal for expanded image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-40 p-2 pt-20"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-xl shadow-2xl max-w-[95vw] lg:max-w-4xl max-h-[80vh] lg:max-h-[75vh] w-full overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors z-20 shadow-lg"
            >
              <svg
                className="w-5 h-5"
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

            {/* Expanded image */}
            <div className="flex flex-col">
              <div className="relative p-4">
                <Image
                  width={300}
                  height={300}
                  src={images[currentImage].url}
                  alt={images[currentImage].alt}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>

              {/* Image description in modal */}
              {images[currentImage].description && (
                <div className="bg-gray-50 px-6 py-4 border-t">
                  <p className="text-gray-800 text-center font-medium">
                    {images[currentImage].description}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* flechas modal */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="fixed left-14 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors shadow-xl z-50"
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
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="fixed right-14 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors shadow-xl z-50"
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

              {/* Image indicators in modal - Fixed at bottom */}
              <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-50">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      goToImage(index);
                    }}
                    className={`w-4 h-4 rounded-full transition-colors duration-200 shadow-lg ${
                      index === currentImage
                        ? "bg-blue-500"
                        : "bg-white bg-opacity-70 hover:bg-opacity-90"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
