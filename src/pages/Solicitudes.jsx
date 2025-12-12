import { useEffect, useState } from "react";
import { subscribeSolicitudes } from "../firebase/firestoreService";

export default function Solicitudes() {
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Verificar si hay conexión antes de suscribirse
    if (!navigator.onLine) {
      setError("No hay conexión a internet. Revisa tu red.");
      setLoading(false);
      return;
    }

    try {
      const unsubscribe = subscribeSolicitudes((docs) => {
        setLista(docs);
        setLoading(false);
      });

      return () => unsubscribe();
    } catch (err) {
      setError("Error cargando solicitudes.");
      setLoading(false);
    }
  }, []);

  return (
    <main className="container" style={{ marginTop: "2rem" }}>
      <h2 style={{ marginBottom: "1.5rem" }}>Solicitudes registradas</h2>

      <div
        style={{
          background: "#ffffff",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          maxWidth: "900px",
          margin: "0 auto"
        }}
      >
        {/* LOADING */}
        {loading && (
          <p
            style={{
              fontSize: "1.2rem",
              color: "#666",
              textAlign: "center",
              margin: "2rem 0"
            }}
          >
            Cargando solicitudes...
          </p>
        )}

        {/* ERROR */}
        {error && !loading && (
          <p
            style={{
              background: "#fee2e2",
              padding: "1rem",
              borderRadius: "10px",
              color: "#b91c1c",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "1rem",
              border: "1px solid #fca5a5"
            }}
          >
            {error}
          </p>
        )}

        {/* SIN DATOS */}
        {!loading && !error && lista.length === 0 && (
          <p style={{ color: "#555", fontSize: "1.1rem" }}>
            No hay solicitudes aún.
          </p>
        )}

        {/* LISTA */}
        {!loading && !error && lista.length > 0 && (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {lista.map((s) => (
              <li
                key={s.id}
                style={{
                  background: "#f9fafb",
                  padding: "1rem",
                  borderRadius: "10px",
                  marginBottom: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "1px solid #e5e7eb"
                }}
              >
                <div>
                  <strong style={{ display: "block", fontSize: "1.1rem" }}>
                    {s.tipo || "—"}
                  </strong>

                  <span style={{ color: "#333" }}>
                    Monto:{" "}
                    <strong style={{ color: "#0a6", fontSize: "1.1rem" }}>
                      ${s.monto?.toLocaleString("es-CO")}
                    </strong>
                  </span>

                  <br />

                  <span style={{ color: "#666" }}>
                    Plazo: {s.plazo} meses
                  </span>
                </div>

                <div>
                  <span
                    style={{
                      padding: "6px 12px",
                      background: "#d1fae5",
                      color: "#047857",
                      borderRadius: "8px",
                      fontWeight: "bold",
                      textTransform: "capitalize"
                    }}
                  >
                    {s.estado}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
