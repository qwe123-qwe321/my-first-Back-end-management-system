// 头部内容组件：整合导航按钮、标签页管理器、消息图标、主题面板和用户下拉菜单，构成完整的顶部导航栏
import { Space } from 'antd';
import { BellOutlined, CommentOutlined, MailFilled } from '@ant-design/icons';
import React from 'react';
import { TabManager } from '../header/TabManager';
import { MessageIcon } from '../header/MessageIcon';
import { UserDropdown } from '../header/UserDropdown';
import { ThemePanel } from '../../common/ThemePanel';
import { NotificationPopup } from './PopupProps/NotificationPopup';
import { CommentPopup } from './PopupProps/CommentPopup';
import { MailPopup } from './PopupProps/MailPopup';
import { messageConfig } from './constants';

export const HeaderContent: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full gap-4 md:gap-6">
      <div className="flex-1 min-w-0">
        <TabManager />
      </div>

      <Space size={12} className="shrink-0">
        <ThemePanel />

        <MessageIcon
          icon={<BellOutlined />}
          count={messageConfig.notification.count}
          content={<NotificationPopup />}
        />
        <MessageIcon
          icon={<CommentOutlined />}
          count={messageConfig.comment.count}
          content={<CommentPopup />}
        />
        <MessageIcon
          icon={<MailFilled />}
          count={messageConfig.mail.count}
          content={<MailPopup />}
        />

        <UserDropdown />
      </Space>
    </div>
  );
};
