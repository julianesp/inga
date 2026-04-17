-- ========================================
-- SCHEMA BASE DE DATOS - IPS INGA KAMENTSA
-- ========================================

-- Noticias y eventos
CREATE TABLE IF NOT EXISTS noticias (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo TEXT NOT NULL,
  descripcion TEXT NOT NULL,
  contenido TEXT,
  imagen_url TEXT,
  tipo TEXT NOT NULL DEFAULT 'noticia', -- 'noticia' | 'evento'
  fecha_evento TEXT,
  activo INTEGER NOT NULL DEFAULT 1,
  creado_en TEXT NOT NULL DEFAULT (datetime('now')),
  actualizado_en TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Galería de imágenes
CREATE TABLE IF NOT EXISTS galeria (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo TEXT NOT NULL,
  descripcion TEXT,
  imagen_url TEXT NOT NULL,
  categoria TEXT, -- 'instalaciones' | 'eventos' | 'comunidad' | etc.
  activo INTEGER NOT NULL DEFAULT 1,
  creado_en TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Documentos (estados financieros, actas, etc.)
CREATE TABLE IF NOT EXISTS documentos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT NOT NULL,
  descripcion TEXT,
  archivo_url TEXT NOT NULL,
  categoria TEXT NOT NULL DEFAULT 'estados-financieros', -- 'estados-financieros' | 'actas' | 'informes' | etc.
  anio INTEGER,
  activo INTEGER NOT NULL DEFAULT 1,
  creado_en TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Servicios
CREATE TABLE IF NOT EXISTS servicios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT NOT NULL,
  descripcion TEXT NOT NULL,
  imagen_url TEXT,
  icono TEXT,
  orden INTEGER NOT NULL DEFAULT 0,
  activo INTEGER NOT NULL DEFAULT 1,
  creado_en TEXT NOT NULL DEFAULT (datetime('now')),
  actualizado_en TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Directorio de personal
CREATE TABLE IF NOT EXISTS directorio (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT NOT NULL,
  cargo TEXT NOT NULL,
  area TEXT,
  telefono TEXT,
  email TEXT,
  foto_url TEXT,
  orden INTEGER NOT NULL DEFAULT 0,
  activo INTEGER NOT NULL DEFAULT 1,
  creado_en TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Sedes
CREATE TABLE IF NOT EXISTS sedes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT NOT NULL,
  direccion TEXT NOT NULL,
  municipio TEXT NOT NULL,
  departamento TEXT NOT NULL DEFAULT 'Putumayo',
  telefono TEXT,
  email TEXT,
  horario TEXT,
  latitud TEXT,
  longitud TEXT,
  imagen_url TEXT,
  activo INTEGER NOT NULL DEFAULT 1,
  creado_en TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Usuarios administradores
CREATE TABLE IF NOT EXISTS usuarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  rol TEXT NOT NULL DEFAULT 'editor', -- 'admin' | 'editor'
  activo INTEGER NOT NULL DEFAULT 1,
  creado_en TEXT NOT NULL DEFAULT (datetime('now')),
  ultimo_acceso TEXT
);
