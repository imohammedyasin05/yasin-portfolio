import React from 'react';
import { Github, Code2, Cpu, Database, Cloud } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const CURRENTLY_LEARNING = [
    { icon: Code2, title: 'Advanced MERN Stack Development' },
    { icon: Cpu, title: 'Machine Learning Model Integration' },
    { icon: Database, title: 'System Design Fundamentals' },
    { icon: Cloud, title: 'API Architecture & Microservices' }
];

const GitHubSection: React.FC = () => {
    return (
        <>
            {/* GitHub Section */}
            <section className="py-24 bg-brand-charcoal">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">GitHub Activity</h2>
                    <p className="text-brand-silver max-w-2xl mx-auto mb-10">
                        I actively build and maintain open-source projects focusing on web development,
                        machine learning, and full-stack systems.
                    </p>
                    <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-brand-blue rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        <Github className="w-5 h-5" />
                        View My GitHub
                    </a>
                </div>
            </section>

            {/* Currently Learning Section */}
            <section className="py-24 bg-brand-black">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Currently Exploring</h2>
                        <p className="text-brand-silver">Skills I'm actively developing</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {CURRENTLY_LEARNING.map((item, index) => (
                            <div
                                key={index}
                                className="p-6 bg-brand-charcoal/50 border border-white/5 rounded-xl hover:border-brand-blue/30 transition-colors text-center"
                            >
                                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-6 h-6 text-brand-blue" />
                                </div>
                                <h3 className="text-white font-medium">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default GitHubSection;
