/**
 * Axios服务层模块 - 主入口文件
 *
 * 功能概述：
 * 1. 基础配置：baseURL、超时时间等
 * 2. 请求拦截器：Token管理、调试日志
 * 3. 响应拦截器：错误处理、状态码处理
 * 4. 通用请求方法：支持所有HTTP方法
 * 5. 示例API方法：用户登录、获取用户信息等
 */

// 导出Axios配置相关
export {
  // Axios实例和配置
  api,
  createApiInstance,
  updateBaseURL,

  // Token管理
  setAuthToken,
  clearAuthToken,

  // 配置接口
  type ApiConfig,
} from './config/axiosConfig';

// 导出通用请求工具
export {
  // 核心请求方法
  request,
  get,
  post,
  put,
  del as delete,
  patch,

  // 高级功能
  uploadFile,
  batchRequest,
  createCancelToken,

  // 工具函数
  isSuccessResponse,
  extractData,
  extractErrorMessage,

  // 类型定义
  type ApiResponse,
  type ApiError,
  type HttpMethod,
  type RequestConfig,
} from './utils/apiUtils';

// 导出用户API
export {
  // 用户API方法
  login,
  logout,
  refreshToken,
  register,
  getUserInfo,
  updateUserInfo,
  changePassword,
  uploadAvatar,
  getUserStats,

  // 用户工具函数
  isLoggedIn,
  getCurrentToken,
  getCurrentUser,
  saveUserInfo,
  clearUserInfo,

  // 用户API对象
  userApi,

  // 类型定义
  type LoginRequest,
  type LoginResponse,
  type UserInfo,
  type UpdateUserRequest,
  type ChangePasswordRequest,
} from './api/userApi';

// 默认导出用户API作为主要API
export { userApi as default };

/**
 * 使用示例：
 *
 * 1. 基础使用：
 * ```typescript
 * import apiService from './services/apiService';
 *
 * // 登录
 * const response = await apiService.login({
 *   username: 'user',
 *   password: 'password'
 * });
 *
 * if (response.success) {
 *   console.log('登录成功:', response.data);
 * }
 *
 * // 获取用户信息
 * const userInfo = await apiService.getUserInfo();
 * ```
 *
 * 2. 使用通用请求方法：
 * ```typescript
 * import { get, post } from './services/apiService';
 *
 * // GET请求
 * const data = await get('/api/users');
 *
 * // POST请求
 * const result = await post('/api/users', { name: 'John' });
 * ```
 *
 * 3. 动态配置baseURL：
 * ```typescript
 * import { updateBaseURL } from './services/apiService';
 *
 * // 根据环境动态设置baseURL
 * if (process.env.NODE_ENV === 'development') {
 *   updateBaseURL('http://localhost:3000/api');
 * } else {
 *   updateBaseURL('https://api.example.com');
 * }
 * ```
 *
 * 4. 文件上传：
 * ```typescript
 * import { uploadFile } from './services/apiService';
 *
 * const fileInput = document.getElementById('avatar') as HTMLInputElement;
 * const file = fileInput.files?.[0];
 *
 * if (file) {
 *   const result = await uploadFile('/api/upload', file, 'avatar');
 * }
 * ```
 */

/**
 * 服务层初始化函数
 * 可以在应用启动时调用进行初始化配置
 */
export const initApiService = (config?: {
  baseURL?: string;
  timeout?: number;
  withCredentials?: boolean;
}) => {
  if (config?.baseURL) {
    updateBaseURL(config.baseURL);
  }

  console.log('API服务层已初始化', {
    baseURL: api.defaults.baseURL,
    timeout: api.defaults.timeout,
  });
};

/**
 * 服务层状态检查
 * 用于检查服务层是否正常工作
 */
export const checkApiServiceStatus = async (): Promise<{
  isReady: boolean;
  baseURL: string;
  hasToken: boolean;
}> => {
  const token = localStorage.getItem('auth_token');

  return {
    isReady: true,
    baseURL: api.defaults.baseURL as string,
    hasToken: !!token,
  };
};
