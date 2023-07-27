import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "node:path"
import mixPlugin from 'vite-plugin-mix'

const mix = mixPlugin.default
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    mix({handler: './src/api/api.js'})
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
})
