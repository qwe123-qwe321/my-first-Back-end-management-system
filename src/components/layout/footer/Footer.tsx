// 页脚组件：显示版权信息和ICP备案号，固定在页面底部，提供简洁的页脚展示
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer
      className="
        h-12 px-6 flex items-center justify-between
        text-xs shrink-0
        border-t transition-colors duration-200
        bg-white border-gray-200 text-gray-400
      "
    >
      <div className="flex items-center gap-4">
        <span>KOG HUB Admin</span>
        <span className="text-gray-300">|</span>
        <span>王者荣耀后台管理系统</span>
      </div>
      <div className="flex items-center gap-2">
        <span>© {new Date().getFullYear()}</span>
        <span className="text-gray-300">·</span>
        <span>React 19 + TypeScript</span>
      </div>
    </footer>
  );
};

export default Footer;
