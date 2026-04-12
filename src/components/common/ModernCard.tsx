import React from 'react';
import { Card as AntdCard } from 'antd';
import { useAppStore } from '../../store/appStore';

interface ModernCardProps {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
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
  bodyClassName = '',
  hoverable = true,
  bordered = false,
  loading = false,
  onClick,
}) => {
  const isDark = useAppStore((state) => state.isDark);

  return (
    <AntdCard
      title={title}
      extra={extra}
      loading={loading}
      onClick={onClick}
      hoverable={hoverable}
      bordered={bordered}
      className={`
        !rounded-2xl !transition-all !duration-300
        ${
          isDark
            ? '!bg-[#1a1a1a] !border-gray-800 hover:!shadow-[0_8px_30px_rgba(96,165,250,0.15)] hover:!border-blue-500/30'
            : '!bg-white !border-gray-100 hover:!shadow-[0_8px_30px_rgba(59,130,246,0.15)] hover:!border-blue-500/30'
        }
        ${hoverable ? '!cursor-pointer hover:!transform hover:!translate-y-[-2px]' : ''}
        ${className}
      `}
      styles={{
        body: {
          padding: '20px 24px',
          className: bodyClassName,
        },
        header: {
          padding: '16px 24px',
          borderBottom: isDark ? '1px solid #374151' : '1px solid #f3f4f6',
        },
      }}
    >
      {children}
    </AntdCard>
  );
};

export default ModernCard;
