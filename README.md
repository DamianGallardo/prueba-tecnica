# Prueba-tecnica SpaceX

## Objetivo

Desarrollar una aplicación web que consuma la API pública de **SpaceX** para mostrar información sobre lanzamientos espaciales.

La aplicación incluye las siguientes funcionalidades:

- Visualización de lanzamientos espaciales pasados y futuros.
- Filtros por año, éxito de lanzamiento y tipo de misión.
- Mapa interactivo con **Google Maps** para mostrar los sitios de lanzamiento.
- Posibilidad de guardar lanzamientos como favoritos usando **localStorage**.
---

## 🔧 Instalación y ejecución del proyecto

Este proyecto usa **Vite** como entorno de desarrollo rápido para aplicaciones web modernas.

## Tecnologias
⚛️ React (con TypeScript)

🗺️ Google Maps API para la visualización geográfica de los sitios de lanzamiento

🎨 Tailwind CSS para estilos rápidos y responsivos

💾 localStorage para el manejo de favoritos

🧠 Vite como entorno de desarrollo rápido

🧭 Git para el control de versiones

### 🛠️ Requisitos previos

- Node.js v14 o superior
- npm (v6 o superior) o yarn

### 📦 Instalación de dependencias

npm i

### 📦 Correr Proyecto

npm run dev

### Archivos y variables de entorno importates para Key y Api .env

Para utilizar la API de SpaceX y Google Maps, crea un archivo .env en la raíz del proyecto con las siguientes variables:

VITE_API_BASE_URL
VITE_API_KEY_GOOGLE_MAPS

## 📁 Estructura del proyecto

```
prueba-tecnica/
│
├── public/
│   └── spacex-logo.svg
│
├── src/
│   ├── assets/
│   │   └── spacex-logo.png
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── CardContainer.tsx
│   │   │   ├── CardItem.tsx
│   │   │   ├── Pagination.tsx
│   │   │   └── SearchBar.tsx
│   │   ├── LaunchDetails.tsx
│   │   ├── LaunchFavorite.tsx
│   │   ├── DashboardLayout.tsx
│   │   └── Navbar.tsx
│   │
│   ├── hooks/                   # Custom hooks
│   │   └── useApi.ts
│   │
│   ├── utils/                   # Funciones auxiliares y helpers
│   │   └──
│   │
│   ├── pages/                   # Vista de páginas
│   │   └── dashboard.tsx
│   │
│   ├── App.tsx                  # Componente raíz de la aplicación
│   ├── main.tsx                 # Configuración de rutas
│   └── index.css                # Tailwind import
│
├── .env                         # Variables de entorno
├── .gitignore
├── package.json
├── tsconfig.json
└── vite.config.ts
```
