// 路由配置中心：定义应用所有页面路由（懒加载）、布局嵌套、错误页兜底，以及基于用户状态的登录重定向逻辑
import { createBrowserRouter, Navigate } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Placeholder } from '../components/common/Placeholder';
import { useAppStore } from '../store/appStore';

const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const VoiceAnimation = lazy(() => import('../pages/Heroes/VoiceAnimation'));
const Profile = lazy(() => import('../pages/Profile'));
const Community = lazy(() => import('../pages/Community'));
const Error403 = lazy(() => import('../pages/error/Error403'));
const Error404 = lazy(() => import('../pages/error/Error404'));
const Error500 = lazy(() => import('../pages/error/Error500'));
const UserManagement = lazy(() => import('../pages/UserManagement'));
const Skin = lazy(() => import('../pages/skin/Skin'));
const About = lazy(() => import('../pages/About'));

const PageLoading = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-10 w-10 border-2 border-blue-500 border-t-transparent"></div>
  </div>
);

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = useAppStore((state) => state.token);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <Suspense fallback={<PageLoading />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <Suspense fallback={<PageLoading />}>
              <Dashboard />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: 'heroes',
        children: [
          { index: true, element: <Navigate to="/dashboard" replace /> },
          {
            path: 'profile',
            element: (
              <Suspense fallback={<PageLoading />}>
                <Dashboard />
              </Suspense>
            ),
          },
          {
            path: 'voice',
            element: (
              <Suspense fallback={<PageLoading />}>
                <VoiceAnimation />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'skins',
        element: (
          <Suspense fallback={<PageLoading />}>
            <Skin />
          </Suspense>
        ),
      },
      {
        path: 'explore',
        element: (
          <Suspense fallback={<PageLoading />}>
            <Placeholder name="专题探索" />
          </Suspense>
        ),
      },
      {
        path: 'community',
        element: (
          <Suspense fallback={<PageLoading />}>
            <Community />
          </Suspense>
        ),
      },
      {
        path: 'settings',
        element: (
          <Suspense fallback={<PageLoading />}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: 'users',
        element: (
          <ProtectedRoute>
            <Suspense fallback={<PageLoading />}>
              <UserManagement />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<PageLoading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: 'error-pages',
        children: [
          {
            path: '403',
            element: (
              <Suspense fallback={<PageLoading />}>
                <Error403 />
              </Suspense>
            ),
          },
          {
            path: '404',
            element: (
              <Suspense fallback={<PageLoading />}>
                <Error404 />
              </Suspense>
            ),
          },
          {
            path: '500',
            element: (
              <Suspense fallback={<PageLoading />}>
                <Error500 />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'skin',
        element: (
          <Suspense fallback={<PageLoading />}>
            <Skin />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<PageLoading />}>
            <Error404 />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
