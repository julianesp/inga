# 📦 Cómo Exportar Citas de Desarrollo a Producción

Este documento explica cómo llevar las citas que creaste en tu localhost a producción (Vercel).

---

## 🎯 Objetivo

Quieres que las citas que creas en desarrollo (`localhost`) queden guardadas permanentemente en el código, para que cuando subas a Vercel, todos los usuarios las vean.

---

## 📋 Sistema Híbrido Implementado

El sistema ahora funciona con **DOS tipos de citas**:

### 1. **Citas de Producción** (Permanentes)
- ✅ Están en el código (`citasProduccion.ts`)
- ✅ Se suben a Vercel automáticamente
- ✅ Todos los usuarios las ven
- ✅ No se pueden eliminar desde la interfaz
- ✅ Tienen un candado 🔒 en admin

### 2. **Citas Locales** (Temporales)
- ⚠️ Solo en localStorage del navegador
- ⚠️ Se borran si limpias el navegador
- ⚠️ NO se suben a Vercel
- ✅ Se pueden eliminar desde la interfaz

---

## 🚀 Pasos para Exportar Citas a Producción

### **Paso 1: Crear Citas en Desarrollo**

1. Ve a `http://localhost:3000/admin-citas`
2. Crea todas las citas que quieras usando el botón **"➕ Nueva Cita"**
3. Llena los formularios con datos reales
4. Verifica que aparezcan en el calendario

---

### **Paso 2: Exportar desde LocalStorage**

1. Con las citas creadas, abre **DevTools** (F12)
2. Ve a la pestaña **Console**
3. Ejecuta este código:

```javascript
// Obtener todas las citas del localStorage
const citas = JSON.parse(localStorage.getItem('citas-inga') || '[]');

// Formatear para copiar
console.log('=== COPIAR DESDE AQUÍ ===');
console.log(JSON.stringify(citas, null, 2));
console.log('=== HASTA AQUÍ ===');
```

4. **Copia** todo el JSON que aparece entre las líneas

---

### **Paso 3: Convertir a Formato de Producción**

Ahora tienes que convertir ese JSON al formato del archivo `citasProduccion.ts`.

**Ejemplo de lo que copiaste:**
```json
[
  {
    "id": "abc123",
    "sedeId": "sibundoy",
    "fecha": "2025-10-30",
    "hora": "10:00",
    "nombrePaciente": "Juan Pérez",
    "telefonoPaciente": "3101234567",
    "tipoDocumento": "CC",
    "numeroDocumento": "1234567",
    "servicio": "Medicina General",
    "estado": "agendada",
    "fechaCreacion": "2025-10-29T15:30:00.000Z"
  }
]
```

**Convertir a:**
```typescript
{
  id: 'prod-004',  // Cambiar a prod-XXX
  sedeId: 'sibundoy',
  fecha: obtenerFechaDesdeHoy(1),  // Calcular días desde hoy
  hora: '10:00',
  nombrePaciente: 'Juan Pérez',
  telefonoPaciente: '3101234567',
  tipoDocumento: 'CC',
  numeroDocumento: '1234567',
  servicio: 'Medicina General',
  estado: 'agendada',
  fechaCreacion: new Date().toISOString(),
},
```

**IMPORTANTE:**
- Cambia el `id` a formato `prod-XXX` (incrementa el número)
- Cambia la `fecha` por `obtenerFechaDesdeHoy(X)`:
  - `obtenerFechaDesdeHoy(0)` = Hoy
  - `obtenerFechaDesdeHoy(1)` = Mañana
  - `obtenerFechaDesdeHoy(7)` = En una semana
- Cambia `fechaCreacion` por `new Date().toISOString()`

---

### **Paso 4: Agregar al Código**

1. Abre el archivo: `src/data/citasProduccion.ts`

2. Busca el array `citasProduccion`

3. Agrega tus citas convertidas al final del array:

```typescript
export const citasProduccion: Cita[] = [
  // Citas existentes...

  // ============================================
  // TUS NUEVAS CITAS AQUÍ
  // ============================================
  {
    id: 'prod-004',
    sedeId: 'sibundoy',
    fecha: obtenerFechaDesdeHoy(2),
    hora: '11:00',
    nombrePaciente: 'María Gómez',
    telefonoPaciente: '3209876543',
    tipoDocumento: 'CC',
    numeroDocumento: '9876543',
    servicio: 'Odontología',
    estado: 'confirmada',
    fechaCreacion: new Date().toISOString(),
  },
  {
    id: 'prod-005',
    sedeId: 'colon',
    fecha: obtenerFechaDesdeHoy(3),
    hora: '14:00',
    nombrePaciente: 'Pedro López',
    telefonoPaciente: '3157894561',
    tipoDocumento: 'CC',
    numeroDocumento: '7894561',
    servicio: 'Control Prenatal',
    estado: 'agendada',
    fechaCreacion: new Date().toISOString(),
  },
  // Agregar más citas aquí...
];
```

4. **Guarda el archivo** (Ctrl + S)

---

### **Paso 5: Verificar Localmente**

1. Recarga `http://localhost:3000/`
2. Verifica que las citas aparezcan en el calendario
3. Ve a `/admin-citas`
4. Las nuevas citas deben tener el candado 🔒 (no se pueden eliminar)

---

### **Paso 6: Subir a Vercel**

1. Haz commit de los cambios:
```bash
git add src/data/citasProduccion.ts
git commit -m "Add: Nuevas citas de producción"
git push origin main
```

2. Vercel detectará automáticamente los cambios

3. Espera que termine el deploy (1-2 minutos)

4. Entra a tu sitio en Vercel y verifica que las citas estén ahí

---

## 🔄 Flujo Completo

```
┌─────────────────────────────────────┐
│  1. Crear citas en localhost        │
│     → /admin-citas                  │
│     → Usar formulario "Nueva Cita"  │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  2. Exportar desde Console          │
│     → F12 → Console                 │
│     → Copiar JSON                   │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  3. Convertir formato               │
│     → Cambiar IDs a prod-XXX        │
│     → Convertir fechas              │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  4. Agregar a citasProduccion.ts    │
│     → Editar archivo                │
│     → Guardar                       │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  5. Verificar localmente            │
│     → Recargar navegador            │
│     → Ver candado 🔒 en admin       │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  6. Subir a producción              │
│     → git add + commit + push       │
│     → Esperar deploy de Vercel      │
│     → ¡Citas disponibles para todos!│
└─────────────────────────────────────┘
```

---

## 📝 Script Automático (Opcional)

Para hacer el proceso más rápido, usa este script en la consola:

```javascript
// Ejecutar en localhost después de crear citas
function exportarCitasParaProduccion() {
  const citas = JSON.parse(localStorage.getItem('citas-inga') || '[]');

  console.log('╔═══════════════════════════════════════════════════╗');
  console.log('║  CITAS PARA EXPORTAR A PRODUCCIÓN                 ║');
  console.log('╚═══════════════════════════════════════════════════╝\n');

  console.log('Total de citas:', citas.length);
  console.log('\n📋 Copia el código de abajo:\n');
  console.log('// Agregar al archivo src/data/citasProduccion.ts\n');

  citas.forEach((cita, index) => {
    // Calcular días desde hoy
    const fechaCita = new Date(cita.fecha);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    fechaCita.setHours(0, 0, 0, 0);
    const diasDiferencia = Math.floor((fechaCita - hoy) / (1000 * 60 * 60 * 24));

    console.log(`{
  id: 'prod-${String(index + 1).padStart(3, '0')}',
  sedeId: '${cita.sedeId}',
  fecha: obtenerFechaDesdeHoy(${diasDiferencia}), // ${cita.fecha}
  hora: '${cita.hora}',
  nombrePaciente: '${cita.nombrePaciente}',
  telefonoPaciente: '${cita.telefonoPaciente}',
  tipoDocumento: '${cita.tipoDocumento}',
  numeroDocumento: '${cita.numeroDocumento}',
  servicio: '${cita.servicio}',
  estado: '${cita.estado}',
  fechaCreacion: new Date().toISOString(),
},`);
  });

  console.log('\n✅ Copia todo el código de arriba');
  console.log('✅ Pégalo en citasProduccion.ts');
  console.log('✅ Guarda y haz commit');
}

// Ejecutar
exportarCitasParaProduccion();
```

---

## ⚠️ Importante

1. **No olvides cambiar los IDs** a `prod-XXX` para evitar conflictos
2. **Usa fechas relativas** (`obtenerFechaDesdeHoy()`) para que las citas siempre estén vigentes
3. **Las citas de producción NO se pueden eliminar** desde la interfaz (tienen candado 🔒)
4. **Verifica localmente antes de subir** a producción

---

## 🆘 Solución de Problemas

### Las citas no aparecen en producción
- ✅ Verifica que hayas hecho `git push`
- ✅ Espera que Vercel termine el deploy
- ✅ Limpia la caché del navegador (Ctrl + Shift + R)

### Las citas aparecen con fecha incorrecta
- ✅ Revisa que uses `obtenerFechaDesdeHoy(X)` correctamente
- ✅ El número es días desde HOY (0=hoy, 1=mañana, etc.)

### No puedo eliminar una cita
- ✅ Si tiene candado 🔒 es de producción, no se puede eliminar
- ✅ Para eliminarla, quítala del archivo `citasProduccion.ts`

---

## 📞 ¿Necesitas Ayuda?

Si tienes dudas, revisa:
1. El archivo `src/data/citasProduccion.ts` (tiene ejemplos)
2. El archivo `INSTRUCCIONES_CONSULTAS.md` (guía general)
3. Los comentarios en el código

¡Listo para llevar tus citas a producción! 🚀
