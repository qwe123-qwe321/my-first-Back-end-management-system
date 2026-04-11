import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import VoiceAnimation from '../pages/Heroes/VoiceAnimation';
import Profile from '../pages/Profile';
import Community from '../pages/Community';
import { Placeholder } from '../components/common/Placeholder';
import Error403 from '../pages/error/Error403';
import Error404 from '../pages/error/Error404';
import Error500 from '../pages/error/Error500';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'heroes',
        children: [
          { index: true, element: <Navigate to="/dashboard" replace /> },
          {
            path: 'profile',
            element: <Dashboard />
          },
          {
            path: 'voice',
            element: <VoiceAnimation />
          }
        ]
      },
      { path: 'skins', element: <Placeholder name="皮肤" /> },
      { path: 'explore', element: <Placeholder name="专题探索" /> },
      {
        path: 'community',
        element: <Community />
      },
      {
        path: 'settings',
        element: <Profile />
      },
      { path: 'about', element: <Placeholder name="关于" /> },
      { path: '403', element: <Error403 /> },
      { path: '404', element: <Error404 /> },
      { path: '500', element: <Error500 /> },
      { path: '*', element: <Error404 /> }
    ]
  }
]);

export default router;