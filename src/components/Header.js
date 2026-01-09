'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search, ChevronDown, Dribbble, Wand2, Users, Film, Target } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Explore', href: '/tools' },
    {
      name: 'Categories',
      children: [
        { name: 'Text to Video', href: '/category/text-to-video', icon: Wand2 },
        { name: 'AI Avatars', href: '/category/ai-avatar', icon: Users },
        { name: 'Video Editors', href: '/category/video-editor', icon: Film },
        { name: 'Ad Creators', href: '/category/ad-creator', icon: Target },
      ],
    },
    { name: 'Compare', href: '/compare' },
    { name: 'Blog', href: '/blog' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white border-b border-gray-100'
          : 'bg-white'
      }`}
    >
      <nav className="container-lg">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
            <div className="w-9 h-9 rounded-lg bg-dribbble-500 flex items-center justify-center">
              <Dribbble className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900">
              AI Video Tools
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 font-medium transition-colors cursor-pointer">
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu - Dribbble Style */}
                  <div
                    className={`absolute top-full left-0 mt-1 w-56 origin-top-left transition-all duration-150 ${
                      activeDropdown === item.name
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    <div className="bg-white rounded-xl shadow-elevated border border-gray-100 py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          <child.icon className="w-4 h-4 text-gray-400" />
                          <span className="font-medium">{child.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 font-medium transition-colors cursor-pointer"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-52 pl-9 pr-4 py-2 rounded-full bg-gray-100 border-0 text-sm text-gray-900 placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 outline-none transition-all"
              />
            </form>

            {/* Sign In */}
            <Link
              href="/login"
              className="px-4 py-2 text-gray-700 font-medium hover:text-gray-900 transition-colors cursor-pointer"
            >
              Sign in
            </Link>

            {/* Sign Up - Pink Button */}
            <Link
              href="/signup"
              className="px-5 py-2.5 rounded-full font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors cursor-pointer"
            >
              Get started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Dribbble Style */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-200 ${
            isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-1 border-t border-gray-100">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4 px-2">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search AI tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-full bg-gray-100 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
            </form>

            {/* Mobile Nav Links */}
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name} className="px-2">
                  <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {item.name}
                  </div>
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <child.icon className="w-4 h-4 text-gray-400" />
                      <span className="font-medium">{child.name}</span>
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-5 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors mx-2 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}

            {/* Mobile Auth Buttons */}
            <div className="pt-4 px-4 space-y-2 border-t border-gray-100 mt-4">
              <Link
                href="/login"
                className="block w-full text-center px-5 py-2.5 rounded-full font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="block w-full text-center px-5 py-2.5 rounded-full font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Get started free
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
