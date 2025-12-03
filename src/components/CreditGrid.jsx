import CreditCard from "./CreditCard";

export default function CreditGrid({ lista }) {
  if (!lista || lista.length === 0) {
    return <p className="empty">No hay créditos disponibles</p>;
  }

  return (
    <section className="cards-grid">
      {lista.map(c => (
        <CreditCard key={c.id} credito={c} />
      ))}
    </section>
  );
}
