// 敏感词数组
var wordsArray = [
    '独裁',
    '极左',
    '国家机器',
    '内部斗争',
    '修改宪法',
    '修宪',
    '言论自由',
    'freespeech',
    '言论&&审查',
    '审查&&制度',
    '言论封锁',
    '因言获罪',
    '新闻自由',
    '新闻管制',
    '法西斯',
    '法东斯',
    '四个意识',
    '四个自信',
    '总理',
    '中南海',
    '华春莹',
    '华姐',
    '华大妈',
    '裆员',
    '领导人',
    '形式主义',
    '终身制',
    '网络审查',
    '政治改革',
    '政改',
    '夹边沟',
    '信女',
    '吃素',
    '歌舞升平',
    '#小粉红',
    '墙国',
    '你国',
    '尼国',
    '妳国',
    '您国',
    '我朝',
    '你朝',
    '你党',
    '复辟',
    '登基',
    '先王',
    '先主',
    '先皇',
    '万邦来朝',
    '德不配位',
    '庆父',
    '屁民',
    '稻',
    '平庸的恶',
    '反对&&习',
    '吾皇万岁',
    '万碎',
    '习王',
    '习皇',
    '习太子',
    '刁王',
    '习大大',
    '刁da',
    '刁太太',
    '习太太',
    'xdd',
    'xidd',
    'xidad',
    'dada',
    '维尼',
    'weini',
    'winnie',
    '包砸',
    '总加速师',
    '总书记',
    '圣上',
    '刁jin',
    '叼jin',
    '刁jing',
    '叼jing',
    '远pin',
    '远ping',
    '叼远',
    '刁远',
    'xjp',
    'xijin',
    'jinping',
    'jingping',
    'jinpin',
    'xijing',
    '翠',
    'cui',
    '亲自指挥',
    '亲自部署',
    '习以为常',
    '去习',
    '倒习',
    '习卒',
    '习垃圾',
    '虫合',
    '蛤蛤',
    '长者',
    '虵',
    '+1s',
    '续一秒',
    '膜法师',
    '隐瞒不报',
    '瞒报',
    '吹哨人',
    '训诫',
    '发哨人',
    '发哨子',
    '红会',
    '红十字',
    '黑十字',
    '鄂a0260w',
    '八个口罩',
    '8个口罩',
    '#复旦',
    '军运会',
    'junyunhui',
    '空椅子',
    '某奖',
    '和平奖',
    '格萨尔王',
    '纽约时报',
    '扭腰时报',
    'nytimes',
    '景云里',
    '法轮功',
    '送中占中',
    '港警',
    '曱甴',
    '五大诉求',
    '何以这恐惧抹不走',
    '刘晓波',
    '我的最后陈述',
    'lwl',
    '艾芬',
    '蒋彦永',
    '陈秋实',
    '方斌',
    '金燕玲',
    '袁项城',
    '天安门',
    '坦克',
    '学运',
    '民运',
    '学生运动',
    '三十一周年',
    '8的平方',
    '八的平方',
    '进p',
    '撒传单',
    '麻麻',
    '七3',
    '淫秽图片',
    '怹',
    '宪章',
    '丽卡酱',
    '形同虚设',
    '支那',
    '枝那',
    '支纳',
    '黄祸',
    'nobelprize',
    'peaceprize',
    '不能不明白',
    'doyouhearthepeoplesing',
    '习&&面具',
    '钟意&&5块',
    '北京&&学生',
    '江&&过世',
    '江&&去了',
    '翻墙',
    'VPN',
    '李鹏',
    '赵紫阳',
    '月月鸟',
    '巴拿马',
    'panamapaper',
    '普选',
    '1989',
    '六四',
    'liusi',
    'liu4',
    '6si',
    '8964',
    '89事件',
    '89动乱',
    '学生动乱',
    '变态辣椒',
    '达赖',
    '#敏感词',
    '集中营',
    '共产',
    '共狗',
    '共匪',
    '党禁',
    '毛泽东',
    '邓小平',
    '席主',
    '端传媒',
    '两会',
    '港独',
    '习&&倒退',
    '反修例',
    '姓赵',
    '克强',
    '薄熙来',
    '岐山',
    '应书记',
    '某贵',
    '春蕾',
    '公开信',
    '大国战役',
    '大国战疫',
    '歪脖',
    '一统江湖',
    '黄袍加身',
    '称帝',
    '令计划',
    '军委',
    'jzm',
    '大纪元',
    '北京之春',
    '魏京生',
    '十八大',
    '博讯',
    '谁是新中国',
    '一党专制',
    '东突',
    '国家囚徒',
    '国家的囚徒',
    '国&&防火墙',
    '家&&防火墙',
    '政治局',
    '乌尔凯西',
    '吾尔开希',
    '王丹',
    '柴玲',
    '九评',
    '常委',
    '周永康',
    '胡耀邦',
    '姓江的',
    '姓习',
    '姓刁',
    '维园',
    '维多利亚公园',
    '驾崩',
    '学潮',
    '真理部',
    '维权律师',
    '维权人士',
    '维稳',
    '大大&&情人',
    '习&&情人',
    '牟林翰',
    '包丽',
    '自焚',
    'bigbig',
    'p4实验室',
    '外国人&&永居条例',
    '外国人&&永久居留',
    '反人类罪',
    '#镜干',
    '境外势力',
    '粉饰太平',
    '民主万岁',
    '花千芳',
    '世袭',
    '周小平',
    '山呼万岁',
    '学术独立思想自由',
    '政罗教网无羁绊',
    '马基雅维利',
    '苏联笑话',
    '政治笑话',
    '问贵',
    '文贵',
    '初中毕业',
    '初中肄业',
    '奸虐',
    '连任',
    '国妖',
    '撒钱',
    '撒币',
    '腾退',
    '军车',
    '批量死亡',
    '瓷国人',
    'ptt',
    '开倒车',
    '历史倒退',
    '鸡国',
    '造神',
    '10块&&钟',
    '王淑平',
    '权贵',
    '集权',
    '反华',
    '仲勋',
    '邱占萱',
    '中国政府',
    '习&&两个平台',
    '习&&背锅',
    '国母',
    '集体失语',
    'urumuqi',
    'urumqi',
    '南方周末',
    '历史罪人',
    '浪费纳税人',
    '经济停摆',
    '大兔子',
    '大🐰',
    '大🐇',
    '5±1',
    '#渔村',
    '孙文斌',
    '贸易争端',
    '丹麦&&疫情',
    '#追责',
    '#404',
    '高层内部',
    '菜奇',
    '蔡奇',
    '#哀悼',
    '#黑白',
    '古月',
    '作秀',
    '疫情&&失业',
    '习像',
    '亚洲周刊',
    '剥夺&&知情权',
    '习&&离异',
    '习&&亲戚',
    'x氏',
    '问g',
    '文g',
    '闻g',
    '纹g',
    '温g',
    '稳g',
    '蚊g',
    '吻g',
    '任志强',
    '路德',
    '羽卒',
    '膜包',
    '肿锅',
    '终国',
    '打压异己',
    '🐻',
    '🌾',
    '🐸',
    '👨‍🌾',
    '👩‍🌾',
    '红三代',
    '红二代',
    '人民报',
    '权斗',
    '影帝',
    '乡岗',
    'hongkong',
    '恶法',
    '周保松',
    '论&&老任',
    '仑&&老任',
    'lun&&老任',
    '堂弟&&才明',
    '上前线&&孕妇',
    'kano',
    '习&&猪头',
    '希望之声',
    '引咎辞职',
    '贵族气质',
    '周雪光',
    '习&&说错',
    '川帝',
    '习帝',
    '断崖式下跌',
    '👓',
    '魔幻中国',
    '习&&前任',
    '习&&女儿',
    '习&&儿子',
    '习&&离婚',
    '习&&口误',
    '习&&前妻',
    '笼的传人',
    '疫情&&损失',
    '战斗部',
    '蚁民',
    '戴上皇冠',
    '王冠一',
    '疫情&&破产',
    '纽时',
    'chinesevirus',
    '何厚铧',
    '操弄舆论',
    '控制舆论',
    '希望的田野上',
    '排名不分先后左右忠奸',
    '称王称霸',
    '三角地',
    '湖底群魂',
    '岳昕',
    '岳日斤',
    '丘山日斤',
    '余浚聪',
    '沈梦雨',
    '顾佳悦',
    '张圣业',
    '张耀祖',
    '刘鹏华',
    '米久平',
    '李展',
    '展振振',
    '郑永明',
    '黎智英',
    '黄之锋',
    '网信办',
    '如果我不交代谣言就永远没完',
    '常凯',
    '中国梦',
    '韭国',
    '韭菜国',
    '一言堂',
    'emptychair',
    '刘霞',
    '你支',
    '恨国党',
    'xi氏',
    '三月半',
    '金胖',
    '金五胖',
    '金四胖',
    '金三胖',
    '金二胖',
    '金大胖',
    'kimjongun',
    '一统天下',
    '带路党',
    '习&&外号',
    '习&&集团',
    '习&&统治',
    '禁忌词',
    '习&&辞职',
    '天津兆维',
    '游游了会',
    '喷墨',
    '泼墨',
    '董瑶琼',
    '董建彪',
    '华涌',
    '搞个大新闻',
    '孙力军',
    '王全璋',
    '李文足',
    '709事件',
    '709大抓捕',
    '习李',
    'flyingv',
    '有的人活着',
    'chinesedream',
    '习&&照片',
    'xi&&照片',
    '威权主义',
    '文化洗脑',
    '厉害国',
    '厉害了我的锅',
    '习&&画像',
    'xi&&画像',
    '千人计划',
    '习总',
    'xi总',
    '习和平',
    '李二&&紧张',
    '小强++核心++没有',
    '皿煮',
    '灭火器',
    '政治光谱',
    '进干',
    '绝食抗议',
    '习&&表弟',
    '乳包',
    '辱包',
    '不厚',
    '人权组织',
    '失业潮',
    '倒逼改革',
    '失业潮',
    '人民公敌',
    '上有所好',
    '江&&嗝屁',
    '习教父',
    '自愿为奴',
    '中销',
    '青年节',
    'gretathunberg',
    '学生&&tank',
    '黎瑞刚',
    '王敏',
    '彩包',
    '水晶棺',
    'p2p&&爆雷',
    '上坊',
    '文规',
    '问鬼',
    'wengui',
    '地缘政治',
    '大跃进',
    '张雪忠',
    '宪政',
    '北京&&血色',
    '陈冬',
    '季风书园',
    '独立中文笔会',
    'po墨',
    '泼mo',
    'pomo',
    '财阀治国',
    '江&&架空',
    'pxj'
];
var dataVersion = '20200514（' + wordsArray.length + '）';
// 以下为白名单
var whiteList = [
    '戏精',
    '洗净',
    '西经',
    '吸睛',
    '西京',
    '蹊径',
    '袭警',
    '析晶',
    '细晶',
    '西晋',
    '吸进',
    '析近',
    '西进',
    '吸金',
    '西津',
    '禁品',
    '金品',
    '尽品',
    '近品',
    '仅凭',
    '金瓶',
    '锦屏',
    '金平',
    '精品',
    '竞品',
    '晶品',
    '景品',
    '颈贫',
    '进拼'
]