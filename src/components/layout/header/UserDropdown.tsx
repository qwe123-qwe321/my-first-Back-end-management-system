// src/components/UserDropdown.tsx
import { useState } from 'react';
import { Avatar, Popover, List } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../../config/user/useUserStore';

export const UserDropdown: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { profile } = useUserStore();

  const popoverContent = (
    <List
      size="small"
      bordered={false}
      dataSource={[
        {
          title: '个人主页',
          icon: <UserOutlined />,
          action: () => navigate('/settings'),
        },
        {
          title: '退出登录',
          icon: <LogoutOutlined />,
          action: () => navigate('/login'),
        },
      ]}
      renderItem={(item) => (
        <List.Item
          className="cursor-pointer hover:bg-gray-100/20 px-4 py-2 transition-colors text-gray-900"
          onClick={() => {
            item.action();
            setOpen(false);
          }}
        >
          <div className="flex items-center gap-3">
            {item.icon}
            <span>{item.title}</span>
          </div>
        </List.Item>
      )}
    />
  );

  return (
    <Popover
      content={popoverContent}
      trigger="click"
      open={open}
      onOpenChange={setOpen}
      placement="bottomRight"
    >
      <div className="flex items-center gap-3 cursor-pointer group min-w-0">
        <div className="text-right hidden sm:block truncate max-w-40">
          <div
            className="text-base font-semibold text-gray-900"
          >
            {profile.nickname}
          </div>
          <div
            className="text-xs text-gray-600"
          >
            等级:Lv.{profile.level}
          </div>
        </div>
        <Avatar
          size="large"
          src={profile.avatar}
          className="border-2 transition-colors cursor-pointer border-gray-300 group-hover:border-blue-500"
        />
      </div>
    </Popover>
  );
};
