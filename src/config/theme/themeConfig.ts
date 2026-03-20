import type { ThemeConfig } from 'antd';

export const getThemeConfig = (mode: 'dark' | 'light'): ThemeConfig => ({
  token: {
    colorPrimary: '#3b82f6',
    borderRadius: 8,
    // 移除全局背景/文字/边框的主题切换，仅保留固定样式
    colorBgBase: '#f8fafc',
    colorBgContainer: '#ffffff',
    colorText: '#1e293b',
    colorTextSecondary: '#64748b',
    colorBorder: '#e2e8f0',
  },
  components: {
    Menu: {
      itemBg: 'transparent',
      itemHoverBg: mode === 'dark' ? '#3b82f610' : '#3b82f620',
      itemSelectedBg: mode === 'dark' ? '#3b82f620' : '#3b82f630',
      itemSelectedColor: mode === 'dark' ? '#ffffff' : '#1e293b',
    },
    Layout: {
      siderBg: mode === 'dark' ? '#1f2937' : '#ffffff',
      headerBg: mode === 'dark' ? '#1f2937' : '#ffffff',
    },
  },
});