import { ImageResponse } from 'next/og';

// Tamaño de imagen recomendado para Open Graph
export const alt = 'IPS Inga Kamentsá - Servicios de Salud Valle de Sibundoy Putumayo';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #059669 0%, #0891b2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Patrón de fondo médico */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
            display: 'flex',
          }}
        />

        {/* Contenedor principal */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '30px',
            padding: '60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            border: '4px solid rgba(255, 255, 255, 0.3)',
            width: '100%',
          }}
        >
          {/* Logo y título */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '30px',
            }}
          >
            {/* Ícono médico */}
            <div
              style={{
                background: 'linear-gradient(135deg, #059669, #047857)',
                borderRadius: '20px',
                padding: '20px',
                display: 'flex',
                marginRight: '25px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  fill="white"
                  opacity="0.9"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  fontSize: '72px',
                  fontWeight: 'bold',
                  color: '#059669',
                  lineHeight: '1',
                  marginBottom: '10px',
                  display: 'flex',
                }}
              >
                IPS INGA KAMËNTSÁ
              </div>
              <div
                style={{
                  fontSize: '32px',
                  color: '#0891b2',
                  fontWeight: '600',
                  display: 'flex',
                }}
              >
                Servicios de Salud Integral
              </div>
            </div>
          </div>

          {/* Descripción */}
          <div
            style={{
              fontSize: '28px',
              color: '#374151',
              marginBottom: '40px',
              lineHeight: '1.4',
              maxWidth: '900px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div>Atención médica de calidad en Sibundoy, Putumayo</div>
            <div>Medicina General • Odontología • Urgencias 24/7</div>
          </div>

          {/* Características */}
          <div
            style={{
              display: 'flex',
              gap: '30px',
              marginBottom: '30px',
              flexDirection: 'row',
            }}
          >
            <div
              style={{
                background: '#f0fdf4',
                padding: '15px 30px',
                borderRadius: '15px',
                fontSize: '22px',
                color: '#059669',
                fontWeight: '600',
                border: '2px solid #86efac',
                display: 'flex',
              }}
            >
              ✅ Consulta Médica
            </div>
            <div
              style={{
                background: '#ecfeff',
                padding: '15px 30px',
                borderRadius: '15px',
                fontSize: '22px',
                color: '#0891b2',
                fontWeight: '600',
                border: '2px solid #67e8f9',
                display: 'flex',
              }}
            >
              🦷 Odontología
            </div>
            <div
              style={{
                background: '#fef3c7',
                padding: '15px 30px',
                borderRadius: '15px',
                fontSize: '22px',
                color: '#d97706',
                fontWeight: '600',
                border: '2px solid #fcd34d',
                display: 'flex',
              }}
            >
              🌿 Medicina Tradicional
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              fontSize: '24px',
              color: '#6b7280',
              marginTop: '20px',
              flexDirection: 'row',
            }}
          >
            <div>📞 313-286-3398</div>
            <div>•</div>
            <div>📍 Valle de Sibundoy</div>
            <div>•</div>
            <div>🌐 inga-tawny.vercel.app</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
