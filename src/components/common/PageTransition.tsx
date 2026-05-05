// 页面过渡动画组件：基于路由变化触发页面切换动画，使用CSS过渡实现页面内容的淡入淡出效果
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShouldRender(false);
    const timer = setTimeout(() => setShouldRender(true), 50);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!shouldRender) return null;

  return (
    <div className="animate-fadeIn">
      {children}
    </div>
  );
};

export default PageTransition;
