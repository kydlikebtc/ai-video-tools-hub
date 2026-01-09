'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Wand2, Users, Film, Target } from 'lucide-react';

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
    { icon: Wand2, label: 'Text to Video', count: 11, href: '/category/text-to-video' },
    { icon: Users, label: 'AI Avatars', count: 8, href: '/category/ai-avatar' },
    { icon: Film, label: 'Video Editors', count: 3, href: '/category/video-editor' },
    { icon: Target, label: 'Ad Creators', count: 1, href: '/category/ad-creator' },
  ];

  return (
    <section
      className="pt-24 pb-12 bg-white"
      aria-label="Hero section - AI Video Tools Discovery"
    >
      <div className="container-lg">
        {/* Hero Header - SEO Optimized */}
        <header className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-gray-900 mb-5 leading-[1.1] tracking-tight">
            Discover the Best
            <br />
            <span className="text-dribbble-500">AI Video Generator Tools</span>
            <span className="sr-only"> - Compare 50+ AI Video Creation Tools in 2025</span>
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-xl mx-auto">
            Explore <strong>50+ curated AI video generators</strong> including Synthesia, HeyGen, Runway, and Sora. Find, compare, and pick the perfect tool for your creative workflow.
          </p>

          {/* Search Bar - SEO Optimized with proper form structure */}
          <form
            onSubmit={handleSearch}
            className="max-w-xl mx-auto mb-10"
            role="search"
            aria-label="Search AI video tools"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
              <label htmlFor="tool-search" className="sr-only">Search for AI video tools</label>
              <input
                id="tool-search"
                type="search"
                name="q"
                placeholder="Search for AI video tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-32 py-4 rounded-full bg-gray-100 border-0 text-base text-gray-900 placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 outline-none transition-all"
                autoComplete="off"
                aria-describedby="search-description"
              />
              <span id="search-description" className="sr-only">
                Search through 50+ AI video generators by name, feature, or category
              </span>
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 rounded-full font-medium text-white bg-dribbble-500 hover:bg-dribbble-600 transition-colors cursor-pointer"
                aria-label="Search"
              >
                Search
              </button>
            </div>
          </form>

          {/* Trending Searches */}
          <div className="flex flex-wrap justify-center items-center gap-2" role="navigation" aria-label="Trending AI video tools">
            <span className="text-sm text-gray-400">Trending:</span>
            {['Synthesia', 'HeyGen', 'Runway', 'Pika'].map((term) => (
              <Link
                key={term}
                href={`/tool/${term.toLowerCase()}`}
                className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
                title={`View ${term} - AI video tool`}
              >
                {term}
              </Link>
            ))}
          </div>
        </header>

        {/* Filter Pills - Dribbble Style */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 pb-8 border-b border-gray-100" role="tablist" aria-label="Content filters">
          {filters.map((filter) => (
            <button
              key={filter.label}
              role="tab"
              aria-selected={filter.active}
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

        {/* Quick Categories Grid - SEO Enhanced */}
        <nav aria-label="AI Video Tool Categories" className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {quickCategories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="group flex flex-col items-center p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-colors cursor-pointer"
              title={`Browse ${cat.count} ${cat.label} tools`}
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-3 shadow-sm group-hover:shadow transition-shadow" aria-hidden="true">
                <cat.icon className="w-6 h-6 text-gray-700" />
              </div>
              <span className="font-medium text-gray-900 text-sm mb-1">{cat.label}</span>
              <span className="text-xs text-gray-400">{cat.count} tools</span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
