// 应用全局状态管理（Zustand）：管理用户登录状态、用户信息、侧边栏折叠、标签页等核心应用级状态，支持持久化存储
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  nickname: string;
  level: number;
  avatar: string;
}

interface AppState {
  // 用户状态
  user: User | null;
  token: string | null;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  logout: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // 用户状态
      user: {
        id: '1',
        nickname: '云中君',
        level: 12,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=cloud&backgroundColor=3b82f6',
      },
      token: null,
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
      logout: () => set({ user: null, token: null }),
    }),
    {
      name: 'app-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
      }),
    }
  )
);
