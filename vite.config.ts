import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        preprocessorOptions: {
          scss: {
            quietDeps: true,
            additionalData: `@use "sass:math";`
          }
        }
      }
    }
  }
})
