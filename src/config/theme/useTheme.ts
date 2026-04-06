import { useState } from 'react';

type ThemeMode = 'dark' | 'light';

export const useTheme = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('themeMode');
    return (saved as ThemeMode) || 'dark';
  });

  const toggleTheme = () => {
    const newMode = themeMode === 'dark' ? 'light' : 'dark';
    setThemeMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  return { themeMode, toggleTheme };
};
