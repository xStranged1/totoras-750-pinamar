// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// Cambiá `site` por tu dominio final cuando lo tengas.
export default defineConfig({
  site: "https://totoras750.com.ar",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
