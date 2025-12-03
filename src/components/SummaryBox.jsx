export default function SummaryBox({ credito, monto, plazo, cuota }) {
  const fmt = (n) => Number(n).toLocaleString("es-CO");

  return (
    <aside className="summary">
      <h3>Resumen del Crédito</h3>

      <p>
        <strong>Producto:</strong> {credito.nombre}
      </p>

      <p>
        <strong>Tasa:</strong> {credito.tasa}% anual
      </p>

      <p>
        <strong>Monto solicitado:</strong> ${fmt(monto)}
      </p>

      <p>
        <strong>Plazo:</strong> {plazo} meses
      </p>

      <p>
        <strong>Cuota mensual estimada:</strong>{" "}
        <span style={{ color: "#2b7a78", fontWeight: "bold" }}>
          ${fmt(cuota)}
        </span>
      </p>
    </aside>
  );
}
