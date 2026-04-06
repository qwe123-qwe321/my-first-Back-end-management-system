import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // 配置代码分割
    rollupOptions: {
      output: {
        // 手动配置代码分割
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (
              id.includes('react') ||
              id.includes('react-dom') ||
              id.includes('react-router-dom')
            ) {
              return 'vendor';
            }
            if (id.includes('antd') || id.includes('@ant-design/icons')) {
              return 'antd';
            }
            if (id.includes('echarts') || id.includes('echarts-for-react')) {
              return 'charts';
            }
            if (
              id.includes('zustand') ||
              id.includes('@tanstack/react-query')
            ) {
              return 'state';
            }
            return 'vendor';
          }
        },
      },
    },
    // 启用代码分割
    chunkSizeWarningLimit: 1000,
  },
});
