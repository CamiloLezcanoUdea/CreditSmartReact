import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes
import Header from "./components/Header";

// Páginas
import Home from "./pages/Home";
import Simulador from "./pages/Simulador";
import Solicitar from "./pages/Solicitar";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulador" element={<Simulador />} />
        <Route path="/solicitar" element={<Solicitar />} />
      </Routes>
    </BrowserRouter>
  );
}
