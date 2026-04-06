import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserProfile {
  id: number;
  username: string;
  nickname: string;
  email: string;
  phone: string;
  location: string;
  birthday: string;
  bio: string;
  avatar: string;
  gender: string;
  level: number;
  experience: number;
  joinDate: string;
}

interface UserStore {
  // 用户信息
  profile: UserProfile;

  // 游戏数据
  heroCount: number;
  skinCount: number;
  winRate: number;
  playTime: number;

  // 最近战绩
  recentStats: {
    wins: number;
    losses: number;
    winRate: number;
    mvpCount: number;
  };

  // 常用英雄
  favoriteHeroes: Array<{
    name: string;
    image: string;
    winRate: number;
  }>;

  // 成就徽章
  badges: Array<{
    name: string;
    type: 'gold' | 'silver' | 'bronze' | 'blue';
  }>;

  // 更新方法
  updateProfile: (updates: Partial<UserProfile>) => void;
  updateAvatar: (avatar: string) => void;
  updateGameStats: (
    stats: Partial<{
      heroCount: number;
      skinCount: number;
      winRate: number;
      playTime: number;
    }>
  ) => void;
}

// 默认用户数据
const defaultProfile: UserProfile = {
  id: 10001,
  username: '转角吻猪',
  nickname: '荣耀王者',
  email: 'player@example.com',
  phone: '138****8000',
  location: '北京市',
  birthday: '1995-06-15',
  bio: '王者荣耀资深玩家，擅长法师和射手位置。最高段位：荣耀王者，常用英雄：嫦娥、伽罗、海月。喜欢研究战术配合和英雄技能。',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
  gender: 'male',
  level: 30,
  experience: 8500,
  joinDate: '2022-03-15',
};

const defaultFavoriteHeroes = [
  {
    name: '嫦娥',
    image:
      'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220825/16614099595173.jpg',
    winRate: 68,
  },
  {
    name: '伽罗',
    image:
      'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20210907/16310082616500.jpg',
    winRate: 72,
  },
  {
    name: '海月',
    image:
      'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20250326/17429820701826.jpg',
    winRate: 65,
  },
];

const defaultBadges = [
  { name: '王者', type: 'gold' },
  { name: '五杀', type: 'silver' },
  { name: '连胜', type: 'bronze' },
  { name: 'MVP', type: 'blue' },
];

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      profile: defaultProfile,
      heroCount: 128,
      skinCount: 356,
      winRate: 85,
      playTime: 1562,
      recentStats: {
        wins: 28,
        losses: 12,
        winRate: 70,
        mvpCount: 15,
      },
      favoriteHeroes: defaultFavoriteHeroes,
      badges: defaultBadges,

      updateProfile: (updates) =>
        set((state) => ({
          profile: { ...state.profile, ...updates },
        })),

      updateAvatar: (avatar) =>
        set((state) => ({
          profile: { ...state.profile, avatar },
        })),

      updateGameStats: (stats) =>
        set((state) => ({
          ...state,
          ...stats,
        })),
    }),
    {
      name: 'user-storage',
      partialize: (state) => ({
        profile: state.profile,
        heroCount: state.heroCount,
        skinCount: state.skinCount,
        winRate: state.winRate,
        playTime: state.playTime,
      }),
    }
  )
);
