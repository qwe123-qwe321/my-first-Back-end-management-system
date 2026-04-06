// 首页轮播图组件：显示英雄档案卡片
import React from 'react';

interface CarouselSlideProps {
  src: string;
  index: number;
  title: string;
  subtitle?: string;
}

export const CarouselSlide: React.FC<CarouselSlideProps> = ({
  src,
  index,
  title,
  subtitle,
}) => {
  return (
    <div key={index} className="w-full shrink-0 relative">
      <img
        src={src}
        alt={`首页轮播图 ${index + 1}`}
        className="w-full h-full object-cover"
        loading="lazy"
      />

      {title && (
        <div className="absolute left-0 bottom-0 z-20 w-full px-8 md:px-16 lg:px-24 pb-12 md:pb-16 pointer-events-none">
          <div className="max-w-[1200px]">
            <div
              className="inline-block"
              style={{
                textShadow:
                  '0 0 30px rgba(255, 255, 255, 0.5), 0 4px 12px rgba(0, 0, 0, 0.6)',
              }}
            >
              <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-black tracking-[0.1em] leading-tight text-white">
                {title}
              </h2>
            </div>

            <div
              className="mt-3 mb-4 w-16 md:w-24 h-[3px] rounded-full"
              style={{
                background:
                  'linear-gradient(90deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.4)',
              }}
            />

            {subtitle && (
              <p
                className="text-white/90 text-[14px] md:text-[16px] lg:text-[18px] font-medium tracking-wide"
                style={{
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}

      <div
        className="absolute bottom-0 left-0 w-full h-64 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 100%)',
        }}
      />
    </div>
  );
};
