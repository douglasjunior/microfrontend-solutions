import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSingleSpa from 'vite-plugin-single-spa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginSingleSpa({
      type: 'root',
      imo: '5.0.0',
      importMaps: {
        dev: ['src/importMap.dev.json'],
        build: ['src/importMap.json'],
      }
    })],
})
