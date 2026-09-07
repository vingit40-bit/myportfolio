import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { fadeInUp } from '../animations/variants';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Booking system', 'E-Commerce', 'Inventory System', 'Landing Page', 'Tracker'];

  const filteredProjects = activeFilter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.category === activeFilter);

  return (
    <>
      <style jsx>{`
        .projects-carousel-container {
          display: grid;
          place-items: center;
          padding: 2rem 0;
        }

        .projects-cards-list {
          display: grid;
          gap: 1rem;
          grid-auto-flow: column;
          grid-template-rows: 200px 1fr;
          width: 100%;
          list-style: none;
          min-height: 400px;
          overflow-x: auto;
          overscroll-behavior-x: contain;
          padding: 1rem;
          scroll-behavior: smooth;
          scroll-padding-inline: 1rem;
          scroll-snap-type: x mandatory;
          scrollbar-width: thin;
          scrollbar-color: rgba(8, 42, 123, 0.3) transparent;
        }

        .projects-cards-list::-webkit-scrollbar {
          height: 8px;
        }

        .projects-cards-list::-webkit-scrollbar-track {
          background: transparent;
        }

        .projects-cards-list::-webkit-scrollbar-thumb {
          background-color: rgba(8, 42, 123, 0.3);
          border-radius: 4px;
        }

        .project-card {
          scroll-snap-align: start;
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          display: grid;
          grid-row: 1/-1;
          grid-template-rows: subgrid;
          padding: 0.75rem;
          width: min(75cqi, 400px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
        }

        .project-visual {
          border-radius: 0.75rem;
          overflow: hidden;
          height: 192px;
        }

        .project-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .project-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.05);
        }

        .project-content {
          display: grid;
          align-content: space-between;
          padding: 1rem;
          gap: 1rem;
          color: white;
        }

        .project-content-wrapper {
          display: grid;
          gap: 0.75rem;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1.4;
          color: white;
        }

        .project-desc {
          font-size: 0.875rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .tech-badge {
          padding: 0.25rem 0.5rem;
          font-size: 0.75rem;
          font-weight: 500;
          background-color: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.8);
          border-radius: 0.25rem;
        }

        .project-link {
          font-size: 0.875rem;
          font-weight: 600;
          color: #082a7b;
          text-decoration: none;
          display: flex;
          gap: 0.5rem;
          align-items: center;
          transition: color 0.2s ease;
        }

        .project-link:hover {
          color: #1e40af;
        }

        @media (min-width: 768px) {
          .projects-cards-list {
            padding: 2rem;
            scroll-padding-inline: 2rem;
          }

          .project-card {
            width: min(60cqi, 450px);
          }
        }
      `}</style>
      
      <section id="projects" className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
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

            <motion.div variants={fadeInUp} className="projects-carousel-container">
              <ul className="projects-cards-list">
                {filteredProjects.map((project) => (
                  <li key={project.id} className="project-card">
                    <div className="project-visual">
                      {project.image && !project.image.includes('placeholder') ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project-img"
                        />
                      ) : (
                        <div className="project-placeholder">
                          <span className="text-4xl font-black text-white/20">{project.title[0]}</span>
                        </div>
                      )}
                    </div>
                    <div className="project-content">
                      <div className="project-content-wrapper">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-desc">{project.description}</p>
                        {project.techStack && (
                          <div className="project-tech-stack">
                            {project.techStack.map((tech, index) => (
                              <span key={index} className="tech-badge">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <a
                        href={project.demo && !project.demo.toLowerCase().includes('not available') ? project.demo : project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        {project.demo && !project.demo.toLowerCase().includes('not available') ? 'Visit Project' : 'View Code'}
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;

