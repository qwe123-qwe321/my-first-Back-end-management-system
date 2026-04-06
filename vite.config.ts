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
        manualChunks: {
          // 将第三方库打包到单独的 chunk
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // 将 Ant Design 打包到单独的 chunk
          antd: ['antd', '@ant-design/icons'],
          // 将图表库打包到单独的 chunk
          charts: ['echarts', 'echarts-for-react', '@ant-design/plots'],
          // 将状态管理库打包到单独的 chunk
          state: ['zustand', '@tanstack/react-query'],
        },
      },
    },
    // 启用代码分割
    chunkSizeWarningLimit: 1000,
  },
});
