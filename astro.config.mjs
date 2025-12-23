import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://wicayonima-reborn.github.io',
  base: import.meta.env.PROD ? '/Blog' : '',
  integrations: [
    mdx(),
    sitemap(),
  ],
});