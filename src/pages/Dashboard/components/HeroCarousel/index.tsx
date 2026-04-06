// 首页轮播图核心组件：整合轮播图的核心逻辑（自动播放、手动切换、响应式高度计算），组合幻灯片、箭头、指示器子组件，实现完整的轮播功能
import React, { useState, useEffect } from 'react';
import {
  CAROUSEL_CONFIG,
  CAROUSEL_IMAGES,
  CAROUSEL_TEXTS,
} from '../../constants';
import { CarouselArrows } from './CarouselArrows';
import { CarouselIndicators } from './CarouselIndicators';
import { CarouselSlide } from './CarouselSlide';

type HeroCarouselProps = object;

const HeroCarousel: React.FC<HeroCarouselProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { autoPlayInterval, slideHeights } = CAROUSEL_CONFIG;

  // 轮播核心逻辑
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1
    );
  const selectIndex = (index: number) => setCurrentIndex(index);

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlayInterval]);

  // 拼接响应式高度样式
  const getSlideHeightClass = () => {
    return `h-${slideHeights.base} sm:h-${slideHeights.sm} md:h-${slideHeights.md} lg:h-${slideHeights.lg}`;
  };

  return (
    <div className={`relative w-full ${getSlideHeightClass()} overflow-hidden`}>
      {/* 图片列表 */}
      <div
        className="flex transition-transform duration-1000 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {CAROUSEL_IMAGES.map((src, index) => (
          <CarouselSlide
            key={index}
            src={src}
            index={index}
            title={CAROUSEL_TEXTS[index]?.title ?? ''}
            subtitle={CAROUSEL_TEXTS[index]?.subtitle ?? ''}
          />
        ))}
      </div>

      {/* 子组件：箭头 + 指示器 */}
      <CarouselArrows onPrev={prevSlide} onNext={nextSlide} />
      <CarouselIndicators
        currentIndex={currentIndex}
        onSelectIndex={selectIndex}
      />
    </div>
  );
};

export default HeroCarousel;
