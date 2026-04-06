import React from 'react';
import { SiderLogo } from './SiderLogo';
import { SiderMenu } from './SiderMenu';
import { SiderCollapseBtn } from './SiderCollapseBtn';

interface SiderContentProps {
  collapsed: boolean;
  themeMode: 'dark' | 'light';
  onCollapse: () => void;
  selectedKey?: string;
  openKeys?: string[];
  onOpenChange?: (keys: string[]) => void;
}

export const SiderContent: React.FC<SiderContentProps> = ({
  collapsed,
  themeMode,
  onCollapse,
  selectedKey,
  openKeys,
  onOpenChange,
}) => {
  return (
    <>
      <SiderLogo collapsed={collapsed} />
      <SiderMenu
        themeMode={themeMode}
        selectedKey={selectedKey}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      />
      <SiderCollapseBtn
        collapsed={collapsed}
        themeMode={themeMode}
        onCollapse={onCollapse}
      />
    </>
  );
};
