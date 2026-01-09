'use client';

import { useState } from 'react';
import { Search, ArrowRight, Play, Sparkles, Wand2, Film, User } from 'lucide-react';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const stats = [
    { value: '50+', label: 'AI Video Tools' },
    { value: '10M+', label: 'Videos Created' },
    { value: '4.5★', label: 'Avg Rating' },
  ];

  const quickLinks = [
    { icon: Wand2, label: 'Text to Video', href: '/category/text-to-video' },
    { icon: User, label: 'AI Avatars', href: '/category/ai-avatar' },
    { icon: Film, label: 'Video Editors', href: '/category/video-editor' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-primary-50/30 to-accent-50/20 py-20 lg:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md mb-6">
            <Sparkles className="w-4 h-4 text-accent-500" />
            <span className="text-sm font-medium text-slate-600">
              Updated January 2025 with latest AI tools
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Find the Best{' '}
            <span className="gradient-text">AI Video Generator</span>{' '}
            for Your Needs
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Compare 50+ AI video tools including Synthesia, HeyGen, Runway, and more.
            Create stunning videos from text, avatars, or edit like a pro.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-6 h-6 text-slate-400" />
              <input
                type="text"
                placeholder="Search for AI video tools (e.g., 'avatar video', 'text to video')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-36 py-4 rounded-2xl border-2 border-slate-200 bg-white shadow-lg focus:border-primary-400 focus:ring-4 focus:ring-primary-100 outline-none text-lg"
              />
              <button
                type="submit"
                className="absolute right-2 btn-primary py-2 px-6"
              >
                Search
                <ArrowRight className="w-5 h-5 ml-1 inline" />
              </button>
            </div>
          </form>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-slate-700 hover:text-primary-600"
              >
                <link.icon className="w-5 h-5" />
                {link.label}
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
