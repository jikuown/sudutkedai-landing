import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sudutkedai.netlify.app',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
