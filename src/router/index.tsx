// src/router/index.tsx
import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login'; // 确认路径指向了你写好的那个 index.tsx

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />, // 这里必须是 <Login /> 组件，而不是 <div>文字</div>
  },
  {
    path: '/',
    element: <div>这是首页，请在地址栏手动输入 /login 看看</div>,
  }
]);

export default router;