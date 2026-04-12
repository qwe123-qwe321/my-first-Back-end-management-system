// 世界观内容类别占比图表组件：显示玩家在不同时间范围内的世界观内容类别占比柱状图
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

    // 百分比归一化（保证最后加总=100）
    const raw = adjusted.map((v) => (v / sum) * 100);
    const rounded = raw.map((v) => Math.floor(v));
    const rest = 100 - rounded.reduce((acc, v) => acc + v, 0);

    // 把剩余的差值分配给小数部分最大的项
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

  const option: EChartsOption = {
    backgroundColor: KING_COLORS.bg,
    textStyle: { color: KING_COLORS.text },
    title: {
      text: '世界观内容类别占比',
      left: 'center',
      textStyle: { color: KING_COLORS.text, fontSize: 16 },
    },
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0,0,0,0.8)',
      textStyle: { color: KING_COLORS.text },
      borderColor: 'rgba(34, 211, 238, 0.65)',
      borderWidth: 1,
    },
    legend: {
      orient: 'vertical',
      top: 'middle',
      right: '5%',
      textStyle: {
        color: KING_COLORS.text,
        fontSize: 12,
        fontWeight: 'bold',
      },
      itemWidth: 12,
      itemHeight: 12,
      itemGap: 12,
    },
    series: [
      {
        name: '内容占比',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['35%', '50%'],
        data: CHART_CATEGORIES.worldview.map((name, index) => ({
          name,
          value: selectedWorldview[index],
        })),
        itemStyle: {
          color: (params) => {
            const colors = [
              CHART_ACCENTS.primary,
              CHART_ACCENTS.secondary,
              CHART_ACCENTS.tertiary,
              CHART_ACCENTS.quaternary,
              CHART_ACCENTS.danger,
            ];
            return colors[params.dataIndex % colors.length];
          },
          borderColor: KING_COLORS.bg,
          borderWidth: 2,
        },
        label: {
          color: KING_COLORS.text,
          formatter: '{b}: {c}%',
          fontSize: 12,
          fontWeight: 'bold',
          textShadowColor: 'rgba(0, 0, 0, 0.8)',
          textShadowBlur: 2,
        },
      },
    ],
  };

  return (
    <div style={{ height: '350px', width: '100%' }}>
      <ReactECharts option={option} style={{ height: '100%' }} />
    </div>
  );
};

export default WorldviewChart;
