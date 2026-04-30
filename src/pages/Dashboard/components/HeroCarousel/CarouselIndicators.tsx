// 轮播图指示器组件（圆点导航）：根据轮播图数量渲染对应数量的圆点，高亮当前激活的轮播项，支持点击圆点快速切换到指定轮播图
import React from 'react';
import { CAROUSEL_IMAGES } from '../../constants';

interface CarouselIndicatorsProps {
  currentIndex: number;
  onSelect: (index: number) => void;
}

export const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({
  currentIndex,
  onSelect,
}) => {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
      {CAROUSEL_IMAGES.map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            index === currentIndex
              ? 'bg-amber-400 w-6 shadow-[0_0_8px_rgba(251,191,36,0.6)]'
              : 'bg-white/40 hover:bg-white/60'
          }`}
        />
      ))}
    </div>
  );
};
