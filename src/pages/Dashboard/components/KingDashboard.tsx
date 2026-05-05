// 王者仪表盘组件：整合图表筛选器、四个数据图表（世界观/来源/趋势/动态）和英雄档案，构成仪表盘核心内容区
import React, { useState } from 'react';
import { Row, Col, Card } from 'antd';
import { ChartFilter } from './ChartFilter';
import { DynamicChart } from './Charts/DynamicChart';
import { HeroProfiles } from './HeroProfiles';

const cardStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, rgba(20,20,30,0.92), rgba(15,15,25,0.88))',
  backdropFilter: 'blur(16px)',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: '12px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
};

export const KingDashboard: React.FC = () => {
  const [time, setTime] = useState('week');
  const [hero, setHero] = useState('all');
  const [channel, setChannel] = useState('all');

  const handleTimeChange = (value: string) => setTime(value);
  const handleHeroChange = (value: string) => setHero(value);
  const handleChannelChange = (value: string) => setChannel(value);

  return (
    <div className="king-dashboard" style={{ padding: '20px 0' }}>
      <ChartFilter
        onTimeChange={handleTimeChange}
        onHeroChange={handleHeroChange}
        onChannelChange={handleChannelChange}
      />

      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Card
            style={cardStyle}
            styles={{
              body: { padding: '20px 24px' }
            }}
          >
            <DynamicChart type="trend" time={time} hero={hero} channel={channel} />
          </Card>
        </Col>

        <Col span={12}>
          <Card
            style={cardStyle}
            styles={{
              body: { padding: '20px 24px' }
            }}
          >
            <DynamicChart type="source" time={time} hero={hero} channel={channel} />
          </Card>
        </Col>
        <Col span={12}>
          <Card
            style={cardStyle}
            styles={{
              body: { padding: '20px 24px' }
            }}
          >
            <DynamicChart type="worldview" time={time} hero={hero} channel={channel} />
          </Card>
        </Col>
      </Row>

      <HeroProfiles />
    </div>
  );
};
