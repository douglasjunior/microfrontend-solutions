import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: '@host-app',
      remotes: {
        '@remote-app-1': 'http://localhost:4444/mf-manifest.json'
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
        }
      }
    })
  ],
  build: {
    target: 'chrome89',
  },
})
