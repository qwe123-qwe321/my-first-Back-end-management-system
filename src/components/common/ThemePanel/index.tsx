import React, { useState } from 'react';
import { Popover, Switch } from 'antd';
import { SunOutlined, MoonOutlined, CheckOutlined } from '@ant-design/icons';
import { useThemeStore } from '../../../hooks/useTheme';
import type { ColorTheme } from '../../../hooks/useTheme';

const themeConfigs: {
  key: ColorTheme;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}[] = [
  {
    key: 'default',
    name: '默认蓝',
    colors: {
      primary: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
      secondary: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
      accent: 'linear-gradient(135deg, #f59e0b, #d97706)',
    },
  },
  {
    key: 'purple',
    name: '科技紫',
    colors: {
      primary: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
      secondary: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
      accent: 'linear-gradient(135deg, #ec4899, #db2777)',
    },
  },
  {
    key: 'green',
    name: '清新绿',
    colors: {
      primary: 'linear-gradient(135deg, #10b981, #059669)',
      secondary: 'linear-gradient(135deg, #34d399, #10b981)',
      accent: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    },
  },
];

export const ThemePanel: React.FC = () => {
  const { themeMode, colorTheme, setThemeMode, setColorTheme, toggleTheme } = useThemeStore();
  const [open, setOpen] = useState(false);

  const isDark = themeMode === 'dark';

  const content = (
    <div className="w-80 p-1">
      <div className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-3">主题色彩</div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {themeConfigs.map((theme) => (
          <button
            key={theme.key}
            onClick={() => setColorTheme(theme.key)}
            className={`
              relative p-3 rounded-xl transition-all duration-200 cursor-pointer
              ${colorTheme === theme.key
                ? 'ring-2 ring-offset-2 ring-blue-500 dark:ring-blue-400 scale-105'
                : 'hover:scale-102'
              }
            `}
            style={{ backgroundColor: isDark ? '#262626' : '#fafafa' }}
          >
            <div
              className="h-10 rounded-lg mb-2"
              style={{ background: theme.colors.primary }}
            />
            <div className="flex gap-1 mb-2">
              <div
                className="h-3 flex-1 rounded"
                style={{ background: theme.colors.secondary }}
              />
              <div
                className="h-3 flex-1 rounded"
                style={{ background: theme.colors.accent }}
              />
            </div>
            <div className="text-xs text-center text-gray-600 dark:text-gray-300">
              {theme.name}
            </div>
            {colorTheme === theme.key && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <CheckOutlined className="text-white text-xs" />
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isDark ? (
              <MoonOutlined className="text-gray-600 dark:text-gray-300" />
            ) : (
              <SunOutlined className="text-gray-600 dark:text-gray-300" />
            )}
            <span className="text-sm text-gray-700 dark:text-gray-200">
              {isDark ? '深色模式' : '浅色模式'}
            </span>
          </div>
          <Switch
            checked={isDark}
            onChange={() => setThemeMode(isDark ? 'light' : 'dark')}
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
            className="bg-gray-300 dark:bg-blue-600"
          />
        </div>
      </div>
    </div>
  );

  return (
    <Popover
      content={content}
      trigger="click"
      open={open}
      onOpenChange={setOpen}
      placement="bottomRight"
      overlayClassName="theme-panel-popover"
      overlayStyle={{
        background: isDark ? '#262626' : '#ffffff',
        borderRadius: '12px',
        boxShadow: isDark
          ? '0 8px 30px rgba(0,0,0,0.4)'
          : '0 8px 30px rgba(0,0,0,0.12)',
      }}
    >
      <button
        className={`
          p-2.5 rounded-xl cursor-pointer transition-all duration-200
          flex items-center justify-center
          ${isDark
            ? 'text-gray-200 hover:bg-white/10'
            : 'text-gray-600 hover:bg-gray-100'
          }
          hover:scale-105 active:scale-95
        `}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      </button>
    </Popover>
  );
};

export default ThemePanel;
