import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://shr-chauhan.github.io',
  base: '/',
  // Use static output for GitHub Pages
  // API routes are handled by Railway backend (set PUBLIC_CHAT_API_URL)
  output: 'static',
});

