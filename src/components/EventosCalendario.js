"use client";

import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { events, getEventsByMonth, hasEvents } from "@/data/eventsData";

export default function EventosCalendario() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Obtener año y mes actual
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Nombres de los meses
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  // Nombres de los días de la semana
  const dayNames = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];

  // Obtener eventos del mes actual
  const monthEvents = useMemo(
    () => getEventsByMonth(year, month),
    [year, month]
  );

  // Función para obtener el primer día del mes
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // Función para obtener el número de días en el mes
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Función para navegar al mes anterior
  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  // Función para navegar al mes siguiente
  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Generar los días del calendario
  const generateCalendarDays = () => {
    const firstDay = getFirstDayOfMonth(year, month);
    const daysInMonth = getDaysInMonth(year, month);
    const daysInPrevMonth = getDaysInMonth(year, month - 1);
    const days = [];

    // Días del mes anterior
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, daysInPrevMonth - i),
      });
    }

    // Días del mes actual
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(year, month, i),
      });
    }

    // Días del mes siguiente para completar la grilla
    const remainingDays = 42 - days.length; // 6 filas x 7 días
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(year, month + 1, i),
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  // Verificar si una fecha tiene eventos
  const dateHasEvents = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;
    return hasEvents(dateString);
  };

  // Verificar si es el día de hoy
  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  // Agrupar eventos por fecha para la lista
  const upcomingEvents = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return events
      .filter((event) => new Date(event.date + 'T00:00:00') >= today)
      .sort((a, b) => new Date(a.date + 'T00:00:00') - new Date(b.date + 'T00:00:00'))
      .slice(0, 5);
  }, []);

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Calendario de Eventos
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Calendario */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 border dark:border-white">
              {/* Header del Calendario */}
              <div className="flex items-center justify-between mb-6 bg-blue-600 dark:bg-blue-800 text-white py-4 px-6 rounded-lg">
                <button
                  onClick={previousMonth}
                  className="p-2 hover:bg-blue-700 dark:hover:bg-blue-900 rounded-full transition-colors"
                  aria-label="Mes anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <h3 className="text-2xl font-bold">
                  {monthNames[month]} {year}
                </h3>
                <button
                  onClick={nextMonth}
                  className="p-2 hover:bg-blue-700 dark:hover:bg-blue-900 rounded-full transition-colors"
                  aria-label="Mes siguiente"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Nombres de los días */}
              <div className="grid grid-cols-7 gap-2 mb-2">
                {dayNames.map((day) => (
                  <div
                    key={day}
                    className="text-center font-semibold text-gray-600 dark:text-gray-300 py-2"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Días del calendario */}
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((dayObj, index) => {
                  const hasEvent = dateHasEvents(dayObj.date);
                  const isTodayDate = isToday(dayObj.date);

                  return (
                    <div
                      key={index}
                      className={`
                        relative aspect-square flex flex-col items-center justify-center rounded-lg transition-all
                        ${
                          dayObj.isCurrentMonth
                            ? "bg-gray-50 dark:bg-gray-600"
                            : "bg-gray-100 dark:bg-gray-800"
                        }
                        ${
                          isTodayDate
                            ? "bg-pink-500 dark:bg-pink-600 text-white font-bold ring-2 ring-pink-600 dark:ring-pink-500"
                            : ""
                        }
                        ${hasEvent && !isTodayDate ? "cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-500" : ""}
                      `}
                    >
                      <span
                        className={`text-sm ${
                          dayObj.isCurrentMonth
                            ? isTodayDate
                              ? "text-white"
                              : "text-gray-800 dark:text-white"
                            : "text-gray-400 dark:text-gray-500"
                        }`}
                      >
                        {dayObj.day}
                      </span>
                      {hasEvent && (
                        <div className="absolute bottom-1">
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${
                              isTodayDate
                                ? "bg-white"
                                : "bg-pink-500 dark:bg-pink-400"
                            }`}
                          ></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Leyenda */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-pink-500 rounded"></div>
                  <span className="text-gray-600 dark:text-gray-300">
                    Día actual
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-50 dark:bg-gray-600 rounded flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-pink-500 dark:bg-pink-400 rounded-full"></div>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">
                    Día con evento
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Lista de Próximos Eventos */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-b from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 rounded-lg shadow-lg p-6 text-white sticky top-4">
              <h3 className="text-2xl font-bold mb-6">Próximos Eventos</h3>

              <div className="space-y-4">
                {upcomingEvents.length > 0 ? (
                  upcomingEvents.map((event) => {
                    const eventDate = new Date(event.date);
                    const day = eventDate.getDate();
                    const monthName = monthNames[eventDate.getMonth()].slice(
                      0,
                      3
                    );

                    return (
                      <div
                        key={event.id}
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer border border-white/20"
                      >
                        <div className="flex gap-3">
                          <div className="flex-shrink-0 text-center">
                            <div className="text-pink-300 text-xs font-semibold">
                              {monthName}
                            </div>
                            <div className="text-3xl font-bold text-pink-400">
                              {day}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-sm mb-1 line-clamp-2">
                              {event.title}
                            </h4>
                            <p className="text-xs text-blue-100 line-clamp-2">
                              {event.description}
                            </p>
                            {event.location && (
                              <p className="text-xs text-blue-200 mt-1 flex items-center gap-1">
                                <span>📍</span>
                                {event.location}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-3">📅</div>
                    <p className="text-blue-100">
                      No hay eventos próximos programados
                    </p>
                  </div>
                )}
              </div>

              {upcomingEvents.length > 0 && (
                <div className="mt-6 pt-4 border-t border-white/20">
                  <p className="text-xs text-blue-100 text-center">
                    Mostrando los próximos {upcomingEvents.length} eventos
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Eventos del mes actual */}
        {monthEvents.length > 0 && (
          <div className="mt-12 max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Eventos de {monthNames[month]} {year}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {monthEvents.map((event) => {
                const eventDate = new Date(event.date);
                const day = eventDate.getDate();
                const monthName = monthNames[eventDate.getMonth()];

                return (
                  <div
                    key={event.id}
                    className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 border-l-4 border-pink-500 dark:border-pink-400 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="text-center">
                          <div className="text-sm text-gray-500 dark:text-gray-300">
                            {monthName}
                          </div>
                          <div className="text-3xl font-bold text-pink-500 dark:text-pink-400">
                            {day}
                          </div>
                        </div>
                      </div>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold">
                        {event.type || "Evento"}
                      </span>
                    </div>
                    <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                      {event.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      {event.description}
                    </p>
                    {event.location && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <span>📍</span>
                        {event.location}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
