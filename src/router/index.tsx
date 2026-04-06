import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import {
  Login,
  Dashboard,
  VoiceAnimation,
  Profile,
  Community,
  LazyWrapper,
} from './lazyLoad';

// 导入占位组件
import { Placeholder } from './Placeholder';

const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <LazyWrapper>
        <Login />
      </LazyWrapper>
    ),
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },

      // 对应侧边栏菜单的路由
      {
        path: 'dashboard',
        element: (
          <LazyWrapper>
            <Dashboard />
          </LazyWrapper>
        ),
      }, // 首页
      {
        path: 'heroes',
        children: [
          { index: true, element: <Navigate to="/dashboard" replace /> },
          {
            path: 'profile',
            element: (
              <LazyWrapper>
                <Dashboard />
              </LazyWrapper>
            ),
          }, // 英雄档案
          {
            path: 'voice',
            element: (
              <LazyWrapper>
                <VoiceAnimation />
              </LazyWrapper>
            ),
          }, // 语音动画
        ],
      }, // 英雄
      { path: 'skins', element: <Placeholder name="皮肤" /> }, // 皮肤
      { path: 'explore', element: <Placeholder name="专题探索" /> }, // 专题探索
      {
        path: 'community',
        element: (
          <LazyWrapper>
            <Community />
          </LazyWrapper>
        ),
      }, // 玩家社区
      {
        path: 'settings',
        element: (
          <LazyWrapper>
            <Profile />
          </LazyWrapper>
        ),
      }, // 个人主页
      { path: 'about', element: <Placeholder name="关于" /> }, // 关于
    ],
  },
  { path: '*', element: <Navigate to="/dashboard" replace /> },
]);

export default router;
