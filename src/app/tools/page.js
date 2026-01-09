import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolsGrid from '@/components/ToolsGrid';
import { tools, categories } from '@/data/tools';
import { Filter } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'All AI Video Tools - Complete Directory 2025',
  description: 'Browse our complete directory of 50+ AI video tools. Compare text-to-video generators, AI avatars, video editors, and more.',
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      {/* Page Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            All AI Video Tools
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Explore our complete directory of the best AI video tools. Filter by category,
            compare features, and find the perfect tool for your needs.
          </p>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="flex items-center gap-2 text-slate-600">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter:</span>
            </div>
            <Link
              href="/tools"
              className="px-4 py-2 rounded-xl bg-primary-500 text-white font-medium"
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className="px-4 py-2 rounded-xl bg-white text-slate-600 font-medium hover:bg-slate-100 border border-slate-200"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-slate-600 mb-6">
            Showing <span className="font-semibold">{tools.length}</span> AI video tools
          </p>

          {/* Tools Grid */}
          <ToolsGrid tools={tools} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
