import { create } from 'zustand';

// 定义这个“保险柜”里存什么东西，以及怎么存
interface UserState {
  token: string;
  // 改变 token 的方法
  setToken: (token: string) => void;
  // 清除 token（退出登录）的方法
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  // 初始值：先看看本地浏览器存没存，没有就是空字符串
  token: localStorage.getItem('token') || '',
  
  setToken: (token: string) => {
    localStorage.setItem('token', token); // 存入浏览器
    set({ token }); // 更新状态
  },

  logout: () => {
    localStorage.removeItem('token'); // 从浏览器删掉
    set({ token: '' }); // 清空状态
  },
}));