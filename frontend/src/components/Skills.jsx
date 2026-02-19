import React from 'react';
import { Database, BarChart3, PieChart, FileSpreadsheet } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { skills } from '../data/mock';

const iconMap = {
  SQL: Database,
  Tableau: BarChart3,
  'Power BI': PieChart,
  Excel: FileSpreadsheet
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mastering the tools and technologies that power data-driven insights
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill.name];
            return (
              <Card
                key={skill.id}
                className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 group p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                      {IconComponent && <IconComponent className="text-blue-400" size={24} />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <Badge variant="outline" className="mt-1 text-xs border-blue-500/30 text-blue-400">
                        {skill.category}
                      </Badge>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4">{skill.description}</p>

                {/* Proficiency Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-mono">Proficiency</span>
                    <span className="text-blue-400 font-mono font-bold">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.proficiency}%`,
                        animation: `fillBar 1.5s ease-out ${index * 100}ms forwards`
                      }}
                    ></div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Tools Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl text-gray-400 mb-6">Also proficient in:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['R', 'DAX', 'ETL', 'AWS', 'Git', 'Jira', 'Agile'].map((tool) => (
              <Badge
                key={tool}
                className="bg-slate-800 text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 border border-slate-700 hover:border-blue-500/30 px-4 py-2 transition-all duration-300 cursor-default"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;