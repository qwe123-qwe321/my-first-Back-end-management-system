import { message } from 'antd';
import { useAppStore } from '../store/appStore';

export interface RequestConfig extends RequestInit {
  timeout?: number;
  loading?: boolean;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data: T;
  message?: string;
  code?: number;
}

export interface RequestError extends Error {
  status?: number;
  response?: Response;
}

const errorMessages: Record<number, string> = {
  400: '请求参数错误',
  401: '未授权，请重新登录',
  403: '无权限访问',
  404: '请求的资源不存在',
  500: '服务器错误',
  502: '网关错误',
  503: '服务不可用',
  504: '网关超时',
  network: '网络错误，请检查网络连接',
  timeout: '请求超时，请稍后重试',
};

class HttpRequest {
  private baseURL: string;
  private timeout: number;
  private loadingCount = 0;

  constructor(baseURL: string = '', timeout: number = 30000) {
    this.baseURL = baseURL;
    this.timeout = timeout;
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    const token = useAppStore.getState().token;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  }

  private handleError(error: RequestError): never {
    let errorMsg = error.message;

    if (error.status) {
      errorMsg = errorMessages[error.status] || errorMessages[500];
    } else if (errorMsg.includes('AbortError')) {
      errorMsg = errorMessages.timeout;
    } else if (errorMsg.includes('fetch')) {
      errorMsg = errorMessages.network;
    }

    message.error(errorMsg);
    throw error;
  }

  private async request<T>(
    url: string,
    options: RequestConfig = {}
  ): Promise<ApiResponse<T>> {
    const { timeout = this.timeout, loading = true, ...fetchOptions } = options;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    if (loading) {
      this.loadingCount++;
    }

    try {
      const response = await fetch(`${this.baseURL}${url}`, {
        ...fetchOptions,
        signal: controller.signal,
        headers: {
          ...this.getHeaders(),
          ...fetchOptions.headers,
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const error: RequestError = new Error(`HTTP error! status: ${response.status}`);
        error.status = response.status;
        error.response = response;
        throw error;
      }

      const data = await response.json();
      return data as ApiResponse<T>;
    } catch (error) {
      clearTimeout(timeoutId);
      if (loading) {
        this.loadingCount = Math.max(0, this.loadingCount - 1);
      }

      if (error instanceof Error) {
        const requestError: RequestError = error;
        if (error.name === 'AbortError') {
          requestError.status = undefined;
        }
        this.handleError(requestError);
      }
      throw error;
    } finally {
      if (loading) {
        this.loadingCount = Math.max(0, this.loadingCount - 1);
      }
    }
  }

  public async get<T>(
    url: string,
    params?: Record<string, string | number | boolean>,
    options?: RequestConfig
  ): Promise<ApiResponse<T>> {
    let queryString = '';
    if (params) {
      queryString = new URLSearchParams(
        params as Record<string, string>
      ).toString();
      url = queryString ? `${url}?${queryString}` : url;
    }
    return this.request<T>(url, { ...options, method: 'GET' });
  }

  public async post<T>(
    url: string,
    data?: unknown,
    options?: RequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>(url, {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  public async put<T>(
    url: string,
    data?: unknown,
    options?: RequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>(url, {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  public async delete<T>(
    url: string,
    options?: RequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>(url, { ...options, method: 'DELETE' });
  }

  public get isLoading(): boolean {
    return this.loadingCount > 0;
  }
}

const isDev = import.meta.env.DEV;

export const http = new HttpRequest(
  isDev ? '' : window.location.origin,
  30000
);

export const createApiHandler = () => {
  return {
    get<T>(url: string, params?: Record<string, string | number | boolean>, options?: RequestConfig) {
      return http.get<T>(url, params, options);
    },
    post<T>(url: string, data?: unknown, options?: RequestConfig) {
      return http.post<T>(url, data, options);
    },
    put<T>(url: string, data?: unknown, options?: RequestConfig) {
      return http.put<T>(url, data, options);
    },
    delete<T>(url: string, options?: RequestConfig) {
      return http.delete<T>(url, options);
    },
  };
};

export const api = createApiHandler();

export default api;
