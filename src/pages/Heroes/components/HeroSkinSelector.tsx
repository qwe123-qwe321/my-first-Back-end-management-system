// 英雄皮肤选择器组件：展示英雄的皮肤列表，支持皮肤切换预览，提供皮肤选择交互功能
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

interface HeroSkinSelectorProps {
  skins: Skin[];
  currentSkin: number;
  onSkinClick: (index: number) => void;
}

export const HeroSkinSelector: React.FC<HeroSkinSelectorProps> = ({
  skins,
  currentSkin,
  onSkinClick,
}) => {
  return (
    <div className="flex flex-col gap-6">
      {skins.map((skin, index) => (
        <div
          key={skin.id}
          className={`cursor-pointer transition-all ${index === currentSkin ? 'scale-115 opacity-100' : 'opacity-70 hover:opacity-100'}`}
          onClick={() => onSkinClick(index)}
        >
          <div className="w-20 h-20 rounded-full overflow-hidden border border-[#e4c289]/60">
            <img
              src={skin.image}
              alt={skin.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
