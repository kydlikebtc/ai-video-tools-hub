import './globals.css'

export const metadata = {
  metadataBase: new URL('https://aivideotoolsxyz.xyz'),
  title: {
    default: 'Best AI Video Generator Tools 2025 | AI Video Tools Hub',
    template: '%s | AI Video Tools Hub'
  },
  description: 'Discover the best AI video generator tools for 2025. Compare Synthesia, HeyGen, Runway, and more. Find the perfect AI tool for creating videos from text, avatars, and editing.',
  keywords: [
    'AI video generator',
    'AI video tools',
    'text to video AI',
    'AI avatar video',
    'best AI video maker',
    'Synthesia alternative',
    'HeyGen review',
    'Runway AI',
    'AI video editing',
    'AI video creation'
  ],
  authors: [{ name: 'AI Video Tools Hub' }],
  creator: 'AI Video Tools Hub',
  publisher: 'AI Video Tools Hub',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aivideotoolsxyz.xyz',
    siteName: 'AI Video Tools Hub',
    title: 'Best AI Video Generator Tools 2025 | AI Video Tools Hub',
    description: 'Discover and compare the best AI video generator tools. Find perfect AI solutions for text-to-video, AI avatars, and video editing.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Video Tools Hub - Best AI Video Generators'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best AI Video Generator Tools 2025',
    description: 'Discover and compare the best AI video generator tools for creating amazing videos.',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // 添加你的验证码
    // google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics - 替换 G-XXXXXXXXXX 为你的 GA4 ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'AI Video Tools Hub',
              url: 'https://aivideotoolsxyz.xyz',
              description: 'Discover and compare the best AI video generator tools',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://aivideotoolsxyz.xyz/search?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
