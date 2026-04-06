import React from 'react';
import { Select, Row, Col } from 'antd';
import { CHART_ACCENTS, CHART_FILTERS } from '../../constants/chartConfig';

import './chartFilter.css';

interface ChartFilterProps {
  onTimeChange: (value: string) => void;
  onHeroChange: (value: string) => void;
  onChannelChange: (value: string) => void;
  defaultTime?: string;
  defaultHero?: string;
  defaultChannel?: string;
}

export const ChartFilter: React.FC<ChartFilterProps> = ({
  onTimeChange,
  onHeroChange,
  onChannelChange,
  defaultTime = 'week',
  defaultHero = 'all',
  defaultChannel = 'all',
}) => {
  // 由于 Dashboard 本身使用深色底（KING_COLORS.bg 等固定深色），筛选条保持深色 UI，更贴合轮播/背景
  const filterBg =
    'linear-gradient(180deg, rgba(20,20,20,0.85), rgba(20,20,20,0.55))';
  const selectText = '#f5f5f5';
  const selectBg = 'rgba(11, 18, 32, 0.78)';

  return (
    <Row
      gutter={16}
      className="king-dashboard-filter mb-6 p-4 backdrop-blur-md"
      style={{
        background: filterBg,
        borderRadius: '8px',
      }}
    >
      <Col span={8}>
        <Select
          defaultValue={defaultTime}
          size="large"
          style={{
            width: '100%',
            color: selectText,
            backgroundColor: selectBg,
          }}
          dropdownStyle={{
            backgroundColor: '#0b1220',
            borderColor: CHART_ACCENTS.primary + '88',
            color: selectText,
            boxShadow: `0 0 22px ${CHART_ACCENTS.primary}22`,
          }}
          className="king-dashboard-select"
          dropdownClassName="king-dashboard-select-dropdown"
          onChange={onTimeChange}
          options={CHART_FILTERS.time.map((item) => ({
            label: item.label,
            value: item.value,
          }))}
        />
      </Col>
      <Col span={8}>
        <Select
          defaultValue={defaultHero}
          size="large"
          style={{
            width: '100%',
            color: selectText,
            backgroundColor: selectBg,
          }}
          dropdownStyle={{
            backgroundColor: '#0b1220',
            borderColor: CHART_ACCENTS.primary + '88',
            color: selectText,
            boxShadow: `0 0 22px ${CHART_ACCENTS.primary}22`,
          }}
          className="king-dashboard-select"
          dropdownClassName="king-dashboard-select-dropdown"
          onChange={onHeroChange}
          options={CHART_FILTERS.hero.map((item) => ({
            label: item.label,
            value: item.value,
          }))}
        />
      </Col>
      <Col span={8}>
        <Select
          defaultValue={defaultChannel}
          size="large"
          style={{
            width: '100%',
            color: selectText,
            backgroundColor: selectBg,
          }}
          dropdownStyle={{
            backgroundColor: '#0b1220',
            borderColor: CHART_ACCENTS.primary + '88',
            color: selectText,
            boxShadow: `0 0 22px ${CHART_ACCENTS.primary}22`,
          }}
          className="king-dashboard-select"
          dropdownClassName="king-dashboard-select-dropdown"
          onChange={onChannelChange}
          options={CHART_FILTERS.channel.map((item) => ({
            label: item.label,
            value: item.value,
          }))}
        />
      </Col>
    </Row>
  );
};
