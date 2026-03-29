import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain: rockellstech.com → base must be '/' so assets load from the domain root.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          r3f: ['@react-three/fiber', '@react-three/drei'],
        },
      },
    },
  },
})
