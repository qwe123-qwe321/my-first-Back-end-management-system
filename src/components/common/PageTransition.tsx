import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
  mode?: 'fade' | 'slide' | 'scale' | 'none';
}

const transitionStyles: Record<string, React.CSSProperties> = {
  fade: {
    animation: 'pageFadeIn 0.3s ease-out',
  },
  slide: {
    animation: 'pageSlideIn 0.3s ease-out',
  },
  scale: {
    animation: 'pageScaleIn 0.25s ease-out',
  },
};

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  mode = 'fade',
}) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('enter');

  useEffect(() => {
    setTransitionStage('exit');
    const timer = setTimeout(() => {
      setDisplayLocation(location);
      setTransitionStage('enter');
    }, 200);

    return () => clearTimeout(timer);
  }, [location]);

  if (mode === 'none') {
    return <>{children}</>;
  }

  const isExiting = transitionStage === 'exit';
  const animationStyle = transitionStyles[mode] || transitionStyles.fade;

  return (
    <div
      style={{
        ...animationStyle,
        opacity: isExiting ? 0 : 1,
        transform: isExiting
          ? mode === 'slide'
            ? 'translateX(-20px)'
            : mode === 'scale'
            ? 'scale(0.98)'
            : undefined
          : undefined,
        transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
