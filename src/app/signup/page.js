import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Sign Up - AI Video Tools',
  description: 'Create your AI Video Tools account.',
};

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Create Account</h1>
          <p className="text-gray-500 text-center mb-8">Join the AI video community</p>

          <div className="bg-gray-50 rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-dribbble-500 focus:ring-2 focus:ring-dribbble-500/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-dribbble-500 focus:ring-2 focus:ring-dribbble-500/20 outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-dribbble-500 focus:ring-2 focus:ring-dribbble-500/20 outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label className="flex items-start">
                  <input type="checkbox" className="w-4 h-4 mt-0.5 rounded border-gray-300 text-dribbble-500 focus:ring-dribbble-500" />
                  <span className="ml-2 text-sm text-gray-600">
                    I agree to the{' '}
                    <Link href="/terms" className="text-dribbble-500 hover:text-dribbble-600">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-dribbble-500 hover:text-dribbble-600">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-dribbble-500 text-white rounded-xl font-medium hover:bg-dribbble-600 transition-colors"
              >
                Create Account
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link href="/login" className="text-dribbble-500 hover:text-dribbble-600 font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
