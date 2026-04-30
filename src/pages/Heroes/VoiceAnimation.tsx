// 语音动画组件：实现英雄语音播放时的可视化动画效果，包含音频波形或声波动画，增强语音交互体验
import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { heroesData } from './data/heroesData';
import { HeroDisplay } from './components/HeroDisplay';
import { HeroCarousel } from './components/HeroCarousel';
import { DashboardContainer } from '../Dashboard/components/DashboardContainer';

const VoiceAnimation: React.FC = () => {
  const location = useLocation();

  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [currentSkin, setCurrentSkin] = useState(0);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  // 从URL获取英雄索引，默认为0（嫦娥）
  const getHeroIndexFromUrl = useCallback(() => {
    const params = new URLSearchParams(location.search);
    const index = parseInt(params.get('heroIndex') || '0', 10);
    return isNaN(index) || index < 0 || index >= heroesData.length ? 0 : index;
  }, [location.search]);

  // 初始化时设置初始英雄索引
  useEffect(() => {
    setCurrentHeroIndex(getHeroIndexFromUrl());
  }, [getHeroIndexFromUrl]);

  // 当URL变化时更新当前英雄
  useEffect(() => {
    setCurrentHeroIndex(getHeroIndexFromUrl());
    setCurrentSkin(0);
    setIsPlaying(null);
    audioRef.current?.pause();
    audioRef.current = null;
  }, [location.search, getHeroIndexFromUrl]);

  const handleHeroClick = (index: number) => {
    setCurrentHeroIndex(index);
    setCurrentSkin(0);
    setIsPlaying(null);
    audioRef.current?.pause();
    audioRef.current = null;
  };

  const handleSkinClick = (index: number) => {
    setCurrentSkin(index);
    setIsPlaying(null);
    audioRef.current?.pause();
    audioRef.current = null;
  };

  const handleVoiceClick = (index: number) => {
    const currentHero = heroesData[currentHeroIndex];
    if (!currentHero) return;

    const currentSkinData = currentHero.skins[currentSkin];
    if (!currentSkinData) return;

    const voiceLine = currentSkinData.voiceLines[index];
    if (!voiceLine || !voiceLine.audio) return;

    if (isPlaying === index) {
      audioRef.current?.pause();
      audioRef.current = null;
      setIsPlaying(null);
    } else {
      audioRef.current?.pause();
      const newAudio = new Audio(voiceLine.audio);
      audioRef.current = newAudio;
      newAudio.play().catch((err) => console.error('播放失败', err));
      newAudio.onended = () => setIsPlaying(null);
      setIsPlaying(index);
    }
  };

  const currentHero = heroesData[currentHeroIndex] || heroesData[0];

  return (
    <DashboardContainer hasCarousel={false}>
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-7xl mx-auto">
          <HeroDisplay
            hero={currentHero}
            currentSkin={currentSkin}
            isPlaying={isPlaying}
            onSkinClick={handleSkinClick}
            onVoiceClick={handleVoiceClick}
          />

          <HeroCarousel
            heroes={heroesData}
            currentHeroIndex={currentHeroIndex}
            onHeroClick={handleHeroClick}
          />
        </div>
      </div>
    </DashboardContainer>
  );
};

export default VoiceAnimation;
