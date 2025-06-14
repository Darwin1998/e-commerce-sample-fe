import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'e-commerce-web.test',
    port: 5173,
    strictPort: true,       // pick a specific port
  }
})
