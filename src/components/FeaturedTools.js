'use client';

import ToolCard from './ToolCard';
import { tools } from '@/data/tools';
import { Award, TrendingUp, Sparkles, ArrowRight, Zap, Crown } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedTools() {
  const featuredTools = tools.filter(tool => tool.featured);
  const trendingTools = tools.filter(tool => tool.trending);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
        {/* 装饰元素 */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-primary-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-accent-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Tools - Editor's Choice */}
        <div className="mb-24">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl blur-lg opacity-30 -z-10" />
              </div>
              {/* Text */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold mb-2">
                  <Sparkles className="w-3 h-3" />
                  HAND-PICKED
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-2">
                  Editor's Choice
                </h2>
                <p className="text-lg text-slate-600 max-w-xl">
                  Top-rated AI video tools handpicked by our team for exceptional quality and value
                </p>
              </div>
            </div>
            {/* CTA */}
            <Link
              href="/tools"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-700 bg-white border border-slate-200 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:border-slate-300 hover:-translate-y-0.5 transition-all"
            >
              View All Tools
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Featured Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredTools.slice(0, 6).map((tool, index) => (
              <div
                key={tool.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ToolCard tool={tool} featured />
              </div>
            ))}
          </div>
        </div>

        {/* Trending Tools */}
        <div className="relative">
          {/* 分隔装饰 */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-slate-200" />
            <Zap className="w-5 h-5 text-slate-300" />
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-slate-200" />
          </div>

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-lg shadow-rose-500/30">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl blur-lg opacity-30 -z-10" />
              </div>
              {/* Text */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold mb-2">
                  <TrendingUp className="w-3 h-3" />
                  HOT THIS WEEK
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-2">
                  Trending Now
                </h2>
                <p className="text-lg text-slate-600 max-w-xl">
                  The most popular AI video tools making waves in the creator community
                </p>
              </div>
            </div>
          </div>

          {/* Trending Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {trendingTools.slice(0, 3).map((tool, index) => (
              <div
                key={tool.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ToolCard tool={tool} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="relative inline-block">
            {/* 发光效果 */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-accent-500 to-electric-500 rounded-2xl blur-lg opacity-30" />
            <Link
              href="/tools"
              className="relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-semibold text-white bg-gradient-to-r from-primary-500 via-primary-600 to-accent-600 shadow-xl shadow-primary-500/25 hover:shadow-2xl hover:shadow-primary-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5" />
              <span className="text-lg">Explore All 50+ AI Video Tools</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="mt-4 text-slate-500 text-sm">
            Updated weekly with the latest AI video generation tools
          </p>
        </div>
      </div>
    </section>
  );
}
