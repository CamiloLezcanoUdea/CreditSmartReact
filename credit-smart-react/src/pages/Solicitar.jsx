import { useEffect, useState } from "react";
import { CREDITOS } from "../data/creditos";

export default function Solicitar() {
  const params = new URLSearchParams(location.search);
  const creditoId = params.get("credito");

  const creditoInicial =
    CREDITOS.find(c => c.id === creditoId) || CREDITOS[0];

  const [form, setForm] = useState({
    tipo: creditoInicial.id,
    monto: creditoInicial.montoMin,
    plazo: 12
  });

  const [errors, setErrors] = useState({});
  const fmt = n => n.toLocaleString("es-CO");

  function calcCuota(P, i, n) {
    const r = i / 100 / 12;
    return P * r / (1 - Math.pow(1 + r, -n));
  }

  const credito = CREDITOS.find(c => c.id === form.tipo);
  const cuota = calcCuota(form.monto, credito.tasa, form.plazo) || 0;

  function validate() {
    const e = {};
    if (form.monto < credito.montoMin) {
      e.monto = `El monto mínimo es $${fmt(credito.montoMin)}`;
    }
    if (form.monto > credito.montoMax) {
      e.monto = `El monto máximo es $${fmt(credito.montoMax)}`;
    }
    if (form.plazo > credito.plazoMax) {
      e.plazo = `El plazo máximo es ${credito.plazoMax} meses`;
    }
    setErrors(e);
  }

  useEffect(validate, [form]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: Number(e.target.value) || e.target.value });
  }

  return (
    <main className="container">
      <h2>Solicitud de crédito</h2>

      <form className="form-grid" onSubmit={e => e.preventDefault()}>

        <fieldset>
          <legend>Datos del crédito</legend>

          <label>Tipo</label>
          <select name="tipo" value={form.tipo} onChange={handleChange}>
            {CREDITOS.map(c => (
              <option key={c.id} value={c.id}>
                {c.nombre}
              </option>
            ))}
          </select>

          <label>Monto (COP)</label>
          <input
            name="monto"
            type="number"
            value={form.monto}
            onChange={handleChange}
          />
          {errors.monto && <p className="error">{errors.monto}</p>}

          <label>Plazo (meses)</label>
          <input
            name="plazo"
            type="number"
            value={form.plazo}
            onChange={handleChange}
          />
          {errors.plazo && <p className="error">{errors.plazo}</p>}
        </fieldset>

        <section className="summary">
          <h3>Resumen</h3>
          <p><strong>Producto:</strong> {credito.nombre}</p>
          <p><strong>Tasa:</strong> {credito.tasa}%</p>
          <p><strong>Monto:</strong> ${fmt(form.monto)}</p>
          <p><strong>Plazo:</strong> {form.plazo} meses</p>
          <p><strong>Cuota estimada:</strong> ${fmt(cuota.toFixed(0))}/mes</p>
        </section>

        <button className="btn">Enviar Solicitud</button>
      </form>
    </main>
  );
}
