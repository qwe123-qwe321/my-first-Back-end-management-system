import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { api } from '../config/axiosConfig';

// 通用API响应接口
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  code?: number;
  timestamp?: number;
}

// 通用API错误接口
export interface ApiError {
  code: number;
  message: string;
  details?: unknown;
}

// HTTP方法类型
export type HttpMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'PATCH'
  | 'HEAD'
  | 'OPTIONS';

// 通用请求配置接口
export interface RequestConfig extends AxiosRequestConfig {
  showLoading?: boolean;
  showError?: boolean;
  retryCount?: number;
  retryDelay?: number;
}

// 默认请求配置
const DEFAULT_REQUEST_CONFIG: RequestConfig = {
  showLoading: true,
  showError: true,
  retryCount: 0,
  retryDelay: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
};

// 通用API请求方法
export const request = async <T = unknown>(
  method: HttpMethod,
  url: string,
  data?: unknown,
  config: RequestConfig = {}
): Promise<ApiResponse<T>> => {
  const mergedConfig: RequestConfig = {
    ...DEFAULT_REQUEST_CONFIG,
    ...config,
    method,
    url,
  };

  // 根据请求方法设置数据
  if (method === 'GET' || method === 'HEAD' || method === 'OPTIONS') {
    mergedConfig.params = data;
  } else {
    mergedConfig.data = data;
  }

  try {
    const response: AxiosResponse<ApiResponse<T>> =
      await api.request(mergedConfig);

    // 如果响应数据已经是ApiResponse格式，直接返回
    if (
      response.data &&
      typeof response.data === 'object' &&
      'success' in response.data
    ) {
      return response.data;
    }

    // 否则包装成ApiResponse格式
    return {
      success: true,
      data: response.data,
      code: response.status,
      timestamp: Date.now(),
    };
  } catch (error: unknown) {
    // 错误处理已经在拦截器中完成，这里只需要返回错误信息
    const err = error as Error & {
      response?: { status: number; data: { message: string } };
    };
    return {
      success: false,
      message: err.response?.data?.message || err.message || '请求失败',
      code: err.response?.status || 0,
      timestamp: Date.now(),
    };
  }
};

// 快捷方法：GET请求
export const get = <T = unknown>(
  url: string,
  params?: Record<string, unknown>,
  config: RequestConfig = {}
): Promise<ApiResponse<T>> => {
  return request<T>('GET', url, params, config);
};

// 快捷方法：POST请求
export const post = <T = unknown>(
  url: string,
  data?: unknown,
  config: RequestConfig = {}
): Promise<ApiResponse<T>> => {
  return request<T>('POST', url, data, config);
};

// 快捷方法：PUT请求
export const put = <T = unknown>(
  url: string,
  data?: unknown,
  config: RequestConfig = {}
): Promise<ApiResponse<T>> => {
  return request<T>('PUT', url, data, config);
};

// 快捷方法：DELETE请求
export const del = <T = unknown>(
  url: string,
  data?: unknown,
  config: RequestConfig = {}
): Promise<ApiResponse<T>> => {
  return request<T>('DELETE', url, data, config);
};

// 快捷方法：PATCH请求
export const patch = <T = unknown>(
  url: string,
  data?: unknown,
  config: RequestConfig = {}
): Promise<ApiResponse<T>> => {
  return request<T>('PATCH', url, data, config);
};

// 文件上传方法
export const uploadFile = async <T = unknown>(
  url: string,
  file: File,
  fieldName: string = 'file',
  additionalData: Record<string, unknown> = {},
  config: RequestConfig = {}
): Promise<ApiResponse<T>> => {
  const formData = new FormData();
  formData.append(fieldName, file);

  // 添加额外数据
  Object.keys(additionalData).forEach((key) => {
    formData.append(key, additionalData[key] as string | Blob);
  });

  const uploadConfig: RequestConfig = {
    ...config,
    headers: {
      ...config.headers,
      'Content-Type': 'multipart/form-data',
    },
  };

  return post<T>(url, formData, uploadConfig);
};

// 批量请求方法
export const batchRequest = async <T = unknown>(
  requests: Array<{
    method: HttpMethod;
    url: string;
    data?: unknown;
    config?: RequestConfig;
  }>
): Promise<ApiResponse<T>[]> => {
  const promises = requests.map((req) =>
    request<T>(req.method, req.url, req.data, req.config)
  );

  return Promise.all(promises);
};

// 创建取消令牌
export const createCancelToken = () => {
  const source = api.CancelToken.source();
  return {
    token: source.token,
    cancel: source.cancel,
  };
};

// 验证响应是否成功
export const isSuccessResponse = <T>(response: ApiResponse<T>): boolean => {
  return response.success === true;
};

// 从响应中提取数据
export const extractData = <T>(response: ApiResponse<T>): T | undefined => {
  return response.data;
};

// 从响应中提取错误信息
export const extractErrorMessage = (response: ApiResponse): string => {
  return response.message || '未知错误';
};
