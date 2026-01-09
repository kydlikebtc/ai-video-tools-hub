import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolsGrid from '@/components/ToolsGrid';
import { tools, categories, getToolsByCategory } from '@/data/tools';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Wand2, User, Film, Target, Filter } from 'lucide-react';

const categoryIcons = {
  'text-to-video': Wand2,
  'avatar-video': User,
  'video-editor': Film,
  'ad-creator': Target,
};

const categoryInfo = {
  'text-to-video': {
    title: 'Text to Video AI Tools',
    description: 'Generate stunning videos from text prompts. These AI tools transform your ideas into cinematic content, product videos, and creative footage.',
    longDescription: 'Text-to-video AI tools use advanced machine learning to generate video content directly from text descriptions. Simply describe what you want to see, and the AI creates matching visuals with motion, lighting, and effects. Popular for creative projects, marketing content, and rapid prototyping.',
  },
  'ai-avatar': {
    title: 'AI Avatar Video Generators',
    description: 'Create professional videos with realistic AI presenters. Perfect for training, marketing, and educational content without cameras or actors.',
    longDescription: 'AI avatar video generators allow you to create professional presenter-led videos without expensive production. Choose from hundreds of realistic AI avatars, type your script, and generate broadcast-quality videos. Ideal for corporate training, product demos, and marketing at scale.',
  },
  'video-editor': {
    title: 'AI Video Editing Tools',
    description: 'Edit videos faster with AI assistance. Auto subtitles, smart cuts, background removal, and more powered by artificial intelligence.',
    longDescription: 'AI video editors enhance traditional editing with intelligent automation. Features include automatic transcription and subtitles, AI-powered cuts, background removal, audio enhancement, and smart templates. These tools dramatically speed up the editing process while maintaining quality.',
  },
  'ad-creator': {
    title: 'AI Video Ad Creators',
    description: 'Create high-converting video ads with AI. Generate product videos, UGC-style content, and optimized ads for all platforms.',
    longDescription: 'AI ad creators specialize in generating marketing video content. Features include URL-to-video (paste a product page, get an ad), AI product shots, avatar spokespersons, and ad format optimization for different platforms. Essential for e-commerce and performance marketing.',
  },
};

// Map URL slugs to category IDs
const slugToCategoryId = {
  'text-to-video': 'text-to-video',
  'ai-avatar': 'avatar-video',
  'video-editor': 'video-editor',
  'ad-creator': 'ad-creator',
};

export async function generateStaticParams() {
  return Object.keys(slugToCategoryId).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const info = categoryInfo[params.slug];
  if (!info) return {};

  return {
    title: `${info.title} - Best AI Tools 2025`,
    description: info.description,
    openGraph: {
      title: info.title,
      description: info.description,
    },
  };
}

export default function CategoryPage({ params }) {
  const categoryId = slugToCategoryId[params.slug];
  const info = categoryInfo[params.slug];

  if (!categoryId || !info) {
    notFound();
  }

  const categoryTools = getToolsByCategory(categoryId);
  const Icon = categoryIcons[categoryId] || Wand2;

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-accent-600 text-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur">
              <Icon className="w-8 h-8" />
            </div>
            <nav className="text-sm text-white/80">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span>{info.title}</span>
            </nav>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {info.title}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {info.description}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-slate-600">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Categories:</span>
            </div>
            <Link
              href="/tools"
              className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 font-medium hover:bg-slate-200"
            >
              All
            </Link>
            {Object.entries(categoryInfo).map(([slug, cat]) => (
              <Link
                key={slug}
                href={`/category/${slug}`}
                className={`px-4 py-2 rounded-xl font-medium ${
                  slug === params.slug
                    ? 'bg-primary-500 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.title.replace(' AI Tools', '').replace(' Generators', '')}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Section */}
          <div className="bg-white rounded-2xl p-8 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              What are {info.title}?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {info.longDescription}
            </p>
          </div>

          {/* Results */}
          <p className="text-slate-600 mb-6">
            Showing <span className="font-semibold">{categoryTools.length}</span> tools
          </p>

          <ToolsGrid tools={categoryTools} />

          {categoryTools.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500">No tools found in this category yet.</p>
              <Link href="/tools" className="btn-primary mt-4 inline-block">
                Browse All Tools
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
