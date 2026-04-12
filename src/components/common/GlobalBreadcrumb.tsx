import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { useAppStore } from '../../store/appStore';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

const routeNameMap: Record<string, string> = {
  dashboard: '首页',
  heroes: '英雄',
  skins: '皮肤',
  users: '用户管理',
  community: '玩家社区',
  settings: '个人主页',
  about: '关于',
  profile: '英雄档案',
  voice: '语音动画',
  'error-pages': '异常页面',
  '403': '403 无权限',
  '404': '404 未找到',
  '500': '500 服务器错误',
};

interface GlobalBreadcrumbProps {
  className?: string;
}

export const GlobalBreadcrumb: React.FC<GlobalBreadcrumbProps> = ({
  className = '',
}) => {
  const isDark = useAppStore((state) => state.isDark);
  const location = useLocation();

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSnippets = location.pathname.split('/').filter((i) => i);
    const items: BreadcrumbItem[] = [{ label: '首页', path: '/dashboard' }];

    let currentPath = '';
    pathSnippets.forEach((snippet, index) => {
      currentPath += `/${snippet}`;
      const label = routeNameMap[snippet] || snippet;
      items.push({
        label,
        path: index < pathSnippets.length - 1 ? currentPath : undefined,
      });
    });

    return items;
  };

  const computedBreadcrumbs = generateBreadcrumbs();

  return (
    <Breadcrumb
      className={`${className} ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
      items={computedBreadcrumbs.map((item, index) => ({
        key: index,
        title: item.path ? (
          <Link
            to={item.path}
            className={`hover:text-blue-500 transition-colors duration-200 ${
              isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
            }`}
          >
            {item.label}
          </Link>
        ) : (
          <span className={isDark ? 'text-gray-200' : 'text-gray-700'}>
            {item.label}
          </span>
        ),
      }))}
    />
  );
};

export default GlobalBreadcrumb;
