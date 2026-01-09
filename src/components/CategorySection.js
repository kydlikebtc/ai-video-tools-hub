import Link from 'next/link';
import { Wand2, User, Film, Target, ChevronRight } from 'lucide-react';

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
    bgColor: 'bg-blue-50',
  },
  {
    id: 'avatar-video',
    name: 'AI Avatar Video',
    slug: 'ai-avatar',
    description: 'Create professional videos with AI-generated presenters. Perfect for training, marketing, and education.',
    tools: ['Synthesia', 'HeyGen', 'Colossyan'],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
  },
  {
    id: 'video-editor',
    name: 'AI Video Editor',
    slug: 'video-editor',
    description: 'Edit videos with AI-powered tools. Auto subtitles, background removal, and smart editing.',
    tools: ['VEED.io', 'Descript', 'Canva Video'],
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
  },
  {
    id: 'ad-creator',
    name: 'AI Ad Creator',
    slug: 'ad-creator',
    description: 'Create high-converting video ads with AI. URL-to-video, product shots, and ad optimization.',
    tools: ['Creatify AI'],
    color: 'from-green-500 to-teal-500',
    bgColor: 'bg-green-50',
  },
];

export default function CategorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Find the perfect AI video tool for your specific needs
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {categoryData.map((category) => {
            const Icon = categoryIcons[category.id] || Wand2;
            return (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className={`group relative ${category.bgColor} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden`}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {category.name}
                    <ChevronRight className="w-5 h-5 inline ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {category.description}
                  </p>

                  {/* Tool badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-full bg-white/80 text-sm text-slate-700 shadow-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
