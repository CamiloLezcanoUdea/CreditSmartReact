import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <h1 className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            CreditSmart
          </Link>
        </h1>

        <nav className="main-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Inicio
          </NavLink>

          <NavLink
            to="/simulador"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Simulador
          </NavLink>

          <NavLink
            to="/solicitar"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Solicitar Crédito
          </NavLink>

          <NavLink
            to="/solicitudes"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Solicitudes
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
