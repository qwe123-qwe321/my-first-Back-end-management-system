import { message } from 'antd';

export interface RequestConfig extends RequestInit {
  timeout?: number;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data: T;
  message?: string;
  code?: number;
}

class HttpRequest {
  private baseURL: string;
  private timeout: number;

  constructor(baseURL: string = '', timeout: number = 30000) {
    this.baseURL = baseURL;
    this.timeout = timeout;
  }

  private async request<T>(
    url: string,
    options: RequestConfig = {}
  ): Promise<ApiResponse<T>> {
    const { timeout = this.timeout, ...fetchOptions } = options;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(`${this.baseURL}${url}`, {
        ...fetchOptions,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          ...fetchOptions.headers,
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data as ApiResponse<T>;
    } catch (error) {
      clearTimeout(timeoutId);

      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error('请求超时');
        }
        throw error;
      }

      throw new Error('网络请求失败');
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
}

const isDev = import.meta.env.DEV;

export const http = new HttpRequest(
  isDev ? '' : window.location.origin,
  30000
);

export const createApiHandler = () => {
  const handleError = (error: unknown) => {
    if (error instanceof Error) {
      if (error.message === '请求超时') {
        message.error('请求超时，请稍后重试');
      } else if (error.message.includes('HTTP error')) {
        const status = parseInt(error.message.match(/\d+/)?.[0] || '0');
        switch (status) {
          case 401:
            message.error('未授权，请重新登录');
            break;
          case 403:
            message.error('无权限访问');
            break;
          case 404:
            message.error('请求的资源不存在');
            break;
          case 500:
            message.error('服务器错误');
            break;
          default:
            message.error('请求失败');
        }
      } else {
        message.error('网络错误，请检查网络连接');
      }
    } else {
      message.error('未知错误');
    }
    return null;
  };

  return {
    get<T>(url: string, params?: Record<string, string | number | boolean>) {
      return http.get<T>(url, params).catch(handleError);
    },
    post<T>(url: string, data?: unknown) {
      return http.post<T>(url, data).catch(handleError);
    },
    put<T>(url: string, data?: unknown) {
      return http.put<T>(url, data).catch(handleError);
    },
    delete<T>(url: string) {
      return http.delete<T>(url).catch(handleError);
    },
  };
};

export const api = createApiHandler();

export default api;
