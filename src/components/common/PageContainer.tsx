import type { ReactNode } from 'react';
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useAppStore } from '../../store/appStore';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageContainerProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
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

export const PageContainer: React.FC<PageContainerProps> = ({
  title,
  subtitle,
  breadcrumbs,
  actions,
  children,
  className = '',
}) => {
  const isDark = useAppStore((state) => state.isDark);
  const location = useLocation();

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (breadcrumbs) return breadcrumbs;

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
    <div
      className={`min-h-screen p-6 animate-fadeIn ${className}`}
      data-page-scroll-container="true"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Breadcrumb
            className={`mb-3 text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}
            items={computedBreadcrumbs.map((item, index) => ({
              key: index,
              title: item.path ? (
                <Link
                  to={item.path}
                  className={`hover:text-primary transition-colors ${
                    isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={
                    isDark ? 'text-gray-200' : 'text-gray-700'
                  }
                >
                  {item.label}
                </span>
              ),
            }))}
          />

          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1
                className={`text-2xl font-bold mb-1 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                <span className="gradient-text">{title}</span>
                {subtitle && (
                  <span
                    className={`ml-3 text-lg font-normal ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    {subtitle}
                  </span>
                )}
              </h1>
            </div>

            {actions && (
              <div className="flex items-center gap-3 ml-4">{actions}</div>
            )}
          </div>
        </div>

        <div className="relative">{children}</div>
      </div>
    </div>
  );
};

export default PageContainer;
