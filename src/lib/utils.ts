// 通用工具函数库：提供className合并（cn）、深拷贝、防抖、日期格式化等常用工具函数
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
