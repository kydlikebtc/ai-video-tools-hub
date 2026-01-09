'use client';

import { useState, useEffect } from 'react';
import { Search, ArrowRight, Play, Sparkles, Wand2, Film, Users, Zap, Star } from 'lucide-react';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentWord, setCurrentWord] = useState(0);

  const rotatingWords = ['Stunning', 'Professional', 'Viral', 'Amazing', 'Creative'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const stats = [
    { value: '50+', label: 'AI Tools', icon: Wand2 },
    { value: '10M+', label: 'Videos Made', icon: Film },
    { value: '4.8', label: 'Avg Rating', icon: Star },
  ];

  const quickLinks = [
    { icon: Wand2, label: 'Text to Video', href: '/category/text-to-video', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, label: 'AI Avatars', href: '/category/ai-avatar', color: 'from-purple-500 to-pink-500' },
    { icon: Film, label: 'Video Editors', href: '/category/video-editor', color: 'from-orange-500 to-red-500' },
  ];

  const trustedBy = ['Netflix', 'Google', 'Meta', 'Adobe', 'Spotify'];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* 背景效果 */}
      <div className="absolute inset-0 -z-10">
        {/* 渐变背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-primary-50/30" />

        {/* 网格装饰 */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* 动态光效 */}
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-primary-400/20 via-primary-400/5 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-accent-400/15 via-accent-400/5 to-transparent rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-electric-400/10 to-transparent rounded-full blur-3xl" />

        {/* 胶片装饰元素 */}
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary-200/30 rounded-2xl rotate-12 opacity-50" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-accent-200/30 rounded-xl -rotate-6 opacity-50" />
        <div className="absolute top-1/3 right-10 w-16 h-16 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-lg rotate-45" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-5xl mx-auto">
          {/* 顶部标签 */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg shadow-slate-900/5 border border-slate-200/50 mb-8 animate-slide-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-600">
              Updated January 2025 with <span className="text-primary-600 font-semibold">12 new tools</span>
            </span>
          </div>

          {/* 主标题 - 电影感 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight animate-slide-up" style={{ animationDelay: '100ms' }}>
            Create{' '}
            <span className="relative inline-block">
              <span
                key={currentWord}
                className="bg-gradient-to-r from-primary-600 via-accent-500 to-electric-500 bg-clip-text text-transparent animate-fade-in"
              >
                {rotatingWords[currentWord]}
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 0 150 8 200 4" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="50%" stopColor="#d946ef" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <br />
            Videos with AI
          </h1>

          {/* 副标题 */}
          <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '200ms' }}>
            Discover and compare the <span className="text-slate-900 font-semibold">best AI video generators</span> for 2025.
            From text-to-video to AI avatars, find the perfect tool for your creative vision.
          </p>

          {/* 搜索栏 - 核心交互 */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <div className="relative group">
              {/* 发光边框 */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-accent-500 to-electric-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 group-focus-within:opacity-50 transition-opacity" />

              <div className="relative flex items-center bg-white rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-200/50 overflow-hidden">
                <Search className="absolute left-5 w-6 h-6 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search AI video tools (e.g., 'avatar video', 'text to video')..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-40 py-5 text-lg bg-transparent outline-none placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="absolute right-3 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all hover:scale-[1.02]"
                >
                  Search
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </form>

          {/* 快速分类链接 */}
          <div className="flex flex-wrap justify-center gap-3 mb-14 animate-slide-up" style={{ animationDelay: '400ms' }}>
            {quickLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg shadow-slate-900/5 border border-slate-200/50 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${450 + index * 50}ms` }}
              >
                <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center shadow-sm`}>
                  <link.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-slate-700 group-hover:text-slate-900">{link.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>

          {/* 数据统计 */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-14 mb-14 animate-slide-up" style={{ animationDelay: '500ms' }}>
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <stat.icon className="w-5 h-5 text-primary-500" />
                  <span className="text-3xl md:text-4xl font-display font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                    {stat.value}
                  </span>
                </div>
                <span className="text-sm text-slate-500 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* 信任标签 */}
          <div className="animate-slide-up" style={{ animationDelay: '600ms' }}>
            <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-4">
              Tools trusted by teams at
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 opacity-50">
              {trustedBy.map((brand) => (
                <span key={brand} className="text-lg font-display font-semibold text-slate-400 hover:text-slate-600 transition-colors cursor-default">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 底部渐变过渡 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
    </section>
  );
}
