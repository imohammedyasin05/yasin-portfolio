import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-2 bg-brand-charcoal rounded-lg border border-white/10 group-hover:border-brand-blue/50 transition-colors">
              <Code2 className="w-5 h-5 text-brand-blue" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">
              {PERSONAL_INFO.brand}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-brand-silver hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact"
                className="px-5 py-2 text-sm font-medium text-white bg-brand-blue rounded-md hover:bg-blue-600 transition-all shadow-lg shadow-blue-900/20"
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-brand-charcoal border-b border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
