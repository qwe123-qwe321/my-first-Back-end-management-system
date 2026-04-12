import React from 'react';
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';

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
  '403': '403',
  '404': '404',
  '500': '500',
};

interface GlobalBreadcrumbProps {
  className?: string;
}

export const GlobalBreadcrumb: React.FC<GlobalBreadcrumbProps> = ({
  className = '',
}) => {
  const location = useLocation();

  const generateBreadcrumbs = () => {
    const pathSnippets = location.pathname.split('/').filter((i) => i);
    const items: { label: string; path?: string }[] = [{ label: '首页' }];

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
      className={className}
      items={computedBreadcrumbs.map((item, index) => ({
        key: index,
        title: item.path ? (
          <Link to={item.path} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
            {item.label}
          </Link>
        ) : (
          <span className="text-gray-600 dark:text-gray-200">{item.label}</span>
        ),
      }))}
    />
  );
};

export default GlobalBreadcrumb;
