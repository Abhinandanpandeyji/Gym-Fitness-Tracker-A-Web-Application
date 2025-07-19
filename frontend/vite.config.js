import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Gym-Fitness-Tracker-A-Web-Application/', // 👈 Add this for GitHub Pages
  server: {
    port: 5173,
  },
});
