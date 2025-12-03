<h1 align="center">💳 CreditSmart – Aplicación de Créditos en React</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Router-7.0-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
</p>

---

## 📌 Descripción del Proyecto

**CreditSmart** es una aplicación web creada con **React + Vite**, que permite:

- Ver un catálogo dinámico de productos de crédito.  
- Buscar y filtrar créditos en tiempo real (Simulador).  
- Llenar un formulario interactivo con validaciones.  
- Calcular automáticamente la **cuota mensual** según monto, tasa y plazo.  
- Navegar entre páginas mediante **React Router**.  
- Mantener un diseño limpio, responsive y profesional.

Este proyecto corresponde a la **Actividad 2 – Diseño de Interfaces Web**, migrando desde una versión estática hacia una SPA totalmente interactiva.

---

## 🧑‍🎓 Autor

**Camilo Restrepo**  
Proyecto entregado para la materia *Diseño de Interfaces Web*.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción |
|-----------|-------------|
| ⚛️ **React** | UI declarativa basada en componentes |
| ⚡ **Vite** | Bundler rápido para desarrollo |
| 🧭 **React Router DOM** | Navegación SPA |
| 🎨 **CSS Moderno** | Variables, Flexbox, Grid, Responsividad |
| 🔧 **JavaScript ES6+** | Lógica del simulador y validaciones |

---

## 📁 Arquitectura del Proyecto
src/
├── components/
│ ├── Header.jsx
│ ├── CreditCard.jsx
│ ├── CreditGrid.jsx
│ └── SummaryBox.jsx
├── pages/
│ ├── Home.jsx
│ ├── Simulador.jsx
│ └── Solicitar.jsx
├── data/
│ └── creditos.js
├── styles.css
├── App.jsx
└── main.jsx

## 🚀 Instalación y Ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/CamiloLezcanoUdea/CreditSmartReact.git

## 2️⃣ Instalar dependencias

- npm install
- npm run dev
- npm run build

## 🧪 Funcionalidades Principales
## 🔎 Catálogo de Créditos

- Cargado desde un archivo de datos.
- Render dinámico con componentes reutilizables.

## 🧮 Simulador

- Búsqueda en tiempo real.
- Filtrado por rangos de monto.
- Uso de useMemo para optimizar búsquedas.

## 📝 Formulario Dinámico

- Campos validados en tiempo real.
- Cálculo de cuota mensual.
- Resumen automático de solicitud.

## 🔐 Validaciones del Formulario

✔ Monto mínimo / máximo según tipo de crédito
✔ Plazo máximo permitido
✔ Cálculo con fórmula de amortización
✔ Mensajes claros para cada error