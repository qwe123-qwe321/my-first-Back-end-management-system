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
    <div className="flex items-center justify-between w-full gap-4 md:gap-6">
      <div className="flex-1 min-w-0">
        <TabManager />
      </div>

      <Space size={12} className="flex-shrink-0">
        <button
          onClick={toggleTheme}
          className={`
            p-2.5 rounded-xl cursor-pointer transition-all duration-300
            ${isDark
              ? 'text-yellow-400 hover:bg-yellow-400/10 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]'
              : 'text-gray-600 hover:bg-gray-600/10 hover:shadow-[0_0_20px_rgba(107,114,128,0.3)]'
            }
            active:scale-90
          `}
          title={isDark ? '切换到亮色模式' : '切换到暗黑模式'}
        >
          {isDark ? (
            <SunOutlined className="text-xl" />
          ) : (
            <MoonOutlined className="text-xl" />
          )}
        </button>

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
