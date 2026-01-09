import Link from 'next/link';
import { Sparkles, Mail, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    categories: [
      { name: 'Text to Video', href: '/category/text-to-video' },
      { name: 'AI Avatar Video', href: '/category/ai-avatar' },
      { name: 'Video Editors', href: '/category/video-editor' },
      { name: 'AI Ad Creators', href: '/category/ad-creator' },
    ],
    popular: [
      { name: 'Synthesia', href: '/tool/synthesia' },
      { name: 'HeyGen', href: '/tool/heygen' },
      { name: 'Runway', href: '/tool/runway' },
      { name: 'InVideo AI', href: '/tool/invideo-ai' },
    ],
    resources: [
      { name: 'Compare Tools', href: '/compare' },
      { name: 'Pricing Guide', href: '/pricing' },
      { name: 'Blog', href: '/blog' },
      { name: 'Submit Tool', href: '/submit' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
    ],
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">AI Video Tools</span>
            </Link>
            <p className="text-slate-400 text-sm mb-4">
              Discover and compare the best AI video generator tools for your creative projects.
            </p>
            <div className="flex gap-3">
              <a
                href="https://twitter.com/aivideotools"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@aivideotools"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-red-600 flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@aivideotools.xyz"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tools */}
          <div>
            <h3 className="text-white font-semibold mb-4">Popular Tools</h3>
            <ul className="space-y-2">
              {footerLinks.popular.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-slate-800 rounded-2xl p-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-semibold text-lg mb-1">
                Stay updated on AI video tools
              </h3>
              <p className="text-slate-400 text-sm">
                Get weekly updates on new tools, features, and exclusive deals.
              </p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-xl bg-slate-700 border border-slate-600 text-white placeholder:text-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} AI Video Tools Hub. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            Affiliate Disclosure: Some links on this site are affiliate links. We may earn a commission at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
