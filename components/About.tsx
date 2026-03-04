import React from 'react';
import { PERSONAL_INFO, ACHIEVEMENTS, EDUCATION } from '../constants';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left Column: Story */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
            <div className="space-y-6 text-brand-silver leading-relaxed">
              <p>
                Hello, I'm <strong className="text-white">{PERSONAL_INFO.name}</strong>, a Computer Science Engineering student at <strong className="text-white">{EDUCATION.college}</strong> (Batch {EDUCATION.batch}).
              </p>
              <p>
                I focus on building full-stack web applications, AI-powered tools, and scalable digital systems. My interests include MERN stack development, machine learning integration, and system architecture.
              </p>
              <p>
                I believe in consistent improvement, disciplined learning, and building real-world projects that create value.
              </p>
            </div>

            <div className="mt-10 p-6 bg-brand-charcoal border border-white/5 rounded-lg border-l-4 border-l-brand-blue">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                Mission
              </h3>
              <p className="text-gray-400 italic">"{PERSONAL_INFO.mission}"</p>
            </div>
          </div>

          {/* Right Column: Traits & Education */}
          <div className="space-y-8">
            {/* Education Card */}
            <div className="p-8 bg-brand-charcoal/50 border border-white/5 rounded-xl hover:border-brand-blue/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">Education</h3>
              <div className="space-y-2">
                <p className="text-lg text-white font-medium">{EDUCATION.college}</p>
                <p className="text-brand-blue">{EDUCATION.course}</p>
                <p className="text-sm text-brand-silver">Batch of {EDUCATION.batch}</p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ACHIEVEMENTS.map((achievement, index) => (
                <div key={index} className="p-5 bg-brand-charcoal/50 border border-white/5 rounded-xl hover:bg-brand-charcoal transition-colors">
                  <achievement.icon className="w-8 h-8 text-brand-blue mb-3" />
                  <h4 className="font-semibold text-white text-sm mb-1">{achievement.title}</h4>
                  <p className="text-xs text-brand-silver">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
