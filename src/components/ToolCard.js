'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Heart, Eye } from 'lucide-react';
import { useState } from 'react';

export default function ToolCard({ tool }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const {
    name,
    slug,
    tagline,
    pricing,
    rating,
    reviews,
    thumbnail,
    logo,
  } = tool;

  // Generate gradient based on tool name for fallback
  const gradients = {
    'S': 'from-violet-400 to-purple-500',
    'H': 'from-blue-400 to-indigo-500',
    'R': 'from-rose-400 to-pink-500',
    'I': 'from-amber-400 to-orange-500',
    'P': 'from-emerald-400 to-teal-500',
    'V': 'from-indigo-400 to-blue-500',
    'D': 'from-pink-400 to-rose-500',
    'C': 'from-cyan-400 to-blue-500',
    'K': 'from-purple-400 to-indigo-500',
  };
  const gradient = gradients[name.charAt(0)] || 'from-gray-400 to-gray-500';

  const formatPrice = (pricing) => {
    if (!pricing) return 'Contact';
    if (pricing.startingPrice === 0) return 'Free';
    return `$${pricing.startingPrice}/mo`;
  };

  // Check if we have a valid thumbnail
  const hasThumbnail = thumbnail && !imageError;

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail - Dribbble Style */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100">
        {/* Thumbnail Image or Gradient Fallback */}
        {hasThumbnail ? (
          <Image
            src={thumbnail}
            alt={`${name} screenshot`}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <>
            {/* Gradient Fallback Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
            {/* Tool Initial */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-bold text-white/90">{name.charAt(0)}</span>
            </div>
          </>
        )}

        {/* Hover Overlay - Dribbble Style */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-200 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Action Buttons */}
          <div className={`absolute bottom-4 left-4 right-4 flex items-center justify-between transition-all duration-200 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}>
            <Link
              href={`/tool/${slug}`}
              className="px-4 py-2 rounded-lg bg-white/95 text-gray-900 text-sm font-medium hover:bg-white transition-colors"
            >
              View Details
            </Link>
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsLiked(!isLiked);
                }}
                className={`p-2.5 rounded-lg transition-colors cursor-pointer ${
                  isLiked
                    ? 'bg-dribbble-500 text-white'
                    : 'bg-white/95 text-gray-600 hover:text-dribbble-500'
                }`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Price Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 rounded-full bg-white/95 text-gray-900 text-xs font-semibold shadow-sm">
            {formatPrice(pricing)}
          </span>
        </div>
      </div>

      {/* Content - Dribbble Style */}
      <div className="flex items-start justify-between gap-3">
        {/* Tool Info */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Avatar/Logo */}
          <div className={`w-9 h-9 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 ${!logo ? `bg-gradient-to-br ${gradient}` : 'bg-gray-100'}`}>
            {logo ? (
              <Image
                src={logo}
                alt={`${name} logo`}
                width={36}
                height={36}
                className="object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            ) : (
              <span className="text-sm font-bold text-white">{name.charAt(0)}</span>
            )}
          </div>
          <div className="min-w-0">
            <Link href={`/tool/${slug}`} className="block">
              <h3 className="font-semibold text-gray-900 text-sm truncate hover:text-dribbble-500 transition-colors">
                {name}
              </h3>
            </Link>
            <p className="text-xs text-gray-500 truncate">{tagline}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-3 text-gray-400 flex-shrink-0">
          <div className="flex items-center gap-1">
            <Heart className="w-3.5 h-3.5" />
            <span className="text-xs">{Math.floor(rating * 100)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            <span className="text-xs">{reviews >= 1000 ? `${(reviews/1000).toFixed(1)}k` : reviews}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
