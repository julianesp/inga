# 📋 Sistema de Gestión de Consultas Médicas

## ✨ IMPORTANTE: El calendario ahora está visible en la página de inicio!

Los usuarios pueden ver las consultas agendadas directamente desde:
- **Página de inicio:** `http://localhost:3000/`
- **Página de consultas:** `http://localhost:3000/consultas`

El calendario se actualiza automáticamente cada 30 segundos para reflejar nuevas citas.

---

## 🎯 ¿Qué hemos creado?

### 1. **Componente CalendarioConsultas** (`src/components/CalendarioConsultas.tsx`)
Componente visual para mostrar un calendario mensual con:
- ✅ Día actual resaltado en azul
- ✅ Indicadores de consultas por día (puntitos)
- ✅ Panel lateral izquierdo con consultas del día seleccionado
- ✅ Soporte para dark mode
- ✅ Diseño responsive

### 2. **Datos de Ejemplo** (`src/data/citasEjemplo.ts`)
15 citas de ejemplo con:
- ✅ Fechas dinámicas (hoy, mañana, próximos días)
- ✅ Diferentes pacientes con nombres indígenas
- ✅ Varios servicios médicos
- ✅ Diferentes estados (confirmada, agendada, completada)
- ✅ Múltiples sedes

### 3. **Página de Consultas** (`src/app/consultas/page.tsx`)
Interfaz completa para visualizar y gestionar consultas con:
- ✅ Calendario interactivo
- ✅ Filtro por sede
- ✅ Estadísticas en tiempo real
- ✅ Botones para cargar/agregar/limpiar datos
- ✅ Modal con detalles de cada consulta

---

## 🚀 Cómo usar el sistema

### Paso 1: Acceder a la página
Abre tu navegador y ve a:
```
http://localhost:3000/consultas
```

### Paso 2: Cargar datos de ejemplo

Tienes 3 opciones:

#### Opción A: **Cargar Ejemplos** (Reemplaza todo)
- Click en el botón azul **"📥 Cargar Ejemplos"**
- Esto borrará todas las citas existentes y cargará las 15 de ejemplo
- Útil para empezar desde cero

#### Opción B: **Agregar Ejemplos** (Sin borrar)
- Click en el botón verde **"➕ Agregar Ejemplos"**
- Agrega las citas de ejemplo sin borrar las que ya tienes
- No duplica citas que ya existen

#### Opción C: **Limpiar Todo**
- Click en el botón rojo **"🗑️ Limpiar Todo"**
- Elimina todas las citas del sistema
- Útil para empezar de nuevo

---

## 📝 Crear tus propias citas

### Método 1: Editar el archivo de datos

Abre `src/data/citasEjemplo.ts` y agrega más citas al array:

```typescript
{
  id: 'cita-016',                        // ID único
  sedeId: 'sibundoy',                    // sibundoy, colon, santiago, san-andres
  fecha: obtenerFecha(0),                // 0 = hoy, 1 = mañana, etc.
  hora: '11:00',                         // Formato 24h
  nombrePaciente: 'Tu Nombre Aquí',
  telefonoPaciente: '3201234567',
  tipoDocumento: 'CC',                   // CC, TI, CE, PP
  numeroDocumento: '1234567890',
  servicio: 'Medicina General',          // Ver servicios disponibles abajo
  estado: 'agendada',                    // agendada, confirmada, cancelada, completada
  fechaCreacion: new Date().toISOString(),
}
```

**Servicios disponibles:**
- Medicina General
- Pediatría
- Ginecología
- Odontología
- Control Prenatal
- Vacunación
- Enfermería
- Laboratorio Clínico

**Sedes disponibles:**
- `sibundoy` - Sede Principal Sibundoy
- `colon` - Sede Colón
- `santiago` - Sede Santiago
- `san-andres` - Sede San Andrés

### Método 2: Usar la consola del navegador

1. Abre la página `/consultas`
2. Presiona `F12` para abrir DevTools
3. Ve a la pestaña **Console**
4. Ejecuta este código para crear una cita manualmente:

```javascript
// Crear una nueva cita
const nuevaCita = {
  id: 'mi-cita-' + Date.now(),
  sedeId: 'sibundoy',
  fecha: '2025-10-30',  // Formato: YYYY-MM-DD
  hora: '14:00',
  nombrePaciente: 'Juan Pérez',
  telefonoPaciente: '3101234567',
  tipoDocumento: 'CC',
  numeroDocumento: '1234567890',
  servicio: 'Medicina General',
  estado: 'agendada',
  fechaCreacion: new Date().toISOString(),
};

// Guardar en LocalStorage
const citas = JSON.parse(localStorage.getItem('citas-inga') || '[]');
citas.push(nuevaCita);
localStorage.setItem('citas-inga', JSON.stringify(citas));

// Recargar la página
location.reload();
```

---

## 🎨 Personalización

### Cambiar colores del día actual
En `CalendarioConsultas.tsx`, línea ~257:
```jsx
className="bg-gradient-to-br from-blue-500 to-blue-600 text-white..."
```
Cambia `blue-500` y `blue-600` por otros colores de Tailwind.

### Ajustar tamaño del panel lateral
En `CalendarioConsultas.tsx`, línea ~117:
```jsx
<div className="lg:w-80 w-full ...">
```
Cambia `lg:w-80` (320px) por `lg:w-96` (384px) o el tamaño que prefieras.

### Modificar formato de fecha
En `CalendarioConsultas.tsx`, línea ~123:
```jsx
{fechaActual.toLocaleDateString('es-CO', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})}
```

---

## 📊 Ver todas las citas

Para administrar todas las citas del sistema, ve a:
```
http://localhost:3000/admin-citas
```

Aquí podrás:
- Ver lista completa de citas
- Filtrar por sede y estado
- Exportar a CSV
- Eliminar citas individuales

---

## 🔍 Estructura de Datos

Las citas se guardan en LocalStorage con esta estructura:

```javascript
{
  "citas-inga": [
    {
      "id": "cita-001",
      "sedeId": "sibundoy",
      "fecha": "2025-10-29",
      "hora": "08:00",
      "nombrePaciente": "María Elena Jacanamejoy",
      "telefonoPaciente": "3201234567",
      "tipoDocumento": "CC",
      "numeroDocumento": "1234567890",
      "servicio": "Medicina General",
      "estado": "confirmada",
      "fechaCreacion": "2025-10-29T12:00:00.000Z"
    }
  ]
}
```

---

## 🐛 Solución de Problemas

### No aparecen las citas
1. Verifica que hayas cargado los datos de ejemplo
2. Revisa el filtro de sede (debe estar en "Todas las sedes" o la sede correcta)
3. Abre DevTools (F12) → Console para ver errores

### El calendario no muestra el día actual
- Verifica que la fecha del sistema esté correcta
- El día actual siempre se resalta automáticamente

### Las citas no se guardan
- Verifica que el navegador permita LocalStorage
- No uses modo incógnito (borra los datos al cerrar)

---

## 📦 Archivos Creados

```
src/
├── components/
│   └── CalendarioConsultas.tsx      ← Componente principal
├── data/
│   └── citasEjemplo.ts              ← Datos de ejemplo
└── app/
    └── consultas/
        └── page.tsx                  ← Página de visualización
```

---

## ✅ Siguiente Paso Recomendado

Para hacer el sistema más completo, considera crear:
1. **Página de agendamiento** - Donde los usuarios puedan crear citas
2. **Sistema de notificaciones** - Recordatorios por WhatsApp
3. **Integración con backend** - Guardar en base de datos real
4. **Exportar a PDF** - Generar comprobantes de cita

---

## 💡 Tips Útiles

- Las fechas usan formato ISO: `YYYY-MM-DD`
- Los horarios están en formato 24h: `08:00`, `14:30`
- Puedes tener múltiples citas a la misma hora en diferentes sedes
- El sistema filtra automáticamente las citas canceladas

---

¿Necesitas ayuda adicional? Revisa los comentarios en el código o consulta la documentación de Next.js y React. 🚀
