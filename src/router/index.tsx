import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
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
      // 1. 仪表盘
      { path: 'dashboard', element: <Dashboard /> },
      // 2. 英雄殿堂及其子模块
      { path: 'heroes', element: <Placeholder name="Heroes Hall" /> },
      { path: 'heroes/skins', element: <Placeholder name="Skin Showcase" /> },
      // 3. 巅峰战力
      { path: 'rank', element: <Placeholder name="Power Arena" /> },
      // 4. 智谋熔炉及其子模块
      { path: 'strategy', element: <Placeholder name="Strategy Forge" /> },
      { path: 'strategy/lineup', element: <Placeholder name="Lineup Simulator" /> },
      // 5. 我的荣耀档案
      { path: 'my-archive', element: <Placeholder name="My Archive" /> },
      // 6. 数据洞察中心
      { path: 'insights', element: <Placeholder name="Insight Nexus" /> },
      // 7. 社区荣耀广场
      { path: 'community', element: <Placeholder name="Community Square" /> },
      // 8. 系统控制台
      { path: 'settings', element: <Placeholder name="System Terminal" /> },
    ],
  },
  { path: '*', element: <Navigate to="/dashboard" replace /> }
]);

export default router;