'use client';

import { useState, useEffect, useRef } from 'react';
import { searchContent, categories } from '@/data/searchIndex';
import Link from 'next/link';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  url: string;
  priority: string;
}

export default function GlobalSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Cerrar resultados cuando se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Realizar búsqueda con debounce
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchTerm.trim().length >= 2) {
        setIsLoading(true);
        const searchResults = searchContent(searchTerm, selectedCategory ? (selectedCategory as never) : null);
        setResults(searchResults);
        setIsOpen(true);
        setIsLoading(false);
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, selectedCategory]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (results.length > 0) {
      // Navegar al primer resultado
      window.location.href = results[0].url;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-600';
      case 'high': return 'text-green-600';
      case 'medium': return 'text-blue-600';
      case 'low': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'critical': return 'Urgente';
      case 'high': return 'Importante';
      case 'medium': return 'Medio';
      case 'low': return 'Informativo';
      default: return '';
    }
  };

  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm.trim()) return text;
    
    const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 text-yellow-900 px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  return (
    <div className="bg-white py-8 border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Título de la sección */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Buscador de Información Pública
            </h2>
            <p className="text-gray-600">
              Encuentra servicios, trámites, información institucional y más
            </p>
          </div>

          {/* Contenedor de búsqueda */}
          <div ref={searchRef} className="relative">
            <form onSubmit={handleSearch} className="space-y-4">
              {/* Filtro por categoría */}
              <div className="flex flex-col md:flex-row gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-black"
                >
                  <option value="" className="text-black">Todas las categorías</option>
                  {categories.map((category) => (
                    <option key={category} value={category} className="text-black">
                      {category}
                    </option>
                  ))}
                </select>

                {/* Campo de búsqueda */}
                <div className="flex flex-1">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar servicios, trámites, información..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-black placeholder-gray-500"
                  />
                  <button
                    type="submit"
                    disabled={results.length === 0}
                    className="bg-green-600 text-white px-6 py-3 rounded-r-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isLoading ? (
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </form>

            {/* Resultados de búsqueda */}
            {isOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                {results.length > 0 ? (
                  <div className="p-2">
                    <div className="text-sm text-gray-600 px-3 py-2 border-b">
                      {results.length} resultado{results.length !== 1 ? 's' : ''} encontrado{results.length !== 1 ? 's' : ''}
                    </div>
                    {results.map((result) => (
                      <Link
                        key={result.id}
                        href={result.url}
                        className="block p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-gray-900">
                                {highlightText(result.title, searchTerm)}
                              </h3>
                              <span className={`text-xs px-2 py-1 rounded-full bg-gray-100 ${getPriorityColor(result.priority)}`}>
                                {getPriorityBadge(result.priority)}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                              {highlightText(result.description, searchTerm)}
                            </p>
                            <div className="flex items-center gap-2 text-xs">
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                {result.category}
                              </span>
                              {result.tags.slice(0, 3).map((tag) => (
                                <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                  {tag}
                                </span>
                              ))}
                              {result.tags.length > 3 && (
                                <span className="text-gray-400">
                                  +{result.tags.length - 3} más
                                </span>
                              )}
                            </div>
                          </div>
                          <svg className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : searchTerm.trim().length >= 2 && !isLoading ? (
                  <div className="p-4 text-center text-gray-600">
                    <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.831-6.18-2.209M6.72 3.72a.5.5 0 01.708 0L9 5.293 10.572 3.72a.5.5 0 01.708.708L9.707 6 11.28 7.572a.5.5 0 01-.708.708L9 6.707 7.428 8.28a.5.5 0 01-.708-.708L8.293 6 6.72 4.428a.5.5 0 010-.708z" />
                    </svg>
                    <p className="font-medium">No se encontraron resultados</p>
                    <p className="text-sm">Intenta con otros términos de búsqueda</p>
                  </div>
                ) : null}
              </div>
            )}
          </div>

          {/* Sugerencias de búsqueda */}
          {!searchTerm && (
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-3">Búsquedas frecuentes:</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {['Citas médicas', 'Urgencias', 'PQRSF', 'Directorio', 'Afiliaciones', 'Odontología'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setSearchTerm(suggestion)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
              <Link
                href="/busqueda"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Búsqueda avanzada - Ver todo el contenido
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}