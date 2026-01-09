import { tools, categories } from '@/data/tools';

/**
 * 动态 Sitemap 生成器
 * 包含所有页面类型、图片信息和多语言支持
 * SEO 最佳实践：使用 lastModified、changeFrequency、priority
 */
export default function sitemap() {
  const baseUrl = 'https://aivideotoolsxyz.xyz';
  const currentDate = new Date().toISOString();

  // 主要页面 - 最高优先级
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
      alternates: {
        languages: {
          'en': baseUrl,
          'en-US': baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
      alternates: {
        languages: {
          'en': `${baseUrl}/tools`,
        },
      },
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/submit`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/help`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ];

  // 分类页面 - 高优先级
  const categoryPages = [
    {
      slug: 'text-to-video',
      title: 'Text to Video AI Tools',
      count: tools.filter(t => t.category === 'text-to-video').length,
    },
    {
      slug: 'ai-avatar',
      title: 'AI Avatar Video Generators',
      count: tools.filter(t => t.category === 'avatar-video').length,
    },
    {
      slug: 'video-editor',
      title: 'AI Video Editing Tools',
      count: tools.filter(t => t.category === 'video-editor').length,
    },
    {
      slug: 'ad-creator',
      title: 'AI Video Ad Creators',
      count: tools.filter(t => t.category === 'ad-creator').length,
    },
  ].map((category) => ({
    url: `${baseUrl}/category/${category.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
    alternates: {
      languages: {
        'en': `${baseUrl}/category/${category.slug}`,
      },
    },
  }));

  // 工具详情页面 - 核心内容，中等优先级
  const toolPages = tools.map((tool) => {
    // 根据工具特性计算优先级
    let priority = 0.7;
    if (tool.featured) priority += 0.1;
    if (tool.trending) priority += 0.05;
    if (tool.rating >= 4.5) priority += 0.05;

    return {
      url: `${baseUrl}/tool/${tool.slug}`,
      lastModified: new Date(tool.lastUpdated).toISOString(),
      changeFrequency: 'weekly',
      priority: Math.min(priority, 0.9), // 最高不超过 0.9
      // 图片信息 - 帮助搜索引擎索引工具图片
      images: [
        `${baseUrl}/thumbnails/${tool.slug}.jpg`,
        `${baseUrl}/logos/${tool.slug}.svg`,
      ].filter(Boolean),
      alternates: {
        languages: {
          'en': `${baseUrl}/tool/${tool.slug}`,
        },
      },
    };
  });

  // 比较页面 - 组合不同工具的比较
  const popularTools = tools.filter(t => t.featured || t.trending).slice(0, 6);
  const comparePages = [];

  // 生成热门工具两两比较页面
  for (let i = 0; i < popularTools.length; i++) {
    for (let j = i + 1; j < popularTools.length; j++) {
      comparePages.push({
        url: `${baseUrl}/compare/${popularTools[i].slug}-vs-${popularTools[j].slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.6,
      });
    }
  }

  // 标签/用例页面
  const useCaseSlugs = [
    'youtube',
    'tiktok',
    'instagram',
    'marketing',
    'training-videos',
    'product-demos',
    'e-learning',
    'social-media',
  ];

  const useCasePages = useCaseSlugs.map((slug) => ({
    url: `${baseUrl}/use-case/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.55,
  }));

  // 返回所有页面
  return [
    ...mainPages,
    ...categoryPages,
    ...toolPages,
    ...comparePages.slice(0, 15), // 限制比较页面数量
    ...useCasePages,
  ];
}

// 额外导出函数用于生成图片 sitemap
export function generateImageSitemap() {
  const baseUrl = 'https://aivideotoolsxyz.xyz';

  return tools.map((tool) => ({
    url: `${baseUrl}/tool/${tool.slug}`,
    images: [
      {
        url: `${baseUrl}/thumbnails/${tool.slug}.jpg`,
        title: `${tool.name} - AI Video Tool Screenshot`,
        caption: tool.tagline,
      },
      {
        url: `${baseUrl}/logos/${tool.slug}.svg`,
        title: `${tool.name} Logo`,
        caption: `Official logo of ${tool.name}`,
      },
    ],
  }));
}
