import { lazy, Suspense } from 'react';

const TrendChart = lazy(() => import('./TrendChart'));
const SourceChart = lazy(() => import('./SourceChart'));
const WorldviewChart = lazy(() => import('./WorldviewChart'));

const ChartSkeleton = () => (
  <div className="h-87.5 w-full animate-pulse">
    <div className="h-full bg-gray-200 rounded-lg" />
  </div>
);

interface DynamicChartProps {
  type: 'trend' | 'source' | 'worldview';
  time: string;
  hero: string;
  channel: string;
}

export const DynamicChart: React.FC<DynamicChartProps> = ({
  type,
  time,
  hero,
  channel,
}) => {
  const renderChart = () => {
    switch (type) {
      case 'trend':
        return <TrendChart time={time} hero={hero} channel={channel} />;
      case 'source':
        return <SourceChart time={time} hero={hero} channel={channel} />;
      case 'worldview':
        return <WorldviewChart time={time} hero={hero} channel={channel} />;
      default:
        return null;
    }
  };

  return (
    <Suspense fallback={<ChartSkeleton />}>
      {renderChart()}
    </Suspense>
  );
};

export default DynamicChart;
