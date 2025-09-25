# Vercel/Netlify Deployment

Este proyecto está listo para ser desplegado en Vercel o Netlify.

## Pasos para desplegar

1. Instala las dependencias:
   ```sh
   pnpm install --no-frozen-lockfile
   ```
2. Compila el proyecto:
   ```sh
   pnpm run build
   ```
3. El directorio de salida es `dist/`.

## Configuración recomendada
- **Vercel**: Detecta automáticamente proyectos Vite y usa el comando de build `pnpm run build`.
- **Netlify**: Configura el build command como `pnpm run build` y el publish directory como `dist`.

## Notas
- Si usas Netlify, puedes agregar un archivo `_redirects` en `public/` para manejar rutas SPA:
  ```
  /*    /index.html   200
  ```
- Si usas Vercel, no necesitas configuración adicional para rutas SPA.

## Solución de errores
Si aparece el error `ERR_PNPM_OUTDATED_LOCKFILE`, asegúrate de usar `pnpm install --no-frozen-lockfile`.

---

Para más detalles, revisa la documentación oficial de Vercel y Netlify.