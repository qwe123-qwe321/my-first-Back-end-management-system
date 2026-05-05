// 侧边栏折叠按钮组件：提供展开/折叠侧边栏的切换按钮，使用图标指示当前状态，固定在侧边栏底部
import React from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

interface SiderCollapseBtnProps {
  collapsed: boolean;
  onCollapse: () => void;
}

export const SiderCollapseBtn: React.FC<SiderCollapseBtnProps> = React.memo(
  ({ collapsed, onCollapse }) => {
    return (
      <div
        className="
        absolute bottom-0 left-0 right-0 h-12
        flex items-center justify-center
        cursor-pointer
        transition-all duration-300 ease-out
        bg-linear-to-r from-gray-50 to-gray-100 border-t border-gray-200 hover:from-blue-50 hover:to-purple-50
      "
        onClick={onCollapse}
      >
        <div
          className="
          p-2 rounded-lg
          transition-all duration-300 ease-out
          hover:bg-blue-500/10 text-gray-600 hover:text-blue-600
        "
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
