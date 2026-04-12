import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
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
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            if (id.includes('react-hook-form') || id.includes('zod')) {
              return 'form';
            }
            if (id.includes('msw')) {
              return 'mock';
            }
            return 'vendor';
          }
        },
      },
    },
  },
});
