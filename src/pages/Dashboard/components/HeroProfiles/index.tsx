import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroCard, type HeroCardProps } from './HeroCard';
import { heroesData } from './data';
export const HeroProfiles: React.FC = () => {
  const navigate = useNavigate();

  const changE = {
    name: '嫦娥',
    title: '寒月公主',
    image:
      'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20210907/16310086766129.jpg',
    energy: '魔道',
    region: '北荒',
    race: '人类',
    city: '日之塔',
    height: '171CM',
    faction: '日之塔',
    identity: '魔道家族公主',
    description:
      '少女时期的嫦娥，被视为月光命定之人。佩戴胸间的玉佩蕴藏着巨大的月光之力，这力量与玉兔一起守护着命定之人。她的家族因私自启蒙魔种而被神降下惩罚，村庄遭到屠戮，嫦娥的家人无一幸免，唯有她，在以为自己也要命陨之际，被弓箭手放了生路。在不断坠落中，月光之力迸发，绽放璀璨的光辉。',
  };

  // 所有英雄数据（包含嫦娥）
  const allHeroes = [changE, ...heroesData];

  const handleHeroClick = (index: number) => {
    navigate(`/heroes/voice?heroIndex=${index}`);
  };

  return (
    <div className="danganlist" style={{ padding: '20px', minWidth: '1200px' }}>
      <h2
        style={{
          textAlign: 'center',
          color: '#fff',
          marginBottom: '20px',
        }}
      >
        英雄档案
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridAutoRows: 'minmax(0, 1fr)',
          gap: '20px',
          maxWidth: '1800px',
          margin: '0 auto',
          alignItems: 'stretch',
        }}
      >
        {allHeroes.map((hero: HeroCardProps, index: number) => (
          <div
            key={index}
            onClick={() => handleHeroClick(index)}
            style={{ cursor: 'pointer' }}
          >
            <HeroCard {...hero} />
          </div>
        ))}
      </div>
    </div>
  );
};
