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
