import React, { lazy, Suspense } from 'react';

// 使用 React.lazy 实现按需加载，减少首屏加载时间
export const Login = lazy(() => import('../pages/Login'));
export const Dashboard = lazy(() => import('../pages/Dashboard'));
export const VoiceAnimation = lazy(
  () => import('../pages/Heroes/VoiceAnimation')
);
export const Profile = lazy(() => import('../pages/Profile'));
export const Community = lazy(() => import('../pages/Community'));

// 加载组件，用于显示加载状态
export const Loading = () => (
  <div className="flex items-center justify-center h-full">
    <div className="text-xl text-blue-500">加载中...</div>
  </div>
);

// 包装组件，用于实现按需加载和错误处理
export const LazyWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<Loading />}>{children}</Suspense>
);
