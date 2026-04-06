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
