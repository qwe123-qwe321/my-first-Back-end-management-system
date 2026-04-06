// 英雄档案卡片组件
import React from 'react';

// 英雄档案数据接口
export interface HeroCardProps {
  name: string;
  title: string;
  image: string;
  energy: string;
  region: string;
  race: string;
  city: string;
  height: string;
  faction: string;
  identity: string;
  description: string;
}

export const HeroCard: React.FC<HeroCardProps> = ({
  name,
  title,
  image,
  energy,
  region,
  race,
  city,
  height,
  faction,
  identity,
  description,
}) => {
  // 英雄档案数据
  const heroInfoData = [
    {
      label: '能量',
      value: energy,
      icon: '/src/assets/结构样式/8905c395ba1eca78f74679a49482fddd.png',
    },
    {
      label: '区域',
      value: region,
      icon: '/src/assets/结构样式/e689805ed0ca65e4fb55167d820d11c3.png',
    },
    {
      label: '种族',
      value: race,
      icon: '/src/assets/结构样式/5161c51967c570d83bf6069511f47066.png',
    },
    {
      label: '城市',
      value: city,
      icon: '/src/assets/结构样式/9792304fe5830ff221a27808a131835c.png',
    },
    {
      label: '身高',
      value: height,
      icon: '/src/assets/结构样式/c6dc601b532605418b8eb139b56cec73.png',
    },
    {
      label: '阵营',
      value: faction,
      icon: '/src/assets/结构样式/b001c32133a9f6df79cc27500f4acea5.png',
    },
    {
      label: '身份',
      value: identity,
      icon: '/src/assets/结构样式/b625c8760fe10e48647a529a13af9d4d.png',
    },
  ];

  return (
    <div className="dangan w-full max-w-full bg-black border border-solid border-[#e4cca9]/60 shadow-[0_0_15px_rgba(228,204,169,0.1)] rounded-sm transition-all duration-300 overflow-hidden">
      {/* 1. 头图区域 - 使用 aspect-video 确保比例协调 */}
      <div className="relative w-full aspect-16/10 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="block w-full h-full object-cover object-top"
        />
        {/* 底部渐变遮罩 */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-b from-transparent to-black z-10" />

        {/* 英雄标题 - 字体等比放大 */}
        <div className="absolute left-0 bottom-3 w-full px-4 flex items-baseline gap-2 z-20 text-[#e4c289]">
          <span className="text-3xl font-bold tracking-tight">{name}</span>
          <span className="text-base opacity-90 font-medium">{title}</span>
        </div>
      </div>

      {/* 2. 信息列表区域 - 调整间距与颜色 */}
      <div className="px-4 py-3">
        <ul className="flex flex-wrap justify-between gap-y-2 gap-x-2">
          {heroInfoData.map((item, index) => (
            <li
              key={index}
              className={`flex items-center h-10 px-1 border border-white/5 ${index === 6 ? 'w-full' : 'w-[48%]'}`}
              style={{
                backgroundImage:
                  "url('//game.gtimg.cn/images/yxzj/ip/20241021/hero/dangan-small-bg.png')",
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* 标签：灰色 */}
              <div className="flex items-center text-neutral-400 text-sm flex-shrink-0">
                {/* 图标 */}
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-4 h-4 mr-2 opacity-60"
                />
                <em className="not-italic">{item.label}：</em>
              </div>
              {/* 数值：改为白色 */}
              <span className="text-white text-sm font-medium ml-2 flex-shrink-0">
                {item.value}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. 英雄特点 */}
      <div className="px-4">
        <ul className="flex gap-2"></ul>
      </div>

      {/* 4. 英雄描述 - 边框与文字优化 */}
      <div className="mx-4 mt-2 py-4 border-t border-dashed border-[#e3c38b]/30">
        <div className="text-sm leading-relaxed text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
