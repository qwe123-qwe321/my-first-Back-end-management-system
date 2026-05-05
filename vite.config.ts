// Vite构建配置：配置React、Tailwind CSS插件，设置开发服务器端口和代理规则
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
          if (!id.includes('node_modules')) return;

          const patterns = [
            { group: 'react-vendor', pkg: ['react', 'react-dom', 'react-router-dom'] },
            { group: 'antd', pkg: ['antd', '@ant-design/icons', '@ant-design/cssinjs'] },
            { group: 'charts', pkg: ['echarts', 'echarts-for-react'] },
            { group: 'state', pkg: ['zustand', '@tanstack/react-query', '@tanstack/react-query-devtools'] },
            { group: 'form', pkg: ['react-hook-form', '@hookform/resolvers', 'zod'] },
            { group: 'table', pkg: ['@tanstack/react-table'] },
            { group: 'utils', pkg: ['clsx', 'tailwind-merge', 'class-variance-authority', 'lucide-react'] },
            { group: 'msw', pkg: ['msw'] },
          ];

          for (const { group, pkg } of patterns) {
            if (pkg.some(p => id.includes(p))) {
              return group;
            }
          }

          return 'vendor';
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    reportCompressedSize: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['msw'],
  },
});
