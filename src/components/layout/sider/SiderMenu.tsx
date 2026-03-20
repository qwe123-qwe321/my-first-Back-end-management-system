import React from 'react';
import { Menu } from 'antd';
import {
  HomeOutlined,
  GlobalOutlined,
  BookOutlined,
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
}

// 菜单数据可抽离到单独的常量文件（如constants/menu.ts），进一步解耦
const menuItems = [
  { key: '/dashboard', icon: <HomeOutlined />, label: '首页' },
  { key: '/world', icon: <GlobalOutlined />, label: '世界' },          
  { key: '/story', icon: <BookOutlined />, label: '主线剧情' },
  { key: '/heroes', icon: <DiscordOutlined />, label: '英雄' },        
  { key: '/skins', icon: <SkinOutlined />, label: '皮肤' },
  { key: '/explore', icon: <BarChartOutlined />, label: '专题探索' },
  { key: '/community', icon: <TeamOutlined />, label: '玩家社区' },
  { key: '/settings', icon: <SettingOutlined />, label: '个人主页' },
  { key: '/about', icon: <CopyrightOutlined />, label: '关于' },
];

export const SiderMenu: React.FC<SiderMenuProps> = ({ themeMode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex-1 overflow-y-auto">
      <Menu
        theme={themeMode}
        mode="inline"
        selectedKeys={[location.pathname]}
        onClick={({ key }) => navigate(key)}
        className="bg-transparent border-none px-2"
        items={menuItems.map((item) => ({
          ...item,
          className: 'rounded-xl mb-1.5 hover:bg-blue-500/10 transition-all duration-300',
        }))}
      />
    </div>
  );
};