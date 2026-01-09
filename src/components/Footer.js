'use client';

import Link from 'next/link';
import { Dribbble, Twitter, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    forDesigners: [
      { name: 'Go Pro!', href: '/pro' },
      { name: 'Explore tools', href: '/tools' },
      { name: 'Compare', href: '/compare' },
      { name: 'Submit tool', href: '/submit' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Pricing guide', href: '/pricing' },
      { name: 'Help center', href: '/help' },
      { name: 'Contact us', href: '/contact' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Advertise', href: '/advertise' },
      { name: 'Partners', href: '/partners' },
    ],
    legal: [
      { name: 'Terms', href: '/terms' },
      { name: 'Privacy', href: '/privacy' },
      { name: 'Cookies', href: '/cookies' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/aivideotools', icon: Twitter },
    { name: 'Github', href: 'https://github.com/aivideotools', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/aivideotools', icon: Linkedin },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container-lg py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-dribbble-500 flex items-center justify-center">
                <Dribbble className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-gray-900">AI Video Tools</span>
            </Link>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              The best resource for discovering AI video tools.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* For Creators */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
              For Creators
            </h4>
            <ul className="space-y-3">
              {footerLinks.forDesigners.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} AI Video Tools. All rights reserved.
            </p>
            <p className="text-xs text-gray-400">
              Some links may earn us a commission at no extra cost to you.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
