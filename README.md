<h1 align="center">💳 CreditSmart – Aplicación de Créditos en React con Firebase</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Router-7.0-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" />
  <img src="https://img.shields.io/badge/Firebase-Firestore-FFCA28?style=for-the-badge&logo=firebase&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
</p>

---

## 📌 Descripción del Proyecto

**CreditSmart** es una aplicación web creada con **React + Vite**, diseñada para simular, solicitar y gestionar créditos.  
Incluye una integración completa con **Firebase Firestore**, permitiendo:

- Guardar solicitudes de crédito en la nube  
- Consultarlas en tiempo real  
- Mostrar mensajes de *loading*  
- Manejo de errores (incluye modo offline)  
- Persistencia completa entre sesiones  

Este proyecto corresponde a las actividades **2 y 3** del curso *Diseño de Interfaces Web* y *Aplicaciones Web*.

---

## 🧑‍🎓 Autor

**Camilo Restrepo**  
Proyecto para la Institución Universitaria Digital de Antioquia.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción |
|-----------|-------------|
| ⚛️ **React** | UI declarativa basada en componentes |
| ⚡ **Vite** | Bundler rápido para desarrollo |
| 🧭 **React Router DOM** | Navegación SPA |
| 🎨 **CSS Moderno** | Flexbox, Grid, responsividad |
| 🔧 **JavaScript ES6+** | Lógica del simulador |
| 🔥 **Firebase** | Backend serverless |
| 📄 **Firestore** | Base de datos NoSQL en tiempo real |

---

## 🔥 Integración con Firebase / Firestore (Actividad 3)

La aplicación ahora está conectada a **Firebase Firestore**, permitiendo realizar CRUD y mostrar datos en tiempo real.

### ✔ Características implementadas:

- ✓ Configuración de Firebase mediante variables de entorno  
- ✓ Conexión a Firestore usando el SDK modular  
- ✓ Colección `solicitudes` creada en la nube  
- ✓ Crear una nueva solicitud desde la interfaz  
- ✓ Listado en tiempo real usando `onSnapshot`  
- ✓ Manejo de **loading** al cargar datos  
- ✓ Manejo de **errores** (incluye prueba sin internet)  
- ✓ Página `/solicitudes` para visualizar solicitudes  
- ✓ `.env.example` incluido sin credenciales (seguridad)  
- ✓ `.gitignore` configurado para ocultar `.env`  

### 🔧 Archivos principales de Firebase

src/firebase/config.js
src/firebase/firestoreService.js
src/pages/Solicitudes.jsx

yaml
Copiar código

---

## 📁 Arquitectura del Proyecto

src/
├── components/
│ ├── Header.jsx
│ ├── CreditCard.jsx
│ ├── CreditGrid.jsx
│ ├── SummaryBox.jsx
│ └── EnviarSolicitud.jsx
├── pages/
│ ├── Home.jsx
│ ├── Simulador.jsx
│ ├── Solicitar.jsx
│ └── Solicitudes.jsx
├── firebase/
│ ├── config.js
│ └── firestoreService.js
├── data/
│ └── creditos.js
├── styles.css
├── App.jsx
└── main.jsx

markdown
Copiar código

---

## 🧪 Funcionalidades Principales

### 🔎 Catálogo de Créditos
- Render dinámico
- Búsqueda en tiempo real
- Filtrado por tipo de crédito

### 🧮 Simulador
- Cálculo de cuota mensual automático  
- Validaciones dinámicas  
- Fórmula de amortización financiera  

### 📝 Formulario de Solicitud
- Validación de montos mínimos/máximos  
- Validación de plazos  
- Resumen en vivo con **SummaryBox**

### 🔥 Firestore CRUD
- **Crear** solicitudes  
- **Leer** solicitudes en tiempo real  
- **Escuchar cambios** con `onSnapshot`  
- **Mensajes de estado (loading)**  
- **Manejo de desconexión**  

---

## ⚙️ Instalación y Ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/CamiloLezcanoUdea/CreditSmartReact.git
2️⃣ Instalar dependencias
bash
Copiar código
npm install
3️⃣ Crear archivo .env
ini
Copiar código
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
(Usar los valores del proyecto Firebase — NO subir a GitHub)

4️⃣ Ejecutar el servidor
bash
Copiar código
npm run dev