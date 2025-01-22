import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSingleSpa from 'vite-plugin-single-spa';

// https://vite.dev/config/
export default defineConfig({
  base: 'http://localhost:4444/',
  plugins: [
    react(),
    vitePluginSingleSpa({
      type: 'mife',
      serverPort: 4444,
      projectId: 'spa1',
      spaEntryPoints: ['src/spa.tsx'],
    })
  ],
  preview: {
    cors: true
  }
})
