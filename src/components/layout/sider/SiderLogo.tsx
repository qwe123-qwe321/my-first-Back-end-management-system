import React from 'react';

interface SiderLogoProps {
  collapsed: boolean;
}

export const SiderLogo: React.FC<SiderLogoProps> = React.memo(
  ({ collapsed }) => {
    return (
      <div className="h-16 flex items-center justify-center shrink-0">
        <div
          className={`flex items-center gap-3 transition-all duration-300 ${collapsed ? 'scale-150' : 'scale-100'}`}
        >
          <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl" />
          {!collapsed && (
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-500 font-black text-2xl tracking-tighter">
              KOG HUB
            </span>
          )}
        </div>
      </div>
    );
  }
);

// 添加组件优化注释
/**
 * SiderLogo 组件使用 React.memo 进行优化
 * 目的：避免在侧边栏展开/收起时，无状态的 SiderLogo 组件不必要的重新渲染
 * 效果：只有当 collapsed prop 发生变化时，组件才会重新渲染
 */
