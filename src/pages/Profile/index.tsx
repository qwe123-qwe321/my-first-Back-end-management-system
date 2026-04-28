import React, { useState } from 'react';
import { message } from 'antd';
import { useUserStore } from '../../config/user/useUserStore';
import { ProfileHeader } from './components/ProfileHeader';
import { ProfileForm } from './components/ProfileForm';

const Profile: React.FC = () => {
  const { profile, updateProfile } = useUserStore();
  const [isEditing, setIsEditing] = useState(false);
  const [tempProfile, setTempProfile] = useState({ ...profile });

  const handleEditToggle = () => {
    if (isEditing) {
      updateProfile({
        nickname: tempProfile.nickname,
        avatar: tempProfile.avatar,
        email: tempProfile.email,
        bio: tempProfile.bio,
        phone: tempProfile.phone,
        location: tempProfile.location,
        birthday: tempProfile.birthday,
        gender: tempProfile.gender,
      });
      message.success('个人资料已保存');
    } else {
      setTempProfile({ ...profile });
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (field: string, value: string) => {
    setTempProfile({
      ...tempProfile,
      [field]: value,
    });
  };

  const handleAvatarChange = (avatar: string) => {
    setTempProfile({
      ...tempProfile,
      avatar,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 p-4 md:p-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <ProfileHeader
          isEditing={isEditing}
          onEditToggle={handleEditToggle}
          onAvatarChange={handleAvatarChange}
        />

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
