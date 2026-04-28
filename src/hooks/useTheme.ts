import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ColorTheme = 'default' | 'purple' | 'green';

interface ThemeState {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
}

const colorMap = {
  default: { primary: '59, 130, 246', primaryLight: '96, 165, 250', primaryDark: '37, 99, 235' },
  purple: { primary: '139, 92, 246', primaryLight: '167, 139, 250', primaryDark: '109, 40, 217' },
  green: { primary: '16, 185, 129', primaryLight: '52, 211, 153', primaryDark: '5, 150, 105' },
};

const applyThemeClass = (colorTheme: ColorTheme) => {
  const root = document.documentElement;
  root.classList.remove('theme-default', 'theme-purple', 'theme-green');
  root.classList.add(`theme-${colorTheme}`);

  const colors = colorMap[colorTheme];
  root.style.setProperty('--color-primary', colors.primary);
  root.style.setProperty('--color-primary-light', colors.primaryLight);
  root.style.setProperty('--color-primary-dark', colors.primaryDark);
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      colorTheme: 'default',
      setColorTheme: (theme) => {
        set({ colorTheme: theme });
        applyThemeClass(theme);
      },
    }),
    {
      name: 'theme-storage',
    }
  )
);

if (typeof window !== 'undefined') {
  const state = useThemeStore.getState();
  applyThemeClass(state.colorTheme);
}
