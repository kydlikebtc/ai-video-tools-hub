'use client';

import Link from 'next/link';
import { Wand2, User, Film, Target, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';

const categoryIcons = {
  'text-to-video': Wand2,
  'avatar-video': User,
  'video-editor': Film,
  'ad-creator': Target,
};

const categoryData = [
  {
    id: 'text-to-video',
    name: 'Text to Video',
    slug: 'text-to-video',
    description: 'Generate videos from text prompts using AI. Create cinematic content, product videos, and more.',
    tools: ['Runway', 'Pika', 'Kling AI', 'InVideo AI'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50',
    iconBg: 'from-blue-500 to-cyan-400',
    hoverGlow: 'group-hover:shadow-blue-500/25',
    stats: { tools: 12, avgRating: 4.6 },
  },
  {
    id: 'avatar-video',
    name: 'AI Avatar Video',
    slug: 'ai-avatar',
    description: 'Create professional videos with AI-generated presenters. Perfect for training, marketing, and education.',
    tools: ['Synthesia', 'HeyGen', 'Colossyan'],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50',
    iconBg: 'from-purple-500 to-pink-400',
    hoverGlow: 'group-hover:shadow-purple-500/25',
    stats: { tools: 8, avgRating: 4.7 },
  },
  {
    id: 'video-editor',
    name: 'AI Video Editor',
    slug: 'video-editor',
    description: 'Edit videos with AI-powered tools. Auto subtitles, background removal, and smart editing.',
    tools: ['VEED.io', 'Descript', 'Canva Video'],
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-50 to-red-50',
    iconBg: 'from-orange-500 to-red-400',
    hoverGlow: 'group-hover:shadow-orange-500/25',
    stats: { tools: 15, avgRating: 4.5 },
  },
  {
    id: 'ad-creator',
    name: 'AI Ad Creator',
    slug: 'ad-creator',
    description: 'Create high-converting video ads with AI. URL-to-video, product shots, and ad optimization.',
    tools: ['Creatify AI', 'Arcads', 'AdCreative'],
    color: 'from-green-500 to-teal-500',
    bgColor: 'from-green-50 to-teal-50',
    iconBg: 'from-green-500 to-teal-400',
    hoverGlow: 'group-hover:shadow-green-500/25',
    stats: { tools: 6, avgRating: 4.4 },
  },
];

export default function CategorySection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-radial from-primary-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-radial from-accent-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-6">
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-semibold text-primary-700">Explore Categories</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4">
            Find Your Perfect{' '}
            <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-electric-500 bg-clip-text text-transparent">
              AI Video Tool
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Browse our curated categories to discover the best AI-powered solutions for your video creation needs
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {categoryData.map((category, index) => {
            const Icon = categoryIcons[category.id] || Wand2;
            return (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className={`group relative bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg shadow-slate-900/5 hover:shadow-2xl ${category.hoverGlow} transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* 悬停渐变背景 */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* 光效装饰 */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-white/50 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Icon */}
                    <div className="relative">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className={`absolute -inset-2 bg-gradient-to-br ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity -z-10`} />
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm">
                      <div className="text-center">
                        <span className="block text-2xl font-display font-bold text-slate-900">{category.stats.tools}</span>
                        <span className="text-slate-500">Tools</span>
                      </div>
                      <div className="w-px h-10 bg-slate-200" />
                      <div className="text-center">
                        <span className="block text-2xl font-display font-bold text-slate-900">{category.stats.avgRating}</span>
                        <span className="text-slate-500">Avg ★</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2 group-hover:text-primary-700 transition-colors">
                      {category.name}
                      <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Tool badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 rounded-xl bg-white/80 backdrop-blur-sm text-sm font-medium text-slate-700 shadow-sm border border-slate-100 group-hover:border-slate-200 group-hover:shadow transition-all"
                      >
                        {tool}
                      </span>
                    ))}
                    <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-sm font-medium text-slate-500 group-hover:bg-primary-100 group-hover:text-primary-700 transition-colors">
                      +{category.stats.tools - category.tools.length} more
                    </span>
                  </div>
                </div>

                {/* 右下角箭头指示 */}
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:bg-white group-hover:shadow-lg">
                  <ChevronRight className="w-5 h-5 text-slate-600" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-slate-700 bg-white border border-slate-200 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-300"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
