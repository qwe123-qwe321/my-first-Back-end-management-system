import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
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
