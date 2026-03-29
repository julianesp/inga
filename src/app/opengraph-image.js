import { ImageResponse } from "next/og";

// Tamaño de imagen recomendado para Open Graph
export const alt = "IPS Inga Kamentsá - Servicios de Salud del Alto Putumayo";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #059669 0%, #0891b2 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Patrón de fondo médico */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            background:
              "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)",
            display: "flex",
          }}
        />

        {/* Contenedor principal */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            borderRadius: "30px",
            padding: "60px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            border: "4px solid rgba(255, 255, 255, 0.3)",
            width: "100%",
          }}
        >
          {/* Logo y título */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            {/* Logo IPS */}
            <div
              style={{
                borderRadius: "50%",
                padding: "10px",
                display: "flex",
                marginRight: "25px",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
              }}
            >
              <img
                src="https://ghx22gzm9l6t5pgk.public.blob.vercel-storage.com/images/logo.jpg"
                alt="Logo IPS Inga Kamentsá"
                width={120}
                height={120}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  fontSize: "56px",
                  fontWeight: "bold",
                  color: "#059669",
                  lineHeight: "1.2",
                  marginBottom: "10px",
                  display: "flex",
                }}
              >
                IPS Inga Kamentsá
              </div>
              <div
                style={{
                  fontSize: "28px",
                  color: "#0891b2",
                  fontWeight: "600",
                  display: "flex",
                }}
              >
                Servicios de Salud del Alto Putumayo
              </div>
            </div>
          </div>

          {/* Descripción */}
          <div
            style={{
              fontSize: "24px",
              color: "#374151",
              marginBottom: "35px",
              lineHeight: "1.5",
              maxWidth: "900px",
              display: "flex",
              textAlign: "center",
            }}
          >
            Atención médica integral con identidad cultural. Consulta médica general, odontología, medicina tradicional y más servicios para tu bienestar.
          </div>

          {/* Características */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: "25px",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "#f0fdf4",
                padding: "12px 25px",
                borderRadius: "12px",
                fontSize: "20px",
                color: "#059669",
                fontWeight: "600",
                border: "2px solid #86efac",
                display: "flex",
              }}
            >
              ✅ Medicina General
            </div>
            <div
              style={{
                background: "#ecfeff",
                padding: "12px 25px",
                borderRadius: "12px",
                fontSize: "20px",
                color: "#0891b2",
                fontWeight: "600",
                border: "2px solid #67e8f9",
                display: "flex",
              }}
            >
              🦷 Odontología
            </div>
            <div
              style={{
                background: "#fef3c7",
                padding: "12px 25px",
                borderRadius: "12px",
                fontSize: "20px",
                color: "#d97706",
                fontWeight: "600",
                border: "2px solid #fcd34d",
                display: "flex",
              }}
            >
              🌿 Medicina Tradicional
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              fontSize: "24px",
              color: "#6b7280",
              marginTop: "20px",
              flexDirection: "row",
            }}
          >
            <div>📞 313-286-3398</div>
            <div>•</div>
            <div>📍 Alto Putumayo</div>
            <div>•</div>
            <div>🌐 ipsinka.com</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
