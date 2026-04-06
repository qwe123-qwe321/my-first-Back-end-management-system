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
  const { profile, updateAvatar } = useUserStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 计算经验进度
  const experienceProgress = (profile.experience % 1000) / 10;

  // 处理头像上传
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

    // 创建本地预览
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const newAvatar = reader.result as string;
      updateAvatar(newAvatar);
      onAvatarChange(newAvatar);
      alert('头像上传成功！');
    };

    // 重置文件输入
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-lg p-6 mb-6 border border-blue-100 dark:border-gray-800">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* 头像区域 */}
        <div className="relative group">
          <div className="relative">
            <img
              src={profile.avatar}
              alt="用户头像"
              className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-700 shadow-lg"
            />
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
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <UploadOutlined />
                更换头像
              </label>
            </div>
          )}
        </div>

        {/* 用户信息 */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {profile.nickname}
              </h1>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                ID: {profile.id} • {profile.username}
              </p>
            </div>

            {/* 自定义编辑按钮 */}
            <button
              onClick={onEditToggle}
              className={`mt-4 md:mt-0 px-6 py-2 rounded-lg font-medium transition-all ${
                isEditing
                  ? 'bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white'
                  : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700'
              }`}
            >
              <EditOutlined className="mr-2" />
              {isEditing ? '保存修改' : '编辑资料'}
            </button>
          </div>

          {/* 等级和进度条 */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold px-3 py-1 rounded-full text-sm">
                  Lv.{profile.level}
                </span>
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  经验值: {profile.experience}/1000
                </span>
              </div>
              <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                {experienceProgress}%
              </span>
            </div>
            <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
                style={{ width: `${experienceProgress}%` }}
              ></div>
            </div>
          </div>

          {/* 游戏数据统计 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-xl text-center backdrop-blur-sm">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                128
              </div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">
                英雄数量
              </div>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-xl text-center backdrop-blur-sm">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                356
              </div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">
                皮肤数量
              </div>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-xl text-center backdrop-blur-sm">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400 mb-1">
                85%
              </div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">
                胜率
              </div>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-xl text-center backdrop-blur-sm">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                1562h
              </div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">
                游戏时长
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
