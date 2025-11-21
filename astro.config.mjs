import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Determine base path based on environment
// In development, use '/' for easier local testing
// In production (build), use '/' for shrey.github.io (root domain)
const isDev = process.env.NODE_ENV !== 'production' && !process.env.CI;

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://shrey.github.io',
  // Base path is '/' for both dev and production since we're deploying to the root domain
  base: '/',
});

