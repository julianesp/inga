import { ImageResponse } from 'next/og'

export const alt = 'IPS Inga-Kamentsa - Servicios de Salud Integral Sibundoy Putumayo'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0b3d2e 0%, #1a5f3f 50%, #2d7a4f 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          IPS Inga-Kamentsa
        </div>
        <div
          style={{
            fontSize: 36,
            marginBottom: 30,
            textAlign: 'center',
            opacity: 0.9,
          }}
        >
          Servicios de Salud Integral
        </div>
        <div
          style={{
            fontSize: 24,
            textAlign: 'center',
            opacity: 0.8,
          }}
        >
          Sibundoy, Putumayo • Medicina Occidental + Tradicional Indígena
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 40,
            gap: 20,
            fontSize: 18,
          }}
        >
          <span>✅ Consultas</span>
          <span>✅ Urgencias</span>
          <span>✅ Especialidades</span>
          <span>✅ PQRS</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
