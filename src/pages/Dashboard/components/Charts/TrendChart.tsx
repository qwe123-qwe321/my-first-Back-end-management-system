// 英雄登场率/胜率趋势图表组件：显示英雄在不同时间范围内的登场率和胜率趋势线
import React, { useMemo } from 'react';
import { type EChartsOption } from 'echarts';
import ReactECharts from 'echarts-for-react';
import {
  applySelectionToSeries,
  CHART_ACCENTS,
  KING_COLORS,
  MOCK_CHART_DATA,
} from '../../constants/chartConfig';

interface TrendChartProps {
  time: string; // week/month/season
  hero: string;
  channel: string;
}

export const TrendChart: React.FC<TrendChartProps> = ({
  time,
  hero,
  channel,
}) => {
  // 根据筛选条件获取对应数据
  const chartData = useMemo(
    () => MOCK_CHART_DATA.trend[time as keyof typeof MOCK_CHART_DATA.trend],
    [time]
  );

  const selectedRate = useMemo(
    () => applySelectionToSeries(chartData.rate, hero, channel, 0, 100),
    [chartData.rate, hero, channel]
  );

  const selectedWin = useMemo(
    () => applySelectionToSeries(chartData.win, hero, channel, 0, 100),
    [chartData.win, hero, channel]
  );

  // ECharts配置（暗黑主题 + 王者配色）
  const option: EChartsOption = {
    backgroundColor: KING_COLORS.bg,
    textStyle: { color: KING_COLORS.text },
    title: {
      text: '英雄登场率/胜率趋势',
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
      data: chartData.xAxis,
      axisLine: { lineStyle: { color: KING_COLORS.grid } },
      axisLabel: { color: KING_COLORS.text },
    },
    yAxis: {
      type: 'value',
      max: 100,
      axisLine: { lineStyle: { color: KING_COLORS.grid } },
      axisLabel: { color: KING_COLORS.text },
      splitLine: { lineStyle: { color: KING_COLORS.grid } },
    },
    series: [
      {
        name: '登场率',
        type: 'line',
        data: selectedRate,
        itemStyle: { color: CHART_ACCENTS.primary },
        lineStyle: {
          color: CHART_ACCENTS.primary,
          width: 2,
          shadowColor: CHART_ACCENTS.lineGlow,
          shadowBlur: 10,
        },
        smooth: true,
      },
      {
        name: '胜率',
        type: 'line',
        data: selectedWin,
        itemStyle: { color: CHART_ACCENTS.secondary },
        lineStyle: {
          color: CHART_ACCENTS.secondary,
          width: 2,
          shadowColor: 'rgba(167, 139, 250, 0.35)',
          shadowBlur: 10,
        },
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,0,0,0.8)',
      textStyle: { color: KING_COLORS.text },
      borderColor: 'rgba(34, 211, 238, 0.65)',
      borderWidth: 1,
    },
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <ReactECharts option={option} style={{ height: '100%' }} />
    </div>
  );
};
