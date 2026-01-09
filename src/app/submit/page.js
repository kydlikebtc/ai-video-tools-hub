import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Submit Your Tool - AI Video Tools',
  description: 'Submit your AI video tool to our directory.',
};

export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Submit Your Tool</h1>
          <p className="text-gray-500 text-center mb-12">Get your AI video tool featured in our directory</p>

          <div className="bg-gray-50 rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="toolName" className="block text-sm font-medium text-gray-700 mb-2">
                  Tool Name *
                </label>
                <input
                  type="text"
                  id="toolName"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-dribbble-500 focus:ring-2 focus:ring-dribbble-500/20 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                  Website URL *
                </label>
                <input
                  type="url"
                  id="website"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-dribbble-500 focus:ring-2 focus:ring-dribbble-500/20 outline-none transition-all"
                  placeholder="https://"
                  required
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-dribbble-500 focus:ring-2 focus:ring-dribbble-500/20 outline-none transition-all"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="text-to-video">Text to Video</option>
                  <option value="ai-avatar">AI Avatars</option>
                  <option value="video-editor">Video Editor</option>
                  <option value="ad-creator">Ad Creator</option>
                </select>
              </div>

              <div>
                <label htmlFor="tagline" className="block text-sm font-medium text-gray-700 mb-2">
                  Tagline *
                </label>
                <input
                  type="text"
                  id="tagline"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-dribbble-500 focus:ring-2 focus:ring-dribbble-500/20 outline-none transition-all"
                  placeholder="A short description of your tool"
                  maxLength={100}
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  id="description"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-dribbble-500 focus:ring-2 focus:ring-dribbble-500/20 outline-none transition-all resize-none"
                  placeholder="Tell us more about your tool"
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="pricing" className="block text-sm font-medium text-gray-700 mb-2">
                  Pricing Model *
                </label>
                <select
                  id="pricing"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-dribbble-500 focus:ring-2 focus:ring-dribbble-500/20 outline-none transition-all"
                  required
                >
                  <option value="">Select pricing model</option>
                  <option value="free">Free</option>
                  <option value="freemium">Freemium</option>
                  <option value="paid">Paid</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-dribbble-500 focus:ring-2 focus:ring-dribbble-500/20 outline-none transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-dribbble-500 text-white rounded-xl font-medium hover:bg-dribbble-600 transition-colors"
              >
                Submit Tool
              </button>
            </form>

            <p className="mt-6 text-sm text-gray-500 text-center">
              We review all submissions within 3-5 business days.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
