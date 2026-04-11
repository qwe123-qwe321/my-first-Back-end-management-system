import { Button, List } from 'antd';
import React from 'react';
import { notificationList } from '../constants';
import { useAppStore } from '../../../../store/appStore';

export const NotificationPopup: React.FC = () => {
  const isDark = useAppStore((state) => state.isDark);

  return (
    <div
      className={`w-80 ${isDark ? 'bg-[#1a1a1a] text-gray-200' : 'bg-white text-gray-900'}`}
    >
      <div className={`px-4 py-3 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'} font-medium text-sm flex justify-between`}>
        <span>通知</span>
        <span className="text-blue-400 cursor-pointer hover:underline">
          全部已读
        </span>
      </div>
      <List
        size="small"
        dataSource={notificationList}
        renderItem={(item) => (
          <List.Item className={`px-4 py-3 hover:bg-gray-100/10 cursor-pointer flex gap-3 ${isDark ? 'hover:bg-gray-800/50' : ''}`}>
            <div className={`w-7 h-7 rounded-full ${item.color} shrink-0`} />
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm line-clamp-1">
                {item.title}
              </div>
              <div className={`text-xs line-clamp-1 ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>
                {item.desc}
              </div>
              <div className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{item.time}</div>
            </div>
          </List.Item>
        )}
      />
      <div className={`p-3 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} flex justify-between text-xs`}>
        <Button type="link" size="small" className={isDark ? 'text-gray-400' : 'text-gray-400'}>
          清空
        </Button>
        <Button type="primary" size="small">
          查看所有消息
        </Button>
      </div>
    </div>
  );
};
