# Instrucciones de Despliegue en Vercel 🚀

Este proyecto usa **Vite, React y React Router**. Dado que es una Single Page Application (SPA), Vercel requiere cierta configuración para que las URLs (como `/admin/dashboard`) no devuelvan un error 404 al recargar la página.

## 1. Archivo de Configuración (`vercel.json`)
Ya he creado el archivo `vercel.json` en la raíz del proyecto. Este archivo contiene las reglas de "rewrites" necesarias. Básicamente, le dice a Vercel: *cualquier ruta que el usuario solicite, mándalo a `index.html`* (React Router se encargará del resto).

```json
{
  "framework": "vite",
  "buildCommand": "pnpm build",
  "installCommand": "pnpm install",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 2. Pasos para Subir a Producción

Tienes dos opciones principales para el despliegue:

### Opción A (Recomendada): Mediante GitHub
1. Entra a tu cuenta en [vercel.com](https://vercel.com).
2. Haz clic en **"Add New..." > "Project"**.
3. Importa el repositorio de GitHub de este proyecto (`Max1mus5/redpark-app`).
4. Vercel detectará automáticamente que es un proyecto basado en Vite.
5. Haz clic en **Deploy**. 
¡Vercel leerá automáticamente el archivo `vercel.json` y desplegará conectando los commits en la branch `main`/`master` automáticamente cada que hagas push!

### Opción B: Mediante Vercel CLI
Si prefieres hacerlo desde tu terminal en VS Code:
1. Instala el CLI de Vercel globalmente: `npm i -g vercel`
2. En tu terminal (asegúrate de estar dentro de la carpeta `redpark-app`), ejecuta: `vercel`
3. Sigue el formulario en línea (logueate si te lo pide, enlázalo al proyecto y listo). 
Para enviar tus cambios a producción definitiva ejecuta: `vercel --prod`
