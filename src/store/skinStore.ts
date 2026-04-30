// 皮肤主题状态管理（Zustand）：管理应用皮肤主题切换，支持多种主题预设，状态持久化存储
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