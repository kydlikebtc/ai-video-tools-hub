'use client';

import { useState, useMemo } from 'react';
import { tools } from '@/data/tools';
import { Check, X, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

export default function ComparisonTable() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const INITIAL_DISPLAY_COUNT = 10;

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'text-to-video', name: 'Text to Video' },
    { id: 'avatar-video', name: 'AI Avatar' },
    { id: 'video-editor', name: 'Video Editor' },
    { id: 'ad-creator', name: 'Ad Creator' },
  ];

  // 获取所有符合筛选条件的工具
  const allFilteredTools = useMemo(() => {
    return selectedCategory === 'all'
      ? tools
      : tools.filter(t => t.category === selectedCategory);
  }, [selectedCategory]);

  // 根据是否展开显示工具列表
  const filteredTools = showAll
    ? allFilteredTools
    : allFilteredTools.slice(0, INITIAL_DISPLAY_COUNT);

  const hasMoreTools = allFilteredTools.length > INITIAL_DISPLAY_COUNT;

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

        {/* Show More / Show Less Button */}
        {hasMoreTools && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors cursor-pointer"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Show All {allFilteredTools.length} Tools
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}

        {/* Tool Count Info */}
        <div className="mt-4 text-center text-sm text-gray-500">
          Showing {filteredTools.length} of {allFilteredTools.length} tools
          {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
        </div>
      </div>
    </section>
  );
}
