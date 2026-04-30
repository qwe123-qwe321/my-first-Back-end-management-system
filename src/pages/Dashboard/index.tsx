// 仪表盘主页：组合DashboardContainer和KingDashboard，展示王者荣耀主题的数据看板，包含图表、英雄档案和轮播图
import React from 'react';
import { DashboardContainer } from './components/DashboardContainer';
import { KingDashboard } from './components/KingDashboard';

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <KingDashboard />
    </DashboardContainer>
  );
};

export default Dashboard;
