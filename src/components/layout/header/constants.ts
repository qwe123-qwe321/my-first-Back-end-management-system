// 通知列表数据
export const notificationList = [
  { color: 'bg-green-500', title: '收到了 14 份新周报', desc: '描述信息描述信息描述信息', time: '3 小时前' },
  { color: 'bg-blue-500', title: 'Tom 回复了你', desc: '描述信息描述信息描述信息', time: '刚刚' },
  { color: 'bg-purple-500', title: 'Jack 评论了你', desc: '描述信息描述信息描述信息', time: '2024-10-10' },
  { color: 'bg-pink-500', title: '代办提醒', desc: '描述信息描述信息描述信息', time: '昨天' },
];

// 未读评论数据
export const unreadComments = [
  '李白在你的攻略下回复了你',
  '马可波罗说你出装很强',
];

// 未读邮件数据
export const unreadMails = [
  '系统发送了赛季结算报告',
];

// 消息配置（统一管理图标对应的count和内容类型）
export const messageConfig = {
  notification: { count: 5 },
  comment: { count: 2 },
  mail: { count: 1 },
};