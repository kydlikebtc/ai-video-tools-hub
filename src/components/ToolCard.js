'use client';

import Link from 'next/link';
import { Star, ExternalLink, TrendingUp, Check, ArrowUpRight, Sparkles } from 'lucide-react';

export default function ToolCard({ tool, featured = false }) {
  const {
    name,
    slug,
    tagline,
    description,
    pricing,
    rating,
    reviews,
    category,
    tags,
    affiliateLink,
    trending,
    bestFor
  } = tool;

  // 追踪联盟链接点击
  const trackAffiliateClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'affiliate_click', {
        tool_name: name,
        tool_slug: slug,
        category: category
      });
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star key={i} className="w-4 h-4 fill-amber-400/50 text-amber-400" />
        );
      } else {
        stars.push(
          <Star key={i} className="w-4 h-4 text-slate-200" />
        );
      }
    }
    return stars;
  };

  const formatPrice = (pricing) => {
    if (!pricing) return 'Contact';
    if (pricing.startingPrice === 0) return 'Free';
    return `$${pricing.startingPrice}`;
  };

  // 根据工具名生成渐变色
  const gradients = {
    'S': 'from-violet-500 to-purple-600',
    'H': 'from-blue-500 to-cyan-500',
    'R': 'from-rose-500 to-pink-600',
    'I': 'from-orange-500 to-amber-500',
    'P': 'from-emerald-500 to-teal-500',
    'V': 'from-indigo-500 to-blue-600',
    'D': 'from-fuchsia-500 to-pink-500',
    'C': 'from-cyan-500 to-blue-500',
    'K': 'from-purple-500 to-violet-600',
  };
  const gradient = gradients[name.charAt(0)] || 'from-primary-500 to-accent-500';

  return (
    <div className={`group relative bg-white rounded-2xl border transition-all duration-500 overflow-hidden ${
      featured
        ? 'border-primary-200 shadow-xl shadow-primary-500/10 ring-1 ring-primary-500/10'
        : 'border-slate-200/80 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-slate-900/10 hover:border-slate-300/80'
    } hover:-translate-y-2`}>

      {/* Featured 标识 */}
      {featured && (
        <div className="absolute top-0 right-0">
          <div className="relative">
            <div className="absolute top-3 -right-8 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold px-10 py-1 rotate-45 shadow-lg">
              TOP PICK
            </div>
          </div>
        </div>
      )}

      {/* 悬停时的光效 */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-radial from-primary-500/10 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          {/* Logo */}
          <div className="relative flex-shrink-0">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-display font-bold text-xl shadow-lg`}>
              {name.charAt(0)}
            </div>
            {trending && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <TrendingUp className="w-3 h-3 text-white" />
              </div>
            )}
          </div>

          {/* Title & Tagline */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-primary-600 transition-colors truncate">
                {name}
              </h3>
              {trending && (
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-xs font-semibold">
                  <TrendingUp className="w-3 h-3" />
                  Hot
                </span>
              )}
            </div>
            <p className="text-sm text-slate-500 truncate">{tagline}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium hover:bg-primary-50 hover:text-primary-700 transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Best For */}
        {bestFor && (
          <div className="flex items-start gap-2 mb-4 p-3 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-white" />
            </div>
            <p className="text-sm text-green-800">
              <span className="font-semibold">Best for:</span> {bestFor}
            </p>
          </div>
        )}

        {/* Rating & Price */}
        <div className="flex items-center justify-between py-4 border-t border-slate-100">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              {renderStars(rating)}
            </div>
            <span className="text-sm font-medium text-slate-700">
              {rating}
            </span>
            <span className="text-sm text-slate-400">
              ({reviews.toLocaleString()})
            </span>
          </div>
          <div className="text-right">
            <span className="text-xl font-display font-bold text-slate-900">
              {formatPrice(pricing)}
            </span>
            {pricing?.freeTrial && (
              <span className="block text-xs font-medium text-green-600">Free trial</span>
            )}
            {pricing?.startingPrice > 0 && (
              <span className="block text-xs text-slate-400">/month</span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <Link
            href={`/tool/${slug}`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
          >
            Details
          </Link>
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            onClick={trackAffiliateClick}
            data-affiliate="true"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all hover:scale-[1.02]"
          >
            Try Free
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
