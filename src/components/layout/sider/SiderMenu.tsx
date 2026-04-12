// 侧边栏菜单组件：显示导航菜单和子菜单
import React from 'react';
import { Menu } from 'antd';
import {
  HomeOutlined,
  DiscordOutlined,
  SettingOutlined,
  TeamOutlined,
  SkinOutlined,
  CopyrightOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  WarningOutlined,
  IssuesCloseOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppStore } from '../../../store/appStore';

interface SiderMenuProps {
  selectedKey?: string;
  openKeys?: string[];
  onOpenChange?: (keys: string[]) => void;
}

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
  { key: '/users', icon: <UserOutlined />, label: '用户管理' },
  {
    key: '/error-pages',
    icon: <ExclamationCircleOutlined />,
    label: '异常页面',
    children: [
      { key: '/error-pages/403', icon: <StopOutlined />, label: '403' },
      { key: '/error-pages/404', icon: <WarningOutlined />, label: '404' },
      { key: '/error-pages/500', icon: <IssuesCloseOutlined />, label: '500' },
    ],
  },
  { key: '/community', icon: <TeamOutlined />, label: '玩家社区' },
  { key: '/settings', icon: <SettingOutlined />, label: '个人主页' },
  { key: '/about', icon: <CopyrightOutlined />, label: '关于' },
];

export const SiderMenu: React.FC<SiderMenuProps> = ({
  selectedKey,
  openKeys,
  onOpenChange,
}) => {
  const isDark = useAppStore((state) => state.isDark);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (key: string) => {
    navigate(key);
    if (key.includes('/heroes/')) {
      onOpenChange?.(['/heroes']);
    }
  };

  return (
    <div
      className={`flex-1 overflow-y-auto ${
        isDark ? 'bg-[#1a1a1a]' : 'bg-white'
      }`}
    >
      <Menu
        theme={isDark ? 'dark' : 'light'}
        mode="inline"
        selectedKeys={[selectedKey || location.pathname]}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onClick={({ key }) => handleClick(key)}
        className="bg-transparent! border-none! px-2!"
        items={menuItems.map((item) => ({
          ...item,
          className: `
            !rounded-xl !mb-1.5
            transition-all duration-300 ease-out
            group
            ${
              isDark
                ? 'hover:!bg-gradient-to-r hover:!from-blue-600/20 hover:!to-purple-600/20 !text-gray-200'
                : 'hover:!bg-gradient-to-r hover:!from-blue-500/10 hover:!to-purple-500/10 !text-gray-700'
            }
          `.trim(),
        }))}
        style={{
          background: 'transparent',
        }}
      />
      <style>{`
        .ant-menu-item,
        .ant-menu-submenu-title {
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        
        .ant-menu-item::before,
        .ant-menu-submenu-title::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%) scaleY(0);
          width: 3px;
          height: 60%;
          background: linear-gradient(180deg, #3b82f6, #8b5cf6);
          border-radius: 0 4px 4px 0;
          opacity: 0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .ant-menu-item-selected::before,
        .ant-menu-item-selected::before {
          transform: translateY(-50%) scaleY(1);
          opacity: 1;
        }
        
        .ant-menu-item:hover::before,
        .ant-menu-submenu-title:hover::before {
          transform: translateY(-50%) scaleY(0.6);
          opacity: 0.5;
        }
        
        .ant-menu-item-selected {
          background: linear-gradient(90deg, 
            rgba(59, 130, 246, 0.15) 0%, 
            rgba(139, 92, 246, 0.1) 100%) !important;
        }
        
        .dark .ant-menu-item-selected {
          background: linear-gradient(90deg, 
            rgba(59, 130, 246, 0.25) 0%, 
            rgba(139, 92, 246, 0.2) 100%) !important;
        }
        
        .ant-menu-item .anticon,
        .ant-menu-submenu-title .anticon {
          transition: all 0.3s ease !important;
        }
        
        .ant-menu-item:hover .anticon,
        .ant-menu-submenu-title:hover .anticon {
          transform: scale(1.1);
          color: #3b82f6 !important;
        }
        
        .ant-menu-item-selected .anticon,
        .ant-menu-item-selected .anticon {
          color: #3b82f6 !important;
        }
        
        .ant-menu-submenu .ant-menu {
          background: transparent !important;
        }
        
        .ant-menu-submenu-title {
          margin: 0 !important;
        }
        
        .ant-menu-item {
          margin: 4px 0 !important;
        }
      `}</style>
    </div>
  );
};
