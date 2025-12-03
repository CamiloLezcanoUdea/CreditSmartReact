import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Simulador from "./pages/Simulador";
import Solicitar from "./pages/Solicitar";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Home />} />

        {/* Simulador */}
        <Route path="/simulador" element={<Simulador />} />

        {/* Solicitar crédito */}
        <Route path="/solicitar" element={<Solicitar />} />
      </Routes>
    </BrowserRouter>
  );
}
