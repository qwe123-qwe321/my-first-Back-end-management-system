// 头部常量数据：定义通知列表、未读邮件、未读评论等模拟数据，供消息弹窗组件使用
// 通知列表数据
export const notificationList = [
  {
    color: 'bg-green-500',
    title: '收到了 14 份新周报',
    desc: '描述信息描述信息描述信息',
    time: '3 小时前',
  },
  {
    color: 'bg-blue-500',
    title: 'Tom 回复了你',
    desc: '描述信息描述信息描述信息',
    time: '刚刚',
  },
  {
    color: 'bg-purple-500',
    title: 'Jack 评论了你',
    desc: '描述信息描述信息描述信息',
    time: '2024-10-10',
  },
  {
    color: 'bg-pink-500',
    title: '代办提醒',
    desc: '描述信息描述信息描述信息',
    time: '昨天',
  },
];

// 未读评论数据
export const unreadComments = [
  {
    color: 'bg-blue-500',
    title: '李白回复了你',
    desc: '你的攻略写得很详细，学到了很多',
    time: '10 分钟前',
  },
  {
    color: 'bg-green-500',
    title: '马可波罗回复了你',
    desc: '感谢你的建议，出装确实很强',
    time: '2 小时前',
  },
];

// 未读邮件数据
export const unreadMails = [
  {
    color: 'bg-purple-500',
    title: '系统通知',
    desc: '赛季结算报告已生成，请查收',
    time: '昨天',
  },
];

// 消息配置（统一管理图标对应的count和内容类型）
export const messageConfig = {
  notification: { count: 5 },
  comment: { count: 2 },
  mail: { count: 1 },
};
