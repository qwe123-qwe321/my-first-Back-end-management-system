// src/router/index.tsx
import { createBrowserRouter, Navigate } from 'react-router-dom'; // 1. 引入 Navigate
import Login from '../pages/Login';
// 假设你之后会有 MainLayout，现在先用占位符

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    // 2. 这里的逻辑是：访问 / 时，直接重定向到 /login
    // replace 表示不保留这一步在浏览器历史记录里
    element: <Navigate to="/login" replace />, 
  },
  {
    path: '/dashboard', // 以后真正的首页改名叫 dashboard
    element: <div>这是登录后才能看的后台首页</div>,
  }
]);

export default router;