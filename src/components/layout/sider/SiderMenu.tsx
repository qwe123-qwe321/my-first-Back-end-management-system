// 侧边栏菜单组件：显示导航菜单和子菜单
import React from 'react';
import { Menu } from 'antd';
import {
  HomeOutlined,
  DiscordOutlined,
  SettingOutlined,
  BarChartOutlined,
  TeamOutlined,
  SkinOutlined,
  CopyrightOutlined,
} from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';

interface SiderMenuProps {
  themeMode: 'dark' | 'light';
  selectedKey?: string;
  openKeys?: string[];
  onOpenChange?: (keys: string[]) => void;
}

// 菜单数据可抽离到单独的常量文件（如constants/menu.ts），进一步解耦
const menuItems = [
  { key: '/dashboard', icon: <HomeOutlined />, label: '首页' },
  {
    key: '/heroes',
    icon: <DiscordOutlined />,
    label: '英雄',
    children: [
      { key: '/heroes/profile', label: '英雄档案' },
      { key: '/heroes/voice', label: '语音动画' },
    ],
  },
  { key: '/skins', icon: <SkinOutlined />, label: '皮肤' },
  { key: '/explore', icon: <BarChartOutlined />, label: '专题探索' },
  { key: '/community', icon: <TeamOutlined />, label: '玩家社区' },
  { key: '/settings', icon: <SettingOutlined />, label: '个人主页' },
  { key: '/about', icon: <CopyrightOutlined />, label: '关于' },
];

export const SiderMenu: React.FC<SiderMenuProps> = ({
  themeMode,
  selectedKey,
  openKeys,
  onOpenChange,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (key: string) => {
    navigate(key);
    if (key.includes('/heroes/')) {
      onOpenChange?.(['/heroes']);
    }
  };

  const isDark = themeMode === 'dark';

  return (
    <div
      className={`flex-1 overflow-y-auto ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}
    >
      <Menu
        theme={themeMode}
        mode="inline"
        selectedKeys={[selectedKey || location.pathname]}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onClick={({ key }) => handleClick(key)}
        className="bg-transparent border-none px-2"
        items={menuItems.map((item) => ({
          ...item,
          className: `
            rounded-xl mb-1.5 
            transition-all duration-300
            ${
              isDark
                ? 'hover:bg-transparent text-gray-300'
                : 'hover:bg-blue-500/10 text-gray-900'
            }
          `.trim(),
        }))}
      />
    </div>
  );
};
