import React, { useState, useEffect } from 'react';
import { Tooltip } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
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

  // 页面路径到标签页标题的映射
  const pathToTitle: Record<string, string> = {
    '/dashboard': '首页',
    '/heroes/profile': '英雄档案',
    '/heroes/voice': '英雄语音',
    '/community': '玩家社区',
    '/settings': '个人主页',
    '/skins': '皮肤',
    '/explore': '专题探索',
    '/about': '关于',
    '/403': '403错误',
    '/404': '404错误',
    '/500': '500错误',
  };

  // 初始化标签页，确保首页标签存在
  useEffect(() => {
    setTabs([{
      key: '/dashboard',
      title: '首页',
      path: '/dashboard',
    }]);
    setActiveTab('/dashboard');
  }, []);

  // 当路径变化时，添加或更新标签页
  useEffect(() => {
    const currentPath = location.pathname;
    const currentTitle = pathToTitle[currentPath] || '未知页面';

    setTabs(prevTabs => {
      // 检查当前标签页是否已存在
      const existingTabIndex = prevTabs.findIndex(tab => tab.key === currentPath);

      // 如果标签页已存在，不做任何修改，只设置活跃标签
      if (existingTabIndex !== -1) {
        setActiveTab(currentPath);
        return prevTabs;
      }

      // 如果标签页不存在，添加新标签页
      const newTab: TabItem = {
        key: currentPath,
        title: currentTitle,
        path: currentPath,
      };

      // 如果当前路径不在pathToTitle中，说明是未配置的路径，不添加标签页
      if (!pathToTitle[currentPath]) {
        setActiveTab(currentPath);
        return prevTabs;
      }

      // 确保首页标签始终存在且在最前面
      const homeTab = { key: '/dashboard', title: '首页', path: '/dashboard' };
      const hasHomeTab = prevTabs.some(tab => tab.path === '/dashboard');

      let updatedTabs;
      if (hasHomeTab) {
        // 如果首页标签存在，将新标签页添加到所有标签页的最右边
        updatedTabs = [...prevTabs, newTab];
      } else {
        // 如果首页标签不存在，先添加首页标签，再添加新标签页
        updatedTabs = [homeTab, newTab];
      }

      // 设置当前活跃标签
      setActiveTab(currentPath);
      return updatedTabs;
    });
  }, [location.pathname]);

  // 处理标签页切换
  const handleTabChange = (key: string) => {
    const tab = tabs.find(tab => tab.key === key);
    if (tab) {
      navigate(tab.path);
      setActiveTab(key);
    }
  };

  // 处理标签页关闭
  const handleTabClose = (key: string) => {
    // 首页标签不能关闭
    if (key === '/dashboard') {
      return;
    }

    const updatedTabs = tabs.filter(tab => tab.key !== key);
    setTabs(updatedTabs);

    // 如果关闭的是当前活跃标签页，导航到首页或其他标签页
    if (key === activeTab) {
      // 优先导航到首页
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
    <div className="flex-1 min-w-0 overflow-x-auto">
      <div className="flex items-center gap-1 px-2">
        {tabs.map(tab => (
          <div
            key={tab.key}
            onClick={() => handleTabChange(tab.key)}
            className={`
              flex items-center gap-1 px-3 py-1 rounded-md cursor-pointer transition-all text-xs
              ${activeTab === tab.key
                ? 'bg-blue-500 text-white'
                : isDark
                  ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            <span className="text-center">{tab.title}</span>
            {/* 首页标签没有关闭按钮 */}
            {tab.path !== '/dashboard' && (
              <Tooltip title="关闭标签页">
                <CloseOutlined
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTabClose(tab.key);
                  }}
                  style={{ fontSize: '10px', cursor: 'pointer' }}
                />
              </Tooltip>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};