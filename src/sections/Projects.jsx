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
          --carousel-duration: 40s;
          --carousel-item-gap: 1rem;
          position: relative;
          width: 100%;
          height: 450px;
          list-style: none;
          overflow: clip;
          padding: 1rem;
          mask-image: linear-gradient(to right, transparent, black 10% 90%, transparent);
        }

        .project-card {
          position: absolute;
          top: 1rem;
          left: calc(100% + var(--carousel-item-gap));
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          display: grid;
          grid-template-rows: 192px auto;
          gap: 0.25rem;
          padding: 0.75rem;
          width: min(75cqi, 400px);
          height: 418px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: projects-marquee var(--carousel-duration) linear infinite;
          animation-delay: calc(var(--carousel-duration) / var(--items) * var(--index) * -1);
          will-change: transform;
        }

        .projects-cards-list:hover .project-card,
        .projects-cards-list:focus-within .project-card {
          animation-play-state: paused;
        }

        .project-card:only-child {
          left: 50%;
          animation: none;
          transform: translateX(-50%);
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

        @keyframes projects-marquee {
          100% {
            transform: translateX(calc((var(--items) * (min(75cqi, 400px) + var(--carousel-item-gap))) * -1));
          }
        }

        @media (min-width: 768px) {
          .projects-cards-list {
            --carousel-duration: 30s;
            padding: 2rem;
          }

          .project-card {
            top: 2rem;
            width: min(60cqi, 450px);
          }

          @keyframes projects-marquee {
            100% {
              transform: translateX(calc((var(--items) * (min(60cqi, 450px) + var(--carousel-item-gap))) * -1));
            }
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
              <ul
                className="projects-cards-list"
                style={{ '--items': filteredProjects.length }}
              >
                {filteredProjects.map((project, index) => (
                  <li
                    key={project.id}
                    className="project-card"
                    style={{ '--index': index }}
                  >
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

