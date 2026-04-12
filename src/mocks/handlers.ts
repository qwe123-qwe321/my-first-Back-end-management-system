import { http, delay, HttpResponse } from 'msw';

export interface Hero {
  id: number;
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

export interface UserData {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'user';
  status: 'active' | 'inactive';
  createdAt: string;
}

export interface ProfileData {
  id: string;
  nickname: string;
  level: number;
  avatar: string;
  email?: string;
  bio?: string;
}

const defaultProfile: ProfileData = {
  id: '1',
  nickname: '云中君',
  level: 12,
  avatar: '',
  email: 'cloud@honor.com',
  bio: '王者荣耀玩家，热爱云中君',
};

const getStoredProfile = (): ProfileData => {
  if (typeof window === 'undefined') return defaultProfile;
  const stored = localStorage.getItem('profile');
  return stored ? JSON.parse(stored) : defaultProfile;
};

const setStoredProfile = (profile: ProfileData) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('profile', JSON.stringify(profile));
};

export const mockUsers: UserData[] = [
  {
    id: 1,
    name: '云中君',
    email: 'cloud@honor.com',
    role: 'admin',
    status: 'active',
    createdAt: '2025-01-15',
  },
  {
    id: 2,
    name: '瑶',
    email: 'yao@honor.com',
    role: 'editor',
    status: 'active',
    createdAt: '2025-02-20',
  },
  {
    id: 3,
    name: '云中月',
    email: 'moon@honor.com',
    role: 'user',
    status: 'inactive',
    createdAt: '2025-03-05',
  },
  {
    id: 4,
    name: '韩信',
    email: 'hanxin@honor.com',
    role: 'user',
    status: 'active',
    createdAt: '2025-03-10',
  },
  {
    id: 5,
    name: '李白',
    email: 'libai@honor.com',
    role: 'editor',
    status: 'active',
    createdAt: '2025-03-15',
  },
  {
    id: 6,
    name: '貂蝉',
    email: 'diaochan@honor.com',
    role: 'user',
    status: 'inactive',
    createdAt: '2025-03-20',
  },
  {
    id: 7,
    name: '孙悟空',
    email: 'sunwukong@honor.com',
    role: 'admin',
    status: 'active',
    createdAt: '2025-03-25',
  },
  {
    id: 8,
    name: '猪八戒',
    email: 'zhubajie@honor.com',
    role: 'user',
    status: 'active',
    createdAt: '2025-04-01',
  },
];

export const mockHeroes: Hero[] = [
  {
    id: 1,
    name: '云中君',
    title: '流云之翼',
    image:
      'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20191024/15719134263175.jpg',
    energy: '刺客',
    region: '云梦泽',
    race: '人类',
    city: '云台山',
    height: '182CM',
    faction: '云梦泽',
    identity: '孤鸟',
    description: '云中君曾是一只孤鸟，与一只鹿结伴生活。战火蔓延，鹿无辜死去，孤鸟悲鸣坠地，被鬼谷子所救。',
  },
  {
    id: 2,
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
    description: '少女时期的嫦娥，被视为月光命定之人。佩戴胸间的玉佩蕴藏着巨大的月光之力。',
  },
];

let currentUsers = [...mockUsers];

export const handlers = [
  http.get('/api/user/profile', async () => {
    await delay(200);
    const profile = getStoredProfile();
    return HttpResponse.json({ success: true, data: profile });
  }),

  http.put('/api/user/profile', async ({ request }) => {
    const updatedProfile = await request.json();
    await delay(300);
    const currentProfile = getStoredProfile();
    const newProfile = { ...currentProfile, ...(updatedProfile as Partial<ProfileData>) };
    setStoredProfile(newProfile);
    return HttpResponse.json({ success: true, data: newProfile });
  }),

  http.get('/api/users', async () => {
    await delay(300);
    return HttpResponse.json({ success: true, data: currentUsers });
  }),

  http.post('/api/users', async ({ request }) => {
    const newUser = await request.json();
    await delay(500);
    const createdUser: UserData = {
      ...(newUser as Omit<UserData, 'id' | 'createdAt'>),
      id: currentUsers.length > 0 
        ? Math.max(...currentUsers.map(u => u.id)) + 1 
        : 1,
      createdAt: new Date().toISOString().split('T')[0],
    };
    currentUsers = [...currentUsers, createdUser];
    return HttpResponse.json({ success: true, data: createdUser });
  }),

  http.put('/api/users/:id', async ({ params, request }) => {
    const id = Number(params.id);
    const updatedUser = await request.json();
    await delay(400);
    currentUsers = currentUsers.map(user => 
      user.id === id ? { ...user, ...(updatedUser as Partial<UserData>) } : user
    );
    const result = currentUsers.find(u => u.id === id);
    return HttpResponse.json({ success: true, data: result });
  }),

  http.delete('/api/users/:id', async ({ params }) => {
    const id = Number(params.id);
    await delay(300);
    currentUsers = currentUsers.filter(user => user.id !== id);
    return HttpResponse.json({ success: true, id });
  }),

  http.post('/api/users/batch-delete', async ({ request }) => {
    const { ids } = await request.json() as { ids: number[] };
    await delay(400);
    currentUsers = currentUsers.filter(user => !ids.includes(user.id));
    return HttpResponse.json({ success: true, ids });
  }),

  http.get('/api/heroes', async () => {
    await delay(300);
    return HttpResponse.json({ success: true, data: mockHeroes });
  }),
];
