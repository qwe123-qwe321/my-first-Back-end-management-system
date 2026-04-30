// 社区页面：提供社区互动功能，包含动态发布、点赞、评论等社交功能入口
import React, { useState } from 'react';
import { Button, message } from 'antd';
import {
  GlobalOutlined,
  ReloadOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from '@ant-design/icons';

const Community: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const communityUrl = 'https://www.taptap.cn/app/2301/topic';

  // 处理重新加载
  const handleReload = () => {
    const iframe = document.getElementById(
      'community-iframe'
    ) as HTMLIFrameElement;
    if (iframe) {
      iframe.contentWindow?.location.reload();
      setIsLoading(true);
      message.info('正在重新加载社区页面...');
    }
  };

  // 处理全屏切换
  const handleFullscreenToggle = () => {
    const iframe = document.getElementById(
      'community-iframe'
    ) as HTMLIFrameElement;
    if (!iframe) return;

    if (!isFullscreen) {
      // 进入全屏
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      // 退出全屏
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  // 处理在新窗口打开
  const handleOpenInNewWindow = () => {
    window.open(communityUrl, '_blank');
    message.success('已在新的浏览器窗口中打开社区页面');
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    message.error('社区页面加载失败，请检查网络连接或稍后重试');
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 p-4 md:p-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* 页面标题和操作栏 */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                玩家社区
              </h1>
              <p className="text-gray-600">
                与全球玩家交流游戏心得、分享攻略、参与讨论
              </p>
            </div>

            {/* 操作按钮组 */}
            <div className="flex flex-wrap gap-3">
              <Button
                icon={<ReloadOutlined />}
                onClick={handleReload}
                className="bg-white border border-gray-300 text-gray-800 hover:bg-gray-100"
              >
                刷新
              </Button>

              <Button
                icon={
                  isFullscreen ? (
                    <FullscreenExitOutlined />
                  ) : (
                    <FullscreenOutlined />
                  )
                }
                onClick={handleFullscreenToggle}
                className="bg-white border border-gray-300 text-gray-800 hover:bg-gray-100"
              >
                {isFullscreen ? '退出全屏' : '全屏模式'}
              </Button>

              <Button
                icon={<GlobalOutlined />}
                onClick={handleOpenInNewWindow}
                type="primary"
                className="bg-blue-600 hover:bg-blue-700"
              >
                在新窗口打开
              </Button>
            </div>
          </div>

          {/* 提示信息 */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <div className="flex items-start gap-3">
              <div className="text-blue-500 text-lg mt-0.5">
                💡
              </div>
              <div>
                <h3 className="font-medium text-blue-800 mb-1">
                  使用提示
                </h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• 社区页面已内嵌TapTap官方论坛，可直接浏览和参与讨论</li>
                  <li>• 点击"在新窗口打开"可在独立浏览器标签页中访问</li>
                  <li>• 使用"全屏模式"可获得更好的浏览体验</li>
                  <li>• 如果页面加载缓慢，请尝试点击"刷新"按钮</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 内嵌社区页面 */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-300 bg-white">
          {/* 加载状态指示器 */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">
                  正在加载玩家社区...
                </p>
              </div>
            </div>
          )}

          <iframe
            id="community-iframe"
            src={communityUrl}
            title="TapTap玩家社区"
            className="w-full h-[calc(100vh-280px)] min-h-150 border-0"
            allow="fullscreen"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-top-navigation"
          />

          {/* 底部状态栏 */}
          <div className="bg-gray-100 border-t border-gray-300 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${isLoading ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`}
              ></div>
              <span className="text-sm text-gray-600">
                {isLoading ? '正在连接...' : '已连接到 TapTap 社区'}
              </span>
            </div>

            <div className="text-sm text-gray-500">
              来源:{' '}
              <span className="text-blue-600 font-medium">
                taptap.cn
              </span>
            </div>
          </div>
        </div>

        {/* 社区功能说明 */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              实时讨论
            </h3>
            <p className="text-gray-600 text-sm">
              与全球玩家实时交流游戏心得，分享攻略技巧，参与热门话题讨论
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="text-3xl mb-4">🏆</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              赛事资讯
            </h3>
            <p className="text-gray-600 text-sm">
              获取最新赛事信息，观看比赛直播，参与赛事竞猜，与职业选手互动
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="text-3xl mb-4">🎮</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              攻略分享
            </h3>
            <p className="text-gray-600 text-sm">
              学习高手攻略，查看英雄出装推荐，了解版本更新内容，提升游戏水平
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
