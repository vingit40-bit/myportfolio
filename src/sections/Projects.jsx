import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { fadeInUp, staggerContainer } from '../animations/variants';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Booking system', 'E-Commerce', 'Inventory System', 'Landing Page', 'Tracker'];

  const filteredProjects = activeFilter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center">
            <p className="section-kicker">Websites</p>
            <h2 className="section-title">Project Lab</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary">
              Explore my collection of web projects showcasing various technologies and solutions
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 text-sm font-bold rounded-full transition-all ${
                  activeFilter === filter
                    ? 'bg-primary text-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                variants={fadeInUp}
                className="resume-card group overflow-hidden flex flex-col min-h-[320px]"
                whileHover={{ y: -8 }}
              >
                <div className="relative h-48 overflow-hidden bg-white/[0.035]">
                  {project.image && !project.image.includes('placeholder') ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-white/20">
                      <span className="text-4xl font-black">{project.title[0]}</span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-xs font-black uppercase tracking-wider bg-primary/90 text-white rounded">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold leading-tight text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary line-clamp-3 flex-1">{project.description}</p>
                  
                  <a
                    href={project.demo && !project.demo.toLowerCase().includes('not available') ? project.demo : project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors group-hover:gap-3"
                  >
                    {project.demo && !project.demo.toLowerCase().includes('not available') ? 'Visit' : 'View Code'}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

