// src/components/NavigationButtons.tsx
import React from 'react';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined, SyncOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

interface NavigationButtonsProps {
  isDark: boolean;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = React.memo(
  ({ isDark }) => {
    const navigate = useNavigate();

    return (
      <div className="flex items-center gap-1">
        <Button
          type="text"
          icon={
            <LeftOutlined
              style={{ fontSize: '16px', color: isDark ? '#fff' : '#111' }}
            />
          }
          onClick={() => navigate(-1)}
          className="hover:bg-gray-200/20 rounded-full p-2 transition-all"
        />
        <Button
          type="text"
          icon={
            <RightOutlined
              style={{ fontSize: '16px', color: isDark ? '#fff' : '#111' }}
            />
          }
          onClick={() => navigate(1)}
          className="hover:bg-gray-200/20 rounded-full p-2 transition-all"
        />
        <Button
          type="text"
          icon={
            <SyncOutlined
              style={{ fontSize: '16px', color: isDark ? '#fff' : '#111' }}
            />
          }
          onClick={() => window.location.reload()}
          className="hover:bg-gray-200/20 rounded-full p-2 transition-all"
        />
      </div>
    );
  }
);

// 添加组件优化注释
/**
 * NavigationButtons 组件使用 React.memo 进行优化
 * 目的：避免在父组件重新渲染时，无状态的 NavigationButtons 组件不必要的重新渲染
 * 效果：只有当 isDark prop 发生变化时，组件才会重新渲染
 */
