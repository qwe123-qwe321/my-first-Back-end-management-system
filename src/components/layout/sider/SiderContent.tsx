// 侧边栏内容组件：组合Logo、菜单和折叠按钮，构成完整的侧边栏，管理折叠状态和菜单展开逻辑
import React from 'react';
import { SiderLogo } from './SiderLogo';
import { SiderMenu } from './SiderMenu';
import { SiderCollapseBtn } from './SiderCollapseBtn';

interface SiderContentProps {
  collapsed: boolean;
  onCollapse: () => void;
  selectedKey?: string;
  openKeys?: string[];
  onOpenChange?: (keys: string[]) => void;
}

export const SiderContent: React.FC<SiderContentProps> = ({
  collapsed,
  onCollapse,
  selectedKey,
  openKeys,
  onOpenChange,
}) => {
  return (
    <>
      <SiderLogo collapsed={collapsed} />
      <SiderMenu
        selectedKey={selectedKey}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      />
      <SiderCollapseBtn
        collapsed={collapsed}
        onCollapse={onCollapse}
      />
    </>
  );
};
