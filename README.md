# 🚀 Rick & Morty Microfrontend: Characters

![Version](https://img.shields.io/badge/version-1.0.0-blue?style=flat-square)
![Microfrontend](https://img.shields.io/badge/Microfrontend-Webpack%20Module%20Federation-blue?style=flat-square)
![React](https://img.shields.io/badge/React-19.x-61dafb?logo=react&logoColor=white&style=flat-square)
![Typescript](https://img.shields.io/badge/Typescript-blue?logo=typescript&logoColor=white&style=flat-square)
![Tailwind](https://img.shiedls.io/badge/Tailwind-61dafb?logo=tailwindccs&logoColor=white&style=flat-square)
![Jest](https://img.shields.io/badge/Testing-Jest-red?logo=jest&logoColor=white&style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

Este proyecto es un microfrontend (MF) llamado **mf-character** que expone el componente principal de personajes de Rick & Morty usando Module Federation con Webpack.
Proveé de un panel de busqueda y visualizacion de personajes de la famosa serie Rick and Morty. 
- Permite hacer una busqueda por nombre, genero, especie, tipo y su estatus.
- Contiene un breadcrumb desde donde se puede limpiar los filtros de busqueda.
- Tiene un paginador para navegar entre las diversas páginas.

## ✨ Características principales
- Microfrontend con Webpack Module Federation
- Consumo de Api [Rick and morty](https://rickandmortyapi.com/) usando mutaciones de [Redux Toolkit](https://redux-toolkit.js.org/)  
- Manejo de React Router Dom para gestionar la navegacion y los parametros de busqueda
- Estilos con TailwindCss
- Testing con Jest & React Testing Library
- Github actions & Docker para contenerizar

## 🗂️ Estructura del proyecto

```
├── public/
│   └── index.html
├── README.md
├── src/
│   ├── App.tsx
│   ├── app/
│   │   ├── features/
│   │   │   ├── charactersApi.ts
│   │   │   ├── characterSlice.ts
│   │   │   └── hooks.ts
│   │   └── store.ts
│   ├── assets/
│   │   └── images/
│   │       ├── empty.png
│   │       ├── images.d.ts
│   │       └── loader.png
│   ├── components/
│   │   ├── Loader.tsx
│   │   └── modal/
│   │       ├── CloseModalButton.tsx
│   │       ├── Modal.tsx
│   │       └── hooks/
│   ├── hooks/
│   │   └── useDispatchHandler.ts
│   ├── index.tsx
│   ├── pages/
│   │   └── characters/
│   │       ├── Characters.tsx
│   │       └── components/
│   │           ├── character-breadcrumb/
│   │           │   ├── CharacterBreadcrumb.tsx
│   │           │   └── hooks/
│   │           │       └── useCharacterBreadcrumb.ts
│   │           ├── character-card/
│   │           │   ├── CharacterCard.tsx
│   │           │   └── hooks/
│   │           │       └── useCharacterCard.ts
│   │           ├── character-container/
│   │           │   ├── CharacterContainer.tsx
│   │           │   └── hooks/
│   │           │       └── useCharacterContainer.ts
│   │           ├── character-empty/
│   │           │   └── CharacterEmpty.tsx
│   │           ├── character-form/
│   │           │   ├── CharacterForm.tsx
│   │           │   ├── components/
│   │           │   │   └── CharacterField.tsx
│   │           │   └── hooks/
│   │           │       └── useCharacterForm.ts
│   │           ├── character-modal/
│   │           │   └── CharacterModal.tsx
│   │           ├── character-paginator/
│   │           │   ├── CharacterPaginator.tsx
│   │           │   └── hooks/
│   │           │       └── useCharacterPaginator.ts
│   ├── setupTest.ts
│   ├── styles/
│   │   └── index.css
│   ├── types/
│   │   └── characterTypes.ts
│   └── utils/
│       ├── customKey.ts
│       └── stringUtils.ts
├── babel.config.json
├── coverage/
├── Dockerfile
├── jest.config.ts
├── node_modules/
├── package-lock.json
├── package.json
├── postcss.config.js
├── tsconfig.json
├── webpack.config.js
```

## 🚦 Uso
### 📦 Instalación
```bash
npm install
```

### 🏃 Ejecución en desarrollo
Modo normal
```bash
npm start
```
Modo standalone:
```
npm run start:standalone
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

