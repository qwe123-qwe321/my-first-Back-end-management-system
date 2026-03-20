import { Button, List } from 'antd';
import React from 'react';
import { notificationList } from '../constants';

interface NotificationPopupProps {
  isDark: boolean;
}

export const NotificationPopup: React.FC<NotificationPopupProps> = ({ isDark }) => {
  return (
    <div className={`w-80 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <div className="px-4 py-3 border-b border-gray-700/50 font-medium text-sm flex justify-between">
        <span>通知</span>
        <span className="text-blue-400 cursor-pointer hover:underline">全部已读</span>
      </div>
      <List
        size="small"
        dataSource={notificationList}
        renderItem={(item) => (
          <List.Item className="px-4 py-3 hover:bg-gray-100/10 dark:hover:bg-gray-800/50 cursor-pointer flex gap-3">
            <div className={`w-7 h-7 rounded-full ${item.color} shrink-0`} />
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm line-clamp-1">{item.title}</div>
              <div className="text-xs text-gray-400 line-clamp-1">{item.desc}</div>
              <div className="text-xs text-gray-500 mt-1">{item.time}</div>
            </div>
          </List.Item>
        )}
      />
      <div className="p-3 border-t border-gray-700/50 flex justify-between text-xs">
        <Button type="link" size="small" className="text-gray-400">清空</Button>
        <Button type="primary" size="small">查看所有消息</Button>
      </div>
    </div>
  );
};