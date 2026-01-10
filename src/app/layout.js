import './globals.css'
import { Outfit, DM_Sans } from 'next/font/google'

// 显示字体 - 现代几何感，用于标题
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

// 正文字体 - 清晰易读
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// 基础 URL 配置 - 用于 SEO 和 GEO
const SITE_URL = 'https://aivideotoolsxyz.xyz';
const SITE_NAME = 'AI Video Tools Hub';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Best AI Video Generator Tools 2025 | AI Video Tools Hub',
    template: '%s | AI Video Tools Hub'
  },
  description: 'Discover the best AI video generator tools for 2025. Compare Synthesia, HeyGen, Runway, Sora, and 50+ more tools. Find the perfect AI tool for creating videos from text, avatars, and editing.',
  keywords: [
    'AI video generator',
    'AI video tools',
    'text to video AI',
    'AI avatar video',
    'best AI video maker',
    'Synthesia alternative',
    'HeyGen review',
    'Runway AI',
    'OpenAI Sora',
    'AI video editing',
    'AI video creation',
    'text-to-video generator',
    'AI video software',
    'video AI tools comparison',
    'free AI video generator'
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  // 规范链接 - 防止重复内容
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en-US': SITE_URL,
      'x-default': SITE_URL,
    },
  },
  // 分类和主题
  category: 'Technology',
  classification: 'AI Tools Directory',
  // 应用信息
  applicationName: SITE_NAME,
  referrer: 'origin-when-cross-origin',
  // 格式检测
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Best AI Video Generator Tools 2025 | AI Video Tools Hub',
    description: 'Discover and compare 50+ best AI video generator tools. Find perfect AI solutions for text-to-video, AI avatars, and video editing. Updated daily.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Video Tools Hub - Best AI Video Generators 2025',
        type: 'image/png',
      }
    ],
    countryName: 'United States',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best AI Video Generator Tools 2025',
    description: 'Discover and compare 50+ best AI video generator tools for creating amazing videos.',
    images: ['/og-image.png'],
    creator: '@aivideotoolshub',
    site: '@aivideotoolshub',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // 其他搜索引擎验证
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  // Apple 和移动端元数据
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: SITE_NAME,
  },
  // 其他元数据
  other: {
    'msapplication-TileColor': '#6366f1',
    'theme-color': '#ffffff',
    'apple-mobile-web-app-capable': 'yes',
    'mobile-web-app-capable': 'yes',
  },
}

// 结构化数据 - Organization Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  description: 'The most comprehensive directory of AI video generation tools. Compare features, pricing, and reviews.',
  foundingDate: '2024',
  sameAs: [
    'https://twitter.com/aivideotoolshub',
    'https://www.youtube.com/@aivideotoolshub',
    'https://www.linkedin.com/company/aivideotoolshub',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'contact@aivideotoolsxyz.xyz',
    availableLanguage: ['English'],
  },
};

// 结构化数据 - WebSite Schema (增强版)
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description: 'Discover and compare 50+ best AI video generator tools for 2025',
  publisher: {
    '@id': `${SITE_URL}/#organization`,
  },
  potentialAction: [
    {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  ],
  inLanguage: 'en-US',
  copyrightYear: new Date().getFullYear(),
  copyrightHolder: {
    '@id': `${SITE_URL}/#organization`,
  },
};

// 结构化数据 - CollectionPage Schema (工具目录)
const collectionPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${SITE_URL}/#collectionpage`,
  name: 'AI Video Tools Directory',
  description: 'Browse and compare 50+ AI video generation tools including Synthesia, HeyGen, Runway, Sora, and more.',
  url: SITE_URL,
  isPartOf: {
    '@id': `${SITE_URL}/#website`,
  },
  about: {
    '@type': 'Thing',
    name: 'AI Video Generation',
    description: 'Artificial intelligence tools for creating and editing videos',
  },
  mainEntity: {
    '@type': 'ItemList',
    name: 'AI Video Tools',
    description: 'List of the best AI video generators and editors',
    numberOfItems: 23,
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
  },
};

// 结构化数据 - BreadcrumbList Schema (面包屑导航)
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <head>
        {/* Preconnect 优化性能 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS Prefetch 其他常用域名 */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Canonical URL */}
        <link rel="canonical" href={SITE_URL} />

        {/* hreflang 标签 - GEO 国际化 SEO */}
        <link rel="alternate" hrefLang="en" href={SITE_URL} />
        <link rel="alternate" hrefLang="en-US" href={SITE_URL} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />

        {/* RSS Feed */}
        <link rel="alternate" type="application/rss+xml" title="AI Video Tools Hub RSS" href={`${SITE_URL}/feed.xml`} />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Favicon 完整配置 */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Google Analytics - GA4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DMH1DCNG0D"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DMH1DCNG0D');
            `,
          }}
        />

        {/* Organization Schema - 组织信息 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* WebSite Schema - 网站信息和搜索功能 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* CollectionPage Schema - 工具目录 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(collectionPageSchema),
          }}
        />

        {/* BreadcrumbList Schema - 面包屑导航 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </head>
      <body className="font-body antialiased bg-slate-50 text-slate-900 selection:bg-primary-500/20 selection:text-primary-900">
        {/* 全局背景装饰 */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary-500/10 via-primary-500/5 to-transparent blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-accent-500/10 via-accent-500/5 to-transparent blur-3xl" />
          <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] rounded-full bg-gradient-radial from-electric-500/5 to-transparent blur-3xl" />
        </div>
        {children}
      </body>
    </html>
  )
}
