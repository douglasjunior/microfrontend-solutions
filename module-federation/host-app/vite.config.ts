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
        '@remote-app': 'http://localhost:3000/mf-manifest.json'
      },
      filename: 'remoteEntry-[hash].js',
      manifest: true,
      shared: {
        react: {
          requiredVersion: '18',
        },
        'react-dom': {},
      }
    })
  ],
  build: {
    target: 'chrome89',
  },
})
