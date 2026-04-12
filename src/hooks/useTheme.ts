import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ThemeMode = 'light' | 'dark';
export type ColorTheme = 'default' | 'purple' | 'green';

interface ThemeState {
  themeMode: ThemeMode;
  colorTheme: ColorTheme;
  isDark: boolean;
  setThemeMode: (mode: ThemeMode) => void;
  setColorTheme: (theme: ColorTheme) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      themeMode: 'light',
      colorTheme: 'default',
      isDark: false,
      setThemeMode: (mode) => {
        set({ themeMode: mode, isDark: mode === 'dark' });
        applyThemeClass(mode, get().colorTheme);
      },
      setColorTheme: (theme) => {
        set({ colorTheme: theme });
        applyThemeClass(get().themeMode, theme);
      },
      toggleTheme: () => {
        const { themeMode, colorTheme } = get();
        const nextMode = themeMode === 'light' ? 'dark' : 'light';
        set({ themeMode: nextMode, isDark: nextMode === 'dark' });
        applyThemeClass(nextMode, colorTheme);
      },
    }),
    {
      name: 'theme-storage',
    }
  )
);

const applyThemeClass = (mode: ThemeMode, colorTheme: ColorTheme) => {
  const root = document.documentElement;

  root.classList.remove('dark', 'light');
  root.classList.remove('theme-default', 'theme-purple', 'theme-green');

  root.classList.add(mode);
  root.classList.add(`theme-${colorTheme}`);
};

if (typeof window !== 'undefined') {
  const state = useThemeStore.getState();
  applyThemeClass(state.themeMode, state.colorTheme);
}
