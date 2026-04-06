// 主题配置文件：根据明暗模式返回不同的主题配置
import type { ThemeConfig } from 'antd';

export const getThemeConfig = (mode: 'dark' | 'light'): ThemeConfig => ({
  token: {
    colorPrimary: '#3b82f6',
    borderRadius: 8,
    colorBgBase: mode === 'dark' ? '#1a1a1a' : '#f8fafc',
    colorBgContainer: mode === 'dark' ? '#1a1a1a' : '#ffffff',
  },
  components: {
    Menu: {
      // 通用（light 模式用）
      itemBg: 'transparent',
      itemHoverBg: mode === 'dark' ? 'rgba(255,255,255,0.08)' : '#3b82f610',
      itemSelectedBg: mode === 'dark' ? '#2a2a2a' : '#3b82f630', // 选中时更深一点
      itemSelectedColor: mode === 'dark' ? '#ffffff' : '#1e293b',
      itemColor: mode === 'dark' ? '#9ca3af' : '#1e293b',

      // 关键：暗色模式专用 token（必须加这几个）
      ...(mode === 'dark' && {
        darkItemBg: '#1a1a1a', // 菜单整体背景
        darkItemHoverBg: 'rgba(255,255,255,0.08)', // hover 浅白色
        darkItemSelectedBg: '#2a2a2a', // 选中更深一点
        darkItemSelectedColor: '#ffffff',
        darkItemColor: '#9ca3af',
        darkItemHoverColor: '#ffffff',
      }),
    },
    Layout: {
      siderBg: mode === 'dark' ? '#1a1a1a' : '#ffffff',
      headerBg: mode === 'dark' ? '#1a1a1a' : '#ffffff',
    },
  },
});
