// 世界观图表组件：基于ECharts的柱状图/条形图，展示世界观相关数据指标，支持自定义配色和响应式布局
import React, { useMemo } from 'react';
import { type EChartsOption } from 'echarts';
import ReactECharts from 'echarts-for-react';
import {
  applySelectionToSeries,
  CHART_ACCENTS,
  CHART_CATEGORIES,
  MOCK_CHART_DATA,
} from '../../constants/chartConfig';

interface WorldviewChartProps {
  time: string;
  hero: string;
  channel: string;
}

export const WorldviewChart: React.FC<WorldviewChartProps> = ({
  time,
  hero,
  channel,
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
    CHART_ACCENTS.quaternary,
    CHART_ACCENTS.tertiary,
    CHART_ACCENTS.secondary,
    CHART_ACCENTS.danger,
  ];

  const axisLabelColor = 'rgba(255,255,255,0.5)';

  const option: EChartsOption = {
    backgroundColor: 'transparent',
    textStyle: { color: '#e5e7eb' },
    title: {
      text: '世界观内容类别占比',
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
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(15,15,25,0.92)',
      textStyle: { color: '#f0f0f0' },
      borderColor: 'rgba(59,130,246,0.4)',
      borderWidth: 1,
      borderRadius: 8,
      padding: [10, 14],
      formatter: '{b}: {c}%',
    },
    legend: {
      orient: 'vertical',
      top: 'center',
      right: 10,
      textStyle: { color: axisLabelColor, fontSize: 11 },
      itemWidth: 12,
      itemHeight: 12,
      itemGap: 8,
      icon: 'circle',
    },
    series: [
      {
        name: '内容占比',
        type: 'pie',
        radius: ['35%', '62%'],
        center: ['35%', '55%'],
        avoidLabelOverlap: true,
        padAngle: 3,
        itemStyle: {
          borderRadius: 6,
          borderColor: 'rgba(20,20,30,0.9)',
          borderWidth: 2,
          shadowBlur: 12,
          shadowColor: 'rgba(0,0,0,0.4)',
        },
        label: {
          show: true,
          position: 'outside',
          color: 'rgba(255,255,255,0.75)',
          fontSize: 11,
          formatter: '{b}\n{c}%',
          lineHeight: 16,
          padding: [0, -45, 0, -45],
        },
        labelLine: {
          show: true,
          length: 8,
          length2: 30,
          lineStyle: { color: 'rgba(255,255,255,0.12)', width: 1 },
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 20,
            shadowColor: 'rgba(59,130,246,0.4)',
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: { fontSize: 13, fontWeight: 600, color: '#fff' },
        },
        animationDuration: 1200,
        animationEasing: 'cubicOut',
        data: CHART_CATEGORIES.worldview.map((name, index) => ({
          name,
          value: selectedWorldview[index],
          itemStyle: {
            color: {
              type: 'radial',
              x: 0.5, y: 0.5, r: 0.5,
              colorStops: [
                { offset: 0, color: colors[index % colors.length] },
                { offset: 1, color: colors[index % colors.length] + 'bb' },
              ],
            },
          },
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
