import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle, Loader2 } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

// Replace this with your Formspree form endpoint
// Get it from: https://formspree.io/forms/{your-form-id}/embed
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mreankqp';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-charcoal relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-blue/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Let's build something <span className="text-brand-blue">meaningful</span>.</h2>
            <p className="text-brand-silver text-lg mb-12">
              Whether you have a project in mind, a question about my work, or just want to connect—I'm open to opportunities.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-black border border-white/10 rounded-lg">
                  <Mail className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email Me</h3>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-brand-silver hover:text-white transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Connect Socially</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub" },
                    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-brand-black border border-white/10 rounded-lg text-gray-400 hover:text-white hover:border-brand-blue hover:-translate-y-1 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-brand-black p-8 rounded-2xl border border-white/5 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-brand-charcoal border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    pattern="[a-zA-Z0-9._%+-]+@gmail\.com|[a-zA-Z0-9.-]+\.edu"
                    title="Only Gmail (.com) or Institutional (.edu) emails are allowed"
                    className="w-full bg-brand-charcoal border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-brand-charcoal border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-brand-charcoal border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              {status === 'success' ? (
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 flex items-center gap-3 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              ) : status === 'error' ? (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-red-400">
                  Something went wrong. Please try again or email me directly.
                </div>
              ) : null}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-brand-blue text-white font-semibold py-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                ) : (
                  <><>Send Message</> <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
