import { tools, categories } from '@/data/tools';

export default function sitemap() {
  const baseUrl = 'https://aivideotoolsxyz.xyz';

  // 主页
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // 分类页面
  const categoryPages = [
    'text-to-video',
    'ai-avatar',
    'video-editor',
    'ad-creator',
  ].map((slug) => ({
    url: `${baseUrl}/category/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 工具详情页面
  const toolPages = tools.map((tool) => ({
    url: `${baseUrl}/tool/${tool.slug}`,
    lastModified: new Date(tool.lastUpdated),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...mainPages, ...categoryPages, ...toolPages];
}
