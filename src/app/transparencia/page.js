"use client";

import Link from "next/link";
import { useState } from "react";

// Icono PDF inline
function IconoPDF() {
  return (
    <svg
      className="w-5 h-5 text-red-500 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z" />
      <path d="M8.5 13.5h1.8c.8 0 1.4.2 1.8.6.4.4.6.9.6 1.6 0 .7-.2 1.2-.6 1.6-.4.4-1 .6-1.8.6H8.5v-4.4zm1.1 3.5h.6c.4 0 .7-.1.9-.3.2-.2.3-.5.3-.9 0-.4-.1-.7-.3-.9-.2-.2-.5-.3-.9-.3h-.6v2.4zM13.1 13.5h1.7c.5 0 .9.1 1.2.4.3.3.4.6.4 1.1 0 .5-.1.9-.4 1.2-.3.3-.7.4-1.2.4h-.6v1.3h-1.1v-4.4zm1.1 2.1h.4c.2 0 .4-.1.5-.2.1-.1.2-.3.2-.5 0-.2-.1-.4-.2-.5-.1-.1-.3-.2-.5-.2h-.4v1.4z" />
    </svg>
  );
}

// Icono de carpeta/mes
function IconoCarpeta() {
  return (
    <svg
      className="w-5 h-5 text-yellow-500 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z" />
    </svg>
  );
}

// Icono chevron
function IconoChevron({ abierto }) {
  return (
    <svg
      className={`w-5 h-5 transition-transform duration-300 ${abierto ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

// Componente: fila de un documento
function FilaDocumento({ doc }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-3 px-4 rounded-lg bg-white dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-gray-700 transition-colors border border-gray-100 dark:border-gray-700">
      <div className="flex items-center gap-3 min-w-0">
        <IconoPDF />
        <span className="text-sm text-gray-700 dark:text-gray-200 font-medium truncate">
          {doc.nombre}
        </span>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <Link
          href={doc.url}
          target="_blank"
          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors shadow-sm"
        >
          <svg
            className="w-3.5 h-3.5"
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
          href={doc.url}
          download
          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors shadow-sm"
        >
          <svg
            className="w-3.5 h-3.5"
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
  );
}

// Componente: sección colapsable de un grupo (mes, carpeta o categoría)
function GrupoDocumentos({ grupo }) {
  const [abierto, setAbierto] = useState(false);
  return (
    <div className="mb-2">
      <button
        onClick={() => setAbierto(!abierto)}
        className="w-full flex items-center justify-between gap-3 px-4 py-2.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors text-left"
      >
        <div className="flex items-center gap-2">
          <IconoCarpeta />
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            {grupo.nombre}
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-400">
            ({grupo.documentos.length} archivos)
          </span>
        </div>
        <IconoChevron abierto={abierto} />
      </button>
      {abierto && (
        <div className="mt-2 ml-4 flex flex-col gap-1.5">
          {grupo.documentos.map((doc, i) => (
            <FilaDocumento key={i} doc={doc} />
          ))}
        </div>
      )}
    </div>
  );
}

// Componente: acordeón de año
function AcordeonAnio({ anio, defaultAbierto = false }) {
  const [abierto, setAbierto] = useState(defaultAbierto);

  const totalDocs = anio.secciones
    ? anio.secciones.reduce((acc, s) => {
        if (s.documentos) return acc + s.documentos.length;
        if (s.grupos)
          return acc + s.grupos.reduce((a, g) => a + g.documentos.length, 0);
        return acc;
      }, 0)
    : (anio.documentos?.length ?? 0);

  return (
    <div className="mb-4 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
      {/* Cabecera del año */}
      <button
        onClick={() => setAbierto(!abierto)}
        className="w-full flex items-center justify-between px-6 py-5 bg-gradient-to-r from-green-700 to-green-600 dark:from-gray-700 dark:to-gray-600 text-white hover:from-green-800 hover:to-green-700 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
            {anio.año}
          </div>
          <div className="text-left">
            <div className="font-bold text-xl">{anio.año}</div>
            <div className="text-white/75 text-sm">
              {totalDocs} documento{totalDocs !== 1 ? "s" : ""}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {anio.etiqueta && (
            <span className="hidden sm:inline-block text-xs bg-white/20 px-3 py-1 rounded-full">
              {anio.etiqueta}
            </span>
          )}
          <IconoChevron abierto={abierto} />
        </div>
      </button>

      {/* Contenido */}
      {abierto && (
        <div className="bg-gray-50 dark:bg-gray-800 p-5">
          {/* Año con secciones/grupos */}
          {anio.secciones &&
            anio.secciones.map((seccion, i) => (
              <div key={i} className="mb-5">
                {seccion.nombre && (
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2 ml-1">
                    {seccion.nombre}
                  </h4>
                )}
                {seccion.grupos
                  ? seccion.grupos.map((grupo, j) => (
                      <GrupoDocumentos key={j} grupo={grupo} />
                    ))
                  : seccion.documentos.map((doc, j) => (
                      <FilaDocumento key={j} doc={doc} />
                    ))}
              </div>
            ))}
          {/* Año con documentos directos (sin secciones) */}
          {!anio.secciones && anio.documentos && (
            <div className="flex flex-col gap-1.5">
              {anio.documentos.map((doc, i) => (
                <FilaDocumento key={i} doc={doc} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── DATOS ────────────────────────────────────────────────────────────────────

const BASE =
  "https://ghx22gzm9l6t5pgk.public.blob.vercel-storage.com/documentos";

const anios = [
  // ── 2025 ──────────────────────────────────────────────────────────────────
  {
    año: 2025,
    etiqueta: "Más reciente",
    secciones: [
      {
        nombre: "Estados Financieros",
        documentos: [
          {
            nombre: "Estados Financieros 2025",
            url: `${BASE}/2025/estados%20financieros/ESTADOSFINANCIEROS2025.pdf`,
          },
        ],
      },
      {
        nombre: "Documentación Institucional",
        documentos: [
          {
            nombre: "Acta de Asamblea General",
            url: `${BASE}/2025/new/ACTA%20DE%20ASAMBLEA%20GENERAL.pdf`,
          },
          {
            nombre: "Actas de Estados de Asignaciones",
            url: `${BASE}/2025/new/ACTAS%20DE%20ESTADOS%20DE%20ASIGNACIONES.pdf`,
          },
          {
            nombre: "Certificación de Antecedentes",
            url: `${BASE}/2025/new/CERTIFICACION%20DE%20ANTECEDENTES.pdf`,
          },
          {
            nombre: "Certificación de Cumplimiento",
            url: `${BASE}/2025/new/CERTIFICACION%20DE%20CUMPLIMIENTO.pdf`,
          },
          {
            nombre: "Certificado de Cargos Directivos y Gerenciales",
            url: `${BASE}/2025/new/CERTIFICADO%20DE%20CARGOS%20DIRECTIVOS%20Y%20GERENCIALES.pdf`,
          },
        ],
      },
      {
        nombre: "Informe Financiero",
        documentos: [
          {
            nombre: "Acta Asignación Permanente",
            url: `${BASE}/2025/informes%20financieros/ACTA%20ASIGNACION%20PERMANENTE.pdf`,
          },
          {
            nombre: "Acta No Excedente – Resultado del Ejercicio",
            url: `${BASE}/2025/informes%20financieros/ACTA%20NO%20EXCEDENTE%20RESULTADO%20DEL%20EJERCICIO.pdf`,
          },
          {
            nombre:
              "Certificación Cargos Directivos y Gerenciales / Informe de Gestión",
            url: `${BASE}/2025/informes%20financieros/CERTIFICACION%20CARGOS%20DIRECTIVOS%20Y%20GERENCIALESINFORME%20DE%20GESTION.pdf`,
          },
          {
            nombre: "Certificado Antecedentes",
            url: `${BASE}/2025/informes%20financieros/CERTIFICADO%20ANTECEDENTES.pdf`,
          },
          {
            nombre: "Certificado de Cumplimiento",
            url: `${BASE}/2025/informes%20financieros/CERTIFICADO%20DE%20CUMPLIMIENTO.pdf`,
          },
          {
            nombre: "Certificado Estados Financieros",
            url: `${BASE}/2025/informes%20financieros/CERTIFICADO%20ESTADOS%20%20FINANCIEROS.pdf`,
          },
          {
            nombre: "Informe de Gestión",
            url: `${BASE}/2025/informes%20financieros/INFORME%20DE%20GESTION.pdf`,
          },
          
        ],

        
      },
    ],
  },

  // ── 2024 ──────────────────────────────────────────────────────────────────
  {
    año: 2024,
    secciones: [
      {
        nombre: "Informe Financiero",
        documentos: [
          {
            nombre: "Acta Asamblea General 2024",
            url: `${BASE}/2024/informe%20financiero/ACTA%20ASAMBLEA%20GENERAL%202024.pdf`,
          },
          {
            nombre: "Acta de Posesión Representante Legal 2024",
            url: `${BASE}/2024/informe%20financiero/ACTA%20DE%20POSESION%20REPRESENTANTE%20LEGAL%202024.pdf`,
          },
          {
            nombre: "Certificación de Antecedentes Judiciales 2024",
            url: `${BASE}/2024/informe%20financiero/CERTFICACION%20DE%20ANTECEDENTES%20JUDIACIALES%202024.pdf`,
          },
          {
            nombre: "Certificación de Requisitos 2024",
            url: `${BASE}/2024/informe%20financiero/CERTIFICACION%20DE%20REQUISITOS%202024.pdf`,
          },
          {
            nombre: "Certificación Integrantes Junta Directiva",
            url: `${BASE}/2024/informe%20financiero/CERTIFICACION%20INTEGRANTES%20JUNTA%20DIRECTIVA.pdf`,
          },
          {
            nombre: "Estados Financieros 2024",
            url: `${BASE}/2024/informe%20financiero/ESTADOS%20FINANCIERO%202024.pdf`,
          },
          {
            nombre: "Informe de Gestión IPS-I Inga Kamentsa 2024",
            url: `${BASE}/2024/informe%20financiero/INFORME%20DE%20GESTION%20IPS-I%20INGA%20KAMENTSA%202024.pdf`,
          },
          {
            nombre: "RUT Asociación IPS Inga Kamentsa 2024",
            url: `${BASE}/2024/informe%20financiero/RUT%20ASOCIACION%20IPS%20INGA%20KAMENTSA%202024.pdf`,
          },
        ],
      },
    ],
  },

  // ── 2023 (datos 2022) ──────────────────────────────────────────────────────
  {
    año: 2023,
    secciones: [
      {
        nombre: "Informe Financiero (vigencia 2022)",
        documentos: [
          {
            nombre: "Informe de Gestión IPS 2022",
            url: `${BASE}/2023/informe%20financiero/1.INFORME%20DE%20GESTION%20IPS%202022%20IPS-I%20INGA%20KAMENTSA.pdf`,
          },
          {
            nombre: "Estados Financieros 2022",
            url: `${BASE}/2023/informe%20financiero/2.ESTADOS%20FINANCIEROS%202022.pdf`,
          },
          {
            nombre: "Certificado Cumplimiento de Requisitos",
            url: `${BASE}/2023/informe%20financiero/3.CERTIFICADO%20CUMPLIMIENTO%20DE%20REQUISITOS.pdf`,
          },
          {
            nombre: "Certificado de Existencia y Representación Legal",
            url: `${BASE}/2023/informe%20financiero/4.CERTIFICADO%20DE%20EXISTENCIA%20Y%20REPRESENTACI%C3%93N%20LEGAL.pdf`,
          },
          {
            nombre: "Certificado Antecedentes Judiciales",
            url: `${BASE}/2023/informe%20financiero/5.CERTIFICADO%20ANTECEDENTES%20JUDICIALES.pdf`,
          },
          {
            nombre: "Acta de Asamblea",
            url: `${BASE}/2023/informe%20financiero/6.ACTA%20DE%20ASAMBLEA.pdf`,
          },
          {
            nombre: "Certificado Cargos Directivos",
            url: `${BASE}/2023/informe%20financiero/7.CERTIFICADO%20CARGOS%20DIRECTIVOS.pdf`,
          },
          {
            nombre: "RUT Actualizado Inga",
            url: `${BASE}/2023/informe%20financiero/8.RUT%20ACTUALIZADO%20INGA.pdf`,
          },
        ],
      },
    ],
  },

  // ── 2021 ──────────────────────────────────────────────────────────────────
  {
    año: 2021,
    secciones: [
      {
        nombre: "Informe Financiero",
        documentos: [
          {
            nombre: "1. Estados Financieros y Notas",
            url: `${BASE}/2021/informe%20financiero/1.%20ESTADOS%20FINANCIEROS%20Y%20NOTAS.pdf`,
          },
          {
            nombre: "2. RUT",
            url: `${BASE}/2021/informe%20financiero/2.%20RUT%20.pdf`,
          },
          {
            nombre: "3. Informe de Gestión 2021",
            url: `${BASE}/2021/informe%20financiero/3.%20INFORME%20DE%20GESTI%C3%93N%202021.pdf`,
          },
          {
            nombre:
              "4. Certificación Representación Legal y Antecedentes Legales",
            url: `${BASE}/2021/informe%20financiero/4.%20CERTIFICACION%20REPRESENTACION%20LEGAL%20Y%20ANTECEDENTES%20LEGALES.pdf`,
          },
          {
            nombre: "5. Certificación de Requisitos del Representante Legal",
            url: `${BASE}/2021/informe%20financiero/5.%20CERTIFICACION%20DE%20REQUISITOS%20DEL%20REPRESENTANTE%20LEGAL.pdf`,
          },
          {
            nombre: "6. Certificado Remuneración Gerente y Junta Directiva",
            url: `${BASE}/2021/informe%20financiero/6.%20CERTIFICADO%20REMUNERACI%C3%93N%20GERENTE%20Y%20JUNTA%20DIRECTIVA.pdf`,
          },
          {
            nombre: "7. Acta Junta Directiva – Asignaciones Permanentes",
            url: `${BASE}/2021/informe%20financiero/7.%20ACTA%20JUNTA%20DIRECTIVA-ASIGNACIONES%20PERMANETES.pdf`,
          },
        ],
      },
    ],
  },

  // ── 2020 ──────────────────────────────────────────────────────────────────
  {
    año: 2020,
    secciones: [
      {
        nombre: "Informe Financiero",
        documentos: [
          {
            nombre: "1. Estados Financieros y Notas",
            url: `${BASE}/2020/informe%20financiero/1.%20ESTADOS%20FINANCIEROS%20Y%20NOTAS.pdf`,
          },
          {
            nombre: "2. RUT Actualizado",
            url: `${BASE}/2020/informe%20financiero/2.%20RUT%20ACTUALIZADO14737309010.pdf`,
          },
          {
            nombre: "3. Informe de Gestión 2020",
            url: `${BASE}/2020/informe%20financiero/3.%20INFORME%20DE%20GESTI%C3%93N%202020.pdf`,
          },
          {
            nombre:
              "4. Certificación Representación Legal y Antecedentes Legales",
            url: `${BASE}/2020/informe%20financiero/4.%20CERTIFICACION%20REPRESENTACION%20LEGAL%20Y%20ANTECEDENTES%20LEGALES.pdf`,
          },
          {
            nombre: "5. Certificación de Requisitos del Representante Legal",
            url: `${BASE}/2020/informe%20financiero/5.%20CERTIFICACION%20DE%20REQUISITOS%20DEL%20REPRESENTANTE%20LEGAL.pdf`,
          },
          {
            nombre: "6. Certificado Remuneración Gerente y Junta Directiva",
            url: `${BASE}/2020/informe%20financiero/6.%20CERTIFICADO%20REMUNERACI%C3%93N%20GERENTE%20Y%20JUNTA%20DIRECTIVA.pdf`,
          },
          {
            nombre: "7. Acta Junta Directiva – Asignaciones Permanentes",
            url: `${BASE}/2020/informe%20financiero/7.%20ACTA%20JUNTA%20DIRECTIVA-ASIGNACIONES%20PERMANETES.pdf`,
          },
        ],
      },
      {
        nombre: "Informes EPP – Por mes",
        grupos: [
          {
            nombre: "Agosto",
            documentos: [
              {
                nombre:
                  "Informe Entrega – Uso y Disposición de EPP (10-14 ago)",
                url: `${BASE}/2020/agosto/INFORME%20ENTRESA-USO%20Y%20DISPOCISION%20DE%20EPP%2010%20-%2014.pdf`,
              },
              {
                nombre:
                  "Informe Entrega – Uso y Disposición de EPP (18-21 ago)",
                url: `${BASE}/2020/agosto/INFORME%20ENTRESA-USO%20Y%20DISPOCISION%20DE%20EPP%2018%20-%2021.pdf`,
              },
              {
                nombre:
                  "Informe Entrega – Uso y Disposición de EPP (24-28 ago)",
                url: `${BASE}/2020/agosto/INFORME%20ENTRESA-USO%20Y%20DISPOCISION%20DE%20EPP%2024%20-%2028.pdf`,
              },
            ],
          },
          {
            nombre: "Septiembre",
            documentos: [
              {
                nombre: "Informe Entrega – Uso y Disposición de EPP Septiembre",
                url: `${BASE}/2020/septiembre/INFORME%20ENTRESA-USO%20Y%20DISPOCISION%20DE%20EPP%20SEPTIEMBRE.pdf`,
              },
            ],
          },
          {
            nombre: "Diciembre",
            documentos: [
              {
                nombre: "Entrega EPP Personal",
                url: `${BASE}/2020/diciembre/ENTREGA%20EPP%20PERSONAL%20.pdf`,
              },
              {
                nombre:
                  "Informe Entrega – Uso y Disposición de EPP Diciembre 2020",
                url: `${BASE}/2020/diciembre/INFORME%20ENTREGA-USO%20Y%20DISPOCISION%20DE%20EPP%20%20-%20DICIEMBRE%202020.pdf`,
              },
              {
                nombre: "Seguimiento EPP Administrativo",
                url: `${BASE}/2020/diciembre/SEGUIMIENTO%20EPP%20ADMINISTRATIVO.pdf`,
              },
              {
                nombre: "Seguimiento EPP Asistencial",
                url: `${BASE}/2020/diciembre/SEGUIMIENTO%20EPP%20ASISTENCIAL.pdf`,
              },
            ],
          },
        ],
      },
      {
        nombre: "Informes EPP – Sin mes asignado",
        documentos: [
          {
            nombre: "Informe Entrega – Uso y Disposición de EPP (1ª semana)",
            url: `${BASE}/2020/INFORME%20ENTRESA-USO%20Y%20DISPOCISION%20DE%20EPP.pdf`,
          },
          {
            nombre: "Informe Entrega – Uso y Disposición de EPP (2ª semana)",
            url: `${BASE}/2020/INFORME%20ENTRESA-USO%20Y%20DISPOCISION%20DE%20EPP%202%20SEMANA%20.pdf`,
          },
          {
            nombre: "Informe Entrega – Uso y Disposición de EPP (4ª semana)",
            url: `${BASE}/2020/INFORME%20ENTRESA-USO%20Y%20DISPOCISION%20DE%20EPP%20%20CUARTA%20SEMANA.pdf`,
          },
          {
            nombre: "Informe Uso y Disposición de EPP – 2ª semana de Junio",
            url: `${BASE}/2020/INFORME%20USO%20Y%20DISPOCION%20DE%20EPP%20SEGUNDA%20SEMANA%20DE%20JUNIO.pdf`,
          },
          {
            nombre: "Informe Uso y Disposición de EPP – 3ª semana de Junio",
            url: `${BASE}/2020/INFORME%20USO%20Y%20DISPOCION%20DE%20EPP%20TERCERA%20SEMANA%20DE%20JUNIO.pdf`,
          },
          {
            nombre:
              "Informe Uso y Disposición de Elementos de Protección Personal",
            url: `${BASE}/2020/INFORME%20USO%20Y%20DISPOCISION%20DE%20ELEMENTOS%20DE%20PROTECION%20PERSONAL.pdf`,
          },
        ],
      },
    ],
  },

  // ── 2019 ──────────────────────────────────────────────────────────────────
  {
    año: 2019,
    secciones: [
      {
        documentos: [
          {
            nombre: "Acta Nro. 001 – Reunión Junta Directiva",
            url: `${BASE}/2019/acta%20nro%20001%20reunion%20junta%20directiva.pdf`,
          },
          {
            nombre: "Certificado Antecedentes Judiciales",
            url: `${BASE}/2019/certificado%20antedecente%20judiciales.pdf`,
          },
          {
            nombre: "Certificado de Cumplimiento de Requisitos",
            url: `${BASE}/2019/certificado%20de%20cumplimiento%20de%20requisito.pdf`,
          },
          {
            nombre: "Certificados Cargo Directivo y Gerente",
            url: `${BASE}/2019/certificados%20cargo%20directivo%20y%20gerente.pdf`,
          },
          {
            nombre: "Estados Financieros 2019",
            url: `${BASE}/2019/estados%20financieros%202019.pdf`,
          },
          {
            nombre: "Informe de Gestión 2019",
            url: `${BASE}/2019/informe%20de%20gestion%202019.pdf`,
          },
          {
            nombre: "RUT Actualizado",
            url: `${BASE}/2019/rut%20actualizado.pdf`,
          },
        ],
      },
    ],
  },

  // ── 2018 ──────────────────────────────────────────────────────────────────
  {
    año: 2018,
    secciones: [
      {
        documentos: [
          {
            nombre: "Antecedentes Judiciales",
            url: `${BASE}/2018/antecedentes%20judiciales.pdf`,
          },
          {
            nombre: "Certificado de Requisitos",
            url: `${BASE}/2018/certificado%20de%20requisitos.pdf`,
          },
          {
            nombre: "Estados Financieros",
            url: `${BASE}/2018/estados%20financieros.pdf`,
          },
          {
            nombre: "Existencia y Representación Legal",
            url: `${BASE}/2018/existencia%20y%20representacion%20legal.pdf`,
          },
          {
            nombre: "Informe de Gestión 2018",
            url: `${BASE}/2018/informe%20de%20gestion%202018.pdf`,
          },
          {
            nombre: "RUT Actualizado",
            url: `${BASE}/2018/rut%20actualizado.pdf`,
          },
        ],
      },
    ],
  },

  // ── 2017 ──────────────────────────────────────────────────────────────────
  {
    año: 2017,
    secciones: [
      {
        documentos: [
          { nombre: "Certificados", url: `${BASE}/2017/certificados.pdf` },
          {
            nombre: "Escritura Pública",
            url: `${BASE}/2017/escritura%20publica.pdf`,
          },
          {
            nombre: "Estados Financieros",
            url: `${BASE}/2017/estados%20financieros.pdf`,
          },
          { nombre: "Estatutos", url: `${BASE}/2017/estatutos.pdf` },
          {
            nombre: "Informe de Gestión",
            url: `${BASE}/2017/informe%20de%20gestion.pdf`,
          },
        ],
      },
    ],
  },
];

// ─── HELPERS DE BÚSQUEDA ──────────────────────────────────────────────────────

/** Extrae todos los documentos planos de un año con metadatos */
function todosLosDocs(anio) {
  const resultado = [];
  if (!anio.secciones) return resultado;
  for (const seccion of anio.secciones) {
    if (seccion.documentos) {
      for (const doc of seccion.documentos)
        resultado.push({ ...doc, año: anio.año, seccion: seccion.nombre ?? "" });
    }
    if (seccion.grupos) {
      for (const grupo of seccion.grupos) {
        for (const doc of grupo.documentos)
          resultado.push({ ...doc, año: anio.año, seccion: grupo.nombre });
      }
    }
  }
  return resultado;
}

// ─── RESULTADOS DE BÚSQUEDA ───────────────────────────────────────────────────

function ResultadosBusqueda({ query }) {
  const q = query.toLowerCase().trim();
  const resultados = anios.flatMap(todosLosDocs).filter(
    (doc) =>
      doc.nombre.toLowerCase().includes(q) ||
      String(doc.año).includes(q) ||
      doc.seccion.toLowerCase().includes(q)
  );

  if (resultados.length === 0) {
    return (
      <div className="text-center py-10 text-gray-400 dark:text-gray-500">
        <svg className="w-12 h-12 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <p className="text-sm">No se encontraron documentos para <strong>&ldquo;{query}&rdquo;</strong></p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs text-gray-400 dark:text-gray-500 mb-1">
        {resultados.length} resultado{resultados.length !== 1 ? "s" : ""} para &ldquo;<strong>{query}</strong>&rdquo;
      </p>
      {resultados.map((doc, i) => (
        <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-3 px-4 rounded-lg bg-white dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-gray-700 transition-colors border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3 min-w-0">
            <IconoPDF />
            <div className="min-w-0">
              <span className="text-sm text-gray-700 dark:text-gray-200 font-medium block truncate">{doc.nombre}</span>
              <span className="text-xs text-gray-400 dark:text-gray-500">{doc.año}{doc.seccion ? ` · ${doc.seccion}` : ""}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link href={doc.url} target="_blank" className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors shadow-sm">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
              Ver
            </Link>
            <a href={doc.url} download className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors shadow-sm">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              Descargar
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── PÁGINA ───────────────────────────────────────────────────────────────────

export default function Transparencia() {
  const [busqueda, setBusqueda] = useState("");
  const buscando = busqueda.trim().length > 1;

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-green-600 via-green-700 to-blue-800 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">
              Transparencia y Rendición de Cuentas
            </h1>
            <p className="text-xl text-white/90 mb-8" data-aos="fade-up" data-aos-delay="100">
              Información financiera y de gestión de la IPS Indígena Inga Kametsa
            </p>

            {/* Barra de búsqueda dentro del hero */}
            <div className="max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              <div className="relative">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z"/>
                </svg>
                <input
                  type="text"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  placeholder="Buscar documento, año o tipo..."
                  className="w-full pl-12 pr-10 py-3.5 rounded-xl bg-white/15 backdrop-blur border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all text-sm"
                />
                {busqueda && (
                  <button
                    onClick={() => setBusqueda("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cuerpo */}
      <section className="py-14 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <div className="mb-10 text-center" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
                Estados Financieros e Informes de Gestión - Régimen Tributario Especial ESAL
              </h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm">
                Selecciona el año para consultar o descargar los documentos correspondientes.
              </p>
            </div>

            {/* Resultados de búsqueda O acordeones */}
            <div data-aos="fade-up" data-aos-delay="100">
              {buscando ? (
                <ResultadosBusqueda query={busqueda} />
              ) : (
                anios.map((anio) => (
                  <AcordeonAnio
                    key={anio.año}
                    anio={anio}
                    defaultAbierto={anio.año === 2025}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
