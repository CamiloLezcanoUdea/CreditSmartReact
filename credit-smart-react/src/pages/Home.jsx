import { CREDITOS } from "../data/creditos";
import CreditGrid from "../components/CreditGrid";

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h2>Catálogo de créditos</h2>
        <p>Explora nuestras opciones de financiamiento.</p>
      </section>

      <CreditGrid lista={CREDITOS} />
    </main>
  );
}
