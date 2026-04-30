// 图表常量配置：定义筛选选项、默认数据、主题配色（王者金红+暗黑主题）等图表相关常量
// 图表常量：筛选选项、默认数据、配色（王者金红+暗黑主题）
export const CHART_FILTERS = {
  time: [
    { label: '本周', value: 'week' },
    { label: '本月', value: 'month' },
    { label: '本赛季', value: 'season' },
  ],
  hero: [
    { label: '全部英雄', value: 'all' },
    { label: '李白', value: 'libai' },
    { label: '貂蝉', value: 'diaochan' },
    { label: '韩信', value: 'hanxin' },
  ],
  channel: [
    { label: '全部渠道', value: 'all' },
    { label: '线上', value: 'online' },
    { label: '游戏内', value: 'ingame' },
  ],
};

// 柔和深色配色（适配深色主题）
export const KING_COLORS = {
  gold: '#f59e0b',
  red: '#ef4444',
  darkGold: '#d97706',
  darkRed: '#dc2626',
  bg: '#1f2937',
  text: '#e5e7eb',
  grid: '#374151',
};

// 图表配色：柔和专业风格
export const CHART_ACCENTS = {
  primary: '#3b82f6', // 蓝色
  secondary: '#6366f1', // 靛蓝
  tertiary: '#8b5cf6', // 紫色
  quaternary: '#06b6d4', // 青色
  danger: '#f43f5e', // 玫瑰红
  lineGlow: 'rgba(59, 130, 246, 0.3)',
};

type SelectionKey =
  | 'all'
  | 'libai'
  | 'diaochan'
  | 'hanxin'
  | 'online'
  | 'ingame';

const HERO_MULTIPLIERS: Record<SelectionKey, number> = {
  all: 1,
  libai: 1.08,
  diaochan: 0.93,
  hanxin: 1.04,
  online: 1,
  ingame: 1,
};

const CHANNEL_MULTIPLIERS: Record<SelectionKey, number> = {
  all: 1,
  libai: 1,
  diaochan: 1,
  hanxin: 1,
  online: 1.06,
  ingame: 0.97,
};

export const getHeroFactor = (hero: string) =>
  HERO_MULTIPLIERS[(hero as SelectionKey) ?? 'all'] ?? 1;
export const getChannelFactor = (channel: string) =>
  CHANNEL_MULTIPLIERS[(channel as SelectionKey) ?? 'all'] ?? 1;

const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

// 给同一组基础数据，按英雄/渠道选择做“形状扰动”，让切换时图表有明显变化
export const applySelectionToSeries = (
  base: number[],
  hero: string,
  channel: string,
  min: number,
  max: number
) => {
  const heroFactor = getHeroFactor(hero);
  const channelFactor = getChannelFactor(channel);
  const factor = heroFactor * channelFactor;

  // 用字符串构造一个稳定的小偏移量（避免随机，每次切换都一致）
  const seed = (hero + '|' + channel)
    .split('')
    .reduce((sum, ch) => sum + ch.charCodeAt(0), 0);

  const offsetBase = ((seed % 11) - 5) * 0.85; // 大致落在 [-4.25, 4.25]
  const mid = (base.length - 1) / 2;

  return base.map((v, i) => {
    const shape = i - mid; // 两端为正/负
    const adjusted = v * factor + offsetBase * shape * 0.12;
    return clamp(Math.round(adjusted), min, max);
  });
};

// 模拟图表数据（实际可替换为接口请求）
export const MOCK_CHART_DATA = {
  // 折线图：英雄登场率/胜率
  trend: {
    week: {
      xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      rate: [65, 68, 72, 70, 75, 80, 78], // 登场率
      win: [52, 51, 53, 55, 54, 56, 57], // 胜率
    },
    month: {
      xAxis: ['1日', '5日', '10日', '15日', '20日', '25日', '30日'],
      rate: [60, 65, 70, 72, 68, 75, 78],
      win: [50, 52, 51, 54, 53, 55, 56],
    },
    season: {
      xAxis: ['第1周', '第2周', '第3周', '第4周', '第5周', '第6周'],
      rate: [55, 60, 65, 70, 73, 75],
      win: [48, 50, 51, 52, 54, 55],
    },
  },
  // 柱状图：玩家访问来源
  source: {
    week: [3500, 2800, 1800, 1200, 800],
    month: [12000, 9500, 6800, 4500, 3200],
    season: [55000, 48000, 32000, 25000, 18000],
  },
  // 饼图：世界观内容类别占比
  worldview: {
    week: [35, 25, 20, 15, 5],
    month: [38, 22, 18, 16, 6],
    season: [40, 20, 19, 14, 7],
  },
};

// 图表类目
export const CHART_CATEGORIES = {
  source: ['官网', '小程序', '游戏内弹窗', '社交媒体', '线下活动'],
  worldview: ['英雄背景', '剧情动画', '赛事故事', '周边内容', '其他'],
};
