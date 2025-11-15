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
            {/* Logo IPS */}
            <div
              style={{
                borderRadius: '50%',
                padding: '8px',
                display: 'flex',
                marginRight: '20px',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
              }}
            >
              <img
                src="https://ghx22gzm9l6t5pgk.public.blob.vercel-storage.com/images/logo.jpg"
                alt="Logo IPS Inga Kamentsá"
                width="100"
                height="100"
                style={{
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            </div>
            <div
              style={{
                fontSize: '52px',
                fontWeight: 'bold',
                color: '#059669',
                lineHeight: '1.2',
              }}
            >
              IPS Inga Kamentsá
            </div>
          </div>

          {/* Subtítulo */}
          <div
            style={{
              fontSize: '26px',
              color: '#0891b2',
              fontWeight: '600',
              marginBottom: '20px',
            }}
          >
            Servicios de Salud del Alto Putumayo
          </div>

          {/* Descripción */}
          <div
            style={{
              fontSize: '20px',
              color: '#374151',
              marginBottom: '28px',
              lineHeight: '1.4',
              maxWidth: '800px',
              textAlign: 'center',
            }}
          >
            Atención médica integral con identidad cultural
          </div>

          {/* Características */}
          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '20px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                background: '#f0fdf4',
                padding: '10px 22px',
                borderRadius: '12px',
                fontSize: '18px',
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
                padding: '10px 22px',
                borderRadius: '12px',
                fontSize: '18px',
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
                padding: '10px 22px',
                borderRadius: '12px',
                fontSize: '18px',
                color: '#d97706',
                fontWeight: '600',
                border: '2px solid #fcd34d',
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
              gap: '15px',
              fontSize: '20px',
              color: '#6b7280',
              marginTop: '15px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <span>📞 313-286-3398</span>
            <span>•</span>
            <span>📍 Alto Putumayo</span>
            <span>•</span>
            <span>🌐 ipsinka.com</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
