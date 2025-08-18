# 🚀 Rick & Morty Microfrontend: Characters

![Microfrontend](https://img.shields.io/badge/Microfrontend-Webpack%20Module%20Federation-blue?style=flat-square)
![React](https://img.shields.io/badge/React-18.x-61dafb?logo=react&logoColor=white&style=flat-square)
![Jest](https://img.shields.io/badge/Testing-Jest-red?logo=jest&logoColor=white&style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

Este proyecto es un microfrontend (MF) llamado **mf-character** que expone el componente principal de personajes de Rick & Morty usando Module Federation con Webpack.

## ✨ Características principales
- Microfrontend con Webpack Module Federation
- Exposición del componente `MfCharacters` desde `src/App.tsx`
- Compartición de dependencias `react` y `react-dom` como singletons
- Configuración de desarrollo con hot reload y apertura automática en el puerto 3001

## 🗂️ Estructura del proyecto

```
├── public/
│   └── index.html
├── src/
│   ├── App.tsx
│   ├── index.tsx
│   ├── setupTest.ts
│   └── styles/
│       └── index.css
├── babel.config.json
├── jest.config.ts
├── package.json
├── postcss.config.js
├── tsconfig.json
├── webpack.config.js
└── README.md
```

## 🚦 Uso
### 📦 Instalación
```bash
npm install
```

### 🏃 Ejecución en desarrollo
```bash
npm start
```
El microfrontend estará disponible en [http://localhost:3001](http://localhost:3001).

### 🏗️ Build de producción
```bash
npm run build
```

## 🧩 Module Federation
Este MF expone el componente principal:
- **name:** `mfCharacters`
- **filename:** `re-mf-characters.js`
- **exposes:** `./MfCharacters` → `src/App.tsx`

## 🔗 Compartición de dependencias
Las dependencias `react` y `react-dom` se comparten como singletons para evitar duplicados entre microfrontends.

## 🧪 Testing
```bash
npm run test
```

## 👤 Autor
**Stewie Mayer**

