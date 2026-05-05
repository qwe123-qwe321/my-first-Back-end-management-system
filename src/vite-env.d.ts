// Vite环境类型声明文件：为第三方库（react-echarts）提供TypeScript类型声明，解决模块导入的类型检查问题
declare module 'react-echarts' {
  import { FC } from 'react';
  import { EChartsOption } from 'echarts';

  export interface ReactEChartsProps {
    option: EChartsOption;
    style?: React.CSSProperties;
    className?: string;
  }

  export const ReactECharts: FC<ReactEChartsProps>;
}
