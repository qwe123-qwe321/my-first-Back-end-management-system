import React, { useState, useEffect } from 'react';
import { message } from 'antd';
import { useUserStore } from '../../config/user/useUserStore';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ProfileHeader } from './components/ProfileHeader';
import { ProfileForm } from './components/ProfileForm';
import type { ProfileData } from '../../mocks/handlers';

const fetchProfile = async (): Promise<ProfileData> => {
  const res = await fetch('/api/user/profile');
  const data = await res.json();
  return data.data;
};

const updateProfile = async (profile: Partial<ProfileData>): Promise<ProfileData> => {
  const res = await fetch('/api/user/profile', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(profile),
  });
  const data = await res.json();
  return data.data;
};

const Profile: React.FC = () => {
  const { profile, updateProfile: updateStoreProfile } = useUserStore();
  const [isEditing, setIsEditing] = useState(false);
  const [tempProfile, setTempProfile] = useState({ ...profile });

  const queryClient = useQueryClient();

  const { data: serverProfile, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile,
    enabled: import.meta.env.DEV,
  });

  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: (newProfile) => {
      queryClient.setQueryData(['profile'], newProfile);
      updateStoreProfile({
        nickname: newProfile.nickname,
        avatar: newProfile.avatar,
        level: newProfile.level,
        email: newProfile.email,
        bio: newProfile.bio,
      });
      message.success('个人资料已保存');
    },
  });

  useEffect(() => {
    if (serverProfile && import.meta.env.DEV) {
      const updatedTemp = {
        ...tempProfile,
        nickname: serverProfile.nickname,
        avatar: serverProfile.avatar,
        email: serverProfile.email || tempProfile.email,
        bio: serverProfile.bio || tempProfile.bio,
      };
      setTempProfile(updatedTemp);
    }
  }, [serverProfile]);

  const handleEditToggle = () => {
    if (isEditing) {
      const updatedProfile = {
        nickname: tempProfile.nickname,
        avatar: tempProfile.avatar,
        email: tempProfile.email,
        bio: tempProfile.bio,
      };

      if (import.meta.env.DEV) {
        mutation.mutate(updatedProfile);
      } else {
        updateStoreProfile(updatedProfile);
        message.success('个人资料已保存');
      }
    } else {
      if (import.meta.env.DEV && serverProfile) {
        const initialTemp = {
          ...tempProfile,
          nickname: serverProfile.nickname,
          avatar: serverProfile.avatar,
          email: serverProfile.email || tempProfile.email,
          bio: serverProfile.bio || tempProfile.bio,
        };
        setTempProfile(initialTemp);
      } else {
        setTempProfile({ ...profile });
      }
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

  if (isLoading && import.meta.env.DEV) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

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
