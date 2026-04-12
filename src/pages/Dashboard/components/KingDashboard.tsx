import React, { useState } from 'react';
import { Row, Col, Card } from 'antd';
import { ChartFilter } from './ChartFilter';
import { DynamicChart } from './Charts/DynamicChart';
import { HeroProfiles } from './HeroProfiles';
import { KING_COLORS } from '../constants/chartConfig';
import { useAppStore } from '../../../store/appStore';

export const KingDashboard: React.FC = () => {
  const isDark = useAppStore((state) => state.isDark);
  const [time, setTime] = useState('week');
  const [hero, setHero] = useState('all');
  const [channel, setChannel] = useState('all');

  const handleTimeChange = (value: string) => setTime(value);
  const handleHeroChange = (value: string) => setHero(value);
  const handleChannelChange = (value: string) => setChannel(value);

  const cardBg = isDark ? KING_COLORS.bg : '#ffffff';

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
            style={{
              backgroundColor: cardBg,
              border: 'none',
            }}
            styles={{
              body: { padding: '20px 24px' }
            }}
          >
            <DynamicChart type="trend" time={time} hero={hero} channel={channel} />
          </Card>
        </Col>

        <Col span={12}>
          <Card
            style={{
              backgroundColor: cardBg,
              border: 'none',
            }}
            styles={{
              body: { padding: '20px 24px' }
            }}
          >
            <DynamicChart type="source" time={time} hero={hero} channel={channel} />
          </Card>
        </Col>
        <Col span={12}>
          <Card
            style={{
              backgroundColor: cardBg,
              border: 'none',
            }}
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
