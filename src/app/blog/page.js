import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Blog - AI Video Tools',
  description: 'Latest news and tutorials about AI video tools.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-gray-500 mb-12">Latest news, tutorials, and insights about AI video tools.</p>

          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Coming Soon</h2>
            <p className="text-gray-500 text-center max-w-md">
              We&apos;re working on amazing content about AI video tools. Check back soon for tutorials, reviews, and industry insights.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
