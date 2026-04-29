import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export const NavigationButtons: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => navigate(-1)}
        className="
          w-8 h-8 flex items-center justify-center
          rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100
          transition-all duration-200
        "
      >
        <LeftOutlined className="text-sm" />
      </button>
      <button
        onClick={() => navigate(1)}
        className="
          w-8 h-8 flex items-center justify-center
          rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100
          transition-all duration-200
        "
      >
        <RightOutlined className="text-sm" />
      </button>
    </div>
  );
};
