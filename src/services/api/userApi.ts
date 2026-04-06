import { post, get, ApiResponse, RequestConfig } from '../utils/apiUtils';
import { setAuthToken, clearAuthToken } from '../config/axiosConfig';

// 用户相关接口类型定义

// 登录请求参数
export interface LoginRequest {
  username: string;
  password: string;
  rememberMe?: boolean;
}

// 登录响应数据
export interface LoginResponse {
  user: UserInfo;
  token: string;
  refreshToken?: string;
  expiresIn: number;
}

// 用户信息
export interface UserInfo {
  id: number;
  username: string;
  email: string;
  nickname: string;
  avatar: string;
  phone?: string;
  gender?: 'male' | 'female' | 'other';
  birthday?: string;
  location?: string;
  bio?: string;
  level: number;
  experience: number;
  joinDate: string;
  lastLogin?: string;
  isActive: boolean;
  roles: string[];
  permissions: string[];
}

// 更新用户信息请求
export interface UpdateUserRequest {
  nickname?: string;
  email?: string;
  phone?: string;
  gender?: 'male' | 'female' | 'other';
  birthday?: string;
  location?: string;
  bio?: string;
  avatar?: string;
}

// 修改密码请求
export interface ChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

// 用户API端点
const USER_API_ENDPOINTS = {
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  REFRESH_TOKEN: '/auth/refresh',
  REGISTER: '/auth/register',
  GET_USER_INFO: '/user/info',
  UPDATE_USER_INFO: '/user/update',
  CHANGE_PASSWORD: '/user/change-password',
  UPLOAD_AVATAR: '/user/upload-avatar',
  GET_USER_STATS: '/user/stats',
};

/**
 * 用户登录API
 * @param credentials 登录凭证
 * @param config 请求配置
 * @returns 登录响应
 */
export const login = async (
  credentials: LoginRequest,
  config: RequestConfig = {}
): Promise<ApiResponse<LoginResponse>> => {
  const response = await post<LoginResponse>(
    USER_API_ENDPOINTS.LOGIN,
    credentials,
    config
  );

  // 如果登录成功，保存token
  if (response.success && response.data?.token) {
    setAuthToken(response.data.token);
  }

  return response;
};

/**
 * 用户登出API
 * @param config 请求配置
 * @returns 登出响应
 */
export const logout = async (
  config: RequestConfig = {}
): Promise<ApiResponse> => {
  const response = await post(USER_API_ENDPOINTS.LOGOUT, {}, config);

  // 无论登出是否成功，都清除本地token
  clearAuthToken();

  return response;
};

/**
 * 刷新Token API
 * @param refreshToken 刷新令牌
 * @param config 请求配置
 * @returns 新的Token信息
 */
export const refreshToken = async (
  refreshToken: string,
  config: RequestConfig = {}
): Promise<
  ApiResponse<{ token: string; refreshToken: string; expiresIn: number }>
> => {
  const response = await post(
    USER_API_ENDPOINTS.REFRESH_TOKEN,
    { refreshToken },
    config
  );

  // 如果刷新成功，保存新的token
  if (response.success && response.data?.token) {
    setAuthToken(response.data.token);
  }

  return response;
};

/**
 * 用户注册API
 * @param userData 用户注册数据
 * @param config 请求配置
 * @returns 注册响应
 */
export const register = async (
  userData: {
    username: string;
    password: string;
    email: string;
    nickname?: string;
  },
  config: RequestConfig = {}
): Promise<ApiResponse<LoginResponse>> => {
  return post<LoginResponse>(USER_API_ENDPOINTS.REGISTER, userData, config);
};

/**
 * 获取用户信息API
 * @param config 请求配置
 * @returns 用户信息
 */
export const getUserInfo = async (
  config: RequestConfig = {}
): Promise<ApiResponse<UserInfo>> => {
  return get<UserInfo>(USER_API_ENDPOINTS.GET_USER_INFO, {}, config);
};

/**
 * 更新用户信息API
 * @param userData 更新的用户数据
 * @param config 请求配置
 * @returns 更新后的用户信息
 */
export const updateUserInfo = async (
  userData: UpdateUserRequest,
  config: RequestConfig = {}
): Promise<ApiResponse<UserInfo>> => {
  return post<UserInfo>(USER_API_ENDPOINTS.UPDATE_USER_INFO, userData, config);
};

/**
 * 修改密码API
 * @param passwordData 密码数据
 * @param config 请求配置
 * @returns 修改结果
 */
export const changePassword = async (
  passwordData: ChangePasswordRequest,
  config: RequestConfig = {}
): Promise<ApiResponse> => {
  return post(USER_API_ENDPOINTS.CHANGE_PASSWORD, passwordData, config);
};

/**
 * 上传用户头像API
 * @param file 头像文件
 * @param config 请求配置
 * @returns 上传结果
 */
export const uploadAvatar = async (
  file: File,
  config: RequestConfig = {}
): Promise<ApiResponse<{ avatarUrl: string }>> => {
  const formData = new FormData();
  formData.append('avatar', file);

  const uploadConfig: RequestConfig = {
    ...config,
    headers: {
      ...config.headers,
      'Content-Type': 'multipart/form-data',
    },
  };

  return post<{ avatarUrl: string }>(
    USER_API_ENDPOINTS.UPLOAD_AVATAR,
    formData,
    uploadConfig
  );
};

/**
 * 获取用户统计数据API
 * @param config 请求配置
 * @returns 用户统计数据
 */
export const getUserStats = async (
  config: RequestConfig = {}
): Promise<
  ApiResponse<{
    heroCount: number;
    skinCount: number;
    winRate: number;
    playTime: number;
    recentWins: number;
    recentLosses: number;
    mvpCount: number;
    rank: number;
    achievementCount: number;
  }>
> => {
  return get(USER_API_ENDPOINTS.GET_USER_STATS, {}, config);
};

/**
 * 检查用户是否已登录
 * @returns 是否已登录
 */
export const isLoggedIn = (): boolean => {
  try {
    const token = localStorage.getItem('auth_token');
    return !!token;
  } catch {
    return false;
  }
};

/**
 * 获取当前用户的Token
 * @returns Token字符串或null
 */
export const getCurrentToken = (): string | null => {
  try {
    return localStorage.getItem('auth_token');
  } catch {
    return null;
  }
};

/**
 * 获取当前用户信息（从本地存储）
 * @returns 用户信息或null
 */
export const getCurrentUser = (): UserInfo | null => {
  try {
    const userStr = localStorage.getItem('user_info');
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  } catch {
    return null;
  }
};

/**
 * 保存用户信息到本地存储
 * @param userInfo 用户信息
 */
export const saveUserInfo = (userInfo: UserInfo): void => {
  try {
    localStorage.setItem('user_info', JSON.stringify(userInfo));
  } catch (error) {
    console.error('保存用户信息失败:', error);
  }
};

/**
 * 清除本地用户信息
 */
export const clearUserInfo = (): void => {
  try {
    localStorage.removeItem('user_info');
  } catch (error) {
    console.error('清除用户信息失败:', error);
  }
};

// 用户API对象
export const userApi = {
  login,
  logout,
  refreshToken,
  register,
  getUserInfo,
  updateUserInfo,
  changePassword,
  uploadAvatar,
  getUserStats,
  isLoggedIn,
  getCurrentToken,
  getCurrentUser,
  saveUserInfo,
  clearUserInfo,
};

export default userApi;
