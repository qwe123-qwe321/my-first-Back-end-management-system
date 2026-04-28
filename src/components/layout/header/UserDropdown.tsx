import { useState } from 'react';
import { Avatar, Popover } from 'antd';
import { LogoutOutlined, SettingOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../../store/appStore';
import { useUserStore } from '../../../config/user/useUserStore';

export const UserDropdown: React.FC = () => {
  const isDark = useAppStore((state) => state.isDark);
  const profile = useUserStore((state) => state.profile);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  if (!profile) {
    return null;
  }

  const handleLogout = () => {
    useAppStore.getState().logout();
    navigate('/login');
    setOpen(false);
  };

  const menuItems = [
    {
      key: 'settings',
      label: '账号设置',
      icon: <SettingOutlined className="text-base" />,
      action: () => {
        navigate('/settings');
        setOpen(false);
      },
      color: 'text-purple-500',
    },
    {
      key: 'about',
      label: '关于',
      icon: <InfoCircleOutlined className="text-base" />,
      action: () => {
        navigate('/about');
        setOpen(false);
      },
      color: 'text-blue-500',
    },
  ];

  return (
    <Popover
      content={
        <div
          className={`w-56 rounded-lg overflow-hidden ${
            isDark ? 'bg-[#1a1a1a]' : 'bg-white'
          }`}
        >
          <div
            className={`px-4 py-4 border-b ${
              isDark ? 'border-gray-700' : 'border-gray-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <Avatar
                size={48}
                src={profile.avatar}
                className="border-2 border-blue-500"
              />
              <div className="flex-1 min-w-0">
                <div
                  className={`font-semibold text-base truncate ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {profile.nickname}
                </div>
                <div
                  className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  等级: Lv.{profile.level}
                </div>
              </div>
            </div>
          </div>

          <div className="py-2">
            {menuItems.map((item) => (
              <div
                key={item.key}
                onClick={item.action}
                className={`px-4 py-3 cursor-pointer transition-all duration-200 flex items-center gap-3 hover:${
                  isDark ? 'bg-gray-800' : 'bg-gray-50'
                } ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}
              >
                <span className={item.color}>{item.icon}</span>
                <span
                  className={`font-medium ${
                    isDark ? 'text-gray-200' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div
            className={`px-4 py-3 border-t cursor-pointer transition-all duration-200 flex items-center gap-3 hover:${
              isDark ? 'bg-red-900/20 border-gray-700' : 'bg-red-50 border-gray-200'
            } border-t ${
              isDark ? 'border-gray-700' : 'border-gray-200'
            } hover:bg-red-50 dark:hover:bg-red-900/20`}
            onClick={handleLogout}
          >
            <span className="text-red-500">
              <LogoutOutlined className="text-base" />
            </span>
            <span className="font-medium text-red-500">退出登录</span>
          </div>
        </div>
      }
      trigger="click"
      open={open}
      onOpenChange={setOpen}
      placement="bottomRight"
      overlayInnerStyle={{
        padding: 0,
        borderRadius: '12px',
        overflow: 'hidden',
        ...(isDark
          ? { background: '#1a1a1a', border: '1px solid #374151' }
          : { background: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }),
      }}
    >
      <div className="flex items-center gap-3 cursor-pointer group min-w-0">
        <div className="text-right hidden sm:block truncate max-w-40">
          <div
            className={`text-base font-semibold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {profile.nickname}
          </div>
          <div
            className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            等级:Lv.{profile.level}
          </div>
        </div>
        <Avatar
          size="large"
          src={profile.avatar}
          className={`border-2 transition-colors cursor-pointer ${
            isDark ? 'border-gray-600 group-hover:border-blue-400' : 'border-gray-300 group-hover:border-blue-500'
          }`}
        />
      </div>
    </Popover>
  );
};
