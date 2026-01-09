'use client';

import { useState } from 'react';
import { tools } from '@/data/tools';
import { Check, X, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function ComparisonTable() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'text-to-video', name: 'Text to Video' },
    { id: 'avatar-video', name: 'AI Avatar' },
    { id: 'video-editor', name: 'Video Editor' },
  ];

  const filteredTools = selectedCategory === 'all'
    ? tools.slice(0, 6)
    : tools.filter(t => t.category === selectedCategory).slice(0, 6);

  const trackClick = (toolName) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'comparison_click', { tool_name: toolName });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-lg">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Quick comparison
            </h2>
            <p className="text-gray-500 mt-1">
              Compare features and pricing at a glance
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Table - Clean Style */}
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm">Tool</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm">Best For</th>
                <th className="text-center py-4 px-6 font-semibold text-gray-900 text-sm">Price</th>
                <th className="text-center py-4 px-6 font-semibold text-gray-900 text-sm">Free Trial</th>
                <th className="text-center py-4 px-6 font-semibold text-gray-900 text-sm"></th>
              </tr>
            </thead>
            <tbody>
              {filteredTools.map((tool, index) => (
                <tr
                  key={tool.id}
                  className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-sm font-bold text-gray-600">
                        {tool.name.charAt(0)}
                      </div>
                      <div>
                        <Link
                          href={`/tool/${tool.slug}`}
                          className="font-semibold text-gray-900 hover:text-dribbble-500 transition-colors cursor-pointer"
                        >
                          {tool.name}
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600 max-w-xs">
                    {tool.bestFor}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="font-semibold text-gray-900">
                      {tool.pricing.startingPrice === 0
                        ? 'Free'
                        : `$${tool.pricing.startingPrice}/mo`}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    {tool.pricing.freeTrial ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                        <Check className="w-4 h-4 text-green-600" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
                        <X className="w-4 h-4 text-gray-400" />
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <a
                      href={tool.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      onClick={() => trackClick(tool.name)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                      Try it
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Full Comparison Link */}
        <div className="mt-8 text-center">
          <Link
            href="/compare"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
          >
            View full comparison with all features
            <ExternalLink className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
