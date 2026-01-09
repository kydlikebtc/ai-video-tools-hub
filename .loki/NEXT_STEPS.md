# AI Video Tools Hub - 后续任务清单

## 当前状态

```
╔══════════════════════════════════════════════════════════════════╗
║                    项目执行进度追踪                                ║
╠══════════════════════════════════════════════════════════════════╣
║  阶段 1: 策划       [██████████] 100% ✅ 完成                     ║
║  阶段 2: 开发       [██████████] 100% ✅ 完成                     ║
║  阶段 3: 部署       [██████████] 100% ✅ 完成                     ║
║  阶段 4: 域名配置   [████████░░]  80% 🔄 进行中                   ║
║  阶段 5: 联盟申请   [░░░░░░░░░░]   0% ⏳ 待开始                   ║
║  阶段 6: SEO优化    [░░░░░░░░░░]   0% ⏳ 待开始                   ║
║  阶段 7: 流量获取   [░░░░░░░░░░]   0% ⏳ 待开始                   ║
║  阶段 8: 监控优化   [░░░░░░░░░░]   0% ⏳ 待开始                   ║
╠══════════════════════════════════════════════════════════════════╣
║  总体进度: 60%                                                    ║
╚══════════════════════════════════════════════════════════════════╝
```

---

## 立即要做的事 (Today)

### 1. 完成域名 DNS 配置 🔴 紧急

**在 Namecheap 中修改 A 记录：**

| 类型 | Host | 当前值 | 修改为 |
|-----|------|--------|-------|
| A Record | @ | 216.198.79.1 | **76.76.21.21** |

**操作步骤：**
1. 登录 Namecheap → Domain List → Manage
2. 点击 Advanced DNS
3. 找到 A Record，点击编辑
4. 将 Value 改为 `76.76.21.21`
5. 保存

**验证方式：**
```bash
# 等待 5-30 分钟后检查
dig aivideotoolsxyz.xyz +short
# 应该返回: 76.76.21.21
```

### 2. 在 Vercel 添加域名

**操作步骤：**
1. 访问 https://vercel.com/dashboard
2. 选择 ai-video-tools-hub 项目
3. Settings → Domains
4. 添加 `aivideotoolsxyz.xyz`
5. 添加 `www.aivideotoolsxyz.xyz`
6. 等待 SSL 证书自动配置

---

## 本周要做的事 (This Week)

### 3. 申请联盟计划 🟡 重要

按优先级顺序申请：

| 优先级 | 工具 | 申请链接 | 预计审核时间 |
|-------|-----|---------|-------------|
| 1 | Canva | https://www.canva.com/affiliates | 1-3天 |
| 2 | InVideo | https://invideo.io/affiliates | 1-2天 |
| 3 | Synthesia | https://www.synthesia.io/affiliates | 3-5天 |
| 4 | HeyGen | https://www.heygen.com/affiliate | 3-5天 |
| 5 | VEED.io | https://veed.io/affiliates | 2-3天 |

**申请时的建议：**
- 使用专业邮箱（如果有）
- 在申请表中提到你的网站 aivideotoolsxyz.xyz
- 说明你的推广计划（SEO + 内容营销）
- 提到你专注于 AI 视频工具领域

### 4. 更新联盟链接

获得联盟 ID 后，编辑 `src/data/tools.js`：

```javascript
// 示例：将 YOUR_AFFILIATE_ID 替换为真实 ID
affiliateLink: 'https://www.synthesia.io/?via=YOUR_REAL_ID',
```

**文件位置：** `/Users/kyd/test/ai-video-tools-hub/src/data/tools.js`

---

## 下周要做的事 (Next Week)

### 5. 设置 Google Analytics

**步骤 1：创建 GA4 账号**
1. 访问 https://analytics.google.com
2. 创建账号 → 创建媒体资源
3. 输入网站名称：AI Video Tools Hub
4. 输入网址：https://aivideotoolsxyz.xyz
5. 获取追踪 ID（格式：G-XXXXXXXXXX）

**步骤 2：添加到网站**
编辑 `src/app/layout.js`，将 `G-XXXXXXXXXX` 替换为你的追踪 ID

### 6. 提交 Google Search Console

**步骤：**
1. 访问 https://search.google.com/search-console
2. 添加资源 → 输入 `aivideotoolsxyz.xyz`
3. 选择 DNS 验证（在 Namecheap 添加 TXT 记录）
4. 验证后提交 Sitemap：`https://aivideotoolsxyz.xyz/sitemap.xml`

### 7. 提交 Bing Webmaster

**步骤：**
1. 访问 https://www.bing.com/webmasters
2. 添加站点
3. 可以从 Google Search Console 导入

---

## 第一个月要做的事 (Month 1)

### 8. 内容优化

- [ ] 为每个工具添加详细的中文描述
- [ ] 添加工具对比文章
- [ ] 创建 "AI 视频制作指南" 内容
- [ ] 添加 FAQ 页面

### 9. 流量获取启动

- [ ] 在 Twitter/X 上分享网站
- [ ] 在 Reddit 相关社区发布（注意社区规则）
- [ ] 在 Product Hunt 准备提交
- [ ] 开始写博客文章（如果添加博客功能）

### 10. 监控与优化

- [ ] 每周检查 Google Analytics 数据
- [ ] 追踪联盟点击和转化
- [ ] 根据数据优化热门页面
- [ ] A/B 测试 CTA 按钮

---

## 任务检查清单

### 域名配置 (DNS)
- [ ] 修改 A 记录为 76.76.21.21
- [ ] 在 Vercel 添加域名
- [ ] 验证 https://aivideotoolsxyz.xyz 可访问
- [ ] 验证 https://www.aivideotoolsxyz.xyz 重定向正常

### 联盟计划
- [ ] 申请 Canva 联盟
- [ ] 申请 InVideo 联盟
- [ ] 申请 Synthesia 联盟
- [ ] 申请 HeyGen 联盟
- [ ] 申请 VEED.io 联盟
- [ ] 更新 tools.js 中的联盟链接

### 分析与 SEO
- [ ] 设置 Google Analytics
- [ ] 提交 Google Search Console
- [ ] 提交 Bing Webmaster
- [ ] 提交 Sitemap

### 流量
- [ ] Twitter 账号创建/配置
- [ ] 发布第一条推文
- [ ] 加入 AI 相关社区
- [ ] 准备 Product Hunt 提交

---

## 收入里程碑

| 里程碑 | 目标收入 | 预计达成时间 |
|-------|---------|-------------|
| 首次收入 | $1 | 第 2-4 周 |
| 持续收入 | $100/月 | 第 2-3 个月 |
| 目标达成 | $1,000/月 | 第 6-12 个月 |

---

## 需要帮助？

如果遇到问题，可以让 Claude 帮你：
- "帮我检查域名配置是否正确"
- "帮我更新联盟链接"
- "帮我添加新的 AI 工具到数据库"
- "帮我优化 SEO"

---

*最后更新: 2025-01-09*
*状态: 域名配置进行中*
