import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  base: '/Portfolio/', // The sub-path for your GitHub Pages URL
  plugins: [react()],
};
