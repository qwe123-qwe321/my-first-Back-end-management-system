// 现代风格卡片组件：基于Ant Design Card封装的通用卡片容器，支持自定义样式、标题、操作栏和加载状态
import type { ReactNode } from 'react';
import { Card as AntdCard } from 'antd';

interface ModernCardProps {
  title?: ReactNode;
  extra?: ReactNode;
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  bordered?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export const ModernCard: React.FC<ModernCardProps> = ({
  title,
  extra,
  children,
  className = '',
  hoverable = true,
  bordered = false,
  loading = false,
  onClick,
}) => {
  return (
    <AntdCard
      title={title}
      extra={extra}
      loading={loading}
      onClick={onClick}
      hoverable={hoverable}
      bordered={bordered}
      className={`
        rounded-2xl! transition-all! duration-300!
        bg-white! border-gray-100! hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]! hover:border-blue-500/30!
        ${hoverable ? 'cursor-pointer! hover:transform! hover:-translate-y-0.5!' : ''}
        ${className}
      `}
      styles={{
        body: {
          padding: '20px 24px',
        },
        header: {
          padding: '16px 24px',
          borderBottom: '1px solid #f3f4f6',
        },
      }}
    >
      {children}
    </AntdCard>
  );
};

export default ModernCard;
