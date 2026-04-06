import React from 'react';
import { Button } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';

interface ThemeToggleProps {
  mode: 'dark' | 'light';
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = React.memo(
  ({ mode, onToggle }) => {
    const isDark = mode === 'dark';
    const textColor = isDark ? '#e5e7eb' : '#1f2937';
    const hoverBg = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.04)';

    return (
      <Button
        type="text"
        icon={
          isDark ? (
            <SunOutlined className="text-2xl" />
          ) : (
            <MoonOutlined className="text-2xl" />
          )
        }
        onClick={onToggle}
        style={{
          color: textColor,
          backgroundColor: 'transparent',
          borderRadius: '50%',
          padding: '8px',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBg)}
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = 'transparent')
        }
      />
    );
  }
);

// 添加组件优化注释
/**
 * ThemeToggle 组件使用 React.memo 进行优化
 * 目的：避免在父组件重新渲染时，无状态的 ThemeToggle 组件不必要的重新渲染
 * 效果：只有当 mode 或 onToggle props 发生变化时，组件才会重新渲染
 */
