import { Space } from 'antd';
import { BellOutlined, CommentOutlined, MailFilled } from '@ant-design/icons';
import React from 'react';
import { ThemeToggle } from '../../common/ThemeToggle';
import { NavigationButtons } from '../header/NavigationButtons';
import { MessageIcon } from '../header/MessageIcon';
import { UserDropdown } from '../header/UserDropdown';
import { NotificationPopup } from './PopupProps/NotificationPopup';
import { CommentPopup } from './PopupProps/CommentPopup';
import { MailPopup } from './PopupProps/MailPopup';
import { messageConfig } from './constants';

interface HeaderContentProps {
  themeMode: 'dark' | 'light';
  toggleTheme: () => void;
}

export const HeaderContent: React.FC<HeaderContentProps> = ({
  themeMode,
  toggleTheme,
}) => {
  const isDark = themeMode === 'dark';

  return (
    <div className="flex items-center justify-between w-full gap-6">
      {/* 左侧：箭头 + 更新按钮 */}
      <NavigationButtons isDark={isDark} />

      {/* 右侧 */}
      <Space size={16}>
        <ThemeToggle mode={themeMode} onToggle={toggleTheme} />

        <MessageIcon
          icon={<BellOutlined />}
          count={messageConfig.notification.count}
          content={<NotificationPopup isDark={isDark} />}
          isDark={isDark}
        />
        <MessageIcon
          icon={<CommentOutlined />}
          count={messageConfig.comment.count}
          content={<CommentPopup isDark={isDark} />}
          isDark={isDark}
        />
        <MessageIcon
          icon={<MailFilled />}
          count={messageConfig.mail.count}
          content={<MailPopup isDark={isDark} />}
          isDark={isDark}
        />

        <UserDropdown isDark={isDark} />
      </Space>
    </div>
  );
};
