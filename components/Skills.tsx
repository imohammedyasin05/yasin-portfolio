import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-brand-charcoal border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">My Arsenal</h2>
          <p className="text-brand-silver max-w-2xl">
            A combination of technical expertise and disciplined habits that allow me to deliver high-quality results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {SKILL_CATEGORIES.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-brand-blue rounded-sm"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="px-4 py-3 bg-brand-black border border-white/10 rounded-md text-brand-silver text-sm font-medium hover:text-white hover:border-brand-blue hover:bg-brand-blue/5 transition-all cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
