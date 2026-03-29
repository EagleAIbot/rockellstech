import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project URL: https://eagleaibot.github.io/rockellstech/
// After you add a custom domain (Settings → Pages), set base: '/' and redeploy so assets load from the domain root.
export default defineConfig({
  plugins: [react()],
  base: '/rockellstech/',
})
