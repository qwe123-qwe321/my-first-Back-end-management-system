// 主布局组件：包含侧边栏、顶栏和内容区域，处理滚动监听
import React, { useMemo } from 'react';
import { ConfigProvider, Layout, theme } from 'antd';
import { SiderContent } from '../../components/layout/sider/SiderContent';
import { HeaderContent } from '../../components/layout/header/HeaderContent';
import { Outlet, useLocation } from 'react-router-dom';
import { useAppStore } from '../../store/appStore';

const { Header, Sider, Content } = Layout;

const MainLayout: React.FC = () => {
  const isDark = useAppStore((state) => state.isDark);
  const [collapsed, setCollapsed] = React.useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [selectedMenuKey, setSelectedMenuKey] = React.useState<
    string | undefined
  >(undefined);
  const [menuOpenKeys, setMenuOpenKeys] = React.useState<string[]>([]);

  const headerBackgroundClass = useMemo(
    () => (isDark ? 'bg-[#1a1a1a]' : 'bg-white'),
    [isDark]
  );
  const headerBlurClass = useMemo(
    () => (isScrolled ? 'backdrop-blur-md' : 'backdrop-blur-xl'),
    [isScrolled]
  );
  const headerBorderClass = useMemo(
    () => (isDark ? (isScrolled ? 'border-white/20' : 'border-white/10') : (isScrolled ? 'border-gray-200/60' : 'border-gray-200')),
    [isDark, isScrolled]
  );

  const siderClass = useMemo(
    () => (isDark ? 'bg-[#1a1a1a] shadow-xl relative' : 'bg-white shadow-xl relative'),
    [isDark]
  );

  const contentBgClass = useMemo(
    () => (isDark ? 'bg-[#0f0f0f]' : 'bg-[#f0f2f5]'),
    [isDark]
  );

  const antdTheme = useMemo(() => ({
    token: {
      colorPrimary: '#3b82f6',
      borderRadius: 8,
      colorBgBase: isDark ? '#1a1a1a' : '#f8fafc',
      colorBgContainer: isDark ? '#1a1a1a' : '#ffffff',
      colorBgElevated: isDark ? '#2a2a2a' : '#ffffff',
      colorText: isDark ? '#e5e7eb' : '#1f2937',
      colorTextSecondary: isDark ? '#9ca3af' : '#6b7280',
      colorBorder: isDark ? '#374151' : '#e5e7eb',
      colorBorderSecondary: isDark ? '#374151' : '#f3f4f6',
    },
    algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    components: {
      Menu: {
        itemBg: 'transparent',
        itemHoverBg: isDark ? 'rgba(255,255,255,0.08)' : '#3b82f610',
        itemSelectedBg: isDark ? '#2a2a2a' : '#3b82f630',
        itemSelectedColor: isDark ? '#ffffff' : '#1e293b',
        itemColor: isDark ? '#9ca3af' : '#1e293b',
        darkItemBg: isDark ? '#1a1a1a' : '#ffffff',
        darkItemHoverBg: isDark ? 'rgba(255,255,255,0.08)' : '#3b82f610',
        darkItemSelectedBg: isDark ? '#2a2a2a' : '#3b82f630',
        darkItemSelectedColor: isDark ? '#ffffff' : '#1e293b',
        darkItemColor: isDark ? '#9ca3af' : '#1e293b',
      },
      Layout: {
        siderBg: isDark ? '#1a1a1a' : '#ffffff',
        headerBg: isDark ? '#1a1a1a' : '#ffffff',
        bodyBg: isDark ? '#0f0f0f' : '#f0f2f5',
      },
    },
  }), [isDark]);

  React.useEffect(() => {
    setIsScrolled(false);
    setSelectedMenuKey(undefined);

    let containerEl: HTMLElement | null = null;
    let rafId = 0;

    const getScrollTop = () => {
      if (containerEl) return containerEl.scrollTop;
      return window.scrollY || document.documentElement.scrollTop || 0;
    };

    const scrollToHeroProfiles = () => {
      const heroProfilesEl = document.querySelector<HTMLElement>('.danganlist');
      if (heroProfilesEl) {
        const containerEl = document.querySelector<HTMLElement>(
          '[data-page-scroll-container="true"]'
        );
        if (containerEl) {
          containerEl.scrollTo({
            top: heroProfilesEl.offsetTop - 80,
            behavior: 'smooth',
          });
        } else {
          window.scrollTo({
            top: heroProfilesEl.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      }
    };

    const checkHeroProfilesVisibility = () => {
      const heroProfilesEl = document.querySelector<HTMLElement>('.danganlist');
      if (!heroProfilesEl) {
        setSelectedMenuKey(undefined);
        setMenuOpenKeys([]);
        return;
      }

      const rect = heroProfilesEl.getBoundingClientRect();
      // 调整触发条件，当英雄档案标题接近顶部时触发
      const isVisible = rect.top <= 150 && rect.bottom >= 100;

      if (isVisible) {
        setSelectedMenuKey('/heroes/profile');
        setMenuOpenKeys(['/heroes']);
      } else if (rect.top > 300) {
        // 当英雄档案向上滑动后，回选到首页
        setSelectedMenuKey('/dashboard');
        setMenuOpenKeys([]);
      } else {
        setSelectedMenuKey(undefined);
        setMenuOpenKeys([]);
      }
    };

    const update = () => {
      setIsScrolled(getScrollTop() > 16);
      checkHeroProfilesVisibility();
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        update();
      });
    };

    const tryAttachContainer = () => {
      const el = document.querySelector<HTMLElement>(
        '[data-page-scroll-container="true"]'
      );
      if (!el) return;
      if (containerEl === el) return;

      if (containerEl) {
        containerEl.removeEventListener('scroll', onScroll);
      }

      containerEl = el;
      containerEl.addEventListener('scroll', onScroll, { passive: true });
    };

    // 页面刚切换进来时先尝试一次
    tryAttachContainer();
    update();

    // 如果路径是英雄档案，滚动到英雄档案区域
    if (location.pathname === '/heroes/profile') {
      setTimeout(() => {
        scrollToHeroProfiles();
      }, 300);
    }

    // 再延迟尝试一次（避免渲染时机问题）
    const timer = window.setTimeout(() => {
      tryAttachContainer();
      update();
    }, 200);

    // 兜底监听 window：避免内部滚动容器未生效时无变化
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      if (containerEl) containerEl.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [location.pathname]);

  // 添加性能优化注释
  /**
   * 性能优化说明：
   * 1. 使用 useMemo 优化计算属性，避免每次渲染都重新计算
   * 2. 这些优化可以减少不必要的重新渲染，提升组件性能
   */

  return (
    <ConfigProvider theme={antdTheme}>
      <Layout className="h-screen overflow-hidden">
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={240}
          collapsedWidth={80}
          className={siderClass}
        >
          <SiderContent
            collapsed={collapsed}
            onCollapse={() => setCollapsed(!collapsed)}
            selectedKey={selectedMenuKey}
            openKeys={menuOpenKeys}
            onOpenChange={setMenuOpenKeys}
          />
        </Sider>

        <Layout className="flex-1 flex flex-col">
          <Header
            className={[
              headerBackgroundClass,
              headerBlurClass,
              'border-b px-6 h-16 flex items-center justify-between transition-all duration-300',
              headerBorderClass,
              isScrolled ? 'shadow-md' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <HeaderContent />
          </Header>

          <Content className={`p-0 overflow-hidden relative ${contentBgClass}`}>
            <div className="relative z-10 h-full overflow-x-auto">
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default MainLayout;
