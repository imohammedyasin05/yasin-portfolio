import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { Github, ExternalLink, Star } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project; featured?: boolean }> = ({ project, featured }) => {
  return (
    <div
      className={`group bg-brand-charcoal border border-white/5 rounded-xl overflow-hidden hover:border-brand-blue/40 transition-all duration-300 flex flex-col ${featured ? 'md:col-span-2' : ''}`}
    >
      {featured && (
        <div className="px-8 pt-8 pb-0">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-blue bg-blue-500/10 px-3 py-1 rounded-full mb-4">
            <Star className="w-3 h-3" /> Featured Project
          </span>
        </div>
      )}

      <div className={`p-8 flex-1 ${featured ? '' : ''}`}>
        <div className="flex justify-between items-start mb-4">
          <h3 className={`text-2xl font-bold text-white group-hover:text-brand-blue transition-colors ${featured ? 'text-3xl' : ''}`}>
            {project.title}
          </h3>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-white text-gray-400 transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Project Description */}
        <p className="text-brand-silver mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, tIndex) => (
            <span key={tIndex} className="text-xs font-semibold text-brand-blue bg-blue-500/10 px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-auto">
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
  const featuredProject = PROJECTS.find(p => p.featured);
  const otherProjects = PROJECTS.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-brand-silver max-w-xl">
            Real-world applications demonstrating full-stack capabilities and architectural thinking.
          </p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-12">
            <ProjectCard project={featuredProject} featured />
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
