import React, { useState, useEffect } from 'react';
import { Tooltip } from 'antd';
import { CloseOutlined, HomeOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppStore } from '../../../store/appStore';

interface TabItem {
  key: string;
  title: string;
  path: string;
}

export const TabManager: React.FC = () => {
  const isDark = useAppStore((state) => state.isDark);
  const [tabs, setTabs] = useState<TabItem[]>([]);
  const [activeTab, setActiveTab] = useState<string>('');
  const location = useLocation();
  const navigate = useNavigate();

  const pathToTitle: Record<string, string> = {
    '/dashboard': '首页',
    '/heroes/profile': '英雄档案',
    '/heroes/voice': '英雄语音',
    '/community': '玩家社区',
    '/settings': '个人主页',
    '/skins': '皮肤',
    '/explore': '专题探索',
    '/about': '关于',
    '/users': '用户管理',
    '/error-pages/403': '403错误',
    '/error-pages/404': '404错误',
    '/error-pages/500': '500错误',
  };

  useEffect(() => {
    setTabs([{
      key: '/dashboard',
      title: '首页',
      path: '/dashboard',
    }]);
    setActiveTab('/dashboard');
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    const currentTitle = pathToTitle[currentPath] || '未知页面';

    setTabs(prevTabs => {
      const existingTabIndex = prevTabs.findIndex(tab => tab.key === currentPath);

      if (existingTabIndex !== -1) {
        setActiveTab(currentPath);
        return prevTabs;
      }

      const newTab: TabItem = {
        key: currentPath,
        title: currentTitle,
        path: currentPath,
      };

      if (!pathToTitle[currentPath]) {
        setActiveTab(currentPath);
        return prevTabs;
      }

      const homeTab = { key: '/dashboard', title: '首页', path: '/dashboard' };
      const hasHomeTab = prevTabs.some(tab => tab.path === '/dashboard');

      let updatedTabs;
      if (hasHomeTab) {
        updatedTabs = [...prevTabs, newTab];
      } else {
        updatedTabs = [homeTab, newTab];
      }

      setActiveTab(currentPath);
      return updatedTabs;
    });
  }, [location.pathname, pathToTitle]);

  const handleTabChange = (key: string) => {
    const tab = tabs.find(tab => tab.key === key);
    if (tab) {
      navigate(tab.path);
      setActiveTab(key);
    }
  };

  const handleTabClose = (key: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (key === '/dashboard') return;

    const updatedTabs = tabs.filter(tab => tab.key !== key);
    setTabs(updatedTabs);

    if (key === activeTab) {
      if (updatedTabs.some(tab => tab.path === '/dashboard')) {
        navigate('/dashboard');
        setActiveTab('/dashboard');
      } else if (updatedTabs.length > 0) {
        const firstTab = updatedTabs[0];
        navigate(firstTab.path);
        setActiveTab(firstTab.key);
      }
    }
  };

  return (
    <div className="flex-1 min-w-0 overflow-x-auto scrollbar-thin">
      <div className="flex items-center gap-1 px-1">
        {tabs.map(tab => (
          <div
            key={tab.key}
            onClick={() => handleTabChange(tab.key)}
            className={`
              group flex items-center gap-1.5 px-3 py-1.5 rounded-lg cursor-pointer
              transition-all duration-200 text-sm font-medium whitespace-nowrap
              ${activeTab === tab.key
                ? 'bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-primary-dark))] text-white shadow-lg'
                : isDark
                  ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }
            `}
          >
            {tab.path === '/dashboard' && (
              <HomeOutlined className="text-xs" />
            )}
            <span>{tab.title}</span>
            {tab.path !== '/dashboard' && (
              <Tooltip title="关闭">
                <button
                  onClick={(e) => handleTabClose(tab.key, e)}
                  className={`
                    ml-0.5 p-0.5 rounded transition-all duration-150
                    ${activeTab === tab.key
                      ? 'hover:bg-white/20 text-white/70 hover:text-white'
                      : 'opacity-0 group-hover:opacity-100 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }
                  `}
                >
                  <CloseOutlined className="text-[10px]" />
                </button>
              </Tooltip>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabManager;
