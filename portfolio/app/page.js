"use client";

import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X, Code, Briefcase, User, Home } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const webDevSkills = [
    'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Next.js', 'Python'
  ];

  const mobileDevSkills = [
    'Flutter', 'Dart'
  ];

  const tools = [
    'VS Code', 'Git', 'GitHub'
  ];

  const projects = [
    {
      title: 'Project Coming Soon',
      description: 'Exciting full-stack project currently in development. Stay tuned for updates!',
      tech: ['Next.js', 'Tailwind CSS', 'JavaScript'],
      status: 'In Progress'
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SK Chaudhary
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-purple-400 transition flex items-center gap-2">
                <Home size={18} /> Home
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-purple-400 transition flex items-center gap-2">
                <User size={18} /> About
              </button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-purple-400 transition flex items-center gap-2">
                <Code size={18} /> Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-purple-400 transition flex items-center gap-2">
                <Briefcase size={18} /> Projects
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-purple-500/20">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 hover:text-purple-400 transition">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-purple-400 transition">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2 hover:text-purple-400 transition">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 hover:text-purple-400 transition">
                Projects
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-6xl font-bold shadow-2xl shadow-purple-500/50 hover:scale-105 transition transform border-4 border-purple-400">
              <img
                src="/myProfile.jpg"
                alt="Sanjay Kumar Chaudhary"
                className="w-full h-full rounded-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span class="text-white">SK</span>';
                }}
              />
            </div>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Sanjay Kumar Chaudhary
          </h1>
          <p className="text-2xl sm:text-3xl text-purple-300 mb-8">Full Stack Developer</p>
          <p className="text-lg text-gray-300 mb-4">📍 Nepal</p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://github.com/Sanzay-Chaudhary"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-purple-600 transition transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjay-kumar-chaudhary-79315129a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-purple-600 transition transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:kctsanzu@gmail.com"
              className="p-3 bg-slate-800 rounded-full hover:bg-purple-600 transition transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition transform hover:scale-105 shadow-lg shadow-purple-500/50"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-xl">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm an IT graduate with a passion for building innovative solutions. As a hardworking and dedicated
              Full Stack Developer, I'm always ready to learn new things and embrace challenges. I believe in
              continuous growth and staying updated with the latest technologies to create impactful applications
              that solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          {/* Web Development Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-purple-300 flex items-center gap-2">
              <Code size={24} />
              Web Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {webDevSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center"
                >
                  <p className="text-lg font-semibold text-purple-300">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Development Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-purple-300 flex items-center gap-2">
              <Code size={24} />
              Mobile Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {mobileDevSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center"
                >
                  <p className="text-lg font-semibold text-purple-300">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-purple-300 flex items-center gap-2">
              <Briefcase size={24} />
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center"
                >
                  <p className="text-lg font-semibold text-purple-300">{tool}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-purple-300">{project.title}</h3>
                  <span className="px-3 py-1 bg-purple-600/30 rounded-full text-xs">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-700 rounded-full text-sm text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-gray-400 text-lg">
            🚀 More exciting projects coming soon!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Sanjay Kumar Chaudhary. Built with Next.js & Tailwind CSS
          </p>
          <p className="text-gray-500 mt-2">
            Always learning, always growing 🚀
          </p>
        </div>
      </footer>
    </div>
  );
}