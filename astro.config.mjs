// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), db()],
  site: 'https://g4bo11.github.io/',
  base: '/GestionBibliotecaUMB'
});