window.Config = {
  // 显示标题
  SiteName: '羽路影视网站监控',

  // 副标题（可选）
  SubTitle: '影视聚合导航 · 节点健康监测',

  // UptimeRobot Api Keys（支持 Monitor-Specific 和 Read-Only）
  ApiKeys: [
    'ur2828404-900051a576b5cb090300a22c',
  ],

  // 监控周期天数（默认30天）
  CountDays: 30,

  // 自动刷新间隔（秒）
  CacheTTL: 60,

  // 是否显示检测站点链接 false=关闭
  ShowLink: true,

  // 背景图片（直接读取这里的图片链接，保持项目原有方式不变）
  Image: 'https://ps.ssl.qhmsg.com/t0200ce14e175af6dcf.jpg',

  // 背景底色回退
  color: '#0b111e',

  // 导航栏菜单（会自动渲染在卡片顶部）
  Navi: [
    {
      text: '主页',
      url: 'https://ylu.cc'
    },
    {
      text: 'Github',
      url: 'https://github.com/caogens/uptime-status-pro'
    },
  ],
};
