import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { CAROUSEL_IMAGES, CAROUSEL_CONFIG } from '../constants/carousel';

// 移除了未使用的 themeMode 属性
interface HeroCarouselProps {}

const HeroCarousel: React.FC<HeroCarouselProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { autoPlayInterval } = CAROUSEL_CONFIG;

  // 下一张
  const nextSlide = () => setCurrentIndex(prev => (prev + 1) % CAROUSEL_IMAGES.length);
  // 上一张
  const prevSlide = () => setCurrentIndex(prev => (prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1));

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlayInterval]);

  return (
    <div className="relative w-full h-[420px] sm:h-[520px] md:h-[620px] lg:h-[720px] overflow-hidden">
      {/* 图片列表 */}
      <div
        className="flex transition-transform duration-1000 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {CAROUSEL_IMAGES.map((src, index) => (
          <div key={index} className="w-full shrink-0">
            <img
              src={src}
              alt={`首页轮播图 ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* 左右箭头 */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white hover:text-blue-400 transition-all"
      >
        <LeftOutlined className="text-4xl drop-shadow-lg" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white hover:text-blue-400 transition-all"
      >
        <RightOutlined className="text-4xl drop-shadow-lg" />
      </button>

      {/* 指示器 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {CAROUSEL_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;