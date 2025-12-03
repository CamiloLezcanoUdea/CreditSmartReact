import { useState, useMemo } from "react";
import { CREDITOS } from "../data/creditos";
import CreditGrid from "../components/CreditGrid";

export default function Simulador() {
  const [busqueda, setBusqueda] = useState("");
  const [rango, setRango] = useState("all");

  const filtrados = useMemo(() => {
    let lista = [...CREDITOS];

    if (busqueda.trim() !== "") {
      lista = lista.filter(c =>
        c.nombre.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    if (rango !== "all") {
      const [min, max] = rango.split("-").map(Number);
      lista = lista.filter(c => c.montoMin <= max && c.montoMax >= min);
    }

    return lista;
  }, [busqueda, rango]);

  return (
    <main className="container">

      <section className="hero">
        <h2>Simulador de créditos</h2>
        <p>Busca o filtra créditos en tiempo real.</p>
      </section>

      <section className="sim-controls">
        <input
          type="search"
          placeholder="Buscar crédito"
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />

        <select value={rango} onChange={e => setRango(e.target.value)}>
          <option value="all">Todos</option>
          <option value="0-2000000">Hasta $2.000.000</option>
          <option value="2000000-10000000">$2M - $10M</option>
          <option value="10000000-999999999">Más de $10M</option>
        </select>
      </section>

      <CreditGrid lista={filtrados} />
    </main>
  );
}
