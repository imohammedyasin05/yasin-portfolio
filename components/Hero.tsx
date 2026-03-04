import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, User, Download } from 'lucide-react';
import { PERSONAL_INFO, HERO_IMAGES } from '../constants';

const Hero: React.FC = () => {
  // Pick a random index once when the component mounts (on page load/refresh)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Set random image on mount
    setCurrentImageIndex(Math.floor(Math.random() * HERO_IMAGES.length));
  }, []);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-brand-black to-brand-black">

      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 flex flex-col md:flex-row items-center gap-16">

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-brand-blue uppercase bg-brand-blue/10 rounded-full border border-brand-blue/20">
            Available for Projects
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            {PERSONAL_INFO.name}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-400">
              {PERSONAL_INFO.role}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-brand-silver mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            {PERSONAL_INFO.subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-brand-blue rounded-md hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-white/5 border border-white/10 rounded-md hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-white/5 border border-white/10 rounded-md hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Profile Image / Visual */}
        <div className="flex-1 flex justify-center z-10 relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Glow effect behind */}
            <div className="absolute inset-0 bg-brand-blue/20 blur-[100px] rounded-full"></div>

            {/* Image Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-brand-charcoal shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 group">
              {!imageError ? (
                <img
                  src={HERO_IMAGES[currentImageIndex]}
                  alt={PERSONAL_INFO.name}
                  onError={handleImageError}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-charcoal p-6 text-center">
                  <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                    <User className="w-10 h-10 text-brand-blue" />
                  </div>
                  <p className="text-white font-semibold">Image Not Found</p>
                  <p className="text-xs text-brand-silver mt-2">Please check the image URL in constants.ts</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-brand-silver hover:text-white transition-colors">
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;