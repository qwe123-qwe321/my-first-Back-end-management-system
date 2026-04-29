import React from 'react';
import { useNavigate } from 'react-router-dom';

interface SiderLogoProps {
  collapsed: boolean;
}

export const SiderLogo: React.FC<SiderLogoProps> = React.memo(({ collapsed }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate('/dashboard')}
      className="
        h-16 flex items-center justify-center gap-3
        cursor-pointer select-none
        border-b border-gray-200
        bg-white
        transition-all duration-300 ease-out
        group
      "
    >
      <div
        className="
          w-8 h-8 rounded-xl flex items-center justify-center
          bg-gradient-to-br from-blue-500 to-purple-600
          shadow-lg shadow-blue-500/20
          transition-all duration-300 ease-out
          group-hover:shadow-blue-500/40 group-hover:scale-105
        "
      >
        <span className="text-white font-bold text-sm">K</span>
      </div>

      {!collapsed && (
        <div className="flex flex-col transition-all duration-300 ease-out">
          <span className="text-sm font-bold text-gray-900 leading-tight">
            KOG HUB
          </span>
          <span className="text-[10px] text-gray-500 leading-tight">
            Admin
          </span>
        </div>
      )}
    </div>
  );
});

export default SiderLogo;
