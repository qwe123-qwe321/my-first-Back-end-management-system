import React, { useMemo } from 'react';
import { type EChartsOption } from 'echarts';
import ReactECharts from 'echarts-for-react';
import {
  applySelectionToSeries,
  CHART_ACCENTS,
  MOCK_CHART_DATA,
} from '../../constants/chartConfig';

interface TrendChartProps {
  time: string;
  hero: string;
  channel: string;
}

export const TrendChart: React.FC<TrendChartProps> = ({
  time,
  hero,
  channel,
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

  const textColor = '#e5e7eb';
  const gridColor = 'rgba(255,255,255,0.08)';
  const axisLabelColor = 'rgba(255,255,255,0.5)';

  const option: EChartsOption = {
    backgroundColor: 'transparent',
    textStyle: { color: textColor },
    title: {
      text: '英雄登场率/胜率趋势',
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
      axisLabel: { color: axisLabelColor, fontSize: 11 },
      axisTick: { show: false },
      splitLine: { show: false },
    },
    yAxis: {
      type: 'value',
      max: 100,
      min: 0,
      axisLine: { show: false },
      axisLabel: { color: axisLabelColor, fontSize: 11, formatter: '{value}%' },
      splitLine: { lineStyle: { color: gridColor, type: 'dashed' } },
    },
    series: [
      {
        name: '登场率',
        type: 'line',
        data: selectedRate,
        symbol: 'circle',
        symbolSize: 6,
        showSymbol: true,
        itemStyle: {
          color: CHART_ACCENTS.primary,
          borderColor: 'rgba(20,20,30,0.9)',
          borderWidth: 2,
          shadowBlur: 8,
          shadowColor: 'rgba(59,130,246,0.5)',
        },
        lineStyle: {
          color: CHART_ACCENTS.primary,
          width: 3,
          shadowBlur: 6,
          shadowColor: 'rgba(59,130,246,0.3)',
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(59,130,246,0.4)' },
              { offset: 0.5, color: 'rgba(59,130,246,0.15)' },
              { offset: 1, color: 'rgba(59,130,246,0.02)' },
            ],
          },
        },
        smooth: 0.4,
        animationDuration: 1500,
        animationEasing: 'cubicOut',
      },
      {
        name: '胜率',
        type: 'line',
        data: selectedWin,
        symbol: 'diamond',
        symbolSize: 7,
        showSymbol: true,
        itemStyle: {
          color: CHART_ACCENTS.quaternary,
          borderColor: 'rgba(20,20,30,0.9)',
          borderWidth: 2,
          shadowBlur: 8,
          shadowColor: 'rgba(6,182,212,0.5)',
        },
        lineStyle: {
          color: CHART_ACCENTS.quaternary,
          width: 3,
          shadowBlur: 6,
          shadowColor: 'rgba(6,182,212,0.3)',
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(6,182,212,0.35)' },
              { offset: 0.5, color: 'rgba(6,182,212,0.12)' },
              { offset: 1, color: 'rgba(6,182,212,0.02)' },
            ],
          },
        },
        smooth: 0.4,
        animationDuration: 1500,
        animationEasing: 'cubicOut',
      },
    ],
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(15,15,25,0.92)',
      textStyle: { color: '#f0f0f0' },
      borderColor: 'rgba(59,130,246,0.4)',
      borderWidth: 1,
      borderRadius: 8,
      padding: [10, 14],
      axisPointer: {
        type: 'cross',
        crossStyle: { color: 'rgba(255,255,255,0.15)' },
        lineStyle: { color: 'rgba(255,255,255,0.1)', type: 'dashed', width: 1 },
      },
    },
    legend: {
      data: ['登场率', '胜率'],
      top: 8,
      right: 15,
      textStyle: { color: 'rgba(255,255,255,0.7)', fontSize: 12 },
      icon: 'roundRect',
      itemWidth: 16,
      itemHeight: 4,
    },
  };

  return (
    <div style={{ height: '320px', width: '100%' }}>
      <ReactECharts option={option} style={{ height: '100%' }} />
    </div>
  );
};

export default TrendChart;
