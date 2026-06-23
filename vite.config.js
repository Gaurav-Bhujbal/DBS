import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api/tracking': {
        target: 'http://117.248.110.22',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/tracking/, '/DBSEXP/CSM/TRACKLR.ASPX'),
        cookieDomainRewrite: { '*': 'localhost' },
      },
      // Generic proxy for all assets (images, uploads) from the tracking server.
      // Keeps the session cookie alive so authenticated images load.
      '/DBSEXP': {
        target: 'http://117.248.110.22',
        changeOrigin: true,
        cookieDomainRewrite: { '*': 'localhost' },
      },
    },
  },
})
