// 轮播图指示器组件（圆点导航）：根据轮播图数量渲染对应数量的圆点，高亮当前激活的轮播项，支持点击圆点快速切换到指定轮播图
import React from 'react';
import { CAROUSEL_IMAGES } from '../../constants';

interface CarouselIndicatorsProps {
  currentIndex: number;
  onSelectIndex: (index: number) => void;
}

export const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({
  currentIndex,
  onSelectIndex,
}) => {
  return (
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
      {CAROUSEL_IMAGES.map((_, index) => (
        <button
          key={index}
          onClick={() => onSelectIndex(index)}
          className={`w-3 h-3 rounded-full transition-all ${
            currentIndex === index
              ? 'bg-white scale-125'
              : 'bg-white/50 hover:bg-white/70'
          }`}
        />
      ))}
    </div>
  );
};
