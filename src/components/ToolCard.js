'use client';

import Link from 'next/link';
import { Star, ExternalLink, Zap, TrendingUp, Check } from 'lucide-react';

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
    // Google Analytics 事件追踪
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
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star key={i} className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />
        );
      } else {
        stars.push(
          <Star key={i} className="w-4 h-4 text-slate-300" />
        );
      }
    }
    return stars;
  };

  const formatPrice = (pricing) => {
    if (!pricing) return 'Contact';
    if (pricing.startingPrice === 0) return 'Free';
    return `$${pricing.startingPrice}/mo`;
  };

  return (
    <div className={`tool-card p-6 ${featured ? 'ring-2 ring-primary-500 ring-offset-2' : ''}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Logo placeholder - 可以替换为实际logo */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center text-xl font-bold text-primary-600">
            {name.charAt(0)}
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-900">{name}</h3>
            <p className="text-sm text-slate-500">{tagline}</p>
          </div>
        </div>
        {trending && (
          <span className="badge badge-accent flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            Trending
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.slice(0, 3).map((tag) => (
          <span key={tag} className="badge badge-primary text-xs">
            {tag}
          </span>
        ))}
      </div>

      {/* Best For */}
      {bestFor && (
        <div className="flex items-start gap-2 mb-4 p-3 bg-green-50 rounded-xl">
          <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-green-700">
            <span className="font-medium">Best for:</span> {bestFor}
          </p>
        </div>
      )}

      {/* Rating & Price */}
      <div className="flex items-center justify-between mb-4 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <div className="flex">{renderStars(rating)}</div>
          <span className="text-sm text-slate-600">
            {rating} ({reviews.toLocaleString()})
          </span>
        </div>
        <div className="text-right">
          <span className="text-lg font-bold text-slate-900">
            {formatPrice(pricing)}
          </span>
          {pricing?.freeTrial && (
            <span className="block text-xs text-green-600">Free trial</span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Link
          href={`/tool/${slug}`}
          className="flex-1 btn-secondary text-sm py-2"
        >
          Learn More
        </Link>
        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          onClick={trackAffiliateClick}
          data-affiliate="true"
          className="flex-1 btn-primary text-sm py-2 flex items-center justify-center gap-1"
        >
          Try {name}
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
