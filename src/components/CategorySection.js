'use client';

import Link from 'next/link';
import { Wand2, Users, Film, Target, ChevronRight } from 'lucide-react';

const categoryData = [
  {
    id: 'text-to-video',
    name: 'Text to Video',
    slug: 'text-to-video',
    description: 'Generate videos from text prompts',
    icon: Wand2,
    count: 12,
    color: 'bg-violet-500',
  },
  {
    id: 'avatar-video',
    name: 'AI Avatars',
    slug: 'ai-avatar',
    description: 'Create videos with AI presenters',
    icon: Users,
    count: 8,
    color: 'bg-blue-500',
  },
  {
    id: 'video-editor',
    name: 'Video Editors',
    slug: 'video-editor',
    description: 'AI-powered editing tools',
    icon: Film,
    count: 15,
    color: 'bg-pink-500',
  },
  {
    id: 'ad-creator',
    name: 'Ad Creators',
    slug: 'ad-creator',
    description: 'Create high-converting video ads',
    icon: Target,
    count: 6,
    color: 'bg-emerald-500',
  },
];

export default function CategorySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-lg">
        {/* Section Header - Dribbble Style */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Browse by category
            </h2>
            <p className="text-gray-500 mt-1">
              Find the perfect tool for your needs
            </p>
          </div>
          <Link
            href="/categories"
            className="hidden sm:inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
          >
            All categories
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Category Grid - Clean Card Style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categoryData.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-card transition-all cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center flex-shrink-0`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 group-hover:text-dribbble-500 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {category.count} tools
                </p>
              </div>

              {/* Arrow */}
              <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-gray-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
