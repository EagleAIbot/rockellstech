import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain: rockellstech.com → base must be '/' so assets load from the domain root.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
