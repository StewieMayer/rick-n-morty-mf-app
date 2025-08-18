# Rick and Morty Host App

Este proyecto es el host principal para una aplicación basada en **Module Federation** usando React, TypeScript, Webpack y TailwindCSS.

## Scripts

- `npm start` — Inicia el servidor de desarrollo en `localhost:3000`
- `npm run build` — Compila la aplicación para producción en la carpeta `dist`
- `npm test` — Ejecuta los tests con Jest
- `npm run coverage` — Genera el reporte de cobertura de tests en la carpeta `coverage`

## Estructura

- `src/` — Código fuente principal
- `public/` — Archivos estáticos
- `coverage/` — Reportes de cobertura de tests

## Tecnologías

- React 19
- TypeScript
- Webpack 5 (Module Federation)
- TailwindCSS
- Jest + Testing Library

## Cómo iniciar

1. Instala dependencias:
   ```sh
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```sh
   npm start
   ```
3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Testing

Los tests están en [`src/App.test.tsx`](src/App.test.tsx). Para ejecutar los tests y ver cobertura:

```sh
npm test
npm run coverage
```

## Autor

Antonio Amaya (Stewie Mayer)