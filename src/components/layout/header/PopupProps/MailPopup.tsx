import React from 'react';
import { unreadMails } from '../constants';

interface MailPopupProps {
  isDark: boolean;
}

export const MailPopup: React.FC<MailPopupProps> = ({ isDark }) => {
  return (
    <div className={`w-72 p-4 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <div className="font-medium text-sm mb-3">未读邮件 ({unreadMails.length})</div>
      {unreadMails.map((mail, index) => (
        <div
          key={index}
          className="hover:bg-gray-100/10 dark:hover:bg-gray-800/50 p-3 rounded cursor-pointer"
        >
          {mail}
        </div>
      ))}
    </div>
  );
};