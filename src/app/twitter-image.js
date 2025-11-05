import { ImageResponse } from 'next/og';

// Tamaño de imagen recomendado para Twitter Card
export const alt = 'IPS Inga Kamentsá - Servicios de Salud Sibundoy';
export const size = {
  width: 1200,
  height: 600,
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
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* Patrón de fondo */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
          }}
        />

        {/* Contenedor principal */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '25px',
            padding: '50px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            border: '3px solid rgba(255, 255, 255, 0.3)',
            width: '100%',
          }}
        >
          {/* Título */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '25px',
            }}
          >
            {/* Ícono */}
            <div
              style={{
                background: 'linear-gradient(135deg, #059669, #047857)',
                borderRadius: '18px',
                padding: '18px',
                display: 'flex',
                marginRight: '20px',
              }}
            >
              <svg
                width="60"
                height="60"
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
                fontSize: '58px',
                fontWeight: 'bold',
                color: '#059669',
                lineHeight: '1',
              }}
            >
              IPS INGA KAMËNTSÁ
            </div>
          </div>

          {/* Subtítulo */}
          <div
            style={{
              fontSize: '28px',
              color: '#0891b2',
              fontWeight: '600',
              marginBottom: '30px',
            }}
          >
            Servicios de Salud Integral - Valle de Sibundoy
          </div>

          {/* Características */}
          <div
            style={{
              display: 'flex',
              gap: '25px',
              marginBottom: '25px',
            }}
          >
            <div
              style={{
                background: '#f0fdf4',
                padding: '12px 25px',
                borderRadius: '12px',
                fontSize: '20px',
                color: '#059669',
                fontWeight: '600',
                border: '2px solid #86efac',
              }}
            >
              ✅ Medicina General
            </div>
            <div
              style={{
                background: '#ecfeff',
                padding: '12px 25px',
                borderRadius: '12px',
                fontSize: '20px',
                color: '#0891b2',
                fontWeight: '600',
                border: '2px solid #67e8f9',
              }}
            >
              🦷 Odontología
            </div>
            <div
              style={{
                background: '#fef3c7',
                padding: '12px 25px',
                borderRadius: '12px',
                fontSize: '20px',
                color: '#d97706',
                fontWeight: '600',
                border: '2px solid #fcd34d',
              }}
            >
              🚨 Urgencias 24/7
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '18px',
              fontSize: '22px',
              color: '#6b7280',
              marginTop: '15px',
            }}
          >
            <span>📞 313-286-3398</span>
            <span>•</span>
            <span>📧 ipsingakamentsa@gmail.com</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
