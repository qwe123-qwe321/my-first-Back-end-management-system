import React from 'react';

interface PlaceholderProps {
  name: string;
}

export const Placeholder: React.FC<PlaceholderProps> = ({ name }) => (
  <div className="flex items-center justify-center h-full">
    <div className="text-xl text-gray-500">{name}页面开发中...</div>
  </div>
);