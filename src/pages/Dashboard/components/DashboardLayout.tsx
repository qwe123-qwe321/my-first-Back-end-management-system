// Dashboard页面备用布局组件：定义了页面基础布局结构（全局背景、溢出处理），接收子组件和占位文案属性，目前未实际使用，可根据需求替代DashboardContainer或补充布局能力
import React, { type PropsWithChildren } from 'react';

interface DashboardLayoutProps extends PropsWithChildren {
  placeholderText: string;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  placeholderText,
}) => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-fixed overflow-y-auto"
      style={{
        backgroundImage:
          'url(https://game.gtimg.cn/images/yxzj/ip/bg.c7e8614f.jpg)',
      }}
    >
      {children}
      <div className="p-6">
        <h2 className="text-white text-2xl font-bold">{placeholderText}</h2>
      </div>
    </div>
  );
};
