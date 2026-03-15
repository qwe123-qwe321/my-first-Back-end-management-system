import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 引入这个

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 注册插件
  ],
})