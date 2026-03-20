import React from 'react';
import HeroCarousel from './components/HeroCarousel';
import { CAROUSEL_CONFIG } from './constants/carousel';

const Dashboard: React.FC = () => {
  const { placeholderText } = CAROUSEL_CONFIG;

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-fixed overflow-y-auto"
      style={{
        backgroundImage: 'url(https://game.gtimg.cn/images/yxzj/ip/bg.c7e8614f.jpg)',
      }}
    >
      {/* 移除了未使用的 themeMode 传参 */}
      <HeroCarousel />
      <div className="p-6">
        <h2 className="text-white text-2xl font-bold">{placeholderText}</h2>
      </div>
    </div>
  );
};

export default Dashboard;