import React from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="font-mono">Davidson Okpeta</span>
              <span className="text-blue-500">.</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Senior Data Analyst specializing in transforming complex data into actionable insights.
              Let's collaborate to unlock the full potential of your data.
            </p>
            <div className="flex gap-4">
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

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Skills', 'Projects'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <Mail size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-400 transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{personalInfo.phone}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Davidson Okpeta. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm text-center md:text-right">
              Built with <span className="text-blue-400">React</span> & <span className="text-blue-400">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;