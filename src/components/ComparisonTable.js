'use client';

import { useState } from 'react';
import { tools } from '@/data/tools';
import { Check, X, Star, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function ComparisonTable() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tools' },
    { id: 'text-to-video', name: 'Text to Video' },
    { id: 'avatar-video', name: 'AI Avatar' },
    { id: 'video-editor', name: 'Video Editor' },
  ];

  const filteredTools = selectedCategory === 'all'
    ? tools.slice(0, 5)
    : tools.filter(t => t.category === selectedCategory).slice(0, 5);

  const trackClick = (toolName) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'comparison_click', { tool_name: toolName });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Quick Comparison
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Compare features and pricing at a glance
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left py-4 px-6 font-semibold text-slate-900">Tool</th>
                <th className="text-left py-4 px-6 font-semibold text-slate-900">Best For</th>
                <th className="text-center py-4 px-6 font-semibold text-slate-900">Rating</th>
                <th className="text-center py-4 px-6 font-semibold text-slate-900">Starting Price</th>
                <th className="text-center py-4 px-6 font-semibold text-slate-900">Free Trial</th>
                <th className="text-center py-4 px-6 font-semibold text-slate-900">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTools.map((tool, index) => (
                <tr
                  key={tool.id}
                  className={`border-t border-slate-100 hover:bg-slate-50 transition-colors ${
                    index === 0 ? 'bg-primary-50/50' : ''
                  }`}
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center text-lg font-bold text-primary-600">
                        {tool.name.charAt(0)}
                      </div>
                      <div>
                        <Link
                          href={`/tool/${tool.slug}`}
                          className="font-semibold text-slate-900 hover:text-primary-600"
                        >
                          {tool.name}
                        </Link>
                        {index === 0 && (
                          <span className="ml-2 px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium">
                            Top Pick
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-600 max-w-xs">
                    {tool.bestFor}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-slate-900">{tool.rating}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="font-semibold text-slate-900">
                      {tool.pricing.startingPrice === 0
                        ? 'Free'
                        : `$${tool.pricing.startingPrice}/mo`}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    {tool.pricing.freeTrial ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-slate-300 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <a
                      href={tool.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      onClick={() => trackClick(tool.name)}
                      className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 transition-colors"
                    >
                      Try Free
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Full Comparison Link */}
        <div className="mt-6 text-center">
          <Link href="/compare" className="text-primary-600 hover:text-primary-700 font-medium">
            View full comparison with all features →
          </Link>
        </div>
      </div>
    </section>
  );
}
