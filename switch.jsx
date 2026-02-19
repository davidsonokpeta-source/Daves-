import React, { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { projects } from '../data/mock';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['All', 'Dashboard', 'Analysis'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transforming complex data into actionable insights through interactive dashboards and analysis
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
          <div className="flex items-center gap-2 text-gray-400">
            <Filter size={20} />
            <span className="font-medium">Filter:</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveFilter(category)}
              variant={activeFilter === category ? 'default' : 'outline'}
              className={`transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30'
                  : 'border-slate-700 text-gray-400 hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/10'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-slate-800/50 border-slate-700 overflow-hidden group hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-90' : 'opacity-60'
                  }`}
                ></div>
                
                {/* Overlay on Hover */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white group/btn">
                    View Details
                    <ExternalLink className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </Button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white border-0">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Tools Used */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="outline"
                      className="text-xs border-slate-600 text-gray-400"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>

                <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <div>
                    <div className="text-xs text-gray-500">Impact</div>
                    <div className="text-sm text-blue-400 font-semibold">{project.metrics.impact}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Timeframe</div>
                    <div className="text-sm text-gray-300 font-semibold">{project.metrics.timeframe}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;