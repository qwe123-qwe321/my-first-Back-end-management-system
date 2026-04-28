// 访问来源图表组件：显示玩家访问来源的柱状图
import React, { useMemo } from 'react';
import { type EChartsOption } from 'echarts';
import ReactECharts from 'echarts-for-react';
import {
  applySelectionToSeries,
  CHART_ACCENTS,
  CHART_CATEGORIES,
  KING_COLORS,
  MOCK_CHART_DATA,
} from '../../constants/chartConfig';

interface SourceChartProps {
  time: string;
  hero: string;
  channel: string;
}

export const SourceChart: React.FC<SourceChartProps> = ({
  time,
  hero,
  channel,
}) => {
  const chartData = useMemo(
    () => MOCK_CHART_DATA.source[time as keyof typeof MOCK_CHART_DATA.source],
    [time]
  );

  const selectedSource = useMemo(
    () => applySelectionToSeries(chartData, hero, channel, 0, 9999999),
    [chartData, hero, channel]
  );

  const option: EChartsOption = {
    backgroundColor: KING_COLORS.bg,
    textStyle: { color: KING_COLORS.text },
    title: {
      text: '玩家访问来源',
      left: 'center',
      textStyle: { color: KING_COLORS.text, fontSize: 16 },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      borderColor: KING_COLORS.grid,
    },
    xAxis: {
      type: 'category',
      data: CHART_CATEGORIES.source,
      axisLine: { lineStyle: { color: KING_COLORS.grid } },
      axisLabel: { color: KING_COLORS.text, rotate: 15 },
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: KING_COLORS.grid } },
      axisLabel: { color: KING_COLORS.text },
      splitLine: { lineStyle: { color: KING_COLORS.grid } },
    },
    series: [
      {
        name: '访问量',
        type: 'bar',
        data: selectedSource,
        itemStyle: {
          color: (params: { dataIndex: number }) => {
            const colors = [
              CHART_ACCENTS.primary,
              CHART_ACCENTS.secondary,
              CHART_ACCENTS.tertiary,
              CHART_ACCENTS.quaternary,
              CHART_ACCENTS.danger,
            ];
            return colors[params.dataIndex % colors.length];
          },
          borderRadius: [6, 6, 0, 0],
        },
        barWidth: '50%',
        barCategoryGap: '30%',
      },
    ],
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(31, 41, 55, 0.95)',
      textStyle: { color: '#e5e7eb' },
      borderColor: '#3b82f6',
      borderWidth: 1,
      borderRadius: 8,
      padding: [10, 14],
    },
  };

  return (
    <div style={{ height: '350px', width: '100%' }}>
      <ReactECharts option={option} style={{ height: '100%' }} />
    </div>
  );
};

export default SourceChart;
