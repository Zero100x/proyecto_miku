# Proyecto Miku

Sitio en Next.js preparado para desplegarse en Vercel.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:3000 para ver el proyecto.

## Validacion antes de desplegar

```bash
npm run lint
npm run build
```

## Despliegue en Vercel

1. Sube este repositorio a GitHub.
2. En Vercel, crea un proyecto nuevo e importa el repositorio.
3. Vercel detecta Next.js automaticamente.
4. Usa la configuracion por defecto:
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Install Command: `npm install`
   - Output Directory: `.next`
5. Haz deploy.

No se necesita `vercel.json` para este proyecto porque Vercel ya soporta Next.js de forma nativa.
