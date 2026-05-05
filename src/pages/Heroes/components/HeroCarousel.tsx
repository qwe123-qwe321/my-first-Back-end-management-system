// 英雄轮播组件：展示英雄列表的横向轮播，支持左右滑动切换英雄，提供英雄快速浏览功能
import React from 'react';

interface Skin {
  id: number;
  name: string;
  image: string;
  voiceLines: {
    id: number;
    text: string;
    audio: string;
  }[];
}

interface Hero {
  id: number;
  name: string;
  title: string;
  image: string;
  skins: Skin[];
}

interface HeroCarouselProps {
  heroes: Hero[];
  currentHeroIndex: number;
  onHeroClick: (index: number) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  heroes,
  currentHeroIndex,
  onHeroClick,
}) => {
  const [carouselOffset, setCarouselOffset] = React.useState(0);
  const itemsPerRow = 8;

  const handleCarouselNext = () => {
    if (carouselOffset < heroes.length - itemsPerRow) {
      setCarouselOffset(carouselOffset + 1);
    }
  };

  const handleCarouselPrev = () => {
    if (carouselOffset > 0) {
      setCarouselOffset(carouselOffset - 1);
    }
  };

  return (
    <div className="mt-32 mb-8">
      <div className="relative max-w-6xl mx-auto">
        {/* 左箭头 - 优化样式，去掉圆圈 */}
        <button
          onClick={handleCarouselPrev}
          disabled={carouselOffset === 0}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-4xl font-bold transition-all ${carouselOffset === 0 ? 'text-gray-600 cursor-not-allowed' : 'text-[#e4c289] hover:text-[#f0d4a0] cursor-pointer hover:scale-110'}`}
        >
          {'<'}
        </button>

        <div className="overflow-hidden mx-12">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${carouselOffset * (100 / itemsPerRow)}%)`,
            }}
          >
            {heroes.map((hero, index) => (
              <div
                key={hero.id}
                className={`shrink-0 px-2 cursor-pointer transition-all duration-300 ${index === currentHeroIndex ? 'scale-110' : 'hover:scale-105'}`}
                style={{ width: `${100 / itemsPerRow}%` }}
                onClick={() => onHeroClick(index)}
              >
                {/* 去掉选中边框高亮和英雄姓名，只保留图片 */}
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={hero.image}
                    alt={hero.name}
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 右箭头 - 优化样式，去掉圆圈 */}
        <button
          onClick={handleCarouselNext}
          disabled={carouselOffset >= heroes.length - itemsPerRow}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-4xl font-bold transition-all ${carouselOffset >= heroes.length - itemsPerRow ? 'text-gray-600 cursor-not-allowed' : 'text-[#e4c289] hover:text-[#f0d4a0] cursor-pointer hover:scale-110'}`}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};
