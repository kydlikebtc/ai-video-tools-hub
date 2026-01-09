'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Wand2, Users, Film, Sparkles, Video, Zap } from 'lucide-react';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const filters = [
    { label: 'Discover', active: true },
    { label: 'Animation', active: false },
    { label: 'Branding', active: false },
    { label: 'Illustration', active: false },
    { label: 'Mobile', active: false },
    { label: 'Print', active: false },
    { label: 'Typography', active: false },
    { label: 'Web Design', active: false },
  ];

  const quickCategories = [
    { icon: Wand2, label: 'Text to Video', count: 12, href: '/category/text-to-video' },
    { icon: Users, label: 'AI Avatars', count: 8, href: '/category/ai-avatar' },
    { icon: Film, label: 'Video Editors', count: 15, href: '/category/video-editor' },
    { icon: Sparkles, label: 'AI Effects', count: 6, href: '/category/ai-effects' },
    { icon: Video, label: 'Live Stream', count: 4, href: '/category/live-stream' },
    { icon: Zap, label: 'Quick Clips', count: 10, href: '/category/quick-clips' },
  ];

  return (
    <section className="pt-24 pb-12 bg-white">
      <div className="container-lg">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-gray-900 mb-5 leading-[1.1] tracking-tight">
            Discover the best
            <br />
            <span className="text-dribbble-500">AI Video Tools</span>
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-xl mx-auto">
            Explore 50+ curated AI video generators. Find, compare, and pick the perfect tool for your creative workflow.
          </p>

          {/* Search Bar - Dribbble Style */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-32 py-4 rounded-full bg-gray-100 border-0 text-base text-gray-900 placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 outline-none transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 rounded-full font-medium text-white bg-dribbble-500 hover:bg-dribbble-600 transition-colors cursor-pointer"
              >
                Search
              </button>
            </div>
          </form>

          {/* Trending Searches */}
          <div className="flex flex-wrap justify-center items-center gap-2">
            <span className="text-sm text-gray-400">Trending:</span>
            {['Synthesia', 'HeyGen', 'Runway', 'Pika'].map((term) => (
              <Link
                key={term}
                href={`/tool/${term.toLowerCase()}`}
                className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>

        {/* Filter Pills - Dribbble Style */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 pb-8 border-b border-gray-100">
          {filters.map((filter) => (
            <button
              key={filter.label}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                filter.active
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Quick Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickCategories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="group flex flex-col items-center p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-3 shadow-sm group-hover:shadow transition-shadow">
                <cat.icon className="w-6 h-6 text-gray-700" />
              </div>
              <span className="font-medium text-gray-900 text-sm mb-1">{cat.label}</span>
              <span className="text-xs text-gray-400">{cat.count} tools</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
