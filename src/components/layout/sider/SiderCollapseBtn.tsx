import React from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useAppStore } from '../../../store/appStore';

interface SiderCollapseBtnProps {
  collapsed: boolean;
  onCollapse: () => void;
}

export const SiderCollapseBtn: React.FC<SiderCollapseBtnProps> = React.memo(
  ({ collapsed, onCollapse }) => {
    const isDark = useAppStore((state) => state.isDark);

    return (
      <div
        className={`
        absolute bottom-0 left-0 right-0 h-12
        flex items-center justify-center
        cursor-pointer
        transition-all duration-300 ease-out
        ${
          isDark
            ? 'bg-linear-to-r from-[#1a1a1a] to-[#1a1a1a] border-t border-gray-700/50 hover:from-blue-900/30 hover:to-purple-900/30'
            : 'bg-linear-to-r from-gray-50 to-gray-100 border-t border-gray-200 hover:from-blue-50 hover:to-purple-50'
        }
      `}
        onClick={onCollapse}
      >
        <div
          className={`
          p-2 rounded-lg
          transition-all duration-300 ease-out
          ${
            isDark
              ? 'hover:bg-white/10 text-gray-400 hover:text-blue-400'
              : 'hover:bg-blue-500/10 text-gray-600 hover:text-blue-600'
          }
        `}
        >
          {collapsed ? (
            <MenuUnfoldOutlined className="text-xl" />
          ) : (
            <MenuFoldOutlined className="text-xl" />
          )}
        </div>
      </div>
    );
  }
);
