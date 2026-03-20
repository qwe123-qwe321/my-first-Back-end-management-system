// src/components/UserDropdown.tsx
import { useState } from 'react';
import { Avatar, Popover, List } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

interface UserDropdownProps {
  isDark: boolean;
}

export const UserDropdown: React.FC<UserDropdownProps> = ({ isDark }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const popoverContent = (
    <List
      size="small"
      bordered={false}
      dataSource={[
        { title: '个人主页', icon: <UserOutlined />, action: () => navigate('/settings') },
        { title: '退出登录', icon: <LogoutOutlined />, action: () => navigate('/login') },
      ]}
      renderItem={(item) => (
        <List.Item
          className={`cursor-pointer hover:bg-gray-100/20 dark:hover:bg-gray-800/50 px-4 py-2 transition-colors ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
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
      overlayClassName={`${isDark ? 'dark-popover' : ''}`}
    >
      <div className="flex items-center gap-3 cursor-pointer group min-w-0">
        <div className="text-right hidden sm:block truncate max-w-40">
          <div className={`text-base font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            转角吻猪
          </div>
          <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            等级:无双王者
          </div>
        </div>
        <Avatar
          size="large"
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
          className={`border-2 transition-colors cursor-pointer ${
            isDark ? 'border-gray-400 group-hover:border-blue-400' : 'border-gray-300 group-hover:border-blue-500'
          }`}
        />
      </div>
    </Popover>
  );
};