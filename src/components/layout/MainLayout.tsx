import React, { useMemo, useEffect, useState } from 'react';
import { ConfigProvider, Layout, theme } from 'antd';
import { SiderContent } from './sider/SiderContent';
import { HeaderContent } from './header/HeaderContent';
import { Outlet, useLocation } from 'react-router-dom';
import { useAppStore } from '../../store/appStore';
import { PageTransition } from '../common/PageTransition';
import { GlobalBreadcrumb } from '../common/GlobalBreadcrumb';
import { Footer } from './footer/Footer';

const { Header, Sider, Content, Footer: AntFooter } = Layout;

const MainLayout: React.FC = () => {
  const isDark = useAppStore((state) => state.isDark);
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
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
  }, [collapsed]);

  const siderClass = useMemo(
    () => (isDark ? 'bg-[#1a1a1a] relative' : 'bg-white relative'),
    [isDark]
  );

  const contentBgClass = useMemo(
    () => (isDark ? 'bg-[#f0f2f5]' : 'bg-[#f0f2f5]'),
    [isDark]
  );

  const antdTheme = useMemo(() => ({
    token: {
      colorPrimary: '#1677ff',
      borderRadius: 6,
      colorBgBase: isDark ? '#1a1a1a' : '#fafafa',
      colorBgContainer: '#ffffff',
      colorBgElevated: '#ffffff',
      colorText: isDark ? '#e5e7eb' : '#1f2937',
      colorTextSecondary: isDark ? '#9ca3af' : '#6b7280',
      colorBorder: isDark ? '#374151' : '#e5e7eb',
      colorBorderSecondary: isDark ? '#30363d' : '#f3f4f6',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      fontSize: 14,
      lineHeight: 1.5714,
    },
    algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    components: {
      Menu: {
        itemBg: 'transparent',
        itemHoverBg: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(22,119,255,0.08)',
        itemSelectedBg: 'linear-gradient(90deg, rgb(var(--color-primary)), rgb(var(--color-primary-dark)))',
        itemSelectedColor: '#ffffff',
        itemColor: isDark ? '#a0a0a0' : '#595959',
        darkItemBg: isDark ? '#1a1a1a' : '#ffffff',
        darkItemHoverBg: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(22,119,255,0.08)',
        darkItemSelectedBg: 'linear-gradient(90deg, rgb(var(--color-primary)), rgb(var(--color-primary-dark)))',
        darkItemSelectedColor: '#ffffff',
        darkItemColor: isDark ? '#a0a0a0' : '#595959',
      },
      Layout: {
        siderBg: isDark ? '#1a1a1a' : '#ffffff',
        headerBg: '#ffffff',
        bodyBg: '#f0f2f5',
        triggerBg: isDark ? '#2a2a2a' : '#ffffff',
        triggerColor: isDark ? '#a0a0a0' : '#595959',
      },
      Card: {
        borderRadiusLG: 8,
      },
      Button: {
        borderRadius: 6,
      },
      Input: {
        borderRadius: 6,
      },
      Select: {
        borderRadius: 6,
      },
      Table: {
        borderRadius: 8,
      },
    },
  }), [isDark]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedMenuKey(undefined);
    let containerEl: HTMLElement | null = null;
    let rafId = 0;

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

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        checkHeroProfilesVisibility();
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
    checkHeroProfilesVisibility();

    if (location.pathname === '/heroes/profile') {
      setTimeout(() => scrollToHeroProfiles(), 300);
    }

    const timer = window.setTimeout(() => {
      tryAttachContainer();
      checkHeroProfilesVisibility();
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
      <Layout className="min-h-screen">
        {!isMobile && (
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            width={220}
            collapsedWidth={64}
            className={`${siderClass} border-r! border-gray-200! dark:border-gray-800!`}
            style={{
              position: 'sticky',
              top: 0,
              height: '100vh',
              overflow: 'auto',
            }}
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

        <Layout className="flex-1 flex flex-col min-w-0">
          <Header
            className={`
              h-14! px-4! lg:px-6!
              flex items-center justify-between
              bg-white! dark:bg-[#141414]!
              border-b! border-gray-200! dark:border-gray-800!
              sticky top-0 z-50
              shadow-[0_1px_2px_0_rgba(0,0,0,0.03)]
            `}
          >
            <div className="flex items-center gap-4 flex-1 min-w-0">
              {isMobile && (
                <button
                  onClick={() => setCollapsed(!collapsed)}
                  className={`p-2 rounded-md transition-colors ${
                    isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              )}
              <GlobalBreadcrumb className="hidden md:block flex-1 min-w-0" />
            </div>
            <div className="shrink-0">
              <HeaderContent />
            </div>
          </Header>

          <Content className={`flex-1 p-4! lg:p-6! ${contentBgClass}`}>
            {isMobile && collapsed === false && (
              <div
                className="fixed inset-0 bg-black/40 z-40"
                onClick={() => setCollapsed(true)}
              />
            )}
            <div className="max-w-400 mx-auto">
              <PageTransition>
                <Outlet />
              </PageTransition>
            </div>
          </Content>

          <AntFooter className="p-0! h-12! border-t! border-gray-200! dark:border-gray-800! bg-white! dark:bg-[#141414]!">
            <Footer />
          </AntFooter>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default MainLayout;
