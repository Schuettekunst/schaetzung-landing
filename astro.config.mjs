import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://schaetzung.schuettekunst.de',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
