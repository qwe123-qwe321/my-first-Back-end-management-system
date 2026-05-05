// 英雄语音面板组件：展示英雄的语音台词列表，支持点击播放语音，提供语音交互功能
import React from 'react';

interface VoiceLine {
  id: number;
  text: string;
  type: string;
  audio: string;
}

interface Skin {
  id: number;
  name: string;
  image: string;
  voiceLines: VoiceLine[];
}

interface HeroVoicePanelProps {
  skins: Skin[];
  currentSkin: number;
  heroName: string;
  isPlaying: number | null;
  onVoiceClick: (index: number) => void;
}

export const HeroVoicePanel: React.FC<HeroVoicePanelProps> = ({
  skins,
  currentSkin,
  heroName,
  isPlaying,
  onVoiceClick,
}) => {
  const currentSkinData = skins[currentSkin] || skins[0];
  const hasVoiceData =
    currentSkinData &&
    currentSkinData.voiceLines &&
    currentSkinData.voiceLines.some((line) => line.text || line.audio);

  return (
    <div className="flex-1 h-full">
      <div className="bg-[#1a1a1a]/80 border border-[#1a1a1a] rounded-lg p-6 h-full flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-3">
            {hasVoiceData && currentSkinData && currentSkinData.voiceLines ? (
              currentSkinData.voiceLines.map((line, index) => (
                <div
                  key={line.id}
                  className={`flex items-center justify-between p-4 bg-[#1a1a1a]/80 border border-[#e4cca9]/20 rounded-md hover:bg-[#e4c289]/10 cursor-pointer ${line.text || line.audio ? '' : 'opacity-50'}`}
                  onClick={() =>
                    (line.text || line.audio) && onVoiceClick(index)
                  }
                >
                  <div className="flex-1">
                    <div className="text-gray-300 text-lg mb-1">
                      {line.text || '暂无语音文本'}
                    </div>
                    {line.type && (
                      <div className="text-gray-500 text-sm">{line.type}</div>
                    )}
                  </div>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${isPlaying === index ? 'bg-[#e4c289] text-black' : 'bg-[#e4c289]/20 text-[#e4c289]'}`}
                  >
                    {isPlaying === index ? '⏸' : '▶'}
                  </div>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-gray-500 text-lg text-center py-10">
                  {heroName}的语音数据暂未添加
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
