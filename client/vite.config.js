import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // keep as project root
  publicDir: 'public', // static assets
  build: {
    rollupOptions: {
      input: 'index.html', // <-- FIXED: use root index.html
    },
  },
});