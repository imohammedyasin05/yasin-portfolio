import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        
        <p className="text-white font-bold text-2xl tracking-tight mb-2">
          {PERSONAL_INFO.name}
        </p>
        <p className="text-brand-silver text-sm mb-8">
          @{PERSONAL_INFO.brand}
        </p>
        
        <div className="w-12 h-1 bg-brand-blue rounded-full mb-8"></div>
        
        <p className="text-gray-500 italic mb-8">
          "{PERSONAL_INFO.quote}"
        </p>
        
        <p className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
