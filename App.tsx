import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHubSection from './components/GitHubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen text-slate-300 font-sans selection:bg-brand-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
