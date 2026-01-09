import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service - AI Video Tools',
  description: 'Terms of Service for AI Video Tools directory.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: January 9, 2026
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using AI Video Tools, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Use License</h2>
            <p className="text-gray-600 mb-4">
              Permission is granted to temporarily access the materials on AI Video Tools for personal, non-commercial transitory viewing only.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              The materials on AI Video Tools are provided on an &apos;as is&apos; basis. AI Video Tools makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Affiliate Disclosure</h2>
            <p className="text-gray-600 mb-4">
              Some links on this website are affiliate links, meaning we may earn a commission if you click through and make a purchase. This comes at no additional cost to you.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Limitations</h2>
            <p className="text-gray-600 mb-4">
              In no event shall AI Video Tools or its suppliers be liable for any damages arising out of the use or inability to use the materials on AI Video Tools.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Contact</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms, please contact us.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
