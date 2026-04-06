import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import VoiceAnimation from '../pages/Heroes/VoiceAnimation';
import Profile from '../pages/Profile';
import Community from '../pages/Community';

// 占位组件
const Placeholder = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center h-full">
    <div className="text-xl text-gray-500">{name}页面开发中...</div>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },

      // 对应侧边栏菜单的路由
      {
        path: 'dashboard',
        element: <Dashboard />,
      }, // 首页
      {
        path: 'heroes',
        children: [
          { index: true, element: <Navigate to="/dashboard" replace /> },
          {
            path: 'profile',
            element: <Dashboard />,
          }, // 英雄档案
          {
            path: 'voice',
            element: <VoiceAnimation />,
          }, // 语音动画
        ],
      }, // 英雄
      { path: 'skins', element: <Placeholder name="皮肤" /> }, // 皮肤
      { path: 'explore', element: <Placeholder name="专题探索" /> }, // 专题探索
      {
        path: 'community',
        element: <Community />,
      }, // 玩家社区
      {
        path: 'settings',
        element: <Profile />,
      }, // 个人主页
      { path: 'about', element: <Placeholder name="关于" /> }, // 关于
    ],
  },
  { path: '*', element: <Navigate to="/dashboard" replace /> },
]);

export default router;
