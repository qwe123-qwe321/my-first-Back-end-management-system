// 访问来源图表组件
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
  isDark: boolean;
}

export const SourceChart: React.FC<SourceChartProps> = ({
  time,
  hero,
  channel,
  isDark,
}) => {
  const chartData = useMemo(
    () => MOCK_CHART_DATA.source[time as keyof typeof MOCK_CHART_DATA.source],
    [time]
  );

  const selectedSource = useMemo(
    () => applySelectionToSeries(chartData, hero, channel, 0, 9999999),
    [chartData, hero, channel]
  );

  const colors = [
    CHART_ACCENTS.primary,
    CHART_ACCENTS.secondary,
    CHART_ACCENTS.tertiary,
    CHART_ACCENTS.quaternary,
    CHART_ACCENTS.danger,
  ];

  const textColor = isDark ? KING_COLORS.text : '#1f2937';
  const gridColor = isDark ? KING_COLORS.grid : '#e5e7eb';

  const option: EChartsOption = {
    backgroundColor: 'transparent',
    textStyle: { color: textColor },
    title: {
      text: '玩家访问来源',
      left: 'center',
      textStyle: { color: textColor, fontSize: 16, fontWeight: 600 },
      top: 5,
    },
    grid: {
      left: 45,
      right: 20,
      top: 50,
      bottom: 40,
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: CHART_CATEGORIES.source,
      axisLine: { lineStyle: { color: gridColor } },
      axisLabel: { color: textColor, fontSize: 11, interval: 0 },
      axisTick: { show: false },
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisLabel: { color: textColor, fontSize: 11 },
      splitLine: { lineStyle: { color: gridColor, type: 'dashed' } },
    },
    series: [
      {
        name: '访问量',
        type: 'bar',
        data: selectedSource.map((value, index) => ({
          value,
          itemStyle: {
            color: {
              type: 'linear',
              x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [
                { offset: 0, color: colors[index % colors.length] },
                { offset: 1, color: colors[index % colors.length] + '99' },
              ],
            },
            borderRadius: [4, 4, 0, 0],
          },
        })),
        barWidth: '55%',
        barCategoryGap: '25%',
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
    <div style={{ height: '320px', width: '100%' }}>
      <ReactECharts option={option} style={{ height: '100%' }} />
    </div>
  );
};

export default SourceChart;
