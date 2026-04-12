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

const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = useAppStore((state) => state.token);
  const isAuthenticated = !!token || true;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <Suspense fallback={<LoadingFallback />}>
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
            <Suspense fallback={<LoadingFallback />}>
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
              <Suspense fallback={<LoadingFallback />}>
                <Dashboard />
              </Suspense>
            ),
          },
          {
            path: 'voice',
            element: (
              <Suspense fallback={<LoadingFallback />}>
                <VoiceAnimation />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'skins',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Skin />
          </Suspense>
        ),
      },
      {
        path: 'explore',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Placeholder name="专题探索" />
          </Suspense>
        ),
      },
      {
        path: 'community',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Community />
          </Suspense>
        ),
      },
      {
        path: 'settings',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: 'users',
        element: (
          <ProtectedRoute>
            <Suspense fallback={<LoadingFallback />}>
              <UserManagement />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '403',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Error403 />
          </Suspense>
        ),
      },
      {
        path: '404',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Error404 />
          </Suspense>
        ),
      },
      {
        path: '500',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Error500 />
          </Suspense>
        ),
      },
      {
        path: 'skin',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Skin />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Error404 />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
