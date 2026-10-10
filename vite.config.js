import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' lets the built site work from any GitHub Pages address
// (e.g. https://dvorahm.github.io/cacaoguard-site/).
export default defineConfig({
  base: './',
  plugins: [react()],
});
