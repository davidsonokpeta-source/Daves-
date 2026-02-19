import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, Linkedin, Github, Mail, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo, stats } from '../data/mock';

const Hero = () => {
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        setAnimatedStats((prev) => {
          const newStats = [...prev];
          newStats[index] = Math.min(Math.round(increment * currentStep), stat.value);
          return newStats;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
                {personalInfo.title}
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                {personalInfo.name}
              </span>
            </h1>

            <h2 className="text-2xl lg:text-3xl text-gray-300 font-light">
              {personalInfo.tagline}
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              {personalInfo.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
              >
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-blue-500/30 text-blue-400 hover:bg-blue-500/10 px-8 py-6 text-lg transition-all duration-300"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <Github size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-slate-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <Mail size={20} />
              </a>
              <a
                href={personalInfo.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <BookOpen size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative z-10">
              <div className="w-full max-w-lg mx-auto aspect-square rounded-2xl overflow-hidden border-4 border-blue-500/20 shadow-2xl shadow-blue-500/20">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-20 border-t border-slate-800">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                {animatedStats[index]}{stat.suffix}
              </div>
              <div className="text-gray-400 mt-2 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;