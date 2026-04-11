import { Space } from 'antd';
import { BellOutlined, CommentOutlined, MailFilled, SunOutlined, MoonOutlined } from '@ant-design/icons';
import React from 'react';
import { TabManager } from '../header/TabManager';
import { MessageIcon } from '../header/MessageIcon';
import { UserDropdown } from '../header/UserDropdown';
import { NotificationPopup } from './PopupProps/NotificationPopup';
import { CommentPopup } from './PopupProps/CommentPopup';
import { MailPopup } from './PopupProps/MailPopup';
import { messageConfig } from './constants';
import { useAppStore } from '../../../store/appStore';

export const HeaderContent: React.FC = () => {
  const isDark = useAppStore((state) => state.isDark);
  const toggleTheme = useAppStore((state) => state.toggleTheme);

  return (
    <div className="flex items-center justify-between w-full gap-6">
      {/* 左侧：标签页管理器 */}
      <TabManager />

      {/* 右侧 */}
      <Space size={16}>
        <div
          onClick={toggleTheme}
          className={`p-2 rounded-full cursor-pointer transition-colors ${isDark ? 'text-yellow-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-200'}`}
        >
          {isDark ? <SunOutlined className="text-xl" /> : <MoonOutlined className="text-xl" />}
        </div>
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
