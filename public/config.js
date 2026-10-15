window.Config = {
  // 站点主标题与副标题
  SiteName: '羽路均沾',
  SubTitle: '影视聚合导航 · 节点健康监测',

  // 页面主品牌图标（支持内置 SVG 图标：icon-film、icon-search、icon-cloud、icon-server、icon-play）
  // 若想使用本地图片（如 favicon 或自定义 logo），填写路径如: './favicon.ico'，否则留空使用内置图标
  CustomLogoImg: '',
  BrandIcon: 'icon-film',

  // UptimeRobot 只读监控密钥 (Read-only API Key 或 Monitor-Specific Key)
  ApiKeys: [
    'ur2828404-900051a576b5cb090300a22c'
  ],

  // 统计监控天数（默认统计最近 30 天）
  CountDays: 30,

  // 自动刷新倒计时（秒）
  CacheTTL: 60,

  // 是否允许点击卡片跳转到对应站点（true: 允许; false: 关闭超链接）
  ShowLink: true,

  // 背景壁纸链接（保持原项目配置，直接读取网络图片）
  Image: 'https://ps.ssl.qhmsg.com/t0200ce14e175af6dcf.jpg',

  // 背景底色回退
  color: '#0b111e',

  // 中心毛玻璃控制面板透明度 (0.1 ~ 0.9) 与高斯模糊强度
  CardOpacity: '0.38',
  BlurIntensity: '20px',

  // 页脚文本说明（留空则默认显示 SiteName）
  FooterText: ''
};
