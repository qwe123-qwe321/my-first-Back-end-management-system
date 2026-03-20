import React from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

interface SiderCollapseBtnProps {
  collapsed: boolean;
  themeMode: 'dark' | 'light';
  onCollapse: () => void;
}

export const SiderCollapseBtn: React.FC<SiderCollapseBtnProps> = ({ collapsed, themeMode, onCollapse }) => {
  const isDark = themeMode === 'dark';
  
  return (
    <div
      className={`
        absolute bottom-0 left-0 right-0 h-10
        flex items-center justify-center
        ${isDark ? 'bg-[#1a2230] border-t border-gray-700/50' : 'bg-gray-100 border-t border-gray-200'}
        cursor-pointer hover:bg-blue-600/20 transition-colors duration-200
      `}
      onClick={onCollapse}
    >
      {collapsed ? (
        <MenuUnfoldOutlined className={`text-2xl ${isDark ? 'text-blue-300' : 'text-blue-600'}`} />
      ) : (
        <MenuFoldOutlined className={`text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`} />
      )}
    </div>
  );
};