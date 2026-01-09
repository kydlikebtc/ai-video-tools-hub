# AI Video Tools Hub - 部署和运营指南

## 🚀 快速部署（5分钟搞定）

### 第一步：准备工作

1. **创建 GitHub 账户**（如果没有）
   - 访问 https://github.com/signup
   - 免费注册

2. **创建 Vercel 账户**（免费）
   - 访问 https://vercel.com/signup
   - 使用 GitHub 账户登录（推荐）

### 第二步：上传代码到 GitHub

1. 在 GitHub 创建新仓库：
   - 点击右上角 "+" → "New repository"
   - 名称：`ai-video-tools-hub`
   - 选择 "Private"（私有）
   - 点击 "Create repository"

2. 在你的电脑上运行以下命令：

```bash
cd /Users/kyd/test/ai-video-tools-hub

# 初始化 Git
git init
git add .
git commit -m "Initial commit: AI Video Tools Hub"

# 连接到 GitHub（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/ai-video-tools-hub.git
git branch -M main
git push -u origin main
```

### 第三步：部署到 Vercel

1. 访问 https://vercel.com/new
2. 点击 "Import Git Repository"
3. 选择 `ai-video-tools-hub` 仓库
4. 点击 "Deploy"
5. 等待 2-3 分钟，部署完成！

部署完成后，你会获得一个免费域名：`ai-video-tools-hub.vercel.app`

### 第四步：配置自定义域名

你已购买域名 `aivideotoolsxyz.xyz`，现在配置它：

1. 在 Vercel 项目页面，点击 "Settings" → "Domains"
2. 输入你的域名，点击 "Add"
3. 按照提示在你的域名注册商（如 Namecheap）添加 DNS 记录：
   - 类型：CNAME
   - 名称：@
   - 值：cname.vercel-dns.com
4. 等待 DNS 生效（通常 5-30 分钟）

---

## 💰 如何开始赚钱

### 1. 申请联盟计划（最重要！）

你需要向每个工具申请成为联盟合作伙伴。申请链接已在代码中：

| 工具 | 申请链接 | 预计审核时间 | 佣金 |
|-----|---------|------------|-----|
| Synthesia | https://www.synthesia.io/partners | 2-5天 | 25% 持续 |
| HeyGen | https://www.heygen.com/affiliate | 1-3天 | 20% 持续 |
| InVideo | https://invideo.io/affiliates | 1天 | 50% 首次 |
| VEED.io | https://www.veed.io/affiliates | 2-3天 | 30% 持续 |
| Canva | https://partner.canva.com | 3-7天 | 80% 首次 |
| Runway | https://runwayml.com/affiliate | 3-5天 | 30% 首次 |
| Descript | https://www.descript.com/affiliates | 2-3天 | 30% 持续 |

**申请技巧：**
- 在申请表中说明你有 AI 工具导航站
- 提供你的网站链接
- 说明你的流量来源（SEO、社交媒体等）

### 2. 更新联盟链接

审核通过后，你会获得专属联盟链接。在 `src/data/tools.js` 中更新：

```javascript
// 找到对应工具，更新 affiliateLink
{
  id: 'synthesia',
  affiliateLink: 'https://www.synthesia.io/?via=YOUR_REAL_AFFILIATE_ID',  // 替换这里
  ...
}
```

然后重新部署：
```bash
git add .
git commit -m "Update affiliate links"
git push
```

Vercel 会自动重新部署。

---

## 📈 获取流量的方法

### SEO（搜索引擎优化）- 长期主力

网站已针对以下关键词优化：
- "best AI video generator"
- "AI video tools"
- "Synthesia review"
- "HeyGen vs Synthesia"

**你需要做的：**
1. 等待 1-2 周让 Google 索引
2. 在 Google Search Console 提交 sitemap：
   - 访问 https://search.google.com/search-console
   - 添加你的网站
   - 提交 sitemap URL：`https://yourdomain.com/sitemap.xml`

### 社交媒体推广

**Reddit（最快见效）：**
- 在 r/AItools, r/videoediting, r/Entrepreneur 发帖
- 不要直接打广告，而是回答问题时自然提及网站
- 例如：有人问 "What's the best AI video tool?"，你回复并附上网站链接

**Twitter/X：**
- 创建账号 @aivideotools
- 分享 AI 视频工具的对比、技巧
- 使用标签 #AIVideo #VideoMarketing #ContentCreation

**YouTube：**
- 制作简短的工具对比视频
- 在描述中放网站链接

### 付费广告（可选，需要预算）

如果有预算，可以尝试：
- Google Ads：每次点击约 $1-3
- 目标关键词："best AI video generator", "Synthesia alternative"

---

## 🔧 日常维护

### 每周任务
- [ ] 检查联盟后台收入数据
- [ ] 查看 Google Analytics 流量
- [ ] 回复用户评论/邮件

### 每月任务
- [ ] 添加 1-2 个新工具（保持网站更新）
- [ ] 更新工具价格和功能（如有变化）
- [ ] 写 1-2 篇博客文章（提升 SEO）

### 添加新工具

在 `src/data/tools.js` 中按照现有格式添加：

```javascript
{
  id: 'new-tool',
  name: 'New Tool Name',
  slug: 'new-tool-name',
  tagline: '工具标语',
  description: '工具描述',
  // ... 其他字段
}
```

---

## 📊 设置 Google Analytics

1. 访问 https://analytics.google.com
2. 创建新属性
3. 获取 Measurement ID（格式：G-XXXXXXXXXX）
4. 在 `src/app/layout.js` 中替换：

```javascript
// 找到这行，替换 G-XXXXXXXXXX
src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
```

---

## 🎯 收入预期时间表

| 时间 | 预期流量 | 预期收入 |
|-----|---------|---------|
| 第1月 | 100-500 访客 | $0-50 |
| 第3月 | 1,000-3,000 访客 | $100-300 |
| 第6月 | 5,000-10,000 访客 | $300-800 |
| 第12月 | 15,000-30,000 访客 | $800-2,000 |

**关键提醒：**
- SEO 需要 2-4 个月才能见效
- 持续输出内容是关键
- 社交媒体可以加速初期流量

---

## ❓ 常见问题

### 部署失败怎么办？
1. 检查 Vercel 的 "Deployments" 页面看错误日志
2. 常见问题：Node.js 版本不对，在 `package.json` 添加：
```json
"engines": {
  "node": ">=18"
}
```

### 联盟申请被拒怎么办？
- 等网站有更多流量再申请
- 先用其他工具的链接
- 部分工具（如 InVideo）审核较松

### 如何知道是否有收入？
- 每个联盟后台都有实时数据
- 通常 Cookie 有 30-90 天有效期
- 收入会在月底结算到你的账户

---

## 🆘 需要帮助？

如果遇到技术问题，可以：
1. 在 GitHub Issues 提问
2. 参考 Next.js 文档：https://nextjs.org/docs
3. 参考 Vercel 文档：https://vercel.com/docs

---

祝你成功！🎉
