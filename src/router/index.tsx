import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

// 炫酷的占位组件
const Placeholder = ({ name }: { name: string }) => (
  <div className="flex flex-col items-center justify-center h-[60vh]">
    <div className="text-white/10 text-6xl font-black italic tracking-tighter uppercase mb-4">{name}</div>
    <div className="h-1 w-24 bg-linear-to-r from-cyan-500 to-transparent"></div>
    <p className="mt-4 text-cyan-500/50 animate-pulse tracking-widest text-xs">ARCHIVE MODULE INITIALIZING...</p>
  </div>
);

const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },

      // 对应侧边栏菜单的路由
      { path: 'dashboard', element: <Dashboard /> },                     // 首页
      { path: 'world', element: <Placeholder name="世界" /> },           // 世界
      { path: 'story', element: <Placeholder name="主线剧情" /> },       // 主线剧情
      { path: 'heroes', element: <Placeholder name="英雄" /> },          // 英雄
      { path: 'skins', element: <Placeholder name="皮肤" /> },           // 皮肤
      { path: 'explore', element: <Placeholder name="专题探索" /> },     // 专题探索
      { path: 'community', element: <Placeholder name="玩家社区" /> },   // 玩家社区
      { path: 'settings', element: <Placeholder name="个人主页" /> },    // 个人主页
      { path: 'about', element: <Placeholder name="关于" /> },    // 关于
    ],
  },
  { path: '*', element: <Navigate to="/dashboard" replace /> },
]);

export default router;