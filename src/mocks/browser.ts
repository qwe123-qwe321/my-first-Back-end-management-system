// MSW浏览器端配置：初始化Mock Service Worker，注册所有API模拟处理器，用于开发环境的前端接口模拟
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);
