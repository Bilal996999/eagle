import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  refresh: true,
  ssr:false,
  server: {
    port: 3000, // optional: specify the port you want the dev server to run on
    watch: {
      usePolling: true,
    },
    hmr: {
      overlay: false, // disable the error overlay (optional)
    },
  },
})
