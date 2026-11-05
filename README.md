# Totoras 750 · Landing de alquileres en Pinamar

Sitio estático hecho con **Astro**, **React**, **Tailwind CSS v4** y componentes **shadcn/ui**.

## Cómo correrlo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera la carpeta dist/
npm run preview  # prueba el build
```

## Qué editar

Todo el contenido está en `src/config.ts`:

- `SITE.whatsapp`: número de WhatsApp en formato internacional, sin `+` ni espacios
  (Argentina celular: `549` + característica sin 0 + número sin 15). Ahora está en `5492246580576`.
- `SITE.address`, `SITE.mapsUrl`, `SITE.mapsEmbed`: dirección y mapa.
- `units`: nombre, capacidad, camas, descripción y fotos de cada departamento.
  Para cambiar qué fotos muestra cada uno, editá el arreglo `photos` de esa unidad.

Las imágenes están en `public/images/`.

En `astro.config.mjs` cambiá `site` por tu dominio cuando lo tengas.

## Publicarlo gratis

La carpeta `dist/` es HTML estático. Funciona en Netlify, Vercel, Cloudflare Pages o GitHub Pages.

## Agregar más componentes de shadcn

`components.json` ya está configurado:

```bash
npx shadcn@latest add accordion
```
