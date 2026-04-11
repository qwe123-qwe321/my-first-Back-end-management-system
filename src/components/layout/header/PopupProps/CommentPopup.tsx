import React from 'react';
import { unreadComments } from '../constants';

export const CommentPopup: React.FC = () => {
  return (
    <div
      className="w-72 p-4 bg-white text-gray-900"
    >
      <div className="font-medium text-sm mb-3">
        未读评论 ({unreadComments.length})
      </div>
      <div className="space-y-3 text-sm">
        {unreadComments.map((comment, index) => (
          <div
            key={index}
            className="hover:bg-gray-100/10 p-3 rounded cursor-pointer"
          >
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};
