// 英雄展示组件：整合皮肤选择器和语音面板，提供英雄详情展示、皮肤切换和语音播放的完整交互体验
import React from 'react';
import { HeroSkinSelector } from './HeroSkinSelector';
import { HeroVoicePanel } from './HeroVoicePanel';

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

interface Hero {
  id: number;
  name: string;
  title: string;
  image: string;
  skins: Skin[];
}

interface HeroDisplayProps {
  hero: Hero;
  currentSkin: number;
  isPlaying: number | null;
  onSkinClick: (index: number) => void;
  onVoiceClick: (index: number) => void;
}

export const HeroDisplay: React.FC<HeroDisplayProps> = ({
  hero,
  currentSkin,
  isPlaying,
  onSkinClick,
  onVoiceClick,
}) => {
  const currentSkinData = hero.skins[currentSkin];
  const hasSkins = hero.skins.length > 1;

  return (
    <div className="flex items-center relative w-full mb-10">
      <div className="w-100 h-100 rounded-full border-2 border-[#e4c289] overflow-hidden relative z-10">
        <img
          src={currentSkinData.image || hero.image}
          alt={hero.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-7 left-0 w-full text-center">
          <h2 className="text-[#eec275] font-bold text-xl drop-shadow-lg">
            {hasSkins ? `${currentSkinData.name} - ${hero.name}` : hero.name}
          </h2>
        </div>
      </div>

      <div
        className="absolute left-50 h-100 w-[calc(100%-200px)] 
                  border border-[#e4c289] border-l-0 
                  bg-[#1a1a1a] pl-55 pr-10 flex items-center gap-10"
      >
        {hasSkins && (
          <HeroSkinSelector
            skins={hero.skins}
            currentSkin={currentSkin}
            onSkinClick={onSkinClick}
          />
        )}

        <HeroVoicePanel
          skins={hero.skins}
          currentSkin={currentSkin}
          heroName={hero.name}
          isPlaying={isPlaying}
          onVoiceClick={onVoiceClick}
        />
      </div>
    </div>
  );
};
