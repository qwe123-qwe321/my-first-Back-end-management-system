import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SkinState {
  currentSkin: string;
  isDarkMode: boolean;
  setSkin: (color: string) => void;
  toggleDarkMode: () => void;
}

export const useSkinStore = create<SkinState>()(
  persist(
    (set) => ({
      currentSkin: '#1677ff', // 默认蓝色
      isDarkMode: false,
      setSkin: (color) => set({ currentSkin: color }),
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: 'skin-storage', // localStorage key
    }
  )
);