// Dashboard页面核心容器组件：负责渲染页面全局背景、控制轮播图的显示/隐藏，承载后续所有业务模块（如数据卡片、滚动列表），并提供无内容时的兜底文案
import React, { type PropsWithChildren } from 'react';
import HeroCarousel from './HeroCarousel';

interface DashboardContainerProps extends PropsWithChildren {
  hasCarousel?: boolean; // 控制是否显示轮播图
}

export const DashboardContainer: React.FC<DashboardContainerProps> = ({
  hasCarousel = true,
  children, // 接收子组件
}) => {
  return (
    <div
      data-page-scroll-container="true"
      className="h-full w-full bg-cover bg-center bg-fixed overflow-y-auto overflow-x-auto min-h-0 dark:bg-gray-950"
      style={{
        backgroundImage:
          'url(https://game.gtimg.cn/images/yxzj/ip/bg.c7e8614f.jpg)',
      }}
    >
      {/* 轮播区（可选） */}
      {hasCarousel && (
        <div className="w-full">
          <HeroCarousel />
        </div>
      )}

      {/* 核心内容区：渲染子组件（图表） */}
      <div className="container mx-auto px-4 py-6">
        {children} {/* 关键：添加这一行！ */}
      </div>
    </div>
  );
};
