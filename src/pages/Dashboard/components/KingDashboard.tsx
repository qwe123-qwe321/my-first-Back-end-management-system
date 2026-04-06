// 主Dashboard组件：包含图表区域和英雄档案区域
import React, { useState } from 'react';
import { Row, Col, Card } from 'antd';
import { ChartFilter } from './ChartFilter';
import { TrendChart } from './Charts/TrendChart';
import { SourceChart } from './Charts/SourceChart';
import { WorldviewChart } from './Charts/WorldviewChart';
import { HeroProfiles } from './HeroProfiles';
import { KING_COLORS } from '../constants/chartConfig';

export const KingDashboard: React.FC = () => {
  // 筛选状态管理
  const [time, setTime] = useState('week');
  const [hero, setHero] = useState('all');
  const [channel, setChannel] = useState('all');

  // 筛选回调（可扩展：根据hero/channel过滤数据）
  const handleTimeChange = (value: string) => setTime(value);
  const handleHeroChange = (value: string) => setHero(value);
  const handleChannelChange = (value: string) => setChannel(value);

  return (
    <div className="king-dashboard" style={{ padding: '20px 0' }}>
      {/* 筛选器 */}
      <ChartFilter
        onTimeChange={handleTimeChange}
        onHeroChange={handleHeroChange}
        onChannelChange={handleChannelChange}
      />

      {/* 图表区域 */}
      <Row gutter={[24, 24]}>
        {/* 顶部折线图：占满整行 */}
        <Col span={24}>
          <Card
            style={{
              backgroundColor: KING_COLORS.bg,
              border: 'none',
            }}
          >
            <TrendChart time={time} hero={hero} channel={channel} />
          </Card>
        </Col>

        {/* 左下柱状图 + 右下饼图 */}
        <Col span={12}>
          <Card
            style={{
              backgroundColor: KING_COLORS.bg,
              border: 'none',
            }}
          >
            <SourceChart time={time} hero={hero} channel={channel} />
          </Card>
        </Col>
        <Col span={12}>
          <Card
            style={{
              backgroundColor: KING_COLORS.bg,
              border: 'none',
            }}
          >
            <WorldviewChart time={time} hero={hero} channel={channel} />
          </Card>
        </Col>
      </Row>

      {/* 英雄档案区域 */}
      <HeroProfiles />
    </div>
  );
};
