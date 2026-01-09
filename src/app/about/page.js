import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us - AI Video Tools',
  description: 'Learn about AI Video Tools and our mission.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">About AI Video Tools</h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              AI Video Tools is the premier directory for discovering and comparing the best AI-powered video creation tools on the market.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              We believe that AI is revolutionizing video creation, making it accessible to everyone regardless of technical skill. Our mission is to help creators, marketers, and businesses find the perfect AI video tools for their needs.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">What We Do</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Curate the best AI video tools from around the world</li>
              <li>Provide honest, unbiased reviews and comparisons</li>
              <li>Help users find tools that match their specific needs</li>
              <li>Keep our directory updated with the latest tools and features</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Transparency</h3>
                <p className="text-gray-600 text-sm">We clearly disclose affiliate relationships and provide honest assessments.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Quality</h3>
                <p className="text-gray-600 text-sm">We thoroughly test and review every tool before adding it to our directory.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">User-First</h3>
                <p className="text-gray-600 text-sm">Our recommendations are based on user needs, not paid placements.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">We stay on top of the latest AI video technology trends.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
