import React from 'react';
import { SiderLogo } from './SiderLogo';
import { SiderMenu } from './SiderMenu';
import { SiderCollapseBtn } from './SiderCollapseBtn';

interface SiderContentProps {
  collapsed: boolean;
  themeMode: 'dark' | 'light';
  onCollapse: () => void;
}

export const SiderContent: React.FC<SiderContentProps> = ({ collapsed, themeMode, onCollapse }) => {
  return (
    <>
      <SiderLogo collapsed={collapsed} />
      <SiderMenu themeMode={themeMode} />
      <SiderCollapseBtn 
        collapsed={collapsed} 
        themeMode={themeMode} 
        onCollapse={onCollapse} 
      />
    </>
  );
};