// 英雄数据文件：定义英雄详情、语音台词、皮肤列表等数据结构，提供英雄管理页面的完整数据源
export interface VoiceLine {
  id: number;
  text: string;
  type: string;
  audio: string;
}

export interface Skin {
  id: number;
  name: string;
  image: string;
  voiceLines: VoiceLine[];
}

export interface Hero {
  id: number;
  name: string;
  title: string;
  image: string;
  skins: Skin[];
}

export const heroesData: Hero[] = [
  {
    id: 0,
    name: '嫦娥',
    title: '寒月公主',
    image:
      'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220825/16614099595173.jpg',
    skins: [
      {
        id: 0,
        name: '寒月公主',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220413/16498388948285.jpg',
        voiceLines: [
          {
            id: 0,
            text: '银色的神，祂心中并不冷。',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497399153468.wav',
          },
          {
            id: 1,
            text: '光之灵，听我召唤！',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497399717685.wav',
          },
          {
            id: 2,
            text: '你是那位百发百中的弓箭手吗？',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220415/16500068265796.mp3',
          },
          {
            id: 3,
            text: '和火焰、露水，在一起……',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497399408986.mp3',
          },
          {
            id: 4,
            text: '在日之塔上祈求夜晚的神灵',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497401785166.wav',
          },
        ],
      },
      {
        id: 1,
        name: '落星盏',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20250124/17376876772686.jpg',
        voiceLines: [
          {
            id: 0,
            text: '对花啜茶，茶香为花香所掩，不可谓风雅。',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250124/17376881773566.mp3',
          },
          {
            id: 1,
            text: '步天衢，散万星。',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250124/17376885262465.mp3',
          },
          {
            id: 2,
            text: '茗茶可去乏解腻，上好的，想喝哪一种？',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250124/17376909711004.mp3',
          },
          {
            id: 3,
            text: '纵经岁迁延，亦无法弥合之憾……月圆之日再相逢。',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250124/17376892571324.mp3',
          },
          {
            id: 4,
            text: '人合物之英，器伴人而灵。',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250124/17376892373884.mp3',
          },
        ],
      },
      {
        id: 2,
        name: '如梦令',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220413/16498317179731.jpg',
        voiceLines: [
          {
            id: 0,
            text: '它们有着，不同于强者的力量。',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497407453704.wav',
          },
          {
            id: 1,
            text: '看呐，重逢的指引！',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497408061447.wav',
          },
          {
            id: 2,
            text: '经历贯穿命运的强光……',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220428/16511336034479.mp3',
          },
          {
            id: 3,
            text: '你对着月亮许了什么愿？',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497408823064.wav',
          },
          {
            id: 4,
            text: '在日之塔上祈求夜晚的神灵',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497409179364.wav',
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: '朵莉亚',
    title: '人鱼之歌',
    image:
      'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20231128/17011624032112.jpg',
    skins: [
      {
        id: 0,
        name: '人鱼之歌',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20231031/16987185873424.jpg',
        voiceLines: [
          {
            id: 0,
            text: '你听，大海与夕阳之间藏着许多金色的旋律~',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20231030/16986514601453.mp3',
          },
          {
            id: 1,
            text: '再见了大海，我会早日回家的！',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20231030/16986520063454.mp3',
          },
          {
            id: 2,
            text: '哇，那个家族以月亮为标志，似乎比命运家族的好看呢。',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20231030/16986548677548.mp3',
          },
          {
            id: 3,
            text: ' 什么声音？嘘，暂时留在词语或宁静里吧！',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20231030/16986553657553.mp3',
          },
          {
            id: 4,
            text: '海都的歌谣，传到了云中。原来我的力量，可以到达这么远的地方',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20251024/17612765768608.mp3',
          },
        ],
      },
      {
        id: 1,
        name: '幻珠鲛人',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20250808/17546425063159.jpg',
        voiceLines: [
          {
            id: 0,
            text: '你问我最昂贵的宝贝吗？所谓无价之宝易得，至诚情谊难寻！',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250808/17546439933531.mp3',
          },
          {
            id: 1,
            text: '上古鲛人，常以歌传情。',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250808/17546443998884.mp3',
          },
          {
            id: 2,
            text: '相柳师兄可是忘了有教学院校训？——一日为同门，余生皆唤同伴。',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250808/17546448341959.mp3',
          },
          {
            id: 3,
            text: '有人对我说：世间百花各异，定有识其香者。',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250808/17546447984715.mp3',
          },
          {
            id: 4,
            text: '山海有异闻，奇都多妖兽。',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250808/17546439705480.mp3',
          },
        ],
      },
      {
        id: 2,
        name: '神骥·鸣幻洲',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20260210/17706961935476.jpg',
        voiceLines: [
          {
            id: 0,
            text: '沉眠千年的古道啊，今夜就由我的歌声唤醒～',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20260209/17706382689366.mp3',
          },
          {
            id: 1,
            text: '游子啊，你从何处来？',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20260209/17706388871868.mp3',
          },
          {
            id: 2,
            text: '云姐姐才没有出去捣乱！她在房中……看了一天的书！',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20260209/17706395033836.mp3',
          },
          {
            id: 3,
            text: '无聊的见闻，不能记在谱子里哦～',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20260209/17706385401301.mp3',
          },
          {
            id: 4,
            text: '乘风起，驰万里',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20260209/17706381829571.mp3',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: '西施',
    title: '幻纱之灵',
    image:
      'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220413/16498398488579.jpg',
    skins: [
      {
        id: 0,
        name: '幻纱之灵',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220413/16498398488579.jpg',
        voiceLines: [
          {
            id: 0,
            text: '每一种境遇都是命运的附赠品。',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220411/16496676947979.wav',
          },
          {
            id: 1,
            text: '来抓我呀~笨蛋',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220411/16496678215688.wav',
          },
          {
            id: 2,
            text: '大鱼，我们好像在哪儿见过~',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220415/16500002182217.mp3',
          },
          {
            id: 3,
            text: '宝贝……藏……在……',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220411/16496677861634.wav',
          },
          {
            id: 4,
            text: '看看今天是哪位好眼光的同学光临。',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240625/17193079606792.mp3',
          },
        ],
      },
      {
        id: 1,
        name: '续相思',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20250221/17401141003828.jpg',
        voiceLines: [
          {
            id: 0,
            text: '愿永岁终朝情常若此，不忍见别情离绪。',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250219/17399465509276.mp3',
          },
          {
            id: 1,
            text: '飞光——',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250219/17399469307223.mp3',
          },
          {
            id: 2,
            text: '姻缘，究竟怎么个前生注定……问我，不如问你与他咯！',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250219/17399468777890.mp3',
          },
          {
            id: 3,
            text: '落红无语怨东风……',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250219/17399467653502.mp3',
          },
          {
            id: 4,
            text: '才子佳人一见倾心，岂容你多管闲事？',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250219/17399468243908.mp3',
          },
        ],
      },
      {
        id: 2,
        name: '至美·乘鲤谣',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20231109/16995127469319.jpg',
        voiceLines: [
          {
            id: 0,
            text: '哎嘿～好山好水好风光，人声如海歌如潮！',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20231108/16994291725335.mp3',
          },
          {
            id: 1,
            text: '瞧！鲤鱼跳江心啦！',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20231108/16994310135405.mp3',
          },
          {
            id: 2,
            text: '此歌好比天上星哟~不怕长夜路不明。',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20231108/16994312701005.mp3',
          },
          {
            id: 3,
            text: '不可胡言！',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20231108/16994297136225.mp3',
          },
          {
            id: 4,
            text: '纵使沉渊亦有声……',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20231108/16994298037266.mp3',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: '王昭君',
    title: '冰雪之华',
    image:
      'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220413/16498409888073.jpg',
    skins: [
      {
        id: 0,
        name: '冰雪之华',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220413/16498409888073.jpg',
        voiceLines: [
          {
            id: 0,
            text: '白梅落下之日，归去故里之时。',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220409/16494863231577.wav',
          },
          {
            id: 1,
            text: '绝对零度！',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220409/16494865322046.wav',
          },
          {
            id: 2,
            text: '我要如何相信你，北荒之主？',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20241224/17350267645935.mp3',
          },
          {
            id: 3,
            text: '看到了……故乡的春天……',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220409/16494865011050.wav',
          },
          {
            id: 4,
            text: '垂涎于我美貌的人，都在冰原下冷静反省。',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220409/16494866169592.wav',
          },
        ],
      },
      {
        id: 1,
        name: '映山客',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20241024/17297525944366.jpg',
        voiceLines: [
          {
            id: 0,
            text: '开天嶂兮通天衢，寻山香兮映征途。',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20241023/17296746313500.mp3',
          },
          {
            id: 1,
            text: '风骨不折',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20241023/17296749093175.mp3',
          },
          {
            id: 2,
            text: '隔壁小桑灵同我说，刚才那声巨响是有人把药炉炸了？',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20241023/17296750453713.mp3',
          },
          {
            id: 3,
            text: '寒冬已尽，你会迎来下一个春天。',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20241023/17296748272961.mp3',
          },
          {
            id: 4,
            text: '蔓草有根，系于一方。莫道不移，荫庇八荒！',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20241023/17296746088755.mp3',
          },
        ],
      },
      {
        id: 2,
        name: '长夜焕生',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20260123/17691497856423.jpg',
        voiceLines: [
          {
            id: 0,
            text: '谁将竖琴遗落在海底？谁又将记忆纺成诗曲？',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20260123/17691511239369.mp3',
          },
          {
            id: 1,
            text: '与昨日重逢！',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20260123/17691516846326.mp3',
          },
          {
            id: 2,
            text: '每一步，都化成了水母里最美丽的记忆。',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20260123/17691519259924.mp3',
          },
          {
            id: 3,
            text: '将故事封存！',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20260123/17691513985716.mp3',
          },
          {
            id: 4,
            text: '世界如此陌生，何处的旋律正在远方呼唤？',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20260123/17691516287315.mp3',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: '瑶',
    title: '鹿灵守心',
    image:
      'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220415/16499894635802.jpg',
    skins: [
      {
        id: 0,
        name: '鹿灵守心',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220415/16499894635802.jpg',
        voiceLines: [
          {
            id: 0,
            text: '什么小鹿女呀，一定是世界上最不可爱的孩子吧~',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220408/16494189842957.wav',
          },
          {
            id: 1,
            text: '看，空气！',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220408/16494191572472.wav',
          },
          {
            id: 2,
            text: '阿瑶也想成为像老师一样高大的人！',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220408/16494193768860.wav',
          },
          {
            id: 3,
            text: '别难过，我只是睡一觉。',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220408/16494191035631.wav',
          },
          {
            id: 4,
            text: '我们从玄微森林出来的人，一天要吃掉半个大陆呢。',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220408/16494193455571.wav',
          },
        ],
      },
      {
        id: 1,
        name: '山海·碧波行',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20230215/16764307953835.jpg',
        voiceLines: [
          {
            id: 0,
            text: '万丈深渊，阻不断人心相连',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20230216/16765295981709.mp3',
          },
          {
            id: 1,
            text: '去吧，苍云',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20230215/16764323278383.mp3',
          },
          {
            id: 2,
            text: '追电悄悄告诉我，只要跑得够快，你的吹嘘就追不上他。',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20230215/16764325632779.mp3',
          },
          {
            id: 3,
            text: '生于大地，亦归于大地',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20230215/16764321909971.mp3',
          },
          {
            id: 4,
            text: '诶~，是哪只小鹿在踏水疾行？',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20230215/16764325341268.mp3',
          },
        ],
      },
      {
        id: 2,
        name: '大耳狗之梦',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20250506/17465117381789.jpg',
        voiceLines: [
          {
            id: 0,
            text: '最特别的味道，代表最难忘的瞬间。',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250429/17459152692923.mp3',
          },
          {
            id: 1,
            text: '去试试新配方',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250429/17459159138739.mp3',
          },
          {
            id: 2,
            text: '不要蓬蓬裙~新一期的乐园舞会，我要打扮成全场最成熟的大人！',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250429/17459180434195.mp3',
          },
          {
            id: 3,
            text: '糟糕，甜度超标啦！',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250429/17459158109479.mp3',
          },
          {
            id: 4,
            text: '跟随心的方向，快乐无需指引',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250429/17459152168396.mp3',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: '虞姬',
    title: '森之风灵',
    image:
      'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20230309/16783537126659.jpg',
    skins: [
      {
        id: 0,
        name: '森之风灵',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20230309/16783537126659.jpg',
        voiceLines: [
          {
            id: 0,
            text: '净化森林，净化污秽，净化心灵，净化自己',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220407/16493289379939.wav',
          },
          {
            id: 1,
            text: '自然不打算站在你那边',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220407/16493291192589.wav',
          },
          {
            id: 2,
            text: '那些故事，都被留在了风中，风吹动之时，就会响起',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20221109/16679865266752.mp3',
          },
          {
            id: 3,
            text: '对不起，对不起……',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220407/16493290551327.wav',
          },
          {
            id: 4,
            text: '森林需要养分，像你们这样的养分。',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220407/16493292522646.wav',
          },
        ],
      },
      {
        id: 1,
        name: '神鉴启示录',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20240307/17097969407631.jpg',
        voiceLines: [
          {
            id: 0,
            text: '最初的世界，诞生于规律与法则的交点',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240306/17097137401049.mp3',
          },
          {
            id: 1,
            text: '以神律之名，肃清！',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240306/17097142976108.mp3',
          },
          {
            id: 2,
            text: '愿法度之辉长留',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240306/17097140583708.mp3',
          },
          {
            id: 3,
            text: '我，也身负罪名...',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240306/17097140752570.mp3',
          },
          {
            id: 4,
            text: '当神律的光辉洒向大地，人类，将不再恐惧',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240306/17097140244690.mp3',
          },
        ],
      },
      {
        id: 2,
        name: '愿照.岁时盈',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20250123/17376216748034.jpg',
        voiceLines: [
          {
            id: 0,
            text: '晦明难辨，何以识之？——观象成历，朝暮可纪 ',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250123/17376217642517.mp3',
          },
          {
            id: 1,
            text: '光阴为箭！',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250123/17376221106960.mp3',
          },
          {
            id: 2,
            text: '诸事皆安，愿归星汉',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250123/17376220437296.mp3',
          },
          {
            id: 3,
            text: '生也有涯，知也无涯',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250123/17376219718358.mp3',
          },
          {
            id: 4,
            text: '所念必至，所愿必成',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250123/17376217427819.mp3',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: '不知火舞',
    title: '明媚烈焰',
    image:
      'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220413/16498409718771.jpg',
    skins: [
      {
        id: 0,
        name: '明媚烈焰',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220413/16498409718771.jpg',
        voiceLines: [
          {
            id: 0,
            text: '龙炎舞！',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497342319735.wav',
          },
          {
            id: 1,
            text: '花蝶扇！',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497345502828.wav',
          },
          {
            id: 2,
            text: '放马过来',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220414/16499312319021.mp3',
          },
          {
            id: 3,
            text: '不知火究極奥義！',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497346872893.wav',
          },
          {
            id: 4,
            text: '风车崩！',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497342528711.wav',
          },
        ],
      },
      {
        id: 1,
        name: '花合斗',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20240705/17201646494282.jpg',
        voiceLines: [
          {
            id: 0,
            text: '美貌也可以成为一柄利刃。',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240705/17201628526894.mp3',
          },
          {
            id: 1,
            text: '忆朝昔！',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240705/17201653906068.mp3',
          },
          {
            id: 2,
            text: '幸会，这点见面礼~可还喜欢？',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240705/17201674689777.mp3',
          },
          {
            id: 3,
            text: '已经算过，你的赢面几乎为零~',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240705/17201647135285.mp3',
          },
          {
            id: 4,
            text: '这次大赛，看客已成局中人。',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240705/17201647881606.mp3',
          },
        ],
      },
      {
        id: 2,
        name: '绯月行',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20221104/16675541566579.jpg',
        voiceLines: [
          {
            id: 0,
            text: '世七情六欲，化妖之百态千姿凡',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20221104/16675548192103.wav',
          },
          {
            id: 1,
            text: '月悬！',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20221104/16675558837128.wav',
          },
          {
            id: 2,
            text: '夜尽昼未临，曾有人知，再无人知。',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20221107/16677912111355.wav',
          },
          {
            id: 3,
            text: '回首阑珊处，无月亦无灯……',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20221104/16675558499635.wav',
          },
          {
            id: 4,
            text: '嘘，今夜月色正好',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20221107/16677913888028.wav',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: '公孙离',
    title: '幻舞玲珑',
    image:
      'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20230309/16783536522258.jpg',
    skins: [
      {
        id: 0,
        name: '幻舞玲珑',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20230309/16783536522258.jpg',
        voiceLines: [
          {
            id: 0,
            text: '有缘又有聚~才是阿离的舞台',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220411/16496645482461.mp3',
          },
          {
            id: 1,
            text: '来如雷霆，罢如江海。',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220411/16496647359720.wav',
          },
          {
            id: 2,
            text: '初恋的心动，你懂吗？哼，不懂~',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220411/16496651774617.wav',
          },
          {
            id: 3,
            text: '要幸福……',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220411/16496646766795.wav',
          },
          {
            id: 4,
            text: '你有家吗？有温暖的女孩子在家里等你吗？',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220411/16496650873287.wav',
          },
        ],
      },
      {
        id: 1,
        name: '祈雪灵祝',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220413/16498394946672.jpg',
        voiceLines: [
          {
            id: 0,
            text: '天地一白，有如心胆澄澈~',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220411/16496665362333.wav',
          },
          {
            id: 1,
            text: '雪舞回风！',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220411/16496670523029.wav',
          },
          {
            id: 2,
            text: '轻点轻点，人家的伞都被吹歪了~',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220415/16499934723081.wav',
          },
          {
            id: 3,
            text: '万物复生…...',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220411/16496670268189.wav',
          },
          {
            id: 4,
            text: '来陪我堆雪人呀~哈哈~',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220415/16499934275689.wav',
          },
        ],
      },
      {
        id: 2,
        name: '离恨烟',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20240805/17228411956642.jpg',
        voiceLines: [
          {
            id: 0,
            text: '若真是那山盟犹在有情人，为何江湖赠离恨？',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240805/17228412189771.mp3',
          },
          {
            id: 1,
            text: '是真亦是幻！',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240805/17228416101517.mp3',
          },
          {
            id: 2,
            text: '书上写满了谢绝千金楼主的一千种方式？',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240805/17228418174550.mp3',
          },
          {
            id: 3,
            text: '负心者，当诛。',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240805/17228413908510.mp3',
          },
          {
            id: 4,
            text: '笛声喑哑，亦可生花。',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240805/17228417737826.mp3',
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: '貂蝉',
    title: '绝世舞姬',
    image:
      'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220413/16498485138245.jpg',
    skins: [
      {
        id: 0,
        name: '绝世舞姬',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220413/16498485138245.jpg',
        voiceLines: [
          {
            id: 0,
            text: '花有再开的那天，人有重逢的时候吗？',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497489502579.wav',
          },
          {
            id: 1,
            text: '美貌也是武器',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497490822345.wav',
          },
          {
            id: 2,
            text: '想欣赏妾身的舞姿吗？',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497489343971.wav',
          },
          {
            id: 3,
            text: '品味和智商令人同情的你们注定孤独一生',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497491594890.wav',
          },
          {
            id: 4,
            text: '纤手折其枝，花落何飘扬。请谢彼姝子，何为见损伤。（选自宋子侯《董娇饶》）',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240127/17063316715338.mp3',
          },
        ],
      },
      {
        id: 1,
        name: '馥梦繁花',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20250522/17478962414867.jpg',
        voiceLines: [
          {
            id: 0,
            text: '生命之息如长河流经大地，万千造物的奇景，不过是其中荡漾的涟漪。',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250522/17478974185176.mp3',
          },
          {
            id: 1,
            text: '熏风煦日~',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250522/17478977336509.mp3',
          },
          {
            id: 2,
            text: '来啊，循着风的脚步。',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250522/17478982884611.mp3',
          },
          {
            id: 3,
            text: '在时间之外……',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250522/17478976706410.mp3',
          },
          {
            id: 4,
            text: '生命，总去向更远方。',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250522/17478980729276.mp3',
          },
        ],
      },
      {
        id: 2,
        name: '幻阙歌',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20230214/16763560989536.jpg',
        voiceLines: [
          {
            id: 0,
            text: '“船过沧浪，骤起蜃楼；客行广漠，忽现海市……”这就是凡世中，关于我们的记述？',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20230214/16763571002637.mp3',
          },
          {
            id: 1,
            text: '天人栩栩来～',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20230214/16763578268826.mp3',
          },
          {
            id: 2,
            text: '天上宫阙无处归……莫回首，梦觉已千秋。',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20230216/16765281023965.mp3',
          },
          {
            id: 3,
            text: '都化作，片羽浮光……',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20230214/16763576938357.mp3',
          },
          {
            id: 4,
            text: '他人笑尔频说梦，（轻笑）焉知彼亦非梦中？',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20230214/16763574899692.mp3',
          },
        ],
      },
    ],
  },
  {
    id: 9,
    name: '小乔',
    title: '恋之微风',
    image:
      'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220413/16498398015693.jpg',
    skins: [
      {
        id: 0,
        name: '恋之微风',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220413/16498398015693.jpg',
        voiceLines: [
          {
            id: 0,
            text: '今天，也要打起精神来！',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497341177407.wav',
          },
          {
            id: 1,
            text: '风，听从我的呼唤！',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497342174924.wav',
          },
          {
            id: 2,
            text: '鸢舞晴空，百病无踪~仲谋快来~大家都在等你！',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250630/17512669962264.mp3',
          },
          {
            id: 3,
            text: '周瑜大人……',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497341906566.wav',
          },
          {
            id: 4,
            text: '代表大人，消灭你们！',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497342604710.wav',
          },
        ],
      },
      {
        id: 1,
        name: '天鹅之梦',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220413/16498477448505.jpg',
        voiceLines: [
          {
            id: 0,
            text: '来曲开场舞，至死方休！',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497453425461.mp3',
          },
          {
            id: 1,
            text: '旋转，华尔兹',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497458017771.wav',
          },
          {
            id: 2,
            text: '哇，癞蛤蟆想吃天鹅肉~~',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497461031579.mp3',
          },
          {
            id: 3,
            text: '呵呵，真是让人愉快呢。',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497454584638.mp3',
          },
          {
            id: 4,
            text: '死神缺个舞伴',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497460837515.wav',
          },
        ],
      },
      {
        id: 2,
        name: '时之魔女',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20240307/17098042041277.jpg',
        voiceLines: [
          {
            id: 0,
            text: '充满勇气的心，就是我的魔法！',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240306/17097097311037.mp3',
          },
          {
            id: 1,
            text: '独家大放送！',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240306/17097103023974.mp3',
          },
          {
            id: 2,
            text: '我们可不是一个赛道，这句话等你登上电视屏幕再说吧！',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250115/17369334903683.mp3',
          },
          {
            id: 3,
            text: '完美收官~',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240306/17097099869804.mp3',
          },
          {
            id: 4,
            text: '嘟嘟嘟嘟嘟~时之城最新入驻魔女，开启新冒险！',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240306/17097101556032.mp3',
          },
        ],
      },
    ],
  },
  {
    id: 10,
    name: '甄姬',
    title: '洛神降临',
    image:
      'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220413/16498394966283.jpg',
    skins: [
      {
        id: 0,
        name: '洛神降临',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220413/16498394966283.jpg',
        voiceLines: [
          {
            id: 0,
            text: '果然，先爱上的那个人，是输家。',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497738954851.wav',
          },
          {
            id: 1,
            text: '悲伤...逆流成河...',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497739994008.wav',
          },
          {
            id: 2,
            text: '人家抒发哀伤时，不要随便破坏氛围好吗？',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497738731930.wav',
          },
          {
            id: 3,
            text: '绝望吗？',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497740457951.wav',
          },
          {
            id: 4,
            text: '原来是只旱鸭子……',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497740556071.wav',
          },
        ],
      },
      {
        id: 1,
        name: '雪境奇遇',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20250116/17369908455694.jpg',
        voiceLines: [
          {
            id: 0,
            text: '渴望自由的灵魂，远隔时空亦能共鸣。',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250115/17369343742212.mp3',
          },
          {
            id: 1,
            text: '你们该离开了！',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250115/17369350406742.mp3',
          },
          {
            id: 2,
            text: '在这场冬日的盛典里，所有人皆会活成想要的模样。',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250115/17369354807707.mp3',
          },
          {
            id: 3,
            text: '随心而行，探访远方！',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250115/17369343484717.mp3',
          },
          {
            id: 4,
            text: '从此刻起，我只回应自己的期待。',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250115/17369348287070.mp3',
          },
        ],
      },
      {
        id: 2,
        name: '至美·化雀舞',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20231109/16995125192784.jpg',
        voiceLines: [
          {
            id: 0,
            text: '漫天光翎化余烬，原道是，嫁与爱情。',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20231108/16994317938053.mp3',
          },
          {
            id: 1,
            text: '化雀新生！',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20231108/16994327907631.mp3',
          },
          {
            id: 2,
            text: '星光照我路，一舞化辰星。',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20231108/16994329403969.mp3',
          },
          {
            id: 3,
            text: '过不好自己的日子，偏指点他人生活。',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20231108/16994325979585.mp3',
          },
          {
            id: 4,
            text: '凭心以往，何必相思。',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20231108/16994329108417.mp3',
          },
        ],
      },
    ],
  },
  {
    id: 11,
    name: '伽罗',
    title: '破魔之箭',
    image:
      'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220418/16502527442965.jpg',
    skins: [
      {
        id: 0,
        name: '破魔之箭',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220418/16502527442965.jpg',
        voiceLines: [
          {
            id: 0,
            text: '羌笛何须怨杨柳，春风不度玉门关。',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220407/16493147556451.wav',
          },
          {
            id: 1,
            text: '学识告诉你何谓不可触碰',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220407/16493163278249.wav',
          },
          {
            id: 2,
            text: '寻回典籍是我的责任，就像寻回长城是你的责任。',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220407/16493182234710.wav',
          },
          {
            id: 3,
            text: '千窟为佑，万代千秋',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220407/16493162772193.wav',
          },
          {
            id: 4,
            text: '夫子信中所述，与千窟最古老的壁画所录，不谋而合。',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250325/17428946964686.mp3',
          },
        ],
      },
      {
        id: 1,
        name: '最初的交响',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20250220/17400447728394.jpg',
        voiceLines: [
          {
            id: 0,
            text: '宇宙未明之际，神作的乐章，奏响世界的第一声低吟。',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250216/17397193705163.mp3',
          },
          {
            id: 1,
            text: '管弦同声。',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250216/17397203854496.mp3',
          },
          {
            id: 2,
            text: '愿未来，与你们同在……',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250216/17397199496856.mp3',
          },
          {
            id: 3,
            text: '回归最初的音序。',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250216/17397199098260.mp3',
          },
          {
            id: 4,
            text: '星穹彼端，是否也有歌声，与我回应。',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250216/17397201857125.mp3',
          },
        ],
      },
      {
        id: 2,
        name: '沧流箭',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20260212/17708313264145.jpg',
        voiceLines: [
          {
            id: 0,
            text: '箭已在弦，志不在雁，而在天下痼疾。',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20260211/17708107458150.mp3',
          },
          {
            id: 1,
            text: '静心，凝神。',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20260211/17708112165580.mp3',
          },
          {
            id: 2,
            text: '唯有烈火才能煅出琉璃。我很好奇，秘籍之后那位搅动风云之人。',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20260211/17708179162282.mp3',
          },
          {
            id: 3,
            text: '此身虽微，愿作星火，照一隅暗夜。',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20260211/17708110843267.mp3',
          },
          {
            id: 4,
            text: '出入红尘里，归去林深处。',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20260211/17708115197523.mp3',
          },
        ],
      },
    ],
  },
  {
    id: 12,
    name: '海月',
    title: '永夜之心',
    image:
      'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220915/16632370847945.jpg',
    skins: [
      {
        id: 0,
        name: '永夜之心',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220915/16632370847945.jpg',
        voiceLines: [
          {
            id: 0,
            text: '看似不朽的生命，不过无聊的枯骨。',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220915/16632373745560.mp3',
          },
          {
            id: 1,
            text: '晦明。',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220915/16632381452224.mp3',
          },
          {
            id: 2,
            text: '把不属于你的东西，交还给神。',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220915/16632388477371.mp3',
          },
          {
            id: 3,
            text: '等等，等等我……',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220915/16632378529913.mp3',
          },
          {
            id: 4,
            text: '在尊神未归的日子里，我们自称为朔。',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250325/17428924234720.mp3',
          },
        ],
      },
      {
        id: 1,
        name: '金乌负日',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20240425/17140168149305.jpg',
        voiceLines: [
          {
            id: 0,
            text: '人力或可穷，意气不可尽去。',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240425/17140325549762.mp3',
          },
          {
            id: 1,
            text: '纵目之人，乃逐光而生。',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240425/17140327303455.mp3',
          },
          {
            id: 2,
            text: '太曦破长夜！',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240425/17140327623308.mp3',
          },
          {
            id: 3,
            text: '怎能再次沉入黑暗……',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240425/17140329439137.mp3',
          },
          {
            id: 4,
            text: '宵小之辈，何与九天争辉？',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240425/17140278137540.mp3',
          },
        ],
      },
      {
        id: 2,
        name: '浮梦罗烟',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20230803/16910498234898.jpg',
        voiceLines: [
          {
            id: 0,
            text: '踏足此间之人，灵魂亦待价而沽。',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20230803/16910507023086.mp3',
          },
          {
            id: 1,
            text: '贪嗔痴。',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20230803/16910513452501.mp3',
          },
          {
            id: 2,
            text: '浮生一梦，百年匆匆……',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20230803/16910510197814.mp3',
          },
          {
            id: 3,
            text: '沉沦于臆想，钟情于虚妄。',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20230803/16910510692544.mp3',
          },
          {
            id: 4,
            text: '汝愿既闻，可归去矣。',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20230803/16910511171895.mp3',
          },
        ],
      },
    ],
  },
  {
    id: 13,
    name: '大乔',
    title: '沧海之曜',
    image:
      'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220413/16498357925883.jpg',
    skins: [
      {
        id: 0,
        name: '沧海之曜',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220413/16498357925883.jpg',
        voiceLines: [
          {
            id: 0,
            text: '映照潮汐的起伏，以免迷失战场的道路',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497738894238.mp3',
          },
          {
            id: 1,
            text: '前往需要你的地方',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497742925866.wav',
          },
          {
            id: 2,
            text: '你的魔道不够纯粹！',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497743974396.wav',
          },
          {
            id: 3,
            text: '会原谅我的任性吗？',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497742599304.wav',
          },
          {
            id: 4,
            text: '此时相望不相闻，愿逐月华流照君。鸿雁长飞光不度，鱼龙潜跃水成文。',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240127/17063360301802.mp3',
          },
        ],
      },
      {
        id: 1,
        name: '挚爱花嫁',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220523/16532783813834.jpg',
        voiceLines: [
          {
            id: 0,
            text: '或许父亲已经猜到，是我打开笼子放走了青鸟',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220520/16530398427606.wav',
          },
          {
            id: 1,
            text: '舞会时间',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220520/16530406001926.wav',
          },
          {
            id: 2,
            text: '青鸟会指引你前行~',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220520/16530408987071.wav',
          },
          {
            id: 3,
            text: '纵使跌落，亦曾相拥……',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220520/16530401588229.wav',
          },
          {
            id: 4,
            text: '一头恶龙？它会不会打扰我的婚礼？',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220520/16530409776822.wav',
          },
        ],
      },
      {
        id: 2,
        name: '乘龙·忆丹青',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20240204/17070417157215.jpg',
        voiceLines: [
          {
            id: 0,
            text: '文章托不朽，丹青寄尘凡——请君看取今朝事，一万年后亦宛然。',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240204/17070388319051.mp3',
          },
          {
            id: 1,
            text: '群峰叠翠。',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240204/17070390508004.mp3',
          },
          {
            id: 2,
            text: '我在千秋后一梦，梦到大江东去，长风回舻……',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240204/17070398986898.mp3',
          },
          {
            id: 3,
            text: '原来相逢是梦中……',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240204/17070389853140.mp3',
          },
          {
            id: 4,
            text: '承千秋之祐，聚万象为龙！',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240204/17070388095661.mp3',
          },
        ],
      },
    ],
  },
  {
    id: 14,
    name: '安琪拉',
    title: '魔女',
    image:
      'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220413/16498381891918.jpg',
    skins: [
      {
        id: 0,
        name: '原皮',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220413/16498381891918.jpg',
        voiceLines: [
          {
            id: 0,
            text: '神秘会屈从于更高的神秘！',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497554618336.wav',
          },
          {
            id: 1,
            text: '哟呵，火烧屁屁罗',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497555506063.wav',
          },
          {
            id: 2,
            text: '你说的黄金森林到底在哪？',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220428/16511329683777.mp3',
          },
          {
            id: 3,
            text: '玩火……自焚~',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497555342182.wav',
          },
          {
            id: 4,
            text: '点燃你们，就有焰火看罗~',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497556908044.wav',
          },
        ],
      },
      {
        id: 1,
        name: '乘龙·聚宝船',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20240204/17070417939919.jpg',
        voiceLines: [
          {
            id: 0,
            text: '满船罗绮，价比明珠千斛；白釉青花，当换异木奇香～',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240204/17070404979009.mp3',
          },
          {
            id: 1,
            text: '东瞰扶胥!',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240204/17070408139012.mp3',
          },
          {
            id: 2,
            text: '信风已至，满载当归～',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240204/17070410621565.mp3',
          },
          {
            id: 3,
            text: '海角天涯，再来相见吧～',
            type: '功能语言',
            audio:
              'ttps://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240204/17070407443681.mp3',
          },
          {
            id: 4,
            text: '承千秋之祐，聚万象为龙！',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20240204/17070404616005.mp3',
          },
        ],
      },
      {
        id: 2,
        name: '颠倒童话.魔镜',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20260227/17721848993155.jpg',
        voiceLines: [
          {
            id: 0,
            text: '欢迎回到真实世界！公主们。',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20260227/17721850761627.mp3',
          },
          {
            id: 1,
            text: '该醒醒了，小傻瓜~',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20260227/17721857834059.mp3',
          },
          {
            id: 2,
            text: '水 晶 棺 ，睡起来还不错~',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20260227/17721855235613.mp3',
          },
          {
            id: 3,
            text: '这次的毒苹果~也没有很厉害嘛',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20260227/17721855464184.mp3',
          },
          {
            id: 4,
            text: '反派往往死于话多。',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20260227/17721855771159.mp3',
          },
        ],
      },
    ],
  },
  {
    id: 15,
    name: '妲己',
    title: '魅力之狐',
    image:
      'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220413/16498388444243.jpg',
    skins: [
      {
        id: 0,
        name: '魅力之狐',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20220413/16498388444243.jpg',
        voiceLines: [
          {
            id: 0,
            text: '努力做主人喜欢的事。',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497297529788.wav',
          },
          {
            id: 1,
            text: '妲己，陪你玩~',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497298459175.wav',
          },
          {
            id: 2,
            text: '我的能力，对你失效了……',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250826/17561939813313.mp3',
          },
          {
            id: 3,
            text: '啊，被玩坏了……',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20220412/16497298262162.wav',
          },
          {
            id: 4,
            text: '迷路的时候，那只可爱的大狗找到了妲己。',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250605/17491109333717.mp3',
          },
        ],
      },
      {
        id: 1,
        name: '青丘·九尾',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20230510/16836870171080.jpg',
        voiceLines: [
          {
            id: 0,
            text: '当日天火骤至，青丘十方成灰……不知族亲今日可还安好？',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20230510/16836852266894.mp3',
          },
          {
            id: 1,
            text: '灵狐惑心~',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20230510/16836857475726.mp3',
          },
          {
            id: 2,
            text: '世间有情千百万种，竟能记录在如此薄薄一册中？',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250219/17399474401441.mp3',
          },
          {
            id: 3,
            text: '式微式微胡不归……',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20230510/16836856672837.mp3',
          },
          {
            id: 4,
            text: '勘破心障！',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20230510/16836856897492.mp3',
          },
        ],
      },
      {
        id: 2,
        name: '愿照.众生和',
        image:
          'https://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20250124/17376875356917.jpg',
        voiceLines: [
          {
            id: 0,
            text: '万壑阻隔，通连几何？——曲奏心和，天涯同歌！',
            type: '移动语音',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250123/17376148373748.mp3',
          },
          {
            id: 1,
            text: '琴瑟会友~',
            type: '技能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250123/17376152161575.mp3',
          },
          {
            id: 2,
            text: '先闻鼓乐肃杀，后转弦音柔情，正合有人~心口不一',
            type: '互动语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250123/17376155718467.mp3',
          },
          {
            id: 3,
            text: '所念必至，所愿必成',
            type: '功能语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250123/17376148061224.mp3',
          },
          {
            id: 4,
            text: '曲终人不散~',
            type: '剧情语言',
            audio:
              'https://game.gtimg.cn/images/yxzj/zlkdatasys/audios/audio/20250123/17376150713527.mp3',
          },
        ],
      },
    ],
  },
];
