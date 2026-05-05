// 占位组件：用于路由懒加载时的过渡占位，显示加载提示或空白占位，防止页面切换时的闪烁
import React from 'react';

interface PlaceholderProps {
  name: string;
}

export const Placeholder: React.FC<PlaceholderProps> = ({ name }) => (
  <div className="flex items-center justify-center h-full">
    <div className="text-xl text-gray-500">{name}页面开发中...</div>
  </div>
);