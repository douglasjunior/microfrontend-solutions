import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 4444,
    cors: true,
  },
  preview: {
    port: 4444,
    cors: true,
  },
  base: 'http://localhost:4444/',
  plugins: [
    react(),
    federation({
      name: '@remote-app-1',
      exposes: {
        '.': './src/entrypoint.ts',
      },
      filename: 'remoteEntry-[hash].js',
      manifest: true,
      shared: {
        react: {
          requiredVersion: '18',
        },
        'react-dom': {},
        'react-router': {
          requiredVersion: '7'
        },
      }
    }),
  ],
  build: {
    target: 'chrome89',
  },
})
