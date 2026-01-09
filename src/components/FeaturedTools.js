'use client';

import ToolCard from './ToolCard';
import { tools } from '@/data/tools';
import Link from 'next/link';

export default function FeaturedTools() {
  const featuredTools = tools.filter(tool => tool.featured);
  const trendingTools = tools.filter(tool => tool.trending);

  return (
    <section className="py-16 bg-white">
      <div className="container-lg">
        {/* Section Header - Dribbble Style */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Popular this week
            </h2>
            <p className="text-gray-500 mt-1">
              Most-liked AI video tools by our community
            </p>
          </div>
          <Link
            href="/tools"
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300 rounded-full transition-colors cursor-pointer"
          >
            Browse all tools
          </Link>
        </div>

        {/* Featured Grid - Dribbble 4-column Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredTools.slice(0, 8).map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-16" />

        {/* Trending Section */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Trending now
            </h2>
            <p className="text-gray-500 mt-1">
              Fastest-growing tools in the community
            </p>
          </div>
        </div>

        {/* Trending Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingTools.slice(0, 4).map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {/* Load More Button - Dribbble Style */}
        <div className="mt-16 text-center">
          <Link
            href="/tools"
            className="inline-flex items-center px-8 py-3 rounded-full font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors cursor-pointer"
          >
            Load more tools
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            50+ tools and growing every week
          </p>
        </div>
      </div>
    </section>
  );
}
