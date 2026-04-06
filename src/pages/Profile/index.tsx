import React, { useState } from 'react';
import { message } from 'antd';
import { useUserStore } from '../../config/user/useUserStore';
import { ProfileHeader } from './components/ProfileHeader';
import { ProfileForm } from './components/ProfileForm';

const Profile: React.FC = () => {
  const { profile, updateProfile } = useUserStore();
  const [isEditing, setIsEditing] = useState(false);
  const [tempProfile, setTempProfile] = useState({ ...profile });

  // 处理编辑模式切换
  const handleEditToggle = () => {
    if (isEditing) {
      // 保存编辑
      updateProfile(tempProfile);
      message.success('个人资料已保存');
    } else {
      // 进入编辑模式
      setTempProfile({ ...profile });
    }
    setIsEditing(!isEditing);
  };

  // 处理输入变化
  const handleInputChange = (field: string, value: string) => {
    setTempProfile({
      ...tempProfile,
      [field]: value,
    });
  };

  // 处理头像变化
  const handleAvatarChange = (avatar: string) => {
    // 头像已经在useUserStore中更新，这里只需要触发重新渲染
    console.log('头像已更新:', avatar);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 p-4 md:p-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* 个人资料头部 */}
        <ProfileHeader
          isEditing={isEditing}
          onEditToggle={handleEditToggle}
          onAvatarChange={handleAvatarChange}
        />

        {/* 个人资料表单 */}
        <ProfileForm
          isEditing={isEditing}
          tempProfile={tempProfile}
          onInputChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Profile;
