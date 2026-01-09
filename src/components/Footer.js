'use client';

import Link from 'next/link';
import { Play, Mail, Twitter, Youtube, Github, ArrowRight, Sparkles, Heart, Send } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // 这里可以添加实际的订阅逻辑
    }
  };

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

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/aivideotools', icon: Twitter, hoverColor: 'hover:bg-sky-500' },
    { name: 'YouTube', href: 'https://youtube.com/@aivideotools', icon: Youtube, hoverColor: 'hover:bg-red-600' },
    { name: 'GitHub', href: 'https://github.com/aivideotools', icon: Github, hoverColor: 'hover:bg-slate-600' },
    { name: 'Email', href: 'mailto:hello@aivideotools.xyz', icon: Mail, hoverColor: 'hover:bg-primary-600' },
  ];

  return (
    <footer className="relative bg-slate-900 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-primary-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-accent-500/10 to-transparent rounded-full blur-3xl" />
        {/* 网格纹理 */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="relative py-16 border-b border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-accent-500/10 to-electric-500/10 rounded-3xl blur-2xl" />
          <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-slate-700/50">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 text-xs font-semibold mb-4">
                  <Sparkles className="w-3 h-3" />
                  NEWSLETTER
                </div>
                <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-3">
                  Stay Ahead of AI Video Trends
                </h3>
                <p className="text-slate-400 max-w-lg">
                  Get weekly updates on new tools, exclusive deals, and expert tips to level up your video creation game.
                </p>
              </div>
              <div className="flex-shrink-0 w-full lg:w-auto">
                {isSubscribed ? (
                  <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-green-500/20 border border-green-500/30">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-green-400 font-medium">Thanks for subscribing!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-3">
                    <div className="relative flex-1 lg:w-72">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-700/50 border border-slate-600 text-white placeholder:text-slate-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all hover:scale-[1.02]"
                    >
                      <span className="hidden sm:inline">Subscribe</span>
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 via-accent-500 to-electric-500 flex items-center justify-center shadow-lg group-hover:shadow-primary-500/40 transition-all">
                    <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity -z-10" />
                </div>
                <div>
                  <span className="block text-xl font-display font-bold text-white">
                    AI Video Tools
                  </span>
                  <span className="block text-xs text-slate-500 font-medium">
                    Hub • {currentYear}
                  </span>
                </div>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
                Your trusted guide to discovering and comparing the best AI video generator tools for your creative projects.
              </p>
              {/* Social Links */}
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-xl bg-slate-800 ${social.hoverColor} flex items-center justify-center text-slate-400 hover:text-white transition-all hover:-translate-y-1`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Categories
              </h4>
              <ul className="space-y-3">
                {footerLinks.categories.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tools */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Popular
              </h4>
              <ul className="space-y-3">
                {footerLinks.popular.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} AI Video Tools Hub. All rights reserved.
            </p>
            <p className="text-slate-600 text-xs flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for creators worldwide
            </p>
            <p className="text-slate-600 text-xs">
              <span className="text-slate-500">Affiliate Disclosure:</span> Some links may earn us a commission at no extra cost to you.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
