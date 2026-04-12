import React from 'react';
import { useAppStore } from '../../../store/appStore';

export const Footer: React.FC = () => {
  const isDark = useAppStore((state) => state.isDark);

  return (
    <footer
      className={`
        h-12 px-6 flex items-center justify-between
        text-xs shrink-0
        border-t transition-colors duration-200
        ${isDark
          ? 'bg-[#1a1a1a] border-gray-800 text-gray-500'
          : 'bg-white border-gray-200 text-gray-400'
        }
      `}
    >
      <div className="flex items-center gap-4">
        <span>KOG HUB Admin</span>
        <span className={isDark ? 'text-gray-700' : 'text-gray-300'}>|</span>
        <span>王者荣耀后台管理系统</span>
      </div>
      <div className="flex items-center gap-2">
        <span>© {new Date().getFullYear()}</span>
        <span className={isDark ? 'text-gray-600' : 'text-gray-300'}>·</span>
        <span>React 19 + TypeScript</span>
      </div>
    </footer>
  );
};

export default Footer;
