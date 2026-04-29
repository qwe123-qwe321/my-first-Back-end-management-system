import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SkinState {
  currentSkin: string;
  setSkin: (color: string) => void;
}

export const useSkinStore = create<SkinState>()(
  persist(
    (set) => ({
      currentSkin: '#1677ff', // 默认蓝色
      setSkin: (color) => set({ currentSkin: color }),
    }),
    {
      name: 'skin-storage', // localStorage key
    }
  )
);