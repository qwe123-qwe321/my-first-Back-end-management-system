import { Badge, Popover } from 'antd';
import React from 'react';
import { useAppStore } from '../../../store/appStore';

interface MessageIconProps {
  icon: React.ReactNode;
  count: number;
  content: React.ReactNode;
}

export const MessageIcon: React.FC<MessageIconProps> = React.memo(
  ({ icon, count, content }) => {
    const isDark = useAppStore((state) => state.isDark);

    return (
      <Popover
        content={content}
        trigger="click"
        placement="bottomRight"
        overlayStyle={{
          background: isDark ? '#2a2a2a' : '#fff',
          border: isDark ? '1px solid #374151' : 'none',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        }}
      >
        <Badge count={count} size="small" offset={[-3, 4]}>
          <span
            className={`
            text-2xl rounded-full p-2 cursor-pointer transition-all
            ${isDark ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-200/20'}
          `}
          >
            {icon}
          </span>
        </Badge>
      </Popover>
    );
  }
);

// 添加组件优化注释
/**
 * MessageIcon 组件使用 React.memo 进行优化
 * 目的：避免在父组件重新渲染时，无状态的 MessageIcon 组件不必要的重新渲染
 * 效果：只有当 icon、count 或 content props 发生变化时，组件才会重新渲染
 */
