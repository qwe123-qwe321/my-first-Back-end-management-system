/**
 * 工具函数模块
 * 包含常用的工具函数，如日期格式化、深拷贝、防抖、节流、随机字符串生成和本地存储工具
 */

/**
 * 日期格式化函数
 * @param date 日期对象或时间戳
 * @param format 格式化模板，默认为 'YYYY-MM-DD HH:mm:ss'
 * @returns 格式化后的日期字符串
 *
 * @example
 * // 基本使用
 * formatDate(new Date()); // 2026-04-06 12:34:56
 *
 * // 自定义格式
 * formatDate(new Date(), 'DD/MM/YYYY'); // 06/04/2026
 * formatDate(new Date(), 'MM-DD-YYYY HH:mm'); // 04-06-2026 12:34
 */
export const formatDate = (
  date: Date | number | string,
  format: string = 'YYYY-MM-DD HH:mm:ss'
): string => {
  const d = new Date(date);

  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');

  return format
    .replace('YYYY', String(year))
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
};

/**
 * 深拷贝函数
 * @param obj 要拷贝的对象或数组
 * @returns 深拷贝后的对象或数组
 *
 * @example
 * const obj = { a: 1, b: { c: 2 } };
 * const copy = deepClone(obj);
 * copy.b.c = 3; // 不会影响原对象
 * console.log(obj.b.c); // 2
 */
export const deepClone = <T>(obj: T): T => {
  // 处理基本类型和null
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // 处理日期
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as unknown as T;
  }

  // 处理数组
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item)) as unknown as T;
  }

  // 处理对象
  if (typeof obj === 'object') {
    const clonedObj = {} as T;
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }

  return obj;
};

/**
 * 防抖函数
 * @param func 要执行的函数
 * @param delay 延迟时间（毫秒）
 * @returns 防抖后的函数
 *
 * @example
 * const debouncedFunc = debounce(() => {
 *   console.log('执行');
 * }, 1000);
 *
 * // 连续调用只会在最后一次调用后1秒执行
 * debouncedFunc();
 * debouncedFunc();
 * debouncedFunc(); // 只有这次会在1秒后执行
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

/**
 * 节流函数
 * @param func 要执行的函数
 * @param interval 时间间隔（毫秒）
 * @returns 节流后的函数
 *
 * @example
 * const throttledFunc = throttle(() => {
 *   console.log('执行');
 * }, 1000);
 *
 * // 1秒内多次调用只会执行一次
 * throttledFunc(); // 执行
 * throttledFunc(); // 不执行
 * throttledFunc(); // 不执行
 * // 1秒后
 * throttledFunc(); // 执行
 */
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  interval: number
): ((...args: Parameters<T>) => void) => {
  let lastTime = 0;

  return (...args: Parameters<T>) => {
    const currentTime = Date.now();
    if (currentTime - lastTime >= interval) {
      func(...args);
      lastTime = currentTime;
    }
  };
};

/**
 * 随机字符串生成器
 * @param length 字符串长度
 * @returns 指定长度的随机字符串（由字母和数字组成）
 *
 * @example
 * generateRandomString(8); // 'a1b2c3d4'
 * generateRandomString(12); // 'x7y8z9a0b1c2'
 */
export const generateRandomString = (length: number): string => {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }

  return result;
};

/**
 * 本地存储工具
 * 提供安全的本地存储操作，包含错误处理
 */
export const localStorageUtil = {
  /**
   * 将数据存储到本地存储中
   * @param key 存储键名
   * @param value 存储值（会自动序列化）
   *
   * @example
   * localStorageUtil.setItem('user', { name: 'John', age: 30 });
   */
  setItem: (key: string, value: unknown): void => {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  },

  /**
   * 从本地存储中获取数据
   * @param key 存储键名
   * @returns 存储的数据（会自动反序列化），如果不存在或出错则返回null
   *
   * @example
   * const user = localStorageUtil.getItem('user');
   * console.log(user); // { name: 'John', age: 30 }
   */
  getItem: <T>(key: string): T | null => {
    try {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue === null) {
        return null;
      }
      return JSON.parse(serializedValue) as T;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  },

  /**
   * 从本地存储中删除数据
   * @param key 存储键名
   *
   * @example
   * localStorageUtil.removeItem('user');
   */
  removeItem: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  },

  /**
   * 清空本地存储
   *
   * @example
   * localStorageUtil.clear();
   */
  clear: (): void => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  },

  /**
   * 检查本地存储是否可用
   * @returns 是否可用
   */
  isAvailable: (): boolean => {
    try {
      const testKey = '__localStorage_test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch {
      return false;
    }
  },
};

/**
 * 工具函数集合
 */
export const utils = {
  formatDate,
  deepClone,
  debounce,
  throttle,
  generateRandomString,
  localStorage: localStorageUtil,
};

export default utils;
