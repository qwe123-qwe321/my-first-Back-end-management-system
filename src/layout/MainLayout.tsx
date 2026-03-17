import React, { useState } from 'react';
import { Layout, Menu, Button, Avatar, Badge, Space, ConfigProvider } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  UserOutlined,
  TrophyOutlined,
  RocketOutlined,
  SettingOutlined,
  LogoutOutlined,
  BellOutlined,
  MailFilled,
  CommentOutlined,
  IdcardOutlined,
  TeamOutlined,
  BarChartOutlined,
  SkinOutlined,
  PartitionOutlined,
} from '@ant-design/icons';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { key: '/dashboard', icon: <DashboardOutlined />, label: '时空枢纽' },
    {
      key: 'hero-group',
      icon: <UserOutlined />,
      label: '英雄殿堂',
      children: [
        { key: '/heroes', label: '英雄列表' },
        { key: '/heroes/skins', icon: <SkinOutlined />, label: '皮肤幻境' },
      ],
    },
    { key: '/rank', icon: <TrophyOutlined />, label: '巅峰竞技' },
    {
      key: 'strat-group',
      icon: <RocketOutlined />,
      label: '智谋熔炉',
      children: [
        { key: '/strategy', label: '出装配置' },
        { key: '/strategy/lineup', icon: <PartitionOutlined />, label: '阵容模拟' },
      ],
    },
    { key: '/my-archive', icon: <IdcardOutlined />, label: '荣耀档案' },
    { key: '/insights', icon: <BarChartOutlined />, label: '数据洞察' },
    { key: '/community', icon: <TeamOutlined />, label: '玩家社区' },
    { key: '/settings', icon: <SettingOutlined />, label: '个人主页' },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#3b82f6',
          colorBgBase: '#111827',
          colorBgContainer: '#1f2937',
          colorText: '#f3f4f6',
          colorTextSecondary: '#9ca3af',
          colorBorder: '#374151',
          borderRadius: 8,
        },
        components: {
          Menu: {
            itemBg: 'transparent',
            itemHoverBg: '#3b82f610',
            itemSelectedBg: '#3b82f620',
            itemSelectedColor: '#ffffff',
          },
          Layout: {
            siderBg: '#1f2937',
            headerBg: '#1f2937',
          },
        },
      }}
    >
      <Layout className="h-screen overflow-hidden bg-[#111827] text-white">
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={240}
          collapsedWidth={80}
          className="bg-[#1f2937] text-white shadow-xl flex flex-col justify-between"
        >
          {/* 顶部 Logo 区域 */}
          <div className="h-16 flex items-center justify-center shrink-0">
            <div className={`flex items-center gap-3 transition-all duration-300 ${collapsed ? 'scale-150' : 'scale-100'}`}>
              <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl" />
              {!collapsed && (
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-500 font-black text-2xl tracking-tighter">
                  KOG HUB
                </span>
              )}
            </div>
          </div>

          {/* 菜单区域 */}
          <div className="flex-1 overflow-y-auto">
            <Menu
              theme="dark"
              mode="inline"
              selectedKeys={[location.pathname]}
              onClick={({ key }) => navigate(key)}
              className="bg-transparent border-none px-2 py-2"
              items={menuItems.map((item) => ({
                ...item,
                className: 'rounded-xl mb-1.5 hover:bg-blue-500/10 text-white transition-all duration-300',
              }))}
            />
          </div>

          {/* 底部折叠按钮 */}
          <div
            className={`
              h-10 w-full flex items-center justify-center 
              bg-[#1a2230] border-t border-gray-700/50
              cursor-pointer hover:bg-blue-600/20 transition-colors duration-200
              ${collapsed ? 'text-blue-300' : 'text-white'}
            `}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? (
              <MenuUnfoldOutlined className="text-2xl" />
            ) : (
              <MenuFoldOutlined className="text-2xl" />
            )}
          </div>
        </Sider>

        <Layout className="flex-1 flex flex-col bg-[#111827]">
          <Header className="bg-[#1f2937] backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-6 h-16">
            {/* 左侧占位，保持对齐 */}
            <div className="w-11" />

            <div className="flex items-center gap-6">
              <Space size={16}>
                <Badge count={5} size="small" offset={[-3, 4]}>
                  <BellOutlined className="text-white text-2xl cursor-pointer hover:text-blue-400 transition-colors" />
                </Badge>
                <Badge count={2} size="small" offset={[-3, 4]}>
                  <CommentOutlined className="text-white text-2xl cursor-pointer hover:text-blue-400 transition-colors" />
                </Badge>
                <Badge count={1} size="small" offset={[-3, 4]}>
                  <MailFilled className="text-white text-2xl cursor-pointer hover:text-blue-400 transition-colors" />
                </Badge>

                <div
                  className="flex items-center gap-3 cursor-pointer group min-w-0"
                  onClick={() => navigate('/settings')}
                >
                  <div className="text-right hidden sm:block truncate max-w-40">
                    <div className="text-white text-base font-semibold">荣耀指挥官</div>
                    <div className="text-gray-400 text-xs">等级: 最强王者</div>
                  </div>
                  <Avatar
                    size="large"
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                    className="border-2 border-gray-400 group-hover:border-blue-400 transition-colors"
                  />
                </div>

                <Button
                  type="text"
                  icon={<LogoutOutlined />}
                  className="text-white hover:text-red-400 text-2xl"
                  onClick={() => navigate('/login')}
                />
              </Space>
            </div>
          </Header>

          <Content className="flex-1 p-6 overflow-hidden relative bg-[#111827]">
            <div className="absolute top-[-20%] left-[-15%] w-[45%] h-[45%] bg-blue-500/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[35%] bg-blue-500/5 blur-[120px] pointer-events-none" />

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