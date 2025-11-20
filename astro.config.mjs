import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // Update this with your GitHub username
  site: 'https://YOUR_USERNAME.github.io',
  // If your repo is named "Portfolio", keep this as '/Portfolio'
  // If your repo is named "username.github.io", change this to '/'
  base: '/Portfolio',
});

