// vite.config.js
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  base: '/blok-sirius-frontend/',
  build: {
    outDir: 'dist',
  },
};
