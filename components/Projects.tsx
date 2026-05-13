import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { Github, ExternalLink, Star, Zap } from 'lucide-react';

const ACCENT_BADGES: Record<string, string> = {
  'LLM': 'bg-purple-500/15 text-purple-400 border border-purple-500/20',
  'Real-Time Systems': 'bg-green-500/15 text-green-400 border border-green-500/20',
  'System Design': 'bg-orange-500/15 text-orange-400 border border-orange-500/20',
  'System Architecture': 'bg-orange-500/15 text-orange-400 border border-orange-500/20',
};

const TechBadge: React.FC<{ label: string }> = ({ label }) => {
  const custom = Object.entries(ACCENT_BADGES).find(([key]) => label.includes(key));
  const cls = custom ? custom[1] : 'bg-blue-500/10 text-brand-blue';
  return (
    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${cls}`}>
      {label}
    </span>
  );
};

const ProjectCard: React.FC<{ project: Project; featured?: boolean }> = ({ project, featured }) => {
  return (
    <div className="group bg-brand-charcoal border border-white/5 rounded-xl overflow-hidden hover:border-brand-blue/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-300 flex flex-col">
      {featured && (
        <div className="px-8 pt-8 pb-0">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-blue bg-blue-500/10 px-3 py-1 rounded-full mb-4">
            <Star className="w-3 h-3" /> Featured Project
          </span>
        </div>
      )}

      <div className="p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h3 className={`font-bold text-white group-hover:text-brand-blue transition-colors ${featured ? 'text-2xl' : 'text-xl'}`}>
            {project.title}
          </h3>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-white text-gray-400 transition-colors flex-shrink-0"
              aria-label="View on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Tagline */}
        <p className="text-brand-silver font-medium mb-4 text-sm leading-relaxed">
          {project.tagline}
        </p>

        {/* Bullets */}
        <ul className="text-brand-silver mb-6 space-y-2 list-disc list-outside ml-4 flex-1">
          {project.bullets.map((bullet, idx) => (
            <li key={idx} className="text-sm leading-relaxed">{bullet}</li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech, tIndex) => (
            <TechBadge key={tIndex} label={tech} />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-brand-blue rounded-lg hover:bg-blue-600 transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Decorative bottom bar */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-blue to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};

const Projects: React.FC = () => {
  const featuredProjects = PROJECTS.filter(p => p.featured);
  const coreProjects = PROJECTS.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <Zap className="w-5 h-5 text-brand-blue" />
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          </div>
          <p className="text-brand-silver max-w-xl">
            Real-world AI-powered systems demonstrating full-stack capabilities and architectural thinking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} featured />
          ))}
        </div>

        {/* Core Projects */}
        {coreProjects.length > 0 && (
          <>
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-2">Core Systems</h2>
              <p className="text-brand-silver max-w-xl text-sm">
                Additional scalable systems built to solve real-world problems.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {coreProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
