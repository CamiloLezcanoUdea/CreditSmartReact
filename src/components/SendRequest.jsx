import { useState } from "react";
import { createSolicitud } from "../firebase/firestoreService";

export default function EnviarSolicitud({ form, cuota }) {
  const [mensaje, setMensaje] = useState("");

  async function enviar() {
    try {
      await createSolicitud({
        tipo: form.tipo,
        monto: form.monto,
        plazo: form.plazo,
        cuotaAprox: cuota,
        fecha: Date.now(),
        estado: "pendiente"
      });

      setMensaje("Solicitud enviada correctamente ✔");
    } catch (error) {
      console.error(error);
      setMensaje("Error al enviar la solicitud ❌");
    }
  }

  return (
    <div>
      <button className="btn" onClick={enviar}>
        Enviar Solicitud
      </button>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}
