// 世界观内容类别占比图表组件
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

interface WorldviewChartProps {
  time: string;
  hero: string;
  channel: string;
  isDark: boolean;
}

export const WorldviewChart: React.FC<WorldviewChartProps> = ({
  time,
  hero,
  channel,
  isDark,
}) => {
  const chartData = useMemo(
    () =>
      MOCK_CHART_DATA.worldview[time as keyof typeof MOCK_CHART_DATA.worldview],
    [time]
  );

  const selectedWorldview = useMemo(() => {
    const adjusted = applySelectionToSeries(chartData, hero, channel, 0, 1000);
    const sum = adjusted.reduce((acc, v) => acc + v, 0) || 1;

    const raw = adjusted.map((v) => (v / sum) * 100);
    const rounded = raw.map((v) => Math.floor(v));
    const rest = 100 - rounded.reduce((acc, v) => acc + v, 0);

    const indexed = raw.map((v, i) => ({ i, frac: v - Math.floor(v) }));
    indexed.sort((a, b) => b.frac - a.frac);
    if (rest > 0) {
      for (let k = 0; k < rest; k++) {
        rounded[indexed[k]?.i ?? 0] += 1;
      }
    } else if (rest < 0) {
      for (let k = 0; k < Math.abs(rest); k++) {
        const idx = indexed[k]?.i ?? 0;
        if (rounded[idx] > 0) rounded[idx] -= 1;
      }
    }

    return rounded;
  }, [chartData, hero, channel]);

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
      text: '世界观内容类别占比',
      left: 'center',
      textStyle: { color: textColor, fontSize: 16, fontWeight: 600 },
      top: 5,
    },
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(31, 41, 55, 0.95)',
      textStyle: { color: '#e5e7eb' },
      borderColor: '#3b82f6',
      borderWidth: 1,
      borderRadius: 8,
      padding: [10, 14],
    },
    legend: {
      orient: 'vertical',
      top: 'center',
      right: 10,
      textStyle: { color: textColor, fontSize: 11 },
      itemWidth: 12,
      itemHeight: 12,
      itemGap: 8,
    },
    series: [
      {
        name: '内容占比',
        type: 'pie',
        radius: ['38%', '65%'],
        center: ['35%', '55%'],
        avoidLabelOverlap: true,
        padAngle: 2,
        itemStyle: {
          borderRadius: 4,
          borderColor: 'transparent',
          borderWidth: 2,
        },
        label: {
          show: true,
          position: 'outside',
          color: textColor,
          fontSize: 11,
          formatter: '{b}\n{c}%',
          lineHeight: 16,
          padding: [0, -45, 0, -45],
        },
        labelLine: {
          show: true,
          length: 10,
          length2: 35,
          lineStyle: { color: gridColor, width: 1 },
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 8,
            shadowColor: 'rgba(0, 0, 0, 0.2)',
          },
          label: { fontSize: 13, fontWeight: 600 },
        },
        data: CHART_CATEGORIES.worldview.map((name, index) => ({
          name,
          value: selectedWorldview[index],
          itemStyle: { color: colors[index % colors.length] },
        })),
      },
    ],
  };

  return (
    <div style={{ height: '320px', width: '100%' }}>
      <ReactECharts option={option} style={{ height: '100%' }} />
    </div>
  );
};

export default WorldviewChart;
