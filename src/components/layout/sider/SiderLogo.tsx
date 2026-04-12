import React from 'react';

interface SiderLogoProps {
  collapsed: boolean;
}

export const SiderLogo: React.FC<SiderLogoProps> = React.memo(
  ({ collapsed }) => {
    return (
      <div className="h-16 flex items-center justify-center shrink-0 relative">
        <div
          className={`flex items-center gap-3 transition-all duration-300 ${
            collapsed ? 'scale-150' : 'scale-100'
          }`}
        >
          <div className="relative">
            <div className="w-10 h-10 bg-linear-to-br from-blue-500 via-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 animate-pulse-glow">
              <span className="text-white font-black text-lg">K</span>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-linear-to-r from-yellow-400 to-orange-500 rounded-full border-2 border-white dark:border-gray-800 animate-float" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-500 to-purple-500 font-black text-xl tracking-tighter leading-none">
                KOG HUB
              </span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400 tracking-widest uppercase">
                Admin System
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
);
