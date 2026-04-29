import React from 'react';
import { Skeleton } from 'antd';

interface PageSkeletonProps {
  type?: 'dashboard' | 'profile' | 'user' | 'skin' | 'community' | 'about';
}

export const PageSkeleton: React.FC<PageSkeletonProps> = ({ type = 'dashboard' }) => {
  const renderDashboardSkeleton = () => (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <Skeleton.Input size="large" style={{ width: 200, height: 32 }} active />
        <div className="flex gap-2">
          <Skeleton.Button style={{ width: 80 }} active />
          <Skeleton.Button style={{ width: 80 }} active />
          <Skeleton.Button style={{ width: 80 }} active />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <Skeleton.Input style={{ width: 150, height: 24 }} className="mb-4" active />
          <Skeleton.Node active style={{ width: '100%', height: 350 }} />
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <Skeleton.Input style={{ width: 150, height: 24 }} className="mb-4" active />
          <Skeleton.Node active style={{ width: '100%', height: 350 }} />
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <Skeleton.Input style={{ width: 150, height: 24 }} className="mb-4" active />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton.Node key={i} active style={{ width: '100%', height: 120 }} />
          ))}
        </div>
      </div>
    </div>
  );

  const renderProfileSkeleton = () => (
    <div className="p-6 space-y-6">
      <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Skeleton.Avatar size={128} shape="circle" active />
          <div className="flex-1 space-y-3">
            <Skeleton.Input size="large" style={{ width: 200, height: 32 }} active />
            <Skeleton.Input style={{ width: 150 }} active />
            <div className="flex gap-4 mt-4">
              <Skeleton.Button style={{ width: 100 }} active />
              <Skeleton.Button style={{ width: 100 }} active />
              <Skeleton.Button style={{ width: 100 }} active />
              <Skeleton.Button style={{ width: 100 }} active />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <Skeleton.Input style={{ width: 150, height: 24 }} className="mb-4" active />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-2">
              <Skeleton.Input style={{ width: 80 }} size="small" active />
              <Skeleton.Input style={{ width: '100%' }} active />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderUserSkeleton = () => (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between mb-6">
        <Skeleton.Input size="large" style={{ width: 200, height: 32 }} active />
        <div className="flex gap-2">
          <Skeleton.Button style={{ width: 120 }} active />
          <Skeleton.Button style={{ width: 80 }} active />
        </div>
      </div>
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex gap-4 mb-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton.Button key={i} style={{ width: 100 }} active />
          ))}
        </div>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="flex items-center gap-4">
              <Skeleton.Avatar size="small" active />
              <Skeleton.Input style={{ flex: 1 }} active />
              <Skeleton.Input style={{ width: 80 }} active />
              <Skeleton.Button style={{ width: 60 }} active />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSkinSkeleton = () => (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <Skeleton.Input size="large" style={{ width: 150, height: 32 }} active />
        <Skeleton.Button style={{ width: 100 }} active />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <Skeleton.Node active style={{ width: '100%', height: 200 }} />
            <div className="p-4 space-y-2">
              <Skeleton.Input style={{ width: '80%' }} active />
              <Skeleton.Input style={{ width: '60%' }} size="small" active />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCommunitySkeleton = () => (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <Skeleton.Input size="large" style={{ width: 200, height: 32 }} active />
        <Skeleton.Button style={{ width: 100 }} active />
      </div>
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <Skeleton.Avatar size="large" active />
              <div className="flex-1 space-y-2">
                <Skeleton.Input style={{ width: 150 }} active />
                <Skeleton paragraph={{ rows: 2 }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAboutSkeleton = () => (
    <div className="p-6 space-y-6">
      <div className="mb-6">
        <Skeleton.Input size="large" style={{ width: 200, height: 32 }} active />
        <Skeleton.Input style={{ width: 150 }} className="mt-2" active />
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <Skeleton paragraph={{ rows: 3 }} />
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <Skeleton paragraph={{ rows: 8 }} />
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <Skeleton paragraph={{ rows: 8 }} />
      </div>
    </div>
  );

  const skeletons: Record<NonNullable<PageSkeletonProps['type']>, React.ReactNode> = {
    dashboard: renderDashboardSkeleton(),
    profile: renderProfileSkeleton(),
    user: renderUserSkeleton(),
    skin: renderSkinSkeleton(),
    community: renderCommunitySkeleton(),
    about: renderAboutSkeleton(),
  };

  return (
    <div className="min-h-screen animate-pulse">
      {skeletons[type]}
    </div>
  );
};

export default PageSkeleton;
