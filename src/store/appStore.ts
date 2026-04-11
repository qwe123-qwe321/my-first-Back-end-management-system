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

  // 主题状态
  themeMode: 'light' | 'dark';
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (mode: 'light' | 'dark') => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // 用户状态
      user: {
        id: '1',
        nickname: '云中君',
        level: 12,
        avatar: 'https://picsum.photos/40',
      },
      token: null,
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
      logout: () => set({ user: null, token: null }),

      // 主题状态
      themeMode: 'light',
      isDark: false,
      toggleTheme: () => {
        const { themeMode } = get();
        const nextMode = themeMode === 'light' ? 'dark' : 'light';
        set({ themeMode: nextMode, isDark: nextMode === 'dark' });
      },
      setTheme: (mode) => set({ themeMode: mode, isDark: mode === 'dark' }),
    }),
    {
      name: 'app-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        themeMode: state.themeMode,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isDark = state.themeMode === 'dark';
        }
      },
    }
  )
);

// 初始化时设置 document 类
if (typeof window !== 'undefined') {
  const state = useAppStore.getState();
  if (state.isDark) {
    document.documentElement.classList.add('dark');
  }

  useAppStore.subscribe((state) => {
    if (state.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
}
