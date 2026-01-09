'use client';

import ToolCard from './ToolCard';
import { tools } from '@/data/tools';
import { Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedTools() {
  const featuredTools = tools.filter(tool => tool.featured);
  const trendingTools = tools.filter(tool => tool.trending);

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Tools */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-yellow-100">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Editor's Choice
                </h2>
                <p className="text-slate-600">Top-rated AI video tools handpicked by our team</p>
              </div>
            </div>
            <Link
              href="/tools"
              className="hidden md:inline-flex btn-secondary"
            >
              View All Tools
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.slice(0, 6).map((tool) => (
              <ToolCard key={tool.id} tool={tool} featured />
            ))}
          </div>
        </div>

        {/* Trending Tools */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-accent-100">
                <TrendingUp className="w-6 h-6 text-accent-600" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Trending Now
                </h2>
                <p className="text-slate-600">Most popular tools this week</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingTools.slice(0, 3).map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/tools" className="btn-primary">
            Explore All 50+ AI Video Tools
          </Link>
        </div>
      </div>
    </section>
  );
}
