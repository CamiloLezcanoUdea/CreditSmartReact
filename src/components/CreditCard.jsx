export default function CreditCard({ credito }) {
  const fmt = n => n.toLocaleString("es-CO");

  return (
    <article className="card">
      <div className="card-media">
        <svg width="80" height="80" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill={credito.color} />
          <path
            d="M4 12h16M4 7h16M4 17h10"
            stroke={credito.stroke}
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="card-body">
        <h3>{credito.nombre}</h3>
        <p>Tasa: <strong>{credito.tasa}% anual</strong></p>
        <p>Monto: <span>${fmt(credito.montoMin)} - ${fmt(credito.montoMax)}</span></p>
        <p>Plazo máximo: <span>{credito.plazoMax} meses</span></p>
      </div>

      <div className="card-actions">
        <a className="btn" href={`/solicitar?credito=${credito.id}`}>Solicitar</a>
        <a className="btn ghost" href="#">Ver detalles</a>
      </div>
    </article>
  );
}
