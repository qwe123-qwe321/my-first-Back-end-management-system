// 个人资料头部组件：展示用户头像、昵称和基本信息，支持头像上传和预览功能
import React, { useRef } from 'react';
import { EditOutlined, UploadOutlined } from '@ant-design/icons';
import { useUserStore } from '../../../config/user/useUserStore';

interface ProfileHeaderProps {
  isEditing: boolean;
  onEditToggle: () => void;
  onAvatarChange: (avatar: string) => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  isEditing,
  onEditToggle,
  onAvatarChange,
}) => {
  const { profile, heroCount, skinCount, winRate, playTime, updateAvatar } = useUserStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const experienceProgress = (profile.experience % 1000) / 10;

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      alert('只能上传图片文件！');
      return;
    }

    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      alert('图片大小不能超过2MB！');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const newAvatar = reader.result as string;
      updateAvatar(newAvatar);
      onAvatarChange(newAvatar);
      alert('头像上传成功！');
    };

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-6 mb-6 border border-blue-100">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="relative group">
          <div className="relative">
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt="用户头像"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
            ) : (
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">
                  {profile.nickname.charAt(0)}
                </span>
              </div>
            )}
            {!isEditing && (
              <div className="absolute inset-0 bg-black/50 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <EditOutlined className="text-white text-xl mb-1" />
                <span className="text-white text-xs">点击编辑更换头像</span>
              </div>
            )}
          </div>

          {isEditing && (
            <div className="mt-4">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleAvatarUpload}
                accept="image/*"
                className="hidden"
                id="avatar-upload"
              />
              <label
                htmlFor="avatar-upload"
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <UploadOutlined />
                更换头像
              </label>
            </div>
          )}
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                {profile.nickname}
              </h1>
              <p className="text-gray-700 text-sm">
                ID: {profile.id} • {profile.username}
              </p>
            </div>

            <button
              onClick={onEditToggle}
              className={`mt-4 md:mt-0 px-6 py-2 rounded-lg font-medium transition-all ${
                isEditing
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-300'
              }`}
            >
              <EditOutlined className="mr-2" />
              {isEditing ? '保存修改' : '编辑资料'}
            </button>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold px-3 py-1 rounded-full text-sm">
                  Lv.{profile.level}
                </span>
                <span className="text-gray-700 text-sm">
                  经验值: {profile.experience}/1000
                </span>
              </div>
              <span className="text-blue-600 font-medium text-sm">
                {experienceProgress}%
              </span>
            </div>
            <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
                style={{ width: `${experienceProgress}%` }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/80 p-4 rounded-xl text-center backdrop-blur-sm">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {heroCount}
              </div>
              <div className="text-gray-700 text-sm">
                英雄数量
              </div>
            </div>
            <div className="bg-white/80 p-4 rounded-xl text-center backdrop-blur-sm">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {skinCount}
              </div>
              <div className="text-gray-700 text-sm">
                皮肤数量
              </div>
            </div>
            <div className="bg-white/80 p-4 rounded-xl text-center backdrop-blur-sm">
              <div className="text-2xl font-bold text-red-600 mb-1">
                {winRate}%
              </div>
              <div className="text-gray-700 text-sm">
                胜率
              </div>
            </div>
            <div className="bg-white/80 p-4 rounded-xl text-center backdrop-blur-sm">
              <div className="text-2xl font-bold text-purple-600 mb-1">
                {playTime}h
              </div>
              <div className="text-gray-700 text-sm">
                游戏时长
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
