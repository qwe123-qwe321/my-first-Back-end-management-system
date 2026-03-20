import React from 'react';
import HeroCarousel from './components/HeroCarousel';
import { useTheme } from '../../config/theme/useTheme';
import { CAROUSEL_CONFIG } from './constants/carousel';

const Dashboard: React.FC = () => {
  const { themeMode } = useTheme();
  const { placeholderText } = CAROUSEL_CONFIG;

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-fixed overflow-y-auto"
      style={{
        backgroundImage: 'url(https://game.gtimg.cn/images/yxzj/ip/bg.c7e8614f.jpg)',
      }}
    >
      {/* 页面专属子组件（语义化引入） */}
      <HeroCarousel themeMode={themeMode} />
      <div className="p-6">
        <h2 className="text-white text-2xl font-bold">{placeholderText}</h2>
      </div>
    </div>
  );
};

export default Dashboard;