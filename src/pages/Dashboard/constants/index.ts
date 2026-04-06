// 首页轮播图常量配置文件：集中管理轮播图相关的静态配置项，包括轮播图片地址列表、自动播放间隔、响应式高度、兜底文案等，便于统一维护和修改
export const CAROUSEL_IMAGES = [
  'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20260311/17732213301042.jpg',
  'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20260306/17727923952343.jpg',
  'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20251027/17615361607146.jpg',
  'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20250925/17587859037627.png',
  'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20241025/17298280591156.jpg',
];

// 轮播图文案：与 CAROUSEL_IMAGES 一一对应（数量保持一致）
export const CAROUSEL_TEXTS = [
  { title: '妖灵志异', subtitle: '' },
  { title: '二十八星宿', subtitle: '' },
  { title: '神陵之战', subtitle: '' },
  { title: '建木', subtitle: '' },
  { title: '云梦往事', subtitle: '' },
];

// 轮播图行为配置
export const CAROUSEL_CONFIG = {
  autoPlayInterval: 4000, // 自动轮播间隔
  slideHeights: {
    base: '420px',
    sm: '520px',
    md: '620px',
    lg: '720px',
  },
};
