/**
 * Robots.txt 配置
 * 优化搜索引擎爬虫抓取策略
 * SEO 最佳实践：允许重要内容，禁止敏感/无价值页面
 */
export default function robots() {
  const baseUrl = 'https://aivideotoolsxyz.xyz';

  return {
    // 通用规则 - 所有搜索引擎
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/tools',
          '/tool/',
          '/category/',
          '/compare',
          '/blog/',
          '/about',
          '/contact',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/search?*', // 避免爬虫索引搜索结果页
          '/*.json$',
          '/login',
          '/signup',
        ],
        crawlDelay: 1, // 礼貌爬取，每秒 1 次
      },
      // Googlebot 特殊规则 - 无延迟限制
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/login',
          '/signup',
        ],
      },
      // Bingbot 规则
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/login',
          '/signup',
        ],
        crawlDelay: 2,
      },
      // GPTBot (OpenAI) - 允许爬取用于 AI 训练
      {
        userAgent: 'GPTBot',
        allow: [
          '/',
          '/tools',
          '/tool/',
          '/category/',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/login',
          '/signup',
        ],
      },
      // Claude-Web (Anthropic) - 允许爬取
      {
        userAgent: 'Claude-Web',
        allow: [
          '/',
          '/tools',
          '/tool/',
          '/category/',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
      // 禁止恶意爬虫
      {
        userAgent: 'AhrefsBot',
        crawlDelay: 10,
      },
      {
        userAgent: 'SemrushBot',
        crawlDelay: 10,
      },
    ],
    // Sitemap 位置
    sitemap: [
      `${baseUrl}/sitemap.xml`,
    ],
    // 主机声明
    host: baseUrl,
  };
}
