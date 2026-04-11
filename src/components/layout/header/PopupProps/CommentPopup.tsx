import React from 'react';
import { unreadComments } from '../constants';
import { useAppStore } from '../../../../store/appStore';

export const CommentPopup: React.FC = () => {
  const isDark = useAppStore((state) => state.isDark);

  return (
    <div
      className={`w-72 p-4 ${isDark ? 'bg-[#1a1a1a] text-gray-200' : 'bg-white text-gray-900'}`}
    >
      <div className={`font-medium text-sm mb-3 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
        未读评论 ({unreadComments.length})
      </div>
      <div className="space-y-3 text-sm">
        {unreadComments.map((comment, index) => (
          <div
            key={index}
            className={`hover:bg-gray-100/10 p-3 rounded cursor-pointer ${isDark ? 'hover:bg-gray-800/50' : ''}`}
          >
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};
