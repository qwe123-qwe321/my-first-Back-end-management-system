import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';
import { message } from 'antd';

// 基础配置接口
export interface ApiConfig {
  baseURL: string;
  timeout: number;
  withCredentials: boolean;
}

// 默认配置
const DEFAULT_CONFIG: ApiConfig = {
  baseURL: 'https://api.example.com', // 可以动态配置
  timeout: 10000, // 10秒超时
  withCredentials: true,
};

// 创建Axios实例
const createAxiosInstance = (
  config: Partial<ApiConfig> = {}
): AxiosInstance => {
  const instance = axios.create({
    ...DEFAULT_CONFIG,
    ...config,
  });

  return instance;
};

// 获取Token的函数
const getAuthToken = (): string | null => {
  try {
    // 从localStorage获取token
    return localStorage.getItem('auth_token');
  } catch (error) {
    console.error('获取Token失败:', error);
    return null;
  }
};

// 设置Token的函数
export const setAuthToken = (token: string): void => {
  try {
    localStorage.setItem('auth_token', token);
  } catch (error) {
    console.error('设置Token失败:', error);
  }
};

// 清除Token的函数
export const clearAuthToken = (): void => {
  try {
    localStorage.removeItem('auth_token');
  } catch (error) {
    console.error('清除Token失败:', error);
  }
};

// 请求拦截器
const setupRequestInterceptor = (instance: AxiosInstance): void => {
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      // 动态获取并添加Authorization Token
      const token = getAuthToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      // 打印请求信息便于调试
      console.log(
        `[API Request] ${config.method?.toUpperCase()} ${config.url}`
      );
      if (config.params) {
        console.log('[Request Params]:', config.params);
      }
      if (config.data) {
        console.log('[Request Data]:', config.data);
      }

      return config;
    },
    (error: AxiosError) => {
      console.error('[Request Error]:', error);
      return Promise.reject(error);
    }
  );
};

// 响应拦截器
const setupResponseInterceptor = (instance: AxiosInstance): void => {
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      // 打印响应信息便于调试
      console.log(`[API Response] ${response.status} ${response.config.url}`);
      console.log('[Response Data]:', response.data);

      return response;
    },
    (error: AxiosError) => {
      const { response } = error;

      if (response) {
        console.error(`[API Error] ${response.status} ${response.config?.url}`);
        console.error('[Error Data]:', response.data);

        switch (response.status) {
          case 401:
            // 未授权，跳转到登录页面
            message.error('登录已过期，请重新登录');
            clearAuthToken();

            // 使用setTimeout避免在拦截器中直接使用hook
            setTimeout(() => {
              window.location.href = '/login';
            }, 1000);
            break;

          case 403:
            message.error('权限不足，无法访问该资源');
            break;

          case 404:
            message.error('请求的资源不存在');
            break;

          case 500:
            message.error('服务器内部错误，请稍后重试');
            break;

          default:
            message.error(
              `请求失败: ${response.status} ${response.statusText}`
            );
        }
      } else if (error.request) {
        // 请求已发出但没有收到响应
        console.error('[Network Error]:', error.request);
        message.error('网络连接失败，请检查网络设置');
      } else {
        // 请求配置出错
        console.error('[Request Config Error]:', error.message);
        message.error('请求配置错误');
      }

      return Promise.reject(error);
    }
  );
};

// 创建并配置Axios实例
export const createApiInstance = (
  config: Partial<ApiConfig> = {}
): AxiosInstance => {
  const instance = createAxiosInstance(config);
  setupRequestInterceptor(instance);
  setupResponseInterceptor(instance);
  return instance;
};

// 默认的API实例
export const api = createApiInstance();

// 动态更新baseURL的函数
export const updateBaseURL = (newBaseURL: string): void => {
  api.defaults.baseURL = newBaseURL;
};

export default api;
