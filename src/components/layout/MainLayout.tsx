import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import { useTheme } from '../../config/theme/useTheme';
import { getThemeConfig } from '../../config/theme/themeConfig';
import { SiderContent } from '../../components/layout/sider/SiderContent';
import { HeaderContent } from '../../components/layout/header/HeaderContent';
import { Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const MainLayout: React.FC = () => {
  const { themeMode, toggleTheme } = useTheme();
  const [collapsed, setCollapsed] = React.useState(false);

  const isDark = themeMode === 'dark';

  return (
    <ConfigProvider theme={getThemeConfig(themeMode)}>
      {/* 仅保留侧边栏和顶栏的主题样式，移除整体 Layout 的背景主题 */}
      <Layout className="h-screen overflow-hidden">
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={240}
          collapsedWidth={80}
          className={`${isDark ? 'bg-[#1f2937]' : 'bg-white'} shadow-xl relative`}
        >
          <SiderContent collapsed={collapsed} themeMode={themeMode} onCollapse={() => setCollapsed(!collapsed)} />
        </Sider>

        <Layout className="flex-1 flex flex-col">
          <Header className={`${isDark ? 'bg-[#1f2937]' : 'bg-white'} backdrop-blur-xl border-b ${isDark ? 'border-white/10' : 'border-gray-200'} px-6 h-16 flex items-center justify-between`}>
            
            <HeaderContent themeMode={themeMode} toggleTheme={toggleTheme} />
          </Header>

          {/* 移除 Content 区域的主题背景样式，让页面内容保持原有样式 */}
          <Content className="flex-1 p-6 overflow-hidden relative">
            {/* 移除主题相关的背景渐变 */}
            <div className="relative z-10 h-full">
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default MainLayout;