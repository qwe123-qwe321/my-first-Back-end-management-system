// 轮播图左右切换箭头组件：基于AntD图标实现轮播图的上一张/下一张交互按钮，接收点击回调函数，提供手动切换轮播图的操作入口
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React from 'react';

interface CarouselArrowsProps {
  onPrev: () => void;
  onNext: () => void;
}

export const CarouselArrows: React.FC<CarouselArrowsProps> = ({
  onPrev,
  onNext,
}) => {
  return (
    <>
      <button
        onClick={onPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center text-white hover:text-blue-400 transition-all"
      >
        <LeftOutlined className="text-4xl drop-shadow-lg" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center text-white hover:text-blue-400 transition-all"
      >
        <RightOutlined className="text-4xl drop-shadow-lg" />
      </button>
    </>
  );
};
