import { useState } from 'react';
import { Popover } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
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
  const { colorTheme, setColorTheme } = useThemeStore();
  const [open, setOpen] = useState(false);

  const content = (
    <div className="w-80 p-1">
      <div className="text-sm font-medium text-gray-700 mb-3">主题色彩</div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {themeConfigs.map((theme) => (
          <button
            key={theme.key}
            onClick={() => setColorTheme(theme.key)}
            className={`
              relative p-3 rounded-xl transition-all duration-200 cursor-pointer
              ${colorTheme === theme.key
                ? 'ring-2 ring-offset-2 ring-blue-500 scale-105'
                : 'hover:scale-102'
              }
            `}
            style={{ backgroundColor: '#f5f5f5' }}
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
            <div className="text-xs text-center text-gray-600">
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
        background: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
      }}
    >
      <button
        className={`
          p-2.5 rounded-xl cursor-pointer transition-all duration-200
          flex items-center justify-center
          text-gray-600 hover:bg-gray-100
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
