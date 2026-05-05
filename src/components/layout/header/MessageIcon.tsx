// 消息图标组件：集成通知、评论、邮件三个消息入口的图标按钮，显示未读数量徽标，点击弹出对应详情面板
import { Badge, Popover } from 'antd';
import React from 'react';

interface MessageIconProps {
  icon: React.ReactNode;
  count: number;
  content: React.ReactNode;
}

export const MessageIcon: React.FC<MessageIconProps> = React.memo(
  ({ icon, count, content }) => {
    return (
      <Popover
        content={content}
        trigger="click"
        placement="bottomRight"
        overlayStyle={{
          background: '#fff',
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
          boxShadow: '0 8px 30px rgba(59,130,246,0.15)',
        }}
      >
        <Badge
          count={count}
          size="small"
          offset={[-2, 2]}
          style={{
            backgroundColor: count > 0 ? '#ef4444' : 'transparent',
            boxShadow: count > 0 ? '0 0 0 2px white' : 'none',
          }}
        >
          <span
            className="
              text-xl rounded-xl p-2 cursor-pointer transition-all duration-200
              text-gray-600 hover:text-gray-900 hover:bg-gray-100
              hover:scale-110 active:scale-95
            "
          >
            {icon}
          </span>
        </Badge>
      </Popover>
    );
  }
);
