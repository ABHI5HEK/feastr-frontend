import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'prompt',
    injectRegister: true,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'Feastr',
      short_name: 'Feastr',
      description: 'Feastr - Your Progressive Web App',
      theme_color: '#FF6B6B', // App theme color
      background_color: '#ffffff', // App background color on launch
      start_url: '/', // Start URL (when the app is launched)
      display: 'standalone', // Display mode (standalone for PWA behavior)
      "orientation": "portrait",
      "prefer_related_applications": false,
      icons: [
        {
          src: '/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
    resolve: {
      alias: {
        crypto: 'crypto-browserify',
      },
    },
  })],
})