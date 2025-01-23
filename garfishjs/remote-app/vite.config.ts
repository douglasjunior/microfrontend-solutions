import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 4444,
    cors: true,
    hmr: false,
  },
  preview: {
    port: 4444,
    cors: true,
  },
  base: 'http://localhost:4444/',
  plugins: [
    react(),
  ],
})
