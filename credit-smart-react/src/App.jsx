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
       <header className="site-header">
        <div className="container header-inner">
          <h1 className="brand">CreditSmart</h1>
          <nav className="main-nav">
            <Link to="/">Inicio</Link>
            <Link to="/simulador">Simulador</Link>
            <Link to="/solicitar">Solicitar Crédito</Link>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulador" element={<Simulador />} />
        <Route path="/solicitar" element={<Solicitar />} />
      </Routes>
    </BrowserRouter>
  );
}
