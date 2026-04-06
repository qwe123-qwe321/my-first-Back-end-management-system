import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. 路由：控制页面去哪儿
import { RouterProvider } from 'react-router-dom';
// 2. 数据请求管家：负责缓存和管理所有后端接口数据
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// 3. UI配置：Ant Design 的全局设置（比如改个主题色、换个语言）
import { ConfigProvider } from 'antd';
// 4. 语言包：把 AntD 的组件（如分页、弹窗按钮）默认显示成中文
import zhCN from 'antd/locale/zh_CN';

import router from './router'; // 刚才建好的路由
import './index.css'; // Tailwind 样式

// 【解释】：创建一个 QueryClient 实例。
// 它就像一个“记事本”，记录了你请求过哪些数据。
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // 接口要是失败了，自动重试 1 次
      refetchOnWindowFocus: false, // 你切换浏览器窗口再回来时，别偷偷重新刷接口
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 顺序很重要：管家（Query）要在最外面，UI配置在中间，路由在最里面 */}
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={zhCN}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
