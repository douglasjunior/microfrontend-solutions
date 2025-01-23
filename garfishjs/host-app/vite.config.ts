import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/remote': 'http://localhost:4444', // Porta onde o Remote está rodando
    },
  },
})
