import React from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

interface SiderCollapseBtnProps {
  collapsed: boolean;
  themeMode: 'dark' | 'light';
  onCollapse: () => void;
}

export const SiderCollapseBtn: React.FC<SiderCollapseBtnProps> = React.memo(
  ({ collapsed, themeMode, onCollapse }) => {
    const isDark = themeMode === 'dark';

    return (
      <div
        className={`
        absolute bottom-0 left-0 right-0 h-10
        flex items-center justify-center
        ${isDark ? 'bg-[#1a1a1a] border-t border-gray-700/50' : 'bg-gray-100 border-t border-gray-200'}
        cursor-pointer hover:bg-blue-600/20 transition-colors duration-200
      `}
        onClick={onCollapse}
      >
        {collapsed ? (
          <MenuUnfoldOutlined
            className={`text-2xl ${isDark ? 'text-gray-400' : 'text-blue-600'}`}
          />
        ) : (
          <MenuFoldOutlined
            className={`text-2xl ${isDark ? 'text-gray-400' : 'text-gray-900'}`}
          />
        )}
      </div>
    );
  }
);

// 添加组件优化注释
/**
 * SiderCollapseBtn 组件使用 React.memo 进行优化
 * 目的：避免在主题切换或其他状态变化时，无状态的 SiderCollapseBtn 组件不必要的重新渲染
 * 效果：只有当 collapsed、themeMode 或 onCollapse props 发生变化时，组件才会重新渲染
 */
