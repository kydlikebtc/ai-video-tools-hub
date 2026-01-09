import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact Us - AI Video Tools',
  description: 'Get in touch with the AI Video Tools team.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Contact Us</h1>
          <p className="text-gray-500 text-center mb-12">Have questions? We&apos;d love to hear from you.</p>

          <div className="bg-gray-50 rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-dribbble-500 focus:ring-2 focus:ring-dribbble-500/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-dribbble-500 focus:ring-2 focus:ring-dribbble-500/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-dribbble-500 focus:ring-2 focus:ring-dribbble-500/20 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-dribbble-500 focus:ring-2 focus:ring-dribbble-500/20 outline-none transition-all"
                >
                  <option>General Inquiry</option>
                  <option>Tool Submission</option>
                  <option>Partnership</option>
                  <option>Bug Report</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-dribbble-500 focus:ring-2 focus:ring-dribbble-500/20 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-dribbble-500 text-white rounded-xl font-medium hover:bg-dribbble-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
