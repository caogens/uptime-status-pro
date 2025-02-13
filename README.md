# uptime-status-pro

一个基于 UptimeRobot API 的在线状态面板。

## 版本介绍

此版本是 https://github.com/yb/uptime-status 的修改美化版本。

<img width="1152" alt="image" src="https://p0.ssl.qhimgs1.com/t02ca1f2acaf8e93214.jpg">

美化了页面，添加了背景设置，添加了网站SSL证书的检测，添加了搜索功能。

演示：[www.xh.sd](https://www.xh.sd/ "www.xh.sd")

## 事先准备

- 您需要先到 [UptimeRobot](https://uptimerobot.com/ "UptimeRobot") 添加站点监控，并在 My Settings 页面获取 API Key（只读的最安全，不要暴露可写权限的 api key 账号到公开仓库）
- 推荐使用vercel、netlify

## 如何部署：

- 克隆、fork 本仓库，具体姿势取决于你
- 修改 `config.js` 文件：
   - `SiteName`: 要显示的网站名称
   - `ApiKeys`: 从 UptimeRobot 获取的 API Key（只读即可），Read-Only API Key
   - `CountDays`: 要显示的日志天数，建议 60 或 90，显示效果比较好
   - `ShowLink`: 是否显示站点链接
   - `Navi`: 导航栏的菜单列表
- 傻瓜式部署到 vercel.com