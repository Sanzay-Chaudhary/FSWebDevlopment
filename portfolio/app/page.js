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
}
