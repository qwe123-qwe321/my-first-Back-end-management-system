import React, { useMemo, useEffect, useState } from 'react';
import { ConfigProvider, Layout, theme } from 'antd';
import { SiderContent } from './sider/SiderContent';
import { HeaderContent } from './header/HeaderContent';
import { Outlet, useLocation } from 'react-router-dom';
import { useAppStore } from '../../store/appStore';
import { PageTransition } from '../common/PageTransition';
import { GlobalBreadcrumb } from '../common/GlobalBreadcrumb';

const { Header, Sider, Content } = Layout;

const MainLayout: React.FC = () => {
  const isDark = useAppStore((state) => state.isDark);
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedMenuKey, setSelectedMenuKey] = useState<string | undefined>(undefined);
  const [menuOpenKeys, setMenuOpenKeys] = useState<string[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile && !collapsed) {
        setCollapsed(true);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  useEffect(() => {
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
        const containerEl = document.querySelector<HTMLElement>('[data-page-scroll-container="true"]');
        if (containerEl) {
          containerEl.scrollTo({ top: heroProfilesEl.offsetTop - 80, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: heroProfilesEl.offsetTop - 80, behavior: 'smooth' });
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
      const isVisible = rect.top <= 150 && rect.bottom >= 100;

      if (isVisible) {
        setSelectedMenuKey('/heroes/profile');
        setMenuOpenKeys(['/heroes']);
      } else if (rect.top > 300) {
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
      const el = document.querySelector<HTMLElement>('[data-page-scroll-container="true"]');
      if (!el) return;
      if (containerEl === el) return;
      if (containerEl) containerEl.removeEventListener('scroll', onScroll);
      containerEl = el;
      containerEl.addEventListener('scroll', onScroll, { passive: true });
    };

    tryAttachContainer();
    update();

    if (location.pathname === '/heroes/profile') {
      setTimeout(() => scrollToHeroProfiles(), 300);
    }

    const timer = window.setTimeout(() => {
      tryAttachContainer();
      update();
    }, 200);

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      if (containerEl) containerEl.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [location.pathname]);

  return (
    <ConfigProvider theme={antdTheme}>
      <Layout className="h-screen overflow-hidden">
        {!isMobile && (
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
        )}

        <Layout className="flex-1 flex flex-col">
          <Header
            className={[
              headerBackgroundClass,
              headerBlurClass,
              'border-b px-4 md:px-6 h-16 flex items-center justify-between transition-all duration-300 z-50',
              headerBorderClass,
              isScrolled ? 'shadow-md' : '',
              isDark ? 'bg-[#1a1a1a]/80' : 'bg-white/80',
            ].filter(Boolean).join(' ')}
          >
            <div className="flex items-center gap-4">
              {isMobile && (
                <button
                  onClick={() => setCollapsed(!collapsed)}
                  className={`p-2 rounded-lg transition-colors ${
                    isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              )}
              <GlobalBreadcrumb className="hidden sm:block" />
            </div>
            <HeaderContent />
          </Header>

          <Content className={`p-0 overflow-hidden relative ${contentBgClass}`}>
            {isMobile && collapsed === false && (
              <div
                className="fixed inset-0 bg-black/50 z-40 transition-opacity"
                onClick={() => setCollapsed(true)}
              />
            )}
            <div className="relative z-10 h-full overflow-x-auto">
              <PageTransition mode="fade">
                <Outlet />
              </PageTransition>
            </div>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default MainLayout;
