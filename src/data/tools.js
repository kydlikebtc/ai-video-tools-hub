// AI Video Tools Database
// 联盟计划说明：
// - 大多数工具通过 Impact, PartnerStack, 或自有联盟计划提供佣金
// - 佣金通常为首次付款的 20-50%，或持续订阅的 20-30%
// - 申请链接已在每个工具的 affiliateProgram 字段中提供

export const tools = [
  {
    id: 'synthesia',
    name: 'Synthesia',
    slug: 'synthesia',
    tagline: 'Create AI videos from text in minutes',
    description: 'Synthesia is the #1 AI video generator for businesses. Create professional videos with AI avatars in 140+ languages without cameras, studios, or actors. Trusted by 90%+ of Fortune 100 companies.',
    longDescription: `Synthesia revolutionizes video production by enabling anyone to create studio-quality videos using AI avatars. Simply type your script, choose from 150+ diverse AI avatars, and generate a professional video in minutes.

Key capabilities:
• 150+ realistic AI avatars with natural expressions and gestures
• Support for 140+ languages with automatic lip-sync
• Custom avatar creation from your own likeness
• Screen recording integration for tutorials
• Brand kit for consistent styling
• Team collaboration features
• One-click video updates - change text, regenerate video

Perfect for training videos, product demos, marketing content, and internal communications. No video editing skills required.`,
    website: 'https://www.synthesia.io',
    // 替换为你的联盟链接
    affiliateLink: 'https://www.synthesia.io/?via=YOUR_AFFILIATE_ID',
    affiliateProgram: 'https://www.synthesia.io/partners',
    logo: '/logos/synthesia.svg',
    pricing: {
      type: 'subscription',
      startingPrice: 22,
      currency: 'USD',
      billingPeriod: 'month',
      plans: [
        { name: 'Starter', price: 22, features: ['120 mins/year', '90+ avatars', '120+ languages'] },
        { name: 'Creator', price: 67, features: ['360 mins/year', '150+ avatars', 'Custom backgrounds'] },
        { name: 'Enterprise', price: 'Custom', features: ['Unlimited', 'Custom avatars', 'API access'] }
      ],
      freeTrial: true,
      freeTrialDays: 14
    },
    commission: {
      rate: '25%',
      type: 'recurring',
      cookieDays: 90,
      averageEarning: '$50-200/sale'
    },
    category: 'avatar-video',
    tags: ['AI Avatar', 'Text to Video', 'Business', 'Training', 'Marketing'],
    features: [
      'AI Avatars',
      'Text to Speech',
      'Multi-language',
      'Custom Branding',
      'Screen Recording',
      'API Access',
      'Team Collaboration'
    ],
    pros: [
      'Most realistic AI avatars on the market',
      'Excellent for business/corporate use',
      'Easy to update videos by editing text',
      'Great language support'
    ],
    cons: [
      'Limited creative/artistic styles',
      'Can feel somewhat corporate',
      'Custom avatars require Enterprise plan'
    ],
    rating: 4.8,
    reviews: 2847,
    useCases: ['Training Videos', 'Product Demos', 'Marketing', 'Internal Comms', 'E-learning'],
    bestFor: 'Businesses creating training and marketing videos at scale',
    featured: true,
    trending: true,
    dateAdded: '2024-01-15',
    lastUpdated: '2025-01-05'
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    slug: 'heygen',
    tagline: 'Scale your video production with AI',
    description: 'HeyGen is an AI video platform that helps you create engaging business videos with customizable AI avatars. #1 fastest-growing software company of 2025 by G2.',
    longDescription: `HeyGen empowers businesses to create professional videos at scale using AI technology. With 700+ avatars, instant avatar creation, and powerful video translation features, HeyGen is transforming how companies produce video content.

Standout features:
• 700+ diverse AI avatars
• Instant Avatar - create your digital twin in minutes
• Video Translate - dub videos into 40+ languages
• Streaming Avatar for real-time interactions
• PowerPoint/URL to video conversion
• Brand voice cloning
• Team workspace with collaboration tools

HeyGen's Video Agent (beta) can even automate entire video workflows, making it ideal for teams producing high volumes of content.`,
    website: 'https://www.heygen.com',
    affiliateLink: 'https://www.heygen.com/?via=YOUR_AFFILIATE_ID',
    affiliateProgram: 'https://www.heygen.com/affiliate',
    logo: '/logos/heygen.svg',
    pricing: {
      type: 'subscription',
      startingPrice: 29,
      currency: 'USD',
      billingPeriod: 'month',
      plans: [
        { name: 'Creator', price: 29, features: ['15 credits/month', '120+ avatars', '300+ voices'] },
        { name: 'Business', price: 89, features: ['60 credits/month', 'Instant Avatar', 'Priority render'] },
        { name: 'Enterprise', price: 'Custom', features: ['Custom credits', 'API', 'SSO'] }
      ],
      freeTrial: true,
      freeTrialDays: 0,
      freeCredits: 1
    },
    commission: {
      rate: '20%',
      type: 'recurring',
      cookieDays: 60,
      averageEarning: '$30-150/sale'
    },
    category: 'avatar-video',
    tags: ['AI Avatar', 'Video Translation', 'Business', 'Marketing'],
    features: [
      'AI Avatars',
      'Video Translation',
      'Voice Cloning',
      'PPT to Video',
      'Streaming Avatar',
      'API Access'
    ],
    pros: [
      'Most avatars available (700+)',
      'Excellent video translation',
      'Fast instant avatar creation',
      'Good value for credits'
    ],
    cons: [
      'Credit system can be confusing',
      'Some avatars less realistic than Synthesia',
      'Advanced features locked to higher tiers'
    ],
    rating: 4.7,
    reviews: 1923,
    useCases: ['Marketing Videos', 'Video Translation', 'Social Media', 'Product Tours'],
    bestFor: 'Marketers and content creators needing scalable video production',
    featured: true,
    trending: true,
    dateAdded: '2024-02-01',
    lastUpdated: '2025-01-03'
  },
  {
    id: 'runway',
    name: 'Runway',
    slug: 'runway',
    tagline: 'Advancing creativity with AI',
    description: 'Runway is the leading AI creative suite for filmmakers and artists. Generate, edit, and transform video with powerful AI tools including Gen-3 Alpha for text-to-video.',
    longDescription: `Runway is pioneering AI tools for creative professionals. Their Gen-3 Alpha model produces some of the most impressive AI-generated video available, with remarkable consistency and artistic control.

Creative toolkit includes:
• Gen-3 Alpha - cutting-edge text/image to video
• Motion Brush - precise control over movement
• Inpainting - remove or replace objects
• Frame Interpolation - smooth slow-motion
• Background Removal - instant green screen
• Color Grading - AI-powered color correction
• Audio tools - clean up, generate, and edit audio

Used by major film studios and independent creators alike, Runway is pushing the boundaries of what's possible with AI in filmmaking.`,
    website: 'https://runwayml.com',
    affiliateLink: 'https://runwayml.com/?ref=YOUR_AFFILIATE_ID',
    affiliateProgram: 'https://runwayml.com/affiliate',
    logo: '/logos/runway.svg',
    pricing: {
      type: 'subscription',
      startingPrice: 15,
      currency: 'USD',
      billingPeriod: 'month',
      plans: [
        { name: 'Basic', price: 15, features: ['625 credits/month', 'Gen-3 Alpha', 'All tools'] },
        { name: 'Standard', price: 35, features: ['2250 credits/month', 'Upscaling', 'Longer exports'] },
        { name: 'Pro', price: 95, features: ['6250 credits/month', 'Priority', 'More storage'] },
        { name: 'Unlimited', price: 495, features: ['Unlimited Gen-3', 'Everything', 'Team features'] }
      ],
      freeTrial: true,
      freeTrialDays: 0,
      freeCredits: 125
    },
    commission: {
      rate: '30%',
      type: 'first-payment',
      cookieDays: 30,
      averageEarning: '$10-150/sale'
    },
    category: 'text-to-video',
    tags: ['Text to Video', 'Video Editing', 'Creative', 'Filmmaking', 'VFX'],
    features: [
      'Gen-3 Alpha',
      'Motion Brush',
      'Inpainting',
      'Frame Interpolation',
      'Background Removal',
      'Audio Tools',
      'Color Grading'
    ],
    pros: [
      'Industry-leading video generation quality',
      'Incredible creative control',
      'Comprehensive editing suite',
      'Active development and updates'
    ],
    cons: [
      'Credit costs can add up quickly',
      'Steep learning curve for advanced features',
      'Gen-3 requires many credits'
    ],
    rating: 4.6,
    reviews: 3421,
    useCases: ['Filmmaking', 'Music Videos', 'Commercials', 'Social Content', 'Art Projects'],
    bestFor: 'Filmmakers and artists seeking cutting-edge AI video generation',
    featured: true,
    trending: true,
    dateAdded: '2024-01-10',
    lastUpdated: '2025-01-06'
  },
  {
    id: 'veed',
    name: 'VEED.io',
    slug: 'veed-io',
    tagline: 'The simplest online video editor',
    description: 'VEED is the "Canva of video editing" - an all-in-one platform combining video editing, AI tools, subtitles, and collaboration. Now featuring Google Veo 3 integration.',
    longDescription: `VEED.io has evolved from a simple subtitle tool to a comprehensive AI-powered video platform. Think of it as Canva, but for video - intuitive, powerful, and packed with AI features.

Complete video toolkit:
• Timeline editor with drag-and-drop simplicity
• Auto subtitles in 100+ languages
• AI avatars and text-to-speech
• Screen and webcam recording
• Magic Cut - AI-powered auto-editing
• Eye contact correction
• Filler word removal
• Voice cloning
• AI Playground with Veo 3 integration
• Team collaboration and brand kits

Perfect for social media creators, marketers, and teams who need to produce lots of video content quickly without complex software.`,
    website: 'https://www.veed.io',
    affiliateLink: 'https://www.veed.io/?via=YOUR_AFFILIATE_ID',
    affiliateProgram: 'https://www.veed.io/affiliates',
    logo: '/logos/veed.svg',
    pricing: {
      type: 'subscription',
      startingPrice: 18,
      currency: 'USD',
      billingPeriod: 'month',
      plans: [
        { name: 'Basic', price: 18, features: ['Unlimited exports', '1080p', 'Auto subtitles'] },
        { name: 'Pro', price: 30, features: ['4K exports', 'Brand kit', 'AI avatars'] },
        { name: 'Business', price: 59, features: ['Everything', 'Team workspace', 'Priority support'] }
      ],
      freeTrial: true,
      freeTrialDays: 7
    },
    commission: {
      rate: '30%',
      type: 'recurring',
      cookieDays: 90,
      averageEarning: '$20-100/sale'
    },
    category: 'video-editor',
    tags: ['Video Editor', 'Subtitles', 'Social Media', 'AI Tools', 'Collaboration'],
    features: [
      'Auto Subtitles',
      'AI Avatars',
      'Screen Recording',
      'Magic Cut',
      'Voice Cloning',
      'Team Collaboration',
      'Veo 3 Integration'
    ],
    pros: [
      'Incredibly easy to use',
      'Best-in-class auto subtitles',
      'Generous free tier',
      'All-in-one solution'
    ],
    cons: [
      'Less powerful than pro editing software',
      'Can be slow with large files',
      'Some AI features cost extra credits'
    ],
    rating: 4.5,
    reviews: 5632,
    useCases: ['Social Media', 'YouTube', 'Podcasts', 'Marketing', 'Education'],
    bestFor: 'Content creators who want easy, all-in-one video editing with AI',
    featured: true,
    trending: false,
    dateAdded: '2024-01-20',
    lastUpdated: '2025-01-04'
  },
  {
    id: 'invideo',
    name: 'InVideo AI',
    slug: 'invideo-ai',
    tagline: 'Turn any idea into a video with AI',
    description: 'InVideo AI turns text prompts into complete, publish-ready videos with stock footage, music, and voiceovers. The fastest way to create YouTube and social media content.',
    longDescription: `InVideo AI is designed for creators who want to go from idea to finished video as fast as possible. Just describe what you want, and the AI generates a complete video with script, footage, music, and voiceover.

What makes it special:
• Full video from a single prompt
• 16M+ stock media library
• AI script generation
• Multiple voiceover options
• Auto-matched music
• Easy editing interface
• Social media optimization
• Multilingual support

Particularly popular with YouTubers, faceless channel creators, and marketers who need to produce high volumes of video content efficiently.`,
    website: 'https://invideo.io',
    affiliateLink: 'https://invideo.io/?ref=YOUR_AFFILIATE_ID',
    affiliateProgram: 'https://invideo.io/affiliates',
    logo: '/logos/invideo.svg',
    pricing: {
      type: 'subscription',
      startingPrice: 25,
      currency: 'USD',
      billingPeriod: 'month',
      plans: [
        { name: 'Plus', price: 25, features: ['50 AI videos/month', '10 iStock media', 'No watermark'] },
        { name: 'Max', price: 60, features: ['200 AI videos/month', '40 iStock media', 'Priority render'] }
      ],
      freeTrial: true,
      freeTrialDays: 0,
      freeVideos: 4
    },
    commission: {
      rate: '50%',
      type: 'first-payment',
      cookieDays: 120,
      averageEarning: '$30-80/sale'
    },
    category: 'text-to-video',
    tags: ['Text to Video', 'YouTube', 'Social Media', 'Stock Footage', 'Voiceover'],
    features: [
      'Prompt to Video',
      'Stock Library',
      'AI Voiceover',
      'Auto Music',
      'Script Generator',
      'Social Templates'
    ],
    pros: [
      'Fastest idea-to-video workflow',
      'Huge stock library included',
      'Great for faceless YouTube channels',
      'Very generous affiliate commission'
    ],
    cons: [
      'AI footage not as cinematic as Runway/Sora',
      'Limited customization vs full editors',
      'Can feel template-y'
    ],
    rating: 4.4,
    reviews: 4521,
    useCases: ['YouTube', 'TikTok', 'Instagram', 'Ads', 'Educational Content'],
    bestFor: 'YouTubers and social media creators wanting fast, complete video production',
    featured: true,
    trending: true,
    dateAdded: '2024-02-10',
    lastUpdated: '2025-01-02'
  },
  {
    id: 'pika',
    name: 'Pika',
    slug: 'pika',
    tagline: 'Creativity with AI at the speed of thought',
    description: 'Pika is a creative AI video platform that generates and edits videos with impressive physics and motion. Known for fun, viral-ready content and innovative features.',
    longDescription: `Pika burst onto the scene with surprisingly good video generation that captured the internet's imagination. It excels at creating short, shareable clips with character and style.

Creative capabilities:
• Text to video generation
• Image to video animation
• Lip sync for characters
• Modify region - change parts of video
• Extend video length
• Add sound effects
• Multiple style options
• 1080p output

Pika's approachable interface and fun output make it particularly popular for social media content, memes, and creative experimentation.`,
    website: 'https://pika.art',
    affiliateLink: 'https://pika.art/?ref=YOUR_AFFILIATE_ID',
    affiliateProgram: 'Contact partnerships@pika.art',
    logo: '/logos/pika.svg',
    pricing: {
      type: 'subscription',
      startingPrice: 10,
      currency: 'USD',
      billingPeriod: 'month',
      plans: [
        { name: 'Basic', price: 10, features: ['700 credits/month', '1080p', 'Standard speed'] },
        { name: 'Standard', price: 35, features: ['2100 credits/month', 'Faster generation', 'More features'] },
        { name: 'Pro', price: 70, features: ['4900 credits/month', 'Priority queue', 'Commercial use'] }
      ],
      freeTrial: true,
      freeTrialDays: 0,
      freeCredits: 150
    },
    commission: {
      rate: '20%',
      type: 'first-payment',
      cookieDays: 30,
      averageEarning: '$5-30/sale'
    },
    category: 'text-to-video',
    tags: ['Text to Video', 'Creative', 'Social Media', 'Animation', 'Fun'],
    features: [
      'Text to Video',
      'Image to Video',
      'Lip Sync',
      'Region Modify',
      'Video Extend',
      'Sound Effects'
    ],
    pros: [
      'Very affordable entry point',
      'Fun, creative output',
      'Good for viral content',
      'Easy to use interface'
    ],
    cons: [
      'Shorter video lengths than competitors',
      'Quality can be inconsistent',
      'Less control than Runway'
    ],
    rating: 4.3,
    reviews: 2156,
    useCases: ['Social Media', 'Memes', 'Creative Projects', 'Ads', 'Fun Content'],
    bestFor: 'Creators wanting affordable, fun AI video generation',
    featured: false,
    trending: true,
    dateAdded: '2024-03-01',
    lastUpdated: '2025-01-01'
  },
  {
    id: 'kling',
    name: 'Kling AI',
    slug: 'kling-ai',
    tagline: 'Professional-grade AI video generation',
    description: 'Kling AI from Kuaishou produces exceptionally realistic AI videos with impressive physics and motion consistency. A serious competitor to Sora.',
    longDescription: `Kling AI has emerged as one of the most capable text-to-video models available. Developed by Chinese tech company Kuaishou, it's known for generating videos with remarkable realism and physical accuracy.

Technical excellence:
• Up to 2 minutes of video per generation
• 1080p output quality
• Impressive physics simulation
• Consistent subject tracking
• Multiple aspect ratios
• Image to video capability
• Motion transfer
• Keyframe control

Kling is particularly impressive for realistic human motion, complex scenes, and maintaining consistency across longer sequences.`,
    website: 'https://klingai.com',
    affiliateLink: 'https://klingai.com/?ref=YOUR_AFFILIATE_ID',
    affiliateProgram: 'Contact for partnership',
    logo: '/logos/kling.svg',
    pricing: {
      type: 'subscription',
      startingPrice: 5,
      currency: 'USD',
      billingPeriod: 'month',
      plans: [
        { name: 'Basic', price: 5, features: ['66 credits/month', '720p', '5s videos'] },
        { name: 'Standard', price: 30, features: ['660 credits/month', '1080p', '10s videos'] },
        { name: 'Pro', price: 90, features: ['3000 credits/month', 'Priority', '2min videos'] }
      ],
      freeTrial: true,
      freeTrialDays: 0,
      freeCredits: 66
    },
    commission: {
      rate: '15%',
      type: 'first-payment',
      cookieDays: 30,
      averageEarning: '$5-50/sale'
    },
    category: 'text-to-video',
    tags: ['Text to Video', 'Realistic', 'High Quality', 'Long Form', 'Professional'],
    features: [
      'Long Videos (2min)',
      'Realistic Physics',
      'Image to Video',
      'Motion Transfer',
      'Keyframe Control',
      '1080p Output'
    ],
    pros: [
      'Exceptionally realistic output',
      'Longer videos than competitors',
      'Impressive physics simulation',
      'Very affordable pricing'
    ],
    cons: [
      'Interface in Chinese (with English option)',
      'Generation can be slow',
      'Less creative control than Runway'
    ],
    rating: 4.5,
    reviews: 1834,
    useCases: ['Professional Video', 'Film Pre-vis', 'Commercials', 'Art Projects'],
    bestFor: 'Users wanting realistic, longer AI-generated videos',
    featured: false,
    trending: true,
    dateAdded: '2024-06-01',
    lastUpdated: '2025-01-04'
  },
  {
    id: 'colossyan',
    name: 'Colossyan',
    slug: 'colossyan',
    tagline: 'AI video for workplace learning',
    description: 'Colossyan is the leading AI video platform for corporate training and e-learning. Create engaging educational content with AI presenters and built-in SCORM support.',
    longDescription: `Colossyan is purpose-built for learning & development teams who need to create training content at scale. It combines AI avatar technology with features designed specifically for corporate education.

L&D focused features:
• 200+ diverse AI presenters
• SCORM & xAPI integration
• Interactive video branching
• Quiz and assessment tools
• 70+ language support
• Brand customization
• LMS integration
• Analytics dashboard
• PPT/PDF to video conversion

Used by companies including Novartis, Paramount, and Heineken to create training videos that would otherwise require actors, studios, and significant production budgets.`,
    website: 'https://www.colossyan.com',
    affiliateLink: 'https://www.colossyan.com/?via=YOUR_AFFILIATE_ID',
    affiliateProgram: 'https://www.colossyan.com/partners',
    logo: '/logos/colossyan.svg',
    pricing: {
      type: 'subscription',
      startingPrice: 27,
      currency: 'USD',
      billingPeriod: 'month',
      plans: [
        { name: 'Basic', price: 27, features: ['5 videos/month', '120+ avatars', '70+ languages'] },
        { name: 'Pro', price: 87, features: ['20 videos/month', 'Custom branding', 'Priority'] },
        { name: 'Enterprise', price: 'Custom', features: ['Unlimited', 'LMS integration', 'Custom avatars'] }
      ],
      freeTrial: true,
      freeTrialDays: 14
    },
    commission: {
      rate: '25%',
      type: 'recurring',
      cookieDays: 90,
      averageEarning: '$30-200/sale'
    },
    category: 'avatar-video',
    tags: ['E-learning', 'Training', 'Corporate', 'SCORM', 'Interactive'],
    features: [
      'AI Avatars',
      'SCORM/xAPI',
      'Interactive Videos',
      'Quiz Builder',
      'LMS Integration',
      'Analytics',
      'Multi-language'
    ],
    pros: [
      'Best-in-class for corporate training',
      'SCORM integration for LMS',
      'Interactive video features',
      'Strong enterprise support'
    ],
    cons: [
      'Higher price point',
      'Limited creative/artistic use cases',
      'Fewer avatars than HeyGen'
    ],
    rating: 4.6,
    reviews: 892,
    useCases: ['Employee Training', 'Onboarding', 'Compliance', 'Product Training', 'E-learning'],
    bestFor: 'L&D teams creating corporate training content',
    featured: false,
    trending: false,
    dateAdded: '2024-02-15',
    lastUpdated: '2024-12-20'
  },
  {
    id: 'descript',
    name: 'Descript',
    slug: 'descript',
    tagline: 'Edit video by editing text',
    description: 'Descript is a revolutionary video editor where you edit video like a document. Delete words from the transcript to remove them from the video.',
    longDescription: `Descript pioneered the concept of document-based video editing. Instead of working with a traditional timeline, you edit a transcript - delete text to cut video, type to add voiceover with AI.

Revolutionary approach:
• Edit video by editing text transcript
• Overdub - AI voice cloning to fix mistakes
• Studio Sound - one-click audio cleanup
• Eye Contact correction
• Green screen without green screen
• Filler word removal
• Automatic transcription
• Multi-track collaboration
• Publishing built-in

Perfect for podcasters, YouTubers, and anyone who finds traditional video editing intimidating or time-consuming.`,
    website: 'https://www.descript.com',
    affiliateLink: 'https://www.descript.com/?via=YOUR_AFFILIATE_ID',
    affiliateProgram: 'https://www.descript.com/affiliates',
    logo: '/logos/descript.svg',
    pricing: {
      type: 'subscription',
      startingPrice: 15,
      currency: 'USD',
      billingPeriod: 'month',
      plans: [
        { name: 'Hobbyist', price: 15, features: ['10 hrs transcription', 'Overdub watermark', 'Core features'] },
        { name: 'Creator', price: 30, features: ['30 hrs transcription', 'Full Overdub', 'All AI features'] },
        { name: 'Pro', price: 50, features: ['Unlimited', 'Team features', 'Priority support'] }
      ],
      freeTrial: true,
      freeTrialDays: 0,
      freeHours: 1
    },
    commission: {
      rate: '30%',
      type: 'recurring',
      cookieDays: 90,
      averageEarning: '$20-100/sale'
    },
    category: 'video-editor',
    tags: ['Video Editor', 'Transcription', 'Podcast', 'YouTube', 'Voice Clone'],
    features: [
      'Text-based Editing',
      'Overdub Voice Clone',
      'Auto Transcription',
      'Studio Sound',
      'Eye Contact Fix',
      'Filler Word Removal',
      'Collaboration'
    ],
    pros: [
      'Revolutionary editing approach',
      'Best for podcast/interview content',
      'Excellent AI voice cloning',
      'Great for beginners'
    ],
    cons: [
      'Less precise than traditional editors',
      'Can struggle with complex edits',
      'Transcription limits on lower tiers'
    ],
    rating: 4.5,
    reviews: 3287,
    useCases: ['Podcasts', 'YouTube', 'Interviews', 'Course Content', 'Social Clips'],
    bestFor: 'Podcasters and creators who want to edit video as easily as text',
    featured: false,
    trending: false,
    dateAdded: '2024-01-25',
    lastUpdated: '2024-12-15'
  },
  {
    id: 'canva',
    name: 'Canva Video',
    slug: 'canva-video',
    tagline: 'Design and video creation for everyone',
    description: 'Canva\'s video tools bring the same ease-of-use to video creation. Now with Magic Media AI for text-to-video generation using Google Veo 3.',
    longDescription: `Canva has expanded from graphic design to become a comprehensive creative suite including powerful video capabilities. If you already use Canva for images, adding video is seamless.

Video features in Canva:
• Timeline video editor
• Magic Media - AI video generation (Veo 3)
• Magic Animate for motion graphics
• Extensive template library
• Beat Sync for music videos
• Background Remover
• Smart resize for all platforms
• Brand Kit integration
• Team collaboration
• Huge stock library

At $10/month for Canva Pro, it's incredible value if you need both design and video tools.`,
    website: 'https://www.canva.com',
    affiliateLink: 'https://partner.canva.com/YOUR_AFFILIATE_ID',
    affiliateProgram: 'https://partner.canva.com',
    logo: '/logos/canva.svg',
    pricing: {
      type: 'subscription',
      startingPrice: 10,
      currency: 'USD',
      billingPeriod: 'month',
      plans: [
        { name: 'Free', price: 0, features: ['Basic video editor', 'Limited templates', '5GB storage'] },
        { name: 'Pro', price: 10, features: ['Magic Media AI', 'Premium templates', '1TB storage'] },
        { name: 'Teams', price: 25, features: ['Everything', 'Brand Kit', 'Team features'] }
      ],
      freeTrial: true,
      freeTrialDays: 30
    },
    commission: {
      rate: '80%',
      type: 'first-payment',
      cookieDays: 30,
      averageEarning: '$8-100/sale'
    },
    category: 'video-editor',
    tags: ['Video Editor', 'Design', 'Templates', 'Social Media', 'AI Generation'],
    features: [
      'Magic Media (Veo 3)',
      'Video Templates',
      'Beat Sync',
      'Background Remove',
      'Smart Resize',
      'Brand Kit',
      'Stock Library'
    ],
    pros: [
      'Incredible value ($10 for everything)',
      'Easy if you already use Canva',
      'Huge template library',
      'Veo 3 AI integration'
    ],
    cons: [
      'Less powerful than dedicated video editors',
      'AI video is newer/limited',
      'Can feel basic for pros'
    ],
    rating: 4.4,
    reviews: 8932,
    useCases: ['Social Media', 'Marketing', 'Presentations', 'Ads', 'Personal'],
    bestFor: 'Canva users wanting easy video creation alongside design tools',
    featured: false,
    trending: false,
    dateAdded: '2024-03-15',
    lastUpdated: '2024-12-28'
  },
  {
    id: 'creatify',
    name: 'Creatify AI',
    slug: 'creatify-ai',
    tagline: 'AI video ads that convert',
    description: 'Creatify is the AI video platform built specifically for advertising. Create high-converting video ads with AI avatars, product shots, and performance optimization.',
    longDescription: `Creatify focuses on what marketers care most about: creating video ads that convert. It combines AI video generation with advertising best practices built-in.

Advertising-focused features:
• URL-to-video - paste product page, get ad
• AI Product Avatar - avatar holds/uses your product
• Aurora model - cinematic product shots
• A/B testing suggestions
• Ad format templates (FB, TikTok, YouTube, etc.)
• Hook variations generator
• CTA optimization
• Performance analytics
• Batch creation for testing

Perfect for e-commerce brands, performance marketers, and agencies running video ad campaigns at scale.`,
    website: 'https://creatify.ai',
    affiliateLink: 'https://creatify.ai/?ref=YOUR_AFFILIATE_ID',
    affiliateProgram: 'https://creatify.ai/affiliate',
    logo: '/logos/creatify.svg',
    pricing: {
      type: 'subscription',
      startingPrice: 39,
      currency: 'USD',
      billingPeriod: 'month',
      plans: [
        { name: 'Starter', price: 39, features: ['10 credits/month', 'AI avatars', 'Product shots'] },
        { name: 'Pro', price: 99, features: ['50 credits/month', 'URL to video', 'Batch create'] },
        { name: 'Agency', price: 249, features: ['200 credits/month', 'White label', 'API'] }
      ],
      freeTrial: true,
      freeTrialDays: 7
    },
    commission: {
      rate: '30%',
      type: 'recurring',
      cookieDays: 60,
      averageEarning: '$50-200/sale'
    },
    category: 'ad-creator',
    tags: ['Video Ads', 'E-commerce', 'Marketing', 'Product Videos', 'Performance'],
    features: [
      'URL to Video',
      'Product Avatar',
      'Cinematic Product Shots',
      'Ad Templates',
      'A/B Testing',
      'Batch Creation',
      'Analytics'
    ],
    pros: [
      'Best for video ad creation',
      'URL-to-ad is magic',
      'Performance-focused features',
      'Great for e-commerce'
    ],
    cons: [
      'Higher price point',
      'Limited use outside ads',
      'Credits can run out fast'
    ],
    rating: 4.4,
    reviews: 654,
    useCases: ['Video Ads', 'Product Marketing', 'E-commerce', 'Social Ads', 'Performance Marketing'],
    bestFor: 'E-commerce brands and marketers creating video ads at scale',
    featured: false,
    trending: true,
    dateAdded: '2024-05-01',
    lastUpdated: '2025-01-02'
  },
  {
    id: 'openart',
    name: 'OpenArt',
    slug: 'openart',
    tagline: 'AI art and video for everyone',
    description: 'OpenArt provides accessible AI video generation with a focus on creativity and affordability. Budget-friendly option with impressive capabilities.',
    longDescription: `OpenArt started as an AI image platform and has expanded into video generation. It offers a good balance of quality, features, and price, making AI video accessible to more creators.

Creative tools:
• Text to video generation
• Image to video animation
• Style transfer
• Multiple AI models to choose from
• Community creations for inspiration
• Discord community
• API access available
• Regular model updates

OpenArt is particularly good for creators who want to experiment with different AI models and styles without committing to expensive subscriptions.`,
    website: 'https://openart.ai',
    affiliateLink: 'https://openart.ai/?ref=YOUR_AFFILIATE_ID',
    affiliateProgram: 'Contact for affiliate program',
    logo: '/logos/openart.svg',
    pricing: {
      type: 'subscription',
      startingPrice: 12,
      currency: 'USD',
      billingPeriod: 'month',
      plans: [
        { name: 'Starter', price: 12, features: ['5000 credits/month', 'All models', 'Commercial use'] },
        { name: 'Hobbyist', price: 36, features: ['15000 credits/month', 'Priority', 'API access'] },
        { name: 'Pro', price: 96, features: ['60000 credits/month', 'Fastest', 'Everything'] }
      ],
      freeTrial: true,
      freeTrialDays: 0,
      freeCredits: 50
    },
    commission: {
      rate: '20%',
      type: 'first-payment',
      cookieDays: 30,
      averageEarning: '$5-30/sale'
    },
    category: 'text-to-video',
    tags: ['Text to Video', 'AI Art', 'Creative', 'Affordable', 'Multi-model'],
    features: [
      'Multiple AI Models',
      'Text to Video',
      'Image to Video',
      'Style Transfer',
      'Community Gallery',
      'API Access'
    ],
    pros: [
      'Very affordable',
      'Multiple models available',
      'Good for experimentation',
      'Active community'
    ],
    cons: [
      'Quality varies by model',
      'Interface less polished',
      'Video features newer than image'
    ],
    rating: 4.2,
    reviews: 1243,
    useCases: ['Art Projects', 'Social Media', 'Experimentation', 'Personal Use'],
    bestFor: 'Budget-conscious creators who want to experiment with AI video',
    featured: false,
    trending: false,
    dateAdded: '2024-04-01',
    lastUpdated: '2024-12-10'
  }
];

// 分类定义
export const categories = [
  {
    id: 'text-to-video',
    name: 'Text to Video',
    slug: 'text-to-video',
    description: 'Generate videos from text prompts using AI',
    icon: 'Wand2'
  },
  {
    id: 'avatar-video',
    name: 'AI Avatar Video',
    slug: 'ai-avatar',
    description: 'Create videos with AI-generated presenters and avatars',
    icon: 'User'
  },
  {
    id: 'video-editor',
    name: 'AI Video Editor',
    slug: 'video-editor',
    description: 'Edit videos with AI-powered tools and automation',
    icon: 'Film'
  },
  {
    id: 'ad-creator',
    name: 'AI Ad Creator',
    slug: 'ad-creator',
    description: 'Create video advertisements with AI',
    icon: 'Target'
  }
];

// 用例定义
export const useCases = [
  'YouTube',
  'TikTok',
  'Instagram',
  'Marketing',
  'Training Videos',
  'Product Demos',
  'E-learning',
  'Social Media',
  'Commercials',
  'Film/Cinematic'
];

// 获取工具的辅助函数
export function getToolBySlug(slug) {
  return tools.find(tool => tool.slug === slug);
}

export function getToolsByCategory(categoryId) {
  return tools.filter(tool => tool.category === categoryId);
}

export function getFeaturedTools() {
  return tools.filter(tool => tool.featured);
}

export function getTrendingTools() {
  return tools.filter(tool => tool.trending);
}

export function searchTools(query) {
  const lowerQuery = query.toLowerCase();
  return tools.filter(tool =>
    tool.name.toLowerCase().includes(lowerQuery) ||
    tool.description.toLowerCase().includes(lowerQuery) ||
    tool.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}
