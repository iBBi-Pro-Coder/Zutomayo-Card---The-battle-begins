import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Zutomayo-Card---The-battle-begins/',
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  },
  server: {
    port: 3000,
    open: true
  }
})