import React from 'react';
import {
  UserOutlined,
  MailOutlined,
  EditOutlined,
  SaveOutlined,
} from '@ant-design/icons';
import { useUserStore } from '../../../config/user/useUserStore';

interface Profile {
  username: string;
  nickname: string;
  email: string;
  phone: string;
  location: string;
  birthday: string;
  gender: string;
  bio: string;
  joinDate: string;
  level: number;
  avatar: string;
}

interface ProfileFormProps {
  isEditing: boolean;
  tempProfile: Profile;
  onInputChange: (field: string, value: string) => void;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({
  isEditing,
  tempProfile,
  onInputChange,
}) => {
  const { profile } = useUserStore();

  const displayProfile = isEditing ? tempProfile : profile;

  const renderField = (
    label: string,
    icon: React.ReactNode,
    _field: string,
    renderEdit: () => React.ReactNode,
    renderView: () => React.ReactNode
  ) => (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium">
        {icon}
        <span>{label}</span>
      </label>
      {isEditing ? renderEdit() : renderView()}
    </div>
  );

  // 自定义输入框样式
  const inputClassName =
    'w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent transition-all';

  const displayClassName =
    'px-4 py-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100';

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-300 dark:border-gray-700">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            个人资料
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            管理您的个人信息和游戏资料
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>最后更新: 今天</span>
        </div>
      </div>

      <div className="space-y-8">
        {/* 基础信息 */}
        <div className="bg-white/50 dark:bg-gray-800/30 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <UserOutlined />
            基础信息
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {renderField(
              '用户名',
              null,
              'username',
              () => (
                <input
                  type="text"
                  value={displayProfile.username}
                  onChange={(e) => onInputChange('username', e.target.value)}
                  placeholder="请输入用户名"
                  className={inputClassName}
                />
              ),
              () => (
                <div className={displayClassName}>
                  {displayProfile.username}
                </div>
              )
            )}

            {renderField(
              '游戏昵称',
              null,
              'nickname',
              () => (
                <input
                  type="text"
                  value={displayProfile.nickname}
                  onChange={(e) => onInputChange('nickname', e.target.value)}
                  placeholder="请输入游戏昵称"
                  className={inputClassName}
                />
              ),
              () => (
                <div className={displayClassName}>
                  {displayProfile.nickname}
                </div>
              )
            )}
          </div>
        </div>

        {/* 联系方式 */}
        <div className="bg-white/50 dark:bg-gray-800/30 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <MailOutlined />
            联系方式
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {renderField(
              '邮箱地址',
              null,
              'email',
              () => (
                <input
                  type="email"
                  value={displayProfile.email}
                  onChange={(e) => onInputChange('email', e.target.value)}
                  placeholder="请输入邮箱地址"
                  className={inputClassName}
                />
              ),
              () => (
                <div className={displayClassName}>{displayProfile.email}</div>
              )
            )}

            {renderField(
              '手机号码',
              null,
              'phone',
              () => (
                <input
                  type="tel"
                  value={displayProfile.phone}
                  onChange={(e) => onInputChange('phone', e.target.value)}
                  placeholder="请输入手机号码"
                  className={inputClassName}
                />
              ),
              () => (
                <div className={displayClassName}>{displayProfile.phone}</div>
              )
            )}
          </div>
        </div>

        {/* 个人信息 */}
        <div className="bg-white/50 dark:bg-gray-800/30 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <UserOutlined />
            个人信息
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {renderField(
              '所在地',
              null,
              'location',
              () => (
                <select
                  value={displayProfile.location}
                  onChange={(e) => onInputChange('location', e.target.value)}
                  className={inputClassName}
                >
                  <option value="">请选择所在地</option>
                  <option value="北京市">北京市</option>
                  <option value="上海市">上海市</option>
                  <option value="广州市">广州市</option>
                  <option value="深圳市">深圳市</option>
                  <option value="杭州市">杭州市</option>
                  <option value="成都市">成都市</option>
                  <option value="武汉市">武汉市</option>
                  <option value="无锡市">无锡市</option>
                </select>
              ),
              () => (
                <div className={displayClassName}>
                  {displayProfile.location}
                </div>
              )
            )}

            {renderField(
              '出生日期',
              null,
              'birthday',
              () => (
                <input
                  type="date"
                  value={displayProfile.birthday}
                  onChange={(e) => onInputChange('birthday', e.target.value)}
                  className={inputClassName}
                />
              ),
              () => (
                <div className={displayClassName}>
                  {displayProfile.birthday}
                </div>
              )
            )}
          </div>

          <div className="mt-6">
            {renderField(
              '性别',
              null,
              'gender',
              () => (
                <select
                  value={displayProfile.gender}
                  onChange={(e) => onInputChange('gender', e.target.value)}
                  className={inputClassName}
                >
                  <option value="">请选择性别</option>
                  <option value="male">男</option>
                  <option value="female">女</option>
                  <option value="other">其他</option>
                </select>
              ),
              () => (
                <div className={displayClassName}>
                  {displayProfile.gender === 'male'
                    ? '男'
                    : displayProfile.gender === 'female'
                      ? '女'
                      : '其他'}
                </div>
              )
            )}
          </div>
        </div>

        {/* 个人简介 */}
        <div className="bg-white/50 dark:bg-gray-800/30 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <EditOutlined />
            个人简介
          </h3>

          {renderField(
            '介绍一下自己',
            null,
            'bio',
            () => (
              <textarea
                value={displayProfile.bio}
                onChange={(e) => onInputChange('bio', e.target.value)}
                placeholder="请介绍一下自己，让其他玩家更了解您..."
                rows={4}
                className={`${inputClassName} resize-none`}
              />
            ),
            () => (
              <div
                className={`${displayClassName} whitespace-pre-wrap leading-relaxed`}
              >
                {displayProfile.bio}
              </div>
            )
          )}
        </div>

        {/* 账户信息 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-blue-100 dark:border-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <SaveOutlined />
            账户信息
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-gray-700 dark:text-gray-300 font-medium">
                注册时间
              </label>
              <div className={displayClassName}>{profile.joinDate}</div>
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 dark:text-gray-300 font-medium">
                账号等级
              </label>
              <div className={displayClassName}>Lv.{profile.level}</div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  账户状态
                </div>
                <div className="font-medium text-green-600 dark:text-green-400">
                  正常
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  安全等级
                </div>
                <div className="font-medium text-blue-600 dark:text-blue-400">
                  高
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  VIP等级
                </div>
                <div className="font-medium text-purple-600 dark:text-purple-400">
                  VIP 8
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 操作提示 */}
      <div className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-700">
        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span>
            提示：
            {isEditing
              ? '编辑完成后请点击"保存修改"按钮'
              : '点击"编辑资料"按钮可以修改个人信息'}
          </span>
        </div>
      </div>
    </div>
  );
};
