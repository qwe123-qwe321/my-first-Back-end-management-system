// 英雄登场率/胜率趋势图表组件
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
  time: string;
  hero: string;
  channel: string;
  isDark: boolean;
}

export const TrendChart: React.FC<TrendChartProps> = ({
  time,
  hero,
  channel,
  isDark,
}) => {
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

  const bg = isDark ? KING_COLORS.bg : '#ffffff';
  const textColor = isDark ? KING_COLORS.text : '#1f2937';
  const gridColor = isDark ? KING_COLORS.grid : '#e5e7eb';

  const option: EChartsOption = {
    backgroundColor: 'transparent',
    textStyle: { color: textColor },
    title: {
      text: '英雄登场率/胜率趋势',
      left: 'center',
      textStyle: { color: textColor, fontSize: 16, fontWeight: 600 },
      top: 5,
    },
    grid: {
      left: 40,
      right: 20,
      top: 50,
      bottom: 30,
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: chartData.xAxis,
      axisLine: { lineStyle: { color: gridColor } },
      axisLabel: { color: textColor, fontSize: 11 },
      axisTick: { show: false },
    },
    yAxis: {
      type: 'value',
      max: 100,
      min: 0,
      axisLine: { show: false },
      axisLabel: { color: textColor, fontSize: 11, formatter: '{value}%' },
      splitLine: { lineStyle: { color: gridColor, type: 'dashed' } },
    },
    series: [
      {
        name: '登场率',
        type: 'line',
        data: selectedRate,
        symbol: 'circle',
        symbolSize: 8,
        showSymbol: true,
        itemStyle: {
          color: CHART_ACCENTS.primary,
          borderColor: bg,
          borderWidth: 2,
        },
        lineStyle: {
          color: CHART_ACCENTS.primary,
          width: 3,
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(59, 130, 246, 0.35)' },
              { offset: 1, color: 'rgba(59, 130, 246, 0.02)' },
            ],
          },
        },
        smooth: 0.4,
      },
      {
        name: '胜率',
        type: 'line',
        data: selectedWin,
        symbol: 'circle',
        symbolSize: 8,
        showSymbol: true,
        itemStyle: {
          color: CHART_ACCENTS.secondary,
          borderColor: bg,
          borderWidth: 2,
        },
        lineStyle: {
          color: CHART_ACCENTS.secondary,
          width: 3,
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(99, 102, 241, 0.35)' },
              { offset: 1, color: 'rgba(99, 102, 241, 0.02)' },
            ],
          },
        },
        smooth: 0.4,
      },
    ],
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(31, 41, 55, 0.95)',
      textStyle: { color: '#e5e7eb' },
      borderColor: '#3b82f6',
      borderWidth: 1,
      borderRadius: 8,
      padding: [10, 14],
    },
    legend: {
      data: ['登场率', '胜率'],
      top: 8,
      right: 15,
      textStyle: { color: textColor, fontSize: 12 },
    },
  };

  return (
    <div style={{ height: '320px', width: '100%' }}>
      <ReactECharts option={option} style={{ height: '100%' }} />
    </div>
  );
};

export default TrendChart;
