import React, { useMemo } from 'react';
import { type EChartsOption } from 'echarts';
import ReactECharts from 'echarts-for-react';
import {
  applySelectionToSeries,
  CHART_ACCENTS,
  CHART_CATEGORIES,
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

  const colors = [
    CHART_ACCENTS.primary,
    CHART_ACCENTS.quaternary,
    CHART_ACCENTS.tertiary,
    CHART_ACCENTS.secondary,
    CHART_ACCENTS.danger,
  ];

  const axisLabelColor = 'rgba(255,255,255,0.5)';
  const gridColor = 'rgba(255,255,255,0.08)';

  const option: EChartsOption = {
    backgroundColor: 'transparent',
    textStyle: { color: '#e5e7eb' },
    title: {
      text: '玩家访问来源',
      left: 'center',
      textStyle: {
        color: '#f0f0f0',
        fontSize: 16,
        fontWeight: 600,
        textShadowColor: 'rgba(59,130,246,0.15)',
        textShadowBlur: 10,
      },
      top: 5,
    },
    grid: {
      left: 50,
      right: 20,
      top: 50,
      bottom: 40,
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: CHART_CATEGORIES.source,
      axisLine: { lineStyle: { color: gridColor } },
      axisLabel: { color: axisLabelColor, fontSize: 11, interval: 0 },
      axisTick: { show: false },
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisLabel: { color: axisLabelColor, fontSize: 11 },
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
                { offset: 0.6, color: colors[index % colors.length] + 'cc' },
                { offset: 1, color: colors[index % colors.length] + '66' },
              ],
            },
            borderRadius: [6, 6, 0, 0],
            shadowBlur: 10,
            shadowColor: colors[index % colors.length] + '40',
          },
        })),
        barWidth: '50%',
        barCategoryGap: '30%',
        animationDuration: 1200,
        animationEasing: 'elasticOut',
      },
    ],
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(15,15,25,0.92)',
      textStyle: { color: '#f0f0f0' },
      borderColor: 'rgba(59,130,246,0.4)',
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
